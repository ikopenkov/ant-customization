import { execSync } from 'child_process';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const SPECIAL_ALIASES = {
    grid: 'src/components/antd/Grid',
    radio: 'src/components/antd/Radio',
};

const COMPONENT_LIST_FILE_LOCATION = path.resolve(
    __dirname,
    '../src/components/antd/index.ts',
);

const ANT_LIB_LOCATION = path.resolve(__dirname, '../node_modules/antd/es');

function getComponentLocations() {
    let content = getComponentListFileContent();

    const namePathMap: Record<string, string> = {};

    const singleExportRegexp = /([\s\S]*)^export {[ \n][ ]*default as ([a-zA-Z]+)[ ,]\n?} from '(.+)';\n?$([\s\S]*)/m;
    while (singleExportRegexp.test(content)) {
        const name = content.replace(singleExportRegexp, '$2');
        const path = content.replace(singleExportRegexp, '$3');
        content = content.replace(singleExportRegexp, '$1$4');
        const importedFromAnt = path.indexOf('antd') === 0;
        if (!importedFromAnt) {
            namePathMap[name] = path;
        }
    }

    return namePathMap;
}

function getComponentListFileContent() {
    return fs.readFileSync(COMPONENT_LIST_FILE_LOCATION, {
        encoding: 'utf8',
    });
}

function makeAliasEntries() {
    const componentLocations = getComponentLocations();

    const absoluteAliases = Object.entries(componentLocations).map(
        ([name, path]) => {
            const alias = `antd/es/${_.kebabCase(name)}$`;
            return [alias, path];
        },
    );

    const relativeAliases = getAntRelativeImports()
        .replace(/^.*\.\.\/([\w-]+).*$/gm, '$1')
        .split('\n')
        .filter(Boolean)
        .map((fileName) => {
            const key = _.capitalize(_.camelCase(fileName));
            const path =
                SPECIAL_ALIASES[fileName as keyof typeof SPECIAL_ALIASES] ||
                componentLocations[key];
            return [`../${fileName}$`, path];
        })
        .filter(([, alias]) => alias);

    return Object.fromEntries([...absoluteAliases, ...relativeAliases]);
}

function getAntRelativeImports() {
    return execSync(
        `find ${ANT_LIB_LOCATION} -type f -name "*.js" -not \\( -path "*_util*" -or -path "*tests*" -or -path "*locale*" -or -path "*style*" \\) -exec grep -hr "^import .* from '\\.\\./[a-z\\-]*';$"  {} \\; | grep -v 'config-provider\\|time-picker\\|locale-provider'`,
    ).toString();
}

export const AntAliasesEs = makeAliasEntries();

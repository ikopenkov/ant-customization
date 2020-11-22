/**
 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 * declare here antd variables and additional variables
 *
 * antd variables should be declared in camel case,
 * it will be formatted in kebab case and used in less loader to overwrite antd styles
 *
 * !!!
 * Please, use full color codes (i.e. #eeeeee instead of #eee).
 * And don't use less variables as values (like `inputHoverBorderColor: '@primary-color'`).
 * Otherwise ColorHelper will not work properly.
 * !!!
 */

import _ from 'lodash';

export const CssColors = {
    primaryColor: '#2469F5',
    linkColor: '#2469F5',
    linkHoverColor: '#2469F5',

    // non antd
    defaultBg: '#f0f0f0',
};

export const CssSizes = {
    fontSizeSmall: '12px',
    fontSizeBase: '15px',

    // non antd
    basicHeight: '40px',
};

export const CssOtherVars = {
    linkDecoration: 'none',
    linkHoverDecoration: 'underline',

    // non antd
    disabledOpacity: '0.75',
};

export const CssVariables = {
    ...CssColors,
    ...CssSizes,
    ...CssOtherVars,
};

function getKebabVariables(variables: Record<string, string>) {
    const entriesKebab = Object.entries(variables).map(([key, value]) => {
        return [_.kebabCase(key), value];
    });
    return Object.fromEntries(entriesKebab);
}

export const CssVariablesKebabCase = getKebabVariables(CssVariables);

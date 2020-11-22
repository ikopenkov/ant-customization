// eslint-disable-next-line simple-import-sort/sort

const browserHasAllMethods =
    'Intl' in window &&
    'URL' in window &&
    'Map' in window &&
    'forEach' in NodeList.prototype &&
    'startsWith' in String.prototype &&
    'endsWith' in String.prototype &&
    'includes' in String.prototype &&
    'includes' in Array.prototype &&
    'assign' in Object &&
    'entries' in Object &&
    'keys' in Object &&
    'fromEntries' in Object;

export async function initialize() {
    if (!browserHasAllMethods) {
        await import('src/core/polyfills');
    }
}

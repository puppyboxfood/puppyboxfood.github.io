const getNavigator = () => typeof navigator !== 'undefined' && navigator
export const getLocale = () => (getNavigator().languages && getNavigator().languages.length) ? getNavigator().languages[0] : getNavigator().language

const getNavigator = () => typeof navigator !== 'undefined' && navigator

export const getLocale = () => {
  const navigator = getNavigator()

  if (navigator) {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language
  }

  return 'en-US'
}

export const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const formatText = (text: string) => {
  return text.trim().toLowerCase()
}

export const stringToRegExp = (expression: string) => {
  var terms = expression.split('*')

  var trailingWildcard = false

  var expr = ''
  for (var i = 0; i < terms.length; i++) {
    if (terms[i]) {
      if (i > 0 && terms[i - 1]) {
        expr += '.*'
      }
      trailingWildcard = false
      expr += terms[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    } else {
      trailingWildcard = true
      expr += '.*'
    }
  }

  if (!trailingWildcard) {
    expr += '.*'
  }

  return new RegExp('^' + expr + '$', 'i')
}

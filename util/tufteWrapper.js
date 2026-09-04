const configureParser = require('@tufte-markdown/parser')
const parse = configureParser({ react: false })

module.exports = {
  render: function(text, wrap = true) {
    let tmp = parse(String(text).replace(/\bils\b/g, 'il\u200Bs'))
    tmp = tmp.replace(/\u200B/g, '')

    if (wrap && (tmp.indexOf("<section>") == -1)) {
       return ('<section>' + tmp + '</section>');
    }
    else {
      return tmp;
    }
  },
  
  renderInline: function(text) {
    let tmp = parse(String(text).replace(/\bils\b/g, 'il\u200Bs'))
    tmp = tmp.replace(/\u200B/g, '')

    return tmp.replace('<p>', '').replace('</p>', '');
  }
}

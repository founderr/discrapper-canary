var t = '\uD800-\uDFFF',
    n = '\\u2700-\\u27bf',
    r = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    i = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    a = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    s = "['\u2019]",
    o = '[' + a + ']',
    l = '[' + r + ']',
    u = '[^' + t + a + '\\d+' + n + r + i + ']',
    c = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    d = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    f = '[' + i + ']',
    _ = '(?:' + l + '|' + u + ')',
    p = '(?:' + f + '|' + u + ')',
    h = '(?:' + s + '(?:d|ll|m|re|s|t|ve))?',
    m = '(?:' + s + '(?:D|LL|M|RE|S|T|VE))?',
    g = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\uD83C[\uDFFB-\uDFFF])?',
    E = '[\\ufe0e\\ufe0f]?',
    v = '(?:\\u200d(?:' + ['[^' + t + ']', c, d].join('|') + ')' + E + g + ')*',
    I = '(?:' + ['[' + n + ']', c, d].join('|') + ')' + (E + g + v),
    b = RegExp([f + '?' + l + '+' + h + '(?=' + [o, f, '$'].join('|') + ')', p + '+' + m + '(?=' + [o, f + _, '$'].join('|') + ')', f + '?' + _ + '+' + h, f + '+' + m, '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', '\\d+', I].join('|'), 'g');
e.exports = function (e) {
    return e.match(b) || [];
};

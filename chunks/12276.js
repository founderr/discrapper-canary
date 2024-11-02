var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    r = '[^' + t + ']',
    s = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    o = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    a = '(?:' + n + '|' + i + ')?',
    l = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [r, s, o].join('|') + ')' + l + a + ')*',
    d = RegExp(i + '(?=' + i + ')|' + ('(?:' + [r + n + '?', n, s, o, '[' + t + ']'].join('|') + ')') + (l + a + c), 'g');
e.exports = function (e) {
    return e.match(d) || [];
};

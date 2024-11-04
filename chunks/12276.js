var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    r = '[^' + t + ']',
    s = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    a = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    l = '(?:' + n + '|' + i + ')?',
    o = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [r, s, a].join('|') + ')' + o + l + ')*',
    d = RegExp(i + '(?=' + i + ')|' + ('(?:' + [r + n + '?', n, s, a, '[' + t + ']'].join('|') + ')') + (o + l + c), 'g');
e.exports = function (e) {
    return e.match(d) || [];
};

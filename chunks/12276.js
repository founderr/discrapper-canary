var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    s = '[^' + t + ']',
    a = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    r = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    o = '(?:' + n + '|' + i + ')?',
    l = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [s, a, r].join('|') + ')' + l + o + ')*',
    d = RegExp(i + '(?=' + i + ')|' + ('(?:' + [s + n + '?', n, a, r, '[' + t + ']'].join('|') + ')') + (l + o + c), 'g');
e.exports = function (e) {
    return e.match(d) || [];
};

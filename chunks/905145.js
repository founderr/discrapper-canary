var e = n(581031),
    o = Error,
    i = e(''.replace),
    u = String(o('zxcasd').stack),
    c = /\n\s*at [^:]*:[^\n]*/,
    a = c.test(u);
t.exports = function (t, r) {
    if (a && 'string' == typeof t && !o.prepareStackTrace) for (; r--; ) t = i(t, c, '');
    return t;
};

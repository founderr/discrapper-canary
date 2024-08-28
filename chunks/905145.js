var n = r(581031),
    a = Error,
    o = n(''.replace),
    i = String(a('zxcasd').stack),
    _ = /\n\s*at [^:]*:[^\n]*/,
    E = _.test(i);
e.exports = function (e, t) {
    if (E && 'string' == typeof e && !a.prepareStackTrace) for (; t--; ) e = o(e, _, '');
    return e;
};

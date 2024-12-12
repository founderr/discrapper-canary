var i = r(290677),
    a = r(158698),
    s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
function l(e, n) {
    if (i(e)) return !1;
    var r = typeof e;
    return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || a(e)) || o.test(e) || !s.test(e) || (null != n && e in Object(n));
}
e.exports = l;

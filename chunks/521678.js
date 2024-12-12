var i = r(175056),
    a = r(906024),
    s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
function l(e, n) {
    if ((0, i.Z)(e)) return !1;
    var r = typeof e;
    return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, a.Z)(e)) || o.test(e) || !s.test(e) || (null != n && e in Object(n));
}
n.Z = l;

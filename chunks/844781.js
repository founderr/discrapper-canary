var n = r(402428),
    a = r(42848),
    _ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
e.exports = function (e, t) {
    if (n(e)) return !1;
    var r = typeof e;
    return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || a(e)) || o.test(e) || !_.test(e) || (null != t && e in Object(t));
};

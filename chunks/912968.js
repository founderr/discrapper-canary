var r = n(484155),
    i = n(841566),
    a = n(290677),
    s = n(551023),
    o = n(682653),
    l = n(454745),
    u = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = a(e),
        c = !n && i(e),
        d = !n && !c && s(e),
        f = !n && !c && !d && l(e),
        _ = n || c || d || f,
        h = _ ? r(e.length, String) : [],
        p = h.length;
    for (var m in e) (t || u.call(e, m)) && !(_ && ('length' == m || (d && ('offset' == m || 'parent' == m)) || (f && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || o(m, p))) && h.push(m);
    return h;
};

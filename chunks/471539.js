var r = n(627202),
    i = n(256098),
    a = n(730179),
    o = Math.max,
    s = Math.min;
function l(e, t, n) {
    var l = null == e ? 0 : e.length;
    if (!l) return -1;
    var u = l - 1;
    return void 0 !== n && ((u = a(n)), (u = n < 0 ? o(l + u, 0) : s(u, l - 1))), r(e, i(t, 3), u, !0);
}
e.exports = l;

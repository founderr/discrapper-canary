var i = r(627202),
    a = r(256098),
    s = r(730179),
    o = Math.max,
    l = Math.min;
function u(e, n, r) {
    var u = null == e ? 0 : e.length;
    if (!u) return -1;
    var c = u - 1;
    return void 0 !== r && ((c = s(r)), (c = r < 0 ? o(u + c, 0) : l(c, u - 1))), i(e, a(n, 3), c, !0);
}
e.exports = u;

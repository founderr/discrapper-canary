r.d(n, {
    Bw: function () {
        return o;
    },
    px: function () {
        return l;
    },
    rY: function () {
        return s;
    }
});
let i = {},
    a = null;
function s(e) {
    var n;
    let r = null !== (n = i[e]) && void 0 !== n ? n : 0;
    0 === r && (null == a || a(e, !0)), (i[e] = r + 1);
}
function o(e) {
    i[e]--, 0 === i[e] && (null == a || a(e, !1));
}
function l(e) {
    a = null != e ? e : null;
}

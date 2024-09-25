var r = n(706178);
(e.exports = I), (I.simpleSieve = p), (I.fermatTest = m);
var i = n(814033),
    a = new i(24),
    o = new (n(687363))(),
    s = new i(1),
    l = new i(2),
    u = new i(5);
new i(16), new i(8);
var c = new i(10),
    d = new i(3);
new i(7);
var _ = new i(11),
    E = new i(4);
new i(12);
var f = null;
function h() {
    if (null !== f) return f;
    var e = 1048576,
        t = [];
    t[0] = 2;
    for (var n = 1, r = 3; r < e; r += 2) {
        for (var i = Math.ceil(Math.sqrt(r)), a = 0; a < n && t[a] <= i && r % t[a] != 0; a++);
        (n === a || !(t[a] <= i)) && (t[n++] = r);
    }
    return (f = t), t;
}
function p(e) {
    for (var t = h(), n = 0; n < t.length; n++)
        if (0 === e.modn(t[n])) {
            if (0 !== e.cmpn(t[n])) return !1;
            break;
        }
    return !0;
}
function m(e) {
    var t = i.mont(e);
    return 0 === l.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
}
function I(e, t) {
    var n, f;
    if (e < 16) return 2 === t || 5 === t ? new i([140, 123]) : new i([140, 39]);
    for (t = new i(t); ; ) {
        for (n = new i(r(Math.ceil(e / 8))); n.bitLength() > e; ) n.ishrn(1);
        if ((n.isEven() && n.iadd(s), !n.testn(1) && n.iadd(l), t.cmp(l))) {
            if (!t.cmp(u)) for (; n.mod(c).cmp(d); ) n.iadd(E);
        } else for (; n.mod(a).cmp(_); ) n.iadd(E);
        if (p((f = n.shrn(1))) && p(n) && m(f) && m(n) && o.test(f) && o.test(n)) return n;
    }
}

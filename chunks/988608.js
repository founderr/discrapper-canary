var i = r(706178);
(e.exports = v), (v.simpleSieve = g), (v.fermatTest = E);
var a = r(814033),
    s = new a(24),
    o = new (r(687363))(),
    l = new a(1),
    u = new a(2),
    c = new a(5);
new a(16), new a(8);
var d = new a(10),
    f = new a(3);
new a(7);
var _ = new a(11),
    h = new a(4);
new a(12);
var p = null;
function m() {
    if (null !== p) return p;
    var e = 1048576,
        n = [];
    n[0] = 2;
    for (var r = 1, i = 3; i < e; i += 2) {
        for (var a = Math.ceil(Math.sqrt(i)), s = 0; s < r && n[s] <= a && i % n[s] != 0; s++);
        (r === s || !(n[s] <= a)) && (n[r++] = i);
    }
    return (p = n), n;
}
function g(e) {
    for (var n = m(), r = 0; r < n.length; r++)
        if (0 === e.modn(n[r])) {
            if (0 !== e.cmpn(n[r])) return !1;
            break;
        }
    return !0;
}
function E(e) {
    var n = a.mont(e);
    return 0 === u.toRed(n).redPow(e.subn(1)).fromRed().cmpn(1);
}
function v(e, n) {
    var r, p;
    if (e < 16) return 2 === n || 5 === n ? new a([140, 123]) : new a([140, 39]);
    for (n = new a(n); ; ) {
        for (r = new a(i(Math.ceil(e / 8))); r.bitLength() > e; ) r.ishrn(1);
        if ((r.isEven() && r.iadd(l), !r.testn(1) && r.iadd(u), n.cmp(u))) {
            if (!n.cmp(c)) for (; r.mod(d).cmp(f); ) r.iadd(h);
        } else for (; r.mod(s).cmp(_); ) r.iadd(h);
        if (g((p = r.shrn(1))) && g(r) && E(p) && E(r) && o.test(p) && o.test(r)) return r;
    }
}

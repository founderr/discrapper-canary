var r = n(706627),
    i = n(885365),
    a = n(67948),
    o = 'Expected a function',
    s = Math.max,
    l = Math.min;
function u(e, t, n) {
    var u,
        c,
        d,
        _,
        E,
        f,
        h = 0,
        p = !1,
        m = !1,
        I = !0;
    if ('function' != typeof e) throw TypeError(o);
    function T(t) {
        var n = u,
            r = c;
        return (u = c = void 0), (h = t), (_ = e.apply(r, n));
    }
    function g(e) {
        return (h = e), (E = setTimeout(v, t)), p ? T(e) : _;
    }
    function S(e) {
        var n = e - f,
            r = e - h,
            i = t - n;
        return m ? l(i, d - r) : i;
    }
    function A(e) {
        var n = e - f,
            r = e - h;
        return void 0 === f || n >= t || n < 0 || (m && r >= d);
    }
    function v() {
        var e = i();
        if (A(e)) return N(e);
        E = setTimeout(v, S(e));
    }
    function N(e) {
        return ((E = void 0), I && u) ? T(e) : ((u = c = void 0), _);
    }
    function O() {
        void 0 !== E && clearTimeout(E), (h = 0), (u = f = c = E = void 0);
    }
    function R() {
        return void 0 === E ? _ : N(i());
    }
    function C() {
        var e = i(),
            n = A(e);
        if (((u = arguments), (c = this), (f = e), n)) {
            if (void 0 === E) return g(f);
            if (m) return clearTimeout(E), (E = setTimeout(v, t)), T(f);
        }
        return void 0 === E && (E = setTimeout(v, t)), _;
    }
    return (t = a(t) || 0), r(n) && ((p = !!n.leading), (d = (m = 'maxWait' in n) ? s(a(n.maxWait) || 0, t) : d), (I = 'trailing' in n ? !!n.trailing : I)), (C.cancel = O), (C.flush = R), C;
}
e.exports = u;

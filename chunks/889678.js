var i = r(706627),
    a = r(885365),
    s = r(67948),
    o = 'Expected a function',
    l = Math.max,
    u = Math.min;
function c(e, n, r) {
    var c,
        d,
        f,
        _,
        h,
        p,
        m = 0,
        g = !1,
        E = !1,
        v = !0;
    if ('function' != typeof e) throw TypeError(o);
    function I(n) {
        var r = c,
            i = d;
        return (c = d = void 0), (m = n), (_ = e.apply(i, r));
    }
    function T(e) {
        return (m = e), (h = setTimeout(S, n)), g ? I(e) : _;
    }
    function b(e) {
        var r = e - p,
            i = e - m,
            a = n - r;
        return E ? u(a, f - i) : a;
    }
    function y(e) {
        var r = e - p,
            i = e - m;
        return void 0 === p || r >= n || r < 0 || (E && i >= f);
    }
    function S() {
        var e = a();
        if (y(e)) return A(e);
        h = setTimeout(S, b(e));
    }
    function A(e) {
        return ((h = void 0), v && c) ? I(e) : ((c = d = void 0), _);
    }
    function N() {
        void 0 !== h && clearTimeout(h), (m = 0), (c = p = d = h = void 0);
    }
    function C() {
        return void 0 === h ? _ : A(a());
    }
    function R() {
        var e = a(),
            r = y(e);
        if (((c = arguments), (d = this), (p = e), r)) {
            if (void 0 === h) return T(p);
            if (E) return clearTimeout(h), (h = setTimeout(S, n)), I(p);
        }
        return void 0 === h && (h = setTimeout(S, n)), _;
    }
    return (n = s(n) || 0), i(r) && ((g = !!r.leading), (f = (E = 'maxWait' in r) ? l(s(r.maxWait) || 0, n) : f), (v = 'trailing' in r ? !!r.trailing : v)), (R.cancel = N), (R.flush = C), R;
}
e.exports = c;

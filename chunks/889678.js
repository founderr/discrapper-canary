var r = n(706627),
    i = n(885365),
    a = n(67948),
    s = Math.max,
    o = Math.min;
e.exports = function (e, t, n) {
    var l,
        u,
        c,
        d,
        f,
        _,
        h = 0,
        p = !1,
        m = !1,
        g = !0;
    if ('function' != typeof e) throw TypeError('Expected a function');
    function E(t) {
        var n = l,
            r = u;
        return (l = u = void 0), (h = t), (d = e.apply(r, n));
    }
    (t = a(t) || 0), r(n) && ((p = !!n.leading), (c = (m = 'maxWait' in n) ? s(a(n.maxWait) || 0, t) : c), (g = 'trailing' in n ? !!n.trailing : g));
    function v(e) {
        var n = e - _,
            r = e - h;
        return void 0 === _ || n >= t || n < 0 || (m && r >= c);
    }
    function I() {
        var e,
            n,
            r,
            a,
            s = i();
        if (v(s)) return S(s);
        f = setTimeout(I, ((n = (e = s) - _), (r = e - h), (a = t - n), m ? o(a, c - r) : a));
    }
    function S(e) {
        return ((f = void 0), g && l) ? E(e) : ((l = u = void 0), d);
    }
    function b() {
        var e,
            n = i(),
            r = v(n);
        if (((l = arguments), (u = this), (_ = n), r)) {
            if (void 0 === f) {
                return (h = e = _), (f = setTimeout(I, t)), p ? E(e) : d;
            }
            if (m) return clearTimeout(f), (f = setTimeout(I, t)), E(_);
        }
        return void 0 === f && (f = setTimeout(I, t)), d;
    }
    return (
        (b.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (l = _ = u = f = void 0);
        }),
        (b.flush = function () {
            return void 0 === f ? d : S(i());
        }),
        b
    );
};

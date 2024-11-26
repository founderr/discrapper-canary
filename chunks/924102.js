var r = n(675717),
    i = n(595250),
    a = n(220955),
    s = Math.max,
    o = Math.min;
t.Z = function (e, t, n) {
    var l,
        u,
        c,
        d,
        f,
        _,
        p = 0,
        h = !1,
        m = !1,
        g = !0;
    if ('function' != typeof e) throw TypeError('Expected a function');
    function E(t) {
        var n = l,
            r = u;
        return (l = u = void 0), (p = t), (d = e.apply(r, n));
    }
    (t = (0, a.Z)(t) || 0), (0, r.Z)(n) && ((h = !!n.leading), (c = (m = 'maxWait' in n) ? s((0, a.Z)(n.maxWait) || 0, t) : c), (g = 'trailing' in n ? !!n.trailing : g));
    function v(e) {
        var n = e - _,
            r = e - p;
        return void 0 === _ || n >= t || n < 0 || (m && r >= c);
    }
    function I() {
        var e,
            n,
            r,
            a,
            s = (0, i.Z)();
        if (v(s)) return T(s);
        f = setTimeout(I, ((n = (e = s) - _), (r = e - p), (a = t - n), m ? o(a, c - r) : a));
    }
    function T(e) {
        return ((f = void 0), g && l) ? E(e) : ((l = u = void 0), d);
    }
    function b() {
        var e,
            n = (0, i.Z)(),
            r = v(n);
        if (((l = arguments), (u = this), (_ = n), r)) {
            if (void 0 === f) {
                return (p = e = _), (f = setTimeout(I, t)), h ? E(e) : d;
            }
            if (m) return clearTimeout(f), (f = setTimeout(I, t)), E(_);
        }
        return void 0 === f && (f = setTimeout(I, t)), d;
    }
    return (
        (b.cancel = function () {
            void 0 !== f && clearTimeout(f), (p = 0), (l = _ = u = f = void 0);
        }),
        (b.flush = function () {
            return void 0 === f ? d : T((0, i.Z)());
        }),
        b
    );
};

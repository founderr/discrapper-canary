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
    (t = (0, a.Z)(t) || 0), (0, r.Z)(n) && ((p = !!n.leading), (c = (m = 'maxWait' in n) ? s((0, a.Z)(n.maxWait) || 0, t) : c), (g = 'trailing' in n ? !!n.trailing : g));
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
            s = (0, i.Z)();
        if (v(s)) return S(s);
        f = setTimeout(I, ((n = (e = s) - _), (r = e - h), (a = t - n), m ? o(a, c - r) : a));
    }
    function S(e) {
        return ((f = void 0), g && l) ? E(e) : ((l = u = void 0), d);
    }
    function T() {
        var e,
            n = (0, i.Z)(),
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
        (T.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (l = _ = u = f = void 0);
        }),
        (T.flush = function () {
            return void 0 === f ? d : S((0, i.Z)());
        }),
        T
    );
};

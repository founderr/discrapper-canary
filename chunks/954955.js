var e = n(661233),
    o = n(586769),
    i = n(675769),
    u = Math.max,
    c = Math.min;
t.exports = function (t, r, n) {
    var a,
        f,
        s,
        p,
        l,
        v,
        h = 0,
        y = !1,
        d = !1,
        g = !0;
    if ('function' != typeof t) throw TypeError('Expected a function');
    function x(r) {
        var n = a,
            e = f;
        return (a = f = void 0), (h = r), (p = t.apply(e, n));
    }
    (r = i(r) || 0), e(n) && ((y = !!n.leading), (s = (d = 'maxWait' in n) ? u(i(n.maxWait) || 0, r) : s), (g = 'trailing' in n ? !!n.trailing : g));
    function b(t) {
        var n = t - v,
            e = t - h;
        return void 0 === v || n >= r || n < 0 || (d && e >= s);
    }
    function m() {
        var t,
            n,
            e,
            i,
            u = o();
        if (b(u)) return E(u);
        l = setTimeout(m, ((n = (t = u) - v), (e = t - h), (i = r - n), d ? c(i, s - e) : i));
    }
    function E(t) {
        return ((l = void 0), g && a) ? x(t) : ((a = f = void 0), p);
    }
    function j() {
        var t,
            n = o(),
            e = b(n);
        if (((a = arguments), (f = this), (v = n), e)) {
            if (void 0 === l) {
                return (h = t = v), (l = setTimeout(m, r)), y ? x(t) : p;
            }
            if (d) return clearTimeout(l), (l = setTimeout(m, r)), x(v);
        }
        return void 0 === l && (l = setTimeout(m, r)), p;
    }
    return (
        (j.cancel = function () {
            void 0 !== l && clearTimeout(l), (h = 0), (a = v = f = l = void 0);
        }),
        (j.flush = function () {
            return void 0 === l ? p : E(o());
        }),
        j
    );
};

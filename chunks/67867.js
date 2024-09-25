var r = n(668530),
    i = n(156741),
    a = n(43740),
    o = n(735471),
    s = n(65007).f,
    l = n(902538),
    u = n(974802),
    c = n(476508),
    d = n(948634),
    _ = n(141603),
    E = function (e) {
        var t = function (n, r, a) {
            if (this instanceof t) {
                switch (arguments.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(n);
                    case 2:
                        return new e(n, r);
                }
                return new e(n, r, a);
            }
            return i(e, this, arguments);
        };
        return (t.prototype = e.prototype), t;
    };
e.exports = function (e, t) {
    var n,
        i,
        f,
        h,
        p,
        m,
        I,
        T,
        g,
        S = e.target,
        A = e.global,
        v = e.stat,
        N = e.proto,
        O = A ? r : v ? r[S] : (r[S] || {}).prototype,
        R = A ? u : u[S] || d(u, S, {})[S],
        C = R.prototype;
    for (h in t) (i = !(n = l(A ? h : S + (v ? '.' : '#') + h, e.forced)) && O && _(O, h)), (m = R[h]), i && (I = e.dontCallGetSet ? (g = s(O, h)) && g.value : O[h]), (p = i && I ? I : t[h]), (!i || typeof m != typeof p) && ((T = e.bind && i ? c(p, r) : e.wrap && i ? E(p) : N && o(p) ? a(p) : p), (e.sham || (p && p.sham) || (m && m.sham)) && d(T, 'sham', !0), d(R, h, T), N && (!_(u, (f = S + 'Prototype')) && d(u, f, {}), d(u[f], h, p), e.real && C && (n || !C[h]) && d(C, h, p)));
};

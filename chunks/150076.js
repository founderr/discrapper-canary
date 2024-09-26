n.d(t, {
    h: function () {
        return _;
    }
});
var r = n(707908),
    i = n(695170),
    a = n(805817),
    o = n(812975),
    s = n(347874),
    l = n(686942),
    u = n(829105),
    c = n(613607),
    d = n(68808);
function _(e, t) {
    var n = t.dtstart,
        o = t.freq,
        s = t.interval,
        u = t.until,
        _ = t.bysetpos,
        E = t.count;
    if (0 === E || 0 === s) return h(e);
    var I = d.o.fromDate(n),
        T = new a.Z(t);
    T.rebuild(I.year, I.month);
    for (var g = m(T, I, t); ; ) {
        var S = T.getdayset(o)(I.year, I.month, I.day),
            A = S[0],
            v = S[1],
            N = S[2],
            O = p(A, v, N, T, t);
        if ((0, l.Dw)(_)) {
            for (var R = (0, c.f)(_, g, v, N, T, A), C = 0; C < R.length; C++) {
                var y = R[C];
                if (u && y > u) return h(e);
                if (y >= n) {
                    var L = f(y, t);
                    if (!e.accept(L) || (E && !--E)) return h(e);
                }
            }
        } else
            for (var C = v; C < N; C++) {
                var b = A[C];
                if (!!(0, l.EN)(b))
                    for (var D = (0, i.zU)(T.yearordinal + b), M = 0; M < g.length; M++) {
                        var P = g[M],
                            y = (0, i.$e)(D, P);
                        if (u && y > u) return h(e);
                        if (y >= n) {
                            var L = f(y, t);
                            if (!e.accept(L) || (E && !--E)) return h(e);
                        }
                    }
            }
        if (0 === t.interval) return h(e);
        if ((I.add(t, O), I.year > i.VQ)) return h(e);
        !(0, r.e)(o) && (g = T.gettimeset(o)(I.hour, I.minute, I.second, 0)), T.rebuild(I.year, I.month);
    }
}
function E(e, t, n) {
    var r = n.bymonth,
        i = n.byweekno,
        a = n.byweekday,
        o = n.byeaster,
        s = n.bymonthday,
        u = n.bynmonthday,
        c = n.byyearday;
    return ((0, l.Dw)(r) && !(0, l.q9)(r, e.mmask[t])) || ((0, l.Dw)(i) && !e.wnomask[t]) || ((0, l.Dw)(a) && !(0, l.q9)(a, e.wdaymask[t])) || ((0, l.Dw)(e.nwdaymask) && !e.nwdaymask[t]) || (null !== o && !(0, l.q9)(e.eastermask, t)) || (((0, l.Dw)(s) || (0, l.Dw)(u)) && !(0, l.q9)(s, e.mdaymask[t]) && !(0, l.q9)(u, e.nmdaymask[t])) || ((0, l.Dw)(c) && ((t < e.yearlen && !(0, l.q9)(c, t + 1) && !(0, l.q9)(c, -e.yearlen + t)) || (t >= e.yearlen && !(0, l.q9)(c, t + 1 - e.yearlen) && !(0, l.q9)(c, -e.nextyearlen + t - e.yearlen))));
}
function f(e, t) {
    return new u.M(e, t.tzid).rezonedDate();
}
function h(e) {
    return e.getValue();
}
function p(e, t, n, r, i) {
    for (var a = !1, o = t; o < n; o++) {
        var s = e[o];
        (a = E(r, s, i)) && (e[s] = null);
    }
    return a;
}
function m(e, t, n) {
    var i = n.freq,
        a = n.byhour,
        u = n.byminute,
        c = n.bysecond;
    return (0, r.e)(i) ? (0, s.hl)(n) : (i >= o.Ci.HOURLY && (0, l.Dw)(a) && !(0, l.q9)(a, t.hour)) || (i >= o.Ci.MINUTELY && (0, l.Dw)(u) && !(0, l.q9)(u, t.minute)) || (i >= o.Ci.SECONDLY && (0, l.Dw)(c) && !(0, l.q9)(c, t.second)) ? [] : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond);
}

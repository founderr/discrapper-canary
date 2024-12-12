r.d(n, {
    h: function () {
        return _;
    }
});
var i = r(707908),
    a = r(695170),
    s = r(805817),
    o = r(812975),
    l = r(347874),
    u = r(686942),
    c = r(829105),
    d = r(613607),
    f = r(68808);
function _(e, n) {
    var r = n.dtstart,
        o = n.freq,
        l = n.interval,
        c = n.until,
        _ = n.bysetpos,
        h = n.count;
    if (0 === h || 0 === l) return m(e);
    var v = f.o.fromDate(r),
        I = new s.Z(n);
    I.rebuild(v.year, v.month);
    for (var T = E(I, v, n); ; ) {
        var b = I.getdayset(o)(v.year, v.month, v.day),
            y = b[0],
            S = b[1],
            A = b[2],
            N = g(y, S, A, I, n);
        if ((0, u.Dw)(_)) {
            for (var C = (0, d.f)(_, T, S, A, I, y), R = 0; R < C.length; R++) {
                var O = C[R];
                if (c && O > c) return m(e);
                if (O >= r) {
                    var D = p(O, n);
                    if (!e.accept(D) || (h && !--h)) return m(e);
                }
            }
        } else
            for (var R = S; R < A; R++) {
                var L = y[R];
                if (!!(0, u.EN)(L))
                    for (var x = (0, a.zU)(I.yearordinal + L), w = 0; w < T.length; w++) {
                        var P = T[w],
                            O = (0, a.$e)(x, P);
                        if (c && O > c) return m(e);
                        if (O >= r) {
                            var D = p(O, n);
                            if (!e.accept(D) || (h && !--h)) return m(e);
                        }
                    }
            }
        if (0 === n.interval) return m(e);
        if ((v.add(n, N), v.year > a.VQ)) return m(e);
        !(0, i.e)(o) && (T = I.gettimeset(o)(v.hour, v.minute, v.second, 0)), I.rebuild(v.year, v.month);
    }
}
function h(e, n, r) {
    var i = r.bymonth,
        a = r.byweekno,
        s = r.byweekday,
        o = r.byeaster,
        l = r.bymonthday,
        c = r.bynmonthday,
        d = r.byyearday;
    return ((0, u.Dw)(i) && !(0, u.q9)(i, e.mmask[n])) || ((0, u.Dw)(a) && !e.wnomask[n]) || ((0, u.Dw)(s) && !(0, u.q9)(s, e.wdaymask[n])) || ((0, u.Dw)(e.nwdaymask) && !e.nwdaymask[n]) || (null !== o && !(0, u.q9)(e.eastermask, n)) || (((0, u.Dw)(l) || (0, u.Dw)(c)) && !(0, u.q9)(l, e.mdaymask[n]) && !(0, u.q9)(c, e.nmdaymask[n])) || ((0, u.Dw)(d) && ((n < e.yearlen && !(0, u.q9)(d, n + 1) && !(0, u.q9)(d, -e.yearlen + n)) || (n >= e.yearlen && !(0, u.q9)(d, n + 1 - e.yearlen) && !(0, u.q9)(d, -e.nextyearlen + n - e.yearlen))));
}
function p(e, n) {
    return new c.M(e, n.tzid).rezonedDate();
}
function m(e) {
    return e.getValue();
}
function g(e, n, r, i, a) {
    for (var s = !1, o = n; o < r; o++) {
        var l = e[o];
        (s = h(i, l, a)) && (e[l] = null);
    }
    return s;
}
function E(e, n, r) {
    var a = r.freq,
        s = r.byhour,
        c = r.byminute,
        d = r.bysecond;
    return (0, i.e)(a) ? (0, l.hl)(r) : (a >= o.Ci.HOURLY && (0, u.Dw)(s) && !(0, u.q9)(s, n.hour)) || (a >= o.Ci.MINUTELY && (0, u.Dw)(c) && !(0, u.q9)(c, n.minute)) || (a >= o.Ci.SECONDLY && (0, u.Dw)(d) && !(0, u.q9)(d, n.second)) ? [] : e.gettimeset(a)(n.hour, n.minute, n.second, n.millisecond);
}

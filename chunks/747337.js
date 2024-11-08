n.d(t, {
    h: function () {
        return o;
    }
});
var r = n(146150),
    i = n(695170),
    a = n(686942),
    s = n(603259);
function o(e, t) {
    var n,
        o,
        l = (0, i.t2)(e, 1, 1),
        u = (0, i.Eg)(e) ? 366 : 365,
        c = (0, i.Eg)(e + 1) ? 366 : 365,
        d = (0, i.fv)(l),
        f = (0, i.FO)(l),
        _ = (0, r.pi)(
            (0, r.pi)(
                {
                    yearlen: u,
                    nextyearlen: c,
                    yearordinal: d,
                    yearweekday: f
                },
                (function (e) {
                    var t = (0, i.Eg)(e) ? 366 : 365,
                        n = (0, i.t2)(e, 1, 1),
                        r = (0, i.FO)(n);
                    return 365 === t
                        ? {
                              mmask: s.RL,
                              mdaymask: s.qm,
                              nmdaymask: s.nB,
                              wdaymask: s.fV.slice(r),
                              mrange: s.sr
                          }
                        : {
                              mmask: s.h3,
                              mdaymask: s.fY,
                              nmdaymask: s.RP,
                              wdaymask: s.fV.slice(r),
                              mrange: s.Pi
                          };
                })(e)
            ),
            { wnomask: null }
        );
    if ((0, a.cS)(t.byweekno)) return _;
    _.wnomask = (0, a.rx)(0, u + 7);
    var h = (n = (0, a.Vy)(7 - f + t.wkst, 7));
    h >= 4 ? ((h = 0), (o = _.yearlen + (0, a.Vy)(f - t.wkst, 7))) : (o = u - h);
    for (var p = Math.floor(Math.floor(o / 7) + (0, a.Vy)(o, 7) / 4), m = 0; m < t.byweekno.length; m++) {
        var g = t.byweekno[m];
        if ((g < 0 && (g += p + 1), !!(g > 0 && g <= p))) {
            var E = void 0;
            g > 1 ? ((E = h + (g - 1) * 7), h !== n && (E -= 7 - n)) : (E = h);
            for (var v = 0; v < 7 && ((_.wnomask[E] = 1), E++, _.wdaymask[E] !== t.wkst); v++);
        }
    }
    if ((0, a.q9)(t.byweekno, 1)) {
        var E = h + 7 * p;
        if ((h !== n && (E -= 7 - n), E < u)) for (var m = 0; m < 7 && ((_.wnomask[E] = 1), (E += 1), _.wdaymask[E] !== t.wkst); m++);
    }
    if (h) {
        var I = void 0;
        if ((0, a.q9)(t.byweekno, -1)) I = -1;
        else {
            var S = (0, i.FO)((0, i.t2)(e - 1, 1, 1)),
                b = (0, a.Vy)(7 - S.valueOf() + t.wkst, 7),
                T = (0, i.Eg)(e - 1) ? 366 : 365,
                y = void 0;
            b >= 4 ? ((b = 0), (y = T + (0, a.Vy)(S - t.wkst, 7))) : (y = u - h), (I = Math.floor(52 + (0, a.Vy)(y, 7) / 4));
        }
        if ((0, a.q9)(t.byweekno, I)) for (var E = 0; E < h; E++) _.wnomask[E] = 1;
    }
    return _;
}

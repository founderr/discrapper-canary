r.d(n, {
    h: function () {
        return l;
    }
});
var i = r(146150),
    a = r(695170),
    s = r(686942),
    o = r(603259);
function l(e, n) {
    var r,
        o,
        l = (0, a.t2)(e, 1, 1),
        c = (0, a.Eg)(e) ? 366 : 365,
        d = (0, a.Eg)(e + 1) ? 366 : 365,
        f = (0, a.fv)(l),
        _ = (0, a.FO)(l),
        h = (0, i.pi)(
            (0, i.pi)(
                {
                    yearlen: c,
                    nextyearlen: d,
                    yearordinal: f,
                    yearweekday: _
                },
                u(e)
            ),
            { wnomask: null }
        );
    if ((0, s.cS)(n.byweekno)) return h;
    h.wnomask = (0, s.rx)(0, c + 7);
    var p = (r = (0, s.Vy)(7 - _ + n.wkst, 7));
    p >= 4 ? ((p = 0), (o = h.yearlen + (0, s.Vy)(_ - n.wkst, 7))) : (o = c - p);
    for (var m = Math.floor(Math.floor(o / 7) + (0, s.Vy)(o, 7) / 4), g = 0; g < n.byweekno.length; g++) {
        var E = n.byweekno[g];
        if ((E < 0 && (E += m + 1), !!(E > 0 && E <= m))) {
            var v = void 0;
            E > 1 ? ((v = p + (E - 1) * 7), p !== r && (v -= 7 - r)) : (v = p);
            for (var I = 0; I < 7 && ((h.wnomask[v] = 1), v++, h.wdaymask[v] !== n.wkst); I++);
        }
    }
    if ((0, s.q9)(n.byweekno, 1)) {
        var v = p + 7 * m;
        if ((p !== r && (v -= 7 - r), v < c)) for (var g = 0; g < 7 && ((h.wnomask[v] = 1), (v += 1), h.wdaymask[v] !== n.wkst); g++);
    }
    if (p) {
        var T = void 0;
        if ((0, s.q9)(n.byweekno, -1)) T = -1;
        else {
            var b = (0, a.FO)((0, a.t2)(e - 1, 1, 1)),
                y = (0, s.Vy)(7 - b.valueOf() + n.wkst, 7),
                S = (0, a.Eg)(e - 1) ? 366 : 365,
                A = void 0;
            y >= 4 ? ((y = 0), (A = S + (0, s.Vy)(b - n.wkst, 7))) : (A = c - p), (T = Math.floor(52 + (0, s.Vy)(A, 7) / 4));
        }
        if ((0, s.q9)(n.byweekno, T)) for (var v = 0; v < p; v++) h.wnomask[v] = 1;
    }
    return h;
}
function u(e) {
    var n = (0, a.Eg)(e) ? 366 : 365,
        r = (0, a.t2)(e, 1, 1),
        i = (0, a.FO)(r);
    return 365 === n
        ? {
              mmask: o.RL,
              mdaymask: o.qm,
              nmdaymask: o.nB,
              wdaymask: o.fV.slice(i),
              mrange: o.sr
          }
        : {
              mmask: o.h3,
              mdaymask: o.fY,
              nmdaymask: o.RP,
              wdaymask: o.fV.slice(i),
              mrange: o.Pi
          };
}

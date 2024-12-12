r.d(n, {
    D: function () {
        return s;
    }
});
var i = r(812975),
    a = r(686942);
function s(e, n, r, s, o, l) {
    var u = {
            lastyear: e,
            lastmonth: n,
            nwdaymask: []
        },
        c = [];
    if (l.freq === i.Ci.YEARLY) {
        if ((0, a.cS)(l.bymonth)) c = [[0, r]];
        else for (var d = 0; d < l.bymonth.length; d++) (n = l.bymonth[d]), c.push(s.slice(n - 1, n + 1));
    } else l.freq === i.Ci.MONTHLY && (c = [s.slice(n - 1, n + 1)]);
    if ((0, a.cS)(c)) return u;
    u.nwdaymask = (0, a.rx)(0, r);
    for (var d = 0; d < c.length; d++) {
        for (var f = c[d], _ = f[0], h = f[1] - 1, p = 0; p < l.bynweekday.length; p++) {
            var m = void 0,
                g = l.bynweekday[p],
                E = g[0],
                v = g[1];
            v < 0 ? ((m = h + (v + 1) * 7), (m -= (0, a.Vy)(o[m] - E, 7))) : ((m = _ + (v - 1) * 7), (m += (0, a.Vy)(7 - o[m] + E, 7))), _ <= m && m <= h && (u.nwdaymask[m] = 1);
        }
    }
    return u;
}

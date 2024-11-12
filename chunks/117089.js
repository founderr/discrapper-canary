n.d(t, {
    D: function () {
        return a;
    }
});
var r = n(812975),
    i = n(686942);
function a(e, t, n, a, s, o) {
    var l = {
            lastyear: e,
            lastmonth: t,
            nwdaymask: []
        },
        u = [];
    if (o.freq === r.Ci.YEARLY) {
        if ((0, i.cS)(o.bymonth)) u = [[0, n]];
        else for (var c = 0; c < o.bymonth.length; c++) (t = o.bymonth[c]), u.push(a.slice(t - 1, t + 1));
    } else o.freq === r.Ci.MONTHLY && (u = [a.slice(t - 1, t + 1)]);
    if ((0, i.cS)(u)) return l;
    l.nwdaymask = (0, i.rx)(0, n);
    for (var c = 0; c < u.length; c++) {
        for (var d = u[c], f = d[0], _ = d[1] - 1, p = 0; p < o.bynweekday.length; p++) {
            var h = void 0,
                m = o.bynweekday[p],
                g = m[0],
                E = m[1];
            E < 0 ? ((h = _ + (E + 1) * 7), (h -= (0, i.Vy)(s[h] - g, 7))) : ((h = f + (E - 1) * 7), (h += (0, i.Vy)(7 - s[h] + g, 7))), f <= h && h <= _ && (l.nwdaymask[h] = 1);
        }
    }
    return l;
}

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
        for (var d = u[c], f = d[0], _ = d[1] - 1, h = 0; h < o.bynweekday.length; h++) {
            var p = void 0,
                m = o.bynweekday[h],
                g = m[0],
                E = m[1];
            E < 0 ? ((p = _ + (E + 1) * 7), (p -= (0, i.Vy)(s[p] - g, 7))) : ((p = f + (E - 1) * 7), (p += (0, i.Vy)(7 - s[p] + g, 7))), f <= p && p <= _ && (l.nwdaymask[p] = 1);
        }
    }
    return l;
}

n.d(t, {
    ZP: function () {
        return f;
    },
    Zk: function () {
        return d;
    },
    d0: function () {
        return c;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(388032);
let s = 3600,
    o = 86400,
    l = 2592000,
    u = 31104000,
    c = () => ({
        minutes: a.t['XIGt+f'],
        hours: a.t.rhY1Rk,
        days: a.t.GBLpQ0,
        months: a.t.XzBNbW,
        years: a.t.I1E8p6
    }),
    d = () => ({
        minutes: a.t['GqQ/Y2'],
        hours: a.t.c5zfWV,
        days: a.t.amjnaG,
        months: a.t.SoON3d,
        years: a.t['12B3RU']
    });
function f(e) {
    let { since: t, getFormatter: n } = e;
    return (function (e) {
        let { seconds: t, getFormatter: n } = e,
            r = n(),
            i = '';
        return (i = t < 60 ? a.intl.formatToPlainString(r.minutes, { minutes: 1 }) : t < s ? a.intl.formatToPlainString(r.minutes, { minutes: Math.floor(t / 60) }) : t < o ? a.intl.formatToPlainString(r.hours, { hours: Math.floor(t / s) }) : t < l ? a.intl.formatToPlainString(r.days, { days: Math.floor(t / o) }) : t < u ? a.intl.formatToPlainString(r.months, { months: Math.floor(t / l) }) : a.intl.formatToPlainString(r.years, { years: Math.floor(t / u) }));
    })({
        seconds: i()().diff(i()(t), 's'),
        getFormatter: n
    });
}

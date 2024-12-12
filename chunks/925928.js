r.d(n, {
    ZP: function () {
        return p;
    },
    Zk: function () {
        return _;
    },
    d0: function () {
        return f;
    }
});
var i = r(913527),
    a = r.n(i),
    s = r(388032);
let o = 60,
    l = 3600,
    u = 86400,
    c = 2592000,
    d = 31104000,
    f = () => ({
        minutes: s.t['XIGt+f'],
        hours: s.t.rhY1Rk,
        days: s.t.GBLpQ0,
        months: s.t.XzBNbW,
        years: s.t.I1E8p6
    }),
    _ = () => ({
        minutes: s.t['GqQ/Y2'],
        hours: s.t.c5zfWV,
        days: s.t.amjnaG,
        months: s.t.SoON3d,
        years: s.t['12B3RU']
    });
function h(e) {
    let { seconds: n, getFormatter: r } = e,
        i = r(),
        a = '';
    return (a = n < o ? s.intl.formatToPlainString(i.minutes, { minutes: 1 }) : n < l ? s.intl.formatToPlainString(i.minutes, { minutes: Math.floor(n / o) }) : n < u ? s.intl.formatToPlainString(i.hours, { hours: Math.floor(n / l) }) : n < c ? s.intl.formatToPlainString(i.days, { days: Math.floor(n / u) }) : n < d ? s.intl.formatToPlainString(i.months, { months: Math.floor(n / c) }) : s.intl.formatToPlainString(i.years, { years: Math.floor(n / d) }));
}
function p(e) {
    let { since: n, getFormatter: r } = e;
    return h({
        seconds: a()().diff(a()(n), 's'),
        getFormatter: r
    });
}

n.d(t, {
    ZP: function () {
        return f;
    },
    Zk: function () {
        return _;
    },
    d0: function () {
        return d;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(689938);
let o = 60,
    s = 3600,
    l = 86400,
    u = 2592000,
    c = 31104000,
    d = () => ({
        minutes: a.Z.Messages.DURATION_MINUTES_SHORT,
        hours: a.Z.Messages.DURATION_HOURS_SHORT,
        days: a.Z.Messages.DURATION_DAYS_SHORT,
        months: a.Z.Messages.DURATION_MONTHS_SHORT,
        years: a.Z.Messages.DURATION_YEARS_SHORT
    }),
    _ = () => ({
        minutes: a.Z.Messages.DURATION_MINUTES_AGO,
        hours: a.Z.Messages.DURATION_HOURS_AGO,
        days: a.Z.Messages.DURATION_DAYS_AGO,
        months: a.Z.Messages.DURATION_MONTHS_AGO,
        years: a.Z.Messages.DURATION_YEARS_AGO
    });
function E(e) {
    let { seconds: t, getFormatter: n } = e,
        r = n(),
        i = '';
    return (i = t < o ? r.minutes.format({ minutes: 1 }) : t < s ? r.minutes.format({ minutes: Math.floor(t / o) }) : t < l ? r.hours.format({ hours: Math.floor(t / s) }) : t < u ? r.days.format({ days: Math.floor(t / l) }) : t < c ? r.months.format({ months: Math.floor(t / u) }) : r.years.format({ years: Math.floor(t / c) }));
}
function f(e) {
    let { since: t, getFormatter: n } = e;
    return E({
        seconds: i()().diff(i()(t), 's'),
        getFormatter: n
    });
}

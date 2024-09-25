var r = n(913527),
    i = n.n(r),
    a = n(689938);
let o = 60,
    s = 3600,
    l = 86400,
    u = 2592000,
    c = 31104000,
    d = () => ({
        seconds: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
        minutes: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
        hours: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
        days: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
        months: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
        years: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
    }),
    _ = (e, t) => null != t && null != t[e],
    E = (e, t, n) => {
        var r, i, a;
        return _(e, t) ? (null !== (i = null !== (r = t[e]) && void 0 !== r ? r : null == n ? void 0 : n[e]) && void 0 !== i ? i : null) : null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : null;
    },
    f = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i()().diff(i()(e), 's'),
            a = null != t ? t() : void 0,
            _ = d(),
            f = (e, t) => {
                let r = E(e, a, n ? _ : void 0);
                return null == r ? null : 'string' == typeof r ? r : r.format({ count: t });
            };
        if (r < o) {
            let e = (null == a ? void 0 : a.seconds) != null ? f('seconds', r) : f('minutes', 1);
            if (null != e) return e;
        }
        if (r < s) {
            let e = f('minutes', Math.floor(r / o));
            if (null != e) return e;
        }
        if (r < l) {
            let e = f('hours', Math.floor(r / s));
            if (null != e) return e;
        }
        if (r < u) {
            let e = f('days', Math.floor(r / l));
            if (null != e) return e;
        }
        if (r < c) {
            let e = f('months', Math.floor(r / u));
            if (null != e) return e;
        }
        if (r >= c && (null == a ? void 0 : a.years) != null) {
            let e = f('years', Math.floor(r / c));
            if (null != e) return e;
        }
        return i()(e).format('LL');
    };
t.Z = f;

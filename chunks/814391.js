var r = n(913527),
    i = n.n(r),
    a = n(388032);
let s = 3600,
    o = 86400,
    l = 2592000,
    u = 31104000,
    c = () => ({
        seconds: a.t.sMPmtr,
        minutes: a.t.N9M4Nz,
        hours: a.t.p0KedH,
        days: a.t.gjK5am,
        months: a.t.kHo4Oj,
        years: a.t.KjKr2N
    }),
    d = (e, t) => null != t && null != t[e],
    f = (e, t, n) => {
        var r, i, a;
        return d(e, t) ? (null !== (i = null !== (r = t[e]) && void 0 !== r ? r : null == n ? void 0 : n[e]) && void 0 !== i ? i : null) : null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : null;
    };
t.Z = function (e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = i()().diff(i()(e), 's'),
        d = null != t ? t() : void 0,
        _ = c(),
        p = (e, t) => {
            let r = f(e, d, n ? _ : void 0);
            return null == r ? null : 'string' == typeof r ? r : a.intl.formatToPlainString(r, { count: t });
        };
    if (r < 60) {
        let e = (null == d ? void 0 : d.seconds) != null ? p('seconds', r) : p('minutes', 1);
        if (null != e) return e;
    }
    if (r < s) {
        let e = p('minutes', Math.floor(r / 60));
        if (null != e) return e;
    }
    if (r < o) {
        let e = p('hours', Math.floor(r / s));
        if (null != e) return e;
    }
    if (r < l) {
        let e = p('days', Math.floor(r / o));
        if (null != e) return e;
    }
    if (r < u) {
        let e = p('months', Math.floor(r / l));
        if (null != e) return e;
    }
    if (r >= u && (null == d ? void 0 : d.years) != null) {
        let e = p('years', Math.floor(r / u));
        if (null != e) return e;
    }
    return i()(e).format('LL');
};

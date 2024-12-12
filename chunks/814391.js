var i = r(913527),
    a = r.n(i),
    s = r(388032);
let o = 60,
    l = 3600,
    u = 86400,
    c = 2592000,
    d = 31104000,
    f = () => ({
        seconds: s.t.sMPmtr,
        minutes: s.t.N9M4Nz,
        hours: s.t.p0KedH,
        days: s.t.gjK5am,
        months: s.t.kHo4Oj,
        years: s.t.KjKr2N
    }),
    _ = (e, n) => null != n && null != n[e],
    h = (e, n, r) => {
        var i, a, s;
        return _(e, n) ? (null !== (a = null !== (i = n[e]) && void 0 !== i ? i : null == r ? void 0 : r[e]) && void 0 !== a ? a : null) : null !== (s = null == r ? void 0 : r[e]) && void 0 !== s ? s : null;
    },
    p = function (e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = a()().diff(a()(e), 's'),
            _ = null != n ? n() : void 0,
            p = f(),
            m = (e, n) => {
                let i = h(e, _, r ? p : void 0);
                return null == i ? null : 'string' == typeof i ? i : s.intl.formatToPlainString(i, { count: n });
            };
        if (i < o) {
            let e = (null == _ ? void 0 : _.seconds) != null ? m('seconds', i) : m('minutes', 1);
            if (null != e) return e;
        }
        if (i < l) {
            let e = m('minutes', Math.floor(i / o));
            if (null != e) return e;
        }
        if (i < u) {
            let e = m('hours', Math.floor(i / l));
            if (null != e) return e;
        }
        if (i < c) {
            let e = m('days', Math.floor(i / u));
            if (null != e) return e;
        }
        if (i < d) {
            let e = m('months', Math.floor(i / c));
            if (null != e) return e;
        }
        if (i >= d && (null == _ ? void 0 : _.years) != null) {
            let e = m('years', Math.floor(i / d));
            if (null != e) return e;
        }
        return a()(e).format('LL');
    };
n.Z = p;

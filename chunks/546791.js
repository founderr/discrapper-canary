n.d(e, {
    LI: function () {
        return c;
    },
    Qr: function () {
        return d;
    },
    f0: function () {
        return I;
    },
    iB: function () {
        return S;
    },
    jV: function () {
        return C;
    },
    lx: function () {
        return T;
    },
    t3: function () {
        return _;
    }
}),
    n(47120);
var i = n(913527),
    r = n.n(i),
    l = n(292352),
    o = n(388032);
let E = 3600,
    a = 86400,
    u = 172800,
    s = 604800,
    _ = () => ({
        today: o.intl.string(o.t.VjIAQU),
        yesterday: o.intl.string(o.t['2a8xHR']),
        days: o.t.Xt6oND
    }),
    d = (t) =>
        t
            ? {
                  today: o.intl.string(o.t['2AtcIi']),
                  yesterday: o.intl.string(o.t.stOECg),
                  days: o.t.n8n5BQ
              }
            : {
                  today: o.intl.string(o.t.g1ZX6u),
                  yesterday: o.intl.string(o.t.s3qSVl),
                  days: o.t.f1UJiI
              },
    c = (t, e, n) => {
        let i = r()().diff(r()(t), 's'),
            l = e(),
            E = r()(t).format('LL');
        return (E = i < a ? l.today : i < u ? l.yesterday : o.intl.formatToPlainString(l.days, { days: Math.min(Math.floor(i / a), null != n ? n : 999) }));
    },
    T = (t, e) => {
        let n = r()().diff(r()(t), 's'),
            i = e(),
            l = r()(t).format('LL');
        return (l = n < 60 ? i.seconds : n < E ? o.intl.formatToPlainString(i.minutes, { count: Math.floor(n / 60) }) : n < a ? o.intl.formatToPlainString(i.hours, { count: Math.floor(n / E) }) : n < u ? i.yesterday : n < s ? o.intl.formatToPlainString(i.days, { count: Math.floor(n / a) }) : o.intl.formatToPlainString(i.date, { date: l }));
    },
    S = (t) => t.display_type === l.MY.USER_ADD || t.display_type === l.MY.USER_INTERACTION || t.display_type === l.MY.USER_CALLED,
    I = (t) => t.display_type === l.MY.GUILD_ADD || t.display_type === l.MY.GUILD_INTERACTION,
    C = (t) => {
        for (let e of Object.values(l.MY)) if (e.toString() === t) return e;
    };

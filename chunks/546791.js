e.d(n, {
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
    e(47120);
var i = e(913527),
    r = e.n(i),
    l = e(292352),
    o = e(388032);
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
    c = (t, n, e) => {
        let i = r()().diff(r()(t), 's'),
            l = n(),
            E = r()(t).format('LL');
        return (E = i < a ? l.today : i < u ? l.yesterday : o.intl.formatToPlainString(l.days, { days: Math.min(Math.floor(i / a), null != e ? e : 999) }));
    },
    T = (t, n) => {
        let e = r()().diff(r()(t), 's'),
            i = n(),
            l = r()(t).format('LL');
        return (l = e < 60 ? i.seconds : e < E ? o.intl.formatToPlainString(i.minutes, { count: Math.floor(e / 60) }) : e < a ? o.intl.formatToPlainString(i.hours, { count: Math.floor(e / E) }) : e < u ? i.yesterday : e < s ? o.intl.formatToPlainString(i.days, { count: Math.floor(e / a) }) : o.intl.formatToPlainString(i.date, { date: l }));
    },
    S = (t) => t.display_type === l.MY.USER_ADD || t.display_type === l.MY.USER_INTERACTION || t.display_type === l.MY.USER_CALLED,
    I = (t) => t.display_type === l.MY.GUILD_ADD || t.display_type === l.MY.GUILD_INTERACTION,
    C = (t) => {
        for (let n of Object.values(l.MY)) if (n.toString() === t) return n;
    };

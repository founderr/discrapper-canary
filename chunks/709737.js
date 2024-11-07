n.d(t, {
    DC: function () {
        return u;
    },
    Js: function () {
        return c;
    },
    ZR: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(657707),
    a = n(297781),
    s = n(709054),
    o = n(528567);
n(814059);
var l = n(388032);
function u(e) {
    let { value: t, statisticId: n } = e,
        i = l.intl.formatToPlainString(l.t.yhdo8v, {
            value: t,
            statisticName: (0, o.C)(n)
        });
    return (0, r.jsx)(d, { text: i });
}
function c(e) {
    let { intervalStart: t, intervalEnd: n } = e,
        o = new Date(s.default.extractTimestamp(t)),
        u = new Date(s.default.extractTimestamp(n)),
        c = new Intl.DateTimeFormat(l.intl.currentLocale, {
            month: 'numeric',
            day: 'numeric'
        }).formatRange(o, u);
    return (0, r.jsx)(a.ej, {
        Icon: i.Que,
        text: c
    });
}
function d(e) {
    let { text: t } = e;
    return (0, r.jsx)(a.ej, {
        Icon: i.hAD,
        text: t
    });
}

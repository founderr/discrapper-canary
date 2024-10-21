n.d(t, {
    DC: function () {
        return d;
    },
    ZR: function () {
        return E;
    },
    l8: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(657707),
    s = n(297781),
    o = n(709054),
    l = n(528567),
    u = n(814059),
    c = n(689938);
function d(e) {
    let { value: t, statisticId: n } = e,
        i = c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_STATISTIC_VALUE.format({
            value: t,
            statisticName: (0, l.C)(n)
        });
    return (0, r.jsx)(E, { text: i });
}
function _(e) {
    let { intervalEnd: t } = e,
        n = i.useMemo(() => (0, u.n)(o.default.extractTimestamp(t)), [t]);
    return (0, r.jsx)(s.ej, {
        Icon: a.Que,
        text: n
    });
}
function E(e) {
    let { text: t } = e;
    return (0, r.jsx)(s.ej, {
        Icon: a.hAD,
        text: t
    });
}

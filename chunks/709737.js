n.d(t, {
    D: function () {
        return _;
    },
    l: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(99815),
    o = n(657707),
    s = n(297781),
    l = n(709054),
    u = n(814059),
    c = n(689938);
function d(e) {
    if (e === a.E.LOL_TOTAL_KILLS) return c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_KILLS;
}
function _(e) {
    let { value: t, statisticId: n } = e,
        i = d(n);
    return null == i
        ? null
        : (0, r.jsx)(s.ej, {
              Icon: o.hAD,
              text: i.format({ value: t })
          });
}
function E(e) {
    let { intervalEnd: t } = e,
        n = i.useMemo(() => (0, u.n)(l.default.extractTimestamp(t)), [t]);
    return (0, r.jsx)(s.ej, {
        Icon: o.Que,
        text: n
    });
}

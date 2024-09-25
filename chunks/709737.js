n.d(t, {
    D: function () {
        return d;
    },
    l: function () {
        return h;
    }
});
var a = n(735250),
    l = n(470079),
    i = n(99815),
    r = n(657707),
    s = n(297781),
    o = n(709054),
    u = n(814059),
    c = n(689938);
function d(e) {
    let { value: t, statisticId: n } = e,
        l = (function (e) {
            if (e === i.E.LOL_TOTAL_KILLS) return c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_KILLS;
        })(n);
    return null == l
        ? null
        : (0, a.jsx)(s.ej, {
              Icon: r.hAD,
              text: l.format({ value: t })
          });
}
function h(e) {
    let { intervalEnd: t } = e,
        n = l.useMemo(() => (0, u.n)(o.default.extractTimestamp(t)), [t]);
    return (0, a.jsx)(s.ej, {
        Icon: r.Que,
        text: n
    });
}

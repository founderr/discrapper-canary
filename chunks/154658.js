n.d(t, {
    Z: function () {
        return E;
    }
});
var a = n(735250);
n(470079);
var l = n(120356),
    i = n.n(l),
    r = n(381338),
    s = n(442837),
    o = n(481060),
    u = n(594174),
    c = n(5192),
    d = n(235070),
    h = n(584283),
    m = n(689938),
    x = n(98518);
function E(e) {
    let { guildId: t, leaderboardId: n, intervalOffset: l = -1, className: E } = e,
        { intervalType: v } = (0, d.A)(n),
        _ = (0, h.Z)({
            guildId: t,
            leaderboardId: n,
            intervalOffset: l
        })[0],
        f = (0, s.e7)([u.default], () => u.default.getUser(null == _ ? void 0 : _.user_id));
    if (null == f) return null;
    let T = c.ZP.getName(t, void 0, f);
    return (0, a.jsxs)('div', {
        className: i()(x.container, E),
        children: [
            (0, a.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: x.title,
                children: (function (e) {
                    switch (e) {
                        case r.q.DAILY:
                            return m.Z.Messages.LEADERBOARD_YESTERDAYS_CHAMPION;
                        case r.q.WEEKLY:
                            return m.Z.Messages.LEADERBOARD_LAST_WEEKS_CHAMPION;
                        case r.q.MONTHLY:
                            return m.Z.Messages.LEADERBOARD_LAST_MONTHS_CHAMPION;
                        default:
                            return m.Z.Messages.LEADERBOARD_LAST_CHAMPION;
                    }
                })(v)
            }),
            (0, a.jsx)(o.Avatar, {
                src: f.getAvatarURL(t, 16),
                size: o.AvatarSizes.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, a.jsx)(o.Spacer, {
                size: 6,
                horizontal: !0
            }),
            (0, a.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                color: 'header-primary',
                children: T
            })
        ]
    });
}

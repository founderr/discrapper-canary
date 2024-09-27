n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(381338),
    s = n(442837),
    l = n(481060),
    u = n(594174),
    c = n(5192),
    d = n(235070),
    _ = n(873128),
    E = n(689938),
    f = n(98518);
function h(e) {
    switch (e) {
        case o.q.DAILY:
            return E.Z.Messages.LEADERBOARD_YESTERDAYS_CHAMPION;
        case o.q.WEEKLY:
            return E.Z.Messages.LEADERBOARD_LAST_WEEKS_CHAMPION;
        case o.q.MONTHLY:
            return E.Z.Messages.LEADERBOARD_LAST_MONTHS_CHAMPION;
        default:
            return E.Z.Messages.LEADERBOARD_LAST_CHAMPION;
    }
}
function p(e) {
    var t;
    let { guildId: n, leaderboardId: i, intervalOffset: o = -1, className: E } = e,
        { intervalType: p } = (0, d.A)(i),
        m = (0, _.Z)({
            guildId: n,
            leaderboardId: i,
            intervalOffset: o
        }),
        I = null == m ? void 0 : null === (t = m.users) || void 0 === t ? void 0 : t[0],
        T = (0, s.e7)([u.default], () => u.default.getUser(null == I ? void 0 : I.user_id));
    if (null == T) return null;
    let g = c.ZP.getName(n, void 0, T);
    return (0, r.jsxs)('div', {
        className: a()(f.container, E),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: f.title,
                children: h(p)
            }),
            (0, r.jsx)(l.Avatar, {
                src: T.getAvatarURL(n, 16),
                size: l.AvatarSizes.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, r.jsx)(l.Spacer, {
                size: 6,
                horizontal: !0
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                color: 'header-primary',
                children: g
            })
        ]
    });
}

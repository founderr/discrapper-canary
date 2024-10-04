n.d(t, {
    Z: function () {
        return h;
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
    d = n(873128),
    _ = n(689938),
    E = n(98518);
function f(e) {
    switch (e) {
        case o.q.DAILY:
            return _.Z.Messages.LEADERBOARD_YESTERDAYS_CHAMPION;
        case o.q.WEEKLY:
            return _.Z.Messages.LEADERBOARD_LAST_WEEKS_CHAMPION;
        case o.q.MONTHLY:
            return _.Z.Messages.LEADERBOARD_LAST_MONTHS_CHAMPION;
        default:
            return _.Z.Messages.LEADERBOARD_LAST_CHAMPION;
    }
}
function h(e) {
    var t;
    let { guildId: n, leaderboardId: i, intervalOffset: o = -1, className: _ } = e,
        h = (0, d.Z)({
            guildId: n,
            leaderboardId: i,
            intervalOffset: o
        }),
        p = null == h ? void 0 : null === (t = h.users) || void 0 === t ? void 0 : t[0],
        m = (0, s.e7)([u.default], () => u.default.getUser(null == p ? void 0 : p.user_id));
    if (null == m || null == h) return null;
    let I = c.ZP.getName(n, void 0, m);
    return (0, r.jsxs)('div', {
        className: a()(E.container, _),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: E.title,
                children: f(h.settings.interval_type)
            }),
            (0, r.jsx)(l.Avatar, {
                src: m.getAvatarURL(n, 16),
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
                children: I
            })
        ]
    });
}

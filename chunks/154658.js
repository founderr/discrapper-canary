n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(381338),
    o = n(442837),
    l = n(481060),
    u = n(594174),
    c = n(5192),
    d = n(873128),
    f = n(388032),
    _ = n(98518);
function p(e) {
    var t;
    let { guildId: n, leaderboardId: i, intervalOffset: p = -1, className: h } = e,
        m = (0, d.Z)({
            guildId: n,
            leaderboardId: i,
            intervalOffset: p
        }),
        g = null == m ? void 0 : null === (t = m.users) || void 0 === t ? void 0 : t[0],
        E = (0, o.e7)([u.default], () => u.default.getUser(null == g ? void 0 : g.user_id));
    if (null == E || null == m) return null;
    let v = c.ZP.getName(n, void 0, E);
    return (0, r.jsxs)('div', {
        className: a()(_.container, h),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: _.title,
                children: (function (e) {
                    switch (e) {
                        case s.q.DAILY:
                            return f.intl.string(f.t.UfbhDA);
                        case s.q.WEEKLY:
                            return f.intl.string(f.t['9x5Nam']);
                        case s.q.MONTHLY:
                            return f.intl.string(f.t.xB2Co6);
                        default:
                            return f.intl.string(f.t['4N67JS']);
                    }
                })(m.settings.interval_type)
            }),
            (0, r.jsx)(l.Avatar, {
                src: E.getAvatarURL(n, 16),
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
                children: v
            })
        ]
    });
}

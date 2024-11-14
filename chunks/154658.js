n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(381338),
    o = n(442837),
    l = n(481060),
    u = n(206295),
    c = n(594174),
    d = n(5192),
    f = n(528567),
    _ = n(371583),
    p = n(388032),
    h = n(98518);
function m(e) {
    var t, n, i, m;
    let { guildId: g, leaderboard: E, className: v } = e,
        I = null == E ? void 0 : null === (t = E.users) || void 0 === t ? void 0 : t[0],
        b = (0, _.K)(E),
        { sort_by_statistic_id: S } = E.guild_settings,
        T = null !== (m = null == I ? void 0 : null === (i = I.statistics) || void 0 === i ? void 0 : null === (n = i[S]) || void 0 === n ? void 0 : n.value) && void 0 !== m ? m : 0,
        y = p.intl.formatToPlainString(p.t.yhdo8v, {
            value: T,
            statisticName: (0, f.C)(S)
        }),
        { primaryColor: A, secondaryColor: N } = (0, u.Z)(b),
        C = (0, o.e7)([c.default], () => c.default.getUser(null == I ? void 0 : I.user_id));
    if (null == C) return null;
    let R = d.ZP.getName(g, void 0, C);
    return (0, r.jsxs)('div', {
        className: a()(h.container, v),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(N, ' 0%, ').concat(A, ' 100%)') },
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: h.title,
                children: (function (e) {
                    switch (e) {
                        case s.q.DAILY:
                            return p.intl.string(p.t.UfbhDA);
                        case s.q.WEEKLY:
                            return p.intl.string(p.t['9x5Nam']);
                        case s.q.MONTHLY:
                            return p.intl.string(p.t.xB2Co6);
                        default:
                            return p.intl.string(p.t['4N67JS']);
                    }
                })(E.settings.interval_type)
            }),
            (0, r.jsx)(l.Avatar, {
                src: C.getAvatarURL(g, 16),
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
                className: h.username,
                children: R
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xxs/medium',
                color: 'text-secondary',
                children: y
            }),
            (0, r.jsx)('div', {
                style: { backgroundImage: 'url('.concat(b, ')') },
                className: h.heroArt
            })
        ]
    });
}

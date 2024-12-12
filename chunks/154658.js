r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(381338),
    l = r(99815),
    u = r(442837),
    c = r(481060),
    d = r(206295),
    f = r(594174),
    _ = r(5192),
    h = r(528567),
    p = r(371583),
    m = r(388032),
    g = r(828980);
function E(e) {
    switch (e) {
        case o.q.DAILY:
            return m.intl.string(m.t.UfbhDA);
        case o.q.WEEKLY:
            return m.intl.string(m.t['9x5Nam']);
        case o.q.MONTHLY:
            return m.intl.string(m.t.xB2Co6);
        default:
            return m.intl.string(m.t['4N67JS']);
    }
}
function v(e) {
    var n, r, a, o, v;
    let { guildId: I, leaderboard: T, className: b } = e,
        y = null == T ? void 0 : null === (n = T.users) || void 0 === n ? void 0 : n[0],
        { sort_by_statistic_id: S } = T.guild_settings,
        A = null !== (v = null == y ? void 0 : null === (a = y.statistics) || void 0 === a ? void 0 : null === (r = a[S]) || void 0 === r ? void 0 : r.value) && void 0 !== v ? v : 0,
        N = m.intl.formatToPlainString(m.t.yhdo8v, {
            value: A,
            statisticName: (0, h.C)(S)
        }),
        C = null == y ? void 0 : null === (o = y.statistics[l.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === o ? void 0 : o.value,
        R = (0, p.I)(C),
        { primaryColor: O, secondaryColor: D } = (0, d.Z)(''.concat(R, '?forColors')),
        L = (0, u.e7)([f.default], () => f.default.getUser(null == y ? void 0 : y.user_id));
    if (null == L) return null;
    let x = _.ZP.getName(I, void 0, L);
    return (0, i.jsxs)('div', {
        className: s()(g.container, b),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(D, ' 0%, ').concat(O, ' 100%)') },
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/medium',
                className: g.title,
                children: E(T.settings.interval_type)
            }),
            (0, i.jsx)(c.Avatar, {
                src: L.getAvatarURL(I, 16),
                size: c.AvatarSizes.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, i.jsx)(c.Spacer, {
                size: 6,
                horizontal: !0
            }),
            (0, i.jsxs)('div', {
                className: g.textContainer,
                children: [
                    (0, i.jsx)(c.Text, {
                        className: g.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: x
                    }),
                    (0, i.jsx)(c.Text, {
                        className: g.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: N
                    })
                ]
            }),
            null != R &&
                (0, i.jsx)('div', {
                    className: g.heroArtContainer,
                    children: (0, i.jsx)('img', {
                        className: g.heroArt,
                        src: R,
                        alt: ''
                    })
                })
        ]
    });
}

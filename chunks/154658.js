n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(381338),
    o = n(99815),
    l = n(442837),
    u = n(481060),
    c = n(206295),
    d = n(594174),
    f = n(5192),
    _ = n(528567),
    p = n(371583),
    h = n(388032),
    m = n(828980);
function g(e) {
    var t, n, i, g, E;
    let { guildId: v, leaderboard: I, className: T } = e,
        b = null == I ? void 0 : null === (t = I.users) || void 0 === t ? void 0 : t[0],
        { sort_by_statistic_id: S } = I.guild_settings,
        y = null !== (E = null == b ? void 0 : null === (i = b.statistics) || void 0 === i ? void 0 : null === (n = i[S]) || void 0 === n ? void 0 : n.value) && void 0 !== E ? E : 0,
        A = h.intl.formatToPlainString(h.t.yhdo8v, {
            value: y,
            statisticName: (0, _.C)(S)
        }),
        N = null == b ? void 0 : null === (g = b.statistics[o.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === g ? void 0 : g.value,
        C = (0, p.I)(N),
        { primaryColor: R, secondaryColor: O } = (0, c.Z)(''.concat(C, '?forColors')),
        D = (0, l.e7)([d.default], () => d.default.getUser(null == b ? void 0 : b.user_id));
    if (null == D) return null;
    let L = f.ZP.getName(v, void 0, D);
    return (0, r.jsxs)('div', {
        className: a()(m.container, T),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(O, ' 0%, ').concat(R, ' 100%)') },
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-xs/medium',
                className: m.title,
                children: (function (e) {
                    switch (e) {
                        case s.q.DAILY:
                            return h.intl.string(h.t.UfbhDA);
                        case s.q.WEEKLY:
                            return h.intl.string(h.t['9x5Nam']);
                        case s.q.MONTHLY:
                            return h.intl.string(h.t.xB2Co6);
                        default:
                            return h.intl.string(h.t['4N67JS']);
                    }
                })(I.settings.interval_type)
            }),
            (0, r.jsx)(u.Avatar, {
                src: D.getAvatarURL(v, 16),
                size: u.AvatarSizes.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, r.jsx)(u.Spacer, {
                size: 6,
                horizontal: !0
            }),
            (0, r.jsxs)('div', {
                className: m.textContainer,
                children: [
                    (0, r.jsx)(u.Text, {
                        className: m.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: L
                    }),
                    (0, r.jsx)(u.Text, {
                        className: m.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: A
                    })
                ]
            }),
            null != C &&
                (0, r.jsx)('div', {
                    className: m.heroArtContainer,
                    children: (0, r.jsx)('img', {
                        className: m.heroArt,
                        src: C,
                        alt: ''
                    })
                })
        ]
    });
}

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
    o = n(99815),
    l = n(442837),
    u = n(481060),
    c = n(206295),
    d = n(594174),
    f = n(5192),
    _ = n(528567),
    p = n(388032),
    h = n(98518);
function m(e) {
    var t, i, m, g, E;
    let { guildId: v, leaderboard: b, className: I } = e,
        T = null == b ? void 0 : null === (t = b.users) || void 0 === t ? void 0 : t[0],
        { sort_by_statistic_id: S } = b.guild_settings,
        y = null !== (E = null == T ? void 0 : null === (m = T.statistics) || void 0 === m ? void 0 : null === (i = m[S]) || void 0 === i ? void 0 : i.value) && void 0 !== E ? E : 0,
        A = p.intl.formatToPlainString(p.t.yhdo8v, {
            value: y,
            statisticName: (0, _.C)(S)
        }),
        N = null == T ? void 0 : null === (g = T.statistics[o.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === g ? void 0 : g.value,
        C = null != N ? n(692425)('./champion_'.concat(N, '.jpg')).default : null,
        { primaryColor: R, secondaryColor: O } = (0, c.Z)(''.concat(C, '?forColors')),
        D = (0, l.e7)([d.default], () => d.default.getUser(null == T ? void 0 : T.user_id));
    if (null == D) return null;
    let L = f.ZP.getName(v, void 0, D);
    return (0, r.jsxs)('div', {
        className: a()(h.container, I),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(O, ' 0%, ').concat(R, ' 100%)') },
        children: [
            (0, r.jsx)(u.Text, {
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
                })(b.settings.interval_type)
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
                className: h.textContainer,
                children: [
                    (0, r.jsx)(u.Text, {
                        className: h.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: L
                    }),
                    (0, r.jsx)(u.Text, {
                        className: h.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: A
                    })
                ]
            }),
            null != C &&
                (0, r.jsx)('div', {
                    className: h.heroArtContainer,
                    children: (0, r.jsx)('img', {
                        className: h.heroArt,
                        src: C,
                        alt: ''
                    })
                })
        ]
    });
}

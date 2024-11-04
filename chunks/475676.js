n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(297781),
    s = n(443487),
    c = n(314897),
    u = n(594174),
    d = n(5192),
    m = n(873128),
    x = n(246627),
    h = n(709737),
    p = n(69589),
    C = n(531501),
    v = n(463031),
    g = n(388032),
    f = n(835777);
function j() {
    return (0, l.jsxs)('div', {
        className: f.gameTitleContainer,
        children: [
            (0, l.jsx)(r.LeagueOfLegendsBrandIcon, { size: 'xs' }),
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: f.gameTitle,
                children: 'League of Legends'
            })
        ]
    });
}
function I(e) {
    var t, n, C, f;
    let I,
        { selected: P, channel: y } = e,
        L = y.guild_id,
        T = (0, m.Z)({
            guildId: L,
            leaderboardId: v._,
            intervalOffset: 0
        }),
        { rankChanges: N } = (0, x.Z)({
            guildId: L,
            leaderboardId: v._,
            intervalStart: null !== (C = null == T ? void 0 : T.interval_start) && void 0 !== C ? C : ''
        }),
        _ = (0, i.e7)([c.default], () => c.default.getId()),
        [S, E] = a.useMemo(() => {
            let e = N.find((e) => e.userId === _),
                t = N[0],
                n = null != e ? e : t,
                l = null == T ? void 0 : T.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, l];
        }, [T, N, _]),
        A = (0, i.e7)([u.default], () => u.default.getUser(null == S ? void 0 : S.userId)),
        M = d.ZP.getName(L, void 0, A);
    if (null == T) return null;
    if (0 === T.users.length || null == S) return (0, l.jsx)(Z, { selected: P });
    let { sort_by_statistic_id: k } = T.guild_settings,
        w = null !== (f = null == E ? void 0 : null === (n = E.statistics) || void 0 === n ? void 0 : null === (t = n[k]) || void 0 === t ? void 0 : t.value) && void 0 !== f ? f : 0,
        { currentRank: R } = S;
    return (
        (I =
            S.userId === _
                ? g.intl.formatToPlainString(g.t['eU+JxM'], { rank: R })
                : g.intl.formatToPlainString(g.t['8BLSQ0'], {
                      rank: R,
                      username: M
                  })),
        (0, l.jsxs)(s.Zb, {
            selected: P,
            children: [
                (0, l.jsxs)(s.e$, {
                    children: [
                        (0, l.jsx)(j, {}),
                        (0, l.jsx)(r.Spacer, { size: 2 }),
                        (0, l.jsx)(s.ll, { children: I }),
                        (0, l.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: (0, l.jsx)(h.DC, {
                                value: w,
                                statisticId: k
                            })
                        })
                    ]
                }),
                (0, l.jsx)(p.Z, { rank: R })
            ]
        })
    );
}
function Z(e) {
    let { selected: t } = e;
    return (0, l.jsxs)(s.Zb, {
        selected: t,
        children: [
            (0, l.jsxs)(s.e$, {
                children: [
                    (0, l.jsx)(j, {}),
                    (0, l.jsx)(r.Spacer, { size: 2 }),
                    (0, l.jsx)(s.ll, { children: g.intl.string(g.t['t+b0DA']) }),
                    (0, l.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: (0, l.jsx)(h.ZR, { text: g.intl.string(g.t.zX8HUl) })
                    })
                ]
            }),
            (0, l.jsx)(C.Z, {
                color: '#5B5A56',
                children: (0, l.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: f.emptyStateImage
                })
            })
        ]
    });
}

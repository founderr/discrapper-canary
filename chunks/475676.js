n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(297781),
    s = n(443487),
    u = n(314897),
    c = n(594174),
    d = n(5192),
    h = n(873128),
    m = n(246627),
    x = n(709737),
    v = n(69589),
    f = n(531501),
    p = n(463031),
    g = n(388032),
    C = n(835777);
function I() {
    return (0, i.jsxs)('div', {
        className: C.gameTitleContainer,
        children: [
            (0, i.jsx)(r.LeagueOfLegendsBrandIcon, { size: 'xs' }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: C.gameTitle,
                children: 'League of Legends'
            })
        ]
    });
}
function P(e) {
    var t, n, f, C;
    let P,
        { selected: y, channel: j } = e,
        w = j.guild_id,
        T = (0, h.Z)({
            guildId: w,
            leaderboardId: p._,
            intervalOffset: 0
        }),
        { rankChanges: L } = (0, m.Z)({
            guildId: w,
            leaderboardId: p._,
            intervalStart: null !== (f = null == T ? void 0 : T.interval_start) && void 0 !== f ? f : ''
        }),
        S = (0, a.e7)([u.default], () => u.default.getId()),
        [N, E] = l.useMemo(() => {
            let e = L.find((e) => e.userId === S),
                t = L[0],
                n = null != e ? e : t,
                i = null == T ? void 0 : T.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, i];
        }, [T, L, S]),
        _ = (0, a.e7)([c.default], () => c.default.getUser(null == N ? void 0 : N.userId)),
        A = d.ZP.getName(w, void 0, _);
    if (null == T) return null;
    if (0 === T.users.length || null == N) return (0, i.jsx)(Z, { selected: y });
    let { sort_by_statistic_id: R } = T.guild_settings,
        b = null !== (C = null == E ? void 0 : null === (n = E.statistics) || void 0 === n ? void 0 : null === (t = n[R]) || void 0 === t ? void 0 : t.value) && void 0 !== C ? C : 0,
        { currentRank: M } = N;
    return (
        (P =
            N.userId === S
                ? g.intl.formatToPlainString(g.t['eU+JxM'], { rank: M })
                : g.intl.formatToPlainString(g.t['8BLSQ0'], {
                      rank: M,
                      username: A
                  })),
        (0, i.jsxs)(s.Zb, {
            selected: y,
            children: [
                (0, i.jsxs)(s.e$, {
                    children: [
                        (0, i.jsx)(I, {}),
                        (0, i.jsx)(r.Spacer, { size: 2 }),
                        (0, i.jsx)(s.ll, { children: P }),
                        (0, i.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: (0, i.jsx)(x.DC, {
                                value: b,
                                statisticId: R
                            })
                        })
                    ]
                }),
                (0, i.jsx)(v.Z, { rank: M })
            ]
        })
    );
}
function Z(e) {
    let { selected: t } = e;
    return (0, i.jsxs)(s.Zb, {
        selected: t,
        children: [
            (0, i.jsxs)(s.e$, {
                children: [
                    (0, i.jsx)(I, {}),
                    (0, i.jsx)(r.Spacer, { size: 2 }),
                    (0, i.jsx)(s.ll, { children: g.intl.string(g.t['t+b0DA']) }),
                    (0, i.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: (0, i.jsx)(x.ZR, { text: g.intl.string(g.t.zX8HUl) })
                    })
                ]
            }),
            (0, i.jsx)(f.Z, {
                color: '#5B5A56',
                children: (0, i.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: C.emptyStateImage
                })
            })
        ]
    });
}

n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(835473),
    s = n(297781),
    c = n(443487),
    u = n(314897),
    d = n(594174),
    m = n(626135),
    h = n(5192),
    x = n(873128),
    p = n(246627),
    C = n(709737),
    v = n(69589),
    g = n(531501),
    f = n(463031),
    I = n(981631),
    j = n(701488),
    Z = n(388032),
    P = n(51130);
function L(e) {
    let { application: t } = e,
        n = t.getIconURL(j.Si.LARGE),
        a =
            null == n
                ? null
                : (0, l.jsx)('img', {
                      className: P.gameIcon,
                      src: n,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, l.jsxs)('div', {
        className: P.gameTitleContainer,
        children: [
            a,
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: P.gameTitle,
                children: t.name
            })
        ]
    });
}
function T(e) {
    var t, n, g, j, P;
    let T,
        { selected: y, channel: _ } = e,
        A = _.guild_id,
        E = (0, x.Z)({
            guildId: A,
            leaderboardId: f._,
            intervalOffset: 0
        }),
        { rankChanges: S } = (0, p.Z)({
            guildId: A,
            leaderboardId: f._,
            intervalStart: null !== (j = null == E ? void 0 : E.interval_start) && void 0 !== j ? j : ''
        }),
        R = (0, i.e7)([u.default], () => u.default.getId()),
        [M, k] = a.useMemo(() => {
            let e = S.find((e) => e.userId === R),
                t = S[0],
                n = null != e ? e : t,
                l = null == E ? void 0 : E.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, l];
        }, [E, S, R]),
        w = (0, i.e7)([d.default], () => d.default.getUser(null == M ? void 0 : M.userId)),
        O = h.ZP.getName(A, void 0, w);
    !(function (e) {
        let { leaderboard: t, guildId: n } = e,
            l = null == t ? void 0 : t.leaderboard_id;
        a.useEffect(() => {
            null != l &&
                m.default.track(I.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                    leaderboard_id: l,
                    guild_id: n
                });
        }, [l, n]);
    })({
        leaderboard: E,
        guildId: A
    });
    let b = (0, o.q)(null == E ? void 0 : null === (t = E.settings) || void 0 === t ? void 0 : t.application_id);
    if (null == E || null == b) return null;
    if (0 === E.users.length || null == M || null == w)
        return (0, l.jsx)(N, {
            application: b,
            selected: y
        });
    let { sort_by_statistic_id: H } = E.guild_settings,
        V = null !== (P = null == k ? void 0 : null === (g = k.statistics) || void 0 === g ? void 0 : null === (n = g[H]) || void 0 === n ? void 0 : n.value) && void 0 !== P ? P : 0,
        { currentRank: B } = M;
    return (
        (T =
            M.userId === R
                ? Z.intl.formatToPlainString(Z.t['eU+JxM'], { rank: B })
                : Z.intl.formatToPlainString(Z.t['8BLSQ0'], {
                      rank: B,
                      username: O
                  })),
        (0, l.jsxs)(c.Zb, {
            selected: y,
            children: [
                (0, l.jsxs)(c.e$, {
                    children: [
                        (0, l.jsx)(L, { application: b }),
                        (0, l.jsx)(r.Spacer, { size: 2 }),
                        (0, l.jsx)(c.ll, { children: T }),
                        (0, l.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: (0, l.jsx)(C.DC, {
                                value: V,
                                statisticId: H
                            })
                        })
                    ]
                }),
                (0, l.jsx)(v.Z, {
                    user: w,
                    rank: B
                })
            ]
        })
    );
}
function N(e) {
    let { selected: t, application: n } = e;
    return (0, l.jsxs)(c.Zb, {
        selected: t,
        children: [
            (0, l.jsxs)(c.e$, {
                children: [
                    (0, l.jsx)(L, { application: n }),
                    (0, l.jsx)(r.Spacer, { size: 2 }),
                    (0, l.jsx)(c.ll, { children: Z.intl.string(Z.t['t+b0DA']) }),
                    (0, l.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: (0, l.jsx)(C.ZR, { text: Z.intl.string(Z.t.zX8HUl) })
                    })
                ]
            }),
            (0, l.jsx)(g.Z, {
                color: '#5B5A56',
                children: (0, l.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: P.emptyStateImage
                })
            })
        ]
    });
}

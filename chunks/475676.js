n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(297781),
    c = n(443487),
    d = n(314897),
    h = n(594174),
    m = n(5192),
    x = n(873128),
    v = n(246627),
    E = n(709737),
    _ = n(463031),
    p = n(689938),
    f = n(835777);
let T = {
    1: f.rankFirstPlace,
    2: f.rankSecondPlace,
    3: f.rankThirdPlace
};
function g(e) {
    let { rank: t, userId: n, guildId: a } = e,
        i = (0, s.e7)([h.default], () => h.default.getUser(n));
    if (null == t || null == n) return null;
    let u = T[t];
    return (0, l.jsxs)('div', {
        className: r()(f.rankContainer, u),
        children: [
            (0, l.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: f.rankText,
                children: t
            }),
            (0, l.jsx)(o.Avatar, {
                src: null == i ? void 0 : i.getAvatarURL(a, 16),
                size: o.AvatarSizes.SIZE_16,
                'aria-label': 'avatar',
                className: f.rankAvatar
            })
        ]
    });
}
function I(e) {
    var t, n, i, r;
    let T,
        { selected: I, channel: C } = e,
        N = C.guild_id,
        P = (0, x.Z)({
            guildId: N,
            leaderboardId: _._,
            intervalOffset: 0
        }),
        { rankChanges: Z } = (0, v.Z)({
            guildId: N,
            leaderboardId: _._,
            intervalStart: null !== (i = null == P ? void 0 : P.interval_start) && void 0 !== i ? i : ''
        }),
        A = (0, s.e7)([d.default], () => d.default.getId()),
        [S, M] = a.useMemo(() => {
            let e = Z.find((e) => e.userId === A),
                t = Z[0],
                n = null != e ? e : t,
                l = null == P ? void 0 : P.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, l];
        }, [P, Z, A]),
        y = (0, s.e7)([h.default], () => h.default.getUser(null == S ? void 0 : S.userId)),
        R = m.ZP.getName(N, void 0, y);
    if (null == P) return null;
    let { sortByStatisticId: O } = P.settings,
        j = null !== (r = null == M ? void 0 : null === (n = M.statistics) || void 0 === n ? void 0 : null === (t = n[O]) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : 0;
    if (null != S) {
        let { currentRank: e } = S;
        T =
            S.userId === A
                ? p.Z.Messages.LEADERBOARD_RANK_CHANGE_CURRENT_USER.format({ rank: e })
                : p.Z.Messages.LEADERBOARD_RANK_CHANGE_OTHER_USER.format({
                      rank: e,
                      username: R
                  });
    } else T = p.Z.Messages.LEADERBOARD_RANK_CHANGE_NEW_CHAMPION;
    return (0, l.jsxs)(c.Zb, {
        selected: I,
        children: [
            (0, l.jsxs)(c.e$, {
                children: [
                    (0, l.jsxs)('div', {
                        className: f.gameTitleContainer,
                        children: [
                            (0, l.jsx)(o.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                className: f.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, l.jsx)(o.Spacer, { size: 2 }),
                    (0, l.jsx)(c.ll, { children: T }),
                    (0, l.jsx)(u.Gk, {
                        location: u.Gt.CARD,
                        children: (0, l.jsx)(E.D, {
                            value: j,
                            statisticId: O
                        })
                    })
                ]
            }),
            (0, l.jsx)(g, {
                userId: null == S ? void 0 : S.userId,
                rank: null == S ? void 0 : S.currentRank,
                guildId: C.guild_id
            })
        ]
    });
}

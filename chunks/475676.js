n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var a = n(735250),
    l = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(297781),
    c = n(443487),
    d = n(314897),
    h = n(594174),
    m = n(873128),
    x = n(246627),
    v = n(709737),
    E = n(463031),
    _ = n(689938),
    f = n(835777);
let p = {
    1: f.rankFirstPlace,
    2: f.rankSecondPlace,
    3: f.rankThirdPlace
};
function T(e) {
    let { rank: t, userId: n, guildId: l } = e,
        i = (0, s.e7)([h.default], () => h.default.getUser(n));
    if (null == t || null == n) return null;
    let u = p[t];
    return (0, a.jsxs)('div', {
        className: r()(f.rankContainer, u),
        children: [
            (0, a.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: f.rankText,
                children: t
            }),
            (0, a.jsx)(o.Avatar, {
                src: null == i ? void 0 : i.getAvatarURL(l, 16),
                size: o.AvatarSizes.SIZE_16,
                'aria-label': 'avatar',
                className: f.rankAvatar
            })
        ]
    });
}
function g(e) {
    var t, n, i, r;
    let h,
        { selected: p, channel: g } = e,
        I = g.guild_id,
        C = (0, m.Z)({
            guildId: I,
            leaderboardId: E._,
            intervalOffset: 0
        }),
        { rankChanges: N } = (0, x.Z)({
            guildId: I,
            leaderboardId: E._,
            intervalStart: null !== (i = null == C ? void 0 : C.interval_start) && void 0 !== i ? i : ''
        }),
        P = (0, s.e7)([d.default], () => d.default.getId()),
        [Z, S] = l.useMemo(() => {
            let e = N.find((e) => e.userId === P),
                t = N[0],
                n = null != e ? e : t,
                a = null == C ? void 0 : C.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, a];
        }, [C, N, P]);
    if (null == C) return null;
    let { sortByStatisticId: A } = C.settings,
        R = null !== (r = null == S ? void 0 : null === (n = S.statistics) || void 0 === n ? void 0 : null === (t = n[A]) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : 0;
    if (null != Z) {
        let { currentRank: e } = Z;
        h = Z.userId === P ? _.Z.Messages.LEADERBOARD_RANK_CHANGE_CURRENT_USER.format({ rank: e }) : _.Z.Messages.LEADERBOARD_RANK_CHANGE_OTHER_USER.format({ rank: e });
    } else h = _.Z.Messages.LEADERBOARD_RANK_CHANGE_NEW_CHAMPION;
    return (0, a.jsxs)(c.Zb, {
        selected: p,
        children: [
            (0, a.jsxs)(c.e$, {
                children: [
                    (0, a.jsxs)('div', {
                        className: f.gameTitleContainer,
                        children: [
                            (0, a.jsx)(o.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                            (0, a.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                className: f.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, a.jsx)(o.Spacer, { size: 2 }),
                    (0, a.jsx)(c.ll, { children: h }),
                    (0, a.jsx)(u.Gk, {
                        location: u.Gt.CARD,
                        children: (0, a.jsx)(v.D, {
                            value: R,
                            statisticId: A
                        })
                    })
                ]
            }),
            (0, a.jsx)(T, {
                userId: null == Z ? void 0 : Z.userId,
                rank: null == Z ? void 0 : Z.currentRank,
                guildId: g.guild_id
            })
        ]
    });
}

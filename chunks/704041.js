var l = n(735250),
    a = n(470079),
    i = n(512722),
    r = n.n(i),
    s = n(481060),
    o = n(584283),
    u = n(114201),
    c = n(370611),
    d = n(463031),
    h = n(689938),
    m = n(304818);
t.Z = (e) => {
    let { channel: t } = e,
        n = a.useRef(null);
    (0, s.useFocusLock)(n), r()(t, 'Channel must be defined');
    let i = (0, o.Z)({
            guildId: t.guild_id,
            ...d.x
        }),
        x = a.useMemo(
            () =>
                i.map((e, t) => {
                    var n, l;
                    return {
                        rank: t + 1,
                        userId: e.user_id,
                        value: null !== (l = null === (n = e.statistics[d.x.sortByStatisticId]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : '-'
                    };
                }),
            [i]
        );
    return (0, l.jsxs)('div', {
        className: m.popout,
        ref: n,
        children: [
            (0, l.jsxs)('div', {
                className: m.header,
                children: [
                    (0, l.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        className: m.leaderboardTitle,
                        children: h.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({ leaderboardName: 'League of Legends' })
                    }),
                    (0, l.jsx)(u.Z, {})
                ]
            }),
            (0, l.jsx)(c.Z, {
                channel: t,
                userRows: x,
                statisticId: d.x.sortByStatisticId
            })
        ]
    });
};

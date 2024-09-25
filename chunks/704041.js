var a = n(735250),
    l = n(470079),
    i = n(512722),
    r = n.n(i),
    s = n(481060),
    o = n(114201),
    u = n(154658),
    c = n(370611),
    d = n(463031),
    h = n(689938),
    m = n(304818);
t.Z = (e) => {
    let { channel: t } = e,
        n = l.useRef(null);
    return (
        (0, s.useFocusLock)(n),
        r()(t, 'Channel must be defined'),
        (0, a.jsxs)('div', {
            className: m.popout,
            ref: n,
            children: [
                (0, a.jsxs)('div', {
                    className: m.header,
                    children: [
                        (0, a.jsx)(s.LeagueOfLegendsBrandIcon, { size: 'md' }),
                        (0, a.jsx)(s.Spacer, {
                            size: 8,
                            horizontal: !0
                        }),
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-sm/normal',
                            className: m.leaderboardTitle,
                            children: h.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                                leaderboardName: 'League of Legends',
                                leaderboardNameHook: (e, t) =>
                                    (0, a.jsx)(
                                        s.Text,
                                        {
                                            variant: 'text-sm/medium',
                                            className: m.leaderboardName,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        }),
                        (0, a.jsx)(o.Z, {})
                    ]
                }),
                (0, a.jsx)(c.Z, {
                    guildId: t.guild_id,
                    leaderboardId: d._,
                    intervalOffset: 0
                }),
                (0, a.jsx)(u.Z, {
                    className: m.previousChampion,
                    guildId: t.guild_id,
                    leaderboardId: d._,
                    intervalOffset: -1
                })
            ]
        })
    );
};

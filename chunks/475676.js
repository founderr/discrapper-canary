n.d(t, {
    Z: function () {
        return d;
    }
});
var l = n(735250);
n(470079);
var a = n(481060),
    i = n(297781),
    r = n(443487),
    s = n(873128),
    o = n(709737),
    u = n(463031),
    c = n(835777);
function d(e) {
    var t, n, d;
    let { selected: h, channel: m } = e,
        x = m.guild_id,
        v = (0, s.Z)({
            guildId: x,
            leaderboardId: u._,
            intervalOffset: 0
        });
    if (null == v) return null;
    let { users: E, settings: _ } = v,
        { sortByStatisticId: p } = _,
        T = E[0],
        f = null !== (d = null == T ? void 0 : null === (n = T.statistics) || void 0 === n ? void 0 : null === (t = n[p]) || void 0 === t ? void 0 : t.value) && void 0 !== d ? d : 0;
    return (0, l.jsx)(r.Zb, {
        selected: h,
        children: (0, l.jsxs)(r.e$, {
            children: [
                (0, l.jsxs)('div', {
                    className: c.gameTitleContainer,
                    children: [
                        (0, l.jsx)(a.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                        (0, l.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            className: c.gameTitle,
                            children: 'League of Legends'
                        })
                    ]
                }),
                (0, l.jsx)(a.Spacer, { size: 2 }),
                (0, l.jsx)(r.ll, { children: 'New #1 Player' }),
                (0, l.jsx)(i.Gk, {
                    location: i.Gt.CARD,
                    children: (0, l.jsx)(o.D, {
                        value: f,
                        statisticId: p
                    })
                })
            ]
        })
    });
}

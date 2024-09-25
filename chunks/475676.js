n.d(t, {
    Z: function () {
        return h;
    }
});
var a = n(735250);
n(470079);
var l = n(481060),
    i = n(297781),
    r = n(443487),
    s = n(235070),
    o = n(584283),
    u = n(709737),
    c = n(463031),
    d = n(835777);
function h(e) {
    var t, n, h;
    let { selected: m, channel: x } = e,
        E = x.guild_id,
        v = (0, o.Z)({
            guildId: E,
            leaderboardId: c._,
            intervalOffset: 0
        }),
        { sortByStatisticId: _ } = (0, s.A)(c._),
        f = v[0],
        T = null !== (h = null == f ? void 0 : null === (n = f.statistics) || void 0 === n ? void 0 : null === (t = n[_]) || void 0 === t ? void 0 : t.value) && void 0 !== h ? h : 0;
    return (0, a.jsx)(r.Zb, {
        selected: m,
        children: (0, a.jsxs)(r.e$, {
            children: [
                (0, a.jsxs)('div', {
                    className: d.gameTitleContainer,
                    children: [
                        (0, a.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            className: d.gameTitle,
                            children: 'League of Legends'
                        })
                    ]
                }),
                (0, a.jsx)(l.Spacer, { size: 2 }),
                (0, a.jsx)(r.ll, { children: 'New #1 Player' }),
                (0, a.jsx)(i.Gk, {
                    location: i.Gt.CARD,
                    children: (0, a.jsx)(u.D, {
                        value: T,
                        statisticId: _
                    })
                })
            ]
        })
    });
}

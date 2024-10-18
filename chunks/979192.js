n.d(t, {
    O: function () {
        return l;
    }
});
var r = n(442837),
    i = n(675478),
    a = n(581883),
    s = n(434382);
async function o(e, t) {
    await (0, i.PS)(
        e,
        (e) => {
            e.leaderboardsDisabled = !e.leaderboardsDisabled;
        },
        i.fy.INFREQUENT_USER_ACTION
    ),
        await new Promise((e) => setTimeout(e, 300)),
        await s.Z.fetchLeaderboard({
            guildId: e,
            leaderboardId: t,
            force: !0
        });
}
function l(e, t) {
    let n = (0, r.e7)(
        [a.Z],
        () => {
            var t, n;
            return null === (n = a.Z.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[e];
        },
        [e]
    );
    return {
        leaderboardsDisabled: (null == n ? void 0 : n.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => o(e, t)
    };
}

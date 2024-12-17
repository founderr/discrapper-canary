n.d(t, {
    _: function () {
        return r;
    }
});
var i = n(425128),
    a = n(434382);
let r = async (e) => {
    await i._b(e),
        await a.Z.fetchLeaderboard({
            guildId: e.guildId,
            leaderboardId: e.leaderboardId,
            force: !0
        });
};

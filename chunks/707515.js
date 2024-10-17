t.d(s, {
    _: function () {
        return r;
    }
});
var n = t(425128),
    a = t(434382);
let r = async (e) => {
    await n._b(e),
        await a.Z.fetchLeaderboard({
            guildId: e.guildId,
            leaderboardId: e.leaderboardId,
            force: !0
        });
};

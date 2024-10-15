n.d(t, {
    O: function () {
        return s;
    }
});
var r = n(442837),
    i = n(675478),
    a = n(581883);
function s(e) {
    let t = (0, r.e7)(
        [a.Z],
        () => {
            var t, n;
            return null === (n = a.Z.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[e];
        },
        [e]
    );
    return {
        leaderboardsDisabled: (null == t ? void 0 : t.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => {
            var t;
            return (
                (t = e),
                void (0, i.PS)(
                    t,
                    (e) => {
                        e.leaderboardsDisabled = !e.leaderboardsDisabled;
                    },
                    i.fy.INFREQUENT_USER_ACTION
                )
            );
        }
    };
}

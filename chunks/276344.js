n.d(t, {
    NM: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2024-09_league_of_legends_leaderboard',
    label: 'League of Legends Leaderboard',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Leaderboard',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { guildId: t, location: n, autoTrackExposure: i = !0 } = e,
        { enabled: a } = r.getCurrentConfig(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: i }
        );
    return a;
}

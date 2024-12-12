r.d(n, {
    S: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
        id: '2024-03_quests_activity_quest',
        kind: 'user',
        label: 'Activity Quest',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Activity Quest enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: n, autoTrackExposure: r } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: r }).enabled;
    };

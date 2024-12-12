r.d(n, {
    j: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
        id: '2024-10_quests_dismissal_survey',
        kind: 'user',
        label: 'Quests Dismissal Survey',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
    };

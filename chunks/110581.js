n.d(t, {
    P: function () {
        return s;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_recent_activity_in_dms',
        label: 'Recent Activity in DMs',
        defaultConfig: {
            recentActivitySectionEnabled: !1,
            recentActivityStatusEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Recent activity in user profile panels enabled',
                config: {
                    recentActivitySectionEnabled: !0,
                    recentActivityStatusEnabled: !1
                }
            },
            {
                id: 2,
                label: 'Recent activity in user profile panels and status in private channels list enabled',
                config: {
                    recentActivitySectionEnabled: !0,
                    recentActivityStatusEnabled: !0
                }
            }
        ]
    }),
    s = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: s = {} } = e;
        return i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: s
            }
        );
    };

n.d(t, {
    U: function () {
        return s;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_user_profile_panel_recent_activity_status',
        label: 'User Profile Panel Recent Activity Status',
        defaultConfig: { recentActivityStatusEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Recent activity in user profile panels and status in private channels list enabled',
                config: { recentActivityStatusEnabled: !0 }
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

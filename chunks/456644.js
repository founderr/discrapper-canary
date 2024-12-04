n.d(t, {
    G: function () {
        return i;
    },
    i: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-11_user_profile_recent_activity',
        label: 'User Profile Recent Activity',
        defaultConfig: { recentActivityEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'User Profile Recent Activity Enabled',
                config: { recentActivityEnabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    },
    a = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };

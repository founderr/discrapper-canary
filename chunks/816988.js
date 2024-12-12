r.d(n, {
    u: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
        kind: 'user',
        id: '2024-10_nitro_shop_entry_points',
        label: 'User Profile Nitro Shop Entry Points',
        defaultConfig: {
            permanentEntryPointsEnabled: !1,
            dimissibleUpsellsEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enable Permanent Entry Points',
                config: {
                    permanentEntryPointsEnabled: !0,
                    dimissibleUpsellsEnabled: !1
                }
            },
            {
                id: 2,
                label: 'Enable Dimissible Upsells',
                config: {
                    permanentEntryPointsEnabled: !1,
                    dimissibleUpsellsEnabled: !0
                }
            }
        ]
    }),
    a = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: r });
    };

r.d(n, {
    Z: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
        kind: 'user',
        id: '2024-08_soundboard_refresh',
        label: 'Soundboard UI Refresh',
        defaultConfig: { refreshEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable the updated soundboard picker UI',
                config: { refreshEnabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: n, autoTrackExposure: r = !0, trackExposureOptions: a = {} } = e;
        return i.useExperiment(
            { location: n },
            {
                autoTrackExposure: r,
                trackExposureOptions: a
            }
        );
    };

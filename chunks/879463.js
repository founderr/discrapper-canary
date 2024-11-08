t.d(n, {
    eP: function () {
        return s;
    }
});
let s = (0, t(818083).B)({
    kind: 'user',
    id: '2023-12_pause_subscriptions_experiment',
    label: 'Pause Subscriptions Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Pause Subscription Enabled',
            config: { enabled: !0 }
        }
    ]
});
n.ZP = (e) => {
    let { location: n, autoTrackExposure: t = !0, trackExposureOptions: r = {} } = e;
    return s.useExperiment(
        { location: n },
        {
            autoTrackExposure: t,
            trackExposureOptions: r
        }
    );
};

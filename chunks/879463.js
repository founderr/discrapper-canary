s.d(n, {
    eP: function () {
        return t;
    }
});
let t = (0, s(818083).B)({
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
    let { location: n, autoTrackExposure: s = !0, trackExposureOptions: r = {} } = e;
    return t.useExperiment(
        { location: n },
        {
            autoTrackExposure: s,
            trackExposureOptions: r
        }
    );
};

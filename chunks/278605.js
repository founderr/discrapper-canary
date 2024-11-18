n.d(t, {
    xP: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-11_marketing_page_v2_experiment',
    label: 'Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: 'User see current marketing page',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'users see new marketing page',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { enabled: t } = i.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}

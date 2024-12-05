s.d(t, {
    xP: function () {
        return r;
    }
});
let n = (0, s(818083).B)({
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
function r(e, t) {
    let { enabled: s } = n.useExperiment({ location: e }, { autoTrackExposure: null != t && t });
    return s;
}

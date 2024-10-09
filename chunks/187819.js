s.d(t, {
    _p: function () {
        return n;
    },
    sp: function () {
        return T;
    }
});
let o = (0, s(818083).B)({
    kind: 'user',
    id: '2024-08_safety_settings_update',
    label: 'Safety Settings Update',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Safety Settings Update',
            config: { enabled: !0 }
        }
    ]
});
function T(e) {
    let { location: t, autoTrackExposure: s } = e,
        { enabled: T } = o.getCurrentConfig({ location: t }, { autoTrackExposure: null == s || s });
    return T;
}
function n(e) {
    let { location: t, autoTrackExposure: s } = e,
        { enabled: T } = o.useExperiment({ location: t }, { autoTrackExposure: null == s || s });
    return T;
}

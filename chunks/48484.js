e.d(n, {
    V: function () {
        return a;
    }
});
let i = (0, e(818083).B)({
    kind: 'user',
    id: '2023-11_safety_hub_inapp_appeal_ingestion',
    label: 'Safety Hub In App Appeals Ingestion',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Allow users to interact with the new In-App appeals ingestion flow',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'DSA Testser',
            config: { enabled: !0 }
        }
    ]
});
function a(t) {
    return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}

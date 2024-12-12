r.d(n, {
    H: function () {
        return a;
    }
});
let i = (0, r(987170).Z)({
    kind: 'user',
    id: '2023-08_overlay3_out_of_process_enablement',
    label: 'Overlay3 - Out of Process Enablement',
    defaultConfig: { useGlobalOverlay: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { useGlobalOverlay: !0 }
        }
    ]
});
function a() {
    let e = i.getCurrentConfig({ location: 'isOOPExperimentEnabled' }, { autoTrackExposure: !0 });
    return null != e && e.useGlobalOverlay;
}

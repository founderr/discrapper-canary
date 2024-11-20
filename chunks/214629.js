n.d(t, {
    PR: function () {
        return l;
    },
    e1: function () {
        return o;
    }
});
var r = n(818083),
    i = n(32300),
    a = n(987338);
let s = (0, r.B)({
    kind: 'user',
    id: '2024-11_activity_popout_window',
    label: 'Activity Popout Window Experiment',
    defaultConfig: {
        enabled: !1,
        enableOverlayInActivityPopoutWindow: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable activity popout window',
            config: {
                enabled: !0,
                enableOverlayInActivityPopoutWindow: !1
            }
        },
        {
            id: 2,
            label: 'Enable activity popout window with overlay',
            config: {
                enabled: !0,
                enableOverlayInActivityPopoutWindow: !0
            }
        }
    ]
});
function o() {
    return s.getCurrentConfig({ location: 'getIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && (0, i.R)();
}
function l() {
    let e = i.Z.useExperiment({ location: 'useIsActivityPopoutOverlayEnabled' }).useOverlayV3;
    return s.useExperiment({ location: 'useIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
t.ZP = s;

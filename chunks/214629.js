r.d(n, {
    PR: function () {
        return u;
    },
    Z0: function () {
        return c;
    },
    e1: function () {
        return l;
    }
});
var i = r(818083),
    a = r(32300),
    s = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-11_activity_popout_window',
    label: 'Activity Popout Window Experiment',
    defaultConfig: {
        enabled: !1,
        enableOverlayInActivityPopoutWindow: !1,
        enableGoLiveFromActivityCard: !1
    },
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable activity popout window',
            config: {
                enabled: !0,
                enableOverlayInActivityPopoutWindow: !1,
                enableGoLiveFromActivityCard: !1
            }
        },
        {
            id: 2,
            label: 'Enable activity popout window with overlay',
            config: {
                enabled: !0,
                enableOverlayInActivityPopoutWindow: !0,
                enableGoLiveFromActivityCard: !1
            }
        },
        {
            id: 3,
            label: 'Enable activity popout window with overlay and GoLive from activity card',
            config: {
                enabled: !0,
                enableOverlayInActivityPopoutWindow: !0,
                enableGoLiveFromActivityCard: !0
            }
        }
    ]
});
function l() {
    let e = (0, a.Rb)('ActivityPopout');
    return o.getCurrentConfig({ location: 'getIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
function u() {
    let e = (0, a.o4)('ActivityPopout');
    return o.useExperiment({ location: 'useIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
function c() {
    return o.useExperiment({ location: 'useCanGoLiveActivityFromActivityCard' }).enableGoLiveFromActivityCard;
}
n.ZP = o;

n.d(t, {
    Q: function () {
        return l;
    },
    f: function () {
        return a;
    }
});
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2024-11_teen_defaults__message_requests',
    label: 'New defaults for message requests',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable the new defaults for message requests',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return l.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}

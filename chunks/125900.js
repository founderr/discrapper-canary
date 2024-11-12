n.d(t, {
    J: function () {
        return a;
    },
    V: function () {
        return s;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    id: '2024-11_soundmoji_sending',
    label: 'Send soundmojis',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}

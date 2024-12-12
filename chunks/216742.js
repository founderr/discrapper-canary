r.d(n, {
    I: function () {
        return o;
    },
    g: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-10_rapidash_discovery_plus',
    label: 'Rapidash Discovery Plus',
    defaultConfig: {
        enabled: !1,
        treatment: 'control'
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Discovery Plus Enabled',
            config: {
                enabled: !0,
                treatment: 'discovery-plus'
            }
        }
    ]
});
function o() {
    return s.useExperiment({ location: 'RapidashDiscoveryPlusExperiment' }, { autoTrackExposure: !1 });
}

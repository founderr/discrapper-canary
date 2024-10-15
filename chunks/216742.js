n.d(t, {
    I7: function () {
        return r;
    },
    gh: function () {
        return s;
    }
});
var i = n(818083),
    a = n(987338);
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
function r() {
    return s.useExperiment({ location: 'RapidashDiscoveryPlusExperiment' }, { autoTrackExposure: !1 });
}

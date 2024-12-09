t.d(n, {
    s: function () {
        return r;
    },
    u: function () {
        return i;
    }
});
var o = t(818083),
    l = t(987338);
let i = (0, o.B)({
    id: '2024-11_nitro_basic_upsell',
    label: 'Nitro Basic Upsell',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
}

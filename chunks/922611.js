r.d(n, {
    Do: function () {
        return l;
    },
    JX: function () {
        return o;
    },
    S2: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-10_stealth_remediation',
    label: 'A new user remediation tool',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable the new user remediation tool',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: n } = e;
    return s.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: n } = e;
    return s.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}

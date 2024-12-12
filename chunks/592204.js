r.d(n, {
    Xo: function () {
        return o;
    },
    pB: function () {
        return l;
    }
});
var i = r(818083),
    a = r(517858);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-04_keyword_filter_experiment',
    label: 'Replace registered keywords with asterisks',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Keyword Filter',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: n } = e,
        r = (0, a.C3)({ location: n });
    return s.useExperiment({ location: n }, { autoTrackExposure: !0 }).enabled || r;
}
function l(e) {
    let { location: n } = e,
        r = (0, a.GW)({ location: n });
    return s.getCurrentConfig({ location: n }).enabled || r;
}

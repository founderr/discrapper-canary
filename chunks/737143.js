t.d(a, {
    q1: function () {
        return o;
    },
    tr: function () {
        return i;
    }
});
var n = t(818083),
    s = t(358085),
    r = t(474936);
let l = (0, n.B)({
    id: '2023-07_checkout_optimization_browser_autofill',
    label: 'Checkout Optimization Browser Autofill',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: {
                enabled: !0,
                delay: !1
            }
        },
        {
            id: 2,
            label: 'Enabled with delay',
            config: {
                enabled: !0,
                delay: !0
            }
        }
    ]
});
function o() {
    return l.getCurrentConfig({ location: '5f89bb_3' }, { autoTrackExposure: !0 });
}
function i(e, a, t) {
    return (0, s.isDesktop)() && null != e && [r.Si.TIER_0, r.Si.TIER_2].includes(e) && !a && null == t;
}

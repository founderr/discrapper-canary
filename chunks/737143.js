n.d(t, {
    L4: function () {
        return o;
    },
    q1: function () {
        return c;
    },
    tr: function () {
        return u;
    }
});
var a = n(818083),
    r = n(358085),
    l = n(987338),
    s = n(474936);
let i = (0, a.B)({
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
    }),
    o = (0, a.B)({
        id: '2024-11_checkout_optimization_browser_autofill_global',
        label: 'Checkout Optimization Browser Autofill Global',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            delay: !1
        },
        commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
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
function c() {
    let e = i.getCurrentConfig({ location: '5f89bb_3' }, { autoTrackExposure: !0 });
    return e.enabled ? e : o.getCurrentConfig({ location: '5f89bb_3' }, { autoTrackExposure: !0 });
}
function u(e, t, n) {
    return (0, r.isDesktop)() && null != e && [s.Si.TIER_0, s.Si.TIER_2].includes(e) && !t && null == n;
}

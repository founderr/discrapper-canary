t.d(n, {
    NR: function () {
        return i;
    },
    Ob: function () {
        return s;
    },
    ZI: function () {
        return l;
    },
    m1: function () {
        return c;
    },
    uc: function () {
        return a;
    }
});
var o = t(987170),
    r = t(987338);
let i = (0, o.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_vanilla',
        label: 'CTP payment flow started - A/A test - Vanilla',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    l = (0, o.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_filters_',
        label: 'CTP payment flow started - A/A test - Filters',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    a = (0, o.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_multiple_buckets',
        label: 'CTP payment flow started - A/A test - Multiple buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment 1',
                config: { doSomething: !0 }
            },
            {
                id: 2,
                label: 'Treatment 2',
                config: { doSomething: !0 }
            }
        ]
    }),
    s = (0, o.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_everyone',
        label: 'CTP payment flow started - A/A test - Everyone',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    c = (0, o.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_uneven_buckets_',
        label: 'CTP payment flow started - A/A test - Uneven buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    });

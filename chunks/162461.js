r.d(n, {
    DG: function () {
        return o;
    },
    kt: function () {
        return f;
    },
    nP: function () {
        return d;
    },
    sA: function () {
        return l;
    },
    wm: function () {
        return u;
    }
});
var i = r(818083),
    a = r(109911),
    s = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-03_content_inventory_memberlist_and_ranker',
    label: 'Enables the memberlist content feed',
    defaultConfig: {
        enabled: !0,
        impressionCappingEnabled: !0
    },
    treatments: [
        {
            id: -1,
            label: 'Not in experiment',
            config: { enabled: !1 }
        },
        {
            id: 0,
            label: 'Holdout',
            config: { enabled: !1 }
        }
    ]
});
function l(e) {
    let { enabled: n } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        r = (0, a.Ji)(e, !1);
    return n || r;
}
function u(e) {
    let { enabled: n, impressionCappingEnabled: r } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return n && !0 === r;
}
let c = (0, i.B)({
    kind: 'user',
    id: '2024-08_content_inventory_analytics_sampling',
    label: 'Content Inventory Analytics Sampling',
    defaultConfig: { trackingEnabled: !0 },
    treatments: [
        {
            id: 1,
            label: 'Tracking disabled',
            config: { trackingEnabled: !1 }
        }
    ]
});
function d(e) {
    return c.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
let f = (0, i.B)({
    kind: 'user',
    id: '2024-11_hotwheels_activity_feed_ml_model',
    label: 'Hotwheels Activity Feed ML Model',
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: {},
    treatments: [
        {
            id: 3,
            label: 'Control (Noteworthy)',
            config: {}
        },
        {
            id: 5,
            label: 'ML model (lowest threshold, most % positives)',
            config: {}
        },
        {
            id: 6,
            label: 'ML model (medium threshold, match % positives to heuristic)',
            config: {}
        },
        {
            id: 7,
            label: 'ML model (highest threshold, highest f1 score but fewer positives)',
            config: {}
        },
        {
            id: 8,
            label: 'Randomized',
            config: {}
        }
    ]
});

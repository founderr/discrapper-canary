n.d(t, {
    DG: function () {
        return s;
    },
    Dy: function () {
        return c;
    },
    kt: function () {
        return _;
    },
    nP: function () {
        return f;
    },
    sA: function () {
        return o;
    },
    wm: function () {
        return l;
    }
});
var r = n(818083),
    i = n(109911),
    a = n(987338);
let s = (0, r.B)({
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
function o(e) {
    let { enabled: t } = s.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        n = (0, i.Ji)(e, !1);
    return t || n;
}
function l(e) {
    let { enabled: t, impressionCappingEnabled: n } = s.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t && !0 === n;
}
let u = (0, r.B)({
    kind: 'user',
    id: '2024-04_content_inventory_listened_media',
    label: 'Content Inventory: LISTENED_MEDIA',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function c(e) {
    let { enabled: t } = u.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let d = (0, r.B)({
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
function f(e) {
    return d.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
let _ = (0, r.B)({
    kind: 'user',
    id: '2024-11_hotwheels_activity_feed_ml_model',
    label: 'Hotwheels Activity Feed ML Model',
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
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

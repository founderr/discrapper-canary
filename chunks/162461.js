n.d(t, {
    DG: function () {
        return a;
    },
    Dy: function () {
        return u;
    },
    nP: function () {
        return d;
    },
    sA: function () {
        return s;
    },
    wm: function () {
        return o;
    }
});
var r = n(818083),
    i = n(109911);
let a = (0, r.B)({
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
function s(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        n = (0, i.Ji)(e, !1);
    return t || n;
}
function o(e) {
    let { enabled: t, impressionCappingEnabled: n } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t && !0 === n;
}
let l = (0, r.B)({
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
function u(e) {
    let { enabled: t } = l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let c = (0, r.B)({
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

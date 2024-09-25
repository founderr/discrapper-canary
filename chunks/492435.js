n.d(t, {
    W9: function () {
        return s;
    },
    Xz: function () {
        return l;
    },
    gK: function () {
        return u;
    },
    rX: function () {
        return c;
    }
});
var r = n(570140),
    i = n(353926),
    a = n(987338);
let o = !1;
function s(e, t, n) {
    if (o) {
        var s, l;
        let o = null == n ? void 0 : n.location,
            u = (null == n ? void 0 : n.exposureType) === a.a0.AUTO_FALLBACK,
            c = i.Z.hasExperimentTrackedExposure(e, t, o, u);
        r.Z.dispatch({
            type: 'TRACK_TRIGGER',
            experimentId: e,
            descriptor: t,
            previouslyTracked: c,
            exposureType: null !== (s = null == n ? void 0 : n.exposureType) && void 0 !== s ? s : 'unknown',
            excluded: null !== (l = null == n ? void 0 : n.excluded) && void 0 !== l && l,
            location: null != o ? o : 'unknown'
        });
    }
    i.Z.trackExposure({
        experimentId: e,
        descriptor: t,
        location: null == n ? void 0 : n.location,
        location_stack: null == n ? void 0 : n.analyticsLocations,
        fingerprint: null == n ? void 0 : n.fingerprint,
        excluded: null == n ? void 0 : n.excluded,
        exposureType: null == n ? void 0 : n.exposureType
    });
}
function l(e) {
    let { id: t, title: n, description: r, buckets: o, commonTriggerPoint: s } = e;
    return (
        (0, i.V)({
            experimentId: t,
            experimentType: a.xY.USER,
            title: n,
            description: r,
            buckets: o,
            commonTriggerPoint: s
        }),
        { id: t }
    );
}
function u(e) {
    let { id: t, title: n, description: r, buckets: o, commonTriggerPoint: s } = e;
    return (
        (0, i.V)({
            experimentId: t,
            experimentType: a.xY.GUILD,
            title: n,
            description: r,
            buckets: o,
            commonTriggerPoint: s
        }),
        { id: t }
    );
}
function c(e, t) {
    r.Z.dispatch({
        type: 'EXPERIMENT_OVERRIDE_BUCKET',
        experimentId: e,
        experimentBucket: t
    });
}

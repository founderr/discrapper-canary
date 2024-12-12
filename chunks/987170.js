r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(128456),
    o = r(314897),
    l = r(492435),
    u = r(353926),
    c = r(980944),
    d = r(987338);
function f(e, n) {
    return 'guild' === e ? (0, l.gK)(n) : (0, l.Xz)(n);
}
function _(e, n, r) {
    return 'guild' === e ? u.Z.getGuildExperimentDescriptor(n, r.guildId) : u.Z.getUserExperimentDescriptor(n);
}
function h(e, n, r, i) {
    var a, s;
    return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (s = null === (a = r.get(n)) || void 0 === a ? void 0 : a.config) && void 0 !== s ? s : e.defaultConfig;
}
function p(e) {
    (0, c.K)(e.id, e.label, e.commonTriggerPoint);
    let n = new Map();
    n.set(d.NZ.NOT_ELIGIBLE, {
        description: 'Not Eligible',
        config: e.defaultConfig
    }),
        n.set(d.NZ.CONTROL, {
            description: 'Control Bucket',
            config: e.defaultConfig
        }),
        e.treatments.forEach((e) => {
            n.set(e.id, {
                description: 'Treatment '.concat(e.id, ': ').concat(e.label),
                config: e.config
            });
        });
    let r = f(e.kind, {
        id: e.id,
        title: e.label,
        commonTriggerPoint: e.commonTriggerPoint,
        description: [...n.values()].map((e) => e.description),
        buckets: [...n.keys()]
    });
    function i(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (((n.exposureType = r ? d.a0.AUTO_FALLBACK : d.a0.AUTO), (n.excluded = !1), null == i)) {
            p(e, n);
            return;
        }
        m(e, n, i);
    }
    function p(n) {
        let i =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          excluded: !1,
                          exposureType: d.a0.MANUAL
                      },
            a = _(e.kind, r.id, n);
        null != a && m(n, i, a);
    }
    function m(e, n, i) {
        if (null != i) {
            var a, s, u, c, f;
            let _ = d.a0.MANUAL,
                h = !1;
            (0, l.W9)(r.id, i, {
                location: null !== (a = null == e ? void 0 : e.location) && void 0 !== a ? a : 'unknown',
                analyticsLocations: null !== (s = null == n ? void 0 : n.analyticsLocations) && void 0 !== s ? s : [],
                fingerprint: null !== (c = null !== (u = null == n ? void 0 : n.fingerprint) && void 0 !== u ? u : o.default.getFingerprint()) && void 0 !== c ? c : void 0,
                excluded: (null == n ? void 0 : n.excluded) || h,
                exposureType: null !== (f = null == n ? void 0 : n.exposureType) && void 0 !== f ? f : _
            });
        }
    }
    function g(r, i) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            s = null != a.disable && a.disable,
            o = _(e.kind, e.id, r),
            l = null == o || s ? d.NZ.NOT_ELIGIBLE : o.bucket,
            c = null == o ? -1 : o.revision;
        function f() {
            let a = _(e.kind, e.id, r),
                o = null == a || s ? d.NZ.NOT_ELIGIBLE : a.bucket,
                u = null == a ? -1 : a.revision;
            (o !== l || c !== u) && (i(h(e, o, n, a), o, u), (l = o), (c = u));
        }
        return (
            i(h(e, l, n, o), l, c),
            u.Z.addReactChangeListener(f),
            () => {
                u.Z.removeReactChangeListener(f);
            }
        );
    }
    function E(n) {
        let r = _(e.kind, e.id, n);
        return !!(null == r ? void 0 : r.aaMode);
    }
    return {
        useExperiment: function r(r) {
            var o, l, u;
            let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                f = null !== (o = c.disable) && void 0 !== o && o,
                p = !1 !== c.autoTrackExposure,
                m = _(e.kind, e.id, r),
                E = null == c.trackExposureOptions ? void 0 : (0, s.Z)(null !== (l = c.trackExposureOptions) && void 0 !== l ? l : {}),
                v = null !== (u = null == m ? void 0 : m.triggerDebuggingEnabled) && void 0 !== u && u,
                [[I, T, b], y] = (0, a.useState)(() => {
                    let r = null == m || f ? d.NZ.NOT_ELIGIBLE : m.bucket;
                    return [h(e, r, n, m), r, null == m ? -1 : m.revision];
                }),
                S = (0, s.Z)(r);
            return (
                (0, a.useEffect)(() => {
                    if (!f && (!!p || !!v) && null == e.commonTriggerPoint) i(S, E, !1 === p);
                }, [f, p, S, E, T, b, v]),
                (0, a.useEffect)(
                    () =>
                        g(
                            S,
                            (e, n, r) => {
                                y((i) => (i[0] === e && i[1] === n && i[2] === r ? i : [e, n, r]));
                            },
                            { disable: f }
                        ),
                    [f, S]
                ),
                I
            );
        },
        subscribe: g,
        trackExposure: p,
        getCurrentConfig: function r(r) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                s = _(e.kind, e.id, r);
            if (null == s || a.disable) return h(e, d.NZ.NOT_ELIGIBLE, n, s);
            if ((!1 !== a.autoTrackExposure || s.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === a.autoTrackExposure;
                i(r, a.trackExposureOptions, e, s);
            }
            return h(e, s.bucket, n, s);
        },
        definition: e,
        isAAMode: E
    };
}

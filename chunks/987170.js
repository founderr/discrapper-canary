n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(192379),
    i = n(128456),
    a = n(314897),
    s = n(492435),
    o = n(353926),
    l = n(980944),
    u = n(987338);
function c(e, t, n) {
    return 'guild' === e ? o.Z.getGuildExperimentDescriptor(t, n.guildId) : o.Z.getUserExperimentDescriptor(t);
}
function d(e, t, n, r) {
    var i, a;
    return (null == r ? void 0 : r.aaMode) ? e.defaultConfig : null !== (a = null === (i = n.get(t)) || void 0 === i ? void 0 : i.config) && void 0 !== a ? a : e.defaultConfig;
}
function f(e) {
    var t, n;
    (0, l.K)(e.id, e.label, e.commonTriggerPoint);
    let f = new Map();
    f.set(u.NZ.NOT_ELIGIBLE, {
        description: 'Not Eligible',
        config: e.defaultConfig
    }),
        f.set(u.NZ.CONTROL, {
            description: 'Control Bucket',
            config: e.defaultConfig
        }),
        e.treatments.forEach((e) => {
            f.set(e.id, {
                description: 'Treatment '.concat(e.id, ': ').concat(e.label),
                config: e.config
            });
        });
    let _ =
        ((t = e.kind),
        (n = {
            id: e.id,
            title: e.label,
            commonTriggerPoint: e.commonTriggerPoint,
            description: [...f.values()].map((e) => e.description),
            buckets: [...f.keys()]
        }),
        'guild' === t ? (0, s.gK)(n) : (0, s.Xz)(n));
    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (((t.exposureType = n ? u.a0.AUTO_FALLBACK : u.a0.AUTO), (t.excluded = !1), null == r)) {
            h(e, t);
            return;
        }
        m(e, t, r);
    }
    function h(t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          excluded: !1,
                          exposureType: u.a0.MANUAL
                      },
            r = c(e.kind, _.id, t);
        null != r && m(t, n, r);
    }
    function m(e, t, n) {
        if (null != n) {
            var r, i, o, l, c;
            let d = u.a0.MANUAL;
            (0, s.W9)(_.id, n, {
                location: null !== (r = null == e ? void 0 : e.location) && void 0 !== r ? r : 'unknown',
                analyticsLocations: null !== (i = null == t ? void 0 : t.analyticsLocations) && void 0 !== i ? i : [],
                fingerprint: null !== (l = null !== (o = null == t ? void 0 : t.fingerprint) && void 0 !== o ? o : a.default.getFingerprint()) && void 0 !== l ? l : void 0,
                excluded: (null == t ? void 0 : t.excluded) || !1,
                exposureType: null !== (c = null == t ? void 0 : t.exposureType) && void 0 !== c ? c : d
            });
        }
    }
    function g(t, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = null != r.disable && r.disable,
            a = c(e.kind, e.id, t),
            s = null == a || i ? u.NZ.NOT_ELIGIBLE : a.bucket,
            l = null == a ? -1 : a.revision;
        function _() {
            let r = c(e.kind, e.id, t),
                a = null == r || i ? u.NZ.NOT_ELIGIBLE : r.bucket,
                o = null == r ? -1 : r.revision;
            (a !== s || l !== o) && (n(d(e, a, f, r), a, o), (s = a), (l = o));
        }
        return (
            n(d(e, s, f, a), s, l),
            o.Z.addReactChangeListener(_),
            () => {
                o.Z.removeReactChangeListener(_);
            }
        );
    }
    return {
        useExperiment: function (t) {
            var n, a, s;
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                l = null !== (n = o.disable) && void 0 !== n && n,
                _ = !1 !== o.autoTrackExposure,
                h = c(e.kind, e.id, t),
                m = null == o.trackExposureOptions ? void 0 : (0, i.Z)(null !== (a = o.trackExposureOptions) && void 0 !== a ? a : {}),
                E = null !== (s = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== s && s,
                [[v, I, b], T] = (0, r.useState)(() => {
                    let t = null == h || l ? u.NZ.NOT_ELIGIBLE : h.bucket;
                    return [d(e, t, f, h), t, null == h ? -1 : h.revision];
                }),
                S = (0, i.Z)(t);
            return (
                (0, r.useEffect)(() => {
                    if (!l && (!!_ || !!E) && null == e.commonTriggerPoint) p(S, m, !1 === _);
                }, [l, _, S, m, I, b, E]),
                (0, r.useEffect)(
                    () =>
                        g(
                            S,
                            (e, t, n) => {
                                T((r) => (r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n]));
                            },
                            { disable: l }
                        ),
                    [l, S]
                ),
                v
            );
        },
        subscribe: g,
        trackExposure: h,
        getCurrentConfig: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                r = c(e.kind, e.id, t);
            if (null == r || n.disable) return d(e, u.NZ.NOT_ELIGIBLE, f, r);
            if ((!1 !== n.autoTrackExposure || r.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === n.autoTrackExposure;
                p(t, n.trackExposureOptions, e, r);
            }
            return d(e, r.bucket, f, r);
        },
        definition: e,
        isAAMode: function (t) {
            let n = c(e.kind, e.id, t);
            return !!(null == n ? void 0 : n.aaMode);
        }
    };
}

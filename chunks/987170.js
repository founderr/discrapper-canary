n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(180205),
    o = n(314897),
    s = n(492435),
    l = n(353926),
    u = n(980944),
    c = n(987338);
function d(e, t) {
    return 'guild' === e ? (0, s.gK)(t) : (0, s.Xz)(t);
}
function _(e, t, n) {
    return 'guild' === e ? l.Z.getGuildExperimentDescriptor(t, n.guildId) : l.Z.getUserExperimentDescriptor(t);
}
function E(e, t, n, r) {
    var i, a;
    return (null == r ? void 0 : r.aaMode) ? e.defaultConfig : null !== (a = null === (i = n.get(t)) || void 0 === i ? void 0 : i.config) && void 0 !== a ? a : e.defaultConfig;
}
function f(e) {
    (0, u.K)(e.id, e.label, e.commonTriggerPoint);
    let t = new Map();
    t.set(c.NZ.NOT_ELIGIBLE, {
        description: 'Not Eligible',
        config: e.defaultConfig
    }),
        t.set(c.NZ.CONTROL, {
            description: 'Control Bucket',
            config: e.defaultConfig
        }),
        e.treatments.forEach((e) => {
            t.set(e.id, {
                description: 'Treatment '.concat(e.id, ': ').concat(e.label),
                config: e.config
            });
        });
    let n = d(e.kind, {
        id: e.id,
        title: e.label,
        commonTriggerPoint: e.commonTriggerPoint,
        description: [...t.values()].map((e) => e.description),
        buckets: [...t.keys()]
    });
    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (((t.exposureType = n ? c.a0.AUTO_FALLBACK : c.a0.AUTO), (t.excluded = !1), null == r)) {
            f(e, t);
            return;
        }
        h(e, t, r);
    }
    function f(t) {
        let r =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          excluded: !1,
                          exposureType: c.a0.MANUAL
                      },
            i = _(e.kind, n.id, t);
        null != i && h(t, r, i);
    }
    function h(e, t, r) {
        if (null != r) {
            var i, a, l, u, d;
            let _ = c.a0.MANUAL,
                E = !1;
            (0, s.W9)(n.id, r, {
                location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : 'unknown',
                analyticsLocations: null !== (a = null == t ? void 0 : t.analyticsLocations) && void 0 !== a ? a : [],
                fingerprint: null !== (u = null !== (l = null == t ? void 0 : t.fingerprint) && void 0 !== l ? l : o.default.getFingerprint()) && void 0 !== u ? u : void 0,
                excluded: (null == t ? void 0 : t.excluded) || E,
                exposureType: null !== (d = null == t ? void 0 : t.exposureType) && void 0 !== d ? d : _
            });
        }
    }
    function p(n, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = null != i.disable && i.disable,
            o = _(e.kind, e.id, n),
            s = null == o || a ? c.NZ.NOT_ELIGIBLE : o.bucket,
            u = null == o ? -1 : o.revision;
        function d() {
            let i = _(e.kind, e.id, n),
                o = null == i || a ? c.NZ.NOT_ELIGIBLE : i.bucket,
                l = null == i ? -1 : i.revision;
            (o !== s || u !== l) && (r(E(e, o, t, i), o, l), (s = o), (u = l));
        }
        return (
            r(E(e, s, t, o), s, u),
            l.Z.addReactChangeListener(d),
            () => {
                l.Z.removeReactChangeListener(d);
            }
        );
    }
    function m(t) {
        let n = _(e.kind, e.id, t);
        return !!(null == n ? void 0 : n.aaMode);
    }
    return {
        useExperiment: function n(n) {
            var o, s, l;
            let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                d = null !== (o = u.disable) && void 0 !== o && o,
                f = !1 !== u.autoTrackExposure,
                h = _(e.kind, e.id, n),
                m = null == u.trackExposureOptions ? void 0 : (0, a.Z)(null !== (s = u.trackExposureOptions) && void 0 !== s ? s : {}),
                I = null !== (l = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== l && l,
                [[T, g, S], A] = (0, i.useState)(() => {
                    let n = null == h || d ? c.NZ.NOT_ELIGIBLE : h.bucket;
                    return [E(e, n, t, h), n, null == h ? -1 : h.revision];
                }),
                v = (0, a.Z)(n);
            return (
                (0, i.useEffect)(() => {
                    if (!d && (!!f || !!I)) r(v, m, !1 === f);
                }, [d, f, v, m, g, S, I]),
                (0, i.useEffect)(
                    () =>
                        p(
                            v,
                            (e, t, n) => {
                                A((r) => (r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n]));
                            },
                            { disable: d }
                        ),
                    [d, v]
                ),
                T
            );
        },
        subscribe: p,
        trackExposure: f,
        getCurrentConfig: function n(n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                a = _(e.kind, e.id, n);
            if (null == a || i.disable) return E(e, c.NZ.NOT_ELIGIBLE, t, a);
            if (!1 !== i.autoTrackExposure || a.triggerDebuggingEnabled) {
                let e = !1 === i.autoTrackExposure;
                r(n, i.trackExposureOptions, e, a);
            }
            return E(e, a.bucket, t, a);
        },
        definition: e,
        isAAMode: m
    };
}

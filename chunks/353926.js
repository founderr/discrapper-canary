n.d(t, {
    V: function () {
        return eE;
    }
});
var r = n(789020);
var i = n(411104);
var a = n(47120);
var o = n(757143);
var s = n(392711),
    l = n.n(s),
    u = n(108131),
    c = n.n(u),
    d = n(433517),
    _ = n(570140),
    E = n(865427),
    f = n(710845),
    h = n(314897),
    p = n(412788),
    m = n(626135),
    I = n(360359),
    T = n(987338),
    g = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let A = 'scientist:triggered',
    v = 'exerimentOverrides',
    N = 'userExperimentOverrides',
    O = 'guildExperimentOverrides',
    R = 1,
    C = new f.Z('ExperimentStore'),
    y = !1,
    L = {},
    b = {},
    D = {
        rawUserExperiments: [],
        rawGuildExperiments: []
    },
    M = {},
    P = {},
    U = {},
    w = {},
    x = {},
    G = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
    k = {};
function B(e) {
    let t = k[e];
    if (void 0 !== t) return t;
    {
        let t = c().v3(e);
        return (k[e] = t), t;
    }
}
let F = T.qO.map((e) => B(e)),
    Z = 604800000;
function V(e, t) {
    return e || F.includes(t);
}
function H(e) {
    var t;
    return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & g.xW$.STAFF) === g.xW$.STAFF || null != e.personal_connection_id || !1;
}
function Y(e, t, n, r) {
    let i = ''.concat(t.type, '|').concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === T.xY.USER) return a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    if (t.type === T.xY.GUILD) return (i += '|'.concat(t.guildId)), a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    throw Error();
}
function j(e) {
    if (e.type === T.xY.USER) return B(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === T.xY.GUILD) return B(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let W = Date.now(),
    K = !1;
function z(e, t, n, r) {
    let i = L[Y(e, t, n, r)];
    return !(null == i || (K ? i.time < W : Date.now() - i.time > Z)) && i.hash === j(t);
}
function q(e) {
    let { experimentId: t, descriptor: n, location: r, location_stack: i, context: a, fingerprint: o, excluded: s, exposureType: l } = e,
        u = !1;
    switch (n.assignmentSource) {
        case 'override':
            return !1;
        case 'ready_payload':
            n.sessionId !== h.default.getSessionId() && (u = !0);
            break;
        case 'logged_out_api':
            n.fingerprint !== h.default.getFingerprint() && (u = !0);
            break;
        default:
            u = !0;
    }
    if (n.override) return !1;
    let c = l === T.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
    if (z(t, n, r, c)) return !1;
    if (n.type === T.xY.USER) {
        let e = {
            name: t,
            revision: n.revision,
            population: n.population,
            bucket: n.bucket,
            location: r,
            location_stack: i,
            hash_result: n.hashResult,
            excluded: s,
            exposure_type: l,
            assignment_source: n.assignmentSource,
            assignment_session_id: n.sessionId,
            assignment_loaded_from_cache: n.loadedFromCache
        };
        null != a && (e.context_guild_id = a.guildId);
        let d = c ? g.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : g.rMx.EXPERIMENT_USER_TRIGGERED;
        if (
            (m.default.track(d, e, {
                flush: !0,
                fingerprint: o
            }),
            u)
        ) {
            let e = {
                assignment_fingerprint: n.fingerprint,
                current_session_id: h.default.getSessionId(),
                current_fingerprint: h.default.getFingerprint(),
                current_source: D.source
            };
            m.default.track(g.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, e, {
                flush: !0,
                fingerprint: o
            });
        }
    } else if (n.type === T.xY.GUILD) {
        let e = c ? g.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : g.rMx.EXPERIMENT_GUILD_TRIGGERED,
            a = {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: r,
                location_stack: i,
                hash_result: n.hashResult,
                excluded: s,
                exposure_type: l,
                assignment_source: n.assignmentSource,
                assignment_session_id: n.sessionId,
                assignment_loaded_from_cache: n.loadedFromCache
            };
        if (
            (m.default.track(e, a, {
                flush: !0,
                fingerprint: o
            }),
            u)
        ) {
            let e = {
                ...a,
                assignment_fingerprint: n.fingerprint,
                current_session_id: h.default.getSessionId(),
                current_fingerprint: h.default.getFingerprint(),
                current_source: D.source
            };
            m.default.track(g.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !0,
                fingerprint: o
            });
        }
    }
    (L[Y(t, n, r, c)] = {
        time: Date.now(),
        hash: j(n)
    }),
        e_(L);
}
function Q(e) {
    let [t, n] = e;
    return null != I.Z[t] ? I.Z[t](n) : null;
}
function X(e) {
    let t = {};
    if (null == e) return t;
    for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
    return t;
}
function $(e) {
    let [t, n] = e;
    return {
        buckets: t.map((e) => {
            let [t, n] = e;
            return {
                bucket: t,
                positions: n.map((e) => {
                    let { s: t, e: n } = e;
                    return {
                        start: t,
                        end: n
                    };
                })
            };
        }),
        filters: n.map(Q),
        rawFilterData: n
    };
}
function J(e) {
    var t;
    !G && 'CONNECTION_OPEN' === e.type && H(e.user) && (G = !0),
        'EXPERIMENTS_FETCH_SUCCESS' === e.type &&
            y &&
            'ready_payload' === D.source &&
            m.default.track(g.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: D.source,
                current_snapshot_session_id: D.sessionId,
                current_snapshot_fingerprint: D.fingerprint
            }),
        (M = {}),
        (P = {}),
        (U = {});
    let r = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === h.default.getFingerprint(),
        { experiments: i, guildExperiments: a } = e,
        o = 'CONNECTION_OPEN' === e.type ? 'ready_payload' : 'logged_out_api',
        s = 'sessionId' in e ? e.sessionId : null !== (t = h.default.getSessionId()) && void 0 !== t ? t : '',
        l = h.default.getFingerprint();
    r &&
        ee(
            {
                rawUserExperiments: i,
                rawGuildExperiments: null != a ? a : [],
                source: o,
                sessionId: s,
                fingerprint: l
            },
            !1
        ),
        n(598984).Vx.trackExposure(),
        (y = !0);
}
function ee(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (D = {
        rawUserExperiments: t,
        rawGuildExperiments: null != n ? n : [],
        source: r,
        sessionId: i,
        fingerprint: a
    }),
        t.forEach((e) => {
            let [t, n, s, l, u, c, d, _] = e;
            M[t] = {
                type: 'user',
                revision: n,
                population: u,
                bucket: s,
                override: 0 === l,
                hashResult: null != c ? c : -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: V(1 === _, t),
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: o,
                fingerprint: a
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, s, l, u, c, d, _, E, f] = e;
                P[t] = {
                    hashKey: n,
                    revision: s,
                    populations: l.map($),
                    overrides: X(u),
                    overridesFormatted: (null != c ? c : []).map((e) => e.map($)),
                    holdoutName: null != d ? d : null,
                    holdoutBucket: null != _ ? _ : null,
                    aaMode: 1 === E,
                    triggerDebuggingEnabled: V(1 === f, t),
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: o,
                    fingerprint: a
                };
            });
}
function et(e, t, n) {
    let r = null;
    for (let { buckets: a, filters: o } of t) {
        var i = !0;
        if (null != o) {
            for (let t of o)
                if (null != t && !t(e)) {
                    i = !1;
                    break;
                }
        }
        if (!i) continue;
        let t = a.find((e) => {
            let { positions: t } = e;
            return t.some((e) => {
                let { start: t, end: r } = e;
                return n >= t && n < r;
            });
        });
        if ((r = null != t ? t.bucket : T.NZ.CONTROL) === T.NZ.NOT_ELIGIBLE) break;
        return r;
    }
    return null;
}
let en = 10000;
function er(e, t) {
    var n, r;
    let i = B(t),
        a = P[''.concat(i)];
    if (null == a) return null;
    let { revision: o, aaMode: s } = a,
        l = a.overrides[e],
        u = a.triggerDebuggingEnabled;
    if (null != l)
        return l === T.NZ.NOT_ELIGIBLE
            ? null
            : {
                  type: T.xY.GUILD,
                  guildId: e,
                  revision: o,
                  bucket: l,
                  override: !0,
                  hashResult: -1,
                  triggerDebuggingEnabled: u
              };
    let c = B(''.concat(null !== (n = a.hashKey) && void 0 !== n ? n : t, ':').concat(e)) % en,
        d = null;
    for (let t of null !== (r = a.overridesFormatted) && void 0 !== r ? r : [])
        if (null !== (d = et(e, t, c)))
            return {
                type: T.xY.GUILD,
                guildId: e,
                revision: a.revision,
                bucket: d,
                override: !0,
                hashResult: c,
                triggerDebuggingEnabled: u
            };
    if (null == (d = et(e, a.populations, c))) return null;
    if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== t) {
        let t = er(e, a.holdoutName);
        if (
            (null == t ? void 0 : t.bucket) != null &&
            (!0 !== t.override &&
                q({
                    experimentId: a.holdoutName,
                    descriptor: t
                }),
            (null == t ? void 0 : t.bucket) === a.holdoutBucket)
        )
            return null;
    }
    return {
        type: T.xY.GUILD,
        guildId: e,
        revision: a.revision,
        bucket: d,
        hashResult: c,
        aaMode: s,
        triggerDebuggingEnabled: u
    };
}
function ei(e) {
    let t = {};
    for (let r in e) {
        var n;
        let i = e[r];
        for (let e of ((t[r] = { ...i }), t[r].populations)) e.filters = e.rawFilterData.map(Q);
        for (let e of null !== (n = t[r].overridesFormatted) && void 0 !== n ? n : []) for (let t of e) t.filters = t.rawFilterData.map(Q);
    }
    return t;
}
function ea(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !G && H(n) && (G = !0),
        (y = t.hasLoadedExperiments),
        (L = t.trackedExposureExperiments),
        (M = t.loadedUserExperiments),
        (w = t.userExperimentOverrides),
        (x = t.guildExperimentOverrides),
        (D = {
            ...D,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint
        }),
        (P = ei(t.loadedGuildExperiments)),
        (U = {});
}
function eo() {
    y = !0;
}
function es(e) {
    let { isSwitchingAccount: t } = e;
    d.K.remove(A),
        !t && (d.K.remove(v), d.K.remove(N), d.K.remove(O), (w = {}), (x = {})),
        (M = {}),
        (D = {
            ...D,
            rawUserExperiments: []
        }),
        (L = {}),
        (y = !1);
}
function el() {
    (y = !1), (L = {}), (P = {}), d.K.remove(A);
}
function eu() {
    let e = d.K.get(A);
    if (null == e || e.v !== R) return {};
    let t = e.e,
        n = Date.now(),
        r = !1;
    for (let e in t) n - t[e].time > Z && (delete t[e], (r = !0));
    return r && e_(t), t;
}
function ec() {
    var e, t, n;
    let r = [null !== (e = d.K.get(v)) && void 0 !== e ? e : {}, null !== (t = d.K.get(N)) && void 0 !== t ? t : {}, null !== (n = d.K.get(O)) && void 0 !== n ? n : {}];
    (w = {}), (x = {});
    let i = !l().isEmpty(r[0]);
    for (let e of r)
        for (let t in e) {
            let n = e[t];
            null == n || (n.type !== T.xY.USER && n.type !== T.xY.GUILD) || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], (i = !0)) : n.type === T.xY.USER ? (w[t] = n) : (x[t] = n);
        }
    let a = (0, E._S)();
    for (let e in a)
        (w[e] = {
            type: T.xY.USER,
            revision: 1,
            population: 0,
            override: !0,
            fromCookie: !0,
            assignmentSource: 'override',
            bucket: a[e]
        }),
            (x[e] = {
                type: T.xY.GUILD,
                revision: 1,
                override: !0,
                fromCookie: !0,
                assignmentSource: 'override',
                bucket: a[e]
            }),
            (i = !0);
    i && ed();
}
function ed() {
    try {
        d.K.set(N, w);
    } catch (e) {
        C.error('Error saving user experiment overrides, unsaved data will be lost', e),
            m.default.track(g.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        d.K.set(O, x);
    } catch (e) {
        C.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            m.default.track(g.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function e_(e) {
    try {
        d.K.set(A, {
            v: R,
            e: e
        });
    } catch (e) {
        C.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
            m.default.track(g.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveTrackedExposureExperiments'
            });
    }
}
function eE(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: o } = e;
    b[t] = {
        type: n,
        title: r,
        description: i,
        buckets: a,
        commonTriggerPoint: o
    };
}
function ef(e) {
    var t;
    let { experimentId: n, experimentBucket: r, experimentType: i, skipCleanup: a } = e,
        o = null != i ? i : null === (t = b[n]) || void 0 === t ? void 0 : t.type;
    if (null == o) return !1;
    if (
        (null == r
            ? ((w = { ...w }), delete w[n], (x = { ...x }), delete x[n])
            : 'user' === o
              ? (w = {
                    ...w,
                    [n]: {
                        type: o,
                        revision: 1,
                        population: 0,
                        bucket: r,
                        override: !0
                    }
                })
              : (x = {
                    ...x,
                    [n]: {
                        type: o,
                        revision: 1,
                        bucket: r,
                        override: !0
                    }
                }),
        !a)
    )
        for (let e of [w, x]) for (let t in e) null == b[t] && delete w[t];
    ed();
}
function eh(e) {
    let { guild: t } = e;
    for (let e in U) {
        let [n] = e.split(':');
        t.id === n && delete U[e];
    }
}
class ep extends p.Z {
    initialize() {
        (L = eu()), ec(), this.waitFor(h.default), this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ep.LATEST_SNAPSHOT_VERSION);
        null != e && ('loadedUserExperiments' in e ? ((M = e.loadedUserExperiments), (P = ei(e.loadedGuildExperiments)), Object.values(M).forEach((e) => (e.loadedFromCache = !0)), Object.values(P).forEach((e) => (e.loadedFromCache = !0))) : ee(e, !0));
    }
    takeSnapshot() {
        return {
            version: ep.LATEST_SNAPSHOT_VERSION,
            data: { ...D }
        };
    }
    get hasLoadedExperiments() {
        return y;
    }
    hasRegisteredExperiment(e) {
        return null != b[e];
    }
    getUserExperimentDescriptor(e) {
        if (G) {
            let t = w[e];
            if (null != t) return t;
        }
        let t = B(e);
        return M[''.concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : g.lds,
            r = x[e];
        if (G && null != r) return r;
        let i = ''.concat(n, ':').concat(e);
        if (i in U) return U[i];
        let a = er(n, e);
        return (U[i] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : T.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : T.NZ.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return M;
    }
    getGuildExperiments() {
        return P;
    }
    getLoadedUserExperiment(e) {
        return M[B(e)];
    }
    getLoadedGuildExperiment(e) {
        return P[B(e)];
    }
    getRecentExposures(e, t) {
        let n = ''.concat(e, '|').concat(t, '|');
        return Object.entries(L)
            .filter((e) => {
                let [t] = e;
                return t.startsWith(n);
            })
            .map((e) => {
                let [t, { time: r }] = e;
                return [t.replace(n, ''), r];
            });
    }
    getRegisteredExperiments() {
        return b;
    }
    getAllExperimentOverrideDescriptors() {
        return G
            ? {
                  ...w,
                  ...x
              }
            : {};
    }
    getExperimentOverrideDescriptor(e) {
        var t;
        return G ? (null !== (t = w[e]) && void 0 !== t ? t : x[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(b).forEach((e) => {
            t[B(''.concat(e))] = e;
        }),
        M)) {
            let r = t[n];
            null != r && (e[r] = M[n].bucket);
        }
        for (let t in U) {
            let n = U[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in P) for (let n of ((e[t] = JSON.parse(JSON.stringify(P[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: y,
            trackedExposureExperiments: L,
            loadedUserExperiments: M,
            loadedGuildExperiments: e,
            userExperimentOverrides: w,
            guildExperimentOverrides: x,
            assignmentSource: D.source,
            assignmentSessionId: D.sessionId,
            assignmentFingerprint: D.fingerprint
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return z(e, t, n, r);
    }
    constructor() {
        super(
            {
                LOGOUT: es,
                LOGIN_SUCCESS: el,
                CONNECTION_OPEN: J,
                EXPERIMENTS_FETCH_SUCCESS: J,
                OVERLAY_INITIALIZE: ea,
                EXPERIMENTS_FETCH_FAILURE: eo,
                EXPERIMENT_OVERRIDE_BUCKET: ef,
                GUILD_CREATE: eh,
                GUILD_UPDATE: eh
            },
            _.c.Early
        ),
            S(this, 'trackExposure', q);
    }
}
S(ep, 'displayName', 'ExperimentStore'), S(ep, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new ep());

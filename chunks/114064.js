let r;
var i,
    a = n(848246),
    o = n(442837),
    s = n(570140),
    l = n(168232),
    u = n(933843),
    c = n(746599),
    d = n(1163);
function _(e, t, n) {
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
let E = 86400000,
    f = {
        available: {},
        activated: {},
        lastFetched: null,
        overrides: {}
    },
    h = f;
function p() {
    h = f;
}
function m(e) {
    let {
        demos: { available: t, activated: n }
    } = e;
    (h.available = null != t ? t : {}), (h.activated = null != n ? n : {}), (h.lastFetched = Date.now());
}
function I() {
    (h.available = f.available), (h.lastFetched = null);
}
function T(e) {
    let { perkType: t, activatedDuration: n } = e;
    h.activated[t] = n;
}
function g(e) {
    let { perkType: t } = e;
    delete h.activated[t];
}
function S(e) {
    let { perkType: t } = e;
    if (((h.available[t] = !1), (null == r ? void 0 : r.extendedDemoDuration) !== !0)) delete h.activated[t];
}
function A(e) {
    let { user: t, perkType: n, available: r, activateSuccess: i, demoDuration: a } = e;
    void 0 !== t &&
        (0, l.QI)(t) &&
        ((h.overrides[n] = {
            available: r,
            activateSuccess: i,
            demoDuration: a
        }),
        null == h.available && (h.available = {}),
        (h.available[n] = r || !1),
        delete h.activated[n],
        (h.lastFetched = null));
}
function v() {
    if (!!(0, u.vw)(a.q.STREAM_HIGH_QUALITY)) (0, c.cD)(!0);
}
function N() {
    (0, c.cD)(!1);
}
function O() {
    r = d.Z.getCurrentConfig({ location: 'PerksDemosStore' }, { autoTrackExposure: !1 });
}
class R extends (i = o.ZP.Store) {
    isAvailable(e) {
        var t;
        return null !== (t = h.available[e]) && void 0 !== t && t;
    }
    hasActiveDemo(e) {
        let t = h.activated[e];
        return null != t && null != r && ((r.enabled && !r.extendedDemoDuration) || (r.extendedDemoDuration && new Date() <= new Date(t.end_time)));
    }
    hasActivated(e) {
        return null != h.activated[e];
    }
    shouldFetch() {
        return null == h.lastFetched || Date.now() > h.lastFetched + E;
    }
    shouldActivate(e) {
        var t;
        return null !== (t = h.available[e]) && void 0 !== t && t && null == h.activated[e];
    }
    overrides() {
        return h.overrides;
    }
    activatedEndTime(e) {
        var t;
        return null === (t = h.activated[e]) || void 0 === t ? void 0 : t.end_time;
    }
}
_(R, 'displayName', 'PerksDemosStore'),
    (t.Z = new R(s.Z, {
        PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: m,
        PREMIUM_PERKS_DEMOS_FETCH_FAILURE: I,
        PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: T,
        PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: g,
        PREMIUM_PERKS_DEMO_COMPLETE: S,
        LOGOUT: p,
        PREMIUM_PERKS_DEMO_OVERRIDE: A,
        STREAM_START: v,
        STREAM_STOP: N,
        CONNECTION_OPEN: O,
        EXPERIMENTS_FETCH_SUCCESS: O,
        EXPERIMENT_OVERRIDE_BUCKET: O
    }));

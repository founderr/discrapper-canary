let r;
var i,
    a,
    s,
    o,
    l = n(848246),
    u = n(442837),
    c = n(570140),
    d = n(168232),
    f = n(933843),
    _ = n(746599),
    h = n(1163);
let p = {
        available: {},
        activated: {},
        lastFetched: null,
        overrides: {}
    },
    m = p;
function g() {
    r = h.Z.getCurrentConfig({ location: 'PerksDemosStore' }, { autoTrackExposure: !1 });
}
class E extends (o = u.ZP.Store) {
    isAvailable(e) {
        var t;
        return null !== (t = m.available[e]) && void 0 !== t && t;
    }
    hasActiveDemo(e) {
        let t = m.activated[e];
        return null != t && null != r && ((r.enabled && !r.extendedDemoDuration) || (r.extendedDemoDuration && new Date() <= new Date(t.end_time)));
    }
    hasActivated(e) {
        return null != m.activated[e];
    }
    shouldFetch() {
        return null == m.lastFetched || Date.now() > m.lastFetched + 86400000;
    }
    shouldActivate(e) {
        var t;
        return null !== (t = m.available[e]) && void 0 !== t && t && null == m.activated[e];
    }
    overrides() {
        return m.overrides;
    }
    activatedEndTime(e) {
        var t;
        return null === (t = m.activated[e]) || void 0 === t ? void 0 : t.end_time;
    }
}
(s = 'PerksDemosStore'),
    (a = 'displayName') in (i = E)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new E(c.Z, {
        PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function (e) {
            let {
                demos: { available: t, activated: n }
            } = e;
            (m.available = null != t ? t : {}), (m.activated = null != n ? n : {}), (m.lastFetched = Date.now());
        },
        PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function () {
            (m.available = p.available), (m.lastFetched = null);
        },
        PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function (e) {
            let { perkType: t, activatedDuration: n } = e;
            m.activated[t] = n;
        },
        PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function (e) {
            let { perkType: t } = e;
            delete m.activated[t];
        },
        PREMIUM_PERKS_DEMO_COMPLETE: function (e) {
            let { perkType: t } = e;
            if (((m.available[t] = !1), (null == r ? void 0 : r.extendedDemoDuration) !== !0)) delete m.activated[t];
        },
        LOGOUT: function () {
            m = p;
        },
        PREMIUM_PERKS_DEMO_OVERRIDE: function (e) {
            let { user: t, perkType: n, available: r, activateSuccess: i, demoDuration: a } = e;
            void 0 !== t &&
                (0, d.QI)(t) &&
                ((m.overrides[n] = {
                    available: r,
                    activateSuccess: i,
                    demoDuration: a
                }),
                null == m.available && (m.available = {}),
                (m.available[n] = r || !1),
                delete m.activated[n],
                (m.lastFetched = null));
        },
        STREAM_START: function () {
            if (!!(0, f.vw)(l.q.STREAM_HIGH_QUALITY)) (0, _.cD)(!0);
        },
        STREAM_STOP: function () {
            (0, _.cD)(!1);
        },
        CONNECTION_OPEN: g,
        EXPERIMENTS_FETCH_SUCCESS: g,
        EXPERIMENT_OVERRIDE_BUCKET: g
    }));

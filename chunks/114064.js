"use strict";
var i, r, s, o, a = n(848246),
  l = n(442837),
  u = n(570140),
  _ = n(168232),
  c = n(933843),
  d = n(485731);
let E = {
    perksDemos: null,
    activated: {},
    lastFetched: null,
    overrides: {}
  },
  I = E;
class T extends(o = l.ZP.Store) {
  getPerksDemos() {
    return I.perksDemos
  }
  getActivated() {
    return I.activated
  }
  shouldFetch() {
    return null == I.lastFetched || Date.now() > I.lastFetched + 864e5
  }
  shouldActivate(e) {
    var t;
    return (null === (t = I.perksDemos) || void 0 === t ? void 0 : t[e]) === !0 && !0 !== I.activated[e]
  }
  overrides() {
    return I.overrides
  }
}
s = "PerksDemosStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(u.Z, {
  PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function(e) {
    let {
      demos: t
    } = e;
    I.perksDemos = t, I.lastFetched = Date.now()
  },
  PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function() {
    I.perksDemos = E.perksDemos, I.lastFetched = null
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function(e) {
    let {
      perkType: t
    } = e;
    I.activated[t] = !0
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function(e) {
    let {
      perkType: t
    } = e;
    I.activated[t] = !1
  },
  PREMIUM_PERKS_DEMO_COMPLETE: function(e) {
    let {
      perkType: t
    } = e;
    null != I.perksDemos && !0 === I.activated[t] && (I.perksDemos[t] = !1)
  },
  LOGOUT: function() {
    I = E
  },
  PREMIUM_PERKS_DEMO_OVERRIDE: function(e) {
    let {
      user: t,
      perkType: n,
      available: i,
      activateSuccess: r
    } = e;
    void 0 !== t && (0, _.QI)(t) && (I.overrides[n] = {
      available: i,
      activateSuccess: r
    }, null == I.perksDemos && (I.perksDemos = {}), I.perksDemos[n] = i || !1, I.activated[n] = !1, I.lastFetched = null)
  },
  STREAM_START: function() {
    if (!!(0, c.vw)(a.q.STREAM_HIGH_QUALITY))(0, d.cD)(!0)
  },
  STREAM_STOP: function() {
    (0, d.cD)(!1)
  }
})
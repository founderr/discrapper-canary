"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(168232);
let _ = {
    perksDemos: null,
    activated: {},
    lastFetched: null,
    overrides: {}
  },
  c = _;
class d extends(o = a.ZP.Store) {
  getPerksDemos() {
    return c.perksDemos
  }
  getActivated() {
    return c.activated
  }
  shouldFetch() {
    return null == c.lastFetched || Date.now() > c.lastFetched + 864e5
  }
  shouldActivate(e) {
    var t;
    return (null === (t = c.perksDemos) || void 0 === t ? void 0 : t[e]) === !0
  }
  overrides() {
    return c.overrides
  }
}
s = "PerksDemosStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function(e) {
    let {
      demos: t
    } = e;
    c.perksDemos = t, c.lastFetched = Date.now()
  },
  PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function() {
    c.perksDemos = _.perksDemos, c.lastFetched = null
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function(e) {
    let {
      perkType: t
    } = e;
    c.activated[t] = !0
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function(e) {
    let {
      perkType: t
    } = e;
    c.activated[t] = !1
  },
  PREMIUM_PERKS_DEMO_COMPLETE: function(e) {
    let {
      perkType: t
    } = e;
    null != c.perksDemos && !0 === c.activated[t] && (c.perksDemos[t] = !1)
  },
  LOGOUT: function() {
    c = _
  },
  PREMIUM_PERKS_DEMO_OVERRIDE: function(e) {
    let {
      user: t,
      perkType: n,
      available: i,
      activateSuccess: r
    } = e;
    void 0 !== t && (0, u.QI)(t) && (c.overrides[n] = {
      available: i,
      activateSuccess: r
    }, null == c.perksDemos && (c.perksDemos = {}), c.perksDemos[n] = i || !1, c.activated[n] = !1, c.lastFetched = null)
  }
})
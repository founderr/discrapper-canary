n(47120);
var l, i, s, a, r = n(873546),
  o = n(442837),
  c = n(570140),
  u = n(38618),
  d = n(268967),
  h = n(188785);
let m = {},
  E = {},
  p = !0,
  g = {},
  f = !1;

function C() {
  return d.Z
}

function _() {
  if (g = {}, !p)
    for (let [e, t] of Object.entries(d.Z)) {
      let n = !1 !== m[e];
      if (g[e] = n, n && null != t.prerequisites)
        for (let n of t.prerequisites) !1 !== m[n] && (g[e] = !1)
    }
}
class I extends(l = o.ZP.Store) {
  initialize() {
    _(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(u.Z)
  }
  shouldShow(e) {
    var t;
    return !(!f || p || h.a || (t = e, r.tq && ["writing-messages", "organize-by-topic"].includes(t))) && (g[e] || !1)
  }
  shouldShowAnyIndicators() {
    return !p
  }
  getIndicators() {
    return E
  }
  getData() {
    return d.Z
  }
  getDefinition(e) {
    let t = this.getData();
    return null != t ? t[e] : null
  }
}
a = "TutorialIndicatorStore", (s = "displayName") in(i = I) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new I(c.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      tutorial: t
    } = e;
    f = !0, p = !0, m = {}, null != t && (p = t.indicators_suppressed, t.indicators_confirmed.forEach(e => m[e] = !1)), _()
  },
  CONNECTION_CLOSED: function() {
    f = !1
  },
  TUTORIAL_INDICATOR_DISMISS: function(e) {
    m = {
      ...m,
      [e.tutorialId]: !1
    }, E = {
      ...E
    }, delete E[e.tutorialId], _()
  },
  TUTORIAL_INDICATOR_SHOW: function(e) {
    E = {
      ...E,
      [e.tutorialId]: e.renderData
    }
  },
  TUTORIAL_INDICATOR_HIDE: function(e) {
    E = {
      ...E
    }, delete E[e.tutorialId]
  },
  TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
    p = !0
  }
})
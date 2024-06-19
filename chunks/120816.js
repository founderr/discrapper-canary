t(47120);
var a, i, n, o, l = t(772848),
  c = t(756647),
  s = t(442837),
  d = t(570140),
  u = t(314897),
  h = t(906467);
let m = 0,
  g = [],
  p = [],
  b = !1;
class y extends(a = s.ZP.Store) {
  initialize() {
    this.waitFor(h.Z)
  }
  get loggedEvents() {
    return g
  }
  get loggedTriggers() {
    return p
  }
  get trackTriggers() {
    return b
  }
}
o = "AnalyticsLogStore", (n = "displayName") in(i = y) ? Object.defineProperty(i, n, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[n] = o, r.Z = new y(d.Z, {
  TRACK: function(e) {
    let {
      event: r,
      properties: t,
      fingerprint: a
    } = e;
    if (h.Z.isDeveloper) {
      var i;
      (g = [...g, {
        key: (m++).toString(),
        event: r,
        properties: t,
        fingerprint: null != (i = a) ? (0, c.s)(i) : u.default.getId(),
        timestamp: new Date
      }]).length > 500 && g.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: i,
      location: n,
      previouslyTracked: o
    } = e;
    if (!!h.Z.isDeveloper) b && (p = [...p, {
      key: (0, l.Z)(),
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: i,
      location: n,
      previouslyTracked: o,
      timestamp: new Date
    }]).length > 500 && p.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: r
    } = e;
    b = r
  },
  ANALYTICS_LOG_CLEAR: function() {
    g = [], p = []
  }
})
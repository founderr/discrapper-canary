"use strict";
r.r(t), r("47120");
var a, i, l, n, o = r("153832"),
  s = r("756647"),
  c = r("442837"),
  d = r("570140"),
  u = r("314897"),
  h = r("906467");
let m = 0,
  p = [],
  g = [],
  f = !1;
class b extends(a = c.default.Store) {
  initialize() {
    this.waitFor(h.default)
  }
  get loggedEvents() {
    return p
  }
  get loggedTriggers() {
    return g
  }
  get trackTriggers() {
    return f
  }
}
n = "AnalyticsLogStore", (l = "displayName") in(i = b) ? Object.defineProperty(i, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = n, t.default = new b(d.default, {
  TRACK: function(e) {
    let {
      event: t,
      properties: r,
      fingerprint: a
    } = e;
    if (h.default.isDeveloper) {
      var i;
      (p = [...p, {
        key: (m++).toString(),
        event: t,
        properties: r,
        fingerprint: null != (i = a) ? (0, s.extractId)(i) : u.default.getId(),
        timestamp: new Date
      }]).length > 500 && p.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: r,
      exposureType: a,
      excluded: i,
      location: l,
      previouslyTracked: n
    } = e;
    if (!!h.default.isDeveloper) f && (g = [...g, {
      key: (0, o.v4)(),
      experimentId: t,
      descriptor: r,
      exposureType: a,
      excluded: i,
      location: l,
      previouslyTracked: n,
      timestamp: new Date
    }]).length > 500 && g.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    f = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    p = [], g = []
  }
})
"use strict";
n.r(t), n("222007");
var a, s = n("446674"),
  l = n("95410"),
  i = n("862337"),
  r = n("913144"),
  o = n("260365"),
  u = n("374363"),
  d = n("718517"),
  c = n("964889"),
  f = n("546463"),
  E = n("686470"),
  h = n("568307"),
  _ = n("49111");
let C = "ActivityTrackingStore",
  I = 30 * d.default.Millis.MINUTE,
  S = 5 * d.default.Millis.MINUTE,
  m = null !== (a = l.default.get(C)) && void 0 !== a ? a : {},
  p = {},
  T = !1;

function g(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && A(e, !0);
  let n = p[e.applicationId];
  null != n && (n.stop(), delete p[e.applicationId]), delete m[e.applicationId], l.default.set(C, m)
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > I + S && (a = 0), o.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? _.Distributors.DISCORD : e.distributor,
    shareActivity: (0, c.shouldShareApplicationActivity)(e.applicationId, E.default),
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t
  }), e.updatedAt = n;
  let s = p[e.applicationId];
  null == s && (s = p[e.applicationId] = new i.Interval).start(I, () => A(e)), !t && (m[e.applicationId] = e, l.default.set(C, m))
}

function N() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = h.default.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a
    }
    of t) {
    let t = f.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in m) && A({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a
    })
  }
  for (let t of Object.keys(m)) !n.has(t) && g(m[t], e)
}

function R() {
  for (let e of Object.keys(m)) g(m[e]);
  T = !1
}
class v extends s.default.Store {
  initialize() {
    this.waitFor(h.default, u.default, E.default), this.syncWith([u.default], N)
  }
  getActivities() {
    return m
  }
}
v.displayName = "ActivityTrackingStore", new v(r.default, {
  RUNNING_GAMES_CHANGE: () => N(),
  CONNECTION_OPEN: function() {
    if (T) return !1;
    for (let e of Object.keys(m)) A(m[e]);
    N(!1), T = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && R()
  },
  LOGOUT: R,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, a = m[t];
    if (null == a) return !1;
    a.token = n, l.default.set(C, m)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = m[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, l.default.set(C, m)
  }
})
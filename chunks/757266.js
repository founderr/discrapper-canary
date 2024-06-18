"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140);
let c = {};
class d extends(i = u.ZP.Store) {
  isConnected(e) {
    return null != c[e]
  }
  get connections() {
    return l().values(c)
  }
  getApplication(e) {
    return c[e]
  }
  getAllConnections() {
    return c
  }
}
o = "ConnectedAppsStore", (s = "displayName") in(r = d) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new d(_.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      connectedApps: t
    } = e;
    c = {
      ...t
    }
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    if (null == t.id) return !1;
    let n = t.id;
    null == c[n] && (c[n] = {
      count: 0,
      id: t.id,
      name: t.name,
      icon: t.icon,
      coverImage: t.coverImage,
      authenticated: !1
    }), c[n].count++
  },
  RPC_APP_AUTHENTICATED: function(e) {
    let {
      application: t
    } = e;
    if (null != t.id && null != c[t.id]) c[t.id].authenticated = !0
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    if (null != t.id && null != c[t.id]) c[t.id].count--, 0 === c[t.id].count && delete c[t.id]
  }
})
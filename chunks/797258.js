"use strict";
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(314897);
let d = Object.freeze([]),
  E = {};

function I(e) {
  E = {}, e.sessions.forEach(e => {
    E[e.sessionId] = e
  })
}
class T extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  getSessions() {
    return E
  }
  getSession() {
    let e = c.default.getSessionId();
    return null != e ? this.getSessionById(e) : null
  }
  getRemoteActivities() {
    let e = c.default.getSessionId(),
      t = l().find(E, t => t.active && t.sessionId !== e);
    return null != t ? t.activities : d
  }
  getSessionById(e) {
    return E[e]
  }
  getActiveSession() {
    return l().find(E, e => {
      let {
        active: t
      } = e;
      return t
    })
  }
}
s = "SessionsStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(_.Z, {
  CONNECTION_OPEN: I,
  SESSIONS_REPLACE: I
})
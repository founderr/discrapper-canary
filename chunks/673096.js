t(47120);
var n, i, a, l, r = t(442837),
  o = t(570140);
let c = [];

function E() {
  c = []
}
class d extends(n = r.ZP.Store) {
  getSessions() {
    return c
  }
}
l = "AuthSessionsStore", (a = "displayName") in(i = d) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, s.Z = new d(o.Z, {
  LOGOUT: E,
  LOGIN_SUCCESS: E,
  FETCH_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessions: s
    } = e;
    c = s.map(e => ({
      ...e,
      approx_last_used_time: new Date(e.approx_last_used_time)
    }))
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessionIdHashes: s
    } = e, t = [...c], n = !1;
    for (let e of s) {
      let s = t.findIndex(s => s.id_hash === e);
      s >= 0 && (t.splice(s, 1), n = !0)
    }
    if (!n) return !1;
    c = t
  }
})
var r, l, a, s, o = t(442837),
  i = t(570140);
let u = {};
class c extends(s = o.ZP.Store) {
  getEULA(e) {
    return u[e]
  }
}
a = "EULAStore", (l = "displayName") in(r = c) ? Object.defineProperty(r, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[l] = a, n.Z = new c(i.Z, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: n
    } = e;
    u[n.id] = n
  }
})
"use strict";
let i;
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  c = n(433517),
  d = n(570140),
  E = n(981631);
let I = "GameLibraryViewStore",
  T = E.sHY.ASCENDING,
  h = E.iEv.LAST_PLAYED,
  f = !1,
  S = u().debounce(() => {
    f = !1, N.emitChange()
  }, 200);
class A extends(a = _.ZP.Store) {
  initialize() {
    var e;
    let t = null !== (e = c.K.get(I)) && void 0 !== e ? e : {};
    null != t.sortDirection && null != t.sortKey && (T = t.sortDirection, h = t.sortKey)
  }
  get sortDirection() {
    return T
  }
  get sortKey() {
    return h
  }
  get activeRowKey() {
    return i
  }
  get isNavigatingByKeyboard() {
    return f
  }
}
o = "GameLibraryViewStore", (s = "displayName") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let N = new A(d.Z, {
  LIBRARY_TABLE_SORT_UPDATE: function(e) {
    let {
      direction: t,
      key: n
    } = e;
    T = t, h = n, c.K.set(I, {
      sortDirection: T,
      sortKey: h
    })
  },
  LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
    let {
      key: t,
      isKeyboardEvent: n
    } = e;
    n && (f = !0, S()), i = t
  }
});
t.Z = N
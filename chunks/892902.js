"use strict";
n.r(t), n("47120");
var l, a, i, u, r = n("442837"),
  o = n("570140"),
  s = n("69004");
let d = new s.default(196606),
  c = 0,
  f = new s.default(196606),
  I = new s.default(196606);

function T(e) {
  return e.join("-")
}

function m(e, t, n) {
  var l;
  let a = T(t),
    i = null !== (l = d.get(e)) && void 0 !== l ? l : new Map;
  i.set(a, n), d.set(e, i), c++
}

function E(e) {
  let t = f.get(e);
  null != t && I.delete(t), f.delete(e), d.delete(e), c++
}
class p extends(l = r.default.Store) {
  getInteractionComponentStates() {
    return d
  }
  getInteractionComponentStateVersion() {
    return c
  }
  getInteractionComponentState(e, t) {
    var n;
    let l = d.get(e);
    if (null == l) return null;
    let a = T(t);
    return null !== (n = l.get(a)) && void 0 !== n ? n : null
  }
}
u = "LocalInteractionComponentStateStore", (i = "displayName") in(a = p) ? Object.defineProperty(a, i, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = u, t.default = new p(o.default, {
  LOGOUT: function() {
    d.clear(), f.clear(), I.clear(), c++
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      messageId: t,
      nonce: n,
      indices: l,
      state: a
    } = e;
    f.set(t, n), I.set(n, {
      messageId: t,
      indices: l
    }), m(t, l, a)
  },
  SET_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      id: t,
      indices: n,
      state: l
    } = e;
    m(t, n, l)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t
    } = e;
    if (!d.has(t)) return !1;
    E(t)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    if (null == t.id || !d.has(t.id)) return !1;
    E(t.id)
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = I.get(t);
    if (null == n) return !1;
    f.delete(n.messageId), I.delete(t), c++
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = I.get(t);
    if (null == n) return !1;
    ! function(e) {
      let {
        indices: t,
        messageId: n
      } = e, l = T(t), a = d.get(n);
      if (null == a || !a.has(l)) return;
      a.delete(l), 0 === a.size && d.delete(n), c++
    }(n)
  },
  CLEAR_INTERACTION_MODAL_STATE: function(e) {
    let {
      id: t
    } = e;
    d.delete(t), c++
  }
})
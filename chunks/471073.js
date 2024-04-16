"use strict";
let l, u, a, o, i;
n.r(t), n.d(t, {
  InteractionModalState: function() {
    return E
  }
});
var r, d, s, c, E, T, f = n("512722"),
  p = n.n(f),
  C = n("442837"),
  S = n("570140"),
  m = n("904245"),
  I = n("911969"),
  _ = n("603721"),
  N = n("70956");
(r = E || (E = {}))[r.IN_FLIGHT = 0] = "IN_FLIGHT", r[r.ERRORED = 1] = "ERRORED", r[r.SUCCEEDED = 2] = "SUCCEEDED";
class O extends(T = C.default.Store) {
  getModalState(e) {
    return e !== l ? null : u
  }
}
c = "InteractionModalStore", (s = "displayName") in(d = O) ? Object.defineProperty(d, s, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[s] = c, t.default = new O(S.default, {
  LOGOUT: function() {
    return l = null, u = null, a = null, o = null, i = null, !0
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === i && (m.default.deleteMessage(o, a, !0), a = null, o = null, i = null), !1
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === i && (m.default.deleteMessage(o, a, !0), a = null, o = null, i = null), !1
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: r
    } = e;
    switch (r.interactionType) {
      case I.InteractionTypes.APPLICATION_COMMAND:
        return a = t, o = r.channelId, i = n, !1;
      case I.InteractionTypes.MODAL_SUBMIT:
        return p()(null == l || 1 === u || 2 === u, "cannot submit multiple modals at once"), l = n, u = 0, setTimeout(() => {
          l === n && 0 === u && (0, _.setFailed)(n)
        }, 10 * N.default.Millis.SECOND), !0;
      default:
        return !1
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (u = 2, !0)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (u = 1, !0)
  }
})
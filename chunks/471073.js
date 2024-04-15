"use strict";
let l, a, i, u, r;
n.r(t), n.d(t, {
  InteractionModalState: function() {
    return f
  }
});
var o, s, d, c, f, I, T = n("512722"),
  m = n.n(T),
  E = n("442837"),
  p = n("570140"),
  _ = n("904245"),
  N = n("911969"),
  S = n("603721"),
  h = n("70956");
(o = f || (f = {}))[o.IN_FLIGHT = 0] = "IN_FLIGHT", o[o.ERRORED = 1] = "ERRORED", o[o.SUCCEEDED = 2] = "SUCCEEDED";
class A extends(I = E.default.Store) {
  getModalState(e) {
    return e !== l ? null : a
  }
}
c = "InteractionModalStore", (d = "displayName") in(s = A) ? Object.defineProperty(s, d, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[d] = c, t.default = new A(p.default, {
  LOGOUT: function() {
    return l = null, a = null, i = null, u = null, r = null, !0
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (_.default.deleteMessage(u, i, !0), i = null, u = null, r = null), !1
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (_.default.deleteMessage(u, i, !0), i = null, u = null, r = null), !1
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: o
    } = e;
    switch (o.interactionType) {
      case N.InteractionTypes.APPLICATION_COMMAND:
        return i = t, u = o.channelId, r = n, !1;
      case N.InteractionTypes.MODAL_SUBMIT:
        return m()(null == l || 1 === a || 2 === a, "cannot submit multiple modals at once"), l = n, a = 0, setTimeout(() => {
          l === n && 0 === a && (0, S.setFailed)(n)
        }, 10 * h.default.Millis.SECOND), !0;
      default:
        return !1
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (a = 2, !0)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (a = 1, !0)
  }
})
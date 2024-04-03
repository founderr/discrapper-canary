"use strict";
let a, s, l, i, r;
n.r(t), n.d(t, {
  InteractionModalState: function() {
    return f
  }
});
var o, u, d, c, f, E, h = n("512722"),
  _ = n.n(h),
  C = n("442837"),
  S = n("570140"),
  m = n("904245"),
  I = n("911969"),
  p = n("603721"),
  T = n("70956");
(o = f || (f = {}))[o.IN_FLIGHT = 0] = "IN_FLIGHT", o[o.ERRORED = 1] = "ERRORED", o[o.SUCCEEDED = 2] = "SUCCEEDED";
class g extends(E = C.default.Store) {
  getModalState(e) {
    return e !== a ? null : s
  }
}
c = "InteractionModalStore", (d = "displayName") in(u = g) ? Object.defineProperty(u, d, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[d] = c, t.default = new g(S.default, {
  LOGOUT: function() {
    return a = null, s = null, l = null, i = null, r = null, !0
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (m.default.deleteMessage(i, l, !0), l = null, i = null, r = null), !1
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (m.default.deleteMessage(i, l, !0), l = null, i = null, r = null), !1
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: o
    } = e;
    switch (o.interactionType) {
      case I.InteractionTypes.APPLICATION_COMMAND:
        return l = t, i = o.channelId, r = n, !1;
      case I.InteractionTypes.MODAL_SUBMIT:
        return _()(null == a || 1 === s || 2 === s, "cannot submit multiple modals at once"), a = n, s = 0, setTimeout(() => {
          a === n && 0 === s && (0, p.setFailed)(n)
        }, 10 * T.default.Millis.SECOND), !0;
      default:
        return !1
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === a && (s = 2, !0)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === a && (s = 1, !0)
  }
})
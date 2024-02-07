"use strict";
let a, s, l, i, r;
n.r(t), n.d(t, {
  InteractionModalState: function() {
    return u
  },
  default: function() {
    return S
  }
});
var o, u, d = n("627445"),
  c = n.n(d),
  f = n("446674"),
  E = n("913144"),
  _ = n("819689"),
  h = n("798609"),
  C = n("274800"),
  I = n("718517");
(o = u || (u = {}))[o.IN_FLIGHT = 0] = "IN_FLIGHT", o[o.ERRORED = 1] = "ERRORED", o[o.SUCCEEDED = 2] = "SUCCEEDED";
class T extends f.default.Store {
  getModalState(e) {
    return e !== a ? null : s
  }
}
T.displayName = "InteractionModalStore";
var S = new T(E.default, {
  LOGOUT: function() {
    return a = null, s = null, l = null, i = null, r = null, !0
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (_.default.deleteMessage(i, l, !0), l = null, i = null, r = null), !1
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (_.default.deleteMessage(i, l, !0), l = null, i = null, r = null), !1
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: o
    } = e;
    switch (o.interactionType) {
      case h.InteractionTypes.APPLICATION_COMMAND:
        return l = t, i = o.channelId, r = n, !1;
      case h.InteractionTypes.MODAL_SUBMIT:
        return c(null == a || 1 === s || 2 === s, "cannot submit multiple modals at once"), a = n, s = 0, setTimeout(() => {
          a === n && 0 === s && (0, C.setFailed)(n)
        }, 10 * I.default.Millis.SECOND), !0;
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
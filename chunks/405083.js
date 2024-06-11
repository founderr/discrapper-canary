"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("355467"),
  l = n("106976"),
  i = n("703656"),
  s = n("914010"),
  u = n("598"),
  d = n("791785"),
  c = n("981631");

function o(e) {
  let {
    onClose: t,
    onComplete: n,
    forcesTransitionToGuild: o,
    ...f
  } = e, {
    subscriptionMetadataRequest: m
  } = (0, u.usePaymentContext)();
  return (0, a.jsx)(d.PaymentModal, {
    ...f,
    onComplete: n,
    onClose: e => {
      t(e);
      let a = null == m ? void 0 : m.guild_id;
      e && null != a && (r.fetchSubscriptions(), (0, l.fetchEntitlementsForGuild)(a), null == n || n(), null != a && (o || s.default.getGuildId() !== a) && (0, i.transitionTo)(c.Routes.CHANNEL(a)))
    },
    forceNewPaymentModal: !0
  })
}
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n(735250);
n(470079);
var r = n(355467),
  l = n(106976),
  s = n(703656),
  u = n(914010),
  i = n(598),
  d = n(791785),
  c = n(981631);

function o(e) {
  let {
    onClose: t,
    onComplete: n,
    forcesTransitionToGuild: o,
    ...h
  } = e, {
    subscriptionMetadataRequest: f
  } = (0, i.usePaymentContext)();
  return (0, a.jsx)(d.PaymentModal, {
    ...h,
    onComplete: n,
    onClose: e => {
      t(e);
      let a = null == f ? void 0 : f.guild_id;
      e && null != a && (r.jg(), (0, l.i1)(a), null == n || n(), null != a && (o || u.Z.getGuildId() !== a) && (0, s.uL)(c.Z5c.CHANNEL(a)))
    },
    forceNewPaymentModal: !0
  })
}
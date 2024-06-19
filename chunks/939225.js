n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(230711),
  a = n(931547),
  r = n(981631),
  o = n(526761),
  c = n(689938);

function u(e) {
  let {
    subscription: t
  } = e;
  return null == t ? null : t.status === r.O0b.PAST_DUE ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Spacer, {
      size: 16
    }), (0, i.jsx)(a.Z, {
      message: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      ctaMessage: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_CTA,
      onClick: () => {
        l.Z.open(r.oAB.SUBSCRIPTIONS, o.cP)
      }
    })]
  }) : null
}
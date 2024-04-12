"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("230711"),
  l = a("682864"),
  i = a("931547"),
  r = a("981631"),
  o = a("526761"),
  u = a("689938");

function d(e) {
  let {
    subscription: t
  } = e;
  return null == t ? null : t.status === r.SubscriptionStatusTypes.PAST_DUE ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.default, {
      size: 16
    }), (0, n.jsx)(i.default, {
      message: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      ctaMessage: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_CTA,
      onClick: () => {
        s.default.open(r.UserSettingsSections.SUBSCRIPTIONS, o.ROLE_SUBSCRIPTION_SUBSECTION)
      }
    })]
  }) : null
}
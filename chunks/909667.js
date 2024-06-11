"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("723047"),
  i = s("463939"),
  r = s("981631"),
  o = s("689938");

function d(e) {
  let {
    team: t,
    ...s
  } = e, d = (0, n.useRoleSubscriptionSettingsDisabled)() || null == t ? null : o.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: r.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id)
  });
  return 0 === s.payoutsByPeriod.length ? (0, a.jsxs)(l.FormText, {
    type: l.FormText.Types.DESCRIPTION,
    children: [o.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", d]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      children: [o.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", d]
    }), (0, a.jsx)(l.Spacer, {
      size: 16
    }), (0, a.jsx)(i.default, {
      ...s
    })]
  })
}
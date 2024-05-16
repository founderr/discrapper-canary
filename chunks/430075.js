"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var i = n("735250");
n("470079");
var E = n("442837"),
  r = n("481060"),
  o = n("703656"),
  l = n("314897"),
  s = n("644766"),
  I = n("518560"),
  c = n("800530"),
  a = n("981631"),
  S = n("689938"),
  _ = n("833440");

function u() {
  return (0, i.jsxs)(s.default, {
    color: s.NoticeColors.DANGER,
    className: _.nagbar,
    children: [(0, i.jsx)(r.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(s.NoticeButtonAnchor, {
      href: c.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function N() {
  return (0, i.jsx)("div", {
    className: _.pageContainer,
    children: (0, i.jsx)(I.default, {})
  })
}

function A() {
  return null == (0, E.useStateFromStores)([l.default], () => l.default.getSuspendedUserToken()) && (0, o.transitionTo)(a.Routes.LOGIN), (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(u, {}), (0, i.jsx)(N, {})]
  })
}
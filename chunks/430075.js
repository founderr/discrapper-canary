"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var E = n("442837"),
  I = n("481060"),
  S = n("703656"),
  r = n("314897"),
  _ = n("518560"),
  s = n("800530"),
  o = n("981631"),
  a = n("689938"),
  A = n("833440");

function N() {
  return (0, i.jsxs)(I.Notice, {
    color: I.NoticeColors.DANGER,
    className: A.nagbar,
    children: [(0, i.jsx)(I.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: a.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(I.NoticeButtonAnchor, {
      href: s.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, i.jsx)(I.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: a.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function l() {
  return (0, i.jsx)("div", {
    className: A.pageContainer,
    children: (0, i.jsx)(_.default, {})
  })
}

function c() {
  return null == (0, E.useStateFromStores)([r.default], () => r.default.getSuspendedUserToken()) && (0, S.transitionTo)(o.Routes.LOGIN), (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsx)(N, {}), (0, i.jsx)(l, {})]
  })
}
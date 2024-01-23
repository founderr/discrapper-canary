"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var E = n("77078"),
  o = n("446674"),
  r = n("393414"),
  l = n("271938"),
  s = n("489622"),
  c = n("861348"),
  a = n("170213"),
  I = n("49111"),
  S = n("782340"),
  A = n("876680");

function _() {
  return (0, i.jsxs)(s.default, {
    color: s.NoticeColors.DANGER,
    className: A.nagbar,
    children: [(0, i.jsx)(E.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(s.NoticeButtonAnchor, {
      href: a.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function N() {
  return (0, i.jsx)("div", {
    className: A.pageContainer,
    children: (0, i.jsx)(c.default, {})
  })
}

function u() {
  let e = (0, o.useStateFromStores)([l.default], () => l.default.getSuspendedUserToken());
  return null == e && (0, r.transitionTo)(I.Routes.LOGIN), (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsx)(_, {}), (0, i.jsx)(N, {})]
  })
}
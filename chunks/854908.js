"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var o = n("446674"),
  r = n("77078"),
  E = n("393414"),
  s = n("271938"),
  l = n("489622"),
  c = n("861348"),
  a = n("170213"),
  I = n("49111"),
  S = n("782340"),
  _ = n("97911");

function A() {
  return (0, i.jsxs)(l.default, {
    color: l.NoticeColors.DANGER,
    className: _.nagbar,
    children: [(0, i.jsx)(r.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(l.NoticeButtonAnchor, {
      href: a.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
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
    children: (0, i.jsx)(c.default, {})
  })
}

function u() {
  let e = (0, o.useStateFromStores)([s.default], () => s.default.getSuspendedUserToken());
  return null == e && (0, E.transitionTo)(I.Routes.LOGIN), (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(A, {}), (0, i.jsx)(N, {})]
  })
}
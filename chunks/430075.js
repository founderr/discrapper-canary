"use strict";
e.r(E), e.d(E, {
  default: function() {
    return u
  }
});
var t = e(735250);
e(470079);
var I = e(442837),
  _ = e(481060),
  N = e(703656),
  S = e(314897),
  i = e(518560),
  r = e(800530),
  A = e(981631),
  L = e(689938),
  T = e(23705);

function o() {
  return (0, t.jsxs)(_.Notice, {
    color: _.NoticeColors.DANGER,
    className: T.nagbar,
    children: [(0, t.jsx)(_.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: L.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, t.jsx)(_.NoticeButtonAnchor, {
      href: r.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, t.jsx)(_.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: L.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function c() {
  return (0, t.jsx)("div", {
    className: T.pageContainer,
    children: (0, t.jsx)(i.Z, {})
  })
}

function u() {
  return null == (0, I.e7)([S.default], () => S.default.getSuspendedUserToken()) && (0, N.uL)(A.Z5c.LOGIN), (0, t.jsxs)("div", {
    className: T.container,
    children: [(0, t.jsx)(o, {}), (0, t.jsx)(c, {})]
  })
}
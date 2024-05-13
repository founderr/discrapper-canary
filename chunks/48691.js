"use strict";
n.r(t), n.d(t, {
  DraftBadge: function() {
    return _
  },
  PublishedBadge: function() {
    return S
  }
});
var r = n("735250");
n("470079");
var i = n("481060"),
  s = n("44315"),
  l = n("377171"),
  u = n("586791"),
  o = n("127384"),
  a = n("981631"),
  d = n("689938"),
  c = n("842104");

function f(e) {
  let {
    label: t,
    backgroundColor: n = l.default.BUTTON_SECONDARY_BACKGROUND,
    icon: s,
    iconColor: u
  } = e;
  return (0, r.jsxs)("div", {
    className: c.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: c.__invalid_badgeText,
      children: t
    }), (0, r.jsx)(s, {
      className: c.badgeIcon,
      color: null != u ? u : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function S() {
  return (0, r.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: o.default
  })
}

function _() {
  return (0, r.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: u.default,
    iconColor: (0, s.getColor)(a.Color.PRIMARY_330)
  })
}
"use strict";
n.r(t), n.d(t, {
  DraftBadge: function() {
    return _
  },
  PublishedBadge: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("44315"),
  l = n("377171"),
  o = n("586791"),
  u = n("127384"),
  a = n("981631"),
  d = n("689938"),
  c = n("842104");

function f(e) {
  let {
    label: t,
    backgroundColor: n = l.default.BUTTON_SECONDARY_BACKGROUND,
    icon: s,
    iconColor: o
  } = e;
  return (0, i.jsxs)("div", {
    className: c.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: c.__invalid_badgeText,
      children: t
    }), (0, i.jsx)(s, {
      className: c.badgeIcon,
      color: null != o ? o : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function S() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: u.default
  })
}

function _() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: o.default,
    iconColor: (0, s.getColor)(a.Color.PRIMARY_330)
  })
}
"use strict";
n.r(t), n.d(t, {
  DraftBadge: function() {
    return E
  },
  PublishedBadge: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  l = n("44315"),
  s = n("377171"),
  u = n("586791"),
  o = n("127384"),
  a = n("981631"),
  d = n("689938"),
  c = n("326219");

function f(e) {
  let {
    label: t,
    backgroundColor: n = s.default.BUTTON_SECONDARY_BACKGROUND,
    icon: l,
    iconColor: u
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
    }), (0, i.jsx)(l, {
      className: c.badgeIcon,
      color: null != u ? u : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function S() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: o.default
  })
}

function E() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: u.default,
    iconColor: (0, l.getColor)(a.Color.PRIMARY_330)
  })
}
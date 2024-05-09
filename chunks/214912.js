"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var i = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  s = l("481060"),
  r = l("410030"),
  o = l("134432"),
  c = l("601964"),
  d = l("940627"),
  u = l("346656"),
  p = l("964309"),
  _ = l("806519"),
  m = l("768581"),
  f = l("981631"),
  h = l("689938"),
  I = l("713710"),
  g = l("129512"),
  v = l("330065");

function A(e) {
  let {
    guild: t,
    className: l,
    onClick: a
  } = e, A = (0, r.default)(), E = new c.default({
    name: t.name,
    icon: t.icon
  }), C = m.default.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, o.getDevicePixelRatio)()
  }), R = null != C ? C : function(e) {
    switch (e) {
      case f.ThemeTypes.DARK:
        return g;
      case f.ThemeTypes.LIGHT:
        return v
    }
  }(A), x = m.default.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, i.jsxs)(s.Clickable, {
    className: n()(I.card, l),
    onClick: a,
    "aria-label": h.default.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
    children: [(0, i.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, i.jsx)("img", {
        src: R,
        alt: "",
        className: I.splashImage
      }), (0, i.jsx)("div", {
        className: I.guildIcon,
        children: (0, i.jsx)(_.default, {
          mask: _.default.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, i.jsx)("div", {
            className: I.iconMask,
            children: (0, i.jsx)(u.default, {
              className: I.__invalid_icon,
              iconSrc: x,
              guild: E,
              size: u.default.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, i.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, i.jsxs)("div", {
        className: I.guildNameWrapper,
        children: [(0, i.jsx)(d.default, {
          className: I.guildBadge,
          guild: t,
          tooltipColor: s.Tooltip.Colors.PRIMARY
        }), (0, i.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: I.guildName,
          children: t.name
        })]
      }), (0, i.jsx)(s.Text, {
        className: I.guildDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 2,
        children: t.description
      }), (0, i.jsx)("div", {
        className: I.memberInfo,
        children: (0, i.jsxs)("div", {
          className: I.memberCountWrapper,
          children: [(0, i.jsx)(p.default, {
            className: I.memberCountIcon,
            width: "16",
            height: "16"
          }), (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}
"use strict";
i.r(t), i.d(t, {
  default: function() {
    return A
  }
});
var l = i("735250");
i("470079");
var a = i("120356"),
  n = i.n(a),
  s = i("481060"),
  r = i("410030"),
  o = i("134432"),
  c = i("601964"),
  d = i("940627"),
  u = i("346656"),
  p = i("964309"),
  _ = i("806519"),
  m = i("768581"),
  f = i("981631"),
  h = i("689938"),
  I = i("713710"),
  g = i("129512"),
  v = i("330065");

function A(e) {
  let {
    guild: t,
    className: i,
    onClick: a
  } = e, A = (0, r.default)(), E = new c.default({
    name: t.name,
    icon: t.icon
  }), R = m.default.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, o.getDevicePixelRatio)()
  }), x = null != R ? R : function(e) {
    switch (e) {
      case f.ThemeTypes.DARK:
        return g;
      case f.ThemeTypes.LIGHT:
        return v
    }
  }(A), C = m.default.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, l.jsxs)(s.Clickable, {
    className: n()(I.card, i),
    onClick: a,
    "aria-label": h.default.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
    children: [(0, l.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, l.jsx)("img", {
        src: x,
        alt: "",
        className: I.splashImage
      }), (0, l.jsx)("div", {
        className: I.guildIcon,
        children: (0, l.jsx)(_.default, {
          mask: _.default.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, l.jsx)("div", {
            className: I.iconMask,
            children: (0, l.jsx)(u.default, {
              className: I.__invalid_icon,
              iconSrc: C,
              guild: E,
              size: u.default.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsxs)("div", {
        className: I.guildNameWrapper,
        children: [(0, l.jsx)(d.default, {
          className: I.guildBadge,
          guild: t,
          tooltipColor: s.Tooltip.Colors.PRIMARY
        }), (0, l.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: I.guildName,
          children: t.name
        })]
      }), (0, l.jsx)(s.Text, {
        className: I.guildDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 2,
        children: t.description
      }), (0, l.jsx)("div", {
        className: I.memberInfo,
        children: (0, l.jsxs)("div", {
          className: I.memberCountWrapper,
          children: [(0, l.jsx)(p.default, {
            className: I.memberCountIcon,
            width: "16",
            height: "16"
          }), (0, l.jsx)(s.Text, {
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
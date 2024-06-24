i.d(n, {
  Z: function() {
    return A
  }
});
var t = i(735250);
i(470079);
var l = i(120356),
  a = i.n(l),
  s = i(481060),
  r = i(410030),
  o = i(134432),
  c = i(601964),
  d = i(940627),
  u = i(346656),
  p = i(806519),
  _ = i(768581),
  m = i(981631),
  I = i(689938),
  h = i(978543),
  g = i(129512),
  E = i(330065);

function A(e) {
  let {
    guild: n,
    className: i,
    onClick: l
  } = e, A = (0, r.ZP)(), v = new c.ZP({
    name: n.name,
    icon: n.icon
  }), R = _.ZP.getGuildDiscoverySplashURL({
    id: n.id,
    splash: n.discovery_splash,
    size: 192 * (0, o.x_)()
  }), P = null != R ? R : function(e) {
    switch (e) {
      case m.BRd.DARK:
        return g;
      case m.BRd.LIGHT:
        return E
    }
  }(A), C = _.ZP.getGuildIconURL({
    id: n.id,
    icon: n.icon,
    size: 50
  });
  return (0, t.jsxs)(s.Clickable, {
    className: a()(h.card, i),
    onClick: l,
    "aria-label": I.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
    children: [(0, t.jsxs)("div", {
      className: h.cardHeader,
      children: [(0, t.jsx)("img", {
        src: P,
        alt: "",
        className: h.splashImage
      }), (0, t.jsx)("div", {
        className: h.guildIcon,
        children: (0, t.jsx)(p.ZP, {
          mask: p.ZP.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, t.jsx)("div", {
            className: h.iconMask,
            children: (0, t.jsx)(u.Z, {
              className: h.__invalid_icon,
              iconSrc: C,
              guild: v,
              size: u.Z.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, t.jsxs)("div", {
      className: h.cardDetails,
      children: [(0, t.jsxs)("div", {
        className: h.guildNameWrapper,
        children: [(0, t.jsx)(d.Z, {
          className: h.guildBadge,
          guild: n,
          tooltipColor: s.Tooltip.Colors.PRIMARY
        }), (0, t.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: h.guildName,
          children: n.name
        })]
      }), (0, t.jsx)(s.Text, {
        className: h.guildDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 2,
        children: n.description
      }), (0, t.jsx)("div", {
        className: h.memberInfo,
        children: (0, t.jsxs)("div", {
          className: h.memberCountWrapper,
          children: [(0, t.jsx)(s.UserIcon, {
            color: "currentColor",
            className: h.memberCountIcon,
            size: "xs"
          }), (0, t.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: I.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: n.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  i = l("446674"),
  r = l("77078"),
  u = l("997289"),
  o = l("697218"),
  c = l("476263"),
  d = l("216422"),
  f = l("719923"),
  T = l("485422"),
  E = l("777003"),
  A = l("49111"),
  _ = l("782340"),
  S = l("125234"),
  m = l("814076");

function C(e) {
  let {
    guildName: t
  } = e;
  return (0, a.jsxs)("div", {
    className: S.guildMemberProfileTooltip,
    children: [(0, a.jsx)(d.default, {
      className: S.guildMemberProfileTooltipNitroWheel
    }), _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
      guildName: t
    })]
  })
}

function N(e) {
  let {
    guild: t,
    bio: n,
    hidePersonalInformation: d,
    isUsingGuildBio: N,
    lastSection: g = !1,
    animateOnHover: v = !1,
    isHovering: p = !1,
    lineClamp: I
  } = e, {
    location: M
  } = (0, u.useAnalyticsContext)(), h = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(h);
  return d || null == n || "" === n ? null : (0, a.jsxs)(E.default, {
    lastSection: g,
    children: [(0, a.jsxs)(r.Heading, {
      variant: "eyebrow",
      className: m.title,
      children: [_.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, a.jsx)(r.Tooltip, {
        color: r.Tooltip.Colors.CUSTOM,
        tooltipClassName: S.aboutMeGuildIconTooltip,
        "aria-label": _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, a.jsx)(C, {
          guildName: t.name
        }),
        children: e => (0, a.jsx)(c.default, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != h && !O && (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await l.el("414242").then(l.bind(l, "414242"));
              return t => (0, a.jsx)(e, {
                ...t,
                source: {
                  ...M,
                  object: A.AnalyticsObjects.GUILD_ICON
                }
              })
            })
          },
          guild: t,
          size: c.default.Sizes.SMOL,
          className: s(S.aboutMeGuildIcon, {
            [S.nonPremiumHoverState]: !O
          })
        })
      })]
    }), (0, a.jsx)(T.default, {
      userBio: n,
      animateOnHover: v,
      isHovering: p,
      lineClamp: I
    })]
  })
}
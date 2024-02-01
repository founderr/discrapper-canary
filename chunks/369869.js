"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var l = a("37983");
a("884691");
var n = a("414456"),
  s = a.n(n),
  i = a("446674"),
  r = a("77078"),
  u = a("997289"),
  o = a("697218"),
  c = a("476263"),
  d = a("216422"),
  f = a("719923"),
  T = a("485422"),
  E = a("777003"),
  A = a("49111"),
  _ = a("782340"),
  S = a("125234"),
  m = a("814076");

function C(e) {
  let {
    guildName: t
  } = e;
  return (0, l.jsxs)("div", {
    className: S.guildMemberProfileTooltip,
    children: [(0, l.jsx)(d.default, {
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
    location: h
  } = (0, u.useAnalyticsContext)(), M = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(M);
  return d || null == n || "" === n ? null : (0, l.jsxs)(E.default, {
    lastSection: g,
    children: [(0, l.jsxs)(r.Heading, {
      variant: "eyebrow",
      className: m.title,
      children: [_.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, l.jsx)(r.Tooltip, {
        color: r.Tooltip.Colors.CUSTOM,
        tooltipClassName: S.aboutMeGuildIconTooltip,
        "aria-label": _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, l.jsx)(C, {
          guildName: t.name
        }),
        children: e => (0, l.jsx)(c.default, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != M && !O && (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await a.el("414242").then(a.bind(a, "414242"));
              return t => (0, l.jsx)(e, {
                ...t,
                source: {
                  ...h,
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
    }), (0, l.jsx)(T.default, {
      userBio: n,
      animateOnHover: v,
      isHovering: p,
      lineClamp: I
    })]
  })
}
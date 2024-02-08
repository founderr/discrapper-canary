"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var n = a("37983");
a("884691");
var l = a("414456"),
  s = a.n(l),
  i = a("446674"),
  r = a("77078"),
  u = a("997289"),
  o = a("697218"),
  c = a("476263"),
  d = a("216422"),
  f = a("719923"),
  T = a("485422"),
  E = a("777003"),
  m = a("49111"),
  S = a("782340"),
  A = a("125234"),
  g = a("814076");

function _(e) {
  let {
    guildName: t
  } = e;
  return (0, n.jsxs)("div", {
    className: A.guildMemberProfileTooltip,
    children: [(0, n.jsx)(d.default, {
      className: A.guildMemberProfileTooltipNitroWheel
    }), S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
      guildName: t
    })]
  })
}

function C(e) {
  let {
    guild: t,
    bio: l,
    hidePersonalInformation: d,
    isUsingGuildBio: C,
    lastSection: p = !1,
    animateOnHover: v = !1,
    isHovering: N = !1,
    lineClamp: I
  } = e, {
    location: h
  } = (0, u.useAnalyticsContext)(), M = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), x = f.default.canUsePremiumGuildMemberProfile(M);
  return d || null == l || "" === l ? null : (0, n.jsxs)(E.default, {
    lastSection: p,
    children: [(0, n.jsxs)(r.Heading, {
      variant: "eyebrow",
      className: g.title,
      children: [S.default.Messages.USER_POPOUT_ABOUT_ME, null != t && C && (0, n.jsx)(r.Tooltip, {
        color: r.Tooltip.Colors.CUSTOM,
        tooltipClassName: A.aboutMeGuildIconTooltip,
        "aria-label": S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, n.jsx)(_, {
          guildName: t.name
        }),
        children: e => (0, n.jsx)(c.default, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != M && !x && (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await a.el("414242").then(a.bind(a, "414242"));
              return t => (0, n.jsx)(e, {
                ...t,
                source: {
                  ...h,
                  object: m.AnalyticsObjects.GUILD_ICON
                }
              })
            })
          },
          guild: t,
          size: c.default.Sizes.SMOL,
          className: s(A.aboutMeGuildIcon, {
            [A.nonPremiumHoverState]: !x
          })
        })
      })]
    }), (0, n.jsx)(T.default, {
      userBio: l,
      animateOnHover: v,
      isHovering: N,
      lineClamp: I
    })]
  })
}
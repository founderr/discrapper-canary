"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var r = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("446674"),
  i = l("77078"),
  o = l("997289"),
  u = l("697218"),
  d = l("476263"),
  c = l("216422"),
  f = l("719923"),
  T = l("485422"),
  p = l("777003"),
  m = l("49111"),
  E = l("782340"),
  P = l("125234"),
  S = l("814076");

function v(e) {
  let {
    guildName: t
  } = e;
  return (0, r.jsxs)("div", {
    className: P.guildMemberProfileTooltip,
    children: [(0, r.jsx)(c.default, {
      className: P.guildMemberProfileTooltipNitroWheel
    }), E.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
      guildName: t
    })]
  })
}

function h(e) {
  let {
    guild: t,
    bio: a,
    hidePersonalInformation: c,
    isUsingGuildBio: h,
    lastSection: g = !1,
    animateOnHover: _ = !1,
    isHovering: N = !1,
    lineClamp: O
  } = e, {
    location: U
  } = (0, o.useAnalyticsContext)(), A = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = f.default.canUsePremiumGuildMemberProfile(A);
  return c || null == a || "" === a ? null : (0, r.jsxs)(p.default, {
    lastSection: g,
    children: [(0, r.jsxs)(i.Heading, {
      variant: "eyebrow",
      className: S.title,
      children: [E.default.Messages.USER_POPOUT_ABOUT_ME, null != t && h && (0, r.jsx)(i.Tooltip, {
        color: i.Tooltip.Colors.CUSTOM,
        tooltipClassName: P.aboutMeGuildIconTooltip,
        "aria-label": E.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, r.jsx)(v, {
          guildName: t.name
        }),
        children: e => (0, r.jsx)(d.default, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != A && !C && (0, i.openModalLazy)(async () => {
              let {
                default: e
              } = await l.el("414242").then(l.bind(l, "414242"));
              return t => (0, r.jsx)(e, {
                ...t,
                source: {
                  ...U,
                  object: m.AnalyticsObjects.GUILD_ICON
                }
              })
            })
          },
          guild: t,
          size: d.default.Sizes.SMOL,
          className: n(P.aboutMeGuildIcon, {
            [P.nonPremiumHoverState]: !C
          })
        })
      })]
    }), (0, r.jsx)(T.default, {
      userBio: a,
      animateOnHover: _,
      isHovering: N,
      lineClamp: O
    })]
  })
}
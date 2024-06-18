"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(2052),
  u = n(580552),
  _ = n(594174),
  c = n(346656),
  d = n(74538),
  E = n(588822),
  I = n(659101),
  T = n(981631),
  h = n(689938),
  S = n(404737),
  f = n(379916);

function N(e) {
  let {
    guildName: t
  } = e;
  return (0, i.jsxs)("div", {
    className: S.guildMemberProfileTooltip,
    children: [(0, i.jsx)(a.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: S.guildMemberProfileTooltipNitroWheel
    }), h.Z.Messages.GUILD_IDENTITY_BIO_TOAST.format({
      guildName: t
    })]
  })
}

function A(e) {
  let {
    guild: t,
    bio: r,
    hidePersonalInformation: A,
    isUsingGuildBio: m,
    lastSection: O = !1,
    animateOnHover: R = !1,
    isHovering: p = !1,
    lineClamp: g,
    userId: C
  } = e, {
    location: v
  } = (0, l.O)(), L = (0, o.e7)([_.default], () => _.default.getCurrentUser()), D = d.ZP.canUsePremiumGuildMemberProfile(L), M = (0, u.Z)(C);
  return (A || null == r || "" === r) && !M ? null : (0, i.jsxs)(I.Z, {
    lastSection: O,
    children: [(0, i.jsxs)(a.Heading, {
      variant: "eyebrow",
      className: f.title,
      children: [h.Z.Messages.USER_POPOUT_ABOUT_ME, null != t && m && (0, i.jsx)(a.Tooltip, {
        color: a.Tooltip.Colors.NESTED,
        tooltipClassName: S.aboutMeGuildIconTooltip,
        "aria-label": h.Z.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, i.jsx)(N, {
          guildName: t.name
        }),
        children: e => (0, i.jsx)(c.Z, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != L && !D && (0, a.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e("84509").then(n.bind(n, 933696));
              return t => (0, i.jsx)(e, {
                ...t,
                source: {
                  ...v,
                  object: T.qAy.GUILD_ICON
                }
              })
            })
          },
          guild: t,
          size: c.Z.Sizes.SMOL,
          className: s()(S.aboutMeGuildIcon, {
            [S.nonPremiumHoverState]: !D
          })
        })
      })]
    }), (0, i.jsx)(E.Z, {
      userBio: r,
      animateOnHover: R,
      isHovering: p,
      lineClamp: g,
      userId: C
    })]
  })
}
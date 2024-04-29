"use strict";
a.r(t), a.d(t, {
  ReferralProgramCoachtipLinkButton: function() {
    return _
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("780384"),
  o = a("481060"),
  u = a("410030"),
  d = a("206180"),
  c = a("714961"),
  f = a("25538"),
  E = a("689938"),
  h = a("241807");
let _ = e => {
  let {
    children: t
  } = e, a = (0, u.default)(), s = (0, r.isThemeLight)(a) ? f.default : c.default, l = (0, n.jsxs)("div", {
    className: h.coachTipContainer,
    children: [(0, n.jsx)("div", {
      className: h.iconContainer,
      children: (0, n.jsx)(s, {
        width: 130,
        height: 130,
        className: h.icon
      })
    }), (0, n.jsxs)("div", {
      className: h.coachtipContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: E.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: E.default.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({
          numReferrals: 3
        })
      })]
    })]
  });
  return (0, n.jsx)(o.Tooltip, {
    text: l,
    position: "right",
    "aria-label": E.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    tooltipClassName: h.marketingBadgeTooltip,
    allowOverflow: !0,
    children: e => (0, n.jsx)("div", {
      ...e,
      children: t
    })
  })
};
t.default = e => {
  let {
    isSelected: t,
    onSelect: a
  } = e;
  return s.useEffect(() => {
    t && a()
  }, [t, a]), (0, n.jsxs)("div", {
    className: h.badgeContainer,
    children: [(0, n.jsx)("div", {
      className: h.newBadge,
      children: E.default.Messages.NEW
    }), (0, n.jsx)("span", {
      className: i()(h.star, h.starLeft),
      children: (0, n.jsx)(d.default, {
        width: 8,
        height: 8
      })
    }), (0, n.jsx)("span", {
      className: i()(h.star, h.starRight),
      children: (0, n.jsx)(d.default, {
        width: 13,
        height: 13
      })
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  ReferralProgramCoachtipLinkButton: function() {
    return f
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("206180"),
  u = n("119269"),
  d = n("689938"),
  c = n("241807");
let f = e => {
  let {
    children: t
  } = e, n = (0, a.jsxs)("div", {
    className: c.coachTipContainer,
    children: [(0, a.jsx)("div", {
      className: c.iconContainer,
      children: (0, a.jsx)(u.default, {
        staticPercentage: 100,
        iconClassName: c.icon,
        showAnimations: !0,
        progressCircleVariation: u.ProgressCircleVariation.NITRO_LOGO,
        ellipseOpacity: 1,
        customAnimationClassName: c.customCircleAnimation,
        circleColor: "url(#purple-gradient)"
      })
    }), (0, a.jsxs)("div", {
      className: c.coachtipContent,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-sm/bold",
        children: d.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        children: d.default.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({
          numReferrals: 3
        })
      })]
    })]
  });
  return (0, a.jsx)(r.Tooltip, {
    text: n,
    position: "right",
    "aria-label": d.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    tooltipClassName: c.marketingBadgeTooltip,
    allowOverflow: !0,
    tooltipContentClassName: c.tooltipContent,
    children: e => (0, a.jsx)("div", {
      ...e,
      children: t
    })
  })
};
t.default = e => {
  let {
    isSelected: t,
    onSelect: n
  } = e;
  return s.useEffect(() => {
    t && n()
  }, [t, n]), (0, a.jsxs)("div", {
    className: c.badgeContainer,
    children: [(0, a.jsx)("div", {
      className: c.newBadge,
      children: d.default.Messages.NEW
    }), (0, a.jsx)("span", {
      className: i()(c.star, c.starLeft),
      children: (0, a.jsx)(o.default, {
        width: 8,
        height: 8
      })
    }), (0, a.jsx)("span", {
      className: i()(c.star, c.starRight),
      children: (0, a.jsx)(o.default, {
        width: 13,
        height: 13
      })
    })]
  })
}
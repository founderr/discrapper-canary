n.d(t, {
  E: function() {
    return E
  }
});
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(206180),
  c = n(119269),
  u = n(689938),
  d = n(616614);
let E = e => {
  let {
    children: t
  } = e, n = (0, i.jsxs)("div", {
    className: d.coachTipContainer,
    children: [(0, i.jsx)("div", {
      className: d.iconContainer,
      children: (0, i.jsx)(c.Z, {
        staticPercentage: 100,
        iconClassName: d.icon,
        showAnimations: !0,
        progressCircleVariation: c.Q.NITRO_LOGO,
        ellipseOpacity: 1,
        customAnimationClassName: d.customCircleAnimation,
        circleColor: "url(#purple-gradient)"
      })
    }), (0, i.jsxs)("div", {
      className: d.coachtipContent,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-sm/bold",
        children: u.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
      }), (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        children: u.Z.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({
          numReferrals: 3
        })
      })]
    })]
  });
  return (0, i.jsx)(r.Tooltip, {
    text: n,
    position: "right",
    "aria-label": u.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    tooltipClassName: d.marketingBadgeTooltip,
    allowOverflow: !0,
    tooltipContentClassName: d.tooltipContent,
    children: e => (0, i.jsx)("div", {
      ...e,
      children: t
    })
  })
};
t.Z = e => {
  let {
    isSelected: t,
    onSelect: n
  } = e;
  return s.useEffect(() => {
    t && n()
  }, [t, n]), (0, i.jsxs)("div", {
    className: d.badgeContainer,
    children: [(0, i.jsx)("div", {
      className: d.newBadge,
      children: u.Z.Messages.NEW
    }), (0, i.jsx)("span", {
      className: a()(d.star, d.starLeft),
      children: (0, i.jsx)(o.Z, {
        width: 8,
        height: 8
      })
    }), (0, i.jsx)("span", {
      className: a()(d.star, d.starRight),
      children: (0, i.jsx)(o.Z, {
        width: 13,
        height: 13
      })
    })]
  })
}
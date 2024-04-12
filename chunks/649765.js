"use strict";
i.r(t);
var n = i("735250"),
  r = i("470079"),
  s = i("803997"),
  a = i.n(s),
  l = i("780384"),
  o = i("481060"),
  u = i("410030"),
  c = i("206180"),
  d = i("714961"),
  f = i("25538"),
  p = i("689938"),
  C = i("281982");
let m = () => {
  let e = (0, u.default)(),
    t = (0, l.isThemeLight)(e) ? f.default : d.default;
  return (0, n.jsxs)("div", {
    className: C.coachTipContainer,
    children: [(0, n.jsx)("div", {
      className: C.iconContainer,
      children: (0, n.jsx)(t, {
        width: 130,
        height: 130,
        className: C.icon
      })
    }), (0, n.jsxs)("div", {
      className: C.coachtipContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: p.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: p.default.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({
          numReferrals: 3
        })
      })]
    })]
  })
};
t.default = e => {
  let {
    isSelected: t,
    onSelect: i
  } = e;
  return r.useEffect(() => {
    t && i()
  }, [t, i]), (0, n.jsx)(o.Tooltip, {
    text: (0, n.jsx)(m, {}),
    position: "right",
    "aria-label": p.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    tooltipClassName: C.marketingBadgeTooltip,
    allowOverflow: !0,
    children: e => (0, n.jsxs)("div", {
      className: C.badgeContainer,
      ...e,
      children: [(0, n.jsx)("div", {
        className: C.newBadge,
        children: p.default.Messages.NEW
      }), (0, n.jsx)("span", {
        className: a()(C.star, C.starLeft),
        children: (0, n.jsx)(c.default, {
          width: 8,
          height: 8
        })
      }), (0, n.jsx)("span", {
        className: a()(C.star, C.starRight),
        children: (0, n.jsx)(c.default, {
          width: 13,
          height: 13
        })
      })]
    })
  })
}
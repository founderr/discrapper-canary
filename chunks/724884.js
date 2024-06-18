"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(689938),
  l = n(648346),
  u = n(247844);

function _(e) {
  let {
    className: t,
    icon: n,
    children: r
  } = e;
  return (0, i.jsxs)("li", {
    className: s()(l.card, t),
    children: [(0, i.jsx)(n, {
      className: l.icon
    }), (0, i.jsx)(o.Text, {
      className: l.__invalid_description,
      variant: "text-sm/medium",
      children: r
    })]
  })
}
t.Z = function(e) {
  let {
    cardClassName: t
  } = e;
  return (0, i.jsxs)("div", {
    className: l.wrapper,
    children: [(0, i.jsxs)("div", {
      className: l.content,
      children: [(0, i.jsx)(o.Heading, {
        className: l.heading,
        color: "always-white",
        variant: "heading-xxl/bold",
        children: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING
      }), (0, i.jsxs)("ul", {
        className: l.cards,
        children: [(0, i.jsx)(_, {
          className: t,
          icon: o.BoostTier2SimpleIcon,
          children: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON
        }), (0, i.jsx)(_, {
          className: t,
          icon: e => (0, i.jsx)("img", {
            className: s()(e.className, l.iconImage),
            src: u,
            alt: ""
          }),
          children: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE
        }), (0, i.jsx)(_, {
          className: t,
          icon: o.ShieldUserIcon,
          children: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE
        }), (0, i.jsx)(_, {
          className: t,
          icon: o.HeartIcon,
          children: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT
        })]
      })]
    }), (0, i.jsx)("div", {
      className: l.backgroundImages
    })]
  })
}
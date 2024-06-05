"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("314684"),
  o = s("176782"),
  u = s("743612"),
  d = s("735825"),
  c = s("955627"),
  _ = s("721239"),
  E = s("557634"),
  T = s("992429");
t.default = e => {
  var t;
  let s, r, {
      title: I,
      titleClassName: R,
      buttonClassName: f,
      perkImage: S,
      isCarousel: A,
      onCtaClick: m,
      perkComponent: N,
      subtitle: p = "",
      descriptionCta: g = "",
      cardVariant: C,
      subtitleClassName: P
    } = e,
    O = (0, o.useCardVariantsInfo)(C),
    M = (0, l.useFreeBoostUserTenureReward)(),
    h = (null == M ? void 0 : M.nitroTenureStatus) === d.NitroRewardStatus.REDEEMABLE;
  switch (null == M ? void 0 : M.nitroTenureStatus) {
    case d.NitroRewardStatus.REDEEMABLE:
      s = T, r = "unlocked icon";
      break;
    case d.NitroRewardStatus.PENDING:
      s = _, r = "locked icon";
      break;
    case d.NitroRewardStatus.REDEEMED:
      s = E, r = "thumbs up icon";
      break;
    default:
      s = void 0, r = ""
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i()(c.cover, c.below)
    }), (0, a.jsx)(u.default, {
      title: I,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: O,
      titleClassName: R,
      subtitle: p,
      subtitleClassName: P
    }), null != S && (0, a.jsx)("img", {
      src: S,
      alt: "",
      className: i()({
        [c.cardImage]: !A,
        [c.carouselCardImage]: A
      })
    }), null != N && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: c.cardIllustrationNoHover,
        children: [(0, a.jsx)("div", {
          className: c.cardComponent,
          children: N
        }), 0 !== g.length && null != m && (0, a.jsx)(n.Button, {
          className: f,
          disabled: !h,
          fullWidth: !0,
          onClick: m,
          children: (0, a.jsxs)("div", {
            className: null == O ? void 0 : null === (t = O.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, a.jsx)("img", {
              alt: r,
              src: s
            }), g]
          })
        })]
      })
    })]
  })
}
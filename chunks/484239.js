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
  c = s("735825"),
  d = s("955627"),
  _ = s("721239"),
  E = s("557634"),
  R = s("992429");
t.default = e => {
  var t;
  let s, r, {
      title: T,
      titleClassName: I,
      buttonClassName: f,
      perkImage: S,
      isCarousel: m,
      onCtaClick: p,
      perkComponent: A,
      subtitle: M = "",
      descriptionCta: C = "",
      cardVariant: g,
      subtitleClassName: N
    } = e,
    P = (0, o.useCardVariantsInfo)(g),
    O = (0, l.useFreeBoostUserTenureReward)(),
    x = (null == O ? void 0 : O.nitroTenureStatus) === c.NitroRewardStatus.REDEEMABLE;
  switch (null == O ? void 0 : O.nitroTenureStatus) {
    case c.NitroRewardStatus.REDEEMABLE:
      s = R, r = "unlocked icon";
      break;
    case c.NitroRewardStatus.PENDING:
      s = _, r = "locked icon";
      break;
    case c.NitroRewardStatus.REDEEMED:
      s = E, r = "thumbs up icon";
      break;
    default:
      s = void 0, r = ""
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i()(d.cover, d.below)
    }), (0, a.jsx)(u.default, {
      title: T,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: P,
      titleClassName: I,
      subtitle: M,
      subtitleClassName: N
    }), null != S && (0, a.jsx)("img", {
      src: S,
      alt: "",
      className: i()({
        [d.cardImage]: !m,
        [d.carouselCardImage]: m
      })
    }), null != A && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: d.cardIllustrationNoHover,
        children: [(0, a.jsx)("div", {
          className: d.cardComponent,
          children: A
        }), 0 !== C.length && null != p && (0, a.jsx)(n.Button, {
          className: f,
          disabled: !x,
          fullWidth: !0,
          onClick: p,
          children: (0, a.jsxs)("div", {
            className: null == P ? void 0 : null === (t = P.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, a.jsx)("img", {
              alt: r,
              src: s
            }), C]
          })
        })]
      })
    })]
  })
}
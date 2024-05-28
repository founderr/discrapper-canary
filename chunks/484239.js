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
      titleClassName: f,
      perkImage: m,
      isCarousel: I,
      onCtaClick: S,
      perkComponent: p,
      subtitle: A = "",
      descriptionCta: g = "",
      cardVariant: N,
      subtitleClassName: M
    } = e,
    C = (0, o.useCardVariantsInfo)(N),
    P = (0, l.useFreeBoostUserTenureReward)(),
    O = (null == P ? void 0 : P.nitroTenureStatus) === c.NitroRewardStatus.REDEEMABLE;
  switch (null == P ? void 0 : P.nitroTenureStatus) {
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
      cardVariantStyleInfo: C,
      titleClassName: f,
      subtitle: A,
      subtitleClassName: M
    }), null != m && (0, a.jsx)("img", {
      src: m,
      alt: "",
      className: i()({
        [d.cardImage]: !I,
        [d.carouselCardImage]: I
      })
    }), null != p && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: d.cardIllustrationNoHover,
        children: [(0, a.jsx)("div", {
          className: d.cardComponent,
          children: p
        }), 0 !== g.length && null != S && (0, a.jsx)(n.Button, {
          disabled: !O,
          fullWidth: !0,
          onClick: S,
          children: (0, a.jsxs)("div", {
            className: null == C ? void 0 : null === (t = C.descriptionCta) || void 0 === t ? void 0 : t.className,
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
"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("481060"),
  n = s("314684"),
  o = s("176782"),
  u = s("743612"),
  d = s("735825"),
  c = s("622481"),
  _ = s("721239"),
  E = s("557634"),
  C = s("992429");
t.default = e => {
  var t;
  let s, i, {
      title: f,
      titleClassName: T,
      perkImage: I,
      isCarousel: R,
      onCtaClick: S,
      perkComponent: p,
      subtitle: m = "",
      descriptionCta: A = "",
      cardVariant: g,
      subtitleClassName: N
    } = e,
    O = (0, o.useCardVariantsInfo)(g),
    P = (0, n.useFreeBoostUserTenureReward)(),
    h = (null == P ? void 0 : P.nitroTenureStatus) === d.NitroRewardStatus.REDEEMABLE;
  switch (null == P ? void 0 : P.nitroTenureStatus) {
    case d.NitroRewardStatus.REDEEMABLE:
      s = C, i = "unlocked icon";
      break;
    case d.NitroRewardStatus.PENDING:
      s = _, i = "locked icon";
      break;
    case d.NitroRewardStatus.REDEEMED:
      s = E, i = "thumbs up icon";
      break;
    default:
      s = void 0, i = ""
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: r()(c.cover, c.below)
    }), (0, a.jsx)(u.default, {
      title: f,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: O,
      titleClassName: T,
      subtitle: m,
      subtitleClassName: N
    }), null != I && (0, a.jsx)("img", {
      src: I,
      alt: "",
      className: r()({
        [c.cardImage]: !R,
        [c.carouselCardImage]: R
      })
    }), null != p && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: c.cardIllustrationNoHover,
        children: [(0, a.jsx)("div", {
          className: c.cardComponent,
          children: p
        }), 0 !== A.length && null != S && (0, a.jsx)(l.Button, {
          disabled: !h,
          fullWidth: !0,
          onClick: S,
          children: (0, a.jsxs)("div", {
            className: null == O ? void 0 : null === (t = O.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, a.jsx)("img", {
              alt: i,
              src: s
            }), A]
          })
        })]
      })
    })]
  })
}
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(314684),
  o = t(176782),
  _ = t(743612),
  c = t(735825),
  E = t(52689),
  u = t(721239),
  R = t(557634),
  d = t(992429);
s.Z = e => {
  var s;
  let t, a, {
      title: I,
      titleClassName: T,
      buttonClassName: A,
      perkImage: M,
      isCarousel: S,
      onCtaClick: N,
      perkComponent: p,
      subtitle: m = "",
      descriptionCta: C = "",
      cardVariant: g,
      subtitleClassName: P
    } = e,
    O = (0, o._)(g),
    f = (0, l.yQ)(),
    x = (null == f ? void 0 : f.nitroTenureStatus) === c.EB.REDEEMABLE;
  switch (null == f ? void 0 : f.nitroTenureStatus) {
    case c.EB.REDEEMABLE:
      t = d, a = "unlocked icon";
      break;
    case c.EB.PENDING:
      t = u, a = "locked icon";
      break;
    case c.EB.REDEEMED:
      t = R, a = "thumbs up icon";
      break;
    default:
      t = void 0, a = ""
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: r()(E.cover, E.below)
    }), (0, n.jsx)(_.Z, {
      title: I,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: O,
      titleClassName: T,
      subtitle: m,
      subtitleClassName: P
    }), null != M && (0, n.jsx)("img", {
      src: M,
      alt: "",
      className: r()({
        [E.cardImage]: !S,
        [E.carouselCardImage]: S
      })
    }), null != p && (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: E.cardIllustrationNoHover,
        children: [(0, n.jsx)("div", {
          className: E.cardComponent,
          children: p
        }), 0 !== C.length && null != N && (0, n.jsx)(i.Button, {
          className: A,
          disabled: !x,
          fullWidth: !0,
          onClick: N,
          children: (0, n.jsxs)("div", {
            className: null == O ? void 0 : null === (s = O.descriptionCta) || void 0 === s ? void 0 : s.className,
            children: [(0, n.jsx)("img", {
              alt: a,
              src: t
            }), C]
          })
        })]
      })
    })]
  })
}
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(314684),
  o = n(176782),
  c = n(743612),
  d = n(735825),
  _ = n(927231),
  E = n(721239),
  u = n(557634),
  T = n(992429);
t.Z = e => {
  var t;
  let n, a, {
      title: I,
      titleClassName: R,
      buttonClassName: C,
      perkImage: g,
      isCarousel: p,
      onCtaClick: A,
      perkComponent: N,
      subtitle: m = "",
      descriptionCta: S = "",
      cardVariant: f,
      subtitleClassName: M
    } = e,
    h = (0, o._)(f),
    b = (0, l.yQ)(),
    x = (null == b ? void 0 : b.nitroTenureStatus) === d.EB.REDEEMABLE;
  switch (null == b ? void 0 : b.nitroTenureStatus) {
    case d.EB.REDEEMABLE:
      n = T, a = "unlocked icon";
      break;
    case d.EB.PENDING:
      n = E, a = "locked icon";
      break;
    case d.EB.REDEEMED:
      n = u, a = "thumbs up icon";
      break;
    default:
      n = void 0, a = ""
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: i()(_.cover, _.below)
    }), (0, s.jsx)(c.Z, {
      title: I,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: h,
      titleClassName: R,
      subtitle: m,
      subtitleClassName: M
    }), null != g && (0, s.jsx)("img", {
      src: g,
      alt: "",
      className: i()({
        [_.cardImage]: !p,
        [_.carouselCardImage]: p
      })
    }), null != N && (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)("div", {
        className: _.cardIllustrationNoHover,
        children: [(0, s.jsx)("div", {
          className: _.cardComponent,
          children: N
        }), 0 !== S.length && null != A && (0, s.jsx)(r.Button, {
          className: C,
          disabled: !x,
          fullWidth: !0,
          onClick: A,
          children: (0, s.jsxs)("div", {
            className: null == h ? void 0 : null === (t = h.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, s.jsx)("img", {
              alt: a,
              src: n
            }), S]
          })
        })]
      })
    })]
  })
}
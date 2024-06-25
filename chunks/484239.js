var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(314684),
  o = s(176782),
  c = s(743612),
  E = s(735825),
  _ = s(927231),
  u = s(721239),
  d = s(557634),
  T = s(992429);
t.Z = e => {
  var t;
  let s, a, {
      title: I,
      titleClassName: R,
      buttonClassName: A,
      perkImage: N,
      isCarousel: C,
      onCtaClick: g,
      perkComponent: m,
      subtitle: M = "",
      descriptionCta: S = "",
      cardVariant: p,
      subtitleClassName: h
    } = e,
    f = (0, o._)(p),
    O = (0, l.yQ)(),
    x = (null == O ? void 0 : O.nitroTenureStatus) === E.EB.REDEEMABLE;
  switch (null == O ? void 0 : O.nitroTenureStatus) {
    case E.EB.REDEEMABLE:
      s = T, a = "unlocked icon";
      break;
    case E.EB.PENDING:
      s = u, a = "locked icon";
      break;
    case E.EB.REDEEMED:
      s = d, a = "thumbs up icon";
      break;
    default:
      s = void 0, a = ""
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: i()(_.cover, _.below)
    }), (0, n.jsx)(c.Z, {
      title: I,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: f,
      titleClassName: R,
      subtitle: M,
      subtitleClassName: h
    }), null != N && (0, n.jsx)("img", {
      src: N,
      alt: "",
      className: i()({
        [_.cardImage]: !C,
        [_.carouselCardImage]: C
      })
    }), null != m && (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: _.cardIllustrationNoHover,
        children: [(0, n.jsx)("div", {
          className: _.cardComponent,
          children: m
        }), 0 !== S.length && null != g && (0, n.jsx)(r.Button, {
          className: A,
          disabled: !x,
          fullWidth: !0,
          onClick: g,
          children: (0, n.jsxs)("div", {
            className: null == f ? void 0 : null === (t = f.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, n.jsx)("img", {
              alt: a,
              src: s
            }), S]
          })
        })]
      })
    })]
  })
}
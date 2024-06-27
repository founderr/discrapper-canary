n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(887024),
  o = n(481060),
  c = n(410154),
  d = n(915296),
  _ = n(314684),
  E = n(565626),
  u = n(32173),
  T = n(391110),
  I = n(75077),
  R = n(320319),
  C = n(438374);
let g = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: n,
    title: a,
    headerClassname: i
  } = e, r = (0, s.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : C.heading,
    children: a
  });
  return null == t ? r : n ? (0, s.jsxs)("div", {
    className: C.sectionHeader,
    children: [r, null != t && (0, s.jsx)("div", {
      className: C.showAllPerksButton,
      children: t
    })]
  }) : (0, s.jsx)("div", {
    className: C.container,
    children: (0, s.jsx)("div", {
      className: C.sectionHeaderSeeAll,
      children: r
    })
  })
};
t.Z = e => {
  var t;
  let {
    className: n,
    variant: i = T.R0.PERKS_DISCOVERABILITY,
    noBackground: p = !1,
    leftAlignHeaders: A = !1,
    showAllPerksButton: N,
    headerClassname: m,
    isFullScreen: S = !0
  } = e, f = a.useRef(null), M = (0, _.yQ)(), h = (0, E.Ag)(M), b = (0, c.ZP)("perks-discoverability");
  (0, E.I2)();
  let x = (0, d.HI)({
      location: T.R0.PERKS_DISCOVERABILITY
    }),
    O = i === T.R0.WHATS_NEW,
    P = (0, _.IY)();
  a.useEffect(() => {
    O && !h && P()
  }, [P, O, h]), a.useEffect(() => {
    let e = f.current;
    if (null == e || !h || !O) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), O && P()
    });
    return () => {
      cancelAnimationFrame(t), O && P()
    }
  }, [f, h, O, P]);
  let L = (0, I.Op)(O),
    v = (0, u.Z)(),
    Z = (0, I.mN)(),
    D = (0, I.sP)({
      perksCards: v,
      variant: i,
      shopMarketingVariation: b,
      isFullScreen: S,
      showTenureCard: null == M ? void 0 : M.showCard,
      tileOrderVariant: x,
      isPremiumSubscriber: Z
    }),
    B = D.some(e => null != e.pillText),
    [U, j] = a.useState(null),
    G = a.useRef(new l.qA);
  return (0, s.jsxs)(s.Fragment, {
    children: [(null == v ? void 0 : null === (t = v.freeBoost) || void 0 === t ? void 0 : t.name) === u.u.FREE_BOOST && (0, s.jsx)(l.O_, {
      ref: j,
      className: C.confettiCanvas,
      environment: G.current
    }), (0, s.jsxs)("div", {
      ref: f,
      className: r()(C.section, {
        [C.centerAlignSection]: !A,
        [C.leftAlignSection]: A
      }, n),
      children: [(0, s.jsx)(g, {
        showAllPerksButton: N,
        leftAlignHeaders: A,
        title: L.title,
        headerClassname: m
      }), (0, s.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: r()(C.subtitle, {
          [C.subtitle]: null == N || A,
          [C.subtitleWithButton]: null != N && !A,
          [C.fullWidth]: O || A,
          [C.moreSubtitleMargin]: B,
          [C.leftAlignSubtitle]: A,
          [C.centerAlignSubtitle]: !A
        }),
        children: L.subtitle
      }), !A && null != N && (0, s.jsx)("div", {
        className: r()(C.showAllPerksButtonCenter),
        children: N
      }), (0, s.jsx)("div", {
        className: r()({
          [C.cardContainer]: S,
          [C.cardContainerNarrowWidth]: !S
        }),
        children: D.map((e, t) => (0, s.jsx)(R.Z, {
          confettiCanvas: e.name === u.u.FREE_BOOST ? U : void 0,
          ...e,
          forceShadow: p
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
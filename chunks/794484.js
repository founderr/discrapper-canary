n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(887024),
  o = n(481060),
  c = n(410154),
  d = n(915296),
  _ = n(314684),
  E = n(565626),
  u = n(32173),
  T = n(734741),
  I = n(391110),
  R = n(75077),
  C = n(320319),
  g = n(438374);
let p = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: n,
    title: a,
    headerClassname: r
  } = e, i = (0, s.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != r ? r : g.heading,
    children: a
  });
  return null == t ? i : n ? (0, s.jsxs)("div", {
    className: g.sectionHeader,
    children: [i, null != t && (0, s.jsx)("div", {
      className: g.showAllPerksButton,
      children: t
    })]
  }) : (0, s.jsx)("div", {
    className: g.container,
    children: (0, s.jsx)("div", {
      className: g.sectionHeaderSeeAll,
      children: i
    })
  })
};
t.Z = e => {
  var t;
  let {
    className: n,
    variant: r = I.R0.PERKS_DISCOVERABILITY,
    noBackground: A = !1,
    leftAlignHeaders: N = !1,
    showAllPerksButton: m,
    headerClassname: S,
    isFullScreen: f = !0
  } = e, h = a.useRef(null), M = (0, _.yQ)(), [x, b] = a.useState(!1), O = (0, E.Ag)(M) || x, P = (0, c.ZP)("perks-discoverability");
  a.useLayoutEffect(() => {
    b((0, T.i3)())
  }, []), (0, E.I2)(), (0, T.ph)();
  let L = (0, d.HI)({
      location: I.R0.PERKS_DISCOVERABILITY
    }),
    v = r === I.R0.WHATS_NEW,
    Z = (0, _.IY)();
  a.useEffect(() => {
    v && !O && Z()
  }, [Z, v, O]), a.useEffect(() => {
    let e = h.current;
    if (null == e || !O || !v) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), v && Z()
    });
    return () => {
      cancelAnimationFrame(t), v && Z()
    }
  }, [h, O, v, Z]);
  let D = (0, R.Op)(v),
    B = (0, u.Z)(),
    U = (0, R.mN)(),
    j = (0, R.sP)({
      perksCards: B,
      variant: r,
      shopMarketingVariation: P,
      isFullScreen: f,
      showTenureCard: null == M ? void 0 : M.showCard,
      tileOrderVariant: L,
      isPremiumSubscriber: U
    }),
    G = j.some(e => null != e.pillText),
    [H, y] = a.useState(null),
    k = a.useRef(new l.qA);
  return (0, s.jsxs)(s.Fragment, {
    children: [(null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === u.u.FREE_BOOST && (0, s.jsx)(l.O_, {
      ref: y,
      className: g.confettiCanvas,
      environment: k.current
    }), (0, s.jsxs)("div", {
      ref: h,
      className: i()(g.section, {
        [g.centerAlignSection]: !N,
        [g.leftAlignSection]: N
      }, n),
      children: [(0, s.jsx)(p, {
        showAllPerksButton: m,
        leftAlignHeaders: N,
        title: D.title,
        headerClassname: S
      }), (0, s.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: i()(g.subtitle, {
          [g.subtitle]: null == m || N,
          [g.subtitleWithButton]: null != m && !N,
          [g.fullWidth]: v || N,
          [g.moreSubtitleMargin]: G,
          [g.leftAlignSubtitle]: N,
          [g.centerAlignSubtitle]: !N
        }),
        children: D.subtitle
      }), !N && null != m && (0, s.jsx)("div", {
        className: i()(g.showAllPerksButtonCenter),
        children: m
      }), (0, s.jsx)("div", {
        className: i()({
          [g.cardContainer]: f,
          [g.cardContainerNarrowWidth]: !f
        }),
        children: j.map((e, t) => (0, s.jsx)(C.Z, {
          confettiCanvas: e.name === u.u.FREE_BOOST ? H : void 0,
          ...e,
          forceShadow: A
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(887024),
  o = t(481060),
  _ = t(410154),
  c = t(915296),
  E = t(314684),
  u = t(565626),
  R = t(32173),
  d = t(734741),
  I = t(391110),
  T = t(75077),
  A = t(320319),
  M = t(438374);
let S = e => {
  let {
    showAllPerksButton: s,
    leftAlignHeaders: t,
    title: a,
    headerClassname: r
  } = e, i = (0, n.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != r ? r : M.heading,
    children: a
  });
  return null == s ? i : t ? (0, n.jsxs)("div", {
    className: M.sectionHeader,
    children: [i, null != s && (0, n.jsx)("div", {
      className: M.showAllPerksButton,
      children: s
    })]
  }) : (0, n.jsx)("div", {
    className: M.container,
    children: (0, n.jsx)("div", {
      className: M.sectionHeaderSeeAll,
      children: i
    })
  })
};
s.Z = e => {
  var s;
  let {
    className: t,
    variant: r = I.R0.PERKS_DISCOVERABILITY,
    noBackground: N = !1,
    leftAlignHeaders: p = !1,
    showAllPerksButton: m,
    headerClassname: C,
    isFullScreen: g = !0
  } = e, P = a.useRef(null), O = (0, E.yQ)(), [f, x] = a.useState(!1), L = (0, u.Ag)(O) || f, h = (0, _.ZP)("perks-discoverability");
  a.useLayoutEffect(() => {
    x((0, d.i3)())
  }, []), (0, u.I2)(), (0, d.ph)();
  let b = (0, c.HI)({
      location: I.R0.PERKS_DISCOVERABILITY
    }),
    v = r === I.R0.WHATS_NEW,
    Z = (0, E.IY)();
  a.useEffect(() => {
    v && !L && Z()
  }, [Z, v, L]), a.useEffect(() => {
    let e = P.current;
    if (null == e || !L || !v) return;
    let s = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), v && Z()
    });
    return () => {
      cancelAnimationFrame(s), v && Z()
    }
  }, [P, L, v, Z]);
  let D = (0, T.Op)(v),
    U = (0, R.Z)(),
    B = (0, T.mN)(),
    j = (0, T.sP)({
      perksCards: U,
      variant: r,
      shopMarketingVariation: h,
      isFullScreen: g,
      showTenureCard: null == O ? void 0 : O.showCard,
      tileOrderVariant: b,
      isPremiumSubscriber: B
    }),
    G = j.some(e => null != e.pillText),
    [W, H] = a.useState(null),
    k = a.useRef(new l.qA);
  return (0, n.jsxs)(n.Fragment, {
    children: [(null == U ? void 0 : null === (s = U.freeBoost) || void 0 === s ? void 0 : s.name) === R.u.FREE_BOOST && (0, n.jsx)(l.O_, {
      ref: H,
      className: M.confettiCanvas,
      environment: k.current
    }), (0, n.jsxs)("div", {
      ref: P,
      className: i()(M.section, {
        [M.centerAlignSection]: !p,
        [M.leftAlignSection]: p
      }, t),
      children: [(0, n.jsx)(S, {
        showAllPerksButton: m,
        leftAlignHeaders: p,
        title: D.title,
        headerClassname: C
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: i()(M.subtitle, {
          [M.subtitle]: null == m || p,
          [M.subtitleWithButton]: null != m && !p,
          [M.fullWidth]: v || p,
          [M.moreSubtitleMargin]: G,
          [M.leftAlignSubtitle]: p,
          [M.centerAlignSubtitle]: !p
        }),
        children: D.subtitle
      }), !p && null != m && (0, n.jsx)("div", {
        className: i()(M.showAllPerksButtonCenter),
        children: m
      }), (0, n.jsx)("div", {
        className: i()({
          [M.cardContainer]: g,
          [M.cardContainerNarrowWidth]: !g
        }),
        children: j.map((e, s) => (0, n.jsx)(A.Z, {
          confettiCanvas: e.name === R.u.FREE_BOOST ? W : void 0,
          ...e,
          forceShadow: N
        }, "".concat(e.name, "_").concat(s)))
      })]
    })]
  })
}
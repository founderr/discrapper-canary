s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(887024),
  o = s(481060),
  c = s(410154),
  E = s(915296),
  _ = s(314684),
  u = s(565626),
  d = s(32173),
  T = s(734741),
  I = s(391110),
  R = s(75077),
  A = s(320319),
  N = s(438374);
let C = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: a,
    headerClassname: i
  } = e, r = (0, n.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : N.heading,
    children: a
  });
  return null == t ? r : s ? (0, n.jsxs)("div", {
    className: N.sectionHeader,
    children: [r, null != t && (0, n.jsx)("div", {
      className: N.showAllPerksButton,
      children: t
    })]
  }) : (0, n.jsx)("div", {
    className: N.container,
    children: (0, n.jsx)("div", {
      className: N.sectionHeaderSeeAll,
      children: r
    })
  })
};
t.Z = e => {
  var t;
  let {
    className: s,
    variant: i = I.R0.PERKS_DISCOVERABILITY,
    noBackground: g = !1,
    leftAlignHeaders: m = !1,
    showAllPerksButton: M,
    headerClassname: S,
    isFullScreen: p = !0
  } = e, h = a.useRef(null), f = (0, _.yQ)(), [O, x] = a.useState(!1), L = (0, u.Ag)(f) || O, P = (0, c.ZP)("perks-discoverability");
  a.useLayoutEffect(() => {
    x((0, T.i3)())
  }, []), (0, u.I2)(), (0, T.ph)();
  let v = (0, E.HI)({
      location: I.R0.PERKS_DISCOVERABILITY
    }),
    Z = i === I.R0.WHATS_NEW,
    b = (0, _.IY)();
  a.useEffect(() => {
    Z && !L && b()
  }, [b, Z, L]), a.useEffect(() => {
    let e = h.current;
    if (null == e || !L || !Z) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), Z && b()
    });
    return () => {
      cancelAnimationFrame(t), Z && b()
    }
  }, [h, L, Z, b]);
  let D = (0, R.Op)(Z),
    U = (0, d.Z)(),
    j = (0, R.mN)(),
    G = (0, R.sP)({
      perksCards: U,
      variant: i,
      shopMarketingVariation: P,
      isFullScreen: p,
      showTenureCard: null == f ? void 0 : f.showCard,
      tileOrderVariant: v,
      isPremiumSubscriber: j
    }),
    B = G.some(e => null != e.pillText),
    [H, y] = a.useState(null),
    k = a.useRef(new l.qA);
  return (0, n.jsxs)(n.Fragment, {
    children: [(null == U ? void 0 : null === (t = U.freeBoost) || void 0 === t ? void 0 : t.name) === d.u.FREE_BOOST && (0, n.jsx)(l.O_, {
      ref: y,
      className: N.confettiCanvas,
      environment: k.current
    }), (0, n.jsxs)("div", {
      ref: h,
      className: r()(N.section, {
        [N.centerAlignSection]: !m,
        [N.leftAlignSection]: m
      }, s),
      children: [(0, n.jsx)(C, {
        showAllPerksButton: M,
        leftAlignHeaders: m,
        title: D.title,
        headerClassname: S
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: r()(N.subtitle, {
          [N.subtitle]: null == M || m,
          [N.subtitleWithButton]: null != M && !m,
          [N.fullWidth]: Z || m,
          [N.moreSubtitleMargin]: B,
          [N.leftAlignSubtitle]: m,
          [N.centerAlignSubtitle]: !m
        }),
        children: D.subtitle
      }), !m && null != M && (0, n.jsx)("div", {
        className: r()(N.showAllPerksButtonCenter),
        children: M
      }), (0, n.jsx)("div", {
        className: r()({
          [N.cardContainer]: p,
          [N.cardContainerNarrowWidth]: !p
        }),
        children: G.map((e, t) => (0, n.jsx)(A.Z, {
          confettiCanvas: e.name === d.u.FREE_BOOST ? H : void 0,
          ...e,
          forceShadow: g
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
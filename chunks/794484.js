"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("236471"),
  o = s("481060"),
  u = s("410154"),
  d = s("846363"),
  c = s("314684"),
  _ = s("565626"),
  E = s("32173"),
  C = s("391110"),
  f = s("75077"),
  T = s("320319"),
  I = s("755655");
let R = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: i,
    headerClassname: r
  } = e, l = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != r ? r : I.heading,
    children: i
  });
  return null == t ? l : s ? (0, a.jsxs)("div", {
    className: I.sectionHeader,
    children: [l, null != t && (0, a.jsx)("div", {
      className: I.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: I.container,
    children: (0, a.jsx)("div", {
      className: I.sectionHeaderSeeAll,
      children: l
    })
  })
};
t.default = e => {
  var t;
  let {
    className: s,
    variant: r = C.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: S = !1,
    leftAlignHeaders: p = !1,
    showAllPerksButton: m,
    headerClassname: A,
    isFullScreen: N = !0
  } = e, g = i.useRef(null), O = (0, _.useShouldScrollToWhatsNew)(), P = (0, u.default)("perks-discoverability"), M = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, _.useClearNewBadge)();
  let h = r === C.PerksDiscoverabilityCardSection.WHATS_NEW,
    L = (0, c.useClearTenureBadge)();
  i.useEffect(() => {
    h && L()
  }, [L, h]), i.useEffect(() => {
    let e = g.current;
    if (null == e || !O || !h) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [g, O, h]);
  let x = (0, f.usePerksDiscoverabilityStrings)(h),
    v = (0, E.default)(),
    j = (0, c.useFreeBoostUserTenureReward)(),
    D = (0, f.getFilteredPerksDiscoverabilityCards)(v, r, P, N, null == j ? void 0 : j.showCard),
    b = D.some(e => null != e.pillText),
    [U, y] = i.useState(null),
    B = i.useRef(new n.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == v ? void 0 : null === (t = v.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(n.ConfettiCanvas, {
      ref: y,
      className: I.confettiCanvas,
      environment: B.current
    }), (0, a.jsxs)("div", {
      ref: g,
      className: l()(I.section, {
        [I.centerAlignSection]: !p,
        [I.leftAlignSection]: p
      }, s),
      children: [(0, a.jsx)(R, {
        showAllPerksButton: m,
        leftAlignHeaders: p,
        title: x.title,
        headerClassname: A
      }), !M && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: l()(I.subtitle, {
          [I.subtitle]: null == m || p,
          [I.subtitleWithButton]: null != m && !p,
          [I.fullWidth]: h || p,
          [I.moreSubtitleMargin]: b,
          [I.leftAlignSubtitle]: p,
          [I.centerAlignSubtitle]: !p
        }),
        children: x.subtitle
      }), !p && null != m && (0, a.jsx)("div", {
        className: l()(I.showAllPerksButtonCenter),
        children: m
      }), (0, a.jsx)("div", {
        className: l()({
          [I.cardContainer]: N,
          [I.cardContainerNarrowWidth]: !N
        }),
        children: D.map((e, t) => (0, a.jsx)(T.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? U : void 0,
          ...e,
          forceShadow: S
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("236471"),
  o = s("481060"),
  u = s("410154"),
  d = s("846363"),
  c = s("314684"),
  _ = s("565626"),
  E = s("32173"),
  T = s("391110"),
  I = s("75077"),
  R = s("320319"),
  f = s("755655");
let S = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: r,
    headerClassname: i
  } = e, n = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : f.heading,
    children: r
  });
  return null == t ? n : s ? (0, a.jsxs)("div", {
    className: f.sectionHeader,
    children: [n, null != t && (0, a.jsx)("div", {
      className: f.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: f.container,
    children: (0, a.jsx)("div", {
      className: f.sectionHeaderSeeAll,
      children: n
    })
  })
};
t.default = e => {
  var t;
  let {
    className: s,
    variant: i = T.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: m = !1,
    leftAlignHeaders: A = !1,
    showAllPerksButton: N,
    headerClassname: p,
    isFullScreen: g = !0
  } = e, C = r.useRef(null), P = (0, _.useShouldScrollToWhatsNew)(), O = (0, u.default)("perks-discoverability"), M = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, _.useClearNewBadge)();
  let h = i === T.PerksDiscoverabilityCardSection.WHATS_NEW,
    L = (0, c.useClearTenureBadge)();
  r.useEffect(() => {
    h && L()
  }, [L, h]), r.useEffect(() => {
    let e = C.current;
    if (null == e || !P || !h) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [C, P, h]);
  let x = (0, I.usePerksDiscoverabilityStrings)(h),
    v = (0, E.default)(),
    D = (0, c.useFreeBoostUserTenureReward)(),
    b = (0, I.getFilteredPerksDiscoverabilityCards)(v, i, O, g, null == D ? void 0 : D.showCard),
    U = b.some(e => null != e.pillText),
    [j, B] = r.useState(null),
    y = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == v ? void 0 : null === (t = v.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: B,
      className: f.confettiCanvas,
      environment: y.current
    }), (0, a.jsxs)("div", {
      ref: C,
      className: n()(f.section, {
        [f.centerAlignSection]: !A,
        [f.leftAlignSection]: A
      }, s),
      children: [(0, a.jsx)(S, {
        showAllPerksButton: N,
        leftAlignHeaders: A,
        title: x.title,
        headerClassname: p
      }), !M && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(f.subtitle, {
          [f.subtitle]: null == N || A,
          [f.subtitleWithButton]: null != N && !A,
          [f.fullWidth]: h || A,
          [f.moreSubtitleMargin]: U,
          [f.leftAlignSubtitle]: A,
          [f.centerAlignSubtitle]: !A
        }),
        children: x.subtitle
      }), !A && null != N && (0, a.jsx)("div", {
        className: n()(f.showAllPerksButtonCenter),
        children: N
      }), (0, a.jsx)("div", {
        className: n()({
          [f.cardContainer]: g,
          [f.cardContainerNarrowWidth]: !g
        }),
        children: b.map((e, t) => (0, a.jsx)(R.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? j : void 0,
          ...e,
          forceShadow: m
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
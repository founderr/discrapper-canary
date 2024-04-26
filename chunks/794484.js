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
  f = s("293908");
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
  } = e, C = r.useRef(null), P = (0, c.useFreeBoostUserTenureReward)(), O = (0, _.useShouldScrollToWhatsNew)(P), M = (0, u.default)("perks-discoverability"), h = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, _.useClearNewBadge)();
  let L = i === T.PerksDiscoverabilityCardSection.WHATS_NEW,
    x = (0, c.useClearTenureBadge)();
  r.useEffect(() => {
    L && !O && x()
  }, [x, L, O]), r.useEffect(() => {
    let e = C.current;
    if (null == e || !O || !L) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), L && x()
    });
    return () => {
      cancelAnimationFrame(t), L && x()
    }
  }, [C, O, L, x]);
  let v = (0, I.usePerksDiscoverabilityStrings)(L),
    b = (0, E.default)(),
    D = (0, I.getFilteredPerksDiscoverabilityCards)(b, i, M, g, null == P ? void 0 : P.showCard),
    U = D.some(e => null != e.pillText),
    [j, y] = r.useState(null),
    B = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == b ? void 0 : null === (t = b.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: y,
      className: f.confettiCanvas,
      environment: B.current
    }), (0, a.jsxs)("div", {
      ref: C,
      className: n()(f.section, {
        [f.centerAlignSection]: !A,
        [f.leftAlignSection]: A
      }, s),
      children: [(0, a.jsx)(S, {
        showAllPerksButton: N,
        leftAlignHeaders: A,
        title: v.title,
        headerClassname: p
      }), !h && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(f.subtitle, {
          [f.subtitle]: null == N || A,
          [f.subtitleWithButton]: null != N && !A,
          [f.fullWidth]: L || A,
          [f.moreSubtitleMargin]: U,
          [f.leftAlignSubtitle]: A,
          [f.centerAlignSubtitle]: !A
        }),
        children: v.subtitle
      }), !A && null != N && (0, a.jsx)("div", {
        className: n()(f.showAllPerksButtonCenter),
        children: N
      }), (0, a.jsx)("div", {
        className: n()({
          [f.cardContainer]: g,
          [f.cardContainerNarrowWidth]: !g
        }),
        children: D.map((e, t) => (0, a.jsx)(R.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? j : void 0,
          ...e,
          forceShadow: m
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
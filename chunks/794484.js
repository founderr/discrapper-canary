"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("887024"),
  o = s("481060"),
  u = s("410154"),
  c = s("915296"),
  d = s("846363"),
  _ = s("314684"),
  E = s("565626"),
  R = s("32173"),
  T = s("734741"),
  f = s("391110"),
  m = s("75077"),
  I = s("320319"),
  S = s("766752");
let p = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: r,
    headerClassname: i
  } = e, n = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : S.heading,
    children: r
  });
  return null == t ? n : s ? (0, a.jsxs)("div", {
    className: S.sectionHeader,
    children: [n, null != t && (0, a.jsx)("div", {
      className: S.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: S.container,
    children: (0, a.jsx)("div", {
      className: S.sectionHeaderSeeAll,
      children: n
    })
  })
};
t.default = e => {
  var t;
  let {
    className: s,
    variant: i = f.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: A = !1,
    leftAlignHeaders: g = !1,
    showAllPerksButton: N,
    headerClassname: M,
    isFullScreen: C = !0
  } = e, P = r.useRef(null), O = (0, _.useFreeBoostUserTenureReward)(), [x, b] = r.useState(!1), h = (0, E.useShouldScrollToWhatsNew)(O) || x, D = (0, u.default)("perks-discoverability"), v = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  r.useLayoutEffect(() => {
    b((0, T.shouldScrollToMarketingMomentContent)())
  }, []), (0, E.useClearNewBadge)(), (0, T.useDismissWhatsNewCardDCs)();
  let L = (0, c.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: f.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY
    }),
    U = i === f.PerksDiscoverabilityCardSection.WHATS_NEW,
    B = (0, _.useClearTenureBadge)();
  r.useEffect(() => {
    U && !h && B()
  }, [B, U, h]), r.useEffect(() => {
    let e = P.current;
    if (null == e || !h || !U) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), U && B()
    });
    return () => {
      cancelAnimationFrame(t), U && B()
    }
  }, [P, h, U, B]);
  let k = (0, m.usePerksDiscoverabilityStrings)(U),
    j = (0, R.default)(),
    G = (0, m.useIsPremiumSubscriber)(),
    y = (0, m.getFilteredPerksDiscoverabilityCards)({
      perksCards: j,
      variant: i,
      shopMarketingVariation: D,
      isFullScreen: C,
      showTenureCard: null == O ? void 0 : O.showCard,
      tileOrderVariant: L,
      isPremiumSubscriber: G
    }),
    H = y.some(e => null != e.pillText),
    [F, W] = r.useState(null),
    w = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == j ? void 0 : null === (t = j.freeBoost) || void 0 === t ? void 0 : t.name) === R.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: W,
      className: S.confettiCanvas,
      environment: w.current
    }), (0, a.jsxs)("div", {
      ref: P,
      className: n()(S.section, {
        [S.centerAlignSection]: !g,
        [S.leftAlignSection]: g
      }, s),
      children: [(0, a.jsx)(p, {
        showAllPerksButton: N,
        leftAlignHeaders: g,
        title: k.title,
        headerClassname: M
      }), !v && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(S.subtitle, {
          [S.subtitle]: null == N || g,
          [S.subtitleWithButton]: null != N && !g,
          [S.fullWidth]: U || g,
          [S.moreSubtitleMargin]: H,
          [S.leftAlignSubtitle]: g,
          [S.centerAlignSubtitle]: !g
        }),
        children: k.subtitle
      }), !g && null != N && (0, a.jsx)("div", {
        className: n()(S.showAllPerksButtonCenter),
        children: N
      }), (0, a.jsx)("div", {
        className: n()({
          [S.cardContainer]: C,
          [S.cardContainerNarrowWidth]: !C
        }),
        children: y.map((e, t) => (0, a.jsx)(I.default, {
          confettiCanvas: e.name === R.PerksDiscoverabilityCardTypes.FREE_BOOST ? F : void 0,
          ...e,
          forceShadow: A
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
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
  d = s("314684"),
  _ = s("565626"),
  E = s("32173"),
  R = s("734741"),
  T = s("391110"),
  S = s("75077"),
  f = s("320319"),
  I = s("766752");
let m = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: r,
    headerClassname: i
  } = e, n = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : I.heading,
    children: r
  });
  return null == t ? n : s ? (0, a.jsxs)("div", {
    className: I.sectionHeader,
    children: [n, null != t && (0, a.jsx)("div", {
      className: I.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: I.container,
    children: (0, a.jsx)("div", {
      className: I.sectionHeaderSeeAll,
      children: n
    })
  })
};
t.default = e => {
  var t;
  let {
    className: s,
    variant: i = T.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: p = !1,
    leftAlignHeaders: A = !1,
    showAllPerksButton: N,
    headerClassname: M,
    isFullScreen: C = !0
  } = e, g = r.useRef(null), P = (0, d.useFreeBoostUserTenureReward)(), [O, x] = r.useState(!1), b = (0, _.useShouldScrollToWhatsNew)(P) || O, h = (0, u.default)("perks-discoverability");
  r.useLayoutEffect(() => {
    x((0, R.shouldScrollToMarketingMomentContent)())
  }, []), (0, _.useClearNewBadge)(), (0, R.useDismissWhatsNewCardDCs)();
  let D = (0, c.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: T.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY
    }),
    L = i === T.PerksDiscoverabilityCardSection.WHATS_NEW,
    v = (0, d.useClearTenureBadge)();
  r.useEffect(() => {
    L && !b && v()
  }, [v, L, b]), r.useEffect(() => {
    let e = g.current;
    if (null == e || !b || !L) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), L && v()
    });
    return () => {
      cancelAnimationFrame(t), L && v()
    }
  }, [g, b, L, v]);
  let U = (0, S.usePerksDiscoverabilityStrings)(L),
    B = (0, E.default)(),
    j = (0, S.useIsPremiumSubscriber)(),
    G = (0, S.getFilteredPerksDiscoverabilityCards)({
      perksCards: B,
      variant: i,
      shopMarketingVariation: h,
      isFullScreen: C,
      showTenureCard: null == P ? void 0 : P.showCard,
      tileOrderVariant: D,
      isPremiumSubscriber: j
    }),
    k = G.some(e => null != e.pillText),
    [H, W] = r.useState(null),
    y = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: W,
      className: I.confettiCanvas,
      environment: y.current
    }), (0, a.jsxs)("div", {
      ref: g,
      className: n()(I.section, {
        [I.centerAlignSection]: !A,
        [I.leftAlignSection]: A
      }, s),
      children: [(0, a.jsx)(m, {
        showAllPerksButton: N,
        leftAlignHeaders: A,
        title: U.title,
        headerClassname: M
      }), (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(I.subtitle, {
          [I.subtitle]: null == N || A,
          [I.subtitleWithButton]: null != N && !A,
          [I.fullWidth]: L || A,
          [I.moreSubtitleMargin]: k,
          [I.leftAlignSubtitle]: A,
          [I.centerAlignSubtitle]: !A
        }),
        children: U.subtitle
      }), !A && null != N && (0, a.jsx)("div", {
        className: n()(I.showAllPerksButtonCenter),
        children: N
      }), (0, a.jsx)("div", {
        className: n()({
          [I.cardContainer]: C,
          [I.cardContainerNarrowWidth]: !C
        }),
        children: G.map((e, t) => (0, a.jsx)(f.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? H : void 0,
          ...e,
          forceShadow: p
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
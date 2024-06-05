"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("887024"),
  o = s("481060"),
  u = s("410154"),
  d = s("915296"),
  c = s("314684"),
  _ = s("565626"),
  E = s("32173"),
  T = s("734741"),
  I = s("391110"),
  R = s("75077"),
  f = s("320319"),
  S = s("766752");
let A = e => {
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
    variant: i = I.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: m = !1,
    leftAlignHeaders: N = !1,
    showAllPerksButton: p,
    headerClassname: g,
    isFullScreen: C = !0
  } = e, P = r.useRef(null), O = (0, c.useFreeBoostUserTenureReward)(), [M, h] = r.useState(!1), L = (0, _.useShouldScrollToWhatsNew)(O) || M, x = (0, u.default)("perks-discoverability");
  r.useLayoutEffect(() => {
    h((0, T.shouldScrollToMarketingMomentContent)())
  }, []), (0, _.useClearNewBadge)(), (0, T.useDismissWhatsNewCardDCs)();
  let v = (0, d.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: I.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY
    }),
    D = i === I.PerksDiscoverabilityCardSection.WHATS_NEW,
    b = (0, c.useClearTenureBadge)();
  r.useEffect(() => {
    D && !L && b()
  }, [b, D, L]), r.useEffect(() => {
    let e = P.current;
    if (null == e || !L || !D) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), D && b()
    });
    return () => {
      cancelAnimationFrame(t), D && b()
    }
  }, [P, L, D, b]);
  let U = (0, R.usePerksDiscoverabilityStrings)(D),
    j = (0, E.default)(),
    G = (0, R.useIsPremiumSubscriber)(),
    B = (0, R.getFilteredPerksDiscoverabilityCards)({
      perksCards: j,
      variant: i,
      shopMarketingVariation: x,
      isFullScreen: C,
      showTenureCard: null == O ? void 0 : O.showCard,
      tileOrderVariant: v,
      isPremiumSubscriber: G
    }),
    y = B.some(e => null != e.pillText),
    [k, H] = r.useState(null),
    F = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == j ? void 0 : null === (t = j.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: H,
      className: S.confettiCanvas,
      environment: F.current
    }), (0, a.jsxs)("div", {
      ref: P,
      className: n()(S.section, {
        [S.centerAlignSection]: !N,
        [S.leftAlignSection]: N
      }, s),
      children: [(0, a.jsx)(A, {
        showAllPerksButton: p,
        leftAlignHeaders: N,
        title: U.title,
        headerClassname: g
      }), (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(S.subtitle, {
          [S.subtitle]: null == p || N,
          [S.subtitleWithButton]: null != p && !N,
          [S.fullWidth]: D || N,
          [S.moreSubtitleMargin]: y,
          [S.leftAlignSubtitle]: N,
          [S.centerAlignSubtitle]: !N
        }),
        children: U.subtitle
      }), !N && null != p && (0, a.jsx)("div", {
        className: n()(S.showAllPerksButtonCenter),
        children: p
      }), (0, a.jsx)("div", {
        className: n()({
          [S.cardContainer]: C,
          [S.cardContainerNarrowWidth]: !C
        }),
        children: B.map((e, t) => (0, a.jsx)(f.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? k : void 0,
          ...e,
          forceShadow: m
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}
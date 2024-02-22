"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983"),
  i = s("884691"),
  n = s("414456"),
  r = s.n(n),
  l = s("77078"),
  o = s("411691"),
  u = s("527715"),
  d = s("367226"),
  c = s("628550"),
  _ = s("598739"),
  E = s("558566"),
  I = s("35505");
let T = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: i,
    headerClassname: n
  } = e, r = (0, a.jsx)(l.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != n ? n : I.heading,
    children: i
  });
  return null == t ? r : s ? (0, a.jsxs)("div", {
    className: I.sectionHeader,
    children: [r, null != t && (0, a.jsx)("div", {
      className: I.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: I.container,
    children: (0, a.jsx)("div", {
      className: I.sectionHeaderSeeAll,
      children: r
    })
  })
};
var f = e => {
  let {
    className: t,
    variant: s = _.PerksDiscoverabilityVariants.PERKS_DISCOVERABILITY,
    noBackground: n = !1,
    leftAlignHeaders: f = !1,
    showAllPerksButton: S,
    headerClassname: R,
    isFullScreen: m = !0
  } = e, A = i.useRef(null), p = (0, d.useShouldScrollToWhatsNew)(), N = (0, o.default)("perks-discoverability"), g = (0, u.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, d.useClearNewBadge)();
  let C = s === _.PerksDiscoverabilityVariants.WHATS_NEW;
  i.useEffect(() => {
    let e = A.current;
    if (null == e || !p || !C) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [A, p, C]);
  let P = (0, _.usePerksDiscoverabilityStrings)(C),
    O = (0, c.default)(),
    M = (0, _.getFilteredPerksDiscoverabilityCards)(O, s, N, m),
    h = M.some(e => null != e.pillText);
  return (0, a.jsxs)("div", {
    ref: A,
    className: r(I.section, {
      [I.centerAlignSection]: !f,
      [I.leftAlignSection]: f
    }, t),
    children: [(0, a.jsx)(T, {
      showAllPerksButton: S,
      leftAlignHeaders: f,
      title: P.title,
      headerClassname: R
    }), !g && (0, a.jsx)(l.Text, {
      variant: "text-lg/normal",
      color: "header-primary",
      className: r(I.subtitle, {
        [I.subtitle]: null == S || f,
        [I.subtitleWithButton]: null != S && !f,
        [I.fullWidth]: C || f,
        [I.moreSubtitleMargin]: h,
        [I.leftAlignSubtitle]: f,
        [I.centerAlignSubtitle]: !f
      }),
      children: P.subtitle
    }), !f && null != S && (0, a.jsx)("div", {
      className: r(I.showAllPerksButtonCenter),
      children: S
    }), (0, a.jsx)("div", {
      className: r({
        [I.cardContainer]: m,
        [I.cardContainerNarrowWidth]: !m
      }),
      children: M.map((e, t) => (0, a.jsx)(E.default, {
        ...e,
        forceShadow: n
      }, "".concat(e.name, "_").concat(t)))
    })]
  })
}
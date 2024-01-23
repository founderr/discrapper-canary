"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  n = s("884691"),
  r = s("414456"),
  l = s.n(r),
  i = s("77078"),
  u = s("411691"),
  o = s("367226"),
  d = s("628550"),
  c = s("598739"),
  _ = s("558566"),
  E = s("650734"),
  I = e => {
    let {
      className: t,
      variant: s = c.PerksDiscoverabilityVariants.PERKS_DISCOVERABILITY,
      noBackground: r = !1,
      leftAlignHeaders: I = !1,
      showAllPerksButton: T
    } = e, f = n.useRef(null), S = (0, o.useShouldScrollToWhatsNew)(), R = (0, u.default)("perks-discoverability");
    (0, o.useClearNewBadge)();
    let m = s === c.PerksDiscoverabilityVariants.WHATS_NEW;
    n.useEffect(() => {
      let e = f.current;
      if (null == e || !S || !m) return;
      let t = requestAnimationFrame(() => {
        e.scrollIntoView({
          behavior: "smooth"
        })
      });
      return () => cancelAnimationFrame(t)
    }, [f, S, m]);
    let p = (0, d.default)(),
      N = (0, c.usePerksDiscoverabilityStrings)(m),
      A = (0, c.getFilteredPerksDiscoverabilityCards)(p, s, R),
      g = A.some(e => null != e.pillText);
    return (0, a.jsxs)("div", {
      ref: f,
      className: l(E.section, {
        [E.centerAlignSection]: !I,
        [E.leftAlignSection]: I
      }, t),
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xxl/extrabold",
        color: "header-primary",
        className: E.heading,
        children: N.title
      }), (0, a.jsx)(i.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: l(E.subtitle, {
          [E.fullWidth]: m || I,
          [E.moreSubtitleMargin]: g,
          [E.leftAlignSubtitle]: I,
          [E.centerAlignSubtitle]: !I
        }),
        children: N.subtitle
      }), (0, a.jsxs)("div", {
        className: E.cardContainer,
        children: [A.map((e, t) => (0, a.jsx)(_.default, {
          ...e,
          forceShadow: r
        }, "".concat(e.name, "_").concat(t))), null != T && (0, a.jsx)("div", {
          className: E.showAllPerksButton,
          children: T
        })]
      })]
    })
  }
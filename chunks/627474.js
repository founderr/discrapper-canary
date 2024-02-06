"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  n = s("884691"),
  r = s("414456"),
  i = s.n(r),
  l = s("77078"),
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
    let A = s === c.PerksDiscoverabilityVariants.WHATS_NEW;
    n.useEffect(() => {
      let e = f.current;
      if (null == e || !S || !A) return;
      let t = requestAnimationFrame(() => {
        e.scrollIntoView({
          behavior: "smooth"
        })
      });
      return () => cancelAnimationFrame(t)
    }, [f, S, A]);
    let m = (0, c.usePerksDiscoverabilityStrings)(A),
      N = (0, d.default)(),
      p = (0, c.getFilteredPerksDiscoverabilityCards)(N, s, R),
      g = p.some(e => null != e.pillText);
    return (0, a.jsxs)("div", {
      ref: f,
      className: i(E.section, {
        [E.centerAlignSection]: !I,
        [E.leftAlignSection]: I
      }, t),
      children: [(() => {
        let e = (0, a.jsx)(l.Heading, {
          variant: "heading-xxl/extrabold",
          color: "header-primary",
          className: E.heading,
          children: m.title
        });
        return null == T ? e : I ? (0, a.jsxs)("div", {
          className: E.sectionHeader,
          children: [e, null != T && (0, a.jsx)("div", {
            className: E.showAllPerksButton,
            children: T
          })]
        }) : (0, a.jsx)("div", {
          className: E.container,
          children: (0, a.jsx)("div", {
            className: E.sectionHeaderSeeAll,
            children: e
          })
        })
      })(), (0, a.jsx)(l.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: i(E.subtitle, {
          [E.subtitle]: null == T || I,
          [E.subtitleWithButton]: null != T && !I,
          [E.fullWidth]: A || I,
          [E.moreSubtitleMargin]: g,
          [E.leftAlignSubtitle]: I,
          [E.centerAlignSubtitle]: !I
        }),
        children: m.subtitle
      }), !I && null != T && (0, a.jsx)("div", {
        className: i(E.showAllPerksButtonCenter),
        children: T
      }), (0, a.jsx)("div", {
        className: E.cardContainer,
        children: p.map((e, t) => (0, a.jsx)(_.default, {
          ...e,
          forceShadow: r
        }, "".concat(e.name, "_").concat(t)))
      })]
    })
  }
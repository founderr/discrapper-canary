"use strict";
a.r(t), a("47120"), a("653041");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  l = a.n(i),
  s = a("481060"),
  o = a("90062"),
  c = a("964309"),
  d = a("161426"),
  u = a("898543"),
  f = a("87576"),
  m = a("308083"),
  h = a("689938"),
  E = a("661926");
let T = e => {
  let {
    title: t,
    icon: a,
    traits: i,
    interests: o,
    handleUpdate: c
  } = e, d = r.useCallback(e => {
    let t = new Set(o);
    t.delete(e), c(t)
  }, [c, o]), u = r.useCallback(e => {
    if (o.size === m.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), c(t)
  }, [c, o]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: E.interestsCategory,
      children: i.map(e => {
        let t = o.has(e);
        return (0, n.jsxs)(s.Clickable, {
          className: l()(E.interestsTag, E.selectableOption, {
            [E.selectedOption]: t
          }),
          onClick: () => t ? d(e) : u(e),
          children: [(0, n.jsx)(a, {
            className: E.utilityTagIcon
          }), (0, n.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: e
          })]
        }, e)
      })
    })]
  })
};
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: i,
    interests: l,
    requiredGameId: p,
    optional: C = !1,
    hidePreview: _ = !1
  } = e, x = r.useMemo(() => {
    let e = [];
    return m.LANGUAGES_SET.forEach(t => e.push({
      value: t,
      label: t
    })), e
  }, []), g = r.useMemo(() => Array.from(l), [l]), I = r.useMemo(() => g.filter(e => m.LANGUAGES_SET.has(e)), [g]), v = r.useCallback(e => {
    let t = g.filter(e => !m.LANGUAGES_SET.has(e));
    i(new Set([...t, ...e]))
  }, [i, g]), N = r.useMemo(() => g.filter(e => m.ALL_TRAITS_SET.has(e) || m.LANGUAGES_SET.has(e)), [g]);
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [C && (0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: E.optionalTag,
      children: h.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: t
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: a
    }), (0, n.jsxs)("div", {
      className: E.content,
      children: [(0, n.jsxs)("div", {
        className: E.mainPanelContainer,
        children: [p === m.VALORANT_ID && (0, n.jsx)(T, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: u.default,
          traits: m.VALORANT_TRAITS,
          interests: l,
          handleUpdate: i
        }), p === m.GENSHIN_ID && (0, n.jsx)(T, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_GENSHIN,
          icon: d.default,
          traits: m.GENSHIN_TRAITS,
          interests: l,
          handleUpdate: i
        }), (0, n.jsx)(T, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: m.AGE_TRAITS,
          interests: l,
          handleUpdate: i
        }), (0, n.jsx)(T, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: c.default,
          traits: m.IDENTITY_TRAITS,
          interests: l,
          handleUpdate: i
        }), (0, n.jsx)(s.Text, {
          className: E.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, n.jsx)("div", {
          className: E.languageSelect,
          children: (0, n.jsx)(s.SearchableSelect, {
            wrapperClassName: E.input,
            options: x,
            value: I,
            onChange: v,
            placeholder: h.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.fixedWidthSidebar,
        children: g.length > 0 && !_ && (0, n.jsx)(f.default, {
          traits: g,
          traitsToHighlight: N
        })
      })]
    })]
  })
}
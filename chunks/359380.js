"use strict";
a.r(t), a("47120"), a("653041");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("481060"),
  o = a("90062"),
  c = a("964309"),
  d = a("898543"),
  u = a("87576"),
  f = a("308083"),
  m = a("689938"),
  h = a("661926");
let E = e => {
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
    if (o.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), c(t)
  }, [c, o]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: h.interestsCategory,
      children: i.map(e => {
        let t = o.has(e);
        return (0, n.jsxs)(l.Clickable, {
          className: s()(h.interestsTag, h.selectableOption, {
            [h.selectedOption]: t
          }),
          onClick: () => t ? d(e) : u(e),
          children: [(0, n.jsx)(a, {
            className: h.utilityTagIcon
          }), (0, n.jsx)(l.Text, {
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
    interests: s,
    requiredGameId: T,
    optional: p = !1,
    hidePreview: C = !1
  } = e, _ = r.useMemo(() => {
    let e = [];
    return f.LANGUAGES_SET.forEach(t => e.push({
      value: t,
      label: t
    })), e
  }, []), x = r.useMemo(() => Array.from(s), [s]), g = r.useMemo(() => x.filter(e => f.LANGUAGES_SET.has(e)), [x]), I = r.useCallback(e => {
    let t = x.filter(e => !f.LANGUAGES_SET.has(e));
    i(new Set([...t, ...e]))
  }, [i, x]), v = r.useMemo(() => x.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [x]);
  return (0, n.jsxs)("div", {
    className: h.slideContent,
    children: [p && (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: h.optionalTag,
      children: m.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: a
    }), (0, n.jsxs)("div", {
      className: h.content,
      children: [(0, n.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [T === f.VALORANT_ID && (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: d.default,
          traits: f.VALORANT_TRAITS,
          interests: s,
          handleUpdate: i
        }), (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: f.AGE_TRAITS,
          interests: s,
          handleUpdate: i
        }), (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: c.default,
          traits: f.IDENTITY_TRAITS,
          interests: s,
          handleUpdate: i
        }), (0, n.jsx)(l.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, n.jsx)("div", {
          className: h.languageSelect,
          children: (0, n.jsx)(l.SearchableSelect, {
            wrapperClassName: h.input,
            options: _,
            value: g,
            onChange: I,
            placeholder: m.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: x.length > 0 && !C && (0, n.jsx)(u.default, {
          traits: x,
          traitsToHighlight: v
        })
      })]
    })]
  })
}
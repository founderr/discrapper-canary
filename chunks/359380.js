"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
  l = n("481060"),
  o = n("90062"),
  c = n("964309"),
  d = n("898543"),
  u = n("87576"),
  f = n("308083"),
  m = n("689938"),
  h = n("418571");
let p = e => {
  let {
    title: t,
    icon: n,
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
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, a.jsx)("div", {
      className: h.interestsCategory,
      children: i.map(e => {
        let t = o.has(e);
        return (0, a.jsxs)(l.Clickable, {
          className: s()(h.interestsTag, {
            [h.selected]: t
          }),
          onClick: () => t ? d(e) : u(e),
          children: [(0, a.jsx)(n, {
            className: h.utilityTagIcon
          }), (0, a.jsx)(l.Text, {
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
    description: n,
    handleUpdate: i,
    interests: s,
    requiredGameId: T
  } = e, E = r.useMemo(() => m.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.localizedName
  })), []), C = r.useMemo(() => Array.from(s), [s]), _ = r.useMemo(() => C.filter(e => f.LANGUAGES_SET.has(e)), [C]), g = r.useCallback(e => {
    let t = C.filter(e => !f.LANGUAGES_SET.has(e));
    i(new Set([...t, ...e]))
  }, [i, C]), x = r.useMemo(() => C.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [C]);
  return (0, a.jsxs)("div", {
    className: h.slideContentWithSidebar,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: n
    }), (0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [T === f.VALORANT_ID && (0, a.jsx)(p, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: d.default,
          traits: f.VALORANT_TRAITS,
          interests: s,
          handleUpdate: i
        }), (0, a.jsx)(p, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: f.AGE_TRAITS,
          interests: s,
          handleUpdate: i
        }), (0, a.jsx)(p, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: c.default,
          traits: f.IDENTITY_TRAITS,
          interests: s,
          handleUpdate: i
        }), (0, a.jsx)(l.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, a.jsx)("div", {
          className: h.languageSelect,
          children: (0, a.jsx)(l.SearchableSelect, {
            wrapperClassName: h.input,
            options: E,
            value: _,
            onChange: g,
            placeholder: m.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: C.length > 0 && (0, a.jsx)(u.default, {
          traits: C,
          traitsToHighlight: x
        })
      })]
    })]
  })
}
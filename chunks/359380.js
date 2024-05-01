"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("90062"),
  u = a("964309"),
  d = a("898543"),
  c = a("87576"),
  f = a("308083"),
  E = a("689938"),
  h = a("418571");
let _ = e => {
  let {
    title: t,
    icon: a,
    traits: l,
    interests: o,
    handleUpdate: u
  } = e, d = s.useCallback(e => {
    let t = new Set(o);
    t.delete(e), u(t)
  }, [u, o]), c = s.useCallback(e => {
    if (o.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), u(t)
  }, [u, o]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: h.interestsCategory,
      children: l.map(e => {
        let t = o.has(e);
        return (0, n.jsxs)(r.Clickable, {
          className: i()(h.interestsTag, {
            [h.selected]: t
          }),
          onClick: () => t ? d(e) : c(e),
          children: [(0, n.jsx)(a, {
            className: h.utilityTagIcon
          }), (0, n.jsx)(r.Text, {
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
    handleUpdate: l,
    interests: i,
    requiredGameId: C
  } = e, m = s.useMemo(() => E.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.localizedName
  })), []), S = s.useMemo(() => Array.from(i), [i]), p = s.useMemo(() => S.filter(e => f.LANGUAGES_SET.has(e)), [S]), I = s.useCallback(e => {
    let t = S.filter(e => !f.LANGUAGES_SET.has(e));
    l(new Set([...t, ...e]))
  }, [l, S]), g = s.useMemo(() => S.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [S]);
  return (0, n.jsxs)("div", {
    className: h.slideContentWithSidebar,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: a
    }), (0, n.jsxs)("div", {
      className: h.content,
      children: [(0, n.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [C === f.VALORANT_ID && (0, n.jsx)(_, {
          title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: d.default,
          traits: f.VALORANT_TRAITS,
          interests: i,
          handleUpdate: l
        }), (0, n.jsx)(_, {
          title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: f.AGE_TRAITS,
          interests: i,
          handleUpdate: l
        }), (0, n.jsx)(_, {
          title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: u.default,
          traits: f.IDENTITY_TRAITS,
          interests: i,
          handleUpdate: l
        }), (0, n.jsx)(r.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, n.jsx)("div", {
          className: h.languageSelect,
          children: (0, n.jsx)(r.SearchableSelect, {
            wrapperClassName: h.input,
            options: m,
            value: p,
            onChange: I,
            placeholder: E.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: S.length > 0 && (0, n.jsx)(c.default, {
          traits: S,
          traitsToHighlight: g
        })
      })]
    })]
  })
}
"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("90062"),
  u = n("964309"),
  d = n("898543"),
  c = n("87576"),
  f = n("308083"),
  E = n("689938"),
  h = n("418571");
let _ = e => {
  let {
    title: t,
    icon: n,
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
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, a.jsx)("div", {
      className: h.interestsCategory,
      children: l.map(e => {
        let t = o.has(e);
        return (0, a.jsxs)(r.Clickable, {
          className: i()(h.interestsTag, {
            [h.selected]: t
          }),
          onClick: () => t ? d(e) : c(e),
          children: [(0, a.jsx)(n, {
            className: h.utilityTagIcon
          }), (0, a.jsx)(r.Text, {
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
    handleUpdate: l,
    interests: i,
    requiredGameId: C
  } = e, m = s.useMemo(() => E.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.localizedName
  })), []), S = s.useMemo(() => Array.from(i), [i]), p = s.useMemo(() => S.filter(e => f.LANGUAGES_SET.has(e)), [S]), I = s.useCallback(e => {
    let t = S.filter(e => !f.LANGUAGES_SET.has(e));
    l(new Set([...t, ...e]))
  }, [l, S]), T = s.useMemo(() => S.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [S]);
  return (0, a.jsxs)("div", {
    className: h.slideContentWithSidebar,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: n
    }), (0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [C === f.VALORANT_ID && (0, a.jsx)(_, {
          title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: d.default,
          traits: f.VALORANT_TRAITS,
          interests: i,
          handleUpdate: l
        }), (0, a.jsx)(_, {
          title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: f.AGE_TRAITS,
          interests: i,
          handleUpdate: l
        }), (0, a.jsx)(_, {
          title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: u.default,
          traits: f.IDENTITY_TRAITS,
          interests: i,
          handleUpdate: l
        }), (0, a.jsx)(r.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, a.jsx)("div", {
          className: h.languageSelect,
          children: (0, a.jsx)(r.SearchableSelect, {
            wrapperClassName: h.input,
            options: m,
            value: p,
            onChange: I,
            placeholder: E.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: S.length > 0 && (0, a.jsx)(c.default, {
          traits: S,
          traitsToHighlight: T
        })
      })]
    })]
  })
}
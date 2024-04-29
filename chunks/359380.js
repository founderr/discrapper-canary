"use strict";
a.r(t), a.d(t, {
  TraitSelectionCategory: function() {
    return h
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("90062"),
  u = a("964309"),
  d = a("898543"),
  c = a("308083"),
  f = a("689938"),
  E = a("661926");
let h = e => {
  let {
    title: t,
    icon: a,
    traits: l,
    interests: o,
    handleUpdate: u
  } = e, d = s.useCallback(e => {
    let t = new Set(o);
    t.delete(e), u(t)
  }, [u, o]), f = s.useCallback(e => {
    if (o.size === c.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), u(t)
  }, [u, o]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: E.interestsCategory,
      children: l.map(e => {
        let t = o.has(e);
        return (0, n.jsxs)(r.Clickable, {
          className: i()(E.interestsTag, {
            [E.selected]: t
          }),
          onClick: () => t ? d(e) : f(e),
          children: [(0, n.jsx)(a, {
            className: E.utilityTagIcon
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
    requiredGameId: _
  } = e, C = s.useMemo(() => f.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.localizedName
  })), []), m = s.useMemo(() => [...i].filter(e => c.LANGUAGES_SET.has(e)), [i]), S = s.useCallback(e => {
    let t = [...i].filter(e => !c.LANGUAGES_SET.has(e));
    l(new Set([...t, ...e]))
  }, [l, i]);
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: t
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: a
    }), _ === c.VALORANT_ID && (0, n.jsx)(h, {
      title: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
      icon: d.default,
      traits: c.VALORANT_TRAITS,
      interests: i,
      handleUpdate: l
    }), (0, n.jsx)(h, {
      title: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
      icon: o.default,
      traits: c.AGE_TRAITS,
      interests: i,
      handleUpdate: l
    }), (0, n.jsx)(h, {
      title: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
      icon: u.default,
      traits: c.IDENTITY_TRAITS,
      interests: i,
      handleUpdate: l
    }), (0, n.jsx)(r.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
    }), (0, n.jsx)("div", {
      className: E.languageSelect,
      children: (0, n.jsx)(r.SearchableSelect, {
        wrapperClassName: E.input,
        options: C,
        value: m,
        onChange: S,
        placeholder: f.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
        multi: !0
      })
    })]
  })
}
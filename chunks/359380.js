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
  c = n("308083"),
  f = n("689938"),
  E = n("418571");
let h = e => {
  let {
    title: t,
    icon: n,
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
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, a.jsx)("div", {
      className: E.interestsCategory,
      children: l.map(e => {
        let t = o.has(e);
        return (0, a.jsxs)(r.Clickable, {
          className: i()(E.interestsTag, {
            [E.selected]: t
          }),
          onClick: () => t ? d(e) : f(e),
          children: [(0, a.jsx)(n, {
            className: E.utilityTagIcon
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
    requiredGameId: _
  } = e, C = s.useMemo(() => f.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.localizedName
  })), []), m = s.useMemo(() => [...i].filter(e => c.LANGUAGES_SET.has(e)), [i]), S = s.useCallback(e => {
    let t = [...i].filter(e => !c.LANGUAGES_SET.has(e));
    l(new Set([...t, ...e]))
  }, [l, i]);
  return (0, a.jsxs)("div", {
    className: E.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: t
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: n
    }), _ === c.VALORANT_ID && (0, a.jsx)(h, {
      title: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
      icon: d.default,
      traits: c.VALORANT_TRAITS,
      interests: i,
      handleUpdate: l
    }), (0, a.jsx)(h, {
      title: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
      icon: o.default,
      traits: c.AGE_TRAITS,
      interests: i,
      handleUpdate: l
    }), (0, a.jsx)(h, {
      title: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
      icon: u.default,
      traits: c.IDENTITY_TRAITS,
      interests: i,
      handleUpdate: l
    }), (0, a.jsx)(r.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: f.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
    }), (0, a.jsx)("div", {
      className: E.languageSelect,
      children: (0, a.jsx)(r.SearchableSelect, {
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
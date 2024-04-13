"use strict";
a.r(t), a.d(t, {
  TraitSelectionCategory: function() {
    return _
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("481060"),
  o = a("950463"),
  u = a("90062"),
  d = a("964309"),
  c = a("898543"),
  f = a("308083"),
  E = a("689938"),
  h = a("597338");
let _ = e => {
  let {
    title: t,
    icon: a,
    traits: l,
    interests: o,
    handleUpdate: u
  } = e, d = s.useCallback(e => {
    let t = new Set(o);
    t.delete(e), u({
      interests: t
    })
  }, [u, o]), c = s.useCallback(e => {
    if (o.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), u({
      interests: t
    })
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
    handleUpdate: t,
    interests: a,
    requiredGameId: l
  } = e, i = s.useMemo(() => E.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.name
  })), []), C = s.useMemo(() => [...a].filter(e => f.LANGUAGES_SET.has(e)), [a]), m = s.useCallback(e => {
    let n = [...a].filter(e => !f.LANGUAGES_SET.has(e));
    t({
      interests: new Set([...n, ...e])
    })
  }, [t, a]);
  return (0, n.jsxs)("div", {
    className: h.slideContent,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE
    }), l === f.VALORANT_ID && (0, n.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
      icon: c.default,
      traits: f.VALORANT_TRAITS,
      interests: a,
      handleUpdate: t
    }), (0, n.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
      icon: u.default,
      traits: f.AGE_TRAITS,
      interests: a,
      handleUpdate: t
    }), (0, n.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
      icon: d.default,
      traits: f.IDENTITY_TRAITS,
      interests: a,
      handleUpdate: t
    }), (0, n.jsx)(r.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
    }), (0, n.jsx)("div", {
      className: h.languageSelect,
      children: (0, n.jsx)(r.SearchableSelect, {
        options: i,
        value: C,
        onChange: m,
        placeholder: E.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
        multi: !0
      })
    }), (0, n.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
      icon: o.default,
      traits: f.LOCALE_TRAITS,
      interests: a,
      handleUpdate: t
    })]
  })
}
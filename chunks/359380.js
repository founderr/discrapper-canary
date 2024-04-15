"use strict";
n.r(t), n.d(t, {
  TraitSelectionCategory: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("950463"),
  u = n("90062"),
  d = n("964309"),
  c = n("898543"),
  f = n("308083"),
  E = n("689938"),
  h = n("597338");
let _ = e => {
  let {
    title: t,
    icon: n,
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
    handleUpdate: t,
    interests: n,
    requiredGameId: l
  } = e, i = s.useMemo(() => E.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.name
  })), []), C = s.useMemo(() => [...n].filter(e => f.LANGUAGES_SET.has(e)), [n]), m = s.useCallback(e => {
    let a = [...n].filter(e => !f.LANGUAGES_SET.has(e));
    t({
      interests: new Set([...a, ...e])
    })
  }, [t, n]);
  return (0, a.jsxs)("div", {
    className: h.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE
    }), l === f.VALORANT_ID && (0, a.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
      icon: c.default,
      traits: f.VALORANT_TRAITS,
      interests: n,
      handleUpdate: t
    }), (0, a.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
      icon: u.default,
      traits: f.AGE_TRAITS,
      interests: n,
      handleUpdate: t
    }), (0, a.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
      icon: d.default,
      traits: f.IDENTITY_TRAITS,
      interests: n,
      handleUpdate: t
    }), (0, a.jsx)(r.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
    }), (0, a.jsx)("div", {
      className: h.languageSelect,
      children: (0, a.jsx)(r.SearchableSelect, {
        options: i,
        value: C,
        onChange: m,
        placeholder: E.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
        multi: !0
      })
    }), (0, a.jsx)(_, {
      title: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
      icon: o.default,
      traits: f.LOCALE_TRAITS,
      interests: n,
      handleUpdate: t
    })]
  })
}
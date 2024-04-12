"use strict";
a.r(t), a.d(t, {
  TraitSelectionCategory: function() {
    return C
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
  c = a("824959"),
  f = a("898543"),
  E = a("308083"),
  h = a("689938"),
  _ = a("597338");
let C = e => {
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
    if (o.size === E.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), u({
      interests: t
    })
  }, [u, o]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: _.utilityCategoryTitle,
      children: [(0, n.jsx)(a, {
        className: _.utilityCategoryIcon
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: t
      })]
    }), (0, n.jsx)("div", {
      className: _.utilityCategory,
      children: l.map(e => {
        let t = o.has(e);
        return (0, n.jsxs)(r.Clickable, {
          className: i()(_.utilityTag, {
            [_.selected]: t
          }),
          onClick: () => t ? d(e) : c(e),
          children: [(0, n.jsx)(a, {
            className: _.utilityTagIcon
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
  } = e, i = s.useMemo(() => h.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.name
  })), []), m = s.useMemo(() => [...a].filter(e => E.LANGUAGES_SET.has(e)), [a]), S = s.useCallback(e => {
    let n = [...a].filter(e => !E.LANGUAGES_SET.has(e));
    t({
      interests: new Set([...n, ...e])
    })
  }, [t, a]);
  return (0, n.jsxs)("div", {
    className: _.slideContent,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE
    }), l === E.VALORANT_ID && (0, n.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
      icon: f.default,
      traits: E.VALORANT_TRAITS,
      interests: a,
      handleUpdate: t
    }), (0, n.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
      icon: u.default,
      traits: E.AGE_TRAITS,
      interests: a,
      handleUpdate: t
    }), (0, n.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
      icon: d.default,
      traits: E.IDENTITY_TRAITS,
      interests: a,
      handleUpdate: t
    }), (0, n.jsxs)("div", {
      className: _.utilityCategoryTitle,
      children: [(0, n.jsx)(c.default, {
        className: _.utilityCategoryIcon
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
      })]
    }), (0, n.jsx)("div", {
      className: _.languageSelect,
      children: (0, n.jsx)(r.SearchableSelect, {
        options: i,
        value: m,
        onChange: S,
        placeholder: h.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
        multi: !0
      })
    }), (0, n.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
      icon: o.default,
      traits: E.LOCALE_TRAITS,
      interests: a,
      handleUpdate: t
    })]
  })
}
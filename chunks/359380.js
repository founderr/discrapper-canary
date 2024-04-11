"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("950463"),
  u = n("90062"),
  d = n("964309"),
  c = n("824959"),
  f = n("898543"),
  E = n("308083"),
  h = n("689938"),
  _ = n("597338");
let C = e => {
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
    if (o.size === E.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), u({
      interests: t
    })
  }, [u, o]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: _.utilityCategoryTitle,
      children: [(0, a.jsx)(n, {
        className: _.utilityCategoryIcon
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: t
      })]
    }), (0, a.jsx)("div", {
      className: _.utilityCategory,
      children: l.map(e => {
        let t = o.has(e);
        return (0, a.jsxs)(r.Clickable, {
          className: i()(_.utilityTag, {
            [_.selected]: t
          }),
          onClick: () => t ? d(e) : c(e),
          children: [(0, a.jsx)(n, {
            className: _.utilityTagIcon
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
  } = e, i = s.useMemo(() => h.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.name
  })), []), m = s.useMemo(() => [...n].filter(e => E.LANGUAGES_SET.has(e)), [n]), S = s.useCallback(e => {
    let a = [...n].filter(e => !E.LANGUAGES_SET.has(e));
    t({
      interests: new Set([...a, ...e])
    })
  }, [t, n]);
  return (0, a.jsxs)("div", {
    className: _.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE
    }), l === E.VALORANT_ID && (0, a.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
      icon: f.default,
      traits: E.VALORANT_TRAITS,
      interests: n,
      handleUpdate: t
    }), (0, a.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
      icon: u.default,
      traits: E.AGE_TRAITS,
      interests: n,
      handleUpdate: t
    }), (0, a.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
      icon: d.default,
      traits: E.IDENTITY_TRAITS,
      interests: n,
      handleUpdate: t
    }), (0, a.jsxs)("div", {
      className: _.utilityCategoryTitle,
      children: [(0, a.jsx)(c.default, {
        className: _.utilityCategoryIcon
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
      })]
    }), (0, a.jsx)("div", {
      className: _.languageSelect,
      children: (0, a.jsx)(r.SearchableSelect, {
        options: i,
        value: m,
        onChange: S,
        placeholder: h.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
        multi: !0
      })
    }), (0, a.jsx)(C, {
      title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
      icon: o.default,
      traits: E.LOCALE_TRAITS,
      interests: n,
      handleUpdate: t
    })]
  })
}
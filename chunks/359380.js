"use strict";
a.r(t), a("47120"), a("653041");
var n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  s = a("90062"),
  l = a("964309"),
  o = a("161426"),
  d = a("898543"),
  c = a("214715"),
  u = a("18100"),
  f = a("308083"),
  m = a("689938"),
  E = a("661926");
let h = e => {
  let {
    title: t,
    icon: a,
    traits: s,
    interests: l,
    handleUpdate: o
  } = e, d = r.useCallback(e => {
    let t = new Set(l);
    t.delete(e), o(t)
  }, [o, l]), u = r.useCallback(e => {
    if (l.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(l);
    t.add(e), o(t)
  }, [o, l]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: E.interestsCategory,
      children: s.map(e => {
        let t = l.has(e);
        return (0, n.jsx)(c.default, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          icon: a,
          text: e,
          selected: t,
          onClick: t ? d : u
        }, e)
      })
    })]
  })
};
t.default = e => {
  let {
    guildId: t,
    title: a,
    description: c,
    handleUpdate: T,
    progress: _,
    interests: C,
    requiredGameId: x,
    optional: p = !1,
    hidePreview: I = !1
  } = e, g = r.useMemo(() => {
    let e = [];
    return f.LANGUAGES_SET.forEach(t => e.push({
      value: t,
      label: t
    })), e
  }, []), N = r.useMemo(() => {
    var e;
    return null !== (e = null != C ? C : null == _ ? void 0 : _.interests) && void 0 !== e ? e : new Set
  }, [C, null == _ ? void 0 : _.interests]), A = r.useMemo(() => Array.from(N), [N]), v = r.useMemo(() => A.filter(e => f.LANGUAGES_SET.has(e)), [A]), S = r.useCallback(e => {
    let t = A.filter(e => !f.LANGUAGES_SET.has(e));
    T(new Set([...t, ...e]))
  }, [T, A]), R = r.useMemo(() => A.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [A]), L = r.useCallback(e => {
    let t = new Set(N);
    t.delete(e), T(t)
  }, [T, N]);
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [p && (0, n.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: E.optionalTag,
      children: m.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: a
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: c
    }), (0, n.jsxs)("div", {
      className: E.content,
      children: [(0, n.jsxs)("div", {
        className: E.mainPanelContainer,
        children: [x === f.VALORANT_ID && (0, n.jsx)(h, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: d.default,
          traits: f.VALORANT_TRAITS,
          interests: N,
          handleUpdate: T
        }), x === f.GENSHIN_ID && (0, n.jsx)(h, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_GENSHIN,
          icon: o.default,
          traits: f.GENSHIN_TRAITS,
          interests: N,
          handleUpdate: T
        }), (0, n.jsx)(h, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: s.default,
          traits: f.AGE_TRAITS,
          interests: N,
          handleUpdate: T
        }), (0, n.jsx)(h, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: l.default,
          traits: f.IDENTITY_TRAITS,
          interests: N,
          handleUpdate: T
        }), (0, n.jsx)(i.Text, {
          className: E.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, n.jsx)("div", {
          className: E.languageSelect,
          children: (0, n.jsx)(i.SearchableSelect, {
            wrapperClassName: E.input,
            options: g,
            value: v,
            onChange: S,
            placeholder: m.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.fixedWidthSidebar,
        children: null != _ && A.length > 0 && !I && (0, n.jsx)(u.default, {
          guildId: t,
          progress: _,
          traitsToHighlight: R,
          maskDescription: !0,
          onTraitClick: L
        })
      })]
    })]
  })
}
"use strict";
a.r(t), a("47120"), a("653041");
var n = a("735250"),
  r = a("470079"),
  s = a("481060"),
  i = a("90062"),
  l = a("964309"),
  o = a("161426"),
  c = a("898543"),
  d = a("214715"),
  u = a("18100"),
  f = a("308083"),
  m = a("689938"),
  h = a("661926");
let E = e => {
  let {
    title: t,
    icon: a,
    traits: i,
    interests: l,
    handleUpdate: o
  } = e, c = r.useCallback(e => {
    let t = new Set(l);
    t.delete(e), o(t)
  }, [o, l]), u = r.useCallback(e => {
    if (l.size === f.MAX_NUM_INTERESTS) return;
    let t = new Set(l);
    t.add(e), o(t)
  }, [o, l]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Text, {
      className: h.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: h.interestsCategory,
      children: i.map(e => {
        let t = l.has(e);
        return (0, n.jsx)(d.default, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          icon: a,
          text: e,
          selected: t,
          onClick: t ? c : u
        }, e)
      })
    })]
  })
};
t.default = e => {
  let {
    guildId: t,
    title: a,
    description: d,
    handleUpdate: p,
    progress: C,
    interests: T,
    requiredGameId: _,
    optional: x = !1,
    hidePreview: g = !1
  } = e, N = r.useMemo(() => {
    let e = [];
    return f.LANGUAGES_SET.forEach(t => e.push({
      value: t,
      label: t
    })), e
  }, []), I = r.useMemo(() => {
    var e;
    return null !== (e = null != T ? T : null == C ? void 0 : C.interests) && void 0 !== e ? e : new Set
  }, [T, null == C ? void 0 : C.interests]), v = r.useMemo(() => Array.from(I), [I]), A = r.useMemo(() => v.filter(e => f.LANGUAGES_SET.has(e)), [v]), S = r.useCallback(e => {
    let t = v.filter(e => !f.LANGUAGES_SET.has(e));
    p(new Set([...t, ...e]))
  }, [p, v]), L = r.useMemo(() => v.filter(e => f.ALL_TRAITS_SET.has(e) || f.LANGUAGES_SET.has(e)), [v]), R = r.useCallback(e => {
    let t = new Set(I);
    t.delete(e), p(t)
  }, [p, I]);
  return (0, n.jsxs)("div", {
    className: h.slideContent,
    children: [x && (0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: h.optionalTag,
      children: m.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: a
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: d
    }), (0, n.jsxs)("div", {
      className: h.content,
      children: [(0, n.jsxs)("div", {
        className: h.mainPanelContainer,
        children: [_ === f.VALORANT_ID && (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: c.default,
          traits: f.VALORANT_TRAITS,
          interests: I,
          handleUpdate: p
        }), _ === f.GENSHIN_ID && (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_GENSHIN,
          icon: o.default,
          traits: f.GENSHIN_TRAITS,
          interests: I,
          handleUpdate: p
        }), (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: i.default,
          traits: f.AGE_TRAITS,
          interests: I,
          handleUpdate: p
        }), (0, n.jsx)(E, {
          title: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: l.default,
          traits: f.IDENTITY_TRAITS,
          interests: I,
          handleUpdate: p
        }), (0, n.jsx)(s.Text, {
          className: h.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: m.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, n.jsx)("div", {
          className: h.languageSelect,
          children: (0, n.jsx)(s.SearchableSelect, {
            wrapperClassName: h.input,
            options: N,
            value: A,
            onChange: S,
            placeholder: m.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: h.fixedWidthSidebar,
        children: null != C && v.length > 0 && !g && (0, n.jsx)(u.default, {
          guildId: t,
          progress: C,
          traitsToHighlight: L,
          maskDescription: !0,
          onTraitClick: R
        })
      })]
    })]
  })
}
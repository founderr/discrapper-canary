"use strict";
a.r(t), a("47120"), a("653041");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("90062"),
  c = a("964309"),
  d = a("161426"),
  u = a("898543"),
  f = a("18100"),
  m = a("308083"),
  h = a("689938"),
  E = a("661926");
let p = e => {
  let {
    title: t,
    icon: a,
    traits: s,
    interests: o,
    handleUpdate: c
  } = e, d = r.useCallback(e => {
    let t = new Set(o);
    t.delete(e), c(t)
  }, [c, o]), u = r.useCallback(e => {
    if (o.size === m.MAX_NUM_INTERESTS) return;
    let t = new Set(o);
    t.add(e), c(t)
  }, [c, o]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Text, {
      className: E.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: t
    }), (0, n.jsx)("div", {
      className: E.interestsCategory,
      children: s.map(e => {
        let t = o.has(e);
        return (0, n.jsxs)(l.Clickable, {
          className: i()(E.interestsTag, E.selectableOption, {
            [E.selectedOption]: t
          }),
          onClick: () => t ? d(e) : u(e),
          children: [(0, n.jsx)(a, {
            className: E.utilityTagIcon
          }), (0, n.jsx)(l.Text, {
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
    guildId: t,
    title: a,
    description: s,
    handleUpdate: i,
    progress: T,
    interests: C,
    requiredGameId: _,
    optional: x = !1,
    hidePreview: g = !1
  } = e, N = r.useMemo(() => {
    let e = [];
    return m.LANGUAGES_SET.forEach(t => e.push({
      value: t,
      label: t
    })), e
  }, []), I = r.useMemo(() => {
    var e;
    return null !== (e = null != C ? C : null == T ? void 0 : T.interests) && void 0 !== e ? e : new Set
  }, [C, null == T ? void 0 : T.interests]), v = r.useMemo(() => Array.from(I), [I]), A = r.useMemo(() => v.filter(e => m.LANGUAGES_SET.has(e)), [v]), S = r.useCallback(e => {
    let t = v.filter(e => !m.LANGUAGES_SET.has(e));
    i(new Set([...t, ...e]))
  }, [i, v]), L = r.useMemo(() => v.filter(e => m.ALL_TRAITS_SET.has(e) || m.LANGUAGES_SET.has(e)), [v]);
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [x && (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: E.optionalTag,
      children: h.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: a
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: s
    }), (0, n.jsxs)("div", {
      className: E.content,
      children: [(0, n.jsxs)("div", {
        className: E.mainPanelContainer,
        children: [_ === m.VALORANT_ID && (0, n.jsx)(p, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: u.default,
          traits: m.VALORANT_TRAITS,
          interests: I,
          handleUpdate: i
        }), _ === m.GENSHIN_ID && (0, n.jsx)(p, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_GENSHIN,
          icon: d.default,
          traits: m.GENSHIN_TRAITS,
          interests: I,
          handleUpdate: i
        }), (0, n.jsx)(p, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: o.default,
          traits: m.AGE_TRAITS,
          interests: I,
          handleUpdate: i
        }), (0, n.jsx)(p, {
          title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: c.default,
          traits: m.IDENTITY_TRAITS,
          interests: I,
          handleUpdate: i
        }), (0, n.jsx)(l.Text, {
          className: E.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, n.jsx)("div", {
          className: E.languageSelect,
          children: (0, n.jsx)(l.SearchableSelect, {
            wrapperClassName: E.input,
            options: N,
            value: A,
            onChange: S,
            placeholder: h.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.fixedWidthSidebar,
        children: null != T && v.length > 0 && !g && (0, n.jsx)(f.default, {
          guildId: t,
          progress: T,
          traitsToHighlight: L,
          maskDescription: !0
        })
      })]
    })]
  })
}
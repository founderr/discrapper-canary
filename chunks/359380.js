t(47120), t(653041);
var a = t(735250),
  r = t(470079),
  s = t(481060),
  i = t(898543),
  l = t(214715),
  o = t(18100),
  c = t(308083),
  d = t(689938),
  u = t(360884);
let m = e => {
  let {
    title: n,
    icon: t,
    traits: i,
    interests: o,
    handleUpdate: d
  } = e, m = r.useCallback(e => {
    let n = new Set(o);
    n.delete(e), d(n)
  }, [d, o]), h = r.useCallback(e => {
    if (o.size === c.c4) return;
    let n = new Set(o);
    n.add(e), d(n)
  }, [d, o]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Text, {
      className: u.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: n
    }), (0, a.jsx)("div", {
      className: u.interestsCategory,
      children: i.map(e => {
        let n = o.has(e);
        return (0, a.jsx)(l.Z, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          icon: t,
          text: e,
          selected: n,
          onClick: n ? m : h
        }, e)
      })
    })]
  })
};
n.Z = e => {
  let {
    guildId: n,
    title: t,
    description: l,
    handleUpdate: h,
    progress: C,
    interests: x,
    requiredGameId: f,
    optional: E = !1,
    hidePreview: T = !1
  } = e, _ = r.useMemo(() => {
    let e = [];
    return c.gh.forEach(n => e.push({
      value: n,
      label: n
    })), e
  }, []), I = r.useMemo(() => {
    var e;
    return null !== (e = null != x ? x : null == C ? void 0 : C.interests) && void 0 !== e ? e : new Set
  }, [x, null == C ? void 0 : C.interests]), g = r.useMemo(() => Array.from(I), [I]), p = r.useMemo(() => g.filter(e => c.gh.has(e)), [g]), N = r.useCallback(e => {
    h(new Set([...g.filter(e => !c.gh.has(e)), ...e]))
  }, [h, g]), v = r.useMemo(() => g.filter(e => c.WZ.has(e) || c.gh.has(e)), [g]), y = r.useCallback(e => {
    let n = new Set(I);
    n.delete(e), h(n)
  }, [h, I]);
  return (0, a.jsxs)("div", {
    className: u.slideContent,
    children: [E && (0, a.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: u.optionalTag,
      children: d.Z.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: u.title,
      children: t
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.subtitle,
      children: l
    }), (0, a.jsxs)("div", {
      className: u.content,
      children: [(0, a.jsxs)("div", {
        className: u.mainPanelContainer,
        children: [f === c.nJ && (0, a.jsx)(m, {
          title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: (0, s.makeIconCompat)(i.Z),
          traits: c.k3,
          interests: I,
          handleUpdate: h
        }), f === c.xn && (0, a.jsx)(m, {
          title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_GENSHIN,
          icon: s.SparklesIcon,
          traits: c.hm,
          interests: I,
          handleUpdate: h
        }), (0, a.jsx)(m, {
          title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: s.HourglassIcon,
          traits: c.jK,
          interests: I,
          handleUpdate: h
        }), (0, a.jsx)(m, {
          title: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: s.UserIcon,
          traits: c.CT,
          interests: I,
          handleUpdate: h
        }), (0, a.jsx)(s.Text, {
          className: u.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: d.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
        }), (0, a.jsx)("div", {
          className: u.languageSelect,
          children: (0, a.jsx)(s.SearchableSelect, {
            wrapperClassName: u.input,
            options: _,
            value: p,
            onChange: N,
            placeholder: d.Z.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: u.fixedWidthSidebar,
        children: null != C && g.length > 0 && !T && (0, a.jsx)(o.Z, {
          guildId: n,
          progress: C,
          traitsToHighlight: v,
          maskDescription: !0,
          onTraitClick: y
        })
      })]
    })]
  })
}
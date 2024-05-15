"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("442837"),
  c = a("314897"),
  d = a("729285"),
  u = a("353093"),
  f = a("87576"),
  m = a("308083"),
  h = a("689938"),
  p = a("661926");

function E(e) {
  return !m.ALL_TRAITS_SET.has(e) && !m.SUGGESTED_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: a,
    error: s
  } = e, [T, C] = r.useState(""), x = (0, o.useStateFromStores)([c.default], () => c.default.getId()), _ = r.useMemo(() => (0, u.stableSortSet)(m.SUGGESTED_TRAITS_SET, x), [x]), g = r.useMemo(() => Array.from(a), [a]), I = r.useMemo(() => g.filter(E), [g]), N = r.useMemo(() => [..._, ...I], [I, _]), v = r.useMemo(() => g.filter(e => !m.ALL_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)), [g]), A = e => {
    let n = new Set(a);
    n.delete(e), t({
      interests: n
    })
  }, S = r.useCallback(e => {
    if (a.size === m.MAX_NUM_INTERESTS) return;
    let n = null != e ? e : T.trim();
    if (0 === n.length) return;
    let r = new Set(a);
    r.add(n), t({
      interests: r
    }), C("")
  }, [t, T, a]), L = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), S()
    }
  }, [S]);
  return (0, n.jsxs)("div", {
    className: p.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: p.title,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.subtitle,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != s && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: p.errorText,
      children: s
    }), (0, n.jsxs)("div", {
      className: p.content,
      children: [(0, n.jsxs)("div", {
        className: p.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: p.inputContainer,
          children: [(0, n.jsx)(l.TextInput, {
            inputClassName: p.input,
            value: T,
            onKeyDown: L,
            onChange: C,
            placeholder: h.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: m.MAX_INTEREST_LENGTH,
            disabled: a.size === m.MAX_NUM_INTERESTS
          }), T.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => S(T.trim()),
            className: i()(p.plusIcon, p.clickable),
            children: (0, n.jsx)(d.default, {
              className: p.icon
            })
          }), T.length > 0 && (0, n.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: p.enterToSearchText,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(l.Text, {
          className: p.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: p.interestsCategory,
          children: N.map(e => {
            let t = a.has(e);
            return (0, n.jsx)(l.Clickable, {
              className: i()(p.interestsTag, p.selectableOption, {
                [p.selectedOption]: t
              }),
              onClick: () => t ? A(e) : S(e),
              children: (0, n.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: p.fixedWidthSidebar,
        children: g.length > 0 && (0, n.jsx)(f.default, {
          traits: g,
          traitsToHighlight: v
        })
      })]
    })]
  })
}
"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  l = a.n(i),
  s = a("481060"),
  o = a("442837"),
  c = a("314897"),
  d = a("729285"),
  u = a("353093"),
  f = a("87576"),
  m = a("308083"),
  h = a("689938"),
  E = a("661926");

function T(e) {
  return !m.ALL_TRAITS_SET.has(e) && !m.SUGGESTED_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: a,
    error: i
  } = e, [p, C] = r.useState(""), _ = (0, o.useStateFromStores)([c.default], () => c.default.getId()), x = r.useMemo(() => (0, u.stableSortSet)(m.SUGGESTED_TRAITS_SET, _), [_]), g = r.useMemo(() => Array.from(a), [a]), I = r.useMemo(() => g.filter(T), [g]), v = r.useMemo(() => [...x, ...I], [I, x]), N = r.useMemo(() => g.filter(e => !m.ALL_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)), [g]), A = e => {
    let n = new Set(a);
    n.delete(e), t({
      interests: n
    })
  }, S = r.useCallback(e => {
    if (a.size === m.MAX_NUM_INTERESTS) return;
    let n = null != e ? e : p.trim();
    if (0 === n.length) return;
    let r = new Set(a);
    r.add(n), t({
      interests: r
    }), C("")
  }, [t, p, a]), R = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), S()
    }
  }, [S]);
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != i && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: E.errorText,
      children: i
    }), (0, n.jsxs)("div", {
      className: E.content,
      children: [(0, n.jsxs)("div", {
        className: E.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: E.inputContainer,
          children: [(0, n.jsx)(s.TextInput, {
            inputClassName: E.input,
            value: p,
            onKeyDown: R,
            onChange: C,
            placeholder: h.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: m.MAX_INTEREST_LENGTH,
            disabled: a.size === m.MAX_NUM_INTERESTS
          }), p.length > 0 && (0, n.jsx)(s.Clickable, {
            onClick: () => S(p.trim()),
            className: l()(E.plusIcon, E.clickable),
            children: (0, n.jsx)(d.default, {
              className: E.icon
            })
          }), p.length > 0 && (0, n.jsx)(s.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: E.enterToSearchText,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(s.Text, {
          className: E.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: E.interestsCategory,
          children: v.map(e => {
            let t = a.has(e);
            return (0, n.jsx)(s.Clickable, {
              className: l()(E.interestsTag, E.selectableOption, {
                [E.selectedOption]: t
              }),
              onClick: () => t ? A(e) : S(e),
              children: (0, n.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.fixedWidthSidebar,
        children: g.length > 0 && (0, n.jsx)(f.default, {
          traits: g,
          traitsToHighlight: N
        })
      })]
    })]
  })
}
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
  f = a("18100"),
  m = a("308083"),
  h = a("689938"),
  E = a("661926");

function T(e) {
  return !m.ALL_TRAITS_SET.has(e) && !m.SUGGESTED_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    guildId: t,
    handleUpdate: a,
    progress: s,
    error: p
  } = e, {
    interests: C
  } = s, [_, x] = r.useState(""), g = (0, o.useStateFromStores)([c.default], () => c.default.getId()), N = r.useMemo(() => (0, u.stableSortSet)(m.SUGGESTED_TRAITS_SET, g), [g]), I = r.useMemo(() => Array.from(C), [C]), v = r.useMemo(() => I.filter(T), [I]), A = r.useMemo(() => [...N, ...v], [v, N]), S = r.useMemo(() => I.filter(e => !m.ALL_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)), [I]), L = e => {
    let t = new Set(C);
    t.delete(e), a({
      interests: t
    })
  }, R = r.useCallback(e => {
    if (C.size === m.MAX_NUM_INTERESTS) return;
    let t = null != e ? e : _.trim();
    if (0 === t.length) return;
    let n = new Set(C);
    n.add(t), a({
      interests: n
    }), x("")
  }, [a, _, C]), y = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), R()
    }
  }, [R]);
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != p && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: E.errorText,
      children: p
    }), (0, n.jsxs)("div", {
      className: E.content,
      children: [(0, n.jsxs)("div", {
        className: E.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: E.inputContainer,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: E.contentLabel,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_LABEL
          }), (0, n.jsx)(l.TextInput, {
            autoFocus: !0,
            inputClassName: E.input,
            value: _,
            onKeyDown: y,
            onChange: x,
            placeholder: h.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: m.MAX_INTEREST_LENGTH,
            disabled: C.size === m.MAX_NUM_INTERESTS
          }), _.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => R(_.trim()),
            className: i()(E.plusIcon, E.clickable),
            children: (0, n.jsx)(d.default, {
              className: E.icon
            })
          }), _.length > 0 && (0, n.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: E.enterToSearchText,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(l.Text, {
          className: E.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: E.interestsCategory,
          children: A.map(e => {
            let t = C.has(e);
            return (0, n.jsx)(l.Clickable, {
              className: i()(E.interestsTag, E.selectableOption, {
                [E.selectedOption]: t
              }),
              onClick: () => t ? L(e) : R(e),
              children: (0, n.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: E.fixedWidthSidebar,
        children: I.length > 0 && (0, n.jsx)(f.default, {
          guildId: t,
          progress: s,
          traitsToHighlight: S,
          maskDescription: !0
        })
      })]
    })]
  })
}
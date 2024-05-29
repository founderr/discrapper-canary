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
  f = a("214715"),
  m = a("18100"),
  h = a("308083"),
  E = a("689938"),
  p = a("661926");
t.default = e => {
  let {
    guildId: t,
    handleUpdate: a,
    progress: s,
    error: C
  } = e, {
    interests: T
  } = s, [_, x] = r.useState(""), g = (0, o.useStateFromStores)([c.default], () => c.default.getId()), N = r.useMemo(() => (0, u.stableSortSet)(h.SUGGESTED_TRAITS_SET, g), [g]), I = r.useMemo(() => Array.from(T), [T]), v = r.useMemo(() => I.filter(h.isCustomInterest), [I]), A = r.useMemo(() => [...N, ...v], [v, N]), S = r.useMemo(() => I.filter(e => !h.ALL_TRAITS_SET.has(e) && !h.LANGUAGES_SET.has(e)), [I]), L = e => {
    let t = new Set(T);
    t.delete(e), a({
      interests: t
    })
  }, R = r.useCallback(e => {
    if (T.size === h.MAX_NUM_INTERESTS) return;
    let t = null != e ? e : _.trim();
    if (0 === t.length) return;
    let n = new Set(T);
    n.add(t), a({
      interests: n
    }), x("")
  }, [a, _, T]), y = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), R()
    }
  }, [R]);
  return (0, n.jsxs)("div", {
    className: p.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: p.title,
      children: E.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.subtitle,
      children: E.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != C && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: p.errorText,
      children: C
    }), (0, n.jsxs)("div", {
      className: p.content,
      children: [(0, n.jsxs)("div", {
        className: p.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: p.inputContainer,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: p.contentLabel,
            children: E.default.Messages.CLAN_SETUP_INTERESTS_LABEL
          }), (0, n.jsx)(l.TextInput, {
            autoFocus: !0,
            inputClassName: p.input,
            value: _,
            onKeyDown: y,
            onChange: x,
            placeholder: E.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: h.MAX_INTEREST_LENGTH,
            disabled: T.size === h.MAX_NUM_INTERESTS
          }), _.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => R(_.trim()),
            className: i()(p.plusIcon, p.clickable),
            children: (0, n.jsx)(d.default, {
              className: p.icon
            })
          }), _.length > 0 && (0, n.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: p.enterToSearchText,
            children: E.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(l.Text, {
          className: p.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: p.interestsCategory,
          children: A.map(e => {
            let t = T.has(e);
            return (0, n.jsx)(f.default, {
              variant: "text-xs/semibold",
              color: "interactive-normal",
              text: e,
              selected: t,
              onClick: t ? L : R
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: p.fixedWidthSidebar,
        children: I.length > 0 && (0, n.jsx)(m.default, {
          guildId: t,
          progress: s,
          traitsToHighlight: S,
          maskDescription: !0,
          onTraitClick: L
        })
      })]
    })]
  })
}
"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("442837"),
  c = n("314897"),
  d = n("729285"),
  u = n("353093"),
  f = n("214715"),
  m = n("18100"),
  h = n("308083"),
  E = n("689938"),
  p = n("661926");
t.default = e => {
  let {
    guildId: t,
    handleUpdate: n,
    progress: s,
    error: C
  } = e, {
    interests: T
  } = s, [_, x] = r.useState(""), g = (0, o.useStateFromStores)([c.default], () => c.default.getId()), I = r.useMemo(() => (0, u.stableSortSet)(h.SUGGESTED_TRAITS_SET, g), [g]), N = r.useMemo(() => Array.from(T), [T]), v = r.useMemo(() => N.filter(h.isCustomInterest), [N]), A = r.useMemo(() => [...I, ...v], [v, I]), S = r.useMemo(() => N.filter(e => !h.ALL_TRAITS_SET.has(e) && !h.LANGUAGES_SET.has(e)), [N]), L = e => {
    let t = new Set(T);
    t.delete(e), n({
      interests: t
    })
  }, R = r.useCallback(e => {
    if (T.size === h.MAX_NUM_INTERESTS) return;
    let t = null != e ? e : _.trim();
    if (0 === t.length) return;
    let a = new Set(T);
    a.add(t), n({
      interests: a
    }), x("")
  }, [n, _, T]), y = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), R()
    }
  }, [R]);
  return (0, a.jsxs)("div", {
    className: p.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: p.title,
      children: E.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.subtitle,
      children: E.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != C && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: p.errorText,
      children: C
    }), (0, a.jsxs)("div", {
      className: p.content,
      children: [(0, a.jsxs)("div", {
        className: p.mainPanelContainer,
        children: [(0, a.jsxs)("div", {
          className: p.inputContainer,
          children: [(0, a.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: p.contentLabel,
            children: E.default.Messages.CLAN_SETUP_INTERESTS_LABEL
          }), (0, a.jsx)(l.TextInput, {
            autoFocus: !0,
            inputClassName: p.input,
            value: _,
            onKeyDown: y,
            onChange: x,
            placeholder: E.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: h.MAX_INTEREST_LENGTH,
            disabled: T.size === h.MAX_NUM_INTERESTS
          }), _.length > 0 && (0, a.jsx)(l.Clickable, {
            onClick: () => R(_.trim()),
            className: i()(p.plusIcon, p.clickable),
            children: (0, a.jsx)(d.default, {
              className: p.icon
            })
          }), _.length > 0 && (0, a.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: p.enterToSearchText,
            children: E.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, a.jsx)(l.Text, {
          className: p.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, a.jsx)("div", {
          className: p.interestsCategory,
          children: A.map(e => {
            let t = T.has(e);
            return (0, a.jsx)(f.default, {
              variant: "text-xs/semibold",
              color: "interactive-normal",
              text: e,
              selected: t,
              onClick: t ? L : R
            }, e)
          })
        })]
      }), (0, a.jsx)("div", {
        className: p.fixedWidthSidebar,
        children: N.length > 0 && (0, a.jsx)(m.default, {
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
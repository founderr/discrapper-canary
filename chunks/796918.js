"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("481060"),
  o = a("442837"),
  d = a("314897"),
  c = a("729285"),
  u = a("353093"),
  f = a("214715"),
  m = a("18100"),
  E = a("308083"),
  h = a("689938"),
  T = a("661926");
t.default = e => {
  let {
    guildId: t,
    handleUpdate: a,
    progress: i,
    error: _
  } = e, {
    interests: C
  } = i, [x, p] = r.useState(""), I = (0, o.useStateFromStores)([d.default], () => d.default.getId()), g = r.useMemo(() => (0, u.stableSortSet)(E.SUGGESTED_TRAITS_SET, I), [I]), N = r.useMemo(() => Array.from(C), [C]), A = r.useMemo(() => N.filter(E.isCustomInterest), [N]), v = r.useMemo(() => [...g, ...A], [A, g]), S = r.useMemo(() => N.filter(e => !E.ALL_TRAITS_SET.has(e) && !E.LANGUAGES_SET.has(e)), [N]), R = e => {
    let t = new Set(C);
    t.delete(e), a({
      interests: t
    })
  }, L = r.useCallback(e => {
    if (C.size === E.MAX_NUM_INTERESTS) return;
    let t = null != e ? e : x.trim();
    if (0 === t.length) return;
    let n = new Set(C);
    n.add(t), a({
      interests: n
    }), p("")
  }, [a, x, C]), y = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), L()
    }
  }, [L]);
  return (0, n.jsxs)("div", {
    className: T.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: T.title,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.subtitle,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != _ && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: T.errorText,
      children: _
    }), (0, n.jsxs)("div", {
      className: T.content,
      children: [(0, n.jsxs)("div", {
        className: T.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: T.inputContainer,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: T.contentLabel,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_LABEL
          }), (0, n.jsx)(l.TextInput, {
            autoFocus: !0,
            inputClassName: T.input,
            value: x,
            onKeyDown: y,
            onChange: p,
            placeholder: h.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: E.MAX_INTEREST_LENGTH,
            disabled: C.size === E.MAX_NUM_INTERESTS
          }), x.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => L(x.trim()),
            className: s()(T.plusIcon, T.clickable),
            children: (0, n.jsx)(c.default, {
              className: T.icon
            })
          }), x.length > 0 && (0, n.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: T.enterToSearchText,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(l.Text, {
          className: T.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: T.interestsCategory,
          children: v.map(e => {
            let t = C.has(e);
            return (0, n.jsx)(f.default, {
              variant: "text-xs/semibold",
              color: "interactive-normal",
              text: e,
              selected: t,
              onClick: t ? R : L
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: T.fixedWidthSidebar,
        children: N.length > 0 && (0, n.jsx)(m.default, {
          guildId: t,
          progress: i,
          traitsToHighlight: S,
          maskDescription: !0,
          onTraitClick: R
        })
      })]
    })]
  })
}
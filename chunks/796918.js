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
t.default = e => {
  let {
    guildId: t,
    handleUpdate: a,
    progress: s,
    error: p
  } = e, {
    interests: T
  } = s, [C, _] = r.useState(""), x = (0, o.useStateFromStores)([c.default], () => c.default.getId()), g = r.useMemo(() => (0, u.stableSortSet)(m.SUGGESTED_TRAITS_SET, x), [x]), N = r.useMemo(() => Array.from(T), [T]), I = r.useMemo(() => N.filter(m.isCustomInterest), [N]), v = r.useMemo(() => [...g, ...I], [I, g]), A = r.useMemo(() => N.filter(e => !m.ALL_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)), [N]), S = e => {
    let t = new Set(T);
    t.delete(e), a({
      interests: t
    })
  }, L = r.useCallback(e => {
    if (T.size === m.MAX_NUM_INTERESTS) return;
    let t = null != e ? e : C.trim();
    if (0 === t.length) return;
    let n = new Set(T);
    n.add(t), a({
      interests: n
    }), _("")
  }, [a, C, T]), R = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), L()
    }
  }, [L]);
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
            value: C,
            onKeyDown: R,
            onChange: _,
            placeholder: h.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: m.MAX_INTEREST_LENGTH,
            disabled: T.size === m.MAX_NUM_INTERESTS
          }), C.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => L(C.trim()),
            className: i()(E.plusIcon, E.clickable),
            children: (0, n.jsx)(d.default, {
              className: E.icon
            })
          }), C.length > 0 && (0, n.jsx)(l.Text, {
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
          children: v.map(e => {
            let t = T.has(e);
            return (0, n.jsx)(l.Clickable, {
              className: i()(E.interestsTag, E.selectableOption, {
                [E.selectedOption]: t
              }),
              onClick: () => t ? S(e) : L(e),
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
        children: N.length > 0 && (0, n.jsx)(f.default, {
          guildId: t,
          progress: s,
          traitsToHighlight: A,
          maskDescription: !0
        })
      })]
    })]
  })
}
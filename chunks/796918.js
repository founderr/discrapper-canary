"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("729285"),
  c = a("87576"),
  d = a("308083"),
  u = a("689938"),
  f = a("661926");

function m(e) {
  return !d.ALL_TRAITS_SET.has(e) && !d.SUGGESTED_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: a,
    error: s
  } = e, [h, p] = r.useState(""), E = r.useMemo(() => Array.from(a), [a]), T = r.useMemo(() => E.filter(m), [E]), C = r.useMemo(() => [...d.SUGGESTED_TRAITS_SET, ...T], [T]), x = r.useMemo(() => E.filter(e => !d.ALL_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)), [E]), _ = e => {
    let n = new Set(a);
    n.delete(e), t({
      interests: n
    })
  }, g = r.useCallback(e => {
    if (a.size === d.MAX_NUM_INTERESTS) return;
    let n = null != e ? e : h.trim();
    if (0 === n.length) return;
    let r = new Set(a);
    r.add(n), t({
      interests: r
    }), p("")
  }, [t, h, a]), I = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), g()
    }
  }, [g]);
  return (0, n.jsxs)("div", {
    className: f.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != s && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: s
    }), (0, n.jsxs)("div", {
      className: f.content,
      children: [(0, n.jsxs)("div", {
        className: f.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: f.inputContainer,
          children: [(0, n.jsx)(l.TextInput, {
            inputClassName: f.input,
            value: h,
            onKeyDown: I,
            onChange: p,
            placeholder: u.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: d.MAX_INTEREST_LENGTH,
            disabled: a.size === d.MAX_NUM_INTERESTS
          }), h.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => g(h.trim()),
            className: i()(f.plusIcon, f.clickable),
            children: (0, n.jsx)(o.default, {
              className: f.icon
            })
          }), h.length > 0 && (0, n.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: f.enterToSearchText,
            children: u.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(l.Text, {
          className: f.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: u.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: f.interestsCategory,
          children: C.map(e => {
            let t = a.has(e);
            return (0, n.jsx)(l.Clickable, {
              className: i()(f.interestsTag, f.selectableOption, {
                [f.selectedOption]: t
              }),
              onClick: () => t ? _(e) : g(e),
              children: (0, n.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: f.fixedWidthSidebar,
        children: E.length > 0 && (0, n.jsx)(c.default, {
          traits: E,
          traitsToHighlight: x
        })
      })]
    })]
  })
}
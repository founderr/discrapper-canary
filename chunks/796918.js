"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("729285"),
  u = a("87576"),
  d = a("308083"),
  c = a("689938"),
  f = a("418571");

function E(e) {
  return !d.ALL_TRAITS_SET.has(e) && !d.SUGGESTED_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: a,
    error: l
  } = e, [h, _] = s.useState(""), C = s.useMemo(() => Array.from(a), [a]), m = s.useMemo(() => C.filter(E), [C]), S = s.useMemo(() => [...d.SUGGESTED_TRAITS_SET, ...m], [m]), p = s.useMemo(() => C.filter(e => !d.ALL_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)), [C]), I = e => {
    let n = new Set(a);
    n.delete(e), t({
      interests: n
    })
  }, T = s.useCallback(e => {
    if (a.size === d.MAX_NUM_INTERESTS) return;
    let n = null != e ? e : h.trim();
    if (0 === n.length) return;
    let s = new Set(a);
    s.add(n), t({
      interests: s
    }), _("")
  }, [t, h, a]), g = s.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), T()
    }
  }, [T]);
  return (0, n.jsxs)("div", {
    className: f.slideContentWithSidebar,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), null != l && (0, n.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: l
    }), (0, n.jsxs)("div", {
      className: f.content,
      children: [(0, n.jsxs)("div", {
        className: f.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: f.inputContainer,
          children: [(0, n.jsx)(r.TextInput, {
            inputClassName: f.input,
            value: h,
            onKeyDown: g,
            onChange: _,
            placeholder: c.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: d.MAX_INTEREST_LENGTH,
            disabled: a.size === d.MAX_NUM_INTERESTS
          }), h.length > 0 && (0, n.jsx)(r.Clickable, {
            onClick: () => T(h.trim()),
            className: i()(f.plusIcon, f.clickable),
            children: (0, n.jsx)(o.default, {
              className: f.icon
            })
          }), h.length > 0 && (0, n.jsx)(r.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: f.enterToSearchText,
            children: c.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(r.Text, {
          className: f.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: c.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: f.interestsCategory,
          children: S.map(e => {
            let t = a.has(e);
            return (0, n.jsx)(r.Clickable, {
              className: i()(f.interestsTag, {
                [f.selected]: t
              }),
              onClick: () => t ? I(e) : T(e),
              children: (0, n.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: f.fixedWidthSidebar,
        children: C.length > 0 && (0, n.jsx)(u.default, {
          traits: C,
          traitsToHighlight: p
        })
      })]
    })]
  })
}
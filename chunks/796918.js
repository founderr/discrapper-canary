"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("729285"),
  u = n("87576"),
  d = n("308083"),
  c = n("689938"),
  f = n("418571");

function E(e) {
  return !d.ALL_TRAITS_SET.has(e) && !d.SUGGESTED_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: n,
    error: l
  } = e, [h, _] = s.useState(""), C = s.useMemo(() => Array.from(n), [n]), m = s.useMemo(() => C.filter(E), [C]), S = s.useMemo(() => [...d.SUGGESTED_TRAITS_SET, ...m], [m]), p = s.useMemo(() => C.filter(e => !d.ALL_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)), [C]), I = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, T = s.useCallback(e => {
    if (n.size === d.MAX_NUM_INTERESTS) return;
    let a = null != e ? e : h.trim();
    if (0 === a.length) return;
    let s = new Set(n);
    s.add(a), t({
      interests: s
    }), _("")
  }, [t, h, n]), g = s.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), T()
    }
  }, [T]);
  return (0, a.jsxs)("div", {
    className: f.slideContentWithSidebar,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), null != l && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: l
    }), (0, a.jsxs)("div", {
      className: f.content,
      children: [(0, a.jsxs)("div", {
        className: f.mainPanelContainer,
        children: [(0, a.jsxs)("div", {
          className: f.inputContainer,
          children: [(0, a.jsx)(r.TextInput, {
            inputClassName: f.input,
            value: h,
            onKeyDown: g,
            onChange: _,
            placeholder: c.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: d.MAX_INTEREST_LENGTH,
            disabled: n.size === d.MAX_NUM_INTERESTS
          }), h.length > 0 && (0, a.jsx)(r.Clickable, {
            onClick: () => T(h.trim()),
            className: i()(f.plusIcon, f.clickable),
            children: (0, a.jsx)(o.default, {
              className: f.icon
            })
          }), h.length > 0 && (0, a.jsx)(r.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: f.enterToSearchText,
            children: c.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, a.jsx)(r.Text, {
          className: f.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: c.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, a.jsx)("div", {
          className: f.interestsCategory,
          children: S.map(e => {
            let t = n.has(e);
            return (0, a.jsx)(r.Clickable, {
              className: i()(f.interestsTag, {
                [f.selected]: t
              }),
              onClick: () => t ? I(e) : T(e),
              children: (0, a.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, a.jsx)("div", {
        className: f.fixedWidthSidebar,
        children: (0, a.jsx)(u.default, {
          traits: C,
          traitsToHighlight: p
        })
      })]
    })]
  })
}
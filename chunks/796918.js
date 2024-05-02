"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("729285"),
  c = n("87576"),
  d = n("308083"),
  u = n("689938"),
  f = n("418571");

function m(e) {
  return !d.ALL_TRAITS_SET.has(e) && !d.SUGGESTED_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: n,
    error: s
  } = e, [h, p] = r.useState(""), E = r.useMemo(() => Array.from(n), [n]), T = r.useMemo(() => E.filter(m), [E]), C = r.useMemo(() => [...d.SUGGESTED_TRAITS_SET, ...T], [T]), _ = r.useMemo(() => E.filter(e => !d.ALL_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)), [E]), g = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, x = r.useCallback(e => {
    if (n.size === d.MAX_NUM_INTERESTS) return;
    let a = null != e ? e : h.trim();
    if (0 === a.length) return;
    let r = new Set(n);
    r.add(a), t({
      interests: r
    }), p("")
  }, [t, h, n]), I = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), x()
    }
  }, [x]);
  return (0, a.jsxs)("div", {
    className: f.slideContentWithSidebar,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), null != s && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: s
    }), (0, a.jsxs)("div", {
      className: f.content,
      children: [(0, a.jsxs)("div", {
        className: f.mainPanelContainer,
        children: [(0, a.jsxs)("div", {
          className: f.inputContainer,
          children: [(0, a.jsx)(l.TextInput, {
            inputClassName: f.input,
            value: h,
            onKeyDown: I,
            onChange: p,
            placeholder: u.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: d.MAX_INTEREST_LENGTH,
            disabled: n.size === d.MAX_NUM_INTERESTS
          }), h.length > 0 && (0, a.jsx)(l.Clickable, {
            onClick: () => x(h.trim()),
            className: i()(f.plusIcon, f.clickable),
            children: (0, a.jsx)(o.default, {
              className: f.icon
            })
          }), h.length > 0 && (0, a.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: f.enterToSearchText,
            children: u.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, a.jsx)(l.Text, {
          className: f.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: u.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, a.jsx)("div", {
          className: f.interestsCategory,
          children: C.map(e => {
            let t = n.has(e);
            return (0, a.jsx)(l.Clickable, {
              className: i()(f.interestsTag, {
                [f.selected]: t
              }),
              onClick: () => t ? g(e) : x(e),
              children: (0, a.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, a.jsx)("div", {
        className: f.fixedWidthSidebar,
        children: E.length > 0 && (0, a.jsx)(c.default, {
          traits: E,
          traitsToHighlight: _
        })
      })]
    })]
  })
}
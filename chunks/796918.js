"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("481060"),
  o = a("729285"),
  c = a("87576"),
  d = a("308083"),
  u = a("689938"),
  f = a("418571");

function m(e) {
  return !d.ALL_TRAITS_SET.has(e) && !d.SUGGESTED_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: a,
    error: r
  } = e, [h, E] = i.useState(""), T = i.useMemo(() => Array.from(a), [a]), p = i.useMemo(() => T.filter(m), [T]), _ = i.useMemo(() => [...d.SUGGESTED_TRAITS_SET, ...p], [p]), C = i.useMemo(() => T.filter(e => !d.ALL_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)), [T]), g = e => {
    let n = new Set(a);
    n.delete(e), t({
      interests: n
    })
  }, x = i.useCallback(e => {
    if (a.size === d.MAX_NUM_INTERESTS) return;
    let n = null != e ? e : h.trim();
    if (0 === n.length) return;
    let i = new Set(a);
    i.add(n), t({
      interests: i
    }), E("")
  }, [t, h, a]), I = i.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), x()
    }
  }, [x]);
  return (0, n.jsxs)("div", {
    className: f.slideContentWithSidebar,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), null != r && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: r
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
            onChange: E,
            placeholder: u.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: d.MAX_INTEREST_LENGTH,
            disabled: a.size === d.MAX_NUM_INTERESTS
          }), h.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => x(h.trim()),
            className: s()(f.plusIcon, f.clickable),
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
          children: _.map(e => {
            let t = a.has(e);
            return (0, n.jsx)(l.Clickable, {
              className: s()(f.interestsTag, f.selectableOption, {
                [f.selectedOption]: t
              }),
              onClick: () => t ? g(e) : x(e),
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
        children: T.length > 0 && (0, n.jsx)(c.default, {
          traits: T,
          traitsToHighlight: C
        })
      })]
    })]
  })
}
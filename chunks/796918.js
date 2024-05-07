"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("481060"),
  _ = s("729285"),
  r = s("87576"),
  u = s("308083"),
  o = s("689938"),
  T = s("418571");

function d(e) {
  return !u.ALL_TRAITS_SET.has(e) && !u.SUGGESTED_TRAITS_SET.has(e) && !u.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: s,
    error: i
  } = e, [A, I] = n.useState(""), L = n.useMemo(() => Array.from(s), [s]), c = n.useMemo(() => L.filter(d), [L]), N = n.useMemo(() => [...u.SUGGESTED_TRAITS_SET, ...c], [c]), S = n.useMemo(() => L.filter(e => !u.ALL_TRAITS_SET.has(e) && !u.LANGUAGES_SET.has(e)), [L]), g = e => {
    let a = new Set(s);
    a.delete(e), t({
      interests: a
    })
  }, D = n.useCallback(e => {
    if (s.size === u.MAX_NUM_INTERESTS) return;
    let a = null != e ? e : A.trim();
    if (0 === a.length) return;
    let n = new Set(s);
    n.add(a), t({
      interests: n
    }), I("")
  }, [t, A, s]), C = n.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), D()
    }
  }, [D]);
  return (0, a.jsxs)("div", {
    className: T.slideContentWithSidebar,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: T.title,
      children: o.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.subtitle,
      children: o.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), null != i && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: T.errorText,
      children: i
    }), (0, a.jsxs)("div", {
      className: T.content,
      children: [(0, a.jsxs)("div", {
        className: T.mainPanelContainer,
        children: [(0, a.jsxs)("div", {
          className: T.inputContainer,
          children: [(0, a.jsx)(l.TextInput, {
            inputClassName: T.input,
            value: A,
            onKeyDown: C,
            onChange: I,
            placeholder: o.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: u.MAX_INTEREST_LENGTH,
            disabled: s.size === u.MAX_NUM_INTERESTS
          }), A.length > 0 && (0, a.jsx)(l.Clickable, {
            onClick: () => D(A.trim()),
            className: E()(T.plusIcon, T.clickable),
            children: (0, a.jsx)(_.default, {
              className: T.icon
            })
          }), A.length > 0 && (0, a.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: T.enterToSearchText,
            children: o.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, a.jsx)(l.Text, {
          className: T.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: o.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, a.jsx)("div", {
          className: T.interestsCategory,
          children: N.map(e => {
            let t = s.has(e);
            return (0, a.jsx)(l.Clickable, {
              className: E()(T.interestsTag, T.selectableOption, {
                [T.selectedOption]: t
              }),
              onClick: () => t ? g(e) : D(e),
              children: (0, a.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, a.jsx)("div", {
        className: T.fixedWidthSidebar,
        children: L.length > 0 && (0, a.jsx)(r.default, {
          traits: L,
          traitsToHighlight: S
        })
      })]
    })]
  })
}
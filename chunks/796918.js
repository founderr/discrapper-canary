"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("465670"),
  u = n("729285"),
  d = n("308083"),
  c = n("689938"),
  f = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    interests: n
  } = e, [l, E] = s.useState(""), h = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, _ = s.useCallback(() => {
    if (n.size === d.MAX_NUM_INTERESTS) return;
    let e = l.trim();
    if (0 === e.length) return;
    let a = new Set(n);
    a.add(e), t({
      interests: a
    }), E("")
  }, [t, l, n]), C = s.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), _()
    }
  }, [_]);
  return (0, a.jsxs)("div", {
    className: f.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      className: f.title,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: f.contentWithMinHeight,
      children: [(0, a.jsxs)("div", {
        className: f.inputContainer,
        children: [(0, a.jsx)(r.TextInput, {
          value: l,
          onKeyDown: C,
          onChange: E,
          placeholder: c.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
          maxLength: d.MAX_INTEREST_LENGTH,
          disabled: n.size === d.MAX_NUM_INTERESTS
        }), l.length > 0 && (0, a.jsx)(r.Clickable, {
          onClick: _,
          className: i()(f.plusIcon, f.clickable),
          children: (0, a.jsx)(u.default, {
            className: f.icon
          })
        }), l.length > 0 && (0, a.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.enterToSearchText,
          children: c.default.Messages.CLAN_SETUP_INTERESTS_HELP
        })]
      }), n.size > 0 && (0, a.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: f.contentLabel,
        children: c.default.Messages.CLAN_SETUP_SELECTED_GAMES
      }), (0, a.jsx)("div", {
        className: f.selectedSection,
        children: Array.from(n).map(e => (0, a.jsxs)("div", {
          className: f.selectedInterest,
          children: [(0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: e
          }), (0, a.jsx)(r.Clickable, {
            className: f.flex,
            onClick: () => h(e),
            children: (0, a.jsx)(o.default, {
              className: i()(f.clickable, f.iconSmall)
            })
          })]
        }, e))
      })]
    })]
  })
}
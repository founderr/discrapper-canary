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
    interests: n,
    error: l
  } = e, [E, _] = s.useState(""), h = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, C = s.useCallback(() => {
    if (n.size === d.MAX_NUM_INTERESTS) return;
    let e = E.trim();
    if (0 === e.length) return;
    let a = new Set(n);
    a.add(e), t({
      interests: a
    }), _("")
  }, [t, E, n]), m = s.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), C()
    }
  }, [C]);
  return (0, a.jsxs)("div", {
    className: f.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: c.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: f.contentWithMinHeight,
      children: [null != l && (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: f.errorText,
        children: l
      }), (0, a.jsxs)("div", {
        className: f.inputContainer,
        children: [(0, a.jsx)(r.TextInput, {
          value: E,
          onKeyDown: m,
          onChange: _,
          placeholder: c.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
          maxLength: d.MAX_INTEREST_LENGTH,
          disabled: n.size === d.MAX_NUM_INTERESTS
        }), E.length > 0 && (0, a.jsx)(r.Clickable, {
          onClick: C,
          className: i()(f.plusIcon, f.clickable),
          children: (0, a.jsx)(u.default, {
            className: f.icon
          })
        }), E.length > 0 && (0, a.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.enterToSearchText,
          children: c.default.Messages.CLAN_SETUP_INTERESTS_HELP
        })]
      }), n.size > 0 && (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: f.contentLabel,
        children: c.default.Messages.CLAN_SETUP_SELECTED_GAMES
      }), (0, a.jsx)("div", {
        className: f.selectedSection,
        children: Array.from(n).map(e => (0, a.jsxs)("div", {
          className: f.selectedInterest,
          children: [(0, a.jsx)(r.Text, {
            variant: "text-md/normal",
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
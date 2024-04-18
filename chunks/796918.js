"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("465670"),
  u = a("729285"),
  d = a("308083"),
  c = a("689938"),
  f = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    interests: a,
    error: l
  } = e, [E, h] = s.useState(""), _ = e => {
    let n = new Set(a);
    n.delete(e), t({
      interests: n
    })
  }, C = s.useCallback(e => {
    if (a.size === d.MAX_NUM_INTERESTS) return;
    let n = null != e ? e : E.trim();
    if (0 === n.length) return;
    let s = new Set(a);
    s.add(n), t({
      interests: s
    }), h("")
  }, [t, E, a]), m = s.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), C()
    }
  }, [C]);
  return (0, n.jsxs)("div", {
    className: f.slideContent,
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
      className: f.inputContainer,
      children: [(0, n.jsx)(r.TextInput, {
        inputClassName: f.input,
        value: E,
        onKeyDown: m,
        onChange: h,
        placeholder: c.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
        maxLength: d.MAX_INTEREST_LENGTH,
        disabled: a.size === d.MAX_NUM_INTERESTS
      }), E.length > 0 && (0, n.jsx)(r.Clickable, {
        onClick: () => C(E.trim()),
        className: i()(f.plusIcon, f.clickable),
        children: (0, n.jsx)(u.default, {
          className: f.icon
        })
      }), E.length > 0 && (0, n.jsx)(r.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        className: f.enterToSearchText,
        children: c.default.Messages.CLAN_SETUP_INTERESTS_HELP
      })]
    }), a.size > 0 && (0, n.jsx)(r.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: f.contentLabel,
      children: c.default.Messages.CLAN_SETUP_SELECTED_INTERESTS
    }), (0, n.jsx)("div", {
      className: f.selectedSection,
      children: Array.from(a).map(e => d.ALL_TRAITS_SET.has(e) || d.LANGUAGES_SET.has(e) ? null : (0, n.jsxs)("div", {
        className: f.selectedInterest,
        children: [(0, n.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: e
        }), (0, n.jsx)(r.Clickable, {
          className: f.flex,
          onClick: () => _(e),
          children: (0, n.jsx)(o.default, {
            className: i()(f.clickable, f.iconSmall)
          })
        })]
      }, e))
    }), (0, n.jsx)(r.Text, {
      className: f.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: c.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
    }), (0, n.jsx)("div", {
      className: f.interestsCategory,
      children: Array.from(d.SUGGESTED_TRAITS_SET).map(e => {
        let t = a.has(e);
        return (0, n.jsx)(r.Clickable, {
          className: i()(f.interestsTag, {
            [f.selected]: t
          }),
          onClick: () => t ? _(e) : C(e),
          children: (0, n.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: e
          })
        }, e)
      })
    })]
  })
}
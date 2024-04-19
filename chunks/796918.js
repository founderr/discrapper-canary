"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
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
  } = e, [E, h] = s.useState(""), _ = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, C = s.useCallback(e => {
    if (n.size === d.MAX_NUM_INTERESTS) return;
    let a = null != e ? e : E.trim();
    if (0 === a.length) return;
    let s = new Set(n);
    s.add(a), t({
      interests: s
    }), h("")
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
    }), null != l && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: l
    }), (0, a.jsxs)("div", {
      className: f.inputContainer,
      children: [(0, a.jsx)(r.TextInput, {
        inputClassName: f.input,
        value: E,
        onKeyDown: m,
        onChange: h,
        placeholder: c.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
        maxLength: d.MAX_INTEREST_LENGTH,
        disabled: n.size === d.MAX_NUM_INTERESTS
      }), E.length > 0 && (0, a.jsx)(r.Clickable, {
        onClick: () => C(E.trim()),
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
      children: c.default.Messages.CLAN_SETUP_SELECTED_INTERESTS
    }), (0, a.jsx)("div", {
      className: f.selectedSection,
      children: Array.from(n).map(e => d.ALL_TRAITS_SET.has(e) || d.LANGUAGES_SET.has(e) ? null : (0, a.jsxs)("div", {
        className: f.selectedInterest,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: e
        }), (0, a.jsx)(r.Clickable, {
          className: f.flex,
          onClick: () => _(e),
          children: (0, a.jsx)(o.default, {
            className: i()(f.clickable, f.iconSmall)
          })
        })]
      }, e))
    }), (0, a.jsx)(r.Text, {
      className: f.interestsCategoryTitle,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: c.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
    }), (0, a.jsx)("div", {
      className: f.interestsCategory,
      children: Array.from(d.SUGGESTED_TRAITS_SET).map(e => {
        let t = n.has(e);
        return (0, a.jsx)(r.Clickable, {
          className: i()(f.interestsTag, {
            [f.selected]: t
          }),
          onClick: () => t ? _(e) : C(e),
          children: (0, a.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: e
          })
        }, e)
      })
    })]
  })
}
"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("689938"),
  o = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    description: a,
    wildcardDescriptors: s,
    errors: u
  } = e, d = (e, a) => {
    let n = [...s];
    n[a] = e, t({
      wildcardDescriptors: n
    })
  };
  return (0, n.jsxs)("div", {
    className: o.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: o.title,
      children: r.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: o.subtitle,
      children: r.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == u ? void 0 : u.description) != null && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: o.errorText,
      children: u.description
    }), (0, n.jsx)(i.TextArea, {
      className: o.input,
      maxLength: 160,
      onChange: e => t({
        description: e
      }),
      value: a,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: r.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: o.optionalTag,
      children: r.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: o.title,
      children: r.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == u ? void 0 : u.wildcardDescriptors) != null && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: o.errorText,
      children: u.wildcardDescriptors
    }), (0, n.jsxs)("div", {
      className: o.wildcardRow,
      children: [(0, n.jsx)(i.TextInput, {
        inputClassName: l()(o.input, o.wildcardInput),
        value: s[0],
        onChange: e => d(e, 0),
        maxLength: 20,
        placeholder: r.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, n.jsx)(i.TextInput, {
        inputClassName: l()(o.input, o.wildcardInput),
        value: s[1],
        onChange: e => d(e, 1),
        maxLength: 20,
        placeholder: r.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, n.jsx)(i.TextInput, {
        inputClassName: l()(o.input, o.wildcardInput),
        value: s[2],
        onChange: e => d(e, 2),
        maxLength: 20,
        placeholder: r.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      })]
    })]
  })
}
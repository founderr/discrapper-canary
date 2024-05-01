"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("308083"),
  o = a("689938"),
  u = a("418571");
t.default = e => {
  let {
    handleUpdate: t,
    description: a,
    wildcardDescriptors: s,
    errors: d
  } = e, c = (e, a) => {
    let n = [...s];
    n[a] = e, t({
      wildcardDescriptors: n
    })
  };
  return (0, n.jsxs)("div", {
    className: u.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: u.title,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.subtitle,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == d ? void 0 : d.description) != null && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: u.errorText,
      children: d.description
    }), (0, n.jsx)(i.TextArea, {
      className: u.input,
      maxLength: 160,
      onChange: e => t({
        description: e
      }),
      value: a,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: o.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: u.optionalTag,
      children: o.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.title,
      children: o.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == d ? void 0 : d.wildcardDescriptors) != null && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: u.errorText,
      children: d.wildcardDescriptors
    }), (0, n.jsxs)("div", {
      className: u.wildcardRow,
      children: [(0, n.jsx)(i.TextInput, {
        inputClassName: l()(u.input, u.wildcardInput),
        value: s[0],
        onChange: e => c(e, 0),
        maxLength: r.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, n.jsx)(i.TextInput, {
        inputClassName: l()(u.input, u.wildcardInput),
        value: s[1],
        onChange: e => c(e, 1),
        maxLength: r.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, n.jsx)(i.TextInput, {
        inputClassName: l()(u.input, u.wildcardInput),
        value: s[2],
        onChange: e => c(e, 2),
        maxLength: r.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      })]
    })]
  })
}
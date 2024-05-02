"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("308083"),
  o = n("689938"),
  u = n("418571");
t.default = e => {
  let {
    handleUpdate: t,
    description: n,
    wildcardDescriptors: s,
    errors: d
  } = e, c = (e, n) => {
    let a = [...s];
    a[n] = e, t({
      wildcardDescriptors: a
    })
  };
  return (0, a.jsxs)("div", {
    className: u.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: u.title,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.subtitle,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == d ? void 0 : d.description) != null && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: u.errorText,
      children: d.description
    }), (0, a.jsx)(i.TextArea, {
      className: u.input,
      maxLength: 160,
      onChange: e => t({
        description: e
      }),
      value: n,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: o.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: u.optionalTag,
      children: o.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.title,
      children: o.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == d ? void 0 : d.wildcardDescriptors) != null && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: u.errorText,
      children: d.wildcardDescriptors
    }), (0, a.jsxs)("div", {
      className: u.wildcardRow,
      children: [(0, a.jsx)(i.TextInput, {
        inputClassName: l()(u.input, u.wildcardInput),
        value: s[0],
        onChange: e => c(e, 0),
        maxLength: r.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, a.jsx)(i.TextInput, {
        inputClassName: l()(u.input, u.wildcardInput),
        value: s[1],
        onChange: e => c(e, 1),
        maxLength: r.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, a.jsx)(i.TextInput, {
        inputClassName: l()(u.input, u.wildcardInput),
        value: s[2],
        onChange: e => c(e, 2),
        maxLength: r.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      })]
    })]
  })
}
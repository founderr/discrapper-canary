"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  l = a("481060"),
  s = a("308083"),
  o = a("689938"),
  c = a("661926");
t.default = e => {
  let {
    handleUpdate: t,
    description: a,
    wildcardDescriptors: r,
    errors: d
  } = e, u = (e, a) => {
    let n = [...r];
    n[a] = e, t({
      wildcardDescriptors: n
    })
  };
  return (0, n.jsxs)("div", {
    className: c.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == d ? void 0 : d.description) != null && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: d.description
    }), (0, n.jsx)("div", {
      className: c.maxWidthContainer,
      children: (0, n.jsx)(l.TextArea, {
        className: c.input,
        maxLength: s.MAX_DESCRIPTION_LENGTH,
        onChange: e => t({
          description: e
        }),
        value: a,
        rows: 5,
        autoFocus: !0,
        autosize: !0,
        placeholder: o.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: c.optionalTag,
      children: o.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.title,
      children: o.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == d ? void 0 : d.wildcardDescriptors) != null && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: d.wildcardDescriptors
    }), (0, n.jsxs)("div", {
      className: c.wildcardRow,
      children: [(0, n.jsx)(l.TextInput, {
        inputClassName: i()(c.input, c.wildcardInput),
        value: r[0],
        onChange: e => u(e, 0),
        maxLength: s.MAX_WILDCARD_LENGTH,
        placeholder: s.CLAN_WILDCARD_PLACEHOLDERS["0"]
      }), (0, n.jsx)(l.TextInput, {
        inputClassName: i()(c.input, c.wildcardInput),
        value: r[1],
        onChange: e => u(e, 1),
        maxLength: s.MAX_WILDCARD_LENGTH,
        placeholder: s.CLAN_WILDCARD_PLACEHOLDERS["1"]
      }), (0, n.jsx)(l.TextInput, {
        inputClassName: i()(c.input, c.wildcardInput),
        value: r[2],
        onChange: e => u(e, 2),
        maxLength: s.MAX_WILDCARD_LENGTH,
        placeholder: s.CLAN_WILDCARD_PLACEHOLDERS["2"]
      })]
    })]
  })
}
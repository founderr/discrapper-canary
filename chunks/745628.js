"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("481060"),
  l = a("308083"),
  o = a("689938"),
  d = a("661926");
t.default = e => {
  let {
    handleUpdate: t,
    description: a,
    wildcardDescriptors: r,
    errors: c
  } = e, u = (e, a) => {
    let n = [...r];
    n[a] = e, t({
      wildcardDescriptors: n
    })
  };
  return (0, n.jsxs)("div", {
    className: d.slideContent,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == c ? void 0 : c.description) != null && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: c.description
    }), (0, n.jsx)("div", {
      className: d.maxWidthContainer,
      children: (0, n.jsx)(s.TextArea, {
        className: d.input,
        maxLength: l.MAX_DESCRIPTION_LENGTH,
        onChange: e => t({
          description: e
        }),
        value: a,
        rows: 5,
        autoFocus: !0,
        autosize: !0,
        placeholder: o.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: d.optionalTag,
      children: o.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.title,
      children: o.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == c ? void 0 : c.wildcardDescriptors) != null && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: c.wildcardDescriptors
    }), (0, n.jsxs)("div", {
      className: d.wildcardRow,
      children: [(0, n.jsx)(s.TextInput, {
        inputClassName: i()(d.input, d.wildcardInput),
        value: r[0],
        onChange: e => u(e, 0),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: l.CLAN_WILDCARD_PLACEHOLDERS["0"]
      }), (0, n.jsx)(s.TextInput, {
        inputClassName: i()(d.input, d.wildcardInput),
        value: r[1],
        onChange: e => u(e, 1),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: l.CLAN_WILDCARD_PLACEHOLDERS["1"]
      }), (0, n.jsx)(s.TextInput, {
        inputClassName: i()(d.input, d.wildcardInput),
        value: r[2],
        onChange: e => u(e, 2),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: l.CLAN_WILDCARD_PLACEHOLDERS["2"]
      })]
    })]
  })
}
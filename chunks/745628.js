"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("481060"),
  l = n("308083"),
  o = n("689938"),
  d = n("418571");
t.default = e => {
  let {
    handleUpdate: t,
    description: n,
    wildcardDescriptors: i,
    errors: c
  } = e, u = (e, n) => {
    let a = [...i];
    a[n] = e, t({
      wildcardDescriptors: a
    })
  };
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: o.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == c ? void 0 : c.description) != null && (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: c.description
    }), (0, a.jsx)(s.TextArea, {
      className: d.input,
      maxLength: 160,
      onChange: e => t({
        description: e
      }),
      value: n,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: o.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    }), (0, a.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: d.optionalTag,
      children: o.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.title,
      children: o.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == c ? void 0 : c.wildcardDescriptors) != null && (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: c.wildcardDescriptors
    }), (0, a.jsxs)("div", {
      className: d.wildcardRow,
      children: [(0, a.jsx)(s.TextInput, {
        inputClassName: r()(d.input, d.wildcardInput),
        value: i[0],
        onChange: e => u(e, 0),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, a.jsx)(s.TextInput, {
        inputClassName: r()(d.input, d.wildcardInput),
        value: i[1],
        onChange: e => u(e, 1),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, a.jsx)(s.TextInput, {
        inputClassName: r()(d.input, d.wildcardInput),
        value: i[2],
        onChange: e => u(e, 2),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: o.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      })]
    })]
  })
}
"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("689938"),
  i = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    description: a,
    wildcardDescriptors: r,
    errors: o
  } = e, u = (e, a) => {
    let n = [...r];
    n[a] = e, t({
      wildcardDescriptors: n
    })
  };
  return (0, n.jsxs)("div", {
    className: i.slideContent,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: i.title,
      children: l.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: i.subtitle,
      children: l.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), null != o.description && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: i.errorText,
      children: o.description
    }), (0, n.jsx)(s.TextArea, {
      className: i.input,
      maxLength: 160,
      onChange: e => t({
        description: e
      }),
      value: a,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: l.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: i.optionalTag,
      children: l.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: i.title,
      children: l.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), null != o.wildcardDescriptors && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: i.errorText,
      children: o.wildcardDescriptors
    }), (0, n.jsxs)("div", {
      className: i.wildcardRow,
      children: [(0, n.jsx)(s.TextInput, {
        className: i.input,
        inputClassName: i.wildcardInput,
        value: r[0],
        onChange: e => u(e, 0),
        maxLength: 20,
        placeholder: l.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, n.jsx)(s.TextInput, {
        className: i.input,
        inputClassName: i.wildcardInput,
        value: r[1],
        onChange: e => u(e, 1),
        maxLength: 20,
        placeholder: l.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, n.jsx)(s.TextInput, {
        className: i.input,
        inputClassName: i.wildcardInput,
        value: r[2],
        onChange: e => u(e, 2),
        maxLength: 20,
        placeholder: l.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      })]
    })]
  })
}
"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("689938"),
  o = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    description: n,
    wildcardDescriptors: s,
    errors: u
  } = e, d = (e, n) => {
    let a = [...s];
    a[n] = e, t({
      wildcardDescriptors: a
    })
  };
  return (0, a.jsxs)("div", {
    className: o.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: o.title,
      children: r.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: o.subtitle,
      children: r.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == u ? void 0 : u.description) != null && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: o.errorText,
      children: u.description
    }), (0, a.jsx)(i.TextArea, {
      className: o.input,
      maxLength: 160,
      onChange: e => t({
        description: e
      }),
      value: n,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: r.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: o.optionalTag,
      children: r.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: o.title,
      children: r.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == u ? void 0 : u.wildcardDescriptors) != null && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: o.errorText,
      children: u.wildcardDescriptors
    }), (0, a.jsxs)("div", {
      className: o.wildcardRow,
      children: [(0, a.jsx)(i.TextInput, {
        inputClassName: l()(o.input, o.wildcardInput),
        value: s[0],
        onChange: e => d(e, 0),
        maxLength: 20,
        placeholder: r.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, a.jsx)(i.TextInput, {
        inputClassName: l()(o.input, o.wildcardInput),
        value: s[1],
        onChange: e => d(e, 1),
        maxLength: 20,
        placeholder: r.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      }), (0, a.jsx)(i.TextInput, {
        inputClassName: l()(o.input, o.wildcardInput),
        value: s[2],
        onChange: e => d(e, 2),
        maxLength: 20,
        placeholder: r.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
      })]
    })]
  })
}
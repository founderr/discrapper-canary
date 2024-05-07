"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("481060"),
  l = s("308083"),
  _ = s("689938"),
  r = s("418571");
t.default = e => {
  let {
    handleUpdate: t,
    description: s,
    wildcardDescriptors: n,
    errors: u
  } = e, o = (e, s) => {
    let a = [...n];
    a[s] = e, t({
      wildcardDescriptors: a
    })
  };
  return (0, a.jsxs)("div", {
    className: r.slideContent,
    children: [(0, a.jsx)(E.Heading, {
      variant: "heading-xxl/medium",
      className: r.title,
      children: _.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: r.subtitle,
      children: _.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == u ? void 0 : u.description) != null && (0, a.jsx)(E.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: r.errorText,
      children: u.description
    }), (0, a.jsx)("div", {
      className: r.maxWidthContainer,
      children: (0, a.jsx)(E.TextArea, {
        className: r.input,
        maxLength: 160,
        onChange: e => t({
          description: e
        }),
        value: s,
        rows: 5,
        autoFocus: !0,
        autosize: !0,
        placeholder: _.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
      })
    }), (0, a.jsx)(E.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: r.optionalTag,
      children: _.default.Messages.CLAN_SETUP_OPTIONAL
    }), (0, a.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: r.title,
      children: _.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
    }), (null == u ? void 0 : u.wildcardDescriptors) != null && (0, a.jsx)(E.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: r.errorText,
      children: u.wildcardDescriptors
    }), (0, a.jsxs)("div", {
      className: r.wildcardRow,
      children: [(0, a.jsx)(E.TextInput, {
        inputClassName: i()(r.input, r.wildcardInput),
        value: n[0],
        onChange: e => o(e, 0),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: l.CLAN_SETUP_TAG_PLACEHOLDERS["0"]
      }), (0, a.jsx)(E.TextInput, {
        inputClassName: i()(r.input, r.wildcardInput),
        value: n[1],
        onChange: e => o(e, 1),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: l.CLAN_SETUP_TAG_PLACEHOLDERS["1"]
      }), (0, a.jsx)(E.TextInput, {
        inputClassName: i()(r.input, r.wildcardInput),
        value: n[2],
        onChange: e => o(e, 2),
        maxLength: l.MAX_WILDCARD_LENGTH,
        placeholder: l.CLAN_SETUP_TAG_PLACEHOLDERS["2"]
      })]
    })]
  })
}
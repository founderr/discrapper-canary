"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("481060"),
  l = a("18100"),
  o = a("308083"),
  d = a("689938"),
  c = a("661926");
t.default = e => {
  var t, a, r;
  let {
    guildId: u,
    handleUpdate: f,
    progress: m,
    errors: E
  } = e, {
    wildcardDescriptors: h,
    description: T
  } = m, _ = (e, t) => {
    let a = [...h];
    a[t] = e, f({
      wildcardDescriptors: a
    })
  };
  return (0, n.jsxs)("div", {
    className: c.slideContent,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: d.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: d.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == E ? void 0 : E.description) != null && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: E.description
    }), (0, n.jsxs)("div", {
      className: c.content,
      children: [(0, n.jsxs)("div", {
        className: c.mainPanelContainer,
        children: [(0, n.jsx)("div", {
          className: c.maxWidthContainer,
          children: (0, n.jsx)(s.TextArea, {
            className: c.input,
            maxLength: o.MAX_DESCRIPTION_LENGTH,
            onChange: e => f({
              description: e
            }),
            value: null != T ? T : "",
            rows: 5,
            autoFocus: !0,
            autosize: !0,
            placeholder: d.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
          })
        }), (0, n.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: c.optionalTag,
          children: d.default.Messages.CLAN_SETUP_OPTIONAL
        }), (0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: c.title,
          children: d.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
        }), (null == E ? void 0 : E.wildcardDescriptors) != null && (0, n.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: c.errorText,
          children: E.wildcardDescriptors
        }), (0, n.jsxs)("div", {
          className: c.wildcardRow,
          children: [(0, n.jsx)(s.TextInput, {
            inputClassName: i()(c.input, c.wildcardInput),
            value: null !== (t = h[0]) && void 0 !== t ? t : "",
            onChange: e => _(e, 0),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["0"]
          }), (0, n.jsx)(s.TextInput, {
            inputClassName: i()(c.input, c.wildcardInput),
            value: null !== (a = h[1]) && void 0 !== a ? a : "",
            onChange: e => _(e, 1),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["1"]
          }), (0, n.jsx)(s.TextInput, {
            inputClassName: i()(c.input, c.wildcardInput),
            value: null !== (r = h[2]) && void 0 !== r ? r : "",
            onChange: e => _(e, 2),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["2"]
          })]
        })]
      }), (0, n.jsx)("div", {
        className: c.fixedWidthSidebar,
        children: (0, n.jsx)(l.default, {
          guildId: u,
          progress: m,
          maskTraits: !0
        })
      })]
    })]
  })
}
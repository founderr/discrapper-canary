"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("481060"),
  l = n("18100"),
  o = n("308083"),
  c = n("689938"),
  d = n("661926");
t.default = e => {
  var t, n, r;
  let {
    guildId: u,
    handleUpdate: f,
    progress: m,
    errors: h
  } = e, {
    wildcardDescriptors: E,
    description: p
  } = m, C = (e, t) => {
    let n = [...E];
    n[t] = e, f({
      wildcardDescriptors: n
    })
  };
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: c.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: c.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == h ? void 0 : h.description) != null && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: h.description
    }), (0, a.jsxs)("div", {
      className: d.content,
      children: [(0, a.jsxs)("div", {
        className: d.mainPanelContainer,
        children: [(0, a.jsx)("div", {
          className: d.maxWidthContainer,
          children: (0, a.jsx)(i.TextArea, {
            className: d.input,
            maxLength: o.MAX_DESCRIPTION_LENGTH,
            onChange: e => f({
              description: e
            }),
            value: null != p ? p : "",
            rows: 5,
            autoFocus: !0,
            autosize: !0,
            placeholder: c.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
          })
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: d.optionalTag,
          children: c.default.Messages.CLAN_SETUP_OPTIONAL
        }), (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: d.title,
          children: c.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
        }), (null == h ? void 0 : h.wildcardDescriptors) != null && (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: d.errorText,
          children: h.wildcardDescriptors
        }), (0, a.jsxs)("div", {
          className: d.wildcardRow,
          children: [(0, a.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: null !== (t = E[0]) && void 0 !== t ? t : "",
            onChange: e => C(e, 0),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["0"]
          }), (0, a.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: null !== (n = E[1]) && void 0 !== n ? n : "",
            onChange: e => C(e, 1),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["1"]
          }), (0, a.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: null !== (r = E[2]) && void 0 !== r ? r : "",
            onChange: e => C(e, 2),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["2"]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: d.fixedWidthSidebar,
        children: (0, a.jsx)(l.default, {
          guildId: u,
          progress: m,
          maskTraits: !0
        })
      })]
    })]
  })
}
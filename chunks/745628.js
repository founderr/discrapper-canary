t(47120);
var a = t(735250);
t(470079);
var r = t(120356),
  s = t.n(r),
  i = t(481060),
  l = t(18100),
  o = t(308083),
  c = t(689938),
  d = t(360884);
n.Z = e => {
  var n, t, r;
  let {
    guildId: u,
    handleUpdate: m,
    progress: h,
    errors: C
  } = e, {
    wildcardDescriptors: x,
    description: f
  } = h, E = (e, n) => {
    let t = [...x];
    t[n] = e, m({
      wildcardDescriptors: t
    })
  };
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: c.Z.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: c.Z.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == C ? void 0 : C.description) != null && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: C.description
    }), (0, a.jsxs)("div", {
      className: d.content,
      children: [(0, a.jsxs)("div", {
        className: d.mainPanelContainer,
        children: [(0, a.jsx)("div", {
          className: d.maxWidthContainer,
          children: (0, a.jsx)(i.TextArea, {
            className: d.input,
            maxLength: o.Us,
            onChange: e => m({
              description: e
            }),
            value: null != f ? f : "",
            rows: 5,
            autoFocus: !0,
            autosize: !0,
            placeholder: c.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
          })
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: d.optionalTag,
          children: c.Z.Messages.CLAN_SETUP_OPTIONAL
        }), (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: d.title,
          children: c.Z.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
        }), (null == C ? void 0 : C.wildcardDescriptors) != null && (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: d.errorText,
          children: C.wildcardDescriptors
        }), (0, a.jsxs)("div", {
          className: d.wildcardRow,
          children: [(0, a.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: null !== (n = x[0]) && void 0 !== n ? n : "",
            onChange: e => E(e, 0),
            maxLength: o.TY,
            placeholder: o.LK["0"]
          }), (0, a.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: null !== (t = x[1]) && void 0 !== t ? t : "",
            onChange: e => E(e, 1),
            maxLength: o.TY,
            placeholder: o.LK["1"]
          }), (0, a.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: null !== (r = x[2]) && void 0 !== r ? r : "",
            onChange: e => E(e, 2),
            maxLength: o.TY,
            placeholder: o.LK["2"]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: d.fixedWidthSidebar,
        children: (0, a.jsx)(l.Z, {
          guildId: u,
          progress: h,
          maskTraits: !0
        })
      })]
    })]
  })
}
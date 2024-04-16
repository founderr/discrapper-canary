"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("689938"),
  i = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    description: a,
    error: r
  } = e;
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
    }), null != r && (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: i.errorText,
      children: r
    }), (0, n.jsx)(s.TextArea, {
      maxLength: 120,
      onChange: e => t({
        description: e
      }),
      value: a,
      rows: 5,
      autoFocus: !0,
      autosize: !0,
      placeholder: l.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
    })]
  })
}
"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("206017"),
  i = a("689938"),
  r = a("674593");
t.default = e => {
  let {
    hasHub: t
  } = e;
  return (0, n.jsxs)("div", {
    className: r.container,
    children: [(0, n.jsx)("div", {
      className: r.iconContainer,
      children: (0, n.jsx)(l.default, {
        color: s.tokens.colors.WHITE.css
      })
    }), (0, n.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-lg/semibold",
      className: r.header,
      children: t ? i.default.Messages.HUB_EMAIL_CONNECTION_ADD_HEADER : i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_HEADER
    }), (0, n.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: r.__invalid_description,
      children: t ? i.default.Messages.HUB_EMAIL_CONNECTION_ADD_DESCRIPTION : i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_CARD_DESCRIPTION
    }), (0, n.jsx)("div", {
      className: r.gap
    }), (0, n.jsx)(s.Button, {
      size: s.Button.Sizes.LARGE,
      color: t ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
      onClick: () => (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "650233"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      }),
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/semibold",
        className: r.addButton,
        color: "none",
        children: t ? i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_ANOTHER : i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_MY_SCHOOOL
      })
    })]
  })
}
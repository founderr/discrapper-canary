var s = n(735250);
n(470079);
var i = n(481060),
  l = n(689938),
  a = n(226988);
t.Z = e => {
  let {
    hasHub: t
  } = e;
  return (0, s.jsxs)("div", {
    className: a.container,
    children: [(0, s.jsx)("div", {
      className: a.iconContainer,
      children: (0, s.jsx)(i.HubIcon, {
        size: "md",
        color: i.tokens.colors.WHITE.css
      })
    }), (0, s.jsx)(i.Text, {
      color: "header-primary",
      variant: "text-lg/semibold",
      className: a.header,
      children: t ? l.Z.Messages.HUB_EMAIL_CONNECTION_ADD_HEADER : l.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_HEADER
    }), (0, s.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: a.__invalid_description,
      children: t ? l.Z.Messages.HUB_EMAIL_CONNECTION_ADD_DESCRIPTION : l.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_CARD_DESCRIPTION
    }), (0, s.jsx)("div", {
      className: a.gap
    }), (0, s.jsx)(i.Button, {
      size: i.Button.Sizes.LARGE,
      color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.GREEN,
      onClick: () => (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 650233));
        return t => (0, s.jsx)(e, {
          ...t
        })
      }),
      children: (0, s.jsx)(i.Text, {
        variant: "text-sm/semibold",
        className: a.addButton,
        color: "none",
        children: t ? l.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_ANOTHER : l.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_MY_SCHOOOL
      })
    })]
  })
}
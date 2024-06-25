var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(785681),
  o = s(231994),
  c = s(689938),
  E = s(114802),
  _ = s(331651);
let u = e => {
  let {
    header: t,
    description: s,
    icon: a,
    inModal: l
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(E.row, _.marginBottom8, {
      [E.inModal]: l
    }),
    children: [(0, n.jsx)("div", {
      className: E.iconContainer,
      children: a
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.Text, {
        className: E.header,
        variant: "text-sm/bold",
        color: "header-primary",
        children: t
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    })]
  })
};
t.Z = e => {
  let {
    inModal: t
  } = e, s = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT), a = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT), i = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT), _ = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(r.Text, {
      className: E.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: s
    }), (0, n.jsx)(u, {
      header: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
      description: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
      icon: (0, n.jsx)(r.FriendsIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: r.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, n.jsx)(u, {
      header: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
      description: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
      icon: (0, n.jsx)(r.ServerGridIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: r.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, n.jsx)(u, {
      header: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
      description: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
      icon: (0, n.jsx)(o.Z, {
        width: 20,
        height: 20,
        color: r.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, n.jsx)(r.Text, {
      className: E.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: a
    }), (0, n.jsx)(u, {
      header: i,
      description: _,
      icon: (0, n.jsx)(r.CloseSmallIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: r.tokens.colors.WHITE.css
      }),
      inModal: t
    })]
  })
}
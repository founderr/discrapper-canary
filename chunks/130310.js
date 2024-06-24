var s = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  l = n(481060),
  r = n(785681),
  c = n(231994),
  o = n(689938),
  d = n(114802),
  u = n(331651);
let E = e => {
  let {
    header: t,
    description: n,
    icon: i,
    inModal: r
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(d.row, u.marginBottom8, {
      [d.inModal]: r
    }),
    children: [(0, s.jsx)("div", {
      className: d.iconContainer,
      children: i
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(l.Text, {
        className: d.header,
        variant: "text-sm/bold",
        color: "header-primary",
        children: t
      }), (0, s.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: n
      })]
    })]
  })
};
t.Z = e => {
  let {
    inModal: t
  } = e, n = (0, r.o)(o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT), i = (0, r.o)(o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT), a = (0, r.o)(o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT), u = (0, r.o)(o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(l.Text, {
      className: d.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: n
    }), (0, s.jsx)(E, {
      header: o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
      description: o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
      icon: (0, s.jsx)(l.FriendsIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, s.jsx)(E, {
      header: o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
      description: o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
      icon: (0, s.jsx)(l.ServerGridIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, s.jsx)(E, {
      header: o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
      description: o.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
      icon: (0, s.jsx)(c.Z, {
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, s.jsx)(l.Text, {
      className: d.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: i
    }), (0, s.jsx)(E, {
      header: a,
      description: u,
      icon: (0, s.jsx)(l.CloseSmallIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    })]
  })
}
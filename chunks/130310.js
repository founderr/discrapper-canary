"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("465670"),
  o = a("705077"),
  u = a("988951"),
  d = a("785681"),
  c = a("231994"),
  f = a("689938"),
  E = a("6102"),
  h = a("949086");
let _ = e => {
  let {
    header: t,
    description: a,
    icon: s,
    inModal: r
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(E.row, h.marginBottom8, {
      [E.inModal]: r
    }),
    children: [(0, n.jsx)("div", {
      className: E.iconContainer,
      children: s
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(i.Text, {
        className: E.header,
        variant: "text-sm/bold",
        color: "header-primary",
        children: t
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: a
      })]
    })]
  })
};
t.default = e => {
  let {
    inModal: t
  } = e, a = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT), s = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT), l = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT), h = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(i.Text, {
      className: E.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: a
    }), (0, n.jsx)(_, {
      header: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
      description: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
      icon: (0, n.jsx)(u.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, n.jsx)(_, {
      header: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
      description: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
      icon: (0, n.jsx)(o.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, n.jsx)(_, {
      header: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
      description: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
      icon: (0, n.jsx)(c.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, n.jsx)(i.Text, {
      className: E.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: s
    }), (0, n.jsx)(_, {
      header: l,
      description: h,
      icon: (0, n.jsx)(r.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    })]
  })
}
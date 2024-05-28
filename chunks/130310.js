"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("465670"),
  u = s("705077"),
  o = s("988951"),
  d = s("785681"),
  c = s("231994"),
  E = s("689938"),
  _ = s("720077"),
  f = s("611273");
let h = e => {
  let {
    header: t,
    description: s,
    icon: n,
    inModal: r
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(_.row, f.marginBottom8, {
      [_.inModal]: r
    }),
    children: [(0, a.jsx)("div", {
      className: _.iconContainer,
      children: n
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Text, {
        className: _.header,
        variant: "text-sm/bold",
        color: "header-primary",
        children: t
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: s
      })]
    })]
  })
};
t.default = e => {
  let {
    inModal: t
  } = e, s = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT), n = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT), l = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT), f = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Text, {
      className: _.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: s
    }), (0, a.jsx)(h, {
      header: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
      description: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
      icon: (0, a.jsx)(o.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(h, {
      header: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
      description: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
      icon: (0, a.jsx)(u.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(h, {
      header: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
      description: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
      icon: (0, a.jsx)(c.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(i.Text, {
      className: _.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: n
    }), (0, a.jsx)(h, {
      header: l,
      description: f,
      icon: (0, a.jsx)(r.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    })]
  })
}
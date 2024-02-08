"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
});
var n = a("37983");
a("884691");
var l = a("414456"),
  s = a.n(l),
  i = a("77078"),
  r = a("145079"),
  u = a("618927"),
  o = a("158998"),
  c = a("777003"),
  d = a("782340"),
  f = a("119111");

function T(e) {
  let {
    user: t,
    shouldCopyOnClick: a,
    nickname: l,
    pronouns: T,
    usernameIcon: E,
    identityCTA: m,
    className: S,
    isTryItOut: A = !1,
    lastSection: g
  } = e;
  return (0, n.jsx)(c.default, {
    className: s(f.container, S),
    lastSection: g,
    children: (0, n.jsxs)("div", {
      className: a ? f.copiableNameTag : void 0,
      children: [(0, n.jsx)(u.CopiableField, {
        className: f.copiableField,
        copyMetaData: "User Tag",
        copyTooltip: d.default.Messages.ACCOUNT_CLICK_TO_COPY,
        copyValue: o.default.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !a,
        children: (0, n.jsxs)("div", {
          className: f.userText,
          children: [null != l ? (0, n.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: f.nickname,
            children: l
          }) : null, (0, n.jsx)(r.default, {
            usernameIcon: E,
            user: t,
            forceUsername: !0,
            forcePomelo: A,
            className: null == l ? f.userTagNoNickname : f.userTagWithNickname,
            usernameClass: null == l ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
            discriminatorClass: null == l ? f.userTagDiscriminatorNoNickname : f.discrimBase,
            botClass: null == l ? f.headerBotTag : f.headerBotTagWithNickname
          }), m]
        })
      }), null != T && "" !== T && (0, n.jsx)(i.Tooltip, {
        text: d.default.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, n.jsx)(i.Text, {
          ...e,
          variant: "text-sm/normal",
          className: f.pronouns,
          children: T
        })
      })]
    })
  })
}
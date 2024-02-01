"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
});
var l = a("37983");
a("884691");
var n = a("414456"),
  s = a.n(n),
  i = a("77078"),
  r = a("145079"),
  u = a("123377"),
  o = a("158998"),
  c = a("777003"),
  d = a("782340"),
  f = a("119111");

function T(e) {
  let {
    user: t,
    shouldCopyOnClick: a,
    nickname: n,
    pronouns: T,
    usernameIcon: E,
    identityCTA: A,
    className: _,
    isTryItOut: S = !1,
    lastSection: m
  } = e;
  return (0, l.jsx)(c.default, {
    className: s(f.container, _),
    lastSection: m,
    children: (0, l.jsxs)("div", {
      className: a ? f.copiableNameTag : void 0,
      children: [(0, l.jsx)(u.CopiableField, {
        className: f.copiableField,
        copyMetaData: "User Tag",
        copyValue: o.default.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !a,
        children: (0, l.jsxs)("div", {
          className: f.userText,
          children: [null != n ? (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: f.nickname,
            children: n
          }) : null, (0, l.jsx)(r.default, {
            usernameIcon: E,
            user: t,
            forceUsername: !0,
            forcePomelo: S,
            className: null == n ? f.userTagNoNickname : f.userTagWithNickname,
            usernameClass: null == n ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
            discriminatorClass: null == n ? f.userTagDiscriminatorNoNickname : f.discrimBase,
            botClass: null == n ? f.headerBotTag : f.headerBotTagWithNickname
          }), A]
        })
      }), null != T && "" !== T && (0, l.jsx)(i.Tooltip, {
        text: d.default.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, l.jsx)(i.Text, {
          ...e,
          variant: "text-sm/normal",
          className: f.pronouns,
          children: T
        })
      })]
    })
  })
}
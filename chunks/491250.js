"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  i = l("77078"),
  r = l("145079"),
  u = l("123377"),
  o = l("158998"),
  c = l("777003"),
  d = l("782340"),
  f = l("119111");

function T(e) {
  let {
    user: t,
    shouldCopyOnClick: l,
    nickname: n,
    pronouns: T,
    usernameIcon: E,
    identityCTA: A,
    className: _,
    isTryItOut: S = !1,
    lastSection: m
  } = e;
  return (0, a.jsx)(c.default, {
    className: s(f.container, _),
    lastSection: m,
    children: (0, a.jsxs)("div", {
      className: l ? f.copiableNameTag : void 0,
      children: [(0, a.jsx)(u.CopiableField, {
        className: f.copiableField,
        copyMetaData: "User Tag",
        copyValue: o.default.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !l,
        children: (0, a.jsxs)("div", {
          className: f.userText,
          children: [null != n ? (0, a.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: f.nickname,
            children: n
          }) : null, (0, a.jsx)(r.default, {
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
      }), null != T && "" !== T && (0, a.jsx)(i.Tooltip, {
        text: d.default.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, a.jsx)(i.Text, {
          ...e,
          variant: "text-sm/normal",
          className: f.pronouns,
          children: T
        })
      })]
    })
  })
}
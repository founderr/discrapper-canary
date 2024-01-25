"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("145079"),
  u = n("123377"),
  o = n("158998"),
  c = n("777003"),
  d = n("782340"),
  f = n("119111");

function T(e) {
  let {
    user: t,
    shouldCopyOnClick: n,
    nickname: a,
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
      className: n ? f.copiableNameTag : void 0,
      children: [(0, l.jsx)(u.CopiableField, {
        className: f.copiableField,
        copyMetaData: "User Tag",
        copyValue: o.default.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !n,
        children: (0, l.jsxs)("div", {
          className: f.userText,
          children: [null != a ? (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: f.nickname,
            children: a
          }) : null, (0, l.jsx)(r.default, {
            usernameIcon: E,
            user: t,
            forceUsername: !0,
            forcePomelo: S,
            className: null == a ? f.userTagNoNickname : f.userTagWithNickname,
            usernameClass: null == a ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
            discriminatorClass: null == a ? f.userTagDiscriminatorNoNickname : f.discrimBase,
            botClass: null == a ? f.headerBotTag : f.headerBotTagWithNickname
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
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var r = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("77078"),
  i = l("145079"),
  o = l("618927"),
  u = l("158998"),
  d = l("777003"),
  c = l("782340"),
  f = l("119111");

function T(e) {
  let {
    user: t,
    shouldCopyOnClick: l,
    nickname: a,
    pronouns: T,
    usernameIcon: p,
    identityCTA: m,
    className: E,
    isTryItOut: P = !1,
    lastSection: S
  } = e;
  return (0, r.jsx)(d.default, {
    className: n(f.container, E),
    lastSection: S,
    children: (0, r.jsxs)("div", {
      className: l ? f.copiableNameTag : void 0,
      children: [(0, r.jsx)(o.CopiableField, {
        className: f.copiableField,
        copyMetaData: "User Tag",
        copyTooltip: c.default.Messages.ACCOUNT_CLICK_TO_COPY,
        copyValue: u.default.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !l,
        children: (0, r.jsxs)("div", {
          className: f.userText,
          children: [null != a ? (0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            className: f.nickname,
            children: a
          }) : null, (0, r.jsx)(i.default, {
            usernameIcon: p,
            user: t,
            forceUsername: !0,
            forcePomelo: P,
            className: null == a ? f.userTagNoNickname : f.userTagWithNickname,
            usernameClass: null == a ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
            discriminatorClass: null == a ? f.userTagDiscriminatorNoNickname : f.discrimBase,
            botClass: null == a ? f.headerBotTag : f.headerBotTagWithNickname
          }), m]
        })
      }), null != T && "" !== T && (0, r.jsx)(s.Tooltip, {
        text: c.default.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, r.jsx)(s.Text, {
          ...e,
          variant: "text-sm/normal",
          className: f.pronouns,
          children: T
        })
      })]
    })
  })
}
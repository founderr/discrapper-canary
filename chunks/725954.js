"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  i = s.n(l),
  n = s("442837"),
  o = s("481060"),
  r = s("129861"),
  u = s("427217"),
  d = s("158776"),
  c = s("51144"),
  f = s("981631"),
  S = s("689938"),
  E = s("968030");

function I(e) {
  let {
    user: t,
    displayProfile: s
  } = e, l = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), I = c.default.getName(t);
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [null == I && (0, a.jsx)(r.default, {
      user: t,
      className: E.nameTag,
      usernameClass: E.username,
      discriminatorClass: E.discriminator
    }), null != I && (0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: I
      }), (0, a.jsx)(r.default, {
        user: t,
        forceUsername: !0,
        usernameClass: E.discriminator,
        discriminatorClass: E.discriminator,
        className: i()(E.nameTag, E.nameTagSmall)
      })]
    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, a.jsx)(o.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, a.jsx)(o.Text, {
        ...e,
        variant: "text-sm/normal",
        className: i()(E.pronouns, E.nameTagSmall),
        children: s.pronouns
      })
    }), null != l ? (0, a.jsx)("div", {
      className: E.__invalid_customStatusActivity,
      children: (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: E.customStatusText,
        children: (0, a.jsx)(u.default, {
          activity: l,
          className: E.customStatus,
          emojiClassName: E.customStatusEmoji,
          soloEmojiClassName: E.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}
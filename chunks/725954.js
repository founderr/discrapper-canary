"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var l = s("735250");
s("470079");
var a = s("120356"),
  i = s.n(a),
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
  } = e, a = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), I = c.default.getName(t);
  return (0, l.jsxs)("div", {
    className: E.container,
    children: [null == I && (0, l.jsx)(r.default, {
      user: t,
      className: E.nameTag,
      usernameClass: E.username,
      discriminatorClass: E.discriminator
    }), null != I && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: I
      }), (0, l.jsx)(r.default, {
        user: t,
        forceUsername: !0,
        usernameClass: E.discriminator,
        discriminatorClass: E.discriminator,
        className: i()(E.nameTag, E.nameTagSmall)
      })]
    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, l.jsx)(o.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, l.jsx)(o.Text, {
        ...e,
        variant: "text-sm/normal",
        className: i()(E.pronouns, E.nameTagSmall),
        children: s.pronouns
      })
    }), null != a ? (0, l.jsx)("div", {
      className: E.__invalid_customStatusActivity,
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: E.customStatusText,
        children: (0, l.jsx)(u.default, {
          activity: a,
          className: E.customStatus,
          emojiClassName: E.customStatusEmoji,
          soloEmojiClassName: E.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}
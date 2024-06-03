"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var s = l("735250");
l("470079");
var a = l("120356"),
  i = l.n(a),
  n = l("442837"),
  r = l("481060"),
  o = l("129861"),
  u = l("427217"),
  d = l("158776"),
  c = l("51144"),
  f = l("981631"),
  S = l("689938"),
  E = l("809842");

function I(e) {
  let {
    user: t,
    displayProfile: l
  } = e, a = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), I = c.default.getName(t);
  return (0, s.jsxs)("div", {
    className: E.container,
    children: [null == I && (0, s.jsx)(o.default, {
      user: t,
      className: E.nameTag,
      usernameClass: E.username,
      discriminatorClass: E.discriminator
    }), null != I && (0, s.jsxs)("div", {
      children: [(0, s.jsx)(r.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: I
      }), (0, s.jsx)(o.default, {
        user: t,
        forceUsername: !0,
        usernameClass: E.discriminator,
        discriminatorClass: E.discriminator,
        className: i()(E.nameTag, E.nameTagSmall)
      })]
    }), (null == l ? void 0 : l.pronouns) != null && (null == l ? void 0 : l.pronouns) !== "" && (0, s.jsx)(r.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, s.jsx)(r.Text, {
        ...e,
        variant: "text-sm/normal",
        className: i()(E.pronouns, E.nameTagSmall),
        children: l.pronouns
      })
    }), null != a ? (0, s.jsx)("div", {
      className: E.__invalid_customStatusActivity,
      children: (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: E.customStatusText,
        children: (0, s.jsx)(u.default, {
          activity: a,
          className: E.customStatus,
          emojiClassName: E.customStatusEmoji,
          soloEmojiClassName: E.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}
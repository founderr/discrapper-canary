"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var s = l("735250");
l("470079");
var i = l("120356"),
  a = l.n(i),
  n = l("442837"),
  o = l("481060"),
  r = l("129861"),
  u = l("427217"),
  d = l("158776"),
  c = l("51144"),
  f = l("981631"),
  S = l("689938"),
  I = l("809842");

function E(e) {
  let {
    user: t,
    displayProfile: l
  } = e, i = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), E = c.default.getName(t);
  return (0, s.jsxs)("div", {
    className: I.container,
    children: [null == E && (0, s.jsx)(r.default, {
      user: t,
      className: I.nameTag,
      usernameClass: I.username,
      discriminatorClass: I.discriminator
    }), null != E && (0, s.jsxs)("div", {
      children: [(0, s.jsx)(o.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: E
      }), (0, s.jsx)(r.default, {
        user: t,
        forceUsername: !0,
        usernameClass: I.discriminator,
        discriminatorClass: I.discriminator,
        className: a()(I.nameTag, I.nameTagSmall)
      })]
    }), (null == l ? void 0 : l.pronouns) != null && (null == l ? void 0 : l.pronouns) !== "" && (0, s.jsx)(o.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, s.jsx)(o.Text, {
        ...e,
        variant: "text-sm/normal",
        className: a()(I.pronouns, I.nameTagSmall),
        children: l.pronouns
      })
    }), null != i ? (0, s.jsx)("div", {
      className: I.__invalid_customStatusActivity,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: I.customStatusText,
        children: (0, s.jsx)(u.default, {
          activity: i,
          className: I.customStatus,
          emojiClassName: I.customStatusEmoji,
          soloEmojiClassName: I.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}
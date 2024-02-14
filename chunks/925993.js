"use strict";
s.r(t), s.d(t, {
  getVerificationLevelText: function() {
    return T
  },
  default: function() {
    return S
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("669491"),
  i = s("77078"),
  r = s("957255"),
  o = s("556081"),
  d = s("216947"),
  u = s("987772"),
  c = s("192918"),
  E = s("49111"),
  _ = s("782340"),
  I = s("935090");

function T(e) {
  switch (e) {
    case E.VerificationLevels.LOW:
      return _.default.Messages.VERIFICATION_LEVEL_LOW;
    case E.VerificationLevels.MEDIUM:
      return _.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case E.VerificationLevels.HIGH:
      return _.default.Messages.VERIFICATION_LEVEL_HIGH;
    case E.VerificationLevels.VERY_HIGH:
      return _.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let f = {
  [E.VerificationLevels.NONE]: "",
  [E.VerificationLevels.LOW]: n.default.unsafe_rawColors.GREEN_360.css,
  [E.VerificationLevels.MEDIUM]: n.default.unsafe_rawColors.YELLOW_300.css,
  [E.VerificationLevels.HIGH]: n.default.unsafe_rawColors.ORANGE_345.css,
  [E.VerificationLevels.VERY_HIGH]: n.default.unsafe_rawColors.RED_400.css
};
var S = function(e) {
  let {
    guild: t
  } = e, n = r.default.can(E.Permissions.MANAGE_GUILD, t), S = t.verificationLevel, m = S === E.VerificationLevels.VERY_HIGH ? d.default : o.default, N = l.useMemo(() => T(S), [S]), g = f[S], h = (0, a.jsx)("div", {
    className: I.verificationLevelTitle,
    children: _.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(i.Text, {
          className: I.verificationLevelHook,
          style: {
            color: g
          },
          variant: "text-sm/semibold",
          children: N
        }, "hook")
      }
    })
  }), C = S === E.VerificationLevels.VERY_HIGH ? _.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : _.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(c.default, {
    title: h,
    children: (0, a.jsxs)("div", {
      className: I.verificationContainer,
      children: [(0, a.jsx)(m, {
        width: 20,
        height: 20,
        className: I.icon
      }), (0, a.jsx)(i.Text, {
        className: I.guildVerificationText,
        variant: "text-sm/normal",
        children: C
      }), n && (0, a.jsx)(i.Clickable, {
        className: I.iconInteractiveContainer,
        onClick: () => (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("161069").then(s.bind(s, "161069"));
          return s => (0, a.jsx)(e, {
            ...s,
            guild: t
          })
        }),
        children: (0, a.jsx)(u.default, {
          width: 20,
          height: 20,
          className: I.iconInteractive
        })
      })]
    })
  })
}
"use strict";
s.r(t), s.d(t, {
  getVerificationLevelText: function() {
    return I
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("692547"),
  E = s("481060"),
  l = s("496675"),
  _ = s("916187"),
  r = s("736921"),
  u = s("185403"),
  o = s("484455"),
  T = s("981631"),
  d = s("689938"),
  A = s("915580");

function I(e) {
  switch (e) {
    case T.VerificationLevels.LOW:
      return d.default.Messages.VERIFICATION_LEVEL_LOW;
    case T.VerificationLevels.MEDIUM:
      return d.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case T.VerificationLevels.HIGH:
      return d.default.Messages.VERIFICATION_LEVEL_HIGH;
    case T.VerificationLevels.VERY_HIGH:
      return d.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let L = {
  [T.VerificationLevels.NONE]: "",
  [T.VerificationLevels.LOW]: i.default.unsafe_rawColors.GREEN_360.css,
  [T.VerificationLevels.MEDIUM]: i.default.unsafe_rawColors.YELLOW_300.css,
  [T.VerificationLevels.HIGH]: i.default.unsafe_rawColors.ORANGE_345.css,
  [T.VerificationLevels.VERY_HIGH]: i.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, i = l.default.can(T.Permissions.MANAGE_GUILD, t), c = t.verificationLevel, N = c === T.VerificationLevels.VERY_HIGH ? r.default : _.default, S = n.useMemo(() => I(c), [c]), g = L[c], D = (0, a.jsx)("div", {
    className: A.verificationLevelTitle,
    children: d.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(E.Text, {
          className: A.verificationLevelHook,
          style: {
            color: g
          },
          variant: "text-sm/semibold",
          children: S
        }, "hook")
      }
    })
  }), C = c === T.VerificationLevels.VERY_HIGH ? d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(o.default, {
    title: D,
    children: (0, a.jsxs)("div", {
      className: A.verificationContainer,
      children: [(0, a.jsx)(N, {
        width: 20,
        height: 20,
        className: A.icon
      }), (0, a.jsx)(E.Text, {
        className: A.guildVerificationText,
        variant: "text-sm/normal",
        children: C
      }), i && (0, a.jsx)(E.Clickable, {
        className: A.iconInteractiveContainer,
        onClick: () => (0, E.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("27933")]).then(s.bind(s, "694278"));
          return s => (0, a.jsx)(e, {
            ...s,
            guild: t
          })
        }),
        children: (0, a.jsx)(u.default, {
          width: 20,
          height: 20,
          className: A.iconInteractive
        })
      })]
    })
  })
}
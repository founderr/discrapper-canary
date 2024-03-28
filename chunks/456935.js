"use strict";
i.r(t), i.d(t, {
  getVerificationLevelText: function() {
    return T
  }
});
var a = i("735250"),
  l = i("470079"),
  n = i("692547"),
  s = i("481060"),
  r = i("496675"),
  o = i("916187"),
  d = i("736921"),
  c = i("185403"),
  u = i("484455"),
  f = i("981631"),
  E = i("689938"),
  I = i("482249");

function T(e) {
  switch (e) {
    case f.VerificationLevels.LOW:
      return E.default.Messages.VERIFICATION_LEVEL_LOW;
    case f.VerificationLevels.MEDIUM:
      return E.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case f.VerificationLevels.HIGH:
      return E.default.Messages.VERIFICATION_LEVEL_HIGH;
    case f.VerificationLevels.VERY_HIGH:
      return E.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let m = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: n.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: n.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: n.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: n.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, n = r.default.can(f.Permissions.MANAGE_GUILD, t), _ = t.verificationLevel, x = _ === f.VerificationLevels.VERY_HIGH ? d.default : o.default, h = l.useMemo(() => T(_), [_]), p = m[_], M = (0, a.jsx)("div", {
    className: I.verificationLevelTitle,
    children: E.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(s.Text, {
          className: I.verificationLevelHook,
          style: {
            color: p
          },
          variant: "text-sm/semibold",
          children: h
        }, "hook")
      }
    })
  }), R = _ === f.VerificationLevels.VERY_HIGH ? E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(u.default, {
    title: M,
    children: (0, a.jsxs)("div", {
      className: I.verificationContainer,
      children: [(0, a.jsx)(x, {
        width: 20,
        height: 20,
        className: I.icon
      }), (0, a.jsx)(s.Text, {
        className: I.guildVerificationText,
        variant: "text-sm/normal",
        children: R
      }), n && (0, a.jsx)(s.Clickable, {
        className: I.iconInteractiveContainer,
        onClick: () => (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("72458")]).then(i.bind(i, "694278"));
          return i => (0, a.jsx)(e, {
            ...i,
            guild: t
          })
        }),
        children: (0, a.jsx)(c.default, {
          width: 20,
          height: 20,
          className: I.iconInteractive
        })
      })]
    })
  })
}
"use strict";
a.r(t), a.d(t, {
  getVerificationLevelText: function() {
    return h
  }
});
var n = a("735250"),
  r = a("470079"),
  i = a("692547"),
  s = a("481060"),
  l = a("496675"),
  o = a("916187"),
  d = a("736921"),
  c = a("185403"),
  u = a("484455"),
  f = a("981631"),
  m = a("689938"),
  E = a("17359");

function h(e) {
  switch (e) {
    case f.VerificationLevels.LOW:
      return m.default.Messages.VERIFICATION_LEVEL_LOW;
    case f.VerificationLevels.MEDIUM:
      return m.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case f.VerificationLevels.HIGH:
      return m.default.Messages.VERIFICATION_LEVEL_HIGH;
    case f.VerificationLevels.VERY_HIGH:
      return m.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let T = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: i.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: i.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: i.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: i.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, i = l.default.can(f.Permissions.MANAGE_GUILD, t), _ = t.verificationLevel, C = _ === f.VerificationLevels.VERY_HIGH ? d.default : o.default, x = r.useMemo(() => h(_), [_]), p = T[_], I = (0, n.jsx)("div", {
    className: E.verificationLevelTitle,
    children: m.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, n.jsx)(s.Text, {
          className: E.verificationLevelHook,
          style: {
            color: p
          },
          variant: "text-sm/semibold",
          children: x
        }, "hook")
      }
    })
  }), g = _ === f.VerificationLevels.VERY_HIGH ? m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, n.jsx)(u.default, {
    title: I,
    children: (0, n.jsxs)("div", {
      className: E.verificationContainer,
      children: [(0, n.jsx)(C, {
        width: 20,
        height: 20,
        className: E.icon
      }), (0, n.jsx)(s.Text, {
        className: E.guildVerificationText,
        variant: "text-sm/normal",
        children: g
      }), i && (0, n.jsx)(s.Clickable, {
        className: E.iconInteractiveContainer,
        onClick: () => (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("27933")]).then(a.bind(a, "694278"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        }),
        children: (0, n.jsx)(c.default, {
          width: 20,
          height: 20,
          className: E.iconInteractive
        })
      })]
    })
  })
}
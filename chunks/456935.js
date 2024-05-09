"use strict";
n.r(t), n.d(t, {
  getVerificationLevelText: function() {
    return p
  }
});
var a = n("735250"),
  r = n("470079"),
  s = n("692547"),
  i = n("481060"),
  l = n("496675"),
  o = n("916187"),
  c = n("736921"),
  d = n("185403"),
  u = n("484455"),
  f = n("981631"),
  m = n("689938"),
  h = n("17359");

function p(e) {
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
let E = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: s.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: s.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: s.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: s.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, s = l.default.can(f.Permissions.MANAGE_GUILD, t), T = t.verificationLevel, C = T === f.VerificationLevels.VERY_HIGH ? c.default : o.default, x = r.useMemo(() => p(T), [T]), _ = E[T], g = (0, a.jsx)("div", {
    className: h.verificationLevelTitle,
    children: m.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(i.Text, {
          className: h.verificationLevelHook,
          style: {
            color: _
          },
          variant: "text-sm/semibold",
          children: x
        }, "hook")
      }
    })
  }), I = T === f.VerificationLevels.VERY_HIGH ? m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(u.default, {
    title: g,
    children: (0, a.jsxs)("div", {
      className: h.verificationContainer,
      children: [(0, a.jsx)(C, {
        width: 20,
        height: 20,
        className: h.icon
      }), (0, a.jsx)(i.Text, {
        className: h.guildVerificationText,
        variant: "text-sm/normal",
        children: I
      }), s && (0, a.jsx)(i.Clickable, {
        className: h.iconInteractiveContainer,
        onClick: () => (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("27933")]).then(n.bind(n, "694278"));
          return n => (0, a.jsx)(e, {
            ...n,
            guild: t
          })
        }),
        children: (0, a.jsx)(d.default, {
          width: 20,
          height: 20,
          className: h.iconInteractive
        })
      })]
    })
  })
}
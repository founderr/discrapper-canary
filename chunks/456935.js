"use strict";
a.r(t), a.d(t, {
  getVerificationLevelText: function() {
    return E
  }
});
var n = a("735250"),
  i = a("470079"),
  r = a("692547"),
  s = a("481060"),
  l = a("496675"),
  o = a("916187"),
  c = a("736921"),
  d = a("185403"),
  u = a("484455"),
  f = a("981631"),
  m = a("689938"),
  h = a("915580");

function E(e) {
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
  [f.VerificationLevels.LOW]: r.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: r.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: r.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: r.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, r = l.default.can(f.Permissions.MANAGE_GUILD, t), p = t.verificationLevel, _ = p === f.VerificationLevels.VERY_HIGH ? c.default : o.default, C = i.useMemo(() => E(p), [p]), g = T[p], x = (0, n.jsx)("div", {
    className: h.verificationLevelTitle,
    children: m.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, n.jsx)(s.Text, {
          className: h.verificationLevelHook,
          style: {
            color: g
          },
          variant: "text-sm/semibold",
          children: C
        }, "hook")
      }
    })
  }), I = p === f.VerificationLevels.VERY_HIGH ? m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, n.jsx)(u.default, {
    title: x,
    children: (0, n.jsxs)("div", {
      className: h.verificationContainer,
      children: [(0, n.jsx)(_, {
        width: 20,
        height: 20,
        className: h.icon
      }), (0, n.jsx)(s.Text, {
        className: h.guildVerificationText,
        variant: "text-sm/normal",
        children: I
      }), r && (0, n.jsx)(s.Clickable, {
        className: h.iconInteractiveContainer,
        onClick: () => (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("27933")]).then(a.bind(a, "694278"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        }),
        children: (0, n.jsx)(d.default, {
          width: 20,
          height: 20,
          className: h.iconInteractive
        })
      })]
    })
  })
}
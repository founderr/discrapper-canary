"use strict";
n.r(t), n.d(t, {
  getVerificationLevelText: function() {
    return E
  }
});
var a = n("735250"),
  i = n("470079"),
  r = n("692547"),
  s = n("481060"),
  l = n("496675"),
  o = n("916187"),
  d = n("736921"),
  c = n("185403"),
  u = n("484455"),
  f = n("981631"),
  m = n("689938"),
  h = n("915580");

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
  } = e, r = l.default.can(f.Permissions.MANAGE_GUILD, t), p = t.verificationLevel, _ = p === f.VerificationLevels.VERY_HIGH ? d.default : o.default, C = i.useMemo(() => E(p), [p]), g = T[p], x = (0, a.jsx)("div", {
    className: h.verificationLevelTitle,
    children: m.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(s.Text, {
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
  return (0, a.jsx)(u.default, {
    title: x,
    children: (0, a.jsxs)("div", {
      className: h.verificationContainer,
      children: [(0, a.jsx)(_, {
        width: 20,
        height: 20,
        className: h.icon
      }), (0, a.jsx)(s.Text, {
        className: h.guildVerificationText,
        variant: "text-sm/normal",
        children: I
      }), r && (0, a.jsx)(s.Clickable, {
        className: h.iconInteractiveContainer,
        onClick: () => (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("27933")]).then(n.bind(n, "694278"));
          return n => (0, a.jsx)(e, {
            ...n,
            guild: t
          })
        }),
        children: (0, a.jsx)(c.default, {
          width: 20,
          height: 20,
          className: h.iconInteractive
        })
      })]
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  getVerificationLevelText: function() {
    return E
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("692547"),
  a = n("481060"),
  l = n("496675"),
  o = n("916187"),
  u = n("736921"),
  c = n("185403"),
  d = n("484455"),
  f = n("981631"),
  p = n("689938"),
  m = n("17359");

function E(e) {
  switch (e) {
    case f.VerificationLevels.LOW:
      return p.default.Messages.VERIFICATION_LEVEL_LOW;
    case f.VerificationLevels.MEDIUM:
      return p.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case f.VerificationLevels.HIGH:
      return p.default.Messages.VERIFICATION_LEVEL_HIGH;
    case f.VerificationLevels.VERY_HIGH:
      return p.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let I = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: s.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: s.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: s.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: s.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, s = l.default.can(f.Permissions.MANAGE_GUILD, t), _ = t.verificationLevel, h = _ === f.VerificationLevels.VERY_HIGH ? u.default : o.default, T = r.useMemo(() => E(_), [_]), g = I[_], C = (0, i.jsx)("div", {
    className: m.verificationLevelTitle,
    children: p.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, i.jsx)(a.Text, {
          className: m.verificationLevelHook,
          style: {
            color: g
          },
          variant: "text-sm/semibold",
          children: T
        }, "hook")
      }
    })
  }), x = _ === f.VerificationLevels.VERY_HIGH ? p.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : p.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, i.jsx)(d.default, {
    title: C,
    children: (0, i.jsxs)("div", {
      className: m.verificationContainer,
      children: [(0, i.jsx)(h, {
        width: 20,
        height: 20,
        className: m.icon
      }), (0, i.jsx)(a.Text, {
        className: m.guildVerificationText,
        variant: "text-sm/normal",
        children: x
      }), s && (0, i.jsx)(a.Clickable, {
        className: m.iconInteractiveContainer,
        onClick: () => (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("27933")]).then(n.bind(n, "694278"));
          return n => (0, i.jsx)(e, {
            ...n,
            guild: t
          })
        }),
        children: (0, i.jsx)(c.default, {
          width: 20,
          height: 20,
          className: m.iconInteractive
        })
      })]
    })
  })
}
"use strict";
i.r(t), i.d(t, {
  getVerificationLevelText: function() {
    return m
  }
});
var n = i("735250"),
  r = i("470079"),
  s = i("692547"),
  a = i("481060"),
  l = i("496675"),
  o = i("916187"),
  c = i("736921"),
  u = i("185403"),
  d = i("484455"),
  f = i("981631"),
  p = i("689938"),
  C = i("482249");

function m(e) {
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
let h = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: s.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: s.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: s.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: s.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, s = l.default.can(f.Permissions.MANAGE_GUILD, t), _ = t.verificationLevel, E = _ === f.VerificationLevels.VERY_HIGH ? c.default : o.default, I = r.useMemo(() => m(_), [_]), T = h[_], x = (0, n.jsx)("div", {
    className: C.verificationLevelTitle,
    children: p.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, n.jsx)(a.Text, {
          className: C.verificationLevelHook,
          style: {
            color: T
          },
          variant: "text-sm/semibold",
          children: I
        }, "hook")
      }
    })
  }), g = _ === f.VerificationLevels.VERY_HIGH ? p.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : p.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, n.jsx)(d.default, {
    title: x,
    children: (0, n.jsxs)("div", {
      className: C.verificationContainer,
      children: [(0, n.jsx)(E, {
        width: 20,
        height: 20,
        className: C.icon
      }), (0, n.jsx)(a.Text, {
        className: C.guildVerificationText,
        variant: "text-sm/normal",
        children: g
      }), s && (0, n.jsx)(a.Clickable, {
        className: C.iconInteractiveContainer,
        onClick: () => (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("27933")]).then(i.bind(i, "694278"));
          return i => (0, n.jsx)(e, {
            ...i,
            guild: t
          })
        }),
        children: (0, n.jsx)(u.default, {
          width: 20,
          height: 20,
          className: C.iconInteractive
        })
      })]
    })
  })
}
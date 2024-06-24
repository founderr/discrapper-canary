t.d(n, {
  I9: function() {
    return m
  }
});
var a = t(735250),
  r = t(470079),
  s = t(692547),
  i = t(481060),
  l = t(496675),
  o = t(484455),
  c = t(981631),
  d = t(689938),
  u = t(237261);

function m(e) {
  switch (e) {
    case c.sFg.LOW:
      return d.Z.Messages.VERIFICATION_LEVEL_LOW;
    case c.sFg.MEDIUM:
      return d.Z.Messages.VERIFICATION_LEVEL_MEDIUM;
    case c.sFg.HIGH:
      return d.Z.Messages.VERIFICATION_LEVEL_HIGH;
    case c.sFg.VERY_HIGH:
      return d.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let h = {
  [c.sFg.NONE]: "",
  [c.sFg.LOW]: s.Z.unsafe_rawColors.GREEN_360.css,
  [c.sFg.MEDIUM]: s.Z.unsafe_rawColors.YELLOW_300.css,
  [c.sFg.HIGH]: s.Z.unsafe_rawColors.ORANGE_345.css,
  [c.sFg.VERY_HIGH]: s.Z.unsafe_rawColors.RED_400.css
};
n.ZP = function(e) {
  let {
    guild: n
  } = e, s = l.Z.can(c.Plq.MANAGE_GUILD, n), C = n.verificationLevel, x = C === c.sFg.VERY_HIGH ? i.MobilePhoneIcon : i.EnvelopeIcon, f = r.useMemo(() => m(C), [C]), E = h[C], T = (0, a.jsx)("div", {
    className: u.verificationLevelTitle,
    children: d.Z.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(i.Text, {
          className: u.verificationLevelHook,
          style: {
            color: E
          },
          variant: "text-sm/semibold",
          children: f
        }, "hook")
      }
    })
  }), _ = C === c.sFg.VERY_HIGH ? d.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : d.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(o.Z, {
    title: T,
    children: (0, a.jsxs)("div", {
      className: u.verificationContainer,
      children: [(0, a.jsx)(x, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: u.icon
      }), (0, a.jsx)(i.Text, {
        className: u.guildVerificationText,
        variant: "text-sm/normal",
        children: _
      }), s && (0, a.jsx)(i.Clickable, {
        className: u.iconInteractiveContainer,
        onClick: () => (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("27933")]).then(t.bind(t, 694278));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: n
          })
        }),
        children: (0, a.jsx)(i.PencilIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: u.iconInteractive
        })
      })]
    })
  })
}
i.d(a, {
  Z: function() {
    return c
  }
});
var n = i(735250);
i(470079);
var l = i(481060),
  r = i(78675),
  t = i(654904),
  s = i(486324),
  o = i(228168),
  u = i(689938),
  d = i(81240);

function c(e) {
  let {
    user: a,
    displayProfile: i,
    guildId: c,
    canUsePremiumCustomization: v,
    pendingBanner: m,
    hasProfileEffect: f,
    isTryItOutFlow: p,
    disabledInputs: h,
    onUpsellClick: g
  } = e, I = v || (null == i ? void 0 : i.canUsePremiumProfileCustomization) || !1, Z = I ? l.PencilIcon : l.NitroWheelIcon;
  return (0, n.jsx)(r.Z, {
    user: a,
    displayProfile: i,
    guildId: c,
    profileType: o.y0.BITE_SIZE,
    pendingBanner: m,
    hasProfileEffect: f,
    canUsePremiumCustomization: v,
    children: !h && (0, n.jsxs)(l.Clickable, {
      onClick: () => {
        if (!I) {
          null == g || g();
          return
        }(0, t.$r)(s.pC.BANNER, c, p)
      },
      className: d.clickable,
      children: [(0, n.jsx)(Z, {
        size: "xs",
        color: "white"
      }), (0, n.jsx)(l.Heading, {
        variant: "text-sm/medium",
        color: "always-white",
        children: I ? u.Z.Messages.CHANGE_BANNER : u.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
      })]
    })
  })
}
s.d(n, {
  Z: function() {
    return d
  }
});
var l = s(735250);
s(470079);
var t = s(481060),
  i = s(78675),
  r = s(654904),
  a = s(486324),
  o = s(228168),
  c = s(689938),
  u = s(81240);

function d(e) {
  let {
    user: n,
    displayProfile: s,
    guildId: d,
    canUsePremiumCustomization: E,
    pendingBanner: m,
    hasProfileEffect: f,
    isTryItOutFlow: h,
    disabledInputs: p,
    onUpsellClick: v
  } = e, I = E || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || !1, g = I ? t.PencilIcon : t.NitroWheelIcon;
  return (0, l.jsx)(i.Z, {
    user: n,
    displayProfile: s,
    guildId: d,
    profileType: o.y0.BITE_SIZE,
    pendingBanner: m,
    hasProfileEffect: f,
    canUsePremiumCustomization: E,
    children: !p && (0, l.jsxs)(t.Clickable, {
      onClick: () => {
        if (!I) {
          null == v || v();
          return
        }(0, r.$r)(a.pC.BANNER, d, h)
      },
      className: u.clickable,
      children: [(0, l.jsx)(g, {
        size: "xs",
        color: "white"
      }), (0, l.jsx)(t.Heading, {
        variant: "text-sm/medium",
        color: "always-white",
        children: I ? c.Z.Messages.CHANGE_BANNER : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
      })]
    })
  })
}
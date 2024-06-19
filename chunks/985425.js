i.d(a, {
  Z: function() {
    return g
  }
});
var n = i(735250);
i(470079);
var l = i(120356),
  r = i.n(l),
  t = i(442837),
  s = i(481060),
  o = i(906732),
  u = i(1585),
  d = i(158776),
  c = i(998502),
  v = i(445924),
  m = i(654904),
  f = i(486324),
  p = i(982149);
let h = c.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function g(e) {
  let {
    user: a,
    guild: i,
    displayProfile: l,
    canUsePremiumCustomization: c,
    previewAvatar: g,
    previewAvatarDecoration: I,
    previewTheme: Z,
    previewPrimaryColor: x,
    className: P,
    disabledInputs: T,
    isTryItOutFlow: S,
    onUpsellClick: A
  } = e, {
    analyticsLocations: E
  } = (0, o.ZP)(), N = (0, t.e7)([d.Z], () => d.Z.getStatus(a.id)), j = null == i || (null == l ? void 0 : l.canUsePremiumProfileCustomization) || c, C = (0, n.jsx)(h, {
    src: g,
    avatarDecoration: I,
    imageClassName: r()(P, {
      [p.overlay]: !T
    }),
    size: s.AvatarSizes.SIZE_80,
    "aria-label": a.username,
    status: N,
    statusTooltip: !1,
    statusBackdropColor: null != x ? (0, s.getStatusBackdropColor)(Z) : void 0
  });
  return T ? (0, n.jsx)("div", {
    className: p.avatar,
    children: C
  }) : j ? (0, n.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, n.jsx)(v.default, {
        className: p.menu,
        onClose: a,
        onChangeAvatar: () => (0, m.$r)(f.pC.AVATAR, null == i ? void 0 : i.id, S),
        onChangeAvatarDecoration: () => {
          (0, u.ps)({
            guild: null == i ? void 0 : i,
            analyticsLocations: E,
            isTryItOutFlow: S
          })
        }
      })
    },
    children: e => (0, n.jsxs)(s.Clickable, {
      ...e,
      className: r()(p.avatar, p.clickable),
      children: [C, (0, n.jsx)(s.PencilIcon, {
        size: "custom",
        className: p.overlayIcon,
        width: 20,
        height: 20,
        color: "white"
      })]
    })
  }) : (0, n.jsxs)(s.Clickable, {
    onClick: A,
    className: r()(p.avatar, p.clickable),
    children: [C, (0, n.jsx)(s.NitroWheelIcon, {
      size: "custom",
      className: p.overlayIcon,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}
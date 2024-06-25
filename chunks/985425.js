s.d(n, {
  Z: function() {
    return v
  }
});
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  r = s(442837),
  a = s(481060),
  o = s(906732),
  c = s(1585),
  u = s(158776),
  d = s(998502),
  E = s(445924),
  m = s(654904),
  f = s(486324),
  h = s(982149);
let p = d.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function v(e) {
  let {
    user: n,
    guild: s,
    displayProfile: t,
    canUsePremiumCustomization: d,
    previewAvatar: v,
    previewAvatarDecoration: I,
    previewTheme: g,
    previewPrimaryColor: C,
    className: _,
    disabledInputs: Z,
    isTryItOutFlow: P,
    onUpsellClick: x
  } = e, {
    analyticsLocations: A
  } = (0, o.ZP)(), T = (0, r.e7)([u.Z], () => u.Z.getStatus(n.id)), S = null == s || (null == t ? void 0 : t.canUsePremiumProfileCustomization) || d, N = (0, l.jsx)(p, {
    src: v,
    avatarDecoration: I,
    imageClassName: i()(_, {
      [h.overlay]: !Z
    }),
    size: a.AvatarSizes.SIZE_80,
    "aria-label": n.username,
    status: T,
    statusTooltip: !1,
    statusBackdropColor: null != C ? (0, a.getStatusBackdropColor)(g) : void 0
  });
  return Z ? (0, l.jsx)("div", {
    className: h.avatar,
    children: N
  }) : S ? (0, l.jsx)(a.Popout, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, l.jsx)(E.Z, {
        className: h.menu,
        onClose: n,
        onChangeAvatar: () => (0, m.$r)(f.pC.AVATAR, null == s ? void 0 : s.id, P),
        onChangeAvatarDecoration: () => {
          (0, c.ps)({
            guild: null == s ? void 0 : s,
            analyticsLocations: A,
            isTryItOutFlow: P
          })
        }
      })
    },
    children: e => (0, l.jsxs)(a.Clickable, {
      ...e,
      className: i()(h.avatar, h.clickable),
      children: [N, (0, l.jsx)(a.PencilIcon, {
        size: "custom",
        className: h.overlayIcon,
        width: 20,
        height: 20,
        color: "white"
      })]
    })
  }) : (0, l.jsxs)(a.Clickable, {
    onClick: x,
    className: i()(h.avatar, h.clickable),
    children: [N, (0, l.jsx)(a.NitroWheelIcon, {
      size: "custom",
      className: h.overlayIcon,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}
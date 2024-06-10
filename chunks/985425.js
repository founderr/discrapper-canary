"use strict";
t.r(a), t.d(a, {
  default: function() {
    return I
  }
});
var l = t("735250");
t("470079");
var i = t("120356"),
  r = t.n(i),
  n = t("442837"),
  s = t("873706"),
  o = t("481060"),
  u = t("906732"),
  d = t("1585"),
  c = t("158776"),
  f = t("586791"),
  m = t("998502"),
  v = t("445924"),
  p = t("654904"),
  h = t("486324"),
  g = t("783779");
let S = m.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function I(e) {
  let {
    user: a,
    guild: t,
    displayProfile: i,
    canUsePremiumCustomization: m,
    previewAvatar: I,
    previewAvatarDecoration: T,
    previewTheme: A,
    previewPrimaryColor: E,
    className: P,
    disabledInputs: x,
    isTryItOutFlow: y,
    onUpsellClick: N
  } = e, {
    analyticsLocations: j
  } = (0, u.default)(), C = (0, n.useStateFromStores)([c.default], () => c.default.getStatus(a.id)), U = null == t || (null == i ? void 0 : i.canUsePremiumProfileCustomization) || m, _ = (0, l.jsx)(S, {
    src: I,
    avatarDecoration: T,
    imageClassName: r()(P, {
      [g.overlay]: !x
    }),
    size: o.AvatarSizes.SIZE_80,
    "aria-label": a.username,
    status: C,
    statusTooltip: !1,
    statusBackdropColor: null != E ? (0, o.getStatusBackdropColor)(A) : void 0
  });
  return x ? (0, l.jsx)("div", {
    className: g.avatar,
    children: _
  }) : U ? (0, l.jsx)(o.Popout, {
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, l.jsx)(v.default, {
        className: g.menu,
        onClose: a,
        onChangeAvatar: () => (0, p.handleOpenSelectImageModal)(h.UploadTypes.AVATAR, null == t ? void 0 : t.id, y),
        onChangeAvatarDecoration: () => {
          (0, d.openAvatarDecorationModal)({
            guild: null == t ? void 0 : t,
            analyticsLocations: j,
            isTryItOutFlow: y
          })
        }
      })
    },
    children: e => (0, l.jsxs)(o.Clickable, {
      ...e,
      className: r()(g.avatar, g.clickable),
      children: [_, (0, l.jsx)(f.default, {
        className: g.overlayIcon,
        width: 20,
        height: 20,
        color: "white"
      })]
    })
  }) : (0, l.jsxs)(o.Clickable, {
    onClick: N,
    className: r()(g.avatar, g.clickable),
    children: [_, (0, l.jsx)(s.NitroWheelIcon, {
      className: g.overlayIcon,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}
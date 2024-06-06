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
  u = t("239091"),
  d = t("906732"),
  c = t("1585"),
  f = t("158776"),
  m = t("586791"),
  v = t("998502"),
  p = t("654904"),
  h = t("486324"),
  g = t("783779");
let S = v.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function I(e) {
  let {
    user: a,
    guild: i,
    displayProfile: v,
    canUsePremiumCustomization: I,
    previewAvatar: T,
    previewAvatarDecoration: A,
    previewTheme: P,
    previewPrimaryColor: E,
    className: y,
    disabledInputs: x,
    isTryItOutFlow: U,
    onUpsellClick: j
  } = e, {
    analyticsLocations: N
  } = (0, d.default)(), C = (0, n.useStateFromStores)([f.default], () => f.default.getStatus(a.id)), b = null == i || (null == v ? void 0 : v.canUsePremiumProfileCustomization) || I, w = b ? m.default : s.NitroWheelIcon;
  return (0, l.jsxs)(o.Clickable, {
    "aria-disabled": x,
    onClick: x ? void 0 : e => {
      if (!b) {
        null == j || j();
        return
      }(0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await t.e("34627").then(t.bind(t, "445924"));
        return () => (0, l.jsx)(e, {
          changeAvatarAction: () => (0, p.handleOpenSelectImageModal)(h.UploadTypes.AVATAR, null == i ? void 0 : i.id, U),
          changeDecorationAction: () => {
            (0, c.openAvatarDecorationModal)({
              guild: null == i ? void 0 : i,
              analyticsLocations: N,
              isTryItOutFlow: U
            })
          }
        })
      })
    },
    className: r()(g.avatar, {
      [g.clickable]: !x
    }),
    children: [(0, l.jsx)(S, {
      src: T,
      avatarDecoration: A,
      imageClassName: r()(y, {
        [g.overlay]: !x
      }),
      size: o.AvatarSizes.SIZE_80,
      "aria-label": a.username,
      status: C,
      statusTooltip: !1,
      statusBackdropColor: null != E ? (0, o.getStatusBackdropColor)(P) : void 0
    }), !x && (0, l.jsx)(w, {
      className: g.overlayIcon,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}
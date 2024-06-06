"use strict";
t.r(a), t.d(a, {
  default: function() {
    return S
  }
});
var l = t("735250");
t("470079");
var i = t("120356"),
  r = t.n(i),
  n = t("442837"),
  s = t("481060"),
  o = t("239091"),
  u = t("906732"),
  d = t("1585"),
  c = t("158776"),
  f = t("586791"),
  m = t("998502"),
  v = t("654904"),
  p = t("486324"),
  h = t("783779");
let g = m.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function S(e) {
  let {
    user: a,
    guild: i,
    displayProfile: m,
    canUsePremiumCustomization: S,
    previewAvatar: I,
    previewAvatarDecoration: T,
    previewTheme: P,
    previewPrimaryColor: A,
    className: E,
    disabledInputs: y,
    isTryItOutFlow: x,
    onUpsellClick: U
  } = e, {
    analyticsLocations: j
  } = (0, u.default)(), N = (0, n.useStateFromStores)([c.default], () => c.default.getStatus(a.id));
  return (0, l.jsxs)(s.Clickable, {
    "aria-disabled": y,
    onClick: y ? void 0 : e => {
      if (!(null == i || (null == m ? void 0 : m.canUsePremiumProfileCustomization) || S)) {
        null == U || U();
        return
      }(0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await t.e("34627").then(t.bind(t, "445924"));
        return () => (0, l.jsx)(e, {
          changeAvatarAction: () => (0, v.handleOpenSelectImageModal)(p.UploadTypes.AVATAR, null == i ? void 0 : i.id, x),
          changeDecorationAction: () => {
            (0, d.openAvatarDecorationModal)({
              guild: null == i ? void 0 : i,
              analyticsLocations: j,
              isTryItOutFlow: x
            })
          }
        })
      })
    },
    className: r()(h.avatar, {
      [h.clickable]: !y
    }),
    children: [(0, l.jsx)(g, {
      src: I,
      avatarDecoration: T,
      imageClassName: r()(E, {
        [h.overlay]: !y
      }),
      size: s.AvatarSizes.SIZE_80,
      "aria-label": a.username,
      status: N,
      statusTooltip: !1,
      statusBackdropColor: null != A ? (0, s.getStatusBackdropColor)(P) : void 0
    }), !y && (0, l.jsx)(f.default, {
      className: h.editPencil,
      color: "white"
    })]
  })
}
"use strict";
l.r(a), l.d(a, {
  default: function() {
    return S
  }
});
var t = l("735250");
l("470079");
var i = l("120356"),
  r = l.n(i),
  n = l("442837"),
  s = l("481060"),
  o = l("239091"),
  u = l("906732"),
  d = l("1585"),
  c = l("158776"),
  f = l("586791"),
  m = l("998502"),
  v = l("654904"),
  p = l("486324"),
  g = l("783779");
let h = m.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function S(e) {
  let {
    user: a,
    guild: i,
    displayProfile: m,
    canUsePremiumCustomization: S,
    previewAvatar: I,
    previewAvatarDecoration: T,
    previewTheme: A,
    previewPrimaryColor: E,
    className: y,
    disabledInputs: P,
    isTryItOutFlow: x,
    onUpsellClick: j
  } = e, {
    analyticsLocations: U
  } = (0, u.default)(), C = (0, n.useStateFromStores)([c.default], () => c.default.getStatus(a.id));
  return (0, t.jsxs)(s.Clickable, {
    "aria-disabled": P,
    onClick: P ? void 0 : e => {
      if (!(null == i || (null == m ? void 0 : m.canUsePremiumProfileCustomization) || S)) {
        null == j || j();
        return
      }(0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await l.e("34627").then(l.bind(l, "445924"));
        return () => (0, t.jsx)(e, {
          changeAvatarAction: () => (0, v.handleOpenSelectImageModal)(p.UploadTypes.AVATAR, null == i ? void 0 : i.id, x),
          changeDecorationAction: () => {
            (0, d.openAvatarDecorationModal)({
              guild: null == i ? void 0 : i,
              analyticsLocations: U,
              isTryItOutFlow: x
            })
          }
        })
      })
    },
    className: r()(g.avatar, {
      [g.clickable]: !P
    }),
    children: [(0, t.jsx)(h, {
      src: I,
      avatarDecoration: T,
      imageClassName: r()(y, {
        [g.overlay]: !P
      }),
      size: s.AvatarSizes.SIZE_80,
      "aria-label": a.username,
      status: C,
      statusTooltip: !1,
      statusBackdropColor: null != E ? (0, s.getStatusBackdropColor)(A) : void 0
    }), !P && (0, t.jsx)(f.default, {
      className: g.editPencil,
      color: "white"
    })]
  })
}
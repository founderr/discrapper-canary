"use strict";
l.r(a), l.d(a, {
  default: function() {
    return S
  }
});
var t = l("735250");
l("470079");
var i = l("120356"),
  n = l.n(i),
  r = l("442837"),
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
    previewAvatarDecoration: A,
    previewTheme: y,
    previewPrimaryColor: T,
    className: x,
    disabledInputs: P,
    isTryItOutFlow: E,
    onUpsellClick: j
  } = e, {
    analyticsLocations: N
  } = (0, u.default)(), U = (0, r.useStateFromStores)([c.default], () => c.default.getStatus(a.id));
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
          changeAvatarAction: () => (0, v.handleOpenSelectImageModal)(p.UploadTypes.AVATAR, null == i ? void 0 : i.id, E),
          changeDecorationAction: () => {
            (0, d.openAvatarDecorationModal)({
              guild: null == i ? void 0 : i,
              analyticsLocations: N,
              isTryItOutFlow: E
            })
          }
        })
      })
    },
    className: n()(g.avatar, {
      [g.clickable]: !P
    }),
    children: [(0, t.jsx)(h, {
      src: I,
      avatarDecoration: A,
      imageClassName: n()(x, {
        [g.overlay]: !P
      }),
      size: s.AvatarSizes.SIZE_80,
      "aria-label": a.username,
      status: U,
      statusTooltip: !1,
      statusBackdropColor: null != T ? (0, s.getStatusBackdropColor)(y) : void 0
    }), !P && (0, t.jsx)(f.default, {
      className: g.editPencil,
      color: "white"
    })]
  })
}
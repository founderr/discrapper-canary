n.r(i), n.d(i, {
  default: function() {
    return A
  }
});
var a = n(735250),
  r = n(470079),
  o = n(481060),
  t = n(197115),
  s = n(921813),
  l = n(318661),
  c = n(721987),
  u = n(153124),
  d = n(626135),
  v = n(981631),
  f = n(486324),
  m = n(474936),
  p = n(689938),
  I = n(495598);

function A(e) {
  let {
    user: i,
    guildId: n,
    transitionState: A,
    imageSrc: E,
    uploadType: _,
    onSubscribe: T,
    onClose: h
  } = e, Z = (0, u.Dt)(), x = (0, l.ZP)(i.id, n), {
    primaryColor: P,
    secondaryColor: N
  } = (0, c.Z)({
    user: i,
    displayProfile: x,
    pendingAvatar: _ === f.pC.AVATAR ? E : void 0,
    isPreview: !0
  });
  return r.useEffect(() => {
    d.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
      type: m.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL
    })
  }, []), (0, a.jsxs)(o.ModalRoot, {
    className: I.modalRoot,
    transitionState: A,
    size: o.ModalSize.SMALL,
    "aria-labelledby": Z,
    hideShadow: !0,
    children: [(0, a.jsx)(s.Z, {
      user: i,
      canUsePremiumCustomization: !0,
      disabledInputs: !0,
      pendingAvatar: _ === f.pC.AVATAR ? E : void 0,
      pendingBanner: _ === f.pC.BANNER ? E : void 0,
      pendingThemeColors: [P, N]
    }), (0, a.jsxs)("div", {
      className: I.upsellSection,
      children: [(0, a.jsx)(o.Text, {
        className: I.joinText,
        variant: "text-sm/normal",
        children: _ === f.pC.AVATAR ? p.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR : p.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER
      }), (0, a.jsx)(t.Z, {
        buttonText: p.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
        subscriptionTier: m.Si.TIER_2,
        className: I.premiumSubscribeButton,
        size: o.Button.Sizes.SMALL,
        premiumModalAnalyticsLocation: {
          section: v.jXE.SETTINGS_EDIT_PROFILE,
          object: v.qAy.BUTTON_CTA
        },
        onSubscribeModalClose: e => {
          e && (null == T || T(), h())
        }
      }), (0, a.jsx)(o.Button, {
        onClick: h,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.FILLED,
        children: p.Z.Messages.PREMIUM_PREVIEW_EXIT
      })]
    })]
  })
}
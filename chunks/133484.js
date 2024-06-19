t.d(s, {
  Z: function() {
    return A
  }
});
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(410030),
  r = t(100527),
  o = t(906732),
  c = t(197115),
  E = t(626135),
  d = t(74538),
  _ = t(981631),
  T = t(474936),
  S = t(689938),
  u = t(455802),
  I = t(699623),
  N = t(820350);

function A(e) {
  let {
    user: s,
    showOverlay: t,
    children: A
  } = e, C = (0, l.ZP)(), {
    analyticsLocations: O
  } = (0, o.ZP)(r.Z.PREMIUM_UPSELL_OVERLAY);
  return (i.useEffect(() => {
    t && E.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
      location_stack: O,
      type: T.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
    })
  }, [t, O]), t) ? (0, n.jsxs)("div", {
    className: u.upsellOverlayContainer,
    children: [(0, n.jsx)("div", {
      children: A
    }), (0, n.jsxs)("div", {
      className: u.upsellOverlay,
      children: [(0, n.jsx)("img", {
        className: u.upsellImage,
        alt: S.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_IMAGE_ALT,
        src: function(e) {
          switch (e) {
            case _.BRd.DARK:
              return I;
            case _.BRd.LIGHT:
              return N
          }
        }(C)
      }), (0, n.jsxs)("div", {
        className: u.upsellTextContainer,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          children: S.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_TITLE
        }), (0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: S.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_DESCRIPTION_THEMES
        })]
      }), (0, n.jsx)(c.Z, {
        size: a.Button.Sizes.LARGE,
        color: a.Button.Colors.GREEN,
        buttonText: d.ZP.isPremium(s) ? S.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : S.Z.Messages.CHANGE_IDENTITY_UPSELL,
        subscriptionTier: T.Si.TIER_2
      })]
    })]
  }) : (0, n.jsx)(n.Fragment, {
    children: A
  })
}
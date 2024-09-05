t.d(s, {
    Z: function () {
        return m;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(410030),
    o = t(100527),
    l = t(906732),
    c = t(197115),
    d = t(626135),
    u = t(74538),
    _ = t(981631),
    E = t(474936),
    T = t(689938),
    S = t(333727),
    I = t(699623),
    N = t(820350);
function m(e) {
    let { user: s, showOverlay: t, children: m } = e,
        C = (0, r.ZP)(),
        { analyticsLocations: g } = (0, l.ZP)(o.Z.PREMIUM_UPSELL_OVERLAY);
    return (a.useEffect(() => {
        t &&
            d.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: g,
                type: E.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [t, g]),
    t)
        ? (0, n.jsxs)('div', {
              className: S.upsellOverlayContainer,
              children: [
                  (0, n.jsx)('div', { children: m }),
                  (0, n.jsxs)('div', {
                      className: S.upsellOverlay,
                      children: [
                          (0, n.jsx)('img', {
                              className: S.upsellImage,
                              alt: T.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_IMAGE_ALT,
                              src: (function (e) {
                                  switch (e) {
                                      case _.BRd.DARK:
                                          return I;
                                      case _.BRd.LIGHT:
                                          return N;
                                  }
                              })(C)
                          }),
                          (0, n.jsxs)('div', {
                              className: S.upsellTextContainer,
                              children: [
                                  (0, n.jsx)(i.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: T.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_TITLE
                                  }),
                                  (0, n.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: T.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_DESCRIPTION_THEMES
                                  })
                              ]
                          }),
                          (0, n.jsx)(c.Z, {
                              size: i.Button.Sizes.LARGE,
                              color: i.Button.Colors.GREEN,
                              buttonText: u.ZP.isPremium(s) ? T.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : T.Z.Messages.CHANGE_IDENTITY_UPSELL,
                              subscriptionTier: E.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : (0, n.jsx)(n.Fragment, { children: m });
}

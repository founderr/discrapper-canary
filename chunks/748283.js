t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651),
    s = t(481060),
    o = t(197115),
    l = t(703656),
    r = t(111361),
    c = t(785717),
    a = t(475413),
    d = t(228168),
    u = t(981631),
    _ = t(474936),
    I = t(689938),
    E = t(554470);
function f(e) {
    let { currentUser: n, onClose: t } = e,
        f = (0, r.I5)(n),
        { trackUserProfileAction: m } = (0, c.KZ)();
    return f
        ? (0, i.jsx)(a.oY, {
              action: d.yM.VIEW_PREMIUM_PERKS,
              icon: s.NitroWheelIcon,
              tooltipText: I.Z.Messages.USER_PROFILE_ENTRY_POINTS_VIEW_PREMIUM_PERKS,
              onClick: () => {
                  (0, l.uL)(u.Z5c.APPLICATION_STORE), null == t || t();
              }
          })
        : (0, i.jsx)(o.Z, {
              onClick: () => {
                  m({ action: d.yM.GET_PREMIUM });
              },
              buttonText: I.Z.Messages.USER_PROFILE_ENTRY_POINTS_GET_PREMIUM,
              subscriptionTier: _.Si.TIER_2,
              premiumModalAnalyticsLocation: { section: u.jXE.USER_PROFILE },
              shinyButtonClassName: E.getPremiumButton,
              size: s.Button.Sizes.SMALL,
              iconClassName: E.getPremiumButtonIcon,
              look: s.Button.Looks.BLANK,
              onlyShineOnHover: !0
          });
}

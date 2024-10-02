a.d(n, {
    Z: function () {
        return u;
    }
});
var i = a(735250),
    s = a(470079),
    r = a(53691),
    o = a(378879),
    l = a(981631),
    t = a(486324),
    c = a(689938);
function u(e) {
    let { uploadType: n, ...a } = e,
        u = s.useCallback(() => {
            (0, o.openProfileUpsellModal)(n, void 0);
        }, [n]),
        d = s.useMemo(() => {
            switch (n) {
                case t.pC.AVATAR:
                    return c.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_INLINE_UPSELL.format({ onClick: u });
                case t.pC.BANNER:
                    return c.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_INLINE_UPSELL.format({ onClick: u });
                default:
                    return '';
            }
        }, [n, u]);
    return n === t.pC.AVATAR || n === t.pC.BANNER
        ? (0, i.jsx)(r.p, {
              text: d,
              button: c.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
              buttonAnalyticsObject: { section: l.jXE.USER_PROFILE },
              ...a
          })
        : null;
}

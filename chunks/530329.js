a.d(n, {
    Z: function () {
        return E;
    }
});
var i = a(735250),
    s = a(470079),
    r = a(120356),
    o = a.n(r),
    l = a(53691),
    t = a(378879),
    c = a(981631),
    u = a(486324),
    d = a(689938),
    A = a(734471);
function E(e) {
    let { uploadType: n, className: a, ...r } = e,
        E = s.useCallback(() => {
            (0, t.openProfileUpsellModal)(n, void 0);
        }, [n]),
        _ = s.useMemo(() => {
            switch (n) {
                case u.pC.AVATAR:
                    return d.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_INLINE_UPSELL.format({ onClick: E });
                case u.pC.BANNER:
                    return d.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_INLINE_UPSELL.format({ onClick: E });
                default:
                    return '';
            }
        }, [n, E]);
    return n === u.pC.AVATAR || n === u.pC.BANNER
        ? (0, i.jsx)(l.p, {
              text: _,
              button: d.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
              buttonAnalyticsObject: { section: c.jXE.USER_PROFILE },
              className: o()(A.container, a),
              ...r
          })
        : null;
}

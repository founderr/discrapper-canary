a.d(n, {
    Z: function () {
        return f;
    }
});
var t = a(200651),
    s = a(192379),
    c = a(120356),
    o = a.n(c),
    i = a(53691),
    r = a(378879),
    d = a(981631),
    l = a(486324),
    u = a(689938),
    A = a(734471);
function f(e) {
    let { uploadType: n, className: a, ...c } = e,
        f = s.useCallback(() => {
            (0, r.openProfileUpsellModal)(n, void 0);
        }, [n]),
        p = s.useMemo(() => {
            switch (n) {
                case l.pC.AVATAR:
                    return u.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_INLINE_UPSELL.format({ onClick: f });
                case l.pC.BANNER:
                    return u.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_INLINE_UPSELL.format({ onClick: f });
                default:
                    return '';
            }
        }, [n, f]);
    return n === l.pC.AVATAR || n === l.pC.BANNER
        ? (0, t.jsx)(i.p, {
              text: p,
              button: u.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
              buttonAnalyticsObject: { section: d.jXE.USER_PROFILE },
              className: o()(A.container, a),
              ...c
          })
        : null;
}

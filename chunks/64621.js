n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    l = n(980591),
    u = n(381586),
    c = n(243778),
    d = n(970731),
    f = n(594174),
    _ = n(984173),
    p = n(718107),
    h = n(456644),
    m = n(652853),
    g = n(228168),
    E = n(388032),
    v = n(493248),
    I = n(425637),
    T = n(895982),
    b = n(685741),
    S = n(20818);
function y(e) {
    var t, n, y, A, N;
    let { sourceType: C, children: R, user: O } = e,
        { profileType: D } = (0, m.z)(),
        { avatarReactReplyEnabled: L, statusReactReplyEnabled: x } = (0, p.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { activityReactReplyEnabled: w, allProfileReactReplyEnabled: P } = (0, _.F)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: M } = (0, h.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        k = (0, a.e7)([f.default], () => {
            var e;
            return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === O.id;
        }),
        U = C === g.n_.AVATAR && L,
        B = C === g.n_.STATUS && !L && x,
        G = C === g.n_.AVATAR && P,
        Z = C === g.n_.ACTIVITY && (w || M) && !P,
        F = !k && D === g.y0.BITE_SIZE && (U || B || G || Z),
        [V, j] = i.useState(!1);
    (0, l.Z)(() => j(!0), F ? 200 : null);
    let {
            asset: H,
            assetClassName: Y,
            className: W,
            content: K,
            header: z,
            spacing: q,
            dismissibleContentType: Q
        } = ((t = x),
        (n = L),
        (y = w),
        (A = P),
        (N = M),
        A
            ? {
                  asset: b,
                  assetClassName: v.profileImage,
                  className: v.profileCoachmark,
                  content: E.intl.string(E.t.HEGlIC),
                  header: E.intl.string(E.t['R/RaKy']),
                  spacing: 30,
                  dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : y || N
              ? {
                    asset: I,
                    assetClassName: void 0,
                    className: v.activityCoachmark,
                    content: E.intl.string(E.t.LQ32TU),
                    header: E.intl.string(E.t.XDBiPT),
                    spacing: 32,
                    dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
                }
              : t && n
                ? {
                      asset: b,
                      assetClassName: v.profileImage,
                      className: v.profileCoachmark,
                      content: E.intl.string(E.t['yzj+dn']),
                      header: E.intl.string(E.t['R/RaKy']),
                      spacing: 30,
                      dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK
                  }
                : t
                  ? {
                        asset: S,
                        assetClassName: void 0,
                        className: v.statusCoachmark,
                        content: E.intl.string(E.t.MYYTWV),
                        header: E.intl.string(E.t['X/My/v']),
                        spacing: 16,
                        dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_STATUS
                    }
                  : {
                        asset: T,
                        assetClassName: v.avatarImage,
                        className: v.avatarCoachmark,
                        content: E.intl.string(E.t['65191t']),
                        header: E.intl.string(E.t['3FagAQ']),
                        spacing: 30,
                        dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_AVATAR
                    }),
        X = (0, u.N)(s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        [J, $] = (0, c.US)(V && !X ? [Q] : []);
    return (0, r.jsx)(o.Popout, {
        align: 'center',
        position: C === g.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != J,
        spacing: q,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(d.ZP, {
                    className: W,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: H,
                        className: Y
                    }),
                    buttonCTA: E.intl.string(E.t['+IrDzM']),
                    buttonLayout: d._F.STACKED,
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: K
                    }),
                    header: z,
                    headerClassName: v.tooltipHeader,
                    markAsDismissed: $,
                    onClick: n
                })
            });
        },
        children: () => R
    });
}

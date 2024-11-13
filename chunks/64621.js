n.d(t, {
    Z: function () {
        return T;
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
    h = n(652853),
    m = n(228168),
    g = n(388032),
    E = n(671511),
    v = n(425637),
    I = n(895982),
    b = n(685741),
    S = n(20818);
function T(e) {
    var t, n, T;
    let { sourceType: y, children: A, user: N } = e,
        { profileType: C } = (0, h.z)(),
        { avatarReactReplyEnabled: R, statusReactReplyEnabled: O } = (0, p.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { activityReactReplyEnabled: D, allProfileReactReplyEnabled: L } = (0, _.F)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        x = (0, a.e7)([f.default], () => {
            var e;
            return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === N.id;
        }),
        w = y === m.n_.AVATAR && R,
        M = y === m.n_.STATUS && !R && O,
        P = y === m.n_.AVATAR && L,
        k = y === m.n_.ACTIVITY && D && !L,
        U = !x && C === m.y0.BITE_SIZE && (w || M || P || k),
        [B, G] = i.useState(!1);
    (0, l.Z)(() => G(!0), U ? 200 : null);
    let {
            asset: Z,
            assetClassName: F,
            className: V,
            content: j,
            header: H,
            spacing: Y,
            dismissibleContentType: W
        } = ((t = O),
        (n = R),
        (T = D),
        L
            ? {
                  asset: b,
                  assetClassName: E.profileImage,
                  className: E.profileCoachmark,
                  content: g.intl.string(g.t.HEGlIC),
                  header: g.intl.string(g.t['R/RaKy']),
                  spacing: 30,
                  dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : T
              ? {
                    asset: v,
                    assetClassName: void 0,
                    className: E.activityCoachmark,
                    content: g.intl.string(g.t.LQ32TU),
                    header: g.intl.string(g.t.XDBiPT),
                    spacing: 32,
                    dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
                }
              : t && n
                ? {
                      asset: b,
                      assetClassName: E.profileImage,
                      className: E.profileCoachmark,
                      content: g.intl.string(g.t['yzj+dn']),
                      header: g.intl.string(g.t['R/RaKy']),
                      spacing: 30,
                      dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK
                  }
                : t
                  ? {
                        asset: S,
                        assetClassName: void 0,
                        className: E.statusCoachmark,
                        content: g.intl.string(g.t.MYYTWV),
                        header: g.intl.string(g.t['X/My/v']),
                        spacing: 16,
                        dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_STATUS
                    }
                  : {
                        asset: I,
                        assetClassName: E.avatarImage,
                        className: E.avatarCoachmark,
                        content: g.intl.string(g.t['65191t']),
                        header: g.intl.string(g.t['3FagAQ']),
                        spacing: 30,
                        dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_AVATAR
                    }),
        K = (0, u.N)(s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        [z, q] = (0, c.US)(B && !K ? [W] : []);
    return (0, r.jsx)(o.Popout, {
        align: 'center',
        position: y === m.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != z,
        spacing: Y,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(d.ZP, {
                    className: V,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: Z,
                        className: F
                    }),
                    buttonCTA: g.intl.string(g.t['+IrDzM']),
                    buttonLayout: d._F.STACKED,
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: j
                    }),
                    header: H,
                    headerClassName: E.tooltipHeader,
                    markAsDismissed: q,
                    onClick: n
                })
            });
        },
        children: () => A
    });
}

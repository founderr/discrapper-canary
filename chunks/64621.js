r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(704215),
    u = r(481060),
    c = r(980591),
    d = r(381586),
    f = r(243778),
    _ = r(970731),
    h = r(594174),
    p = r(984173),
    m = r(718107),
    g = r(456644),
    E = r(652853),
    v = r(228168),
    I = r(388032),
    T = r(493248),
    b = r(425637),
    y = r(895982),
    S = r(685741),
    A = r(20818);
let N = 200,
    C = 32,
    R = 30,
    O = 16;
function D(e, n, r, i, a) {
    return i
        ? {
              asset: S,
              assetClassName: T.profileImage,
              className: T.profileCoachmark,
              content: I.intl.string(I.t.HEGlIC),
              header: I.intl.string(I.t['R/RaKy']),
              spacing: R,
              dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
          }
        : r || a
          ? {
                asset: b,
                assetClassName: void 0,
                className: T.activityCoachmark,
                content: I.intl.string(I.t.LQ32TU),
                header: I.intl.string(I.t.XDBiPT),
                spacing: C,
                dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
            }
          : e && n
            ? {
                  asset: S,
                  assetClassName: T.profileImage,
                  className: T.profileCoachmark,
                  content: I.intl.string(I.t['yzj+dn']),
                  header: I.intl.string(I.t['R/RaKy']),
                  spacing: R,
                  dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK
              }
            : e
              ? {
                    asset: A,
                    assetClassName: void 0,
                    className: T.statusCoachmark,
                    content: I.intl.string(I.t.MYYTWV),
                    header: I.intl.string(I.t['X/My/v']),
                    spacing: O,
                    dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_STATUS
                }
              : {
                    asset: y,
                    assetClassName: T.avatarImage,
                    className: T.avatarCoachmark,
                    content: I.intl.string(I.t['65191t']),
                    header: I.intl.string(I.t['3FagAQ']),
                    spacing: R,
                    dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_AVATAR
                };
}
function L(e) {
    let { sourceType: n, children: r, user: i } = e,
        { profileType: b } = (0, E.z)(),
        { avatarReactReplyEnabled: y, statusReactReplyEnabled: S } = (0, m.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { activityReactReplyEnabled: A, allProfileReactReplyEnabled: C } = (0, p.F)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: R } = (0, g.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        O = (0, o.e7)([h.default], () => {
            var e;
            return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id;
        }),
        L = n === v.n_.AVATAR && y,
        x = n === v.n_.STATUS && !y && S,
        w = n === v.n_.AVATAR && C,
        P = n === v.n_.ACTIVITY && (A || R) && !C,
        M = !O && b === v.y0.BITE_SIZE && (L || x || w || P),
        [k, U] = s.useState(!1);
    (0, c.Z)(() => U(!0), M ? N : null);
    let { asset: B, assetClassName: G, className: Z, content: F, header: V, spacing: j, dismissibleContentType: H } = D(S, y, A, C, R),
        Y = (0, d.N)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        W = k && !Y ? [H] : [],
        [K, z] = (0, f.US)(W);
    return (0, a.jsx)(u.Popout, {
        align: 'center',
        position: n === v.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != K,
        spacing: j,
        renderPopout: (e) => {
            let { position: n, closePopout: r, setPopoutRef: i } = e;
            return (0, a.jsx)(u.Dialog, {
                ref: i,
                children: (0, a.jsx)(_.ZP, {
                    className: Z,
                    asset: (0, a.jsx)('img', {
                        alt: '',
                        src: B,
                        className: G
                    }),
                    buttonCTA: I.intl.string(I.t['+IrDzM']),
                    buttonLayout: _._F.STACKED,
                    buttonProps: {
                        color: u.ButtonColors.BRAND_INVERTED,
                        size: u.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === n ? _.DF.LEFT_CENTER : _.DF.RIGHT_CENTER,
                    content: (0, a.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: F
                    }),
                    header: V,
                    headerClassName: T.tooltipHeader,
                    markAsDismissed: z,
                    onClick: r
                })
            });
        },
        children: () => r
    });
}

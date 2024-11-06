n.d(t, {
    Z: function () {
        return S;
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
    _ = n(718107),
    h = n(652853),
    p = n(228168),
    m = n(388032),
    g = n(671511),
    E = n(895982),
    v = n(685741),
    I = n(20818);
function S(e) {
    var t, n;
    let { sourceType: S, children: T, user: b } = e,
        { profileType: y } = (0, h.z)(),
        { avatarReactReplyEnabled: A, statusReactReplyEnabled: N } = (0, _.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        C = (0, a.e7)([f.default], () => {
            var e;
            return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === b.id;
        }),
        R = S === p.n_.AVATAR && A,
        O = S === p.n_.STATUS && !A && N,
        D = !C && y === p.y0.BITE_SIZE && (R || O),
        [L, x] = i.useState(!1);
    (0, l.Z)(() => x(!0), D ? 200 : null);
    let {
            asset: w,
            assetClassName: M,
            className: P,
            content: k,
            header: U,
            dismissibleContentType: G
        } = ((t = N),
        (n = A),
        t && n
            ? {
                  asset: v,
                  assetClassName: g.profileImage,
                  className: g.profileCoachmark,
                  content: m.intl.string(m.t['yzj+dn']),
                  header: m.intl.string(m.t['R/RaKy']),
                  dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK
              }
            : t
              ? {
                    asset: I,
                    assetClassName: void 0,
                    className: g.statusCoachmark,
                    content: m.intl.string(m.t.MYYTWV),
                    header: m.intl.string(m.t['X/My/v']),
                    dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_STATUS
                }
              : {
                    asset: E,
                    assetClassName: g.avatarImage,
                    className: g.avatarCoachmark,
                    content: m.intl.string(m.t['65191t']),
                    header: m.intl.string(m.t['3FagAQ']),
                    dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_AVATAR
                }),
        B = (0, u.N)(s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        [Z, F] = (0, c.US)(L && !B ? [G] : []);
    return (0, r.jsx)(o.Popout, {
        align: 'center',
        position: S === p.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != Z,
        spacing: S === p.n_.AVATAR ? 30 : 16,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(d.ZP, {
                    className: P,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: w,
                        className: M
                    }),
                    buttonCTA: m.intl.string(m.t['+IrDzM']),
                    buttonLayout: d._F.STACKED,
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: k
                    }),
                    header: U,
                    headerClassName: g.tooltipHeader,
                    markAsDismissed: F,
                    onClick: n
                })
            });
        },
        children: () => T
    });
}

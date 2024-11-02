n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    l = n(980591),
    u = n(243778),
    c = n(970731),
    d = n(594174),
    f = n(718107),
    _ = n(652853),
    h = n(228168),
    p = n(388032),
    m = n(671511),
    g = n(895982),
    E = n(685741),
    v = n(20818);
function I(e) {
    var t, n;
    let { sourceType: I, children: S, user: T } = e,
        { profileType: b } = (0, _.z)(),
        { avatarReactReplyEnabled: y, statusReactReplyEnabled: A } = (0, f.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        N = (0, a.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === T.id;
        }),
        C = I === h.n_.AVATAR && y,
        R = I === h.n_.STATUS && !y && A,
        O = !N && b === h.y0.BITE_SIZE && (C || R),
        [D, L] = i.useState(!1);
    (0, l.Z)(() => L(!0), O ? 200 : null);
    let x = D ? [s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK] : [],
        [w, M] = (0, u.US)(x);
    let {
        asset: P,
        assetClassName: k,
        className: U,
        content: G,
        header: B
    } = ((t = A),
    (n = y),
    t && n
        ? {
              asset: E,
              assetClassName: m.profileImage,
              className: m.profileCoachmark,
              content: p.intl.string(p.t['yzj+dn']),
              header: p.intl.string(p.t['R/RaKy'])
          }
        : t
          ? {
                asset: v,
                assetClassName: void 0,
                className: m.statusCoachmark,
                content: p.intl.string(p.t.MYYTWV),
                header: p.intl.string(p.t['X/My/v'])
            }
          : {
                asset: g,
                assetClassName: m.avatarImage,
                className: m.avatarCoachmark,
                content: p.intl.string(p.t['65191t']),
                header: p.intl.string(p.t['3FagAQ'])
            });
    return (0, r.jsx)(o.Popout, {
        align: 'center',
        position: I === h.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != w,
        spacing: I === h.n_.AVATAR ? 30 : 16,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(c.ZP, {
                    className: U,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: P,
                        className: k
                    }),
                    buttonCTA: p.intl.string(p.t['+IrDzM']),
                    buttonLayout: c._F.STACKED,
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? c.DF.LEFT_CENTER : c.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: G
                    }),
                    header: B,
                    headerClassName: m.tooltipHeader,
                    markAsDismissed: M,
                    onClick: n
                })
            });
        },
        children: () => S
    });
}

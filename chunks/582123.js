n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(704215),
    l = n(481060),
    u = n(980591),
    c = n(100527),
    d = n(906732),
    _ = n(243778),
    E = n(970731),
    f = n(594174),
    h = n(785717),
    p = n(652853),
    m = n(171368),
    I = n(228168),
    T = n(921944),
    g = n(689938),
    S = n(398813),
    A = n(881828);
let v = 200,
    N = 28,
    O = 32;
function R(e) {
    let { user: t, children: n, onClose: r } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP),
        { context: C } = (0, h.KZ)(),
        { profileType: y, primaryColor: b } = (0, p.z)(),
        L =
            (0, o.e7)([f.default], () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
            }) && y === I.y0.BITE_SIZE,
        [D, M] = a.useState(!1);
    (0, u.Z)(() => M(!0), L ? v : null);
    let P = D ? [s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP] : [],
        [U, w] = (0, _.US)(P),
        x = () => {
            (0, m.openUserProfileModal)({
                userId: t.id,
                section: I.oh.ACTIVITY,
                sourceAnalyticsLocations: R,
                ...C
            }),
                null == r || r();
        };
    return (0, i.jsx)(l.Popout, {
        shouldShow: null != U,
        spacing: null != b ? O : N,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: r } = e;
            return (0, i.jsx)(l.Dialog, {
                ref: r,
                children: (0, i.jsx)(E.ZP, {
                    header: g.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_EDUCATION_TOOLTIP_HEADER,
                    content: g.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_EDUCATION_TOOLTIP_BODY,
                    className: S.tooltip,
                    asset: (0, i.jsx)('img', {
                        alt: '',
                        src: A,
                        className: S.asset
                    }),
                    buttonCTA: g.Z.Messages.CHECK_IT_OUT,
                    secondaryButtonCTA: g.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS,
                    buttonProps: {
                        color: l.ButtonColors.BRAND_INVERTED,
                        size: l.Button.Sizes.SMALL
                    },
                    secondaryButtonProps: {
                        color: l.ButtonColors.BRAND,
                        size: l.Button.Sizes.SMALL
                    },
                    buttonLayout: E._F.STACKED,
                    caretPosition: 'right' === t ? E.DF.LEFT_TOP : E.DF.RIGHT_TOP,
                    onClick: x,
                    onSecondaryClick: n,
                    markAsDismissed: w
                })
            });
        },
        children: (e) =>
            n({
                ...e,
                onAutoDismiss: () => w(T.L.AUTO_DISMISS)
            })
    });
}

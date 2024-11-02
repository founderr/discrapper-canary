n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    l = n(980591),
    u = n(100527),
    c = n(906732),
    d = n(243778),
    f = n(970731),
    _ = n(594174),
    h = n(785717),
    p = n(652853),
    m = n(171368),
    g = n(228168),
    E = n(921944),
    v = n(388032),
    I = n(398813),
    S = n(881828);
let T = 32;
function b(e) {
    let { user: t, children: n, onClose: b } = e,
        { analyticsLocations: y } = (0, c.ZP)(u.Z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP),
        { context: A } = (0, h.KZ)(),
        { profileType: N, primaryColor: C } = (0, p.z)(),
        R =
            (0, a.e7)([_.default], () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
            }) && N === g.y0.BITE_SIZE,
        [O, D] = i.useState(!1);
    (0, l.Z)(() => D(!0), R ? 200 : null);
    let L = O ? [s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP] : [],
        [x, w] = (0, d.US)(L),
        M = () => {
            (0, m.openUserProfileModal)({
                userId: t.id,
                section: g.oh.ACTIVITY,
                sourceAnalyticsLocations: y,
                ...A
            }),
                null == b || b();
        };
    return (0, r.jsx)(o.Popout, {
        shouldShow: null != x,
        spacing: null != C ? T : 28,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(o.Dialog, {
                ref: i,
                children: (0, r.jsx)(f.ZP, {
                    header: v.intl.string(v.t.ZQJ629),
                    content: v.intl.string(v.t['mU+JXF']),
                    className: I.tooltip,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: S,
                        className: I.asset
                    }),
                    buttonCTA: v.intl.string(v.t.RzWDqa),
                    secondaryButtonCTA: v.intl.string(v.t.om7Ovr),
                    buttonProps: {
                        color: o.ButtonColors.BRAND_INVERTED,
                        size: o.Button.Sizes.SMALL
                    },
                    secondaryButtonProps: {
                        color: o.ButtonColors.BRAND,
                        size: o.Button.Sizes.SMALL
                    },
                    buttonLayout: f._F.STACKED,
                    caretPosition: 'right' === t ? f.DF.LEFT_TOP : f.DF.RIGHT_TOP,
                    onClick: M,
                    onSecondaryClick: n,
                    markAsDismissed: w
                })
            });
        },
        children: (e) =>
            n({
                ...e,
                onAutoDismiss: () => w(E.L.AUTO_DISMISS)
            })
    });
}

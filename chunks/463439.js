e.d(n, {
    Z: function () {
        return m;
    }
}),
    e(47120);
var r,
    i,
    o = e(200651),
    s = e(192379),
    a = e(481060),
    c = e(442837),
    l = e(194359),
    u = e(782568),
    d = e(726521),
    E = e(485664),
    N = e(699516),
    h = e(863653),
    I = e(473092),
    _ = e(650408),
    f = e(850165),
    T = e(134612),
    C = e(981631),
    g = e(388032),
    p = e(248296),
    A = e(149355);
function m(t) {
    let { senderId: n, channelId: e, hasReported: r, onReport: i, trackAnalyticsEvent: m } = t,
        S = (0, c.e7)([N.Z], () => N.Z.isBlocked(n)),
        [b, x] = s.useState(S),
        R = (0, E.o)(),
        M = (0, h.zF)('ic-take-action-web'),
        [L, j] = s.useState(!1),
        v = (0, _.q)(e),
        O = s.useMemo(() => (R ? 0 : M ? 2 : 1), [R, M]),
        B = () => {
            x(!0),
                l.Z.addRelationship({
                    userId: n,
                    context: { location: T.DL },
                    type: C.OGo.BLOCKED
                }),
                m(I.NM.USER_TAKEOVER_MODAL_BLOCK);
        },
        D = () => {
            x(!1), l.Z.unblockUser(n, { location: T.DL }), m(I.NM.USER_TAKEOVER_MODAL_UNBLOCK);
        },
        y = async () => {
            if (null != v)
                j(!0),
                    await (0, d.J7)(
                        v,
                        () => {
                            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.gn2c6e), a.ToastType.SUCCESS)), i();
                        },
                        () => {
                            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t['0YV04+']), a.ToastType.FAILURE));
                        }
                    ),
                    j(!1),
                    m(I.NM.USER_TAKEOVER_MODAL_REPORT);
        },
        k = (t) => {
            0 === t ? ((0, u.Z)(T.EI), m(I.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, u.Z)(T.$l), m(I.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, u.Z)(T.n4), m(I.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        Z = s.useMemo(() => {
            switch (O) {
                case 0:
                    return g.intl.string(g.t.sZf6c3);
                case 2:
                    return g.intl.string(g.t.HQ2nKi);
                default:
                    return g.intl.string(g.t['65XQam']);
            }
        }, [O]);
    return (0, o.jsx)(f.Z, {
        heroImageSrc: A,
        heroImageAlt: g.intl.string(g.t.RVyYCA),
        header: g.intl.string(g.t['mWO+ys']),
        description: g.intl.string(g.t.S0XtKC),
        children: (0, o.jsxs)('div', {
            className: p.buttonContainer,
            children: [
                (0, o.jsxs)(a.Button, {
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.LARGE,
                    className: p.button,
                    innerClassName: p.buttonInner,
                    onClick: () => {
                        b ? D() : B();
                    },
                    children: [
                        (0, o.jsx)(a.CircleXIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: p.buttonIcon
                        }),
                        b ? g.intl.string(g.t.XyHpKC) : g.intl.string(g.t.l4EmaW)
                    ]
                }),
                (0, o.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: p.button,
                    innerClassName: p.buttonInner,
                    onClick: y,
                    submitting: L,
                    disabled: r,
                    children: [
                        (0, o.jsx)(a.FlagIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: p.buttonIcon
                        }),
                        r ? g.intl.string(g.t.QvwOJy) : g.intl.string(g.t['7fHyEx'])
                    ]
                }),
                (0, o.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: p.button,
                    innerClassName: p.buttonInner,
                    onClick: () => k(O),
                    children: [
                        (0, o.jsx)(a.ChatIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: p.buttonIcon
                        }),
                        Z
                    ]
                })
            ]
        })
    });
}
((i = r || (r = {}))[(i.CTL = 0)] = 'CTL'), (i[(i.NO_FILTR = 1)] = 'NO_FILTR'), (i[(i.THROUGHLINE = 2)] = 'THROUGHLINE');

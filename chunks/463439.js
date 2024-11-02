e.d(n, {
    Z: function () {
        return m;
    }
}),
    e(47120);
var i,
    o,
    s = e(200651),
    r = e(192379),
    a = e(481060),
    c = e(442837),
    l = e(194359),
    u = e(782568),
    d = e(726521),
    E = e(485664),
    N = e(699516),
    I = e(863653),
    h = e(473092),
    _ = e(941362),
    f = e(850165),
    T = e(134612),
    C = e(981631),
    g = e(388032),
    p = e(248296),
    A = e(149355);
function m(t) {
    let { senderId: n, channelId: e, hasReported: i, onReport: o, trackAnalyticsEvent: m } = t,
        S = (0, c.e7)([N.Z], () => N.Z.isBlocked(n)),
        [b, x] = r.useState(S),
        R = (0, E.o)(),
        M = (0, I.zF)('ic-take-action-web'),
        [L, v] = r.useState(!1),
        O = (0, _.q)(e),
        j = r.useMemo(() => (R ? 0 : M ? 2 : 1), [R, M]),
        B = () => {
            x(!0),
                l.Z.addRelationship({
                    userId: n,
                    context: { location: T.DL },
                    type: C.OGo.BLOCKED
                }),
                m(h.NM.USER_TAKEOVER_MODAL_BLOCK);
        },
        D = () => {
            x(!1), l.Z.unblockUser(n, { location: T.DL }), m(h.NM.USER_TAKEOVER_MODAL_UNBLOCK);
        },
        y = async () => {
            if (null != O)
                v(!0),
                    await (0, d.J7)(
                        O,
                        () => {
                            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.gn2c6e), a.ToastType.SUCCESS)), o();
                        },
                        () => {
                            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t['0YV04+']), a.ToastType.FAILURE));
                        }
                    ),
                    v(!1),
                    m(h.NM.USER_TAKEOVER_MODAL_REPORT);
        },
        k = (t) => {
            0 === t ? ((0, u.Z)(T.EI), m(h.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, u.Z)(T.$l), m(h.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, u.Z)(T.n4), m(h.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        Z = r.useMemo(() => {
            switch (j) {
                case 0:
                    return g.intl.string(g.t.sZf6c3);
                case 2:
                    return g.intl.string(g.t.HQ2nKi);
                default:
                    return g.intl.string(g.t['65XQam']);
            }
        }, [j]);
    return (0, s.jsx)(f.Z, {
        heroImageSrc: A,
        heroImageAlt: g.intl.string(g.t.RVyYCA),
        header: g.intl.string(g.t['mWO+ys']),
        description: g.intl.string(g.t.S0XtKC),
        children: (0, s.jsxs)('div', {
            className: p.buttonContainer,
            children: [
                (0, s.jsxs)(a.Button, {
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.LARGE,
                    className: p.button,
                    innerClassName: p.buttonInner,
                    onClick: () => {
                        b ? D() : B();
                    },
                    children: [
                        (0, s.jsx)(a.CircleXIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: p.buttonIcon
                        }),
                        b ? g.intl.string(g.t.XyHpKC) : g.intl.string(g.t.l4EmaW)
                    ]
                }),
                (0, s.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: p.button,
                    innerClassName: p.buttonInner,
                    onClick: y,
                    submitting: L,
                    disabled: i,
                    children: [
                        (0, s.jsx)(a.FlagIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: p.buttonIcon
                        }),
                        i ? g.intl.string(g.t.QvwOJy) : g.intl.string(g.t['7fHyEx'])
                    ]
                }),
                (0, s.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: p.button,
                    innerClassName: p.buttonInner,
                    onClick: () => k(j),
                    children: [
                        (0, s.jsx)(a.ChatIcon, {
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
((o = i || (i = {}))[(o.CTL = 0)] = 'CTL'), (o[(o.NO_FILTR = 1)] = 'NO_FILTR'), (o[(o.THROUGHLINE = 2)] = 'THROUGHLINE');

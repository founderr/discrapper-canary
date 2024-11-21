e.d(n, {
    Z: function () {
        return S;
    }
}),
    e(47120);
var o,
    r,
    i = e(200651),
    s = e(192379),
    a = e(481060),
    c = e(442837),
    l = e(194359),
    u = e(782568),
    d = e(726521),
    E = e(485664),
    N = e(681678),
    h = e(699516),
    I = e(863653),
    _ = e(473092),
    f = e(650408),
    C = e(850165),
    T = e(134612),
    p = e(981631),
    A = e(388032),
    g = e(248296),
    m = e(149355);
function S(t) {
    let { senderId: n, channelId: e, hasReported: o, onReport: r, trackAnalyticsEvent: S } = t,
        b = (0, c.e7)([h.Z], () => h.Z.isBlocked(n)),
        [x, R] = s.useState(b),
        M = (0, E.o)(),
        L = (0, I.zF)('ic-take-action-web'),
        [j, v] = s.useState(!1),
        O = (0, f.q)(e),
        B = s.useMemo(() => (M ? 0 : L ? 2 : 1), [M, L]),
        D = () => {
            R(!0),
                l.Z.addRelationship({
                    userId: n,
                    context: { location: T.DL },
                    type: p.OGo.BLOCKED
                }),
                S(_.NM.USER_TAKEOVER_MODAL_BLOCK),
                N.Z.showBlockSuccessToast(n);
        },
        Z = () => {
            R(!1), l.Z.unblockUser(n, { location: T.DL }), S(_.NM.USER_TAKEOVER_MODAL_UNBLOCK), N.Z.showUnblockSuccessToast(n);
        },
        k = async () => {
            if (null != O)
                v(!0),
                    await (0, d.J7)(
                        O,
                        () => {
                            N.Z.showReportSuccessToast(n), r();
                        },
                        () => {
                            N.Z.showFailedToast();
                        }
                    ),
                    v(!1),
                    S(_.NM.USER_TAKEOVER_MODAL_REPORT);
        },
        y = (t) => {
            0 === t ? ((0, u.Z)(T.EI), S(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, u.Z)(T.$l), S(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, u.Z)(T.n4), S(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        w = s.useMemo(() => {
            switch (B) {
                case 0:
                    return A.intl.string(A.t.sZf6c3);
                case 2:
                    return A.intl.string(A.t.HQ2nKi);
                default:
                    return A.intl.string(A.t['65XQam']);
            }
        }, [B]);
    return (0, i.jsx)(C.Z, {
        heroImageSrc: m,
        heroImageAlt: A.intl.string(A.t.RVyYCA),
        header: A.intl.string(A.t['mWO+ys']),
        description: A.intl.string(A.t.S0XtKC),
        children: (0, i.jsxs)('div', {
            className: g.buttonContainer,
            children: [
                (0, i.jsxs)(a.Button, {
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.LARGE,
                    className: g.button,
                    innerClassName: g.buttonInner,
                    onClick: () => {
                        x ? Z() : D();
                    },
                    children: [
                        (0, i.jsx)(a.CircleXIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: g.buttonIcon
                        }),
                        x ? A.intl.string(A.t.XyHpKC) : A.intl.string(A.t.l4EmaW)
                    ]
                }),
                (0, i.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: g.button,
                    innerClassName: g.buttonInner,
                    onClick: k,
                    submitting: j,
                    disabled: o,
                    children: [
                        (0, i.jsx)(a.FlagIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: g.buttonIcon
                        }),
                        o ? A.intl.string(A.t.QvwOJy) : A.intl.string(A.t['7fHyEx'])
                    ]
                }),
                (0, i.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: g.button,
                    innerClassName: g.buttonInner,
                    onClick: () => y(B),
                    children: [
                        (0, i.jsx)(a.ChatIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            color: a.tokens.colors.WHITE,
                            className: g.buttonIcon
                        }),
                        w
                    ]
                })
            ]
        })
    });
}
((r = o || (o = {}))[(r.CTL = 0)] = 'CTL'), (r[(r.NO_FILTR = 1)] = 'NO_FILTR'), (r[(r.THROUGHLINE = 2)] = 'THROUGHLINE');

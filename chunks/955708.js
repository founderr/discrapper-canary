e.r(n),
    e.d(n, {
        InappropriateConversationModalSlideKeys: function () {
            return r;
        }
    }),
    e(47120);
var r,
    i,
    o = e(200651),
    s = e(192379),
    a = e(481060),
    c = e(378298),
    l = e(473092),
    u = e(684471),
    d = e(745982),
    E = e(463439),
    N = e(388032),
    h = e(72540);
((i = r || (r = {}))[(i.INTRO = 0)] = 'INTRO'), (i[(i.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (i[(i.TAKE_ACTION = 2)] = 'TAKE_ACTION');
n.default = (t) => {
    let { warningId: n, warningType: e, senderId: r, modalProps: i, channelId: I } = t,
        [_, f] = s.useState(0),
        T = s.useMemo(
            () => ({
                channelId: I,
                senderId: r,
                warningId: n,
                warningType: e,
                isNudgeWarning: !1
            }),
            [I, r, n, e]
        );
    s.useEffect(() => {
        (0, l.KQ)({
            ...T,
            viewName: l.pb.SAFETY_TAKEOVER_MODAL
        });
    }, [T]);
    let C = s.useCallback(
            (t) => {
                (0, l.qc)({
                    ...T,
                    cta: t
                });
            },
            [T]
        ),
        [g, p] = s.useState(!1);
    function A(t) {
        f(t);
    }
    return (0, o.jsxs)(a.ModalRoot, {
        transitionState: i.transitionState,
        children: [
            (0, o.jsx)('div', {
                className: h.container,
                children: (0, o.jsxs)(a.Slides, {
                    width: 440,
                    activeSlide: _,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, o.jsx)(a.Slide, {
                            id: 0,
                            children: (0, o.jsx)(u.Z, {
                                warningId: n,
                                senderId: r,
                                trackAnalyticsEvent: C,
                                onNavigate: A
                            })
                        }),
                        (0, o.jsx)(a.Slide, {
                            id: 1,
                            children: (0, o.jsx)(d.Z, {
                                warningId: n,
                                senderId: r,
                                trackAnalyticsEvent: C
                            })
                        }),
                        (0, o.jsx)(a.Slide, {
                            id: 2,
                            children: (0, o.jsx)(E.Z, {
                                warningId: n,
                                senderId: r,
                                trackAnalyticsEvent: C,
                                channelId: I,
                                hasReported: g,
                                onReport: function () {
                                    p(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, o.jsxs)(a.ModalFooter, {
                className: h.footer,
                children: [
                    (0, o.jsx)(a.Button, {
                        className: h.footerButton,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.CUSTOM,
                        size: a.Button.Sizes.MIN,
                        onClick: function () {
                            i.onClose(), (0, c.T)(I, [n]), C(l.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        children: N.intl.string(N.t.cpT0Cg)
                    }),
                    0 !== _ &&
                        (0, o.jsx)(a.Button, {
                            className: h.footerButton,
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.CUSTOM,
                            size: a.Button.Sizes.MIN,
                            onClick: () => A(0),
                            children: N.intl.string(N.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
};

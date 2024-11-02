e.r(n),
    e.d(n, {
        InappropriateConversationModalSlideKeys: function () {
            return i;
        }
    }),
    e(47120);
var i,
    o,
    s = e(200651),
    r = e(192379),
    a = e(481060),
    c = e(378298),
    l = e(473092),
    u = e(684471),
    d = e(745982),
    E = e(463439),
    N = e(388032),
    I = e(70119);
((o = i || (i = {}))[(o.INTRO = 0)] = 'INTRO'), (o[(o.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (o[(o.TAKE_ACTION = 2)] = 'TAKE_ACTION');
n.default = (t) => {
    let { warningId: n, warningType: e, senderId: i, modalProps: o, channelId: h } = t,
        [_, f] = r.useState(0),
        T = r.useMemo(
            () => ({
                channelId: h,
                senderId: i,
                warningId: n,
                warningType: e,
                isNudgeWarning: !1
            }),
            [h, i, n, e]
        );
    r.useEffect(() => {
        (0, l.KQ)({
            ...T,
            viewName: l.pb.SAFETY_TAKEOVER_MODAL
        });
    }, [T]);
    let C = r.useCallback(
            (t) => {
                (0, l.qc)({
                    ...T,
                    cta: t
                });
            },
            [T]
        ),
        [g, p] = r.useState(!1);
    function A(t) {
        f(t);
    }
    return (0, s.jsxs)(a.ModalRoot, {
        transitionState: o.transitionState,
        children: [
            (0, s.jsx)('div', {
                className: I.container,
                children: (0, s.jsxs)(a.Slides, {
                    width: 440,
                    activeSlide: _,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, s.jsx)(a.Slide, {
                            id: 0,
                            children: (0, s.jsx)(u.Z, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: C,
                                onNavigate: A
                            })
                        }),
                        (0, s.jsx)(a.Slide, {
                            id: 1,
                            children: (0, s.jsx)(d.Z, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: C
                            })
                        }),
                        (0, s.jsx)(a.Slide, {
                            id: 2,
                            children: (0, s.jsx)(E.Z, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: C,
                                channelId: h,
                                hasReported: g,
                                onReport: function () {
                                    p(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, s.jsxs)(a.ModalFooter, {
                className: I.footer,
                children: [
                    (0, s.jsx)(a.Button, {
                        className: I.footerButton,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.CUSTOM,
                        size: a.Button.Sizes.MIN,
                        onClick: function () {
                            o.onClose(), (0, c.T)(h, [n]), C(l.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        children: N.intl.string(N.t.cpT0Cg)
                    }),
                    0 !== _ &&
                        (0, s.jsx)(a.Button, {
                            className: I.footerButton,
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

n.r(e),
    n.d(e, {
        SafetyToolsSlides: function () {
            return i;
        }
    }),
    n(47120);
var i,
    o,
    s = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(600164),
    c = n(367408),
    d = n(473092),
    u = n(419672),
    T = n(858597),
    S = n(486213),
    _ = n(388032),
    x = n(97694);
((o = i || (i = {})).ACTIONS = 'ACTIONS'), (o.SAFETY_TIPS = 'SAFETY_TIPS'), (o.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS');
e.default = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: o, otherUserId: A, transitionState: E } = t,
        C = null != (0, c.M)(n),
        [h, p] = l.useState('ACTIONS'),
        b = l.useCallback(
            (t) => {
                (0, d.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: o,
                    senderId: A,
                    cta: t,
                    isNudgeWarning: C
                });
            },
            [n, i, o, A, C]
        ),
        N = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, s.jsx)(r.Button, {
                look: r.Button.Looks.LINK,
                size: r.Button.Sizes.MIN,
                onClick: n,
                color: r.Button.Colors.CUSTOM,
                className: x.footerLink,
                children: e
            });
        }, []),
        R = l.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, s.jsx)(N, {
                        text: _.intl.string(_.t['13/7kZ']),
                        onClick: () => p('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [h, N]),
        L = l.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                    return _.intl.string(_.t.EtNxi4);
                case 'ABOUT_SAFETY_ALERTS':
                    return _.intl.string(_.t.qI14KC);
                default:
                    return _.intl.string(_.t.eXlt09);
            }
        }, [h]),
        m = l.useCallback(
            (t) => {
                p(t);
            },
            [p]
        );
    return (0, s.jsxs)(r.ModalRoot, {
        transitionState: E,
        'aria-label': _.intl.string(_.t.eXlt09),
        size: r.ModalSize.SMALL,
        children: [
            (0, s.jsx)(r.ModalHeader, {
                separator: !1,
                className: x.modalHeader,
                justify: a.Z.Justify.CENTER,
                children: (0, s.jsx)(r.Heading, {
                    variant: 'heading-xl/semibold',
                    children: L()
                })
            }),
            (0, s.jsx)(r.Scroller, {
                children: (0, s.jsxs)(r.Slides, {
                    activeSlide: h,
                    width: 440,
                    children: [
                        (0, s.jsx)(r.Slide, {
                            id: 'ACTIONS',
                            children: (0, s.jsx)(T.Z, {
                                otherUserId: A,
                                channelId: n,
                                warningId: i,
                                warningType: o,
                                transitionToSlide: m
                            })
                        }),
                        (0, s.jsx)(r.Slide, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, s.jsx)(u.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), b(d.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, s.jsx)(r.Slide, {
                            id: 'SAFETY_TIPS',
                            children: (0, s.jsx)(S.Z, {})
                        })
                    ]
                })
            }),
            (0, s.jsxs)(r.ModalFooter, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(N, {
                        text: _.intl.string(_.t.cpT0Cg),
                        onClick: () => {
                            e(), b(d.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    R()
                ]
            })
        ]
    });
};

s.r(t),
    s.d(t, {
        SafetyToolsSlides: function () {
            return T;
        }
    }),
    s(47120);
var T,
    o,
    a = s(735250),
    n = s(470079),
    l = s(481060),
    _ = s(600164),
    i = s(367408),
    r = s(473092),
    S = s(419672),
    E = s(858597),
    c = s(486213),
    O = s(689938),
    d = s(97694);
((o = T || (T = {})).ACTIONS = 'ACTIONS'), (o.SAFETY_TIPS = 'SAFETY_TIPS'), (o.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS');
t.default = (e) => {
    let { onClose: t, channelId: s, warningId: T, warningType: o, otherUserId: u, transitionState: A } = e,
        I = null != (0, i.M)(s),
        [L, N] = n.useState('ACTIONS'),
        C = n.useCallback(
            (e) => {
                (0, r.qc)({
                    channelId: s,
                    warningId: T,
                    warningType: o,
                    senderId: u,
                    cta: e,
                    isNudgeWarning: I
                });
            },
            [s, T, o, u, I]
        ),
        R = n.useCallback((e) => {
            let { text: t, onClick: s } = e;
            return (0, a.jsx)(l.Button, {
                look: l.Button.Looks.LINK,
                size: l.Button.Sizes.MIN,
                onClick: s,
                color: l.Button.Colors.CUSTOM,
                className: d.footerLink,
                children: t
            });
        }, []),
        x = n.useCallback(() => {
            switch (L) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, a.jsx)(R, {
                        text: O.Z.Messages.BACK,
                        onClick: () => N('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [L, R]),
        M = n.useCallback(() => {
            switch (L) {
                case 'SAFETY_TIPS':
                    return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
                case 'ABOUT_SAFETY_ALERTS':
                    return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
                default:
                    return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER;
            }
        }, [L]),
        F = n.useCallback(
            (e) => {
                N(e);
            },
            [N]
        );
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: A,
        'aria-label': O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
        size: l.ModalSize.SMALL,
        children: [
            (0, a.jsx)(l.ModalHeader, {
                separator: !1,
                className: d.modalHeader,
                justify: _.Z.Justify.CENTER,
                children: (0, a.jsx)(l.Heading, {
                    variant: 'heading-xl/semibold',
                    children: M()
                })
            }),
            (0, a.jsx)(l.Scroller, {
                children: (0, a.jsxs)(l.Slides, {
                    activeSlide: L,
                    width: 440,
                    children: [
                        (0, a.jsx)(l.Slide, {
                            id: 'ACTIONS',
                            children: (0, a.jsx)(E.Z, {
                                otherUserId: u,
                                channelId: s,
                                warningId: T,
                                warningType: o,
                                transitionToSlide: F
                            })
                        }),
                        (0, a.jsx)(l.Slide, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, a.jsx)(S.Z, {
                                channelId: s,
                                onClose: () => {
                                    t(), C(r.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, a.jsx)(l.Slide, {
                            id: 'SAFETY_TIPS',
                            children: (0, a.jsx)(c.Z, {})
                        })
                    ]
                })
            }),
            (0, a.jsxs)(l.ModalFooter, {
                justify: _.Z.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(R, {
                        text: O.Z.Messages.CLOSE,
                        onClick: () => {
                            t(), C(r.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    x()
                ]
            })
        ]
    });
};

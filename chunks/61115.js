n.r(t),
    n.d(t, {
        default: function () {
            return S;
        },
        openQuestSurveyModal: function () {
            return A;
        }
    }),
    n(47120);
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(212433),
    c = n(481060),
    d = n(600164),
    _ = n(626135),
    E = n(617136),
    f = n(113434),
    h = n(569984),
    p = n(981631),
    I = n(689938),
    m = n(950542),
    T = n(677486);
function S(e) {
    let { questId: t, survey: n, transitionState: r, onClose: i, onSubmit: o } = e,
        l = (0, f.B4)(t),
        [E, h] = s.useState(0),
        [S, A] = (0, c.useSpring)(() => ({
            from: { width: '0%' },
            config: { duration: 2500 }
        })),
        R = (e) => {
            o(),
                h(1),
                null != l &&
                    _.default.track(p.rMx.QUEST_SURVEY_SUBMITTED, {
                        ...N(l, n),
                        choice: e
                    });
        },
        O = async (e) => {
            1 === e && (await A({ width: '100%' }), i());
        };
    return (
        s.useEffect(() => {
            null != l && _.default.track(p.rMx.QUEST_SURVEY_DISPLAYED, N(l, n));
        }, []),
        null == l && i(),
        (0, a.jsx)(c.ModalRoot, {
            transitionState: r,
            size: c.ModalSize.DYNAMIC,
            className: m.modalRoot,
            children: (0, a.jsxs)(c.Slides, {
                activeSlide: E,
                width: 467,
                onSlideReady: O,
                children: [
                    (0, a.jsxs)(c.Slide, {
                        id: 0,
                        children: [
                            (0, a.jsxs)(c.ModalHeader, {
                                direction: d.Z.Direction.VERTICAL,
                                separator: !1,
                                className: m.modalHeader,
                                children: [
                                    (0, a.jsx)(c.ModalCloseButton, {
                                        className: m.closeBtn,
                                        onClick: i
                                    }),
                                    (0, a.jsx)('img', {
                                        src: T,
                                        alt: '',
                                        className: m.asset
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: n.title
                                    }),
                                    (0, a.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: n.subtitle
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.ModalContent, {
                                className: m.modalContent,
                                children: n.choices.map((e) =>
                                    (0, a.jsx)(
                                        g,
                                        {
                                            text: e,
                                            onClick: R
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    }),
                    (0, a.jsxs)(c.Slide, {
                        id: 1,
                        children: [
                            (0, a.jsxs)(c.ModalContent, {
                                className: m.completedModalContent,
                                children: [
                                    (0, a.jsx)('img', {
                                        src: T,
                                        alt: '',
                                        className: m.asset
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: I.Z.Messages.STREAM_REPORTED
                                    }),
                                    (0, a.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: I.Z.Messages.PREMIUM_SURVEY_WE_APPRECIATE_IT
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.ModalFooter, {
                                children: (0, a.jsxs)('div', {
                                    className: m.closeButtonContainer,
                                    children: [
                                        (0, a.jsx)(c.Button, {
                                            onClick: i,
                                            children: I.Z.Messages.CLOSE
                                        }),
                                        (0, a.jsx)(u.animated.div, {
                                            className: m.progressOverlay,
                                            style: S
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function g(e) {
    let { className: t, text: n, onClick: r } = e;
    return (0, a.jsxs)(c.Clickable, {
        className: l()(m.choiceContainer, t),
        onClick: () => r(n),
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                children: n
            }),
            (0, a.jsx)(c.ChevronSmallRightIcon, {})
        ]
    });
}
function A(e) {
    let t = !1;
    (0, c.openModalLazy)(
        async () => {
            let { default: r } = await Promise.resolve().then(n.bind(n, 61115));
            return (n) =>
                (0, a.jsx)(r, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    }
                });
        },
        {
            onCloseCallback: () => {
                let n = h.Z.getQuest(e.questId);
                null != n &&
                    _.default.track(p.rMx.QUEST_SURVEY_DISMISSED, {
                        ...N(n, e.survey),
                        submitted: t
                    });
            }
        }
    );
}
function N(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, E.uk)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices
    };
}
((i = r || (r = {}))[(i.SURVEY = 0)] = 'SURVEY'), (i[(i.COMPLETE = 1)] = 'COMPLETE');

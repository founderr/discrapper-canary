n.r(t),
    n.d(t, {
        default: function () {
            return I;
        },
        openQuestSurveyModal: function () {
            return T;
        }
    }),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(100621),
    c = n(481060),
    d = n(600164),
    f = n(626135),
    _ = n(617136),
    p = n(113434),
    h = n(569984),
    m = n(981631),
    g = n(388032),
    E = n(950542),
    v = n(677486);
function I(e) {
    let { questId: t, survey: n, transitionState: r, onClose: i, onSubmit: o } = e,
        l = (0, p.B4)(t),
        [_, h] = s.useState(0),
        [I, T] = (0, c.useSpring)(() => ({
            from: { width: '0%' },
            config: { duration: 2500 }
        })),
        y = (e) => {
            o(),
                h(1),
                null != l &&
                    f.default.track(m.rMx.QUEST_SURVEY_SUBMITTED, {
                        ...S(l, n),
                        choice: e.text,
                        choice_id: e.key
                    });
        },
        A = async (e) => {
            1 === e && (await T({ width: '100%' }), i());
        };
    return (
        s.useEffect(() => {
            null != l && f.default.track(m.rMx.QUEST_SURVEY_DISPLAYED, S(l, n));
        }, []),
        null == l && i(),
        (0, a.jsx)(c.ModalRoot, {
            transitionState: r,
            size: c.ModalSize.DYNAMIC,
            className: E.modalRoot,
            children: (0, a.jsxs)(c.Slides, {
                activeSlide: _,
                width: 467,
                onSlideReady: A,
                children: [
                    (0, a.jsxs)(c.Slide, {
                        id: 0,
                        children: [
                            (0, a.jsxs)(c.ModalHeader, {
                                direction: d.Z.Direction.VERTICAL,
                                separator: !1,
                                className: E.modalHeader,
                                children: [
                                    (0, a.jsx)(c.ModalCloseButton, {
                                        className: E.closeBtn,
                                        onClick: i
                                    }),
                                    (0, a.jsx)('img', {
                                        src: v,
                                        alt: '',
                                        className: E.asset
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
                                className: E.modalContent,
                                children: n.choices.map((e) =>
                                    (0, a.jsx)(
                                        b,
                                        {
                                            choice: e,
                                            onClick: y
                                        },
                                        e.key
                                    )
                                )
                            })
                        ]
                    }),
                    (0, a.jsxs)(c.Slide, {
                        id: 1,
                        children: [
                            (0, a.jsxs)(c.ModalContent, {
                                className: E.completedModalContent,
                                children: [
                                    (0, a.jsx)('img', {
                                        src: v,
                                        alt: '',
                                        className: E.asset
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: g.intl.string(g.t.KTjjrK)
                                    }),
                                    (0, a.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: g.intl.string(g.t.AvbrEB)
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.ModalFooter, {
                                children: (0, a.jsxs)('div', {
                                    className: E.closeButtonContainer,
                                    children: [
                                        (0, a.jsx)(c.Button, {
                                            onClick: i,
                                            children: g.intl.string(g.t.cpT0Cg)
                                        }),
                                        (0, a.jsx)(u.animated.div, {
                                            className: E.progressOverlay,
                                            style: I
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
function b(e) {
    let { className: t, choice: n, onClick: r } = e;
    return (0, a.jsxs)(c.Clickable, {
        className: l()(E.choiceContainer, t),
        onClick: () => r(n),
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                children: n.text
            }),
            (0, a.jsx)(c.ChevronSmallRightIcon, {})
        ]
    });
}
function T(e) {
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
                    f.default.track(m.rMx.QUEST_SURVEY_DISMISSED, {
                        ...S(n, e.survey),
                        submitted: t
                    });
            }
        }
    );
}
function S(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, _.uk)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text)
    };
}
((i = r || (r = {}))[(i.SURVEY = 0)] = 'SURVEY'), (i[(i.COMPLETE = 1)] = 'COMPLETE');

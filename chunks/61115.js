n.r(t),
    n.d(t, {
        default: function () {
            return m;
        },
        openQuestSurveyModal: function () {
            return S;
        }
    }),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(600164),
    u = n(626135),
    c = n(617136),
    d = n(113434),
    _ = n(569984),
    E = n(981631),
    f = n(689938),
    h = n(950542),
    p = n(677486),
    I = n(288633);
function m(e) {
    let { questId: t, survey: n, transitionState: a, onClose: c, onSubmit: _ } = e,
        f = (0, d.B4)(t),
        [I, m] = i.useState(null),
        S = (e) => {
            m(e),
                setTimeout(c, 2500),
                _(),
                u.default.track(E.rMx.QUEST_SURVEY_SUBMITTED, {
                    ...g(f, n),
                    choice: e
                });
        };
    return (
        i.useEffect(() => {
            u.default.track(E.rMx.QUEST_SURVEY_DISPLAYED, g(f, n));
        }, []),
        null == f && c(),
        (0, r.jsxs)(o.ModalRoot, {
            transitionState: a,
            size: o.ModalSize.DYNAMIC,
            className: h.modalRoot,
            children: [
                (0, r.jsxs)(o.ModalHeader, {
                    direction: l.Z.Direction.VERTICAL,
                    separator: !1,
                    className: h.modalHeader,
                    children: [
                        (0, r.jsx)(o.ModalCloseButton, {
                            className: h.closeBtn,
                            onClick: c
                        }),
                        (0, r.jsx)('img', {
                            src: p,
                            alt: '',
                            className: h.asset
                        }),
                        (0, r.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            className: h.title,
                            children: n.title
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: n.subtitle
                        })
                    ]
                }),
                (0, r.jsx)(o.ModalContent, {
                    className: h.modalContent,
                    children: n.choices.map((e) => {
                        let t = I === e;
                        return (0, r.jsx)(
                            T,
                            {
                                className: s()({
                                    [h.selected]: null != I && t,
                                    [h.notSelected]: null != I && !t
                                }),
                                text: e,
                                selected: t,
                                onClick: S
                            },
                            e
                        );
                    })
                })
            ]
        })
    );
}
function T(e) {
    let { className: t, text: n, selected: i, onClick: a } = e;
    return (0, r.jsxs)(o.Clickable, {
        className: s()(h.choiceContainer, t),
        onClick: () => a(n),
        children: [
            (0, r.jsxs)('div', {
                className: h.choiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: n
                    }),
                    i &&
                        (0, r.jsxs)('div', {
                            className: h.choiceSubtitleContainer,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: f.Z.Messages.QUESTS_DISMISSAL_SURVEY_THANKS
                                }),
                                (0, r.jsx)('img', {
                                    src: I,
                                    alt: '',
                                    className: h.heartWumpusIcon
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.chevronContainer,
                children: [
                    i &&
                        (0, r.jsx)(o.CircleCheckIcon, {
                            className: h.circleIcon,
                            color: 'currentColor',
                            size: 'sm'
                        }),
                    (0, r.jsx)(o.ChevronSmallRightIcon, {})
                ]
            })
        ]
    });
}
function S(e) {
    let t = !1;
    (0, o.openModalLazy)(
        async () => {
            let { default: i } = await Promise.resolve().then(n.bind(n, 61115));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    }
                });
        },
        {
            onCloseCallback: () => {
                let n = _.Z.getQuest(e.questId);
                null != n &&
                    u.default.track(E.rMx.QUEST_SURVEY_DISMISSED, {
                        ...g(n, e.survey),
                        submitted: t
                    });
            }
        }
    );
}
function g(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, c.uk)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices
    };
}

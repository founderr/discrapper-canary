n.r(t),
    n.d(t, {
        default: function () {
            return f;
        },
        openQuestSurveyModal: function () {
            return p;
        }
    }),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(600164),
    u = n(113434),
    c = n(689938),
    d = n(950542),
    _ = n(677486),
    E = n(288633);
function f(e) {
    let { questId: t, survey: n, transitionState: a, onClose: c } = e,
        E = (0, u.B4)(t),
        [f, p] = i.useState(null),
        I = (e) => {
            p(e), setTimeout(c, 2500);
        };
    return (
        i.useEffect(() => {}, []),
        null == E && c(),
        (0, r.jsxs)(o.ModalRoot, {
            transitionState: a,
            size: o.ModalSize.DYNAMIC,
            className: d.modalRoot,
            children: [
                (0, r.jsxs)(o.ModalHeader, {
                    direction: l.Z.Direction.VERTICAL,
                    separator: !1,
                    className: d.modalHeader,
                    children: [
                        (0, r.jsx)(o.ModalCloseButton, {
                            className: d.closeBtn,
                            onClick: c
                        }),
                        (0, r.jsx)('img', {
                            src: _,
                            alt: '',
                            className: d.asset
                        }),
                        (0, r.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            className: d.title,
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
                    className: d.modalContent,
                    children: n.choices.map((e) => {
                        let t = f === e;
                        return (0, r.jsx)(
                            h,
                            {
                                className: s()({
                                    [d.selected]: null != f && t,
                                    [d.notSelected]: null != f && !t
                                }),
                                text: e,
                                selected: t,
                                onClick: I
                            },
                            e
                        );
                    })
                })
            ]
        })
    );
}
function h(e) {
    let { className: t, text: n, selected: i, onClick: a } = e;
    return (0, r.jsxs)(o.Clickable, {
        className: s()(d.choiceContainer, t),
        onClick: () => a(n),
        children: [
            (0, r.jsxs)('div', {
                className: d.choiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: n
                    }),
                    i &&
                        (0, r.jsxs)('div', {
                            className: d.choiceSubtitleContainer,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: c.Z.Messages.QUESTS_DISMISSAL_SURVEY_THANKS
                                }),
                                (0, r.jsx)('img', {
                                    src: E,
                                    alt: '',
                                    className: d.heartWumpusIcon
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: d.chevronContainer,
                children: [
                    i &&
                        (0, r.jsx)(o.CircleCheckIcon, {
                            className: d.circleIcon,
                            color: 'currentColor',
                            size: 'sm'
                        }),
                    (0, r.jsx)(o.ChevronSmallRightIcon, {})
                ]
            })
        ]
    });
}
function p(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 61115));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                ...e
            });
    });
}

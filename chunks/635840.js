s.d(t, {
    Z: function () {
        return N;
    }
}),
    s(47120);
var a = s(200651),
    n = s(192379),
    C = s(481060),
    i = s(153867),
    _ = s(626135),
    o = s(981631),
    l = s(689938),
    r = s(310354);
let I = [
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH',
        nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE',
        nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH',
        nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE',
        nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER',
        nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER
    }
];
function N(e) {
    let { application: t, subscriptionId: s, onClose: N } = e,
        [c, A] = n.useState(!1),
        [d, S] = n.useState(null),
        [O, E] = n.useState(''),
        T = n.useCallback(() => {
            null != d &&
                (_.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: d,
                    application_id: t.id,
                    reason: O,
                    subscription_id: s
                }),
                N());
        }, [t.id, s, d, N, O]);
    return (
        n.useEffect(() => {
            i.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: c });
        }, [c]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(C.ModalHeader, {
                    className: r.headerContainer,
                    separator: !1,
                    children: [
                        (0, a.jsxs)('div', {
                            className: r.titleContainer,
                            children: [
                                (0, a.jsx)(C.Text, {
                                    className: r.headerTitle,
                                    variant: 'text-lg/semibold',
                                    children: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE
                                }),
                                (0, a.jsx)(C.ModalCloseButton, {
                                    className: r.modalCloseButton,
                                    onClick: N
                                })
                            ]
                        }),
                        (0, a.jsx)(C.Spacer, { size: 8 }),
                        (0, a.jsx)(C.Text, {
                            className: r.headerSubtitle,
                            variant: 'text-md/medium',
                            children: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE
                        })
                    ]
                }),
                (0, a.jsxs)(C.ModalContent, {
                    children: [
                        (0, a.jsx)('div', {
                            className: r.answerChoicesContainer,
                            children: (0, a.jsx)(C.RadioGroup, {
                                value: d,
                                options: I.map((e) => {
                                    let { nameGetter: t, value: s } = e;
                                    return {
                                        name: t(),
                                        value: s
                                    };
                                }),
                                onChange: (e) => S(e.value),
                                withTransparentBackground: !0
                            })
                        }),
                        'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER' === d &&
                            (0, a.jsx)(C.TextInput, {
                                autoFocus: !0,
                                className: r.otherField,
                                placeholder: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
                                value: O,
                                onChange: E
                            })
                    ]
                }),
                (0, a.jsxs)(C.ModalFooter, {
                    className: r.footer,
                    children: [
                        (0, a.jsx)(C.Button, {
                            onClick: T,
                            color: C.Button.Colors.BRAND,
                            disabled: null == d,
                            children: l.Z.Messages.SUBMIT
                        }),
                        (0, a.jsx)(C.Checkbox, {
                            type: C.Checkbox.Types.INVERTED,
                            value: c,
                            onChange: (e, t) => A(t),
                            size: 20,
                            className: r.__invalid_checkbox,
                            children: (0, a.jsx)(C.Text, {
                                variant: 'text-sm/medium',
                                children: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN
                            })
                        })
                    ]
                })
            ]
        })
    );
}

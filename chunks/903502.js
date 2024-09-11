n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(442837),
    i = n(481060),
    o = n(570140),
    s = n(178635),
    c = n(115470),
    u = n(511010),
    d = n(246992),
    h = n(501775);
let m = 60000,
    x = 1440000,
    f = [
        {
            label: 'second(s)',
            value: 1000
        },
        {
            label: 'minute(s)',
            value: 60000
        },
        {
            label: 'day(s)',
            value: 1440000
        }
    ];
function p() {
    let [e, t] = a.useState(null),
        [n, p] = a.useState(0),
        [g, b] = a.useState(1000),
        [v, j] = a.useState(0),
        C = (0, l.e7)([c.Z], () => {
            var t;
            return null === e ? null : null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t ? t : s.R[e];
        }),
        _ = Object.keys(s.R).map((e) => ({
            label: e,
            value: e
        })),
        T = a.useMemo(() => null != e && v >= 0 && v <= 100 && n >= 0, [e, v, n]);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(i.FormSection, {
                title: 'Feedback Survey',
                className: h.formElement,
                tag: i.FormTitleTags.H3,
                children: (0, r.jsx)(i.SingleSelect, {
                    options: _,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: d.O$,
                    placeholder: 'Select Feedback Survey'
                })
            }),
            (0, r.jsxs)(i.FormSection, {
                title: 'Override Survey Cooldown',
                className: h.formElement,
                tag: i.FormTitleTags.H3,
                children: [
                    null != C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Z, {
                                    className: h.formDividerTitle,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current cooldown'
                                    })
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / 1000, ' second(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / m, ' minute(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / x, ' day(s)')
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override cooldown'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: h.formRow,
                        children: [
                            (0, r.jsx)(i.TextInput, {
                                min: 0,
                                value: n.toString(),
                                type: 'number',
                                placeholder: 'Duration length',
                                onChange: (e) => p(parseFloat(e))
                            }),
                            (0, r.jsx)(i.SingleSelect, {
                                options: f,
                                value: g,
                                onChange: (e) => {
                                    b(e);
                                },
                                popoutLayerContext: d.O$
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(i.FormSection, {
                title: 'Override Survey Chance',
                className: h.formElement,
                tag: i.FormTitleTags.H3,
                children: [
                    null != C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Z, {
                                    className: h.formDividerTitle,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current chance'
                                    })
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(100 * C.chance, '%')
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override chance'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: h.formRow,
                        children: [
                            (0, r.jsx)(i.TextInput, {
                                min: 0,
                                max: 100,
                                value: v.toString(),
                                type: 'number',
                                onChange: (e) => j(parseFloat(e))
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: '%'
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.formRow,
                children: [
                    (0, r.jsx)(i.Button, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_SET',
                                feedbackType: e,
                                cooldown: n * g,
                                chance: v / 100
                            }),
                        disabled: !T,
                        children: 'Update'
                    }),
                    (0, r.jsx)(i.Button, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_CLEAR',
                                feedbackType: e
                            }),
                        disabled: !T,
                        children: 'Clear Override'
                    })
                ]
            }),
            null == e &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: need to select a survey'
                }),
            !(n >= 0) &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: cooldown needs to be a number greater than 0'
                }),
            !(v >= 0 && v <= 100) &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: chance needs to be a number between 0 and 100'
                }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: 'Clear override resets a feedback survey to its default values'
            })
        ]
    });
}

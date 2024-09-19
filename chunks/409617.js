s.d(n, {
    Z: function () {
        return m;
    }
}),
    s(47120);
var a = s(735250),
    t = s(470079),
    i = s(120356),
    l = s.n(i),
    o = s(442837),
    r = s(481060),
    c = s(570140),
    d = s(600164),
    _ = s(236289),
    E = s(788080),
    N = s(613734),
    u = s(800530),
    A = s(689938),
    x = s(332384),
    I = s(487043);
function m(e) {
    let { className: n, onClose: s, onNext: i, onBack: m } = e,
        S = (0, N.U0)(),
        C = (0, o.e7)([_.Z], () => _.Z.getFreeTextAppealReason()),
        [T, h] = t.useState(''),
        [L, M] = t.useState(!1);
    t.useEffect(() => {
        h(null != C ? C : ''), M(S === u.bK.SOMETHING_ELSE);
    }, [C, S]);
    let p = (e) => {
            M(e === u.bK.SOMETHING_ELSE),
                e !== u.bK.SOMETHING_ELSE &&
                    (h(''),
                    c.Z.dispatch({
                        type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                        userInput: ''
                    })),
                c.Z.dispatch({
                    type: 'SAFETY_HUB_APPEAL_SIGNAL_SELECT',
                    signal: e
                });
        },
        P = u.RY.map((e) => ({
            value: e,
            name: (0, E.ox)(e)
        }));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                direction: d.Z.Direction.VERTICAL,
                className: I.header,
                separator: !1,
                children: [
                    (0, a.jsx)(r.Heading, {
                        className: I.title,
                        variant: 'heading-xl/semibold',
                        children: A.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
                    }),
                    (0, a.jsx)(r.Text, {
                        className: I.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
                    }),
                    null != s &&
                        (0, a.jsx)(r.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: l()(x.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, a.jsx)(r.RadioGroup, {
                        radioPosition: 'right',
                        radioItemClassName: I.radioItem,
                        size: r.RadioGroup.Sizes.NOT_SET,
                        value: S,
                        options: P,
                        onChange: (e) => {
                            let { value: n } = e;
                            return p(n);
                        }
                    }),
                    L &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(r.TextArea, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: A.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
                                    value: T,
                                    onChange: h,
                                    autoFocus: !0
                                }),
                                (0, a.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-muted',
                                    children: A.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
                                })
                            ]
                        }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        className: x.disclaimer,
                        children: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format()
                    })
                ]
            }),
            (0, a.jsxs)(r.ModalFooter, {
                children: [
                    (0, a.jsx)(r.Button, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: T
                            }),
                                null == i || i();
                        },
                        color: r.Button.Colors.BRAND,
                        children: A.Z.Messages.NEXT
                    }),
                    (0, a.jsx)(r.Button, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: T
                            }),
                                null == m || m();
                        },
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        children: A.Z.Messages.BACK
                    })
                ]
            })
        ]
    });
}

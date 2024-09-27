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
    let { className: n, isDsaEligible: s = !1, onClose: i, onNext: m, onBack: S } = e,
        C = (0, N.U0)(),
        T = (0, o.e7)([_.Z], () => _.Z.getFreeTextAppealReason()),
        [h, L] = t.useState(''),
        [M, p] = t.useState(!1);
    t.useEffect(() => {
        L(null != T ? T : ''), p(C === u.bK.SOMETHING_ELSE);
    }, [T, C, s]);
    let P = (e) => {
            p(e === u.bK.SOMETHING_ELSE),
                e !== u.bK.SOMETHING_ELSE &&
                    (L(''),
                    c.Z.dispatch({
                        type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                        userInput: ''
                    })),
                c.Z.dispatch({
                    type: 'SAFETY_HUB_APPEAL_SIGNAL_SELECT',
                    signal: e
                });
        },
        O = u.RY.map((e) => ({
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
                    null != i &&
                        (0, a.jsx)(r.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: i
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
                        value: C,
                        options: O,
                        onChange: (e) => {
                            let { value: n } = e;
                            return P(n);
                        }
                    }),
                    s &&
                        M &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(r.TextArea, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: A.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
                                    value: h,
                                    onChange: L,
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
                                userInput: h
                            }),
                                null == m || m();
                        },
                        color: r.Button.Colors.BRAND,
                        children: A.Z.Messages.NEXT
                    }),
                    (0, a.jsx)(r.Button, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: h
                            }),
                                null == S || S();
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

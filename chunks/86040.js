s.d(n, {
    C: function () {
        return c;
    },
    N: function () {
        return o;
    }
});
var t = s(200651);
s(192379);
var l = s(481060),
    i = s(600164),
    r = s(689938),
    a = s(830151);
let c = (e) => {
        let { className: n, isEmailResent: s, resendEmail: i } = e;
        return (0, t.jsx)('div', {
            className: n,
            children: (0, t.jsxs)('div', {
                className: a.awaitingWrapper,
                children: [
                    (0, t.jsx)(l.Heading, {
                        variant: 'heading-xl/bold',
                        children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                    }),
                    (0, t.jsxs)('p', {
                        children: [
                            (0, t.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                            }),
                            (0, t.jsx)('br', {}),
                            (0, t.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                            }),
                            (0, t.jsx)('br', {}),
                            (0, t.jsxs)(l.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
                                    '\xA0',
                                    s
                                        ? r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT
                                        : (0, t.jsx)(l.Anchor, {
                                              onClick: i,
                                              children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                          })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    },
    o = () =>
        (0, t.jsx)('div', {
            children: (0, t.jsx)(l.ModalFooter, {
                justify: i.Z.Justify.BETWEEN,
                align: i.Z.Align.CENTER,
                children: (0, t.jsx)(l.Button, {
                    'data-testid': 'continue',
                    color: l.Button.Colors.BRAND,
                    disabled: !0,
                    children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                })
            })
        });

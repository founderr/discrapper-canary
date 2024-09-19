t.d(s, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var n = t(735250),
    o = t(470079),
    a = t(442837),
    l = t(481060),
    r = t(809206),
    i = t(25990),
    E = t(626135),
    _ = t(155433),
    N = t(981631),
    d = t(689938),
    c = t(859565);
function A(e) {
    var s, t;
    let { emailToken: A, isSlideReady: u, onClose: C, onBack: M, onNext: S, reason: m } = e,
        [I, x] = o.useState(''),
        [T, R] = o.useState(''),
        [O, h] = o.useState(!1),
        L = (0, a.e7)([i.Z], () => i.Z.getErrors()),
        f = o.useRef(null);
    async function p(e) {
        e.preventDefault(), h(!0);
        let s = await (0, r.Mn)({
            email: I,
            emailToken: A,
            password: T
        });
        if ((h(!1), null == s ? void 0 : s.ok)) E.default.track(N.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, { change_email_reason_enum: m }), S(I);
        else {
            var t, n;
            (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, _.P)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == M || M());
        }
    }
    return (
        o.useEffect(() => {
            if (u) {
                var e;
                null === (e = f.current) || void 0 === e || e.focus();
            }
        }, [u]),
        (0, n.jsxs)('form', {
            onSubmit: p,
            children: [
                (0, n.jsxs)(l.ModalHeader, {
                    separator: !1,
                    className: c.header,
                    children: [
                        (0, n.jsx)(l.Heading, {
                            className: c.title,
                            variant: 'heading-xl/extrabold',
                            children: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
                        }),
                        (0, n.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: c.subtitle,
                            children: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
                        }),
                        (0, n.jsx)(l.ModalCloseButton, {
                            onClick: C,
                            className: c.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(l.ModalContent, {
                    className: c.content,
                    children: [
                        (0, n.jsx)(l.FormItem, {
                            title: d.Z.Messages.EMAIL,
                            error: null == L ? void 0 : null === (s = L.email) || void 0 === s ? void 0 : s[0],
                            children: (0, n.jsx)(l.TextInput, {
                                type: 'email',
                                value: I,
                                onChange: x,
                                inputRef: f
                            })
                        }),
                        (0, n.jsx)(l.FormItem, {
                            className: c.password,
                            title: d.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                            error: null == L ? void 0 : null === (t = L.password) || void 0 === t ? void 0 : t[0],
                            children: (0, n.jsx)(l.TextInput, {
                                type: 'password',
                                value: T,
                                onChange: R
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(l.ModalFooter, {
                    children: [
                        (0, n.jsx)(l.Button, {
                            type: 'submit',
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.MEDIUM,
                            submitting: O,
                            children: d.Z.Messages.DONE
                        }),
                        null != M
                            ? (0, n.jsx)(l.Button, {
                                  className: c.__invalid_cancel,
                                  look: l.Button.Looks.LINK,
                                  color: l.Button.Colors.PRIMARY,
                                  onClick: M,
                                  children: d.Z.Messages.BACK
                              })
                            : (0, n.jsx)(l.Button, {
                                  className: c.__invalid_cancel,
                                  look: l.Button.Looks.LINK,
                                  color: l.Button.Colors.PRIMARY,
                                  onClick: C,
                                  children: d.Z.Messages.CANCEL
                              })
                    ]
                })
            ]
        })
    );
}

t.r(s),
    t.d(s, {
        default: function () {
            return T;
        }
    }),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(481060),
    o = t(809206),
    l = t(112831),
    c = t(25990),
    d = t(155433),
    _ = t(981631),
    u = t(689938),
    E = t(787895);
function T(e) {
    var s, t, T, S;
    let { transitionState: I, onSuccess: N, onClose: m, requirementsUpdated: C, noSkip: A = !1 } = e,
        [g, h] = a.useState(''),
        [O, p] = a.useState(''),
        [R, x] = a.useState(''),
        [M, f] = a.useState(null),
        [D, L] = a.useState(null),
        P = (0, i.e7)([c.Z], () => c.Z.getErrors()),
        b = (0, i.e7)([c.Z], () => c.Z.getFormState()),
        Z = a.useRef(null);
    async function v(e) {
        e.preventDefault(), (0, o.b9)();
        let s = !1;
        if (('' === O ? (f(u.Z.Messages.PASSWORD_REQUIREMENTS_EMPTY), (s = !0)) : f(null), O !== R ? (L(u.Z.Messages.FORM_LABEL_NEW_PASSWORD_MISMATCH), (s = !0)) : L(null), s)) return;
        let t = await (0, o.Mn)({
            password: g,
            newPassword: O
        });
        if (null == t ? void 0 : t.ok) N();
        else {
            var n;
            (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null && (0, d.P)();
        }
    }
    return (
        a.useEffect(() => {
            if (I === r.ModalTransitionState.ENTERED) {
                var e;
                null === (e = Z.current) || void 0 === e || e.focus();
            }
        }, [I]),
        (0, n.jsxs)(r.ModalRoot, {
            transitionState: I,
            children: [
                (0, n.jsxs)(r.ModalHeader, {
                    separator: !1,
                    className: E.header,
                    children: [
                        (0, n.jsx)(l.Z, {
                            color: l.Z.Colors.HEADER_PRIMARY,
                            size: l.Z.Sizes.SIZE_24,
                            className: E.title,
                            children: u.Z.Messages.UPDATE_PASSWORD
                        }),
                        (0, n.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: E.subtitle,
                            children: C ? u.Z.Messages.FORCE_PASSWORD_UPDATE_DESCRIPTION : u.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_PASSWORD_PROMPT_DESKTOP
                        }),
                        !0 !== A &&
                            (0, n.jsx)(r.ModalCloseButton, {
                                onClick: m,
                                className: E.modalCloseButton
                            })
                    ]
                }),
                (0, n.jsxs)('form', {
                    onSubmit: v,
                    children: [
                        (0, n.jsxs)(r.ModalContent, {
                            className: E.content,
                            children: [
                                (0, n.jsx)(r.FormItem, {
                                    title: u.Z.Messages.FORM_LABEL_CURRENT_PASSWORD,
                                    error: null == P ? void 0 : null === (s = P.password) || void 0 === s ? void 0 : s[0],
                                    children: (0, n.jsx)(r.TextInput, {
                                        type: 'password',
                                        value: g,
                                        onChange: h,
                                        inputRef: Z
                                    })
                                }),
                                (0, n.jsx)(r.FormItem, {
                                    className: E.newPassword,
                                    title: u.Z.Messages.FORM_LABEL_NEW_PASSWORD,
                                    error: null !== (S = null !== (T = null == P ? void 0 : null === (t = P.new_password) || void 0 === t ? void 0 : t[0]) && void 0 !== T ? T : M) && void 0 !== S ? S : void 0,
                                    children: (0, n.jsx)(r.TextInput, {
                                        type: 'password',
                                        value: O,
                                        onChange: p
                                    })
                                }),
                                (0, n.jsx)(r.FormItem, {
                                    className: E.newPassword,
                                    title: u.Z.Messages.FORM_LABEL_CONFIRM_NEW_PASSWORD,
                                    error: null != D ? D : void 0,
                                    children: (0, n.jsx)(r.TextInput, {
                                        type: 'password',
                                        value: R,
                                        onChange: x
                                    })
                                })
                            ]
                        }),
                        (0, n.jsxs)(r.ModalFooter, {
                            children: [
                                (0, n.jsx)(r.Button, {
                                    type: 'submit',
                                    color: r.Button.Colors.BRAND,
                                    size: r.Button.Sizes.MEDIUM,
                                    submitting: b === _.QZA.SUBMITTING,
                                    children: u.Z.Messages.DONE
                                }),
                                !0 !== A &&
                                    (0, n.jsx)(r.Button, {
                                        className: E.cancel,
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        onClick: m,
                                        children: u.Z.Messages.CANCEL
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}

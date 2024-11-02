n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(809206),
    r = n(25990),
    d = n(155433),
    c = n(388032),
    u = n(859565);
function E(e) {
    var t, n;
    let { emailToken: E, isSlideReady: _, onClose: m, onBack: N, onNext: x } = e,
        [A, C] = s.useState(''),
        [h, M] = s.useState(''),
        [S, p] = s.useState(!1),
        f = (0, l.e7)([r.Z], () => r.Z.getErrors()),
        I = s.useRef(null);
    async function g(e) {
        e.preventDefault(), p(!0);
        let t = await (0, i.Mn)({
            email: A,
            emailToken: E,
            password: h
        });
        if ((p(!1), null == t ? void 0 : t.ok)) x(A);
        else {
            var n, o;
            (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, d.P)() : (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.email_token) != null && (null == N || N());
        }
    }
    return (
        s.useEffect(() => {
            if (_) {
                var e;
                null === (e = I.current) || void 0 === e || e.focus();
            }
        }, [_]),
        (0, o.jsxs)('form', {
            onSubmit: g,
            children: [
                (0, o.jsxs)(a.ModalHeader, {
                    separator: !1,
                    className: u.header,
                    children: [
                        (0, o.jsx)(a.Heading, {
                            className: u.title,
                            variant: 'heading-xl/extrabold',
                            children: c.intl.string(c.t.p3280t)
                        }),
                        (0, o.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: u.subtitle,
                            children: c.intl.string(c.t['1k44EB'])
                        }),
                        (0, o.jsx)(a.ModalCloseButton, {
                            onClick: m,
                            className: u.modalCloseButton
                        })
                    ]
                }),
                (0, o.jsxs)(a.ModalContent, {
                    className: u.content,
                    children: [
                        (0, o.jsx)(a.FormItem, {
                            title: c.intl.string(c.t['w/qqKC']),
                            error: null == f ? void 0 : null === (t = f.email) || void 0 === t ? void 0 : t[0],
                            children: (0, o.jsx)(a.TextInput, {
                                type: 'email',
                                value: A,
                                onChange: C,
                                inputRef: I
                            })
                        }),
                        (0, o.jsx)(a.FormItem, {
                            className: u.password,
                            title: c.intl.string(c.t.TmdnJy),
                            error: null == f ? void 0 : null === (n = f.password) || void 0 === n ? void 0 : n[0],
                            children: (0, o.jsx)(a.TextInput, {
                                type: 'password',
                                value: h,
                                onChange: M
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(a.ModalFooter, {
                    children: [
                        (0, o.jsx)(a.Button, {
                            type: 'submit',
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.MEDIUM,
                            submitting: S,
                            children: c.intl.string(c.t.i4jeWV)
                        }),
                        null != N
                            ? (0, o.jsx)(a.Button, {
                                  className: u.__invalid_cancel,
                                  look: a.Button.Looks.LINK,
                                  color: a.Button.Colors.PRIMARY,
                                  onClick: N,
                                  children: c.intl.string(c.t['13/7kZ'])
                              })
                            : (0, o.jsx)(a.Button, {
                                  className: u.__invalid_cancel,
                                  look: a.Button.Looks.LINK,
                                  color: a.Button.Colors.PRIMARY,
                                  onClick: m,
                                  children: c.intl.string(c.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}

n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    i = n(809206),
    a = n(25990),
    c = n(155433),
    d = n(388032),
    u = n(859565);
function E(e) {
    var t, n;
    let { emailToken: E, isSlideReady: _, onClose: m, onBack: N, onNext: x } = e,
        [A, C] = s.useState(''),
        [h, M] = s.useState(''),
        [S, p] = s.useState(!1),
        f = (0, l.e7)([a.Z], () => a.Z.getErrors()),
        I = s.useRef(null);
    async function j(e) {
        e.preventDefault(), p(!0);
        let t = await (0, i.Mn)({
            email: A,
            emailToken: E,
            password: h
        });
        if ((p(!1), null == t ? void 0 : t.ok)) x(A);
        else {
            var n, o;
            (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, c.P)() : (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.email_token) != null && (null == N || N());
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
            onSubmit: j,
            children: [
                (0, o.jsxs)(r.ModalHeader, {
                    separator: !1,
                    className: u.header,
                    children: [
                        (0, o.jsx)(r.Heading, {
                            className: u.title,
                            variant: 'heading-xl/extrabold',
                            children: d.intl.string(d.t.p3280t)
                        }),
                        (0, o.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: u.subtitle,
                            children: d.intl.string(d.t['1k44EB'])
                        }),
                        (0, o.jsx)(r.ModalCloseButton, {
                            onClick: m,
                            className: u.modalCloseButton
                        })
                    ]
                }),
                (0, o.jsxs)(r.ModalContent, {
                    className: u.content,
                    children: [
                        (0, o.jsx)(r.FormItem, {
                            title: d.intl.string(d.t['w/qqKC']),
                            error: null == f ? void 0 : null === (t = f.email) || void 0 === t ? void 0 : t[0],
                            children: (0, o.jsx)(r.TextInput, {
                                type: 'email',
                                value: A,
                                onChange: C,
                                inputRef: I
                            })
                        }),
                        (0, o.jsx)(r.FormItem, {
                            className: u.password,
                            title: d.intl.string(d.t.TmdnJy),
                            error: null == f ? void 0 : null === (n = f.password) || void 0 === n ? void 0 : n[0],
                            children: (0, o.jsx)(r.TextInput, {
                                type: 'password',
                                value: h,
                                onChange: M
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(r.ModalFooter, {
                    children: [
                        (0, o.jsx)(r.Button, {
                            type: 'submit',
                            color: r.Button.Colors.BRAND,
                            size: r.Button.Sizes.MEDIUM,
                            submitting: S,
                            children: d.intl.string(d.t.i4jeWV)
                        }),
                        null != N
                            ? (0, o.jsx)(r.Button, {
                                  className: u.__invalid_cancel,
                                  look: r.Button.Looks.LINK,
                                  color: r.Button.Colors.PRIMARY,
                                  onClick: N,
                                  children: d.intl.string(d.t['13/7kZ'])
                              })
                            : (0, o.jsx)(r.Button, {
                                  className: u.__invalid_cancel,
                                  look: r.Button.Looks.LINK,
                                  color: r.Button.Colors.PRIMARY,
                                  onClick: m,
                                  children: d.intl.string(d.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}

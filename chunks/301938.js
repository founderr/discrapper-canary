n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(773603);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    l = n(990547),
    o = n(388905),
    c = n(585483),
    u = n(573261),
    d = n(720196),
    _ = n(981631),
    h = n(689938),
    E = n(340214),
    g = n(113207);
function p(e) {
    let { setOriginalEmail: t, setSlide: i, ready: p, token: m } = e,
        [f, I] = r.useState(!1),
        [N, T] = r.useState(null),
        [A, x] = r.useState(''),
        C = r.useRef(null);
    return (
        r.useEffect(() => {
            if (p) {
                var e;
                null === (e = C.current) || void 0 === e || e.focus();
            }
        }, [p]),
        (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(o.Ee, {
                    src: null == N ? n(26230) : n(935227),
                    className: a()(g.marginBottom20, g.marginTop8)
                }),
                (0, s.jsx)(o.Dx, { children: h.Z.Messages.ACCOUNT_REVERT_NEW_PASSWORD_SLIDE_TITLE }),
                (0, s.jsxs)(o.gO, {
                    className: a()(g.marginBottom20, g.marginTop20),
                    children: [
                        (0, s.jsx)(o.II, {
                            name: 'password',
                            type: 'password',
                            label: h.Z.Messages.FORM_LABEL_NEW_PASSWORD,
                            setRef: C,
                            className: g.marginBottom20,
                            value: A,
                            onChange: x,
                            error: N,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: h.Z.Messages.ACCOUNT_REVERT_NEW_PASSWORD_INPUT_PLACEHOLDER
                        }),
                        (0, s.jsx)(o.zx, {
                            className: g.marginTop8,
                            onClick: () => {
                                if (!f) {
                                    if (0 === A.length) {
                                        T(h.Z.Messages.PASSWORD_REQUIRED), c.S.dispatch(_.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != N && T(null),
                                        I(!0),
                                        u.Z.post({
                                            url: _.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: m,
                                                password: A
                                            },
                                            trackedActionData: { event: l.NetworkActionNames.ACCOUNT_REVERT }
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                x(''), t(n), i(d.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                var t, n;
                                                T(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message), c.S.dispatch(_.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => I(!1))
                                    );
                                }
                            },
                            submitting: f,
                            disabled: f,
                            children: h.Z.Messages.ACCOUNT_REVERT_RECOVER_MY_ACCOUNT_BUTTON
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: E.buttonContainer,
                    children: (0, s.jsx)(o.zx, {
                        color: o.zx.Colors.RED,
                        look: o.zx.Looks.OUTLINED,
                        onClick: () => {
                            x(''), i(d.n.START);
                        },
                        children: h.Z.Messages.ACCOUNT_REVERT_NEW_PASSWORD_BACK_BUTTON
                    })
                })
            ]
        })
    );
}

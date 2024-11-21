n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(401430),
    u = n(155268),
    m = n(600164),
    h = n(313201),
    g = n(695103),
    p = n(388032),
    x = n(80366),
    S = n(113207);
let T = /^\d+$|^$/;
((s = i || (i = {})).LOCALHOST = 'localhost'), (s.PROXY = 'proxy');
function C(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: i,
            authorizationError: s,
            authorizing: C
        } = (0, a.cj)([g.Z], () => ({
            authorizedApplicationId: g.Z.testModeApplicationId,
            authorizationError: g.Z.error,
            authorizing: g.Z.isFetchingAuthorization
        })),
        [E, _] = l.useState(null != i ? i : ''),
        [f, I] = l.useState('8080'),
        [N, A] = l.useState('localhost'),
        b = (0, h.Dt)(),
        v = T.test(E);
    async function j() {
        d.q$();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(t);
                case 'proxy':
                    return (0, u.Z)(n);
            }
        })(N, f, E);
        null != (await d.Wt(E, e)) && t();
    }
    l.useEffect(() => () => c.Z.wait(() => d.q$()), []);
    let O = null != i && i === E,
        R = O
            ? function () {
                  d.mc(), _(''), A(null);
              }
            : j;
    return (0, r.jsxs)(o.ModalRoot, {
        'aria-labelledby': b,
        transitionState: n,
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                justify: m.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(o.FormTitle, {
                        id: b,
                        tag: 'h1',
                        className: S.marginReset,
                        children: p.intl.string(p.t.f8fzk5)
                    }),
                    (0, r.jsx)(o.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: x.modalContent,
                children: [
                    (0, r.jsx)(o.FormText, {
                        className: S.marginBottom20,
                        type: o.FormText.Types.DESCRIPTION,
                        children: p.intl.string(p.t.a6Vilp)
                    }),
                    null == s
                        ? null
                        : (0, r.jsx)(o.FormErrorBlock, {
                              className: S.marginBottom20,
                              children: s
                          }),
                    (0, r.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), R();
                        },
                        children: (0, r.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.START,
                            children: [
                                (0, r.jsx)(o.FormItem, {
                                    className: x.inputWrapper,
                                    title: p.intl.string(p.t.P6TzgI),
                                    required: !0,
                                    children: (0, r.jsx)(o.TextInput, {
                                        value: E,
                                        maxLength: 19,
                                        error: v ? null : p.intl.string(p.t.gPNgKC),
                                        onChange: function (e) {
                                            _(e);
                                        },
                                        disabled: C
                                    })
                                }),
                                (0, r.jsx)(o.FormItem, {
                                    className: x.inputWrapper,
                                    title: p.intl.string(p.t['/GTqXF']),
                                    children: (0, r.jsx)(o.SingleSelect, {
                                        isDisabled: !v || '' === E,
                                        value: N,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: p.intl.string(p.t['+Y9Y6u']),
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: p.intl.string(p.t.uaksyc),
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            A(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== N
                                    ? null
                                    : (0, r.jsx)(o.FormItem, {
                                          className: x.inputWrapper,
                                          title: p.intl.string(p.t.fF4zxs),
                                          required: !0,
                                          children: (0, r.jsx)(o.TextInput, {
                                              value: f,
                                              maxLength: 5,
                                              onChange: (e) => I(e),
                                              disabled: C
                                          })
                                      }),
                                (0, r.jsx)(o.Button, {
                                    submitting: C,
                                    type: 'submit',
                                    disabled: !v || 0 === E.length || ('localhost' === N && 0 === f.length),
                                    color: O ? o.Button.Colors.RED : o.Button.Colors.GREEN,
                                    children: O ? p.intl.string(p.t.d6TR3N) : p.intl.string(p.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

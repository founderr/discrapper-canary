t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n,
    a,
    i = t(200651),
    r = t(192379),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(401430),
    _ = t(155268),
    u = t(600164),
    E = t(313201),
    T = t(695103),
    S = t(689938),
    I = t(80366),
    N = t(113207);
let m = /^\d+$|^$/;
((a = n || (n = {})).LOCALHOST = 'localhost'), (a.PROXY = 'proxy');
function C(e) {
    let { onClose: s, transitionState: t } = e,
        {
            authorizedApplicationId: n,
            authorizationError: a,
            authorizing: C
        } = (0, o.cj)([T.Z], () => ({
            authorizedApplicationId: T.Z.testModeApplicationId,
            authorizationError: T.Z.error,
            authorizing: T.Z.isFetchingAuthorization
        })),
        [A, g] = r.useState(null != n ? n : ''),
        [h, O] = r.useState('8080'),
        [p, R] = r.useState('localhost'),
        x = (0, E.Dt)(),
        M = m.test(A);
    async function f() {
        d.q$();
        let e = (function (e, s, t) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(s);
                case 'proxy':
                    return (0, _.Z)(t);
            }
        })(p, h, A);
        null != (await d.Wt(A, e)) && s();
    }
    r.useEffect(() => () => c.Z.wait(() => d.q$()), []);
    let D = null != n && n === A,
        L = D
            ? function () {
                  d.mc(), g(''), R(null);
              }
            : f;
    return (0, i.jsxs)(l.ModalRoot, {
        'aria-labelledby': x,
        transitionState: t,
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                justify: u.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        id: x,
                        tag: 'h1',
                        className: N.marginReset,
                        children: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
                    }),
                    (0, i.jsx)(l.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, i.jsxs)(l.ModalContent, {
                className: I.modalContent,
                children: [
                    (0, i.jsx)(l.FormText, {
                        className: N.marginBottom20,
                        type: l.FormText.Types.DESCRIPTION,
                        children: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
                    }),
                    null == a
                        ? null
                        : (0, i.jsx)(l.FormErrorBlock, {
                              className: N.marginBottom20,
                              children: a
                          }),
                    (0, i.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), L();
                        },
                        children: (0, i.jsxs)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            align: u.Z.Align.START,
                            children: [
                                (0, i.jsx)(l.FormItem, {
                                    className: I.inputWrapper,
                                    title: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
                                    required: !0,
                                    children: (0, i.jsx)(l.TextInput, {
                                        value: A,
                                        maxLength: 19,
                                        error: M ? null : S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
                                        onChange: function (e) {
                                            g(e);
                                        },
                                        disabled: C
                                    })
                                }),
                                (0, i.jsx)(l.FormItem, {
                                    className: I.inputWrapper,
                                    title: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
                                    children: (0, i.jsx)(l.SingleSelect, {
                                        isDisabled: !M || '' === A,
                                        value: p,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            R(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== p
                                    ? null
                                    : (0, i.jsx)(l.FormItem, {
                                          className: I.inputWrapper,
                                          title: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
                                          required: !0,
                                          children: (0, i.jsx)(l.TextInput, {
                                              value: h,
                                              maxLength: 5,
                                              onChange: (e) => O(e),
                                              disabled: C
                                          })
                                      }),
                                (0, i.jsx)(l.Button, {
                                    submitting: C,
                                    type: 'submit',
                                    disabled: !M || 0 === A.length || ('localhost' === p && 0 === h.length),
                                    color: D ? l.Button.Colors.RED : l.Button.Colors.GREEN,
                                    children: D ? S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n,
    a,
    i = t(735250),
    r = t(470079),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(401430),
    u = t(155268),
    _ = t(600164),
    E = t(313201),
    T = t(695103),
    I = t(689938),
    S = t(395571),
    N = t(224499);
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
        [g, A] = r.useState(null != n ? n : ''),
        [h, O] = r.useState('8080'),
        [p, R] = r.useState('localhost'),
        x = (0, E.Dt)(),
        f = m.test(g);
    async function M() {
        d.q$();
        let e = (function (e, s, t) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(s);
                case 'proxy':
                    return (0, u.Z)(t);
            }
        })(p, h, g);
        null != (await d.Wt(g, e)) && s();
    }
    r.useEffect(() => () => c.Z.wait(() => d.q$()), []);
    let D = null != n && n === g,
        P = D
            ? function () {
                  d.mc(), A(''), R(null);
              }
            : M;
    return (0, i.jsxs)(l.ModalRoot, {
        'aria-labelledby': x,
        transitionState: t,
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                justify: _.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        id: x,
                        tag: 'h1',
                        className: N.marginReset,
                        children: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
                    }),
                    (0, i.jsx)(l.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, i.jsxs)(l.ModalContent, {
                className: S.modalContent,
                children: [
                    (0, i.jsx)(l.FormText, {
                        className: N.marginBottom20,
                        type: l.FormText.Types.DESCRIPTION,
                        children: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
                    }),
                    null == a
                        ? null
                        : (0, i.jsx)(l.FormErrorBlock, {
                              className: N.marginBottom20,
                              children: a
                          }),
                    (0, i.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), P();
                        },
                        children: (0, i.jsxs)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            align: _.Z.Align.START,
                            children: [
                                (0, i.jsx)(l.FormItem, {
                                    className: S.inputWrapper,
                                    title: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
                                    required: !0,
                                    children: (0, i.jsx)(l.TextInput, {
                                        value: g,
                                        maxLength: 19,
                                        error: f ? null : I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
                                        onChange: function (e) {
                                            A(e);
                                        },
                                        disabled: C
                                    })
                                }),
                                (0, i.jsx)(l.FormItem, {
                                    className: S.inputWrapper,
                                    title: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
                                    children: (0, i.jsx)(l.SingleSelect, {
                                        isDisabled: !f || '' === g,
                                        value: p,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
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
                                          className: S.inputWrapper,
                                          title: I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
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
                                    disabled: !f || 0 === g.length || ('localhost' === p && 0 === h.length),
                                    color: D ? l.Button.Colors.RED : l.Button.Colors.GREEN,
                                    children: D ? I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : I.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

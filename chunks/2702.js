n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(627341),
    n(47120);
var i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    r = n(512722),
    l = n.n(r),
    u = n(954955),
    d = n.n(u),
    c = n(278074),
    g = n(442837),
    m = n(481060),
    f = n(809206),
    E = n(118012),
    h = n(219496),
    p = n(575681),
    v = n(807369),
    _ = n(180529),
    S = n(25990),
    b = n(594174),
    T = n(74538),
    O = n(981631),
    x = n(388032),
    M = n(853487),
    y = n(803636);
let C = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, c.EQ)(t)
        .with(
            {
                type: h.K.ERROR,
                message: c.P.select()
            },
            (e) =>
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: h.K.AVAILABLE,
                message: c.P.select()
            },
            (e) =>
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, i.jsx)(m.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: x.intl.string(x.t.z7c4bG)
                  })
                : null
        );
};
function P(e) {
    var t;
    let { transitionState: n, onClose: o } = e,
        r = (0, g.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return l()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = a.useMemo(() => T.ZP.canEditDiscriminator(r) && !r.isPomelo(), [r]),
        [c, P] = a.useState(!1),
        [L, R] = a.useState(r.username),
        [k, U] = a.useState(r.discriminator),
        [I, N] = a.useState(''),
        [A, w] = a.useState(!1),
        Z = (0, g.e7)([S.Z], () => S.Z.getErrors()),
        G = (0, p.n)(),
        j = r.isPomelo() && G,
        B = (0, v.a)(L, j, !1, r.username),
        F = a.useRef(null),
        D = a.useMemo(() => {
            var e, t, n;
            return null !== (n = null == Z ? void 0 : null === (e = Z.username) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null == Z ? void 0 : null === (t = Z.discriminator) || void 0 === t ? void 0 : t[0];
        }, [Z]);
    a.useEffect(() => {
        if (n === m.ModalTransitionState.ENTERED) {
            var e;
            null === (e = F.current) || void 0 === e || e.focus();
        }
    }, [n]);
    let q = k !== r.discriminator;
    async function z(e) {
        e.preventDefault(), w(!0);
        let t = await (0, f.Mn)({
            username: L,
            discriminator: u ? k : void 0,
            password: I
        });
        w(!1), (null == t ? void 0 : t.ok) && o();
    }
    let H = a.useMemo(() => d()(P, 50), []);
    return (0, i.jsxs)(m.ModalRoot, {
        transitionState: n,
        children: [
            (0, i.jsxs)(m.ModalHeader, {
                separator: !1,
                className: M.header,
                children: [
                    (0, i.jsx)(E.Z, {
                        color: E.Z.Colors.HEADER_PRIMARY,
                        size: E.Z.Sizes.SIZE_24,
                        className: M.title,
                        children: x.intl.string(x.t['m5or5+'])
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: M.subtitle,
                        children: x.intl.string(x.t.SLJvy8)
                    }),
                    (0, i.jsx)(m.ModalCloseButton, {
                        onClick: o,
                        className: M.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: z,
                children: [
                    (0, i.jsxs)(m.ModalContent, {
                        className: M.content,
                        children: [
                            (0, i.jsx)(m.FormItem, {
                                title: x.intl.string(x.t.TWzdWl),
                                error: D,
                                children: (0, i.jsxs)('div', {
                                    className: s()(y.input, M.multiInput, {
                                        [y.error]: null != D,
                                        [y.focused]: c
                                    }),
                                    children: [
                                        (0, i.jsx)(m.TextInput, {
                                            name: 'username',
                                            'aria-label': x.intl.string(x.t.qqhR3N),
                                            value: L,
                                            maxLength: O.l$U,
                                            onChange: R,
                                            onFocus: () => H(!0),
                                            onBlur: () => H(!1),
                                            inputRef: F,
                                            className: M.multiInputFirst,
                                            inputClassName: s()(M.multiInputField, { [M.lowercase]: r.isPomelo() })
                                        }),
                                        !r.isPomelo() &&
                                            (0, i.jsx)(m.TextInput, {
                                                name: 'discriminator',
                                                'aria-label': x.intl.string(x.t.ozumaG),
                                                maxLength: 4,
                                                value: k,
                                                onChange: U,
                                                onFocus: () => H(!0),
                                                onBlur: () => H(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: M.multiInputLast,
                                                inputClassName: M.multiInputField
                                            })
                                    ]
                                })
                            }),
                            q
                                ? (0, i.jsx)(m.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: M.discriminatorChangeWarning,
                                      children: x.intl.string(x.t.mConUV)
                                  })
                                : null,
                            j
                                ? (0, i.jsx)(_.Z, {
                                      show: (null == B ? void 0 : B.type) === h.K.ERROR || c,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, i.jsx)(C, {
                                          usernameStatus: B,
                                          showHint: r.isPomelo()
                                      })
                                  })
                                : null,
                            (0, i.jsx)(m.FormItem, {
                                className: M.password,
                                title: x.intl.string(x.t.TmdnJy),
                                error: null == Z ? void 0 : null === (t = Z.password) || void 0 === t ? void 0 : t[0],
                                children: (0, i.jsx)(m.TextInput, {
                                    type: 'password',
                                    value: I,
                                    onChange: N
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(m.ModalFooter, {
                        children: [
                            (0, i.jsx)(m.Button, {
                                type: 'submit',
                                color: m.Button.Colors.BRAND,
                                size: m.Button.Sizes.MEDIUM,
                                submitting: A,
                                children: x.intl.string(x.t.i4jeWV)
                            }),
                            (0, i.jsx)(m.Button, {
                                className: M.cancel,
                                look: m.Button.Looks.LINK,
                                color: m.Button.Colors.PRIMARY,
                                onClick: o,
                                children: x.intl.string(x.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

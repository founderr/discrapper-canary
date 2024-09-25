let o, l;
n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    r = n(120356),
    s = n.n(r),
    c = n(481060),
    u = n(447543),
    _ = n(881052),
    d = n(600164),
    m = n(313201),
    p = n(703656),
    I = n(782605),
    N = n(981631),
    f = n(689938),
    E = n(87789),
    T = n(216019),
    C = n(286359);
let S = 'hTKzmak',
    L = (0, m.hQ)();
let A = ((o = window.GLOBAL_ENV.INVITE_HOST), (l = ''), null == o && ((o = location.host), (l = N.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(o).concat(l, '/')),
    D = [S, ''.concat(A).concat(S), ''.concat(A).concat('cool-people')],
    M = (e) => {
        let { onClick: t } = e;
        return (0, a.jsxs)(c.Clickable, {
            className: E.rowContainer,
            onClick: () => {
                t(), (0, p.uL)(N.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, a.jsx)('img', {
                    width: 40,
                    height: 40,
                    className: E.rowIcon,
                    alt: '',
                    src: C
                }),
                (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)(c.Heading, {
                            className: E.rowText,
                            variant: 'heading-md/semibold',
                            children: f.Z.Messages.DISCOVERY_UPSELL_HEADER
                        }),
                        (0, a.jsx)(c.Text, {
                            className: E.rowText,
                            variant: 'text-xs/normal',
                            children: f.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION
                        })
                    ]
                }),
                (0, a.jsx)('img', {
                    className: E.rowArrow,
                    alt: '',
                    src: T
                })
            ]
        });
    };
function O(e) {
    let { onBack: t, onClose: n, isSlideReady: o } = e,
        [l, r] = i.useState(''),
        [m, p] = i.useState(!1),
        [N, T] = i.useState(null),
        C = i.useRef(null);
    i.useEffect(() => {
        var e;
        o && (null === (e = C.current) || void 0 === e || e.focus());
    }, [o]);
    let O = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ('' === t) {
            T(f.Z.Messages.INVALID_INVITE_LINK_ERROR);
            return;
        }
        T(null), p(!0);
        let o = t.split('/'),
            a = o[o.length - 1];
        u.Z.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((p(!1), null == t)) {
                    T(f.Z.Messages.INSTANT_INVITE_EXPIRED);
                    return;
                }
                if (null != t.channel) {
                    let e = u.Z.getInviteContext('Join Guild', t);
                    u.Z.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), u.Z.transitionToInvite(e);
                        }
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof _.yZ || e instanceof _.Hx ? T((0, I.O)(e.code)) : T(f.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                        }
                    );
                }
            },
            (e) => {
                p(!1);
                let t = new _.yZ(e);
                T((0, I.O)(t.code));
            }
        );
    };
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)(c.ModalHeader, {
                className: E.header,
                direction: d.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: E.title,
                        variant: 'heading-xl/semibold',
                        children: f.Z.Messages.JOIN_SERVER_TITLE
                    }),
                    (0, a.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: f.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
                    }),
                    (0, a.jsx)(c.ModalCloseButton, {
                        className: E.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, a.jsxs)(c.ModalContent, {
                className: E.__invalid_content,
                children: [
                    (0, a.jsx)('form', {
                        onSubmit: O,
                        className: E.inputForm,
                        children: (0, a.jsxs)(c.FormItem, {
                            children: [
                                (0, a.jsx)(c.FormTitle, {
                                    id: L,
                                    error: N,
                                    className: s()(E.formTitle, { [E.error]: null != N }),
                                    required: !0,
                                    children: f.Z.Messages.FORM_LABEL_INVITE_LINK
                                }),
                                (0, a.jsx)(c.TextInput, {
                                    value: l,
                                    onChange: r,
                                    className: E.input,
                                    inputClassName: E.inputInner,
                                    placeholder: ''.concat(A).concat(S),
                                    inputRef: C,
                                    required: !0,
                                    'aria-labelledby': L
                                })
                            ]
                        })
                    }),
                    (0, a.jsx)(c.FormItem, {
                        title: f.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                        titleClassName: E.formTitle,
                        className: E.examplesForm,
                        children: D.map((e) =>
                            (0, a.jsx)(
                                c.Clickable,
                                {
                                    className: E.sampleLink,
                                    onClick: () => r(e),
                                    children: e
                                },
                                e
                            )
                        )
                    }),
                    (0, a.jsx)(M, { onClick: n })
                ]
            }),
            (0, a.jsxs)(c.ModalFooter, {
                className: E.footer,
                children: [
                    (0, a.jsx)(c.Button, {
                        color: c.Button.Colors.BRAND,
                        submitting: m,
                        onClick: O,
                        children: f.Z.Messages.NUF_JOIN_SERVER_BUTTON
                    }),
                    (0, a.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.MIN,
                        onClick: t,
                        children: f.Z.Messages.BACK
                    })
                ]
            })
        ]
    });
}

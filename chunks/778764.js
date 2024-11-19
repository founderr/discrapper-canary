n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    s = n(192379),
    r = n(849055),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    c = n(554300),
    d = n(313201),
    u = n(202858),
    m = n(287880),
    h = n(358085),
    g = n(960048),
    p = n(998502),
    x = n(365007),
    S = n(15980),
    T = n(755733),
    C = n(981631),
    E = n(388032),
    _ = n(676974);
function f(e) {
    let { transitionState: t, onClose: l, ticket: o, challenge: c } = e,
        m = (0, d.Dt)(),
        [S, f] = s.useState(''),
        [I, N] = s.useState(!0),
        [A, b] = s.useState(T.x.INIT),
        [v, j] = s.useState(''),
        [O, R] = s.useState(null),
        P = async () => {
            let e;
            b(T.x.REGISTER);
            let t = h.isPlatformEmbedded && p.ZP.supportsFeature(C.eRX.WEBAUTHN) ? p.ZP.webAuthnRegister(c) : r.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.Z.captureException(e), R(E.intl.string(E.t.xSCvBQ)), b(T.x.INIT);
                return;
            }
            j(e), b(T.x.NAME);
        };
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: t,
        'aria-labelledby': m,
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                className: _.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(a.Heading, {
                        id: m,
                        variant: 'heading-lg/semibold',
                        children: [A === T.x.INIT && E.intl.string(E.t.vrOCCg), A === T.x.REGISTER && E.intl.string(E.t.wePEBA), A === T.x.NAME && E.intl.string(E.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        onClick: l,
                        className: _.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(a.Slides, {
                activeSlide: A,
                width: 440,
                children: [
                    (0, i.jsxs)(a.Slide, {
                        id: T.x.INIT,
                        children: [
                            (0, i.jsxs)(a.ModalContent, {
                                className: _.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: _.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children:
                                            null != O &&
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: O
                                            })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: E.intl.string(E.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.ModalFooter, {
                                children: (0, i.jsx)(a.Button, {
                                    onClick: P,
                                    children: E.intl.string(E.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.Slide, {
                        id: T.x.REGISTER,
                        children: [
                            (0, i.jsxs)(a.ModalContent, {
                                className: _.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: _.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: E.intl.string(E.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.ModalFooter, { children: (0, i.jsx)(a.Button, { submitting: !0 }) })
                        ]
                    }),
                    (0, i.jsx)(a.Slide, {
                        id: T.x.NAME,
                        children: (0, i.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, x.Sr)(S, o, v)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => l())
                                        .catch(() => {
                                            R(E.intl.string(E.t.fEptJC)), b(T.x.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(a.ModalContent, {
                                    className: _.content,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: _.icon,
                                            children: (0, i.jsx)('img', {
                                                alt: '',
                                                src: n(637163)
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-md/normal',
                                                    children: E.intl.string(E.t['Jzd+z8'])
                                                }),
                                                (0, i.jsx)(a.TextInput, {
                                                    className: _.input,
                                                    value: S,
                                                    onChange: (e) => {
                                                        f(e), N(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.ModalFooter, {
                                    className: _.footer,
                                    children: [
                                        (0, i.jsx)(a.Button, {
                                            type: 'submit',
                                            disabled: I,
                                            children: E.intl.string(E.t['5dyZ1d'])
                                        }),
                                        (0, i.jsx)(a.Button, {
                                            look: a.Button.Looks.LINK,
                                            color: a.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                b(T.x.INIT);
                                            },
                                            children: E.intl.string(E.t['13/7kZ'])
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { onSelect: t, credential: s } = e;
    return (0, i.jsxs)(a.Menu, {
        navId: 'webauthn-credential-actions',
        onClose: o.Zy,
        'aria-label': E.intl.string(E.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, i.jsx)(a.MenuItem, {
                id: 'webauthn-edit-credential-'.concat(s.id),
                label: E.intl.string(E.t.bt75u7),
                action: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) =>
                            (0, i.jsx)(e, {
                                credential: s,
                                ...t
                            });
                    });
                }
            }),
            (0, i.jsx)(a.MenuItem, {
                id: 'webauthn-delete-credential-'.concat(s.id),
                label: E.intl.string(E.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, x.cT)(s);
                }
            })
        ]
    });
}
function N() {
    let { credentials: e, hasFetchedCredentials: t } = (0, l.cj)([S.Z], () => ({
        hasFetchedCredentials: S.Z.hasFetchedCredentials(),
        credentials: S.Z.getCredentials()
    }));
    s.useEffect(() => {
        !t && (0, x.hL)();
    }, [t]);
    let [n, r] = s.useState(!1);
    return (0, i.jsxs)(a.FormSection, {
        title: E.intl.string(E.t.y7SXYW),
        className: _.settings,
        children: [
            (0, i.jsx)(a.FormText, {
                type: a.FormText.Types.DESCRIPTION,
                className: _.description,
                children: E.intl.string(E.t.TMukAA)
            }),
            e.length > 0 &&
                (0, i.jsx)('div', {
                    className: _.credentialList,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            c.Z,
                            {
                                avatar: null,
                                name: e.name,
                                className: _.credentialItem,
                                onContextMenu: (t) => {
                                    (0, o.vq)(t, (t) =>
                                        (0, i.jsx)(I, {
                                            ...t,
                                            credential: e
                                        })
                                    );
                                },
                                children: (0, i.jsx)(a.Button, {
                                    look: a.Button.Looks.BLANK,
                                    color: a.Button.Colors.TRANSPARENT,
                                    size: a.Button.Sizes.ICON,
                                    onClick: (t) => {
                                        (0, o.vq)(t, (t) =>
                                            (0, i.jsx)(I, {
                                                ...t,
                                                credential: e
                                            })
                                        );
                                    },
                                    'aria-label': E.intl.string(E.t['+nrTbG']),
                                    innerClassName: _.credentialOptions,
                                    children: (0, i.jsx)(a.MoreVerticalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: _.__invalid_overflowIcon,
                                        colorClass: _.__invalid_overflowIconFg,
                                        'aria-hidden': !0
                                    })
                                })
                            },
                            e.id
                        )
                    )
                }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(a.Button, {
                    onClick: () => {
                        r(!0),
                            (0, x.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, a.openModal)((e) =>
                                        (0, i.jsx)(f, {
                                            ...e,
                                            ticket: t,
                                            challenge: n
                                        })
                                    );
                                })
                                .catch((e) => {
                                    e.message !== E.intl.string(E.t.N2yb9f) && g.Z.captureException(e);
                                })
                                .finally(() => {
                                    r(!1);
                                });
                    },
                    submitting: n,
                    disabled: !m.Ae,
                    size: a.Button.Sizes.SMALL,
                    children: E.intl.string(E.t.vrOCCg)
                })
            })
        ]
    });
}

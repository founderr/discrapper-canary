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
    _ = n(388032),
    E = n(676974);
function f(e) {
    let { transitionState: t, onClose: l, ticket: o, challenge: c } = e,
        m = (0, d.Dt)(),
        [S, f] = s.useState(''),
        [I, N] = s.useState(!0),
        [b, A] = s.useState(T.x.INIT),
        [v, j] = s.useState(''),
        [O, R] = s.useState(null),
        P = async () => {
            let e;
            A(T.x.REGISTER);
            let t = h.isPlatformEmbedded && p.ZP.supportsFeature(C.eRX.WEBAUTHN) ? p.ZP.webAuthnRegister(c) : r.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.Z.captureException(e), R(_.intl.string(_.t.xSCvBQ)), A(T.x.INIT);
                return;
            }
            j(e), A(T.x.NAME);
        };
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: t,
        'aria-labelledby': m,
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                className: E.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(a.Heading, {
                        id: m,
                        variant: 'heading-lg/semibold',
                        children: [b === T.x.INIT && _.intl.string(_.t.vrOCCg), b === T.x.REGISTER && _.intl.string(_.t.wePEBA), b === T.x.NAME && _.intl.string(_.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        onClick: l,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(a.Slides, {
                activeSlide: b,
                width: 440,
                children: [
                    (0, i.jsxs)(a.Slide, {
                        id: T.x.INIT,
                        children: [
                            (0, i.jsxs)(a.ModalContent, {
                                className: E.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: E.icon,
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
                                            children: _.intl.string(_.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.ModalFooter, {
                                children: (0, i.jsx)(a.Button, {
                                    onClick: P,
                                    children: _.intl.string(_.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.Slide, {
                        id: T.x.REGISTER,
                        children: [
                            (0, i.jsxs)(a.ModalContent, {
                                className: E.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: E.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: _.intl.string(_.t.aVMiX1)
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
                                            R(_.intl.string(_.t.fEptJC)), A(T.x.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(a.ModalContent, {
                                    className: E.content,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: E.icon,
                                            children: (0, i.jsx)('img', {
                                                alt: '',
                                                src: n(637163)
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-md/normal',
                                                    children: _.intl.string(_.t['Jzd+z8'])
                                                }),
                                                (0, i.jsx)(a.TextInput, {
                                                    className: E.input,
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
                                    className: E.footer,
                                    children: [
                                        (0, i.jsx)(a.Button, {
                                            type: 'submit',
                                            disabled: I,
                                            children: _.intl.string(_.t['5dyZ1d'])
                                        }),
                                        (0, i.jsx)(a.Button, {
                                            look: a.Button.Looks.LINK,
                                            color: a.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                A(T.x.INIT);
                                            },
                                            children: _.intl.string(_.t['13/7kZ'])
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
        'aria-label': _.intl.string(_.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, i.jsx)(a.MenuItem, {
                id: 'webauthn-edit-credential-'.concat(s.id),
                label: _.intl.string(_.t.bt75u7),
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
                label: _.intl.string(_.t['+xgS+P']),
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
        title: _.intl.string(_.t.y7SXYW),
        className: E.settings,
        children: [
            (0, i.jsx)(a.FormText, {
                type: a.FormText.Types.DESCRIPTION,
                className: E.description,
                children: _.intl.string(_.t.TMukAA)
            }),
            e.length > 0 &&
                (0, i.jsx)('div', {
                    className: E.credentialList,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            c.Z,
                            {
                                avatar: null,
                                name: e.name,
                                className: E.credentialItem,
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
                                    'aria-label': _.intl.string(_.t['+nrTbG']),
                                    innerClassName: E.credentialOptions,
                                    children: (0, i.jsx)(a.MoreVerticalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: E.__invalid_overflowIcon,
                                        colorClass: E.__invalid_overflowIconFg,
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
                                    e.message !== _.intl.string(_.t.N2yb9f) && g.Z.captureException(e);
                                })
                                .finally(() => {
                                    r(!1);
                                });
                    },
                    submitting: n,
                    disabled: !m.Ae,
                    size: a.Button.Sizes.SMALL,
                    children: _.intl.string(_.t.vrOCCg)
                })
            })
        ]
    });
}

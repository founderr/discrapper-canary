t.d(s, {
    Z: function () {
        return p;
    }
}),
    t(47120),
    t(773603);
var n = t(735250),
    a = t(470079),
    i = t(849055),
    r = t(442837),
    o = t(481060),
    l = t(239091),
    c = t(554300),
    d = t(313201),
    u = t(202858),
    _ = t(287880),
    E = t(358085),
    T = t(960048),
    I = t(998502),
    S = t(365007),
    N = t(15980),
    m = t(755733),
    C = t(981631),
    g = t(689938),
    A = t(824901);
function h(e) {
    let { transitionState: s, onClose: r, ticket: l, challenge: c } = e,
        _ = (0, d.Dt)(),
        [N, h] = a.useState(''),
        [O, p] = a.useState(!0),
        [R, x] = a.useState(m.x.INIT),
        [f, M] = a.useState(''),
        [D, P] = a.useState(null),
        L = async () => {
            let e;
            x(m.x.REGISTER);
            let s = E.isPlatformEmbedded && I.ZP.supportsFeature(C.eRX.WEBAUTHN) ? I.ZP.webAuthnRegister(c) : i.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await s;
            } catch (e) {
                T.Z.captureException(e), P(g.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), x(m.x.INIT);
                return;
            }
            M(e), x(m.x.NAME);
        };
    return (0, n.jsxs)(o.ModalRoot, {
        transitionState: s,
        'aria-labelledby': _,
        children: [
            (0, n.jsxs)(o.ModalHeader, {
                className: A.header,
                separator: !1,
                children: [
                    (0, n.jsxs)(o.Heading, {
                        id: _,
                        variant: 'heading-lg/semibold',
                        children: [R === m.x.INIT && g.Z.Messages.TWO_FA_WEBAUTHN_REGISTER, R === m.x.REGISTER && g.Z.Messages.TWO_FA_WEBAUTHN_INTERACT, R === m.x.NAME && g.Z.Messages.TWO_FA_WEBAUTHN_NAME]
                    }),
                    (0, n.jsx)(o.ModalCloseButton, {
                        onClick: r,
                        className: A.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(o.Slides, {
                activeSlide: R,
                width: 440,
                children: [
                    (0, n.jsxs)(o.Slide, {
                        id: m.x.INIT,
                        children: [
                            (0, n.jsxs)(o.ModalContent, {
                                className: A.content,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: A.icon,
                                        children: (0, n.jsx)('img', {
                                            alt: '',
                                            src: t(773072)
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        children:
                                            null != D &&
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: D
                                            })
                                    }),
                                    (0, n.jsx)('div', {
                                        children: (0, n.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: g.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(o.ModalFooter, {
                                children: (0, n.jsx)(o.Button, {
                                    onClick: L,
                                    children: g.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)(o.Slide, {
                        id: m.x.REGISTER,
                        children: [
                            (0, n.jsxs)(o.ModalContent, {
                                className: A.content,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: A.icon,
                                        children: (0, n.jsx)('img', {
                                            alt: '',
                                            src: t(773072)
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        children: (0, n.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: g.Z.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(o.ModalFooter, { children: (0, n.jsx)(o.Button, { submitting: !0 }) })
                        ]
                    }),
                    (0, n.jsx)(o.Slide, {
                        id: m.x.NAME,
                        children: (0, n.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, S.Sr)(N, l, f)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => r())
                                        .catch(() => {
                                            P(g.Z.Messages.ERROR_OCCURRED_TRY_AGAIN), x(m.x.INIT);
                                        });
                            },
                            children: [
                                (0, n.jsxs)(o.ModalContent, {
                                    className: A.content,
                                    children: [
                                        (0, n.jsx)('div', {
                                            className: A.icon,
                                            children: (0, n.jsx)('img', {
                                                alt: '',
                                                src: t(637163)
                                            })
                                        }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-md/normal',
                                                    children: g.Z.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
                                                }),
                                                (0, n.jsx)(o.TextInput, {
                                                    className: A.input,
                                                    value: N,
                                                    onChange: (e) => {
                                                        h(e), p(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsxs)(o.ModalFooter, {
                                    className: A.footer,
                                    children: [
                                        (0, n.jsx)(o.Button, {
                                            type: 'submit',
                                            disabled: O,
                                            children: g.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
                                        }),
                                        (0, n.jsx)(o.Button, {
                                            look: o.Button.Looks.LINK,
                                            color: o.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                x(m.x.INIT);
                                            },
                                            children: g.Z.Messages.BACK
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
function O(e) {
    let { onSelect: s, credential: a } = e;
    return (0, n.jsxs)(o.Menu, {
        navId: 'webauthn-credential-actions',
        onClose: l.Zy,
        'aria-label': g.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
        onSelect: s,
        children: [
            (0, n.jsx)(o.MenuItem, {
                id: 'webauthn-edit-credential-'.concat(a.id),
                label: g.Z.Messages.EDIT,
                action: () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await t.e('804').then(t.bind(t, 89616));
                        return (s) =>
                            (0, n.jsx)(e, {
                                credential: a,
                                ...s
                            });
                    });
                }
            }),
            (0, n.jsx)(o.MenuItem, {
                id: 'webauthn-delete-credential-'.concat(a.id),
                label: g.Z.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
                color: 'danger',
                action: () => {
                    (0, S.cT)(a);
                }
            })
        ]
    });
}
function p() {
    let { credentials: e, hasFetchedCredentials: s } = (0, r.cj)([N.Z], () => ({
        hasFetchedCredentials: N.Z.hasFetchedCredentials(),
        credentials: N.Z.getCredentials()
    }));
    a.useEffect(() => {
        !s && (0, S.hL)();
    }, [s]);
    let [t, i] = a.useState(!1);
    return (0, n.jsxs)(o.FormSection, {
        title: g.Z.Messages.TWO_FA_WEBAUTHN_TITLE,
        className: A.settings,
        children: [
            (0, n.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: A.description,
                children: g.Z.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
            }),
            e.length > 0 &&
                (0, n.jsx)('div', {
                    className: A.credentialList,
                    children: e.map((e) =>
                        (0, n.jsx)(
                            c.Z,
                            {
                                avatar: null,
                                name: e.name,
                                className: A.credentialItem,
                                onContextMenu: (s) => {
                                    (0, l.vq)(s, (s) =>
                                        (0, n.jsx)(O, {
                                            ...s,
                                            credential: e
                                        })
                                    );
                                },
                                children: (0, n.jsx)(o.Button, {
                                    look: o.Button.Looks.BLANK,
                                    color: o.Button.Colors.TRANSPARENT,
                                    size: o.Button.Sizes.ICON,
                                    onClick: (s) => {
                                        (0, l.vq)(s, (s) =>
                                            (0, n.jsx)(O, {
                                                ...s,
                                                credential: e
                                            })
                                        );
                                    },
                                    'aria-label': g.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
                                    innerClassName: A.credentialOptions,
                                    children: (0, n.jsx)(o.MoreVerticalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: A.__invalid_overflowIcon,
                                        colorClass: A.__invalid_overflowIconFg,
                                        'aria-hidden': !0
                                    })
                                })
                            },
                            e.id
                        )
                    )
                }),
            (0, n.jsx)('div', {
                children: (0, n.jsx)(o.Button, {
                    onClick: () => {
                        i(!0),
                            (0, S.L$)()
                                .then((e) => {
                                    let { ticket: s, challenge: t } = e;
                                    (0, o.openModal)((e) =>
                                        (0, n.jsx)(h, {
                                            ...e,
                                            ticket: s,
                                            challenge: t
                                        })
                                    );
                                })
                                .catch((e) => {
                                    e.message !== g.Z.Messages.MFA_V2_CANCELED && T.Z.captureException(e);
                                })
                                .finally(() => {
                                    i(!1);
                                });
                    },
                    submitting: t,
                    disabled: !_.Ae,
                    size: o.Button.Sizes.SMALL,
                    children: g.Z.Messages.TWO_FA_WEBAUTHN_REGISTER
                })
            })
        ]
    });
}

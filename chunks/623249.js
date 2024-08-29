n.r(t),
    n.d(t, {
        default: function () {
            return C;
        },
        openConsoleConnectionErrorsModal: function () {
            return A;
        }
    }),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(607070),
    u = n(600164),
    _ = n(210887),
    h = n(617136),
    E = n(113434),
    m = n(497505),
    I = n(918701),
    g = n(667105),
    p = n(981631),
    T = n(689938),
    f = n(913895),
    S = n(708901);
function C(e) {
    let { questId: t, errorHints: n, transitionState: s, onClose: C } = e,
        A = (0, E.B4)(t);
    null == A && C();
    let [v, L] = (0, a.useState)(n),
        Z = (0, E.KX)(),
        O = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        R = (0, g.g2)({
            useReducedMotion: O,
            className: f.colorTransition
        }),
        x = v.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        b = (0, I.Bz)(A),
        P = (0, l.e7)([_.Z], () => _.Z.getState().theme),
        M = (0, o.wj)(P) ? p.BRd.DARK : p.BRd.LIGHT,
        { startConsoleQuest: D, startingConsoleQuest: y } = (0, E.GI)({
            questId: A.id,
            beforeRequest: () => {
                R.startAnimation(),
                    (0, h._3)({
                        questId: A.id,
                        questContent: m.jn.CONNECTIONS_MODAL,
                        questContentCTA: h.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), L(e);
            }
        });
    return (0, i.jsxs)(c.ModalRoot, {
        transitionState: s,
        size: c.ModalSize.DYNAMIC,
        className: f.modalRoot,
        children: [
            (0, i.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: f.modalHeader,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.modalTop,
                        children: [
                            (0, i.jsx)('div', {
                                className: f.iconFrame,
                                children: (0, i.jsx)('img', {
                                    className: f.icon,
                                    alt: '',
                                    src: S
                                })
                            }),
                            (0, i.jsx)(c.ModalCloseButton, {
                                className: f.closeBtn,
                                onClick: C
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: T.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: f.upperBodyText,
                        children: Z.message
                    })
                ]
            }),
            (0, i.jsxs)(c.ModalContent, {
                className: f.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.contentHeader,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: T.Z.Messages.CONNECTED_ACCOUNTS
                            }),
                            (0, i.jsxs)(c.Clickable, {
                                className: r()(f.refreshWrapper, { [f.disabled]: y }),
                                onClick: D,
                                children: [
                                    R.render(),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: f.colorTransition,
                                        children: T.Z.Messages.REFRESH
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: f.accountsWrapper,
                        children: [
                            (0, i.jsx)(N, {
                                icon: (0, i.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: T.Z.Messages.QUESTS_THIS_PC
                            }),
                            (0, i.jsx)(N, {
                                icon: (0, i.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: T.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                                errors: b ? void 0 : x.map((e) => e.message),
                                gameTile: b
                                    ? (0, i.jsx)(c.Tooltip, {
                                          'aria-label': A.config.messages.gameTitle,
                                          text: () =>
                                              (0, i.jsxs)('div', {
                                                  className: f.tooltip,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: A.config.messages.gameTitle
                                                      }),
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: T.Z.Messages.QUESTS_GAME_DETECTED
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, i.jsx)('img', {
                                                  ...e,
                                                  className: f.gameTile,
                                                  alt: A.config.messages.gameTitle,
                                                  src: (0, I.uo)(A, M)
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(c.ModalFooter, {
                className: f.footer,
                children: [
                    (0, i.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: C,
                        className: f.footerCloseButton,
                        children: T.Z.Messages.CLOSE
                    }),
                    (0, i.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            C(),
                                (0, I.V$)(
                                    { quest: A },
                                    {
                                        content: m.jn.CONNECTIONS_MODAL,
                                        ctaContent: h.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                                    }
                                );
                        },
                        children: T.Z.Messages.QUESTS_SHOW_CONNECTIONS
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { icon: t, text: n, errors: a = [], gameTile: s } = e,
        l = a.length > 0,
        o = l ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, i.jsxs)('div', {
        className: f.connectionRow,
        children: [
            (0, i.jsxs)('div', {
                className: r()(f.connectionRowHeader, { [f.connectionRowHeaderError]: l }),
                children: [
                    (0, i.jsxs)('div', {
                        className: f.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: f.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, i.jsx)(o, {
                                color: 'currentColor',
                                size: 'sm',
                                className: r()({
                                    [f.success]: !l,
                                    [f.error]: l
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: f.errorsContainer,
                children: a.map((e) =>
                    (0, i.jsxs)(
                        'div',
                        {
                            className: f.errorRow,
                            children: [
                                (0, i.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: f.error
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: e
                                })
                            ]
                        },
                        e
                    )
                )
            })
        ]
    });
}
function A(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                ...e
            });
    });
}

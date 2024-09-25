n.r(t),
    n.d(t, {
        default: function () {
            return f;
        },
        openConsoleConnectionErrorsModal: function () {
            return S;
        }
    }),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    l = n(780384),
    c = n(481060),
    d = n(607070),
    _ = n(600164),
    u = n(210887),
    E = n(617136),
    T = n(113434),
    I = n(497505),
    R = n(918701),
    m = n(667105),
    g = n(981631),
    N = n(689938),
    C = n(24444),
    p = n(708901);
function f(e) {
    let { questId: t, errorHints: n, transitionState: r, onClose: f } = e,
        S = (0, T.B4)(t);
    null == S && f();
    let [h, M] = (0, a.useState)(n),
        x = (0, T.KX)(),
        b = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        O = (0, m.g2)({
            useReducedMotion: b,
            className: C.colorTransition
        }),
        P = h.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        v = (0, R.Bz)(S),
        L = (0, o.e7)([u.Z], () => u.Z.getState().theme),
        Z = (0, l.wj)(L) ? g.BRd.DARK : g.BRd.LIGHT,
        { startConsoleQuest: D, startingConsoleQuest: B } = (0, T.GI)({
            questId: S.id,
            beforeRequest: () => {
                O.startAnimation(),
                    (0, E._3)({
                        questId: S.id,
                        questContent: I.jn.CONNECTIONS_MODAL,
                        questContentCTA: E.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                O.stopAnimation(), M(e);
            }
        });
    return (0, s.jsxs)(c.ModalRoot, {
        transitionState: r,
        size: c.ModalSize.DYNAMIC,
        className: C.modalRoot,
        children: [
            (0, s.jsxs)(c.ModalHeader, {
                direction: _.Z.Direction.VERTICAL,
                separator: !1,
                className: C.modalHeader,
                children: [
                    (0, s.jsxs)('div', {
                        className: C.modalTop,
                        children: [
                            (0, s.jsx)('div', {
                                className: C.iconFrame,
                                children: (0, s.jsx)('img', {
                                    className: C.icon,
                                    alt: '',
                                    src: p
                                })
                            }),
                            (0, s.jsx)(c.ModalCloseButton, {
                                className: C.closeBtn,
                                onClick: f
                            })
                        ]
                    }),
                    (0, s.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: N.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: C.upperBodyText,
                        children: x.message
                    })
                ]
            }),
            (0, s.jsxs)(c.ModalContent, {
                className: C.modalContent,
                children: [
                    (0, s.jsxs)('div', {
                        className: C.contentHeader,
                        children: [
                            (0, s.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: N.Z.Messages.CONNECTED_ACCOUNTS
                            }),
                            (0, s.jsxs)(c.Clickable, {
                                className: i()(C.refreshWrapper, { [C.disabled]: B }),
                                onClick: D,
                                children: [
                                    O.render(),
                                    (0, s.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: C.colorTransition,
                                        children: N.Z.Messages.REFRESH
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: C.accountsWrapper,
                        children: [
                            (0, s.jsx)(A, {
                                icon: (0, s.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: N.Z.Messages.QUESTS_THIS_PC
                            }),
                            (0, s.jsx)(A, {
                                icon: (0, s.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: N.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                                errors: v ? void 0 : P.map((e) => e.message),
                                gameTile: v
                                    ? (0, s.jsx)(c.Tooltip, {
                                          'aria-label': S.config.messages.gameTitle,
                                          text: () =>
                                              (0, s.jsxs)('div', {
                                                  className: C.tooltip,
                                                  children: [
                                                      (0, s.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: S.config.messages.gameTitle
                                                      }),
                                                      (0, s.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: N.Z.Messages.QUESTS_GAME_DETECTED
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, s.jsx)('img', {
                                                  ...e,
                                                  className: C.gameTile,
                                                  alt: S.config.messages.gameTitle,
                                                  src: (0, R.uo)(S, Z)
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(c.ModalFooter, {
                className: C.footer,
                children: [
                    (0, s.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: f,
                        className: C.footerCloseButton,
                        children: N.Z.Messages.CLOSE
                    }),
                    (0, s.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            f(),
                                (0, R.V$)(
                                    { quest: S },
                                    {
                                        content: I.jn.CONNECTIONS_MODAL,
                                        ctaContent: E.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                                    }
                                );
                        },
                        children: N.Z.Messages.QUESTS_SHOW_CONNECTIONS
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { icon: t, text: n, errors: a = [], gameTile: r } = e,
        o = a.length > 0,
        l = o ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, s.jsxs)('div', {
        className: C.connectionRow,
        children: [
            (0, s.jsxs)('div', {
                className: i()(C.connectionRowHeader, { [C.connectionRowHeaderError]: o }),
                children: [
                    (0, s.jsxs)('div', {
                        className: C.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, s.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: C.connectionRowHeaderContent,
                        children: [
                            r,
                            (0, s.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: i()({
                                    [C.success]: !o,
                                    [C.error]: o
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: C.errorsContainer,
                children: a.map((e) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: C.errorRow,
                            children: [
                                (0, s.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: C.error
                                }),
                                (0, s.jsx)(c.Text, {
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
function S(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, s.jsx)(t, {
                ...n,
                ...e
            });
    });
}

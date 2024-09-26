n.r(t),
    n.d(t, {
        default: function () {
            return T;
        },
        openConsoleConnectionErrorsModal: function () {
            return v;
        }
    }),
    n(47120);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    i = n(780384),
    c = n(481060),
    d = n(607070),
    u = n(600164),
    p = n(210887),
    m = n(617136),
    x = n(113434),
    _ = n(497505),
    C = n(918701),
    g = n(667105),
    f = n(981631),
    E = n(689938),
    h = n(24444),
    S = n(708901);
function T(e) {
    let { questId: t, errorHints: n, transitionState: r, onClose: T } = e,
        v = (0, x.B4)(t);
    null == v && T();
    let [j, A] = (0, o.useState)(n),
        R = (0, x.KX)(),
        b = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        B = (0, g.g2)({
            useReducedMotion: b,
            className: h.colorTransition
        }),
        I = j.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        M = (0, C.Bz)(v),
        O = (0, l.e7)([p.Z], () => p.Z.getState().theme),
        y = (0, i.wj)(O) ? f.BRd.DARK : f.BRd.LIGHT,
        { startConsoleQuest: L, startingConsoleQuest: w } = (0, x.GI)({
            questId: v.id,
            beforeRequest: () => {
                B.startAnimation(),
                    (0, m._3)({
                        questId: v.id,
                        questContent: _.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), A(e);
            }
        });
    return (0, s.jsxs)(c.ModalRoot, {
        transitionState: r,
        size: c.ModalSize.DYNAMIC,
        className: h.modalRoot,
        children: [
            (0, s.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: h.modalHeader,
                children: [
                    (0, s.jsxs)('div', {
                        className: h.modalTop,
                        children: [
                            (0, s.jsx)('div', {
                                className: h.iconFrame,
                                children: (0, s.jsx)('img', {
                                    className: h.icon,
                                    alt: '',
                                    src: S
                                })
                            }),
                            (0, s.jsx)(c.ModalCloseButton, {
                                className: h.closeBtn,
                                onClick: T
                            })
                        ]
                    }),
                    (0, s.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: E.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: h.upperBodyText,
                        children: R.message
                    })
                ]
            }),
            (0, s.jsxs)(c.ModalContent, {
                className: h.modalContent,
                children: [
                    (0, s.jsxs)('div', {
                        className: h.contentHeader,
                        children: [
                            (0, s.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: E.Z.Messages.CONNECTED_ACCOUNTS
                            }),
                            (0, s.jsxs)(c.Clickable, {
                                className: a()(h.refreshWrapper, { [h.disabled]: w }),
                                onClick: L,
                                children: [
                                    B.render(),
                                    (0, s.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: h.colorTransition,
                                        children: E.Z.Messages.REFRESH
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: h.accountsWrapper,
                        children: [
                            (0, s.jsx)(N, {
                                icon: (0, s.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: E.Z.Messages.QUESTS_THIS_PC
                            }),
                            (0, s.jsx)(N, {
                                icon: (0, s.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: E.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                                errors: M ? void 0 : I.map((e) => e.message),
                                gameTile: M
                                    ? (0, s.jsx)(c.Tooltip, {
                                          'aria-label': v.config.messages.gameTitle,
                                          text: () =>
                                              (0, s.jsxs)('div', {
                                                  className: h.tooltip,
                                                  children: [
                                                      (0, s.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: v.config.messages.gameTitle
                                                      }),
                                                      (0, s.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: E.Z.Messages.QUESTS_GAME_DETECTED
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, s.jsx)('img', {
                                                  ...e,
                                                  className: h.gameTile,
                                                  alt: v.config.messages.gameTitle,
                                                  src: (0, C.uo)(v, y)
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(c.ModalFooter, {
                className: h.footer,
                children: [
                    (0, s.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: T,
                        className: h.footerCloseButton,
                        children: E.Z.Messages.CLOSE
                    }),
                    (0, s.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            T(),
                                (0, C.V$)(
                                    { quest: v },
                                    {
                                        content: _.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                                    }
                                );
                        },
                        children: E.Z.Messages.QUESTS_SHOW_CONNECTIONS
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { icon: t, text: n, errors: o = [], gameTile: r } = e,
        l = o.length > 0,
        i = l ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, s.jsxs)('div', {
        className: h.connectionRow,
        children: [
            (0, s.jsxs)('div', {
                className: a()(h.connectionRowHeader, { [h.connectionRowHeaderError]: l }),
                children: [
                    (0, s.jsxs)('div', {
                        className: h.connectionRowHeaderContent,
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
                        className: h.connectionRowHeaderContent,
                        children: [
                            r,
                            (0, s.jsx)(i, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [h.success]: !l,
                                    [h.error]: l
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: h.errorsContainer,
                children: o.map((e) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: h.errorRow,
                            children: [
                                (0, s.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: h.error
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
function v(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, s.jsx)(t, {
                ...n,
                ...e
            });
    });
}

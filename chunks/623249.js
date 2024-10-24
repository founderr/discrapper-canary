n.r(t),
    n.d(t, {
        default: function () {
            return v;
        },
        openConsoleConnectionErrorsModal: function () {
            return j;
        }
    }),
    n(47120);
var o = n(200651),
    s = n(192379),
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
    C = n(497505),
    _ = n(918701),
    g = n(475595),
    f = n(667105),
    h = n(981631),
    E = n(689938),
    S = n(24444),
    T = n(708901);
function v(e) {
    let { questId: t, errorHints: n, transitionState: r, onClose: v } = e,
        j = (0, x.B4)(t);
    null == j && v();
    let [A, b] = (0, s.useState)(n),
        B = (0, x.KX)(),
        R = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        y = (0, f.g2)({
            useReducedMotion: R,
            className: S.colorTransition
        }),
        I = A.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        M = (0, _.Bz)(j),
        O = (0, l.e7)([p.Z], () => p.Z.getState().theme),
        w = (0, i.wj)(O) ? h.BRd.DARK : h.BRd.LIGHT,
        { startConsoleQuest: k, startingConsoleQuest: P } = (0, x.GI)({
            questId: j.id,
            beforeRequest: () => {
                y.startAnimation(),
                    (0, m._3)({
                        questId: j.id,
                        questContent: C.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                y.stopAnimation(), b(e);
            }
        });
    return (0, o.jsxs)(c.ModalRoot, {
        transitionState: r,
        size: c.ModalSize.DYNAMIC,
        className: S.modalRoot,
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: S.modalHeader,
                children: [
                    (0, o.jsxs)('div', {
                        className: S.modalTop,
                        children: [
                            (0, o.jsx)('div', {
                                className: S.iconFrame,
                                children: (0, o.jsx)('img', {
                                    className: S.icon,
                                    alt: '',
                                    src: T
                                })
                            }),
                            (0, o.jsx)(c.ModalCloseButton, {
                                className: S.closeBtn,
                                onClick: v
                            })
                        ]
                    }),
                    (0, o.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: E.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: S.upperBodyText,
                        children: B.message
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalContent, {
                className: S.modalContent,
                children: [
                    (0, o.jsxs)('div', {
                        className: S.contentHeader,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: E.Z.Messages.CONNECTED_ACCOUNTS
                            }),
                            (0, o.jsxs)(c.Clickable, {
                                className: a()(S.refreshWrapper, { [S.disabled]: P }),
                                onClick: k,
                                children: [
                                    y.render(),
                                    (0, o.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: S.colorTransition,
                                        children: E.Z.Messages.REFRESH
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: S.accountsWrapper,
                        children: [
                            (0, o.jsx)(N, {
                                icon: (0, o.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: E.Z.Messages.QUESTS_THIS_PC
                            }),
                            (0, o.jsx)(N, {
                                icon: (0, o.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: E.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                                errors: M ? void 0 : I.map((e) => e.message),
                                gameTile: M
                                    ? (0, o.jsx)(c.Tooltip, {
                                          'aria-label': j.config.messages.gameTitle,
                                          text: () =>
                                              (0, o.jsxs)('div', {
                                                  className: S.tooltip,
                                                  children: [
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: j.config.messages.gameTitle
                                                      }),
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: E.Z.Messages.QUESTS_GAME_DETECTED
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, o.jsx)('img', {
                                                  ...e,
                                                  className: S.gameTile,
                                                  alt: j.config.messages.gameTitle,
                                                  src: (0, g.fh)(j, g.Bd.GAME_TILE, w).url
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalFooter, {
                className: S.footer,
                children: [
                    (0, o.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: v,
                        className: S.footerCloseButton,
                        children: E.Z.Messages.CLOSE
                    }),
                    (0, o.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            v(),
                                (0, _.V$)(
                                    { quest: j },
                                    {
                                        content: C.jn.CONNECTIONS_MODAL,
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
    let { icon: t, text: n, errors: s = [], gameTile: r } = e,
        l = s.length > 0,
        i = l ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, o.jsxs)('div', {
        className: S.connectionRow,
        children: [
            (0, o.jsxs)('div', {
                className: a()(S.connectionRowHeader, { [S.connectionRowHeaderError]: l }),
                children: [
                    (0, o.jsxs)('div', {
                        className: S.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: S.connectionRowHeaderContent,
                        children: [
                            r,
                            (0, o.jsx)(i, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [S.success]: !l,
                                    [S.error]: l
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: S.errorsContainer,
                children: s.map((e) =>
                    (0, o.jsxs)(
                        'div',
                        {
                            className: S.errorRow,
                            children: [
                                (0, o.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: S.error
                                }),
                                (0, o.jsx)(c.Text, {
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
function j(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, o.jsx)(t, {
                ...n,
                ...e
            });
    });
}

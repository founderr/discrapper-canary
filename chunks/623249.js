n.r(t),
    n.d(t, {
        default: function () {
            return N;
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
    _ = n(497505),
    C = n(918701),
    g = n(475595),
    f = n(667105),
    E = n(981631),
    h = n(689938),
    S = n(24444),
    T = n(708901);
function N(e) {
    let { questId: t, errorHints: n, transitionState: r, onClose: N } = e,
        j = (0, x.B4)(t);
    null == j && N();
    let [A, R] = (0, s.useState)(n),
        b = (0, x.KX)(),
        B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        I = (0, f.g2)({
            useReducedMotion: B,
            className: S.colorTransition
        }),
        M = A.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        O = (0, C.Bz)(j),
        y = (0, l.e7)([p.Z], () => p.Z.getState().theme),
        L = (0, i.wj)(y) ? E.BRd.DARK : E.BRd.LIGHT,
        { startConsoleQuest: w, startingConsoleQuest: U } = (0, x.GI)({
            questId: j.id,
            beforeRequest: () => {
                I.startAnimation(),
                    (0, m._3)({
                        questId: j.id,
                        questContent: _.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                I.stopAnimation(), R(e);
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
                                onClick: N
                            })
                        ]
                    }),
                    (0, o.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: h.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: S.upperBodyText,
                        children: b.message
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
                                children: h.Z.Messages.CONNECTED_ACCOUNTS
                            }),
                            (0, o.jsxs)(c.Clickable, {
                                className: a()(S.refreshWrapper, { [S.disabled]: U }),
                                onClick: w,
                                children: [
                                    I.render(),
                                    (0, o.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: S.colorTransition,
                                        children: h.Z.Messages.REFRESH
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: S.accountsWrapper,
                        children: [
                            (0, o.jsx)(v, {
                                icon: (0, o.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: h.Z.Messages.QUESTS_THIS_PC
                            }),
                            (0, o.jsx)(v, {
                                icon: (0, o.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: h.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                                errors: O ? void 0 : M.map((e) => e.message),
                                gameTile: O
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
                                                          children: h.Z.Messages.QUESTS_GAME_DETECTED
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, o.jsx)('img', {
                                                  ...e,
                                                  className: S.gameTile,
                                                  alt: j.config.messages.gameTitle,
                                                  src: (0, g.fh)(j, g.Bd.GAME_TILE, L).url
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
                        onClick: N,
                        className: S.footerCloseButton,
                        children: h.Z.Messages.CLOSE
                    }),
                    (0, o.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            N(),
                                (0, C.V$)(
                                    { quest: j },
                                    {
                                        content: _.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                                    }
                                );
                        },
                        children: h.Z.Messages.QUESTS_SHOW_CONNECTIONS
                    })
                ]
            })
        ]
    });
}
function v(e) {
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

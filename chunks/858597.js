var o = s(735250),
    T = s(470079),
    n = s(120356),
    a = s.n(n),
    l = s(442837),
    _ = s(692547),
    i = s(481060),
    r = s(194359),
    S = s(782568),
    E = s(726521),
    c = s(485664),
    u = s(699516),
    O = s(863653),
    d = s(941362),
    A = s(367408),
    I = s(423932),
    L = s(473092),
    C = s(611446),
    N = s(993750),
    R = s(134612),
    x = s(689938),
    M = s(216305);
function F(e) {
    let { children: t } = e;
    return (0, o.jsx)('div', {
        className: M.actionGroup,
        children: t
    });
}
function p(e) {
    let { title: t, subTitle: s, buttonText: T, buttonColor: n, onPress: a } = e;
    return (0, o.jsxs)('div', {
        className: M.actionRow,
        children: [
            (0, o.jsxs)('div', {
                className: M.actionButtonDetails,
                children: [
                    (0, o.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, o.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: s
                    })
                ]
            }),
            (0, o.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                color: n,
                onClick: a,
                children: T
            })
        ]
    });
}
function b(e) {
    let { title: t, onPress: s } = e;
    return (0, o.jsxs)(i.Clickable, {
        className: a()(M.actionRow, M.clickableActionRow),
        onClick: s,
        children: [
            (0, o.jsx)(i.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, o.jsx)(i.ChevronSmallRightIcon, {
                size: 'md',
                color: _.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
t.Z = function (e) {
    let { otherUserId: t, channelId: n, warningId: a, warningType: _, transitionToSlide: M } = e,
        B = (0, c.o)(),
        Y = (0, O.zF)('web_safety-tools-action-slide'),
        h = (0, d.q)(n),
        f = null != (0, A.M)(n),
        Z = (0, l.e7)([u.Z], () => u.Z.isBlocked(t)),
        g = T.useCallback(
            (e) => {
                (0, L.qc)({
                    channelId: n,
                    warningId: a,
                    senderId: t,
                    warningType: _,
                    cta: e,
                    isNudgeWarning: f
                });
            },
            [n, a, t, _, f]
        ),
        m = T.useCallback(() => {
            (0, i.closeModal)(R.X_), g(L.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [g]),
        U = T.useCallback(() => {
            r.Z.unblockUser(t, { location: R.DL }), g(L.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [t, g]),
        P = T.useCallback(() => {
            (0, i.closeModal)(R.X_), g(L.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [g]),
        j = T.useMemo(() => {
            let e = {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(R.EI), g(L.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                T = {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(R.n4), g(L.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                a = {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(R.$l), g(L.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
                    buttonText: Z ? x.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                    buttonColor: i.ButtonColors.BRAND,
                    onPress: () => {
                        Z
                            ? U()
                            : (0, i.openModalLazy)(async () => {
                                  let { default: e } = await s.e('41128').then(s.bind(s, 699783));
                                  return (s) => {
                                      let { transitionState: T, onClose: a } = s;
                                      return (0, o.jsx)(e, {
                                          transitionState: T,
                                          onBlock: m,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              null == a || a(), g(L.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: a,
                                          userId: t,
                                          channelId: n
                                      });
                                  };
                              });
                    }
                },
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, i.closeModal)(R.X_), (0, E.wk)(h), g(L.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                },
                B ? e : Y ? a : T,
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, I.Z)(i.closeAllModals), g(L.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                }
            ];
        }, [Z, B, Y, g, U, m, P, t, n, h]),
        k = T.useMemo(
            () => [
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
                    onPress: () => {
                        M(C.SafetyToolsSlides.SAFETY_TIPS), g(L.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
                    onPress: () => {
                        M(C.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), g(L.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [M, g]
        );
    return (0, o.jsxs)(N.Z, {
        children: [
            (0, o.jsx)(F, {
                children: j.map((e) => {
                    let { title: t, subTitle: s, buttonText: T, buttonColor: n, onPress: a } = e;
                    return (0, o.jsx)(
                        p,
                        {
                            title: t,
                            subTitle: s,
                            buttonText: T,
                            buttonColor: n,
                            onPress: a
                        },
                        t
                    );
                })
            }),
            (0, o.jsx)(F, {
                children: k.map((e) => {
                    let { title: t, onPress: s } = e;
                    return (0, o.jsx)(
                        b,
                        {
                            title: t,
                            onPress: s
                        },
                        t
                    );
                })
            })
        ]
    });
};

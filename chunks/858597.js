var T = s(735250),
    o = s(470079),
    a = s(120356),
    n = s.n(a),
    l = s(442837),
    _ = s(692547),
    i = s(481060),
    r = s(194359),
    S = s(782568),
    E = s(726521),
    c = s(485664),
    O = s(699516),
    d = s(863653),
    u = s(941362),
    A = s(367408),
    I = s(423932),
    L = s(473092),
    N = s(611446),
    C = s(993750),
    R = s(134612),
    x = s(689938),
    M = s(216305);
function F(e) {
    let { children: t } = e;
    return (0, T.jsx)('div', {
        className: M.actionGroup,
        children: t
    });
}
function B(e) {
    let { title: t, subTitle: s, buttonText: o, buttonColor: a, onPress: n } = e;
    return (0, T.jsxs)('div', {
        className: M.actionRow,
        children: [
            (0, T.jsxs)('div', {
                className: M.actionButtonDetails,
                children: [
                    (0, T.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, T.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: s
                    })
                ]
            }),
            (0, T.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                color: a,
                onClick: n,
                children: o
            })
        ]
    });
}
function Y(e) {
    let { title: t, onPress: s } = e;
    return (0, T.jsxs)(i.Clickable, {
        className: n()(M.actionRow, M.clickableActionRow),
        onClick: s,
        children: [
            (0, T.jsx)(i.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, T.jsx)(i.ChevronSmallRightIcon, {
                size: 'md',
                color: _.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
t.Z = function (e) {
    let { otherUserId: t, channelId: a, warningId: n, warningType: _, transitionToSlide: M } = e,
        b = (0, c.o)(),
        h = (0, d.zF)('web_safety-tools-action-slide'),
        p = (0, u.q)(a),
        Z = null != (0, A.M)(a),
        m = (0, l.e7)([O.Z], () => O.Z.isBlocked(t)),
        f = o.useCallback(
            (e) => {
                (0, L.qc)({
                    channelId: a,
                    warningId: n,
                    senderId: t,
                    warningType: _,
                    cta: e,
                    isNudgeWarning: Z
                });
            },
            [a, n, t, _, Z]
        ),
        g = o.useCallback(() => {
            (0, i.closeModal)(R.X_), f(L.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [f]),
        P = o.useCallback(() => {
            r.Z.unblockUser(t, { location: R.DL }), f(L.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [t, f]),
        U = o.useCallback(() => {
            (0, i.closeModal)(R.X_), f(L.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [f]),
        j = o.useMemo(() => {
            let e = {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(R.EI), f(L.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                o = {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(R.n4), f(L.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(R.$l), f(L.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
                    buttonText: m ? x.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                    buttonColor: i.ButtonColors.BRAND,
                    onPress: () => {
                        m
                            ? P()
                            : (0, i.openModalLazy)(async () => {
                                  let { default: e } = await s.e('41128').then(s.bind(s, 699783));
                                  return (s) => {
                                      let { transitionState: o, onClose: n } = s;
                                      return (0, T.jsx)(e, {
                                          transitionState: o,
                                          onBlock: g,
                                          onBlockAndReport: U,
                                          onCancel: () => {
                                              null == n || n(), f(L.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: n,
                                          userId: t,
                                          channelId: a
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
                        (0, i.closeModal)(R.X_), (0, E.wk)(p), f(L.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                },
                b ? e : h ? n : o,
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
                    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
                    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
                    buttonColor: i.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, I.Z)(i.closeAllModals), f(L.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                }
            ];
        }, [m, b, h, f, P, g, U, t, a, p]),
        H = o.useMemo(
            () => [
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
                    onPress: () => {
                        M(N.SafetyToolsSlides.SAFETY_TIPS), f(L.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
                    onPress: () => {
                        M(N.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), f(L.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [M, f]
        );
    return (0, T.jsxs)(C.Z, {
        children: [
            (0, T.jsx)(F, {
                children: j.map((e) => {
                    let { title: t, subTitle: s, buttonText: o, buttonColor: a, onPress: n } = e;
                    return (0, T.jsx)(
                        B,
                        {
                            title: t,
                            subTitle: s,
                            buttonText: o,
                            buttonColor: a,
                            onPress: n
                        },
                        t
                    );
                })
            }),
            (0, T.jsx)(F, {
                children: H.map((e) => {
                    let { title: t, onPress: s } = e;
                    return (0, T.jsx)(
                        Y,
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

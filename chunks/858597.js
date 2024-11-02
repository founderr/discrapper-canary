var i = n(200651),
    o = n(192379),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    a = n(692547),
    c = n(481060),
    d = n(194359),
    u = n(782568),
    T = n(726521),
    S = n(485664),
    _ = n(699516),
    x = n(863653),
    A = n(941362),
    E = n(367408),
    C = n(423932),
    h = n(473092),
    p = n(611446),
    b = n(993750),
    N = n(134612),
    R = n(388032),
    L = n(216305);
function m(t) {
    let { children: e } = t;
    return (0, i.jsx)('div', {
        className: L.actionGroup,
        children: e
    });
}
function O(t) {
    let { title: e, subTitle: n, buttonText: o, buttonColor: s, onPress: l } = t;
    return (0, i.jsxs)('div', {
        className: L.actionRow,
        children: [
            (0, i.jsxs)('div', {
                className: L.actionButtonDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(c.Button, {
                size: c.Button.Sizes.SMALL,
                color: s,
                onClick: l,
                children: o
            })
        ]
    });
}
function f(t) {
    let { title: e, onPress: n } = t;
    return (0, i.jsxs)(c.Clickable, {
        className: l()(L.actionRow, L.clickableActionRow),
        onClick: n,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: e
            }),
            (0, i.jsx)(c.ChevronSmallRightIcon, {
                size: 'md',
                color: a.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
e.Z = function (t) {
    let { otherUserId: e, channelId: s, warningId: l, warningType: a, transitionToSlide: L } = t,
        g = (0, S.o)(),
        j = (0, x.zF)('web_safety-tools-action-slide'),
        I = (0, A.q)(s),
        M = null != (0, E.M)(s),
        B = (0, r.e7)([_.Z], () => _.Z.isBlocked(e)),
        F = o.useCallback(
            (t) => {
                (0, h.qc)({
                    channelId: s,
                    warningId: l,
                    senderId: e,
                    warningType: a,
                    cta: t,
                    isNudgeWarning: M
                });
            },
            [s, l, e, a, M]
        ),
        k = o.useCallback(() => {
            (0, c.closeModal)(N.X_), F(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [F]),
        v = o.useCallback(() => {
            d.Z.unblockUser(e, { location: N.DL }), F(h.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, F]),
        Y = o.useCallback(() => {
            (0, c.closeModal)(N.X_), F(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [F]),
        P = o.useMemo(() => {
            let t = {
                    title: R.intl.string(R.t['4VIrUF']),
                    subTitle: R.intl.string(R.t.Am8B9P),
                    buttonText: R.intl.string(R.t['9iFR6+']),
                    buttonColor: c.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, u.Z)(N.EI), F(h.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                o = {
                    title: R.intl.string(R.t['65XQam']),
                    subTitle: R.intl.string(R.t.XNwhxM),
                    buttonText: R.intl.string(R.t['3DJQCA']),
                    buttonColor: c.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, u.Z)(N.n4), F(h.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                l = {
                    title: R.intl.string(R.t.HQ2nKi),
                    subTitle: R.intl.string(R.t['PMeb/v']),
                    buttonText: R.intl.string(R.t.viOWqK),
                    buttonColor: c.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, u.Z)(N.$l), F(h.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    title: R.intl.string(R.t.oDxaKy),
                    subTitle: R.intl.string(R.t.Lj37a2),
                    buttonText: B ? R.intl.string(R.t.Hro409) : R.intl.string(R.t.oDxaKy),
                    buttonColor: c.ButtonColors.BRAND,
                    onPress: () => {
                        B
                            ? v()
                            : (0, c.openModalLazy)(async () => {
                                  let { default: t } = await n.e('41128').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: o, onClose: l } = n;
                                      return (0, i.jsx)(t, {
                                          transitionState: o,
                                          onBlock: k,
                                          onBlockAndReport: Y,
                                          onCancel: () => {
                                              null == l || l(), F(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: s
                                      });
                                  };
                              });
                    }
                },
                {
                    title: R.intl.string(R.t.X27yhI),
                    subTitle: R.intl.string(R.t['0tydOT']),
                    buttonText: R.intl.string(R.t.X27yhI),
                    buttonColor: c.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, c.closeModal)(N.X_), (0, T.wk)(I), F(h.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                },
                g ? t : j ? l : o,
                {
                    title: R.intl.string(R.t.uLlgqK),
                    subTitle: R.intl.string(R.t['f+pTDQ']),
                    buttonText: R.intl.string(R.t.vf4d8P),
                    buttonColor: c.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, C.Z)(c.closeAllModals), F(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                }
            ];
        }, [B, g, j, F, v, k, Y, e, s, I]),
        U = o.useMemo(
            () => [
                {
                    title: R.intl.string(R.t.EtNxi4),
                    onPress: () => {
                        L(p.SafetyToolsSlides.SAFETY_TIPS), F(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    title: R.intl.string(R.t.qI14KC),
                    onPress: () => {
                        L(p.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), F(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [L, F]
        );
    return (0, i.jsxs)(b.Z, {
        children: [
            (0, i.jsx)(m, {
                children: P.map((t) => {
                    let { title: e, subTitle: n, buttonText: o, buttonColor: s, onPress: l } = t;
                    return (0, i.jsx)(
                        O,
                        {
                            title: e,
                            subTitle: n,
                            buttonText: o,
                            buttonColor: s,
                            onPress: l
                        },
                        e
                    );
                })
            }),
            (0, i.jsx)(m, {
                children: U.map((t) => {
                    let { title: e, onPress: n } = t;
                    return (0, i.jsx)(
                        f,
                        {
                            title: e,
                            onPress: n
                        },
                        e
                    );
                })
            })
        ]
    });
};

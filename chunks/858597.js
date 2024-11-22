n(47120);
var i,
    o,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    T = n(194359),
    S = n(782568),
    _ = n(726521),
    x = n(485664),
    A = n(922611),
    b = n(681678),
    p = n(699516),
    E = n(863653),
    R = n(650408),
    h = n(367408),
    C = n(423932),
    N = n(473092),
    L = n(611446),
    g = n(993750),
    O = n(134612),
    m = n(388032),
    f = n(216305);
function j(t) {
    let { children: e } = t;
    return (0, s.jsx)('div', {
        className: f.actionGroup,
        children: e
    });
}
function M(t) {
    let { title: e, subTitle: n, buttonText: i, buttonColor: o, onPress: l, disabled: r } = t;
    return (0, s.jsxs)('div', {
        className: f.actionRow,
        children: [
            (0, s.jsxs)('div', {
                className: f.actionButtonDetails,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.SMALL,
                color: o,
                onClick: l,
                disabled: r,
                children: i
            })
        ]
    });
}
function B(t) {
    let { title: e, subTitle: n, onPress: i } = t;
    return (0, s.jsxs)(d.Clickable, {
        className: a()(f.actionRow, f.clickableActionRow),
        onClick: i,
        children: [
            (0, s.jsxs)('div', {
                className: f.actionButtonDetails,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != n
                        ? (0, s.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : null
                ]
            }),
            (0, s.jsx)(d.ChevronSmallRightIcon, {
                size: 'md',
                color: u.Z.colors.INTERACTIVE_NORMAL
            })
        ]
    });
}
((o = i || (i = {}))[(o.ButtonRow = 0)] = 'ButtonRow'), (o[(o.ClickableRow = 1)] = 'ClickableRow');
e.Z = function (t) {
    let { otherUserId: e, channelId: i, warningId: o, warningType: r, transitionToSlide: a } = t,
        u = (0, x.o)(),
        f = (0, E.zF)('web_safety-tools-action-slide'),
        I = (0, R.q)(i),
        F = null != (0, h.M)(i),
        k = (0, A.Do)({ location: O.cH }),
        y = (0, c.e7)([p.Z], () => p.Z.isIgnored(e), [e]),
        Y = (0, c.e7)([p.Z], () => p.Z.isBlocked(e), [e]),
        v = l.useCallback(
            (t) => {
                (0, N.qc)({
                    channelId: i,
                    warningId: o,
                    senderId: e,
                    warningType: r,
                    cta: t,
                    isNudgeWarning: F
                });
            },
            [i, o, e, r, F]
        ),
        Z = l.useCallback(() => {
            (0, d.closeModal)(O.X_), v(N.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [v]),
        U = l.useCallback(() => {
            T.Z.unblockUser(e, { location: O.DL }), v(N.NM.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, v]),
        P = l.useCallback(() => {
            (0, d.closeModal)(O.X_), v(N.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [v]),
        w = l.useMemo(
            () => [
                ...(k
                    ? [
                          {
                              type: 0,
                              title: m.intl.string(m.t.B7ZT09),
                              subTitle: m.intl.string(m.t['fCfp4+']),
                              buttonText: y ? m.intl.string(m.t['9e0wLi']) : m.intl.string(m.t.B7ZT09),
                              buttonColor: d.ButtonColors.PRIMARY,
                              disabled: Y,
                              onPress: () => {
                                  y ? (T.Z.unignoreUser(e, O.cH, i), v(N.NM.USER_SAFETY_TOOLS_UNIGNORE)) : (T.Z.ignoreUser(e, O.cH, i), v(N.NM.USER_SAFETY_TOOLS_IGNORE));
                              }
                          }
                      ]
                    : []),
                {
                    type: 0,
                    title: m.intl.string(m.t.oDxaKy),
                    subTitle: m.intl.string(m.t.Lj37a2),
                    buttonText: Y ? m.intl.string(m.t.Hro409) : m.intl.string(m.t.oDxaKy),
                    buttonColor: d.ButtonColors.BRAND,
                    onPress: () => {
                        Y
                            ? (U(), b.Z.showUnblockSuccessToast(e, i))
                            : (0, d.openModalLazy)(async () => {
                                  let { default: t } = await n.e('19538').then(n.bind(n, 699783));
                                  return (n) => {
                                      let { transitionState: o, onClose: l } = n;
                                      return (0, s.jsx)(t, {
                                          transitionState: o,
                                          onBlock: Z,
                                          onBlockAndReport: P,
                                          onCancel: () => {
                                              null == l || l(), v(N.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: l,
                                          userId: e,
                                          channelId: i
                                      });
                                  };
                              });
                    }
                },
                {
                    type: 0,
                    title: m.intl.string(m.t.X27yhI),
                    subTitle: m.intl.string(m.t['0tydOT']),
                    buttonText: m.intl.string(m.t.X27yhI),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, d.closeModal)(O.X_), (0, _.wk)(I), v(N.NM.USER_SAFETY_TOOLS_REPORT);
                    }
                }
            ],
            [y, k, Y, v, U, Z, P, e, i, I]
        ),
        D = l.useMemo(() => {
            let t = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.iNcsra),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.EI), v(N.NM.USER_SAFETY_TOOLS_CTL);
                    }
                },
                e = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.g5uwCw),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.n4), v(N.NM.USER_SAFETY_TOOLS_NO_FILTR);
                    }
                },
                n = {
                    title: m.intl.string(m.t.ZSbbMD),
                    subTitle: m.intl.string(m.t.S9O1ZW),
                    buttonText: m.intl.string(m.t.rK4Gqq),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, S.Z)(O.$l), v(N.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                    }
                };
            return [
                {
                    type: 0,
                    title: m.intl.string(m.t.syuaPD),
                    subTitle: m.intl.string(m.t.LLBnNj),
                    buttonText: m.intl.string(m.t.rzvzyc),
                    buttonColor: d.ButtonColors.PRIMARY,
                    onPress: () => {
                        (0, C.Z)(d.closeAllModals), v(N.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    }
                },
                {
                    type: 1,
                    title: m.intl.string(m.t['7LgVmp']),
                    subTitle: m.intl.string(m.t.pwoRjY),
                    onPress: () => {
                        a(L.SafetyToolsSlides.SAFETY_TIPS), v(N.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    }
                },
                {
                    type: 0,
                    ...(u ? t : f ? n : e)
                }
            ];
        }, [u, f, a, v]),
        H = l.useMemo(
            () => [
                {
                    type: 1,
                    title: m.intl.string(m.t.otdt29),
                    onPress: () => {
                        a(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), v(N.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    }
                }
            ],
            [a, v]
        ),
        z = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: i, buttonText: o, buttonColor: l, onPress: r, disabled: a } = t;
                return (0, s.jsx)(
                    M,
                    {
                        type: e,
                        title: n,
                        subTitle: i,
                        buttonText: o,
                        buttonColor: l,
                        onPress: r,
                        disabled: a
                    },
                    n
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: i, onPress: o } = t;
                return (0, s.jsx)(
                    B,
                    {
                        type: e,
                        title: n,
                        subTitle: i,
                        onPress: o
                    },
                    n
                );
            }
            return null;
        };
    return (0, s.jsxs)(g.Z, {
        children: [(0, s.jsx)(j, { children: w.map((t) => z(t)) }), (0, s.jsx)(j, { children: D.map((t) => z(t)) }), (0, s.jsx)(j, { children: H.map((t) => z(t)) })]
    });
};

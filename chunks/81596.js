n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    }),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(442837),
    r = n(481060),
    c = n(230711),
    s = n(485267),
    l = n(564990),
    d = n(353647),
    u = n(527790),
    _ = n(540440),
    E = n(365583),
    T = n(689938),
    R = n(121269);
function f(e) {
    let { user: t, entry: n, transitionState: f, onAction: h, onClose: S, onOpenGameSettings: C } = e,
        [I, N] = (0, a.Wu)([d.Z], () => [d.Z.isDeletingEntryHistory, d.Z.deleteOutboxEntryError]);
    return (
        o.useEffect(() => s.Bt, []),
        (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.SMALL,
            transitionState: f,
            children: [
                (0, i.jsxs)(r.ModalContent, {
                    className: R.content,
                    children: [
                        null != N
                            ? (0, i.jsxs)('div', {
                                  className: R.error,
                                  children: [
                                      (0, i.jsx)(r.CircleXIcon, { color: r.tokens.colors.STATUS_DANGER }),
                                      (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
                                          children: T.Z.Messages.USER_ACTIVITY_DELETE_HISTORY_ERROR
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            children: (0, _.y)(n)
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: T.Z.Messages.USER_ACTIVITY_CLEAR_HISTORY_DISCLAIMER.format({
                                settingsHook: (e, t) => {
                                    let o = (0, E.C)({
                                        entry: n,
                                        onOpenGameSettings: C
                                    });
                                    return (0, i.jsx)(
                                        r.Anchor,
                                        {
                                            onClick: () => {
                                                null == h || h({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != o ? o() : c.Z.open(), S();
                                            },
                                            children: e
                                        },
                                        t
                                    );
                                }
                            })
                        }),
                        (0, i.jsx)(u.Z, {
                            user: t,
                            entry: n,
                            className: R.card,
                            hideHeader: !0,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, i.jsxs)(r.ModalFooter, {
                    className: R.footer,
                    children: [
                        (0, i.jsx)(r.Button, {
                            disabled: I,
                            color: r.ButtonColors.RED,
                            size: r.ButtonSizes.SMALL,
                            onClick: () => {
                                null == h || h({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, l.CV)(n, t.id, S);
                            },
                            children: null != N ? T.Z.Messages.RETRY : T.Z.Messages.CLEAR
                        }),
                        (0, i.jsx)(r.Button, {
                            onClick: S,
                            size: r.ButtonSizes.SMALL,
                            look: r.ButtonLooks.FILLED,
                            color: r.ButtonColors.TRANSPARENT,
                            children: T.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}

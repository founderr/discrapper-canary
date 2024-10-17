t.r(s),
    t.d(s, {
        default: function () {
            return h;
        }
    }),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    l = t(230711),
    c = t(485267),
    d = t(564990),
    o = t(353647),
    E = t(527790),
    u = t(540440),
    x = t(365583),
    _ = t(689938),
    m = t(121269);
function h(e) {
    let { user: s, entry: t, transitionState: h, onAction: j, onClose: I, onOpenGameSettings: N } = e,
        [Z, R] = (0, i.Wu)([o.Z], () => [o.Z.isDeletingEntryHistory, o.Z.deleteOutboxEntryError]);
    return (
        a.useEffect(() => c.Bt, []),
        (0, n.jsxs)(r.ModalRoot, {
            size: r.ModalSize.SMALL,
            transitionState: h,
            children: [
                (0, n.jsxs)(r.ModalContent, {
                    className: m.content,
                    children: [
                        null != R
                            ? (0, n.jsxs)('div', {
                                  className: m.error,
                                  children: [
                                      (0, n.jsx)(r.CircleXIcon, { color: r.tokens.colors.STATUS_DANGER }),
                                      (0, n.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
                                          children: _.Z.Messages.USER_ACTIVITY_DELETE_HISTORY_ERROR
                                      })
                                  ]
                              })
                            : null,
                        (0, n.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            children: (0, u.y)(t)
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: _.Z.Messages.USER_ACTIVITY_CLEAR_HISTORY_DISCLAIMER.format({
                                settingsHook: (e, s) => {
                                    let a = (0, x.C)({
                                        entry: t,
                                        onOpenGameSettings: N
                                    });
                                    return (0, n.jsx)(
                                        r.Anchor,
                                        {
                                            onClick: () => {
                                                null == j || j({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != a ? a() : l.Z.open(), I();
                                            },
                                            children: e
                                        },
                                        s
                                    );
                                }
                            })
                        }),
                        (0, n.jsx)(E.Z, {
                            user: s,
                            entry: t,
                            className: m.card,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, n.jsxs)(r.ModalFooter, {
                    className: m.footer,
                    children: [
                        (0, n.jsx)(r.Button, {
                            disabled: Z,
                            color: r.ButtonColors.RED,
                            size: r.ButtonSizes.SMALL,
                            onClick: () => {
                                null == j || j({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, d.CV)(t, s.id, I);
                            },
                            children: null != R ? _.Z.Messages.RETRY : _.Z.Messages.CLEAR
                        }),
                        (0, n.jsx)(r.Button, {
                            onClick: I,
                            size: r.ButtonSizes.SMALL,
                            look: r.ButtonLooks.FILLED,
                            color: r.ButtonColors.TRANSPARENT,
                            children: _.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}

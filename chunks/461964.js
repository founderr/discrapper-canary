n.r(e),
    n.d(e, {
        default: function () {
            return T;
        }
    });
var s = n(735250),
    a = n(470079),
    o = n(481060),
    r = n(561716),
    i = n(721383),
    c = n(313201),
    d = n(63063),
    l = n(857595),
    u = n(981631),
    _ = n(689938),
    h = n(312573);
function T(t) {
    let { transitionState: e, onClose: n } = t,
        T = (0, c.Dt)();
    return (
        a.useEffect(() => {
            l.r_();
        }, []),
        (0, s.jsxs)(o.ModalRoot, {
            transitionState: e,
            role: 'alertdialog',
            'aria-labelledby': T,
            children: [
                (0, s.jsxs)(o.ModalContent, {
                    className: h.content,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: 'heading-xl/semibold',
                            id: T,
                            className: h.header,
                            children: _.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format({
                                tab: (t, e) =>
                                    (0, s.jsx)(
                                        o.KeyCombo,
                                        {
                                            shortcut: 'tab',
                                            className: h.headerShortcut
                                        },
                                        e
                                    )
                            })
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: _.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY
                        }),
                        (0, s.jsxs)('ul', {
                            className: h.tips,
                            children: [
                                (0, s.jsxs)('li', {
                                    children: [
                                        (0, s.jsx)(o.KeyCombo, { shortcut: i._.binds['0'] }),
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: _.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT
                                        })
                                    ]
                                }),
                                (0, s.jsxs)('li', {
                                    children: [
                                        (0, s.jsx)(o.KeyCombo, { shortcut: r.$.binds['0'] }),
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: _.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: _.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format({ link: d.Z.getArticleURL(u.BhN.KEYBOARD_NAVIGATION) })
                        })
                    ]
                }),
                (0, s.jsx)(o.ModalFooter, {
                    children: (0, s.jsx)(o.Button, {
                        onClick: n,
                        color: o.Button.Colors.BRAND,
                        size: o.Button.Sizes.SMALL,
                        autoFocus: !0,
                        children: _.Z.Messages.OKAY
                    })
                })
            ]
        })
    );
}

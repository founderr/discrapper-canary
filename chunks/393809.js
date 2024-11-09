i.r(t),
    i.d(t, {
        default: function () {
            return s;
        }
    }),
    i(47120);
var e = i(200651),
    r = i(192379),
    o = i(481060),
    a = i(53365),
    c = i(377176),
    l = i(388032),
    u = i(383089);
function s(n) {
    let { guildId: t, transitionState: i, onClose: s } = n,
        [T, E] = r.useState(!1),
        [_, A] = r.useState(!1),
        N = async () => {
            E(!0);
            try {
                await (0, a.zo)(t), s();
            } finally {
                E(!1);
            }
        },
        d = l.intl.string(l.t['22itmp']);
    return (0, e.jsxs)(o.ModalRoot, {
        className: u.__invalid_container,
        size: o.ModalSize.DYNAMIC,
        transitionState: i,
        'aria-label': d,
        children: [
            (0, e.jsxs)(o.ModalContent, {
                className: u.content,
                children: [
                    (0, e.jsxs)('div', {
                        className: u.header,
                        children: [
                            (0, e.jsx)(o.CircleWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: u.warningIcon
                            }),
                            (0, e.jsx)(o.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, e.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: d
                            })
                        ]
                    }),
                    (0, e.jsx)(o.Spacer, { size: 12 }),
                    (0, e.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: u.__invalid_body,
                        children: l.intl.string(l.t.kdbm9P)
                    }),
                    (0, e.jsx)(o.Spacer, { size: 28 }),
                    (0, e.jsx)(o.Checkbox, {
                        onChange: () => {
                            A((n) => !n);
                        },
                        size: 20,
                        type: o.Checkbox.Types.INVERTED,
                        value: _,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, c.f)()
                        })
                    })
                ]
            }),
            (0, e.jsxs)(o.ModalFooter, {
                children: [
                    (0, e.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        disabled: !_,
                        onClick: N,
                        submitting: T,
                        children: l.intl.string(l.t['cY+Ooa'])
                    }),
                    (0, e.jsx)(o.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    (0, e.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.OUTLINED,
                        onClick: s,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

t.r(A),
    t.d(A, {
        IconVariant: function () {
            return n;
        },
        default: function () {
            return d;
        }
    }),
    t(47120);
var n,
    a,
    s = t(735250),
    r = t(470079),
    o = t(481060),
    l = t(689938),
    i = t(784950);
((a = n || (n = {})).DANGER = 'danger'), (a.WARNING = 'warning');
function d(e) {
    let { transitionState: A, onClose: t, title: n, body: a, cta: d, closeLabel: c, onConfirm: u, iconVariant: C = 'warning' } = e,
        [g, T] = r.useState(!1),
        I = async () => {
            T(!0);
            try {
                await u(), t();
            } finally {
                T(!1);
            }
        },
        U = null != n ? n : l.Z.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
    return (0, s.jsxs)(o.ModalRoot, {
        className: i.__invalid_container,
        size: o.ModalSize.DYNAMIC,
        transitionState: A,
        'aria-label': U,
        children: [
            (0, s.jsxs)(o.ModalContent, {
                className: i.content,
                children: [
                    (0, s.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, s.jsx)(o.CircleWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (e) {
                                    switch (e) {
                                        case 'danger':
                                            return i.dangerIcon;
                                        case 'warning':
                                            return i.warningIcon;
                                    }
                                })(C)
                            }),
                            (0, s.jsx)(o.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, s.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: U
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Spacer, { size: 12 }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: i.__invalid_body,
                        children: a
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalFooter, {
                children: [
                    (0, s.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        onClick: I,
                        submitting: g,
                        children: d
                    }),
                    (0, s.jsx)(o.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != c &&
                        (0, s.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.OUTLINED,
                            onClick: t,
                            children: c
                        })
                ]
            })
        ]
    });
}

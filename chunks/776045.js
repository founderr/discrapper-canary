t.r(A),
    t.d(A, {
        IconVariant: function () {
            return a;
        },
        default: function () {
            return d;
        }
    }),
    t(47120);
var a,
    n,
    r = t(735250),
    s = t(470079),
    o = t(481060),
    l = t(689938),
    i = t(784950);
((n = a || (a = {})).DANGER = 'danger'), (n.WARNING = 'warning');
function d(e) {
    let { transitionState: A, onClose: t, title: a, body: n, cta: d, closeLabel: c, onConfirm: u, iconVariant: C = 'warning' } = e,
        [g, h] = s.useState(!1),
        T = async () => {
            h(!0);
            try {
                await u(), t();
            } finally {
                h(!1);
            }
        },
        p = null != a ? a : l.Z.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
    return (0, r.jsxs)(o.ModalRoot, {
        className: i.__invalid_container,
        size: o.ModalSize.DYNAMIC,
        transitionState: A,
        'aria-label': p,
        children: [
            (0, r.jsxs)(o.ModalContent, {
                className: i.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, r.jsx)(o.CircleWarningIcon, {
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
                            (0, r.jsx)(o.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, r.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: p
                            })
                        ]
                    }),
                    (0, r.jsx)(o.Spacer, { size: 12 }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: i.__invalid_body,
                        children: n
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalFooter, {
                children: [
                    (0, r.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        onClick: T,
                        submitting: g,
                        children: d
                    }),
                    (0, r.jsx)(o.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != c &&
                        (0, r.jsx)(o.Button, {
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

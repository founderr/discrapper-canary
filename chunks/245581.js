t.d(n, {
    Z: function () {
        return i;
    }
});
var o = t(735250);
t(470079);
var r = t(481060),
    s = t(313201),
    c = t(756843);
function i(e) {
    let { transitionState: n, title: t, subtitle: i, children: l } = e,
        a = (0, s.Dt)();
    return (0, o.jsxs)(r.ModalRoot, {
        transitionState: n,
        'aria-labelledby': a,
        children: [
            (0, o.jsx)('div', {
                className: c.shieldIconContainer,
                children: (0, o.jsx)('div', {
                    className: c.shieldIcon,
                    children: (0, o.jsx)(r.ShieldLockIcon, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: r.tokens.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, o.jsxs)(r.ModalContent, {
                className: c.content,
                children: [
                    (0, o.jsx)(r.Heading, {
                        className: c.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, o.jsx)(r.Text, {
                        className: c.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: i
                    }),
                    l
                ]
            })
        ]
    });
}

t.d(n, {
    Z: function () {
        return i;
    }
});
var o = t(200651);
t(192379);
var s = t(481060),
    c = t(313201),
    r = t(722041);
function i(e) {
    let { transitionState: n, title: t, subtitle: i, children: l } = e,
        a = (0, c.Dt)();
    return (0, o.jsxs)(s.ModalRoot, {
        transitionState: n,
        'aria-labelledby': a,
        children: [
            (0, o.jsx)('div', {
                className: r.shieldIconContainer,
                children: (0, o.jsx)('div', {
                    className: r.shieldIcon,
                    children: (0, o.jsx)(s.ShieldLockIcon, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: s.tokens.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, o.jsxs)(s.ModalContent, {
                className: r.content,
                children: [
                    (0, o.jsx)(s.Heading, {
                        className: r.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, o.jsx)(s.Text, {
                        className: r.subtitle,
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

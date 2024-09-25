n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(499033),
    o = n(689938),
    s = n(443269);
function l(e) {
    let { Icon: t, header: n, tip: l, disableStars: u } = e;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsxs)('div', {
                className: s.iconContainer,
                children: [
                    (0, r.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: s.icon,
                        width: 36,
                        height: 36
                    }),
                    u ? null : (0, r.jsx)(a.Z, { className: s.stars })
                ]
            }),
            (0, r.jsx)(i.Heading, {
                className: s.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, r.jsxs)(i.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: [
                    u
                        ? null
                        : (0, r.jsxs)(i.Text, {
                              tag: 'span',
                              className: s.protip,
                              variant: 'text-xs/bold',
                              color: 'text-positive',
                              children: [o.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ':', ' ']
                          }),
                    l
                ]
            })
        ]
    });
}

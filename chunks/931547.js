n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(378838);
function o(e) {
    let { message: t, error: n, onClick: r, submitting: o, className: c, ctaMessage: d } = e;
    return (0, i.jsxs)('div', {
        className: a()(l.container, c),
        children: [
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, i.jsx)(s.CircleWarningIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: l.warningIcon
                    }),
                    (0, i.jsx)(s.Spacer, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Spacer, { size: 1 }),
                            (0, i.jsx)(s.Text, {
                                className: l.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, i.jsx)(s.Text, {
                                    className: a()(l.info, l.error),
                                    variant: 'text-sm/normal',
                                    children: n
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, i.jsx)(s.Button, {
                className: l.undoButton,
                color: s.Button.Colors.LINK,
                look: s.Button.Looks.LINK,
                size: s.Button.Sizes.ICON,
                onClick: r,
                submitting: o,
                children: d
            })
        ]
    });
}

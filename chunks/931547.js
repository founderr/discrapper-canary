n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    o = n(315771);
function l(e) {
    let { message: t, error: n, onClick: a, submitting: l, className: c, ctaMessage: d } = e;
    return (0, s.jsxs)('div', {
        className: r()(o.container, c),
        children: [
            (0, s.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, s.jsx)(i.CircleWarningIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: o.warningIcon
                    }),
                    (0, s.jsx)(i.Spacer, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(i.Spacer, { size: 1 }),
                            (0, s.jsx)(i.Text, {
                                className: o.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, s.jsx)(i.Text, {
                                    className: r()(o.info, o.error),
                                    variant: 'text-sm/normal',
                                    children: n
                                })
                        ]
                    })
                ]
            }),
            (0, s.jsx)(i.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, s.jsx)(i.Button, {
                className: o.undoButton,
                color: i.Button.Colors.LINK,
                look: i.Button.Looks.LINK,
                size: i.Button.Sizes.ICON,
                onClick: a,
                submitting: l,
                children: d
            })
        ]
    });
}

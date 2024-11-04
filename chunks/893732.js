n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(388032),
    s = n(541584);
function a(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)('div', {
                className: s.iconContainer,
                children: (0, i.jsx)(l.ClockWarningIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: s.icon,
                    width: 20,
                    height: 20
                })
            }),
            (0, i.jsxs)('div', {
                className: s.header,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        className: s.headerText,
                        children: r.intl.string(r.t.LIIyeH)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: r.intl.format(r.t['4/6vQk'], { guildName: n })
                    }),
                    (0, i.jsx)(l.Button, {
                        onClick: t,
                        className: s.button,
                        children: r.intl.string(r.t.BddRzc)
                    })
                ]
            })
        ]
    });
}

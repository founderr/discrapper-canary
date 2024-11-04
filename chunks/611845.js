n.d(t, {
    $: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(170671),
    o = n(738672),
    c = n(388032),
    u = n(684365),
    d = n(946790);
function h(e) {
    let { hidden: t, onDismiss: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(u.demoCta, { [u.hidden]: t }),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)('div', {
                        className: u.wumpusContainer,
                        children: (0, i.jsx)(s.Image, {
                            src: d,
                            width: 72,
                            height: 52,
                            zoomable: !1
                        })
                    }),
                    (0, i.jsx)(s.Button, {
                        'aria-label': c.intl.string(c.t.cpT0Cg),
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.NONE,
                        onClick: () => n(),
                        className: u.closeButton,
                        children: (0, i.jsx)(s.XSmallIcon, {
                            size: 'md',
                            className: u.closeIcon,
                            color: 'white'
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.textContainer,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: c.intl.string(c.t.TguaU1)
                })
            }),
            (0, i.jsxs)('div', {
                className: u.nitroTextAndBadge,
                children: [
                    (0, i.jsx)(a.Z, { isSelected: !0 }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'always-white',
                        children: c.intl.string(c.t['BMw+7O'])
                    })
                ]
            })
        ]
    });
}
function m(e) {
    return (0, i.jsx)(o.h, {
        ...e,
        renderComponent: (e) => (0, i.jsx)(h, { ...e })
    });
}

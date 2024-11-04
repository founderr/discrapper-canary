n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(946314),
    s = n(921944),
    o = n(388032),
    c = n(641608);
function d(e) {
    let { onClick: t, onSecondaryClick: n, onComponentMount: d, markAsDismissed: u } = e;
    r.useEffect(() => {
        null == d || d();
    }, [d]);
    let h = r.useCallback(
            (e) => {
                t(e), null == u || u(s.L.PRIMARY);
            },
            [t, u]
        ),
        m = r.useCallback(() => {
            null == n || n(), null == u || u(s.L.SECONDARY);
        }, [n, u]);
    return (0, i.jsxs)('div', {
        className: c.tooltipWrapper,
        children: [
            (0, i.jsx)(a.Heading, {
                className: c.tooltipHeader,
                variant: 'heading-md/semibold',
                children: o.intl.string(o.t['5uQfvr'])
            }),
            (0, i.jsx)(a.Text, {
                className: c.tooltipText,
                variant: 'text-sm/normal',
                children: o.intl.format(o.t.lgcisb, { count: l.WZ })
            }),
            (0, i.jsxs)('div', {
                className: c.buttonsContainer,
                children: [
                    (0, i.jsx)(a.Button, {
                        fullWidth: !0,
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.BRAND,
                        onClick: h,
                        children: o.intl.string(o.t.hvVgAQ)
                    }),
                    (0, i.jsx)(a.Button, {
                        fullWidth: !0,
                        size: a.Button.Sizes.SMALL,
                        look: a.Button.Looks.BLANK,
                        onClick: m,
                        children: o.intl.string(o.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}

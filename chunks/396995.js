n.d(t, {
    Z: function () {
        return u;
    }
});
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(461195),
    s = n(688465),
    a = n(447564),
    o = n(207126),
    c = n(388032),
    d = n(371275);
function u(e) {
    let { channel: t } = e;
    return (0, l.jsxs)('div', {
        className: d.bar,
        children: [
            (0, l.jsxs)('div', {
                className: d.top,
                children: [
                    (0, l.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        children: c.intl.string(c.t['6XV1IC'])
                    }),
                    (0, l.jsx)(s.Z, {})
                ]
            }),
            (0, l.jsxs)(i.Clickable, {
                onClick: () => {
                    (0, i.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    channel: t,
                                    ...n
                                });
                        },
                        { modalKey: a.HD_STREAMING_POTION_MODAL_KEY }
                    );
                },
                className: d.button,
                children: [
                    (0, l.jsxs)('div', {
                        className: d.buttonLeft,
                        children: [
                            (0, l.jsx)(r.Z, { size: r.n.SMALL }),
                            (0, l.jsx)(i.Text, {
                                className: d.text,
                                variant: 'text-md/normal',
                                children: c.intl.string(c.t.Qwq08P)
                            })
                        ]
                    }),
                    (0, l.jsx)(o.Z, { channel: t })
                ]
            })
        ]
    });
}

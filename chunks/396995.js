n.d(t, {
    Z: function () {
        return d;
    }
});
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(688465),
    s = n(447564),
    a = n(207126),
    o = n(388032),
    c = n(652484);
function d(e) {
    let { channel: t } = e;
    return (0, l.jsxs)('div', {
        className: c.bar,
        children: [
            (0, l.jsxs)('div', {
                className: c.top,
                children: [
                    (0, l.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        children: o.intl.string(o.t['6XV1IC'])
                    }),
                    (0, l.jsx)(r.Z, {})
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
                        { modalKey: s.HD_STREAMING_POTION_MODAL_KEY }
                    );
                },
                className: c.button,
                children: [
                    (0, l.jsxs)('div', {
                        className: c.buttonLeft,
                        children: [
                            (0, l.jsx)('img', {
                                className: c.img,
                                src: 'https://cdn.discordapp.com/assets/content/002329228bcca963cd89792b8c6cb0a6586ddc3dfd8b331742a319057eabd2a7.png',
                                alt: o.intl.string(o.t.htEhYm)
                            }),
                            (0, l.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: o.intl.string(o.t.Qwq08P)
                            })
                        ]
                    }),
                    (0, l.jsx)(a.Z, { channel: t })
                ]
            })
        ]
    });
}

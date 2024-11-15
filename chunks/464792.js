n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(738672),
    o = n(447564),
    c = n(388032),
    d = n(24464);
function u(e) {
    let { channel: t, onClick: l, hidden: s, onDismiss: u } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.popoutContainer, { [d.hidden]: s }),
        children: [
            (0, i.jsx)('img', {
                className: d.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(r.Button, {
                className: d.closeButton,
                'aria-label': c.intl.string(c.t.cpT0Cg),
                look: r.Button.Looks.BLANK,
                size: r.Button.Sizes.NONE,
                onClick: () => {
                    u();
                },
                children: (0, i.jsx)(r.XSmallIcon, {
                    size: 'xs',
                    className: d.closeIcon,
                    color: 'white'
                })
            }),
            (0, i.jsxs)('div', {
                className: d.infoContainerParent,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: d.heading,
                        variant: 'heading-md/extrabold',
                        children: c.intl.string(c.t.kQqTnp)
                    }),
                    (0, i.jsx)('div', {
                        className: d.infoContainer,
                        children: (0, i.jsx)(r.Text, {
                            className: d.infoText,
                            variant: 'text-sm/medium',
                            children: c.intl.string(c.t.cxf5yM)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: d.buttonContainer,
                        children: (0, i.jsx)(r.Button, {
                            onClick: () => {
                                (0, r.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                channel: t,
                                                ...n
                                            });
                                    },
                                    { modalKey: o.HD_STREAMING_POTION_MODAL_KEY }
                                ),
                                    l();
                            },
                            color: r.ButtonColors.WHITE,
                            className: d.button,
                            children: c.intl.string(c.t.GBe9lJ)
                        })
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { channel: t, onClick: n, ...l } = e;
    return (0, i.jsx)(s.h, {
        ...l,
        renderComponent: (e) =>
            (0, i.jsx)(u, {
                onClick: n,
                channel: t,
                ...e
            })
    });
}

n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(738672),
    o = n(447564),
    c = n(388032),
    d = n(85932);
function u(e) {
    let { channel: t, onClick: n, hidden: l, onDismiss: s } = e;
    return (0, i.jsxs)('div', {
        className: r()(d.popoutContainer, { [d.hidden]: l }),
        children: [
            (0, i.jsx)('img', {
                className: d.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(a.Button, {
                className: d.closeButton,
                'aria-label': c.intl.string(c.t.cpT0Cg),
                look: a.Button.Looks.BLANK,
                size: a.Button.Sizes.NONE,
                onClick: () => {
                    s();
                },
                children: (0, i.jsx)(a.XSmallIcon, {
                    size: 'xs',
                    className: d.closeIcon,
                    color: 'white'
                })
            }),
            (0, i.jsxs)('div', {
                className: d.infoContainerParent,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: d.heading,
                        variant: 'heading-md/extrabold',
                        children: c.intl.string(c.t.kQqTnp)
                    }),
                    (0, i.jsx)('div', {
                        className: d.infoContainer,
                        children: (0, i.jsx)(a.Text, {
                            className: d.infoText,
                            variant: 'text-sm/medium',
                            children: c.intl.string(c.t.cxf5yM)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: d.buttonContainer,
                        children: (0, i.jsx)(a.Button, {
                            onClick: () => {
                                (0, o.openHDPotionModal)(t, 'HDStreamingPotionUpsellPopout'), n();
                            },
                            color: a.ButtonColors.WHITE,
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

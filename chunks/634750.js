n.d(t, {
    G: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(990547),
    a = n(481060),
    o = n(213609),
    c = n(626135),
    u = n(738672),
    d = n(981631),
    h = n(388032),
    m = n(500725);
function p(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, o.Z)(
            {
                type: s.ImpressionTypes.VIEW,
                name: s.ImpressionNames.HD_STREAMING_POPOUT
            },
            { disableTrack: t },
            [t]
        ),
        (0, i.jsxs)('div', {
            className: r()(m.popoutContainer, { [m.hidden]: t }),
            children: [
                (0, i.jsx)('img', {
                    className: m.image,
                    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                    alt: 'HD Streaming Nitro Perk'
                }),
                (0, i.jsx)(a.Button, {
                    className: m.closeButton,
                    'aria-label': h.intl.string(h.t.cpT0Cg),
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        n(), c.default.track(d.rMx.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, i.jsx)(a.XSmallIcon, {
                        size: 'xs',
                        className: m.closeIcon,
                        color: 'white'
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.infoContainerParent,
                    children: (0, i.jsxs)('div', {
                        className: m.infoContainer,
                        children: [
                            (0, i.jsx)(a.Text, {
                                className: m.infoText,
                                variant: 'text-sm/medium',
                                children: h.intl.format(h.t.ruvD7u, {})
                            }),
                            (0, i.jsxs)('div', {
                                className: m.poweredByNitroContainer,
                                children: [
                                    (0, i.jsx)(a.NitroWheelIcon, { size: 'xs' }),
                                    (0, i.jsx)(a.Text, {
                                        className: m.infoText,
                                        variant: 'text-sm/medium',
                                        children: h.intl.string(h.t['BMw+7O'])
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function f(e) {
    let { ...t } = e;
    return (0, i.jsx)(u.h, {
        ...t,
        renderComponent: (e) => (0, i.jsx)(p, { ...e })
    });
}

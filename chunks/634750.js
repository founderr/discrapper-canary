n.d(t, {
    G: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(481060),
    r = n(738672),
    o = n(689938),
    c = n(231202);
function u(e) {
    let { hidden: t, onDismiss: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(c.popoutContainer, { [c.hidden]: t }),
        children: [
            (0, i.jsx)('img', {
                className: c.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(l.Button, {
                className: c.closeButton,
                'aria-label': o.Z.Messages.CLOSE,
                look: l.Button.Looks.BLANK,
                size: l.Button.Sizes.NONE,
                onClick: n,
                children: (0, i.jsx)(l.XSmallIcon, {
                    size: 'xs',
                    className: c.closeIcon,
                    color: 'white'
                })
            }),
            (0, i.jsx)('div', {
                className: c.infoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: c.infoContainer,
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: c.infoText,
                            variant: 'text-sm/medium',
                            children: o.Z.Messages.PREMIUM_REVERSE_TRIAL_HD_STREAMING_POPOUT_BODY.format()
                        }),
                        (0, i.jsxs)('div', {
                            className: c.poweredByNitroContainer,
                            children: [
                                (0, i.jsx)(l.NitroWheelIcon, { size: 'xs' }),
                                (0, i.jsx)(l.Text, {
                                    className: c.infoText,
                                    variant: 'text-sm/medium',
                                    children: o.Z.Messages.POWERED_BY_NITRO
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function d(e) {
    let { ...t } = e;
    return (0, i.jsx)(r.h, {
        ...t,
        renderComponent: (e) => (0, i.jsx)(u, { ...e })
    });
}

var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(906732),
    o = n(646476),
    c = n(197115),
    _ = n(689938),
    d = n(222301),
    E = n(568147),
    u = n(332796);
t.Z = (e) => {
    let { className: t, imageClassName: n, textContainerOverrideStyles: a, location: T, analyticsLocation: I } = e,
        { analyticsLocations: R } = (0, l.ZP)(T),
        g = (0, o.rK)(),
        { enabled: N } = o.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: g }),
        C = N && g;
    return (0, s.jsx)(l.Gt, {
        value: R,
        children: (0, s.jsxs)('div', {
            className: r()(d.container, t),
            children: [
                (0, s.jsxs)('div', {
                    className: d.textContainer,
                    style: a,
                    children: [
                        (0, s.jsx)(i.Heading, {
                            variant: 'heading-lg/extrabold',
                            className: d.heading,
                            children: C ? _.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : _.Z.Messages.GIFT_NITRO
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            children: C ? _.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : _.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                        }),
                        (0, s.jsx)(c.Z, {
                            isGift: !0,
                            className: d.giftCardButton,
                            look: i.Button.Looks.OUTLINED,
                            buttonText: _.Z.Messages.GIFT_NITRO,
                            buttonTextClassName: d.giftButtonCTA,
                            color: i.Button.Colors.CUSTOM,
                            premiumModalAnalyticsLocation: I
                        })
                    ]
                }),
                (0, s.jsx)('img', {
                    src: C ? u : E,
                    className: r()(d.bannerImage, n),
                    alt: 'gift nitro banner'
                })
            ]
        })
    });
};

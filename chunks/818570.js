n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(197115),
    o = n(834129),
    s = n(981631),
    l = n(474936),
    u = n(689938),
    c = n(315642);
function d(e) {
    let { message: t, channel: n } = e,
        d = null != n.guild_id ? s.jXE.TEXT_IN_VOICE : s.jXE.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(o.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, r.jsx)(i.BellIcon, { colorClass: c.icon }),
        children: (0, r.jsxs)('div', {
            className: c.container,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, r.jsxs)('div', {
                            className: c.nitroBadge,
                            children: [
                                (0, r.jsx)(i.NitroWheelIcon, {
                                    size: 'xs',
                                    colorClass: c.nitroBadgeIcon
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    className: c.nitroBadgeText,
                                    children: u.Z.Messages.POWERED_BY_NITRO
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: c.buttonContainer,
                    children: (0, r.jsx)(a.Z, {
                        showGradient: !0,
                        iconClassName: c.premiumIcon,
                        subscriptionTier: l.Si.TIER_2,
                        buttonText: u.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
                        size: i.Button.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: d,
                            object: s.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}

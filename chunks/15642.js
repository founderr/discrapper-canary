n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(674701),
    r = n(934415),
    l = n(834129),
    o = n(981631),
    c = n(163809);
function u(e) {
    let { giftIntentType: t, recipientUser: n, showSecondaryCta: u, channel: d } = e;
    return (0, i.jsx)(l.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, i.jsx)(a.BellIcon, { colorClass: c.icon }),
        children: (0, i.jsx)(s.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: s.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, r.mE)(d),
            analyticsSection: o.jXE.CHANNEL,
            showSecondaryCta: u
        })
    });
}

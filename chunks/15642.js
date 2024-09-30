n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(16474),
    o = n(934415),
    s = n(834129),
    l = n(981631),
    u = n(163809);
function c(e) {
    let { giftIntentType: t, recipientUser: n, channel: c } = e;
    return (0, r.jsx)(s.Z, {
        contentClassName: u.messageContentContainer,
        iconContainerClassName: u.iconContainer,
        iconNode: (0, r.jsx)(i.BellIcon, { colorClass: u.icon }),
        children: (0, r.jsx)(a.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: a.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, o.mE)(c),
            analyticsSection: l.jXE.CHANNEL,
            glow: !0
        })
    });
}

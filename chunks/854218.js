r.d(n, {
    PZ: function () {
        return i;
    },
    XX: function () {
        return l;
    }
});
var i,
    a = r(47120);
var s = r(601964),
    o = r(981631);
function l(e) {
    let n = new Set(e.features),
        r = n.has(o.oNc.COMMUNITY) && n.has(o.oNc.DISCOVERABLE) ? 'PUBLIC' : 'INVITE_ONLY',
        i = u(e),
        a = 0;
    if (i) {
        var l;
        a = null !== (l = e instanceof s.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== l ? l : 0;
    }
    let c = e instanceof s.ZP ? e.premiumTier : o.Eu4.NONE;
    return {
        verified: n.has(o.oNc.VERIFIED),
        partnered: n.has(o.oNc.PARTNERED),
        community: n.has(o.oNc.COMMUNITY),
        staff: n.has(o.oNc.INTERNAL_EMPLOYEE_ONLY),
        clan: n.has(o.oNc.CLAN),
        visibility: r,
        premium: i,
        premiumSubscriberCount: a,
        premiumTier: c
    };
}
function u(e) {
    return null != e && (e instanceof s.ZP ? e.premiumSubscriberCount > 0 || e.premiumTier > o.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0);
}
!(function (e) {
    (e.PUBLIC = 'PUBLIC'), (e.INVITE_ONLY = 'INVITE_ONLY');
})(i || (i = {}));

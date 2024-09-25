n.d(t, {
    PZ: function () {
        return r;
    },
    XX: function () {
        return s;
    }
});
var r,
    i = n(47120);
var a = n(601964),
    o = n(981631);
function s(e) {
    let t = new Set(e.features),
        n = t.has(o.oNc.COMMUNITY) && t.has(o.oNc.DISCOVERABLE) ? 'PUBLIC' : 'INVITE_ONLY',
        r = l(e),
        i = 0;
    if (r) {
        var s;
        i = null !== (s = e instanceof a.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== s ? s : 0;
    }
    let u = e instanceof a.ZP ? e.premiumTier : o.Eu4.NONE;
    return {
        verified: t.has(o.oNc.VERIFIED),
        partnered: t.has(o.oNc.PARTNERED),
        community: t.has(o.oNc.COMMUNITY),
        staff: t.has(o.oNc.INTERNAL_EMPLOYEE_ONLY),
        clan: t.has(o.oNc.CLAN),
        visibility: n,
        premium: r,
        premiumSubscriberCount: i,
        premiumTier: u
    };
}
function l(e) {
    return null != e && (e instanceof a.ZP ? e.premiumSubscriberCount > 0 || e.premiumTier > o.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0);
}
!(function (e) {
    (e.PUBLIC = 'PUBLIC'), (e.INVITE_ONLY = 'INVITE_ONLY');
})(r || (r = {}));

n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(367907),
    a = n(906732),
    s = n(703656),
    o = n(626135),
    c = n(730647),
    d = n(289393),
    u = n(934826),
    h = n(981631);
function p(e) {
    var t;
    let { guildId: n, groupListingId: p, location: m, relevantSubscriptionListingIds: f } = e,
        g = (0, c.f)('useTrackRoleSubscriptionUpsellAnalytics'),
        { activeSubscription: C } = (0, u.Z)(p),
        x = null != C,
        v = (0, l.Wu)(
            [d.Z],
            () =>
                (null != f ? f : []).filter((e) => {
                    var t;
                    return (null === (t = d.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0;
                }),
            [f]
        ),
        { analyticsLocations: _ } = (0, a.ZP)(null !== (t = (0, s.DR)()) && void 0 !== t ? t : []),
        I = i.useRef(!1);
    i.useEffect(() => {
        g &&
            null != p &&
            null != v &&
            !I.current &&
            ((I.current = !0),
            o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
                role_subscription_group_listing_id: p,
                role_subscription_listing_ids: v,
                is_premium_member: x,
                location_stack: _,
                location: m,
                ...(0, r.hH)(n)
            }));
    }, [n, p, g, m, v, x, _]);
}

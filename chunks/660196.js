n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(367907),
    s = n(906732),
    a = n(703656),
    o = n(626135),
    c = n(730647),
    u = n(289393),
    d = n(934826),
    h = n(981631);
function m(e) {
    var t;
    let { guildId: n, groupListingId: m, location: p, relevantSubscriptionListingIds: f } = e,
        g = (0, c.f)('useTrackRoleSubscriptionUpsellAnalytics'),
        { activeSubscription: C } = (0, d.Z)(m),
        x = null != C,
        v = (0, l.Wu)(
            [u.Z],
            () =>
                (null != f ? f : []).filter((e) => {
                    var t;
                    return (null === (t = u.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0;
                }),
            [f]
        ),
        { analyticsLocations: _ } = (0, s.ZP)(null !== (t = (0, a.DR)()) && void 0 !== t ? t : []),
        I = i.useRef(!1);
    i.useEffect(() => {
        g &&
            null != m &&
            null != v &&
            !I.current &&
            ((I.current = !0),
            o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
                role_subscription_group_listing_id: m,
                role_subscription_listing_ids: v,
                is_premium_member: x,
                location_stack: _,
                location: p,
                ...(0, r.hH)(n)
            }));
    }, [n, m, g, p, v, x, _]);
}

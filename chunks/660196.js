n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(470079),
  i = n(442837),
  s = n(367907),
  a = n(906732),
  r = n(703656),
  o = n(626135),
  c = n(730647),
  u = n(289393),
  d = n(934826),
  h = n(981631);

function m(e) {
  var t;
  let {
    guildId: n,
    groupListingId: m,
    location: p,
    relevantSubscriptionListingIds: E
  } = e, g = (0, c.f)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: f
  } = (0, d.Z)(m), C = null != f, _ = (0, i.Wu)([u.Z], () => (null != E ? E : []).filter(e => {
    var t;
    return (null === (t = u.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0
  }), [E]), {
    analyticsLocations: I
  } = (0, a.ZP)(null !== (t = (0, r.DR)()) && void 0 !== t ? t : []), x = l.useRef(!1);
  l.useEffect(() => {
    g && null != m && null != _ && !x.current && (x.current = !0, o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
      role_subscription_group_listing_id: m,
      role_subscription_listing_ids: _,
      is_premium_member: C,
      location_stack: I,
      location: p,
      ...(0, s.hH)(n)
    }))
  }, [n, m, g, p, _, C, I])
}
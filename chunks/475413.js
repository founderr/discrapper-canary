"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("584825"),
  i = n("290348"),
  r = n("934826"),
  o = n("660196"),
  u = n("330181"),
  d = n("939225"),
  c = n("36246"),
  f = n("305342"),
  E = n("726324"),
  h = n("981631"),
  _ = n("689938"),
  C = n("82205");
t.default = e => {
  var t, n;
  let {
    guild: m
  } = e, p = (0, l.useGroupListingsForGuild)(m.id)[0];
  (0, o.default)({
    guildId: m.id,
    groupListingId: null == p ? void 0 : p.id,
    location: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == p ? void 0 : p.subscription_listings_ids
  });
  let {
    activeSubscription: S
  } = (0, r.default)(null == p ? void 0 : p.id), g = (0, l.useSubscriptionsSettings)(m.id), I = null == g ? void 0 : g.description, {
    editStateIds: T
  } = i.useEditStateIds(null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : null, m.id);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.default, {
      title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
        serverName: m.toString()
      }),
      description: null != I ? I : null,
      coverImageAsset: null !== (n = null == g ? void 0 : g.cover_image_asset) && void 0 !== n ? n : null,
      guild: m,
      children: [null != p ? (0, a.jsx)(u.default, {
        className: C.pendingPlanChangeNotice,
        groupListingId: p.id,
        subscription: S
      }) : null, (0, a.jsx)(d.default, {
        subscription: S
      })]
    }), (0, a.jsx)(s.HeadingLevel, {
      children: (0, a.jsx)(c.default, {
        guildId: m.id,
        children: T.map(e => {
          var t;
          return (0, a.jsx)(f.default, {
            guildId: m.id,
            groupListingId: null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : "",
            listingId: e,
            analyticsLocation: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}
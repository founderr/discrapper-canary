"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("584825"),
  i = a("290348"),
  r = a("934826"),
  o = a("660196"),
  u = a("330181"),
  d = a("939225"),
  c = a("36246"),
  f = a("305342"),
  E = a("726324"),
  h = a("981631"),
  _ = a("689938"),
  C = a("454865");
t.default = e => {
  var t, a;
  let {
    guild: m
  } = e, S = (0, l.useGroupListingsForGuild)(m.id)[0];
  (0, o.default)({
    guildId: m.id,
    groupListingId: null == S ? void 0 : S.id,
    location: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == S ? void 0 : S.subscription_listings_ids
  });
  let {
    activeSubscription: p
  } = (0, r.default)(null == S ? void 0 : S.id), I = (0, l.useSubscriptionsSettings)(m.id), T = null == I ? void 0 : I.description, {
    editStateIds: g
  } = i.useEditStateIds(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : null, m.id);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(E.default, {
      title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
        serverName: m.toString()
      }),
      description: null != T ? T : null,
      coverImageAsset: null !== (a = null == I ? void 0 : I.cover_image_asset) && void 0 !== a ? a : null,
      guild: m,
      children: [null != S ? (0, n.jsx)(u.default, {
        className: C.pendingPlanChangeNotice,
        groupListingId: S.id,
        subscription: p
      }) : null, (0, n.jsx)(d.default, {
        subscription: p
      })]
    }), (0, n.jsx)(s.HeadingLevel, {
      children: (0, n.jsx)(c.default, {
        guildId: m.id,
        children: g.map(e => {
          var t;
          return (0, n.jsx)(f.default, {
            guildId: m.id,
            groupListingId: null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : "",
            listingId: e,
            analyticsLocation: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}
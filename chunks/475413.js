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
  C = n("981631"),
  h = n("689938"),
  _ = n("82205");
t.default = e => {
  var t, n;
  let {
    guild: S
  } = e, m = (0, l.useGroupListingsForGuild)(S.id)[0];
  (0, o.default)({
    guildId: S.id,
    groupListingId: null == m ? void 0 : m.id,
    location: C.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == m ? void 0 : m.subscription_listings_ids
  });
  let {
    activeSubscription: p
  } = (0, r.default)(null == m ? void 0 : m.id), I = (0, l.useSubscriptionsSettings)(S.id), g = null == I ? void 0 : I.description, {
    editStateIds: T
  } = i.useEditStateIds(null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : null, S.id);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.default, {
      title: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
        serverName: S.toString()
      }),
      description: null != g ? g : null,
      coverImageAsset: null !== (n = null == I ? void 0 : I.cover_image_asset) && void 0 !== n ? n : null,
      guild: S,
      children: [null != m ? (0, a.jsx)(u.default, {
        className: _.pendingPlanChangeNotice,
        groupListingId: m.id,
        subscription: p
      }) : null, (0, a.jsx)(d.default, {
        subscription: p
      })]
    }), (0, a.jsx)(s.HeadingLevel, {
      children: (0, a.jsx)(c.default, {
        guildId: S.id,
        children: T.map(e => {
          var t;
          return (0, a.jsx)(f.default, {
            guildId: S.id,
            groupListingId: null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : "",
            listingId: e,
            analyticsLocation: C.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}
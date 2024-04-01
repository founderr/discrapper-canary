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
  _ = n("981631"),
  h = n("689938"),
  C = n("685405");
t.default = e => {
  var t, n;
  let {
    guild: S
  } = e, m = (0, l.useGroupListingsForGuild)(S.id)[0];
  (0, o.default)({
    guildId: S.id,
    groupListingId: null == m ? void 0 : m.id,
    location: _.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == m ? void 0 : m.subscription_listings_ids
  });
  let {
    activeSubscription: I
  } = (0, r.default)(null == m ? void 0 : m.id), p = (0, l.useSubscriptionsSettings)(S.id), T = null == p ? void 0 : p.description, {
    editStateIds: g
  } = i.useEditStateIds(null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : null, S.id);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.default, {
      title: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
        serverName: S.toString()
      }),
      description: null != T ? T : null,
      coverImageAsset: null !== (n = null == p ? void 0 : p.cover_image_asset) && void 0 !== n ? n : null,
      guild: S,
      children: [null != m ? (0, a.jsx)(u.default, {
        className: C.pendingPlanChangeNotice,
        groupListingId: m.id,
        subscription: I
      }) : null, (0, a.jsx)(d.default, {
        subscription: I
      })]
    }), (0, a.jsx)(s.HeadingLevel, {
      children: (0, a.jsx)(c.default, {
        guildId: S.id,
        children: g.map(e => {
          var t;
          return (0, a.jsx)(f.default, {
            guildId: S.id,
            groupListingId: null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : "",
            listingId: e,
            analyticsLocation: _.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}
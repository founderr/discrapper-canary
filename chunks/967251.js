"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("837008"),
  i = n("167109"),
  r = n("176687"),
  o = n("847426"),
  u = n("430780"),
  d = n("904698"),
  c = n("900076"),
  f = n("108314"),
  E = n("337239"),
  h = n("49111"),
  _ = n("782340"),
  C = n("767588"),
  I = e => {
    var t, n;
    let {
      guild: I
    } = e, S = (0, l.useGroupListingsForGuild)(I.id)[0];
    (0, o.default)({
      guildId: I.id,
      groupListingId: null == S ? void 0 : S.id,
      location: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
      relevantSubscriptionListingIds: null == S ? void 0 : S.subscription_listings_ids
    });
    let {
      activeSubscription: m
    } = (0, r.default)(null == S ? void 0 : S.id), p = (0, l.useSubscriptionsSettings)(I.id), T = null == p ? void 0 : p.description, {
      editStateIds: g
    } = i.useEditStateIds(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : null, I.id);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.default, {
        title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
          serverName: I.toString()
        }),
        description: null != T ? T : null,
        coverImageAsset: null !== (n = null == p ? void 0 : p.cover_image_asset) && void 0 !== n ? n : null,
        guild: I,
        children: [null != S ? (0, a.jsx)(u.default, {
          className: C.pendingPlanChangeNotice,
          groupListingId: S.id,
          subscription: m
        }) : null, (0, a.jsx)(d.default, {
          subscription: m
        })]
      }), (0, a.jsx)(s.HeadingLevel, {
        children: (0, a.jsx)(c.default, {
          guildId: I.id,
          children: g.map(e => {
            var t;
            return (0, a.jsx)(f.default, {
              guildId: I.id,
              groupListingId: null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : "",
              listingId: e,
              analyticsLocation: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
            }, e)
          })
        })
      })]
    })
  }
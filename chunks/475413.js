var s = n(735250);
n(470079);
var i = n(481060),
  l = n(584825),
  a = n(290348),
  r = n(934826),
  o = n(660196),
  c = n(330181),
  u = n(939225),
  d = n(36246),
  E = n(305342),
  h = n(726324),
  _ = n(981631),
  I = n(689938),
  m = n(307115);
t.Z = e => {
  var t, n;
  let {
    guild: T
  } = e, g = (0, l.GG)(T.id)[0];
  (0, o.Z)({
    guildId: T.id,
    groupListingId: null == g ? void 0 : g.id,
    location: _.Sbl.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == g ? void 0 : g.subscription_listings_ids
  });
  let {
    activeSubscription: p
  } = (0, r.Z)(null == g ? void 0 : g.id), N = (0, l.YB)(T.id), S = null == N ? void 0 : N.description, {
    editStateIds: C
  } = a.B7(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : null, T.id);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(h.Z, {
      title: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
        serverName: T.toString()
      }),
      description: null != S ? S : null,
      coverImageAsset: null !== (n = null == N ? void 0 : N.cover_image_asset) && void 0 !== n ? n : null,
      guild: T,
      children: [null != g ? (0, s.jsx)(c.Z, {
        className: m.pendingPlanChangeNotice,
        groupListingId: g.id,
        subscription: p
      }) : null, (0, s.jsx)(u.Z, {
        subscription: p
      })]
    }), (0, s.jsx)(i.HeadingLevel, {
      children: (0, s.jsx)(d.Z, {
        guildId: T.id,
        children: C.map(e => {
          var t;
          return (0, s.jsx)(E.Z, {
            guildId: T.id,
            groupListingId: null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : "",
            listingId: e,
            analyticsLocation: _.Sbl.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}
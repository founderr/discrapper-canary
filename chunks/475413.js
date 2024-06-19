var i = n(735250);
n(470079);
var s = n(481060),
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
    guild: g
  } = e, p = (0, l.GG)(g.id)[0];
  (0, o.Z)({
    guildId: g.id,
    groupListingId: null == p ? void 0 : p.id,
    location: _.Sbl.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == p ? void 0 : p.subscription_listings_ids
  });
  let {
    activeSubscription: T
  } = (0, r.Z)(null == p ? void 0 : p.id), N = (0, l.YB)(g.id), S = null == N ? void 0 : N.description, {
    editStateIds: C
  } = a.B7(null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : null, g.id);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(h.Z, {
      title: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
        serverName: g.toString()
      }),
      description: null != S ? S : null,
      coverImageAsset: null !== (n = null == N ? void 0 : N.cover_image_asset) && void 0 !== n ? n : null,
      guild: g,
      children: [null != p ? (0, i.jsx)(c.Z, {
        className: m.pendingPlanChangeNotice,
        groupListingId: p.id,
        subscription: T
      }) : null, (0, i.jsx)(u.Z, {
        subscription: T
      })]
    }), (0, i.jsx)(s.HeadingLevel, {
      children: (0, i.jsx)(d.Z, {
        guildId: g.id,
        children: C.map(e => {
          var t;
          return (0, i.jsx)(E.Z, {
            guildId: g.id,
            groupListingId: null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : "",
            listingId: e,
            analyticsLocation: _.Sbl.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}
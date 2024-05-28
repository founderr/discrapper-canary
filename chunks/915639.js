"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250"),
  u = a("470079"),
  r = a("536402"),
  i = a("442837"),
  s = a("481060"),
  d = a("642101"),
  l = a("971930"),
  o = a("665906"),
  f = a("638471"),
  c = a("689938");

function h(e, t) {
  let h = e.guild_id,
    T = u.useMemo(() => ({
      guildId: h,
      entity: e,
      entityType: r.GuildFeedItemTypes.FORUM_POST
    }), [h, e]),
    F = (0, i.useStateFromStores)([d.default], () => d.default.getIsItemFeatured(T), [T]),
    _ = (0, o.useIsThreadModerator)(e),
    m = (0, f.useCanGuildFeedFeatureChannel)(e);
  return _ && m ? F ? (0, n.jsx)(s.MenuItem, {
    id: "guild-feed-unfeature",
    label: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
    action: () => (0, s.openModalLazy)(async () => {
      let {
        UnfeatureItemConfirmationModal: e
      } = await Promise.all([a.e("99387"), a.e("11345")]).then(a.bind(a, "560454"));
      return t => (0, n.jsx)(e, {
        featureableItem: T,
        header: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
        body: c.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
        ...t
      })
    })
  }) : (0, n.jsx)(s.MenuItem, {
    id: "guild-feed-feature",
    label: c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
    children: (0, l.getFeatureItemsTimes)().map(u => {
      let {
        value: r,
        timePeriod: i
      } = u;
      return (0, n.jsx)(s.MenuItem, {
        id: "".concat(r),
        label: (0, l.createFeatureItemsTimeLabel)(i),
        action: () => (0, s.openModalLazy)(async () => {
          let {
            FeatureForumPostConfirmationModal: u
          } = await Promise.all([a.e("99387"), a.e("11345")]).then(a.bind(a, "560454"));
          return a => (0, n.jsx)(u, {
            thread: e,
            guildId: h,
            expiresSeconds: r,
            timePeriod: i,
            options: t,
            ...a
          })
        })
      }, r)
    })
  }) : null
}
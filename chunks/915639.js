"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var u = n("735250"),
  a = n("470079"),
  r = n("536402"),
  l = n("442837"),
  s = n("481060"),
  i = n("642101"),
  d = n("971930"),
  o = n("665906"),
  f = n("638471"),
  c = n("689938");

function _(e, t) {
  let _ = e.guild_id,
    E = a.useMemo(() => ({
      guildId: _,
      entity: e,
      entityType: r.GuildFeedItemTypes.FORUM_POST
    }), [_, e]),
    F = (0, l.useStateFromStores)([i.default], () => i.default.getIsItemFeatured(E), [E]),
    m = (0, o.useIsThreadModerator)(e),
    M = (0, f.useCanGuildFeedFeatureChannel)(e);
  return m && M ? F ? (0, u.jsx)(s.MenuItem, {
    id: "guild-feed-unfeature",
    label: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
    action: () => (0, s.openModalLazy)(async () => {
      let {
        UnfeatureItemConfirmationModal: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("56630"), n.e("6380"), n.e("11250"), n.e("57878"), n.e("77172"), n.e("95393"), n.e("88390"), n.e("81539"), n.e("8739"), n.e("58286"), n.e("3084"), n.e("30243"), n.e("14767"), n.e("75837"), n.e("89585"), n.e("69563"), n.e("7620"), n.e("38122")]).then(n.bind(n, "560454"));
      return t => (0, u.jsx)(e, {
        featureableItem: E,
        header: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
        body: c.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
        ...t
      })
    })
  }) : (0, u.jsx)(s.MenuItem, {
    id: "guild-feed-feature",
    label: c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
    children: (0, d.getFeatureItemsTimes)().map(a => {
      let {
        value: r,
        timePeriod: l
      } = a;
      return (0, u.jsx)(s.MenuItem, {
        id: "".concat(r),
        label: (0, d.createFeatureItemsTimeLabel)(l),
        action: () => (0, s.openModalLazy)(async () => {
          let {
            FeatureForumPostConfirmationModal: a
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("56630"), n.e("6380"), n.e("11250"), n.e("57878"), n.e("77172"), n.e("95393"), n.e("88390"), n.e("81539"), n.e("8739"), n.e("58286"), n.e("3084"), n.e("30243"), n.e("14767"), n.e("75837"), n.e("89585"), n.e("69563"), n.e("7620"), n.e("38122")]).then(n.bind(n, "560454"));
          return n => (0, u.jsx)(a, {
            thread: e,
            guildId: _,
            expiresSeconds: r,
            timePeriod: l,
            options: t,
            ...n
          })
        })
      }, r)
    })
  }) : null
}
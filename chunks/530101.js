"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  i = n("884691"),
  l = n("611221"),
  s = n("446674"),
  u = n("77078"),
  r = n("185014"),
  d = n("886484"),
  o = n("300322"),
  c = n("549990"),
  f = n("782340");

function E(e, t) {
  let E = e.guild_id,
    M = i.useMemo(() => ({
      guildId: E,
      entity: e,
      entityType: l.GuildFeedItemTypes.FORUM_POST
    }), [E, e]),
    m = (0, s.useStateFromStores)([r.default], () => r.default.getIsItemFeatured(M), [M]),
    g = (0, o.useIsThreadModerator)(e),
    S = (0, c.useCanGuildFeedFeatureChannel)(e);
  return g && S ? m ? (0, a.jsx)(u.MenuItem, {
    id: "guild-feed-unfeature",
    label: f.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
    action: () => (0, u.openModalLazy)(async () => {
      let {
        UnfeatureItemConfirmationModal: e
      } = await n.el("969715").then(n.bind(n, "969715"));
      return t => (0, a.jsx)(e, {
        featureableItem: M,
        header: f.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
        body: f.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
        ...t
      })
    })
  }) : (0, a.jsx)(u.MenuItem, {
    id: "guild-feed-feature",
    label: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
    children: (0, d.getFeatureItemsTimes)().map(i => {
      let {
        value: l,
        timePeriod: s
      } = i;
      return (0, a.jsx)(u.MenuItem, {
        id: "".concat(l),
        label: (0, d.createFeatureItemsTimeLabel)(s),
        action: () => (0, u.openModalLazy)(async () => {
          let {
            FeatureForumPostConfirmationModal: i
          } = await n.el("969715").then(n.bind(n, "969715"));
          return n => (0, a.jsx)(i, {
            thread: e,
            guildId: E,
            expiresSeconds: l,
            timePeriod: s,
            options: t,
            ...n
          })
        })
      }, l)
    })
  }) : null
}
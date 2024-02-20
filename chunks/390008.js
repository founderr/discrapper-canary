"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("162771"),
  d = n("498139"),
  s = n("49111"),
  o = n("782340");

function r(e) {
  let t = (0, i.useStateFromStores)([u.default], () => u.default.getGuildId()),
    r = e.type === s.ChannelTypes.GUILD_CATEGORY,
    {
      isFavoritesPerk: c
    } = (0, d.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
    id: "set-channel-nickname",
    label: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
    action: function() {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("353228").then(n.bind(n, "353228"));
        return n => (0, a.jsx)(t, {
          ...n,
          channelId: e.id,
          heading: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
          formTitle: c && r ? o.default.Messages.CATEGORY_NAME : o.default.Messages.NICKNAME,
          allowReset: !(c && r)
        })
      })
    }
  })
}
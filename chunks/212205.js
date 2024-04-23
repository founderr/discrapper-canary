"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  i = n("481060"),
  l = n("914010"),
  r = n("362658"),
  s = n("981631"),
  o = n("689938");

function d(e) {
  let t = (0, u.useStateFromStores)([l.default], () => l.default.getGuildId()),
    d = e.type === s.ChannelTypes.GUILD_CATEGORY,
    {
      isFavoritesPerk: f
    } = (0, r.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(i.MenuItem, {
    id: "set-channel-nickname",
    label: f && d ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
    action: function() {
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("46161")]).then(n.bind(n, "238716"));
        return n => (0, a.jsx)(t, {
          ...n,
          channelId: e.id,
          heading: f && d ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
          formTitle: f && d ? o.default.Messages.CATEGORY_NAME : o.default.Messages.NICKNAME,
          allowReset: !(f && d)
        })
      })
    }
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  i = n("481060"),
  r = n("914010"),
  l = n("362658"),
  s = n("981631"),
  d = n("689938");

function o(e) {
  let t = (0, u.useStateFromStores)([r.default], () => r.default.getGuildId()),
    o = e.type === s.ChannelTypes.GUILD_CATEGORY,
    {
      isFavoritesPerk: f
    } = (0, l.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(i.MenuItem, {
    id: "set-channel-nickname",
    label: f && o ? d.default.Messages.FAVORITES_RENAME_CATEGORY : d.default.Messages.CHANGE_NICKNAME,
    action: function() {
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("46161")]).then(n.bind(n, "238716"));
        return n => (0, a.jsx)(t, {
          ...n,
          channelId: e.id,
          heading: f && o ? d.default.Messages.FAVORITES_RENAME_CATEGORY : d.default.Messages.CHANGE_NICKNAME,
          formTitle: f && o ? d.default.Messages.CATEGORY_NAME : d.default.Messages.NICKNAME,
          allowReset: !(f && o)
        })
      })
    }
  })
}
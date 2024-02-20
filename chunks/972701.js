"use strict";
n.r(t), n.d(t, {
  useAddToFavoritesItem: function() {
    return A
  },
  useRemoveFromFavoritesItem: function() {
    return E
  }
}), n("222007");
var a = n("37983");
n("884691");
var i = n("917351"),
  l = n.n(i),
  u = n("446674"),
  d = n("77078"),
  s = n("923959"),
  o = n("379881"),
  r = n("200008"),
  c = n("986373"),
  f = n("498139"),
  I = n("49111"),
  _ = n("782340");

function p(e, t) {
  return e.type === I.ChannelTypes.GROUP_DM ? t ? _.default.Messages.UNFAVORITE_GDM : _.default.Messages.FAVORITE_GDM : e.type === I.ChannelTypes.DM ? t ? _.default.Messages.UNFAVORITE_DM : _.default.Messages.FAVORITE_DM : t ? _.default.Messages.UNFAVORITE_CHANNEL : _.default.Messages.FAVORITE_CHANNEL
}

function A(e) {
  let t = (0, u.useStateFromStores)([s.default], () => s.default.getChannels(I.FAVORITES))[I.ChannelTypes.GUILD_CATEGORY],
    {
      isFavoritesPerk: n
    } = (0, f.useFavoritesServerExperiment)("58e21a_1"),
    {
      notifyFavoriteAdded: i
    } = (0, c.useFavoriteAdded)(),
    o = (0, c.useCanFavoriteChannel)(e);
  if (!o) return null;
  let [
    [_], A
  ] = l.partition(t, e => "null" === e.channel.id);

  function E(t) {
    i(), (0, r.addFavoriteChannel)(e.id, t)
  }
  return 0 === A.length ? (0, a.jsx)(d.MenuItem, {
    id: "favorite-channel",
    label: p(e, !1),
    action: () => E(null)
  }) : (0, a.jsxs)(d.MenuItem, {
    id: "favorite-channel",
    label: p(e, !1),
    action: () => E(null),
    children: [n && (0, a.jsx)(d.MenuGroup, {
      children: (0, a.jsx)(d.MenuItem, {
        id: "favorite-".concat(_.channel.id),
        label: _.channel.name,
        action: () => E("null" === _.channel.id ? null : _.channel.id)
      }, _.channel.id)
    }), (0, a.jsx)(d.MenuGroup, {
      children: A.map(e => (0, a.jsx)(d.MenuItem, {
        id: "favorite-".concat(e.channel.id),
        label: e.channel.name,
        action: () => E(e.channel.id)
      }, e.channel.id))
    })]
  })
}

function E(e) {
  let t = (0, u.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
  return __OVERLAY__ || !t ? null : (0, a.jsx)(d.MenuItem, {
    id: "favorite-channel",
    label: p(e, !0),
    color: "danger",
    action: () => e.type === I.ChannelTypes.GUILD_CATEGORY ? (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("338052").then(n.bind(n, "338052"));
      return n => (0, a.jsx)(t, {
        ...n,
        onConfirm: () => {
          n.onClose(), (0, r.removeFavoriteChannel)(e.id)
        },
        channel: e
      })
    }) : (0, r.removeFavoriteChannel)(e.id)
  })
}
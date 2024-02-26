"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("118849"),
  i = n("290581"),
  r = n("664336"),
  u = n("379881"),
  o = n("200008"),
  d = n("986373"),
  c = n("498139"),
  f = n("20209"),
  h = n("782340");

function m(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, c.useFavoritesServerExperiment)("ChannelFavoritesHeaderButton"), m = (0, f.default)(), {
    notifyFavoriteAdded: p
  } = (0, d.useFavoriteAdded)(), E = (0, a.useStateFromStores)([u.default], () => u.default.isFavorite(t.id));
  if (!n || m) return null;
  let S = E ? i.default : s.default,
    g = E ? h.default.Messages.UNFAVORITE_CHANNEL : h.default.Messages.FAVORITE_CHANNEL;
  return (0, l.jsx)(r.default.Icon, {
    icon: S,
    tooltip: g,
    "aria-label": g,
    onClick: () => {
      E ? (0, o.removeFavoriteChannel)(t.id) : (p(), (0, o.addFavoriteChannel)(t.id))
    }
  })
}
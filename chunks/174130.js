n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(502568),
  r = n(853856),
  o = n(117984),
  c = n(593214),
  u = n(362658),
  d = n(916069),
  h = n(689938);

function m(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, u.z)("ChannelFavoritesHeaderButton"), m = (0, d.Z)(), {
    notifyFavoriteAdded: E
  } = (0, c.up)(), p = (0, i.e7)([r.Z], () => r.Z.isFavorite(t.id));
  if (!n || m) return null;
  let g = p ? s.StarIcon : s.StarOutlineIcon,
    f = p ? h.Z.Messages.UNFAVORITE_CHANNEL : h.Z.Messages.FAVORITE_CHANNEL;
  return (0, l.jsx)(a.ZP.Icon, {
    icon: g,
    tooltip: f,
    "aria-label": f,
    onClick: () => {
      p ? (0, o.oC)(t.id) : (E(), (0, o.kj)(t.id))
    }
  })
}
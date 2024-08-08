t.d(n, {
  Z: function() {
return C;
  }
});
var l = t(735250);
t(470079);
var r = t(442837),
  i = t(169525),
  a = t(611170),
  o = t(128854),
  s = t(884182),
  c = t(546432),
  u = t(780088),
  d = t(592125),
  m = t(52824),
  f = t(823379),
  _ = t(970184),
  p = t(981631);

function C(e) {
  let {
message: n
  } = (0, _.CJ)(), t = (0, r.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)), {
shouldHideMediaOptions: C,
shouldRedactExplicitContent: v,
gifAutoPlay: h,
getGifFavButton: E,
getOnMediaItemContextMenu: x
  } = (0, o.c)();
  if (null == n || null == t)
return null;
  let I = e.items.map(e => (0, u.j0)(e.media, p.VqG, C, v)).filter(f.lm),
T = {
  source: 'Media Mosaic',
  guild_id: t.guild_id,
  channel_id: t.id,
  channel_type: t.type
},
g = I.length > 1 ? (0, u.Cx)(I, T) : {};

  function N(e, n) {
let t = e.originalItem;
return (0, i.lK)(t.media, n, t.spoiler);
  }
  let S = e.items.map(e => {
let t = e.media,
  l = null == x ? void 0 : x(t),
  r = {
    message: n,
    item: {
      uniqueId: t.proxyUrl,
      originalItem: e,
      type: (0, c.pU)(t, !0),
      downloadUrl: t.url,
      height: t.height,
      width: t.width,
      spoiler: e.spoiler,
      contentType: t.contentType
    },
    onContextMenu: l,
    autoPlayGif: h,
    getObscureReason: N,
    renderImageComponent: a.a,
    renderVideoComponent: a.r,
    renderAudioComponent: p.dG4,
    renderPlaintextFilePreview: p.dG4,
    renderGenericFileComponent: p.dG4,
    renderMosaicItemFooter: p.dG4,
    gifFavoriteButton: E(t),
    onPlay: (e, n, t) => {},
    canRemoveItem: !1,
    onRemoveItem: p.dG4
  },
  i = (0, m.q)({
    proxyURL: t.proxyUrl,
    url: t.url
  });
return i in g && (r.onClick = g[i]), r;
  });
  return (0, l.jsx)('div', {
children: (0, l.jsx)(s.Z, {
  items: S
})
  });
}
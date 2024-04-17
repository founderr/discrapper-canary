"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("169525"),
  o = n("611170"),
  u = n("128854"),
  r = n("592125"),
  i = n("52824"),
  d = n("310043"),
  c = n("69750"),
  m = n("592256"),
  p = n("823379"),
  f = n("970184"),
  C = n("981631");

function S(e) {
  let {
    message: t
  } = (0, f.useComponentStateContext)(), n = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(null == t ? void 0 : t.channel_id)), {
    shouldHideMediaOptions: S,
    shouldRedactExplicitContent: E,
    gifAutoPlay: v,
    getGifFavButton: N,
    getOnMediaItemContextMenu: h
  } = (0, u.useMessageAccessoriesComponentContext)();
  if (null == t || null == n) return null;
  let T = e.items.map(e => (0, m.carouselAssetFromMediaItem)(e.media, S, E)).filter(p.isNotNullish),
    x = {
      source: "Media Mosaic",
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_type: n.type
    },
    y = T.length > 1 ? (0, m.createMediaOnClickOverrides)(T, x) : {};

  function g(e, t) {
    let n = e.originalItem;
    return (0, s.getObscureReasonForUnfurledMediaItem)(n.media, t, n.spoiler)
  }
  let O = e.items.map(e => {
    let n = e.media,
      l = null == h ? void 0 : h(n),
      a = {
        message: t,
        item: {
          uniqueId: n.proxyUrl,
          originalItem: e,
          type: (0, c.getMosaicMediaTypeForUnfurledMediaItem)(n, !0),
          downloadUrl: n.url,
          height: n.height,
          width: n.width,
          spoiler: e.spoiler,
          contentType: n.contentType
        },
        onContextMenu: l,
        autoPlayGif: v,
        getObscureReason: g,
        renderImageComponent: o.renderImageComponentForGalleryItem,
        renderVideoComponent: o.renderVideoComponentForGalleryItem,
        renderAudioComponent: C.NOOP,
        renderPlaintextFilePreview: C.NOOP,
        renderGenericFileComponent: C.NOOP,
        renderMosaicItemFooter: C.NOOP,
        gifFavoriteButton: N(n),
        onPlay: (e, t, n) => {},
        canRemoveItem: !1,
        onRemoveItem: C.NOOP
      },
      s = (0, i.getBestEffortSrcUrl)({
        proxyURL: n.proxyUrl,
        url: n.url
      });
    return s in y && (a.onClick = y[s]), a
  });
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(d.default, {
      items: O
    })
  })
}
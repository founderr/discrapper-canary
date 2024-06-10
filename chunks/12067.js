"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  u = n("169525"),
  i = n("611170"),
  s = n("128854"),
  o = n("592125"),
  r = n("52824"),
  d = n("310043"),
  c = n("69750"),
  p = n("592256"),
  m = n("823379"),
  f = n("970184"),
  S = n("981631");

function C(e) {
  let {
    message: t
  } = (0, f.useComponentStateContext)(), n = (0, a.useStateFromStores)([o.default], () => o.default.getChannel(null == t ? void 0 : t.channel_id)), {
    shouldHideMediaOptions: C,
    shouldRedactExplicitContent: v,
    gifAutoPlay: E,
    getGifFavButton: N,
    getOnMediaItemContextMenu: h
  } = (0, s.useMessageAccessoriesComponentContext)();
  if (null == t || null == n) return null;
  let T = e.items.map(e => (0, p.carouselAssetFromMediaItem)(e.media, C, v)).filter(m.isNotNullish),
    I = {
      source: "Media Mosaic",
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_type: n.type
    },
    g = T.length > 1 ? (0, p.createMediaOnClickOverrides)(T, I) : {};

  function y(e, t) {
    let n = e.originalItem;
    return (0, u.getObscureReasonForUnfurledMediaItem)(n.media, t, n.spoiler)
  }
  let x = e.items.map(e => {
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
        autoPlayGif: E,
        getObscureReason: y,
        renderImageComponent: i.renderImageComponentForGalleryItem,
        renderVideoComponent: i.renderVideoComponentForGalleryItem,
        renderAudioComponent: S.NOOP,
        renderPlaintextFilePreview: S.NOOP,
        renderGenericFileComponent: S.NOOP,
        renderMosaicItemFooter: S.NOOP,
        gifFavoriteButton: N(n),
        onPlay: (e, t, n) => {},
        canRemoveItem: !1,
        onRemoveItem: S.NOOP
      },
      u = (0, r.getBestEffortSrcUrl)({
        proxyURL: n.proxyUrl,
        url: n.url
      });
    return u in g && (a.onClick = g[u]), a
  });
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(d.default, {
      items: x
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  useListingThumbnailUrl: function() {
    return o
  }
});
var r = n("470079"),
  i = n("695346"),
  l = n("73346"),
  s = n("834431");

function o(e, t) {
  let {
    shouldAnimate: n = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = i.GifAutoPlay.useSetting(), u = (0, s.useIsWindowFocused)(), a = n && u && o;
  return r.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, l.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
  }, [t, e, a])
}
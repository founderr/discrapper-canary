"use strict";
n.r(t), n.d(t, {
  useListingThumbnailUrl: function() {
    return o
  }
});
var i = n("470079"),
  r = n("695346"),
  s = n("73346"),
  l = n("834431");

function o(e, t) {
  let {
    shouldAnimate: n = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = r.GifAutoPlay.useSetting(), u = (0, l.useIsWindowFocused)(), a = n && u && o;
  return i.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, s.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
  }, [t, e, a])
}
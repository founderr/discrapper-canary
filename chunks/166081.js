"use strict";
a.r(t), a.d(t, {
  useListingThumbnailUrl: function() {
    return r
  }
});
var s = a("470079"),
  n = a("695346"),
  i = a("73346"),
  l = a("834431");

function r(e, t) {
  let {
    shouldAnimate: a = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.GifAutoPlay.useSetting(), c = (0, l.useIsWindowFocused)(), u = a && c && r;
  return s.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, i.getAssetURL)(e.application_id, e.image_asset, t, u ? void 0 : "webp")
  }, [t, e, u])
}
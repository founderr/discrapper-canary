"use strict";
n.r(t), n.d(t, {
  useListingThumbnailUrl: function() {
    return u
  }
});
var i = n("470079"),
  r = n("695346"),
  l = n("73346"),
  s = n("834431");

function u(e, t) {
  let {
    shouldAnimate: n = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = r.GifAutoPlay.useSetting(), o = (0, s.useIsWindowFocused)(), a = n && o && u;
  return i.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, l.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
  }, [t, e, a])
}
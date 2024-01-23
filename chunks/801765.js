"use strict";
n.r(t), n.d(t, {
  useListingThumbnailUrl: function() {
    return s
  }
});
var i = n("884691"),
  r = n("845579"),
  l = n("271560"),
  u = n("624180");

function s(e, t) {
  let {
    shouldAnimate: n = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = r.GifAutoPlay.useSetting(), o = (0, u.useIsWindowFocused)(), a = n && o && s;
  return i.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, l.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
  }, [t, e, a])
}
"use strict";
n.r(t), n.d(t, {
  BannerLoadingStatus: function() {
    return i
  },
  default: function() {
    return l
  }
}), n("47120");
var i, r, s = n("470079"),
  a = n("695346"),
  o = n("768581");

function l(e) {
  let {
    displayProfile: t,
    size: n,
    canAnimate: i,
    pendingBanner: r
  } = e, l = a.GifAutoPlay.getSetting(), u = null == t ? void 0 : t.getPreviewBanner(r, i, n), [d, _] = (0, s.useState)((null == t ? void 0 : t.banner) == null ? 2 : 0);
  return (0, s.useEffect)(() => {
    if (null == u || 0 !== d) return;
    _(1);
    let e = new Image;
    e.src = u, e.onload = () => _(2)
  }, [u, d]), (0, s.useEffect)(() => {
    if (l) return;
    let e = null == t ? void 0 : t.getPreviewBanner(r, !0, n);
    if (null != e && !!(0, o.isAnimatedImageURL)(e)) new Image().src = e
  }, [l, t, n, r]), {
    bannerSrc: u,
    status: d
  }
}(r = i || (i = {}))[r.SHOULD_LOAD = 0] = "SHOULD_LOAD", r[r.LOADING = 1] = "LOADING", r[r.COMPLETE = 2] = "COMPLETE"
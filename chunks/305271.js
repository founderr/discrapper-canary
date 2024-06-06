"use strict";
s.r(t), s.d(t, {
  useSlideCarouselAnalytics: function() {
    return r
  }
});
var a = s("470079"),
  l = s("626135"),
  n = s("981631");
let r = (e, t) => ({
  trackSlideView: a.useCallback((s, a) => l.default.track(n.AnalyticEvents.SLIDE_CAROUSEL_ITEM_VIEWED, {
    location_stack: t,
    carousel_id: e,
    slide_id: null != a ? a : s.toString(),
    slide_index: s
  }), [e, t])
})
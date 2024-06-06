"use strict";
s.r(t), s.d(t, {
  useSlideCarouselAnalytics: function() {
    return r
  }
});
var a = s("470079"),
  l = s("626135"),
  n = s("981631");
let r = (e, t) => {
  let s = a.useCallback((s, a) => l.default.track(n.AnalyticEvents.SLIDE_CAROUSEL_ITEM_VIEWED, {
    carousel_id: e,
    slide_id: null != a ? a : s.toString(),
    slide_index: s,
    location_stack: t
  }), [e, t]);
  return {
    trackSlideView: s,
    trackPagination: a.useCallback((s, a, r, i) => l.default.track(n.AnalyticEvents.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
      carousel_id: e,
      current_slide_index: a,
      next_slide_index: s,
      current_slide_id: i,
      next_slide_id: r,
      location_stack: t
    }), [e, t])
  }
}
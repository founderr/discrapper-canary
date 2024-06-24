"use strict";
s.d(t, {
  X: function() {
    return i
  }
});
var n = s(470079),
  r = s(626135),
  a = s(981631);
let i = (e, t) => {
  let s = n.useCallback((s, n) => r.default.track(a.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
    carousel_id: e,
    slide_id: null != n ? n : s.toString(),
    slide_index: s,
    location_stack: t
  }), [e, t]);
  return {
    trackSlideView: s,
    trackPagination: n.useCallback((s, n, i, l) => r.default.track(a.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
      carousel_id: e,
      current_slide_index: n,
      next_slide_index: s,
      current_slide_id: l,
      next_slide_id: i,
      location_stack: t
    }), [e, t])
  }
}
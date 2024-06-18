"use strict";
t.d(s, {
  X: function() {
    return l
  }
});
var n = t(470079),
  a = t(626135),
  r = t(981631);
let l = (e, s) => {
  let t = n.useCallback((t, n) => a.default.track(r.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
    carousel_id: e,
    slide_id: null != n ? n : t.toString(),
    slide_index: t,
    location_stack: s
  }), [e, s]);
  return {
    trackSlideView: t,
    trackPagination: n.useCallback((t, n, l, i) => a.default.track(r.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
      carousel_id: e,
      current_slide_index: n,
      next_slide_index: t,
      current_slide_id: i,
      next_slide_id: l,
      location_stack: s
    }), [e, s])
  }
}
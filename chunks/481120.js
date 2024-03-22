"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var s = a("884691"),
  r = a("748820"),
  l = a("560103"),
  n = a("599110");
let i = (e, t, a, s) => {
    let {
      scrollTop: r = 0,
      scrollOffset: l = 0,
      scrollHeight: i = 0,
      scrollWidth: o = 0
    } = s;
    if (i > 0) {
      let s = (r + l) / i;
      s > 0 && n.default.track(e, {
        scroll_visible_percent: s,
        source: a,
        page_height: Math.round(i),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let a = s.useRef(null),
      n = s.useRef((0, r.v4)()),
      o = (0, l.useThrottledFunction)(i, 5e3, [], {
        trailing: !0
      }),
      c = s.useCallback(() => {
        var s;
        let r = null === (s = a.current) || void 0 === s ? void 0 : s.getScrollerNode();
        null != r && o(e, n.current, t, {
          scrollTop: r.scrollTop,
          scrollOffset: r.offsetHeight,
          scrollHeight: r.scrollHeight,
          scrollWidth: r.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: c,
      sessionId: n.current
    }
  }
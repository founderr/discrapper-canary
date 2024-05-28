"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return i
  }
});
var s = a("470079"),
  r = a("153832"),
  n = a("638730"),
  l = a("626135");
let o = (e, t, a, s) => {
    let {
      scrollTop: r = 0,
      scrollOffset: n = 0,
      scrollHeight: o = 0,
      scrollWidth: i = 0
    } = s;
    if (o > 0) {
      let s = (r + n) / o;
      s > 0 && l.default.track(e, {
        scroll_visible_percent: s,
        source: a,
        page_height: Math.round(o),
        page_width: Math.round(i),
        page_session_id: t
      })
    }
  },
  i = (e, t) => {
    let a = s.useRef(null),
      l = s.useRef((0, r.v4)()),
      i = (0, n.useThrottledFunction)(o, 5e3, [], {
        trailing: !0
      }),
      c = s.useCallback(() => {
        var s;
        let r = null === (s = a.current) || void 0 === s ? void 0 : s.getScrollerNode();
        null != r && i(e, l.current, t, {
          scrollTop: r.scrollTop,
          scrollOffset: r.offsetHeight,
          scrollHeight: r.scrollHeight,
          scrollWidth: r.scrollWidth
        })
      }, [i, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: c,
      sessionId: l.current
    }
  }
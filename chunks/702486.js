"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var s = a("470079"),
  l = a("153832"),
  r = a("638730"),
  n = a("626135");
let i = (e, t, a, s) => {
    let {
      scrollTop: l = 0,
      scrollOffset: r = 0,
      scrollHeight: i = 0,
      scrollWidth: o = 0
    } = s;
    if (i > 0) {
      let s = (l + r) / i;
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
      n = s.useRef((0, l.v4)()),
      o = (0, r.useThrottledFunction)(i, 5e3, [], {
        trailing: !0
      }),
      c = s.useCallback(() => {
        var s;
        let l = null === (s = a.current) || void 0 === s ? void 0 : s.getScrollerNode();
        null != l && o(e, n.current, t, {
          scrollTop: l.scrollTop,
          scrollOffset: l.offsetHeight,
          scrollHeight: l.scrollHeight,
          scrollWidth: l.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: c,
      sessionId: n.current
    }
  }
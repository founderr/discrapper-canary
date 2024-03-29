"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return i
  }
});
var l = a("470079"),
  s = a("153832"),
  r = a("638730"),
  n = a("626135");
let o = (e, t, a, l) => {
    let {
      scrollTop: s = 0,
      scrollOffset: r = 0,
      scrollHeight: o = 0,
      scrollWidth: i = 0
    } = l;
    if (o > 0) {
      let l = (s + r) / o;
      l > 0 && n.default.track(e, {
        scroll_visible_percent: l,
        source: a,
        page_height: Math.round(o),
        page_width: Math.round(i),
        page_session_id: t
      })
    }
  },
  i = (e, t) => {
    let a = l.useRef(null),
      n = l.useRef((0, s.v4)()),
      i = (0, r.useThrottledFunction)(o, 5e3, [], {
        trailing: !0
      }),
      u = l.useCallback(() => {
        var l;
        let s = null === (l = a.current) || void 0 === l ? void 0 : l.getScrollerNode();
        null != s && i(e, n.current, t, {
          scrollTop: s.scrollTop,
          scrollOffset: s.offsetHeight,
          scrollHeight: s.scrollHeight,
          scrollWidth: s.scrollWidth
        })
      }, [i, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: u,
      sessionId: n.current
    }
  }
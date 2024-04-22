"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var l = a("470079"),
  s = a("153832"),
  r = a("638730"),
  i = a("626135");
let n = (e, t, a, l) => {
    let {
      scrollTop: s = 0,
      scrollOffset: r = 0,
      scrollHeight: n = 0,
      scrollWidth: o = 0
    } = l;
    if (n > 0) {
      let l = (s + r) / n;
      l > 0 && i.default.track(e, {
        scroll_visible_percent: l,
        source: a,
        page_height: Math.round(n),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let a = l.useRef(null),
      i = l.useRef((0, s.v4)()),
      o = (0, r.useThrottledFunction)(n, 5e3, [], {
        trailing: !0
      }),
      u = l.useCallback(() => {
        var l;
        let s = null === (l = a.current) || void 0 === l ? void 0 : l.getScrollerNode();
        null != s && o(e, i.current, t, {
          scrollTop: s.scrollTop,
          scrollOffset: s.offsetHeight,
          scrollHeight: s.scrollHeight,
          scrollWidth: s.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: u,
      sessionId: i.current
    }
  }
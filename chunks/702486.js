"use strict";
l.r(t), l.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var a = l("470079"),
  s = l("153832"),
  r = l("638730"),
  n = l("626135");
let i = (e, t, l, a) => {
    let {
      scrollTop: s = 0,
      scrollOffset: r = 0,
      scrollHeight: i = 0,
      scrollWidth: o = 0
    } = a;
    if (i > 0) {
      let a = (s + r) / i;
      a > 0 && n.default.track(e, {
        scroll_visible_percent: a,
        source: l,
        page_height: Math.round(i),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let l = a.useRef(null),
      n = a.useRef((0, s.v4)()),
      o = (0, r.useThrottledFunction)(i, 5e3, [], {
        trailing: !0
      }),
      u = a.useCallback(() => {
        var a;
        let s = null === (a = l.current) || void 0 === a ? void 0 : a.getScrollerNode();
        null != s && o(e, n.current, t, {
          scrollTop: s.scrollTop,
          scrollOffset: s.offsetHeight,
          scrollHeight: s.scrollHeight,
          scrollWidth: s.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: l,
      scrollHandler: u,
      sessionId: n.current
    }
  }
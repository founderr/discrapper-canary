"use strict";
s.r(t), s.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var a = s("470079"),
  l = s("153832"),
  r = s("638730"),
  n = s("626135");
let i = (e, t, s, a) => {
    let {
      scrollTop: l = 0,
      scrollOffset: r = 0,
      scrollHeight: i = 0,
      scrollWidth: o = 0
    } = a;
    if (i > 0) {
      let a = (l + r) / i;
      a > 0 && n.default.track(e, {
        scroll_visible_percent: a,
        source: s,
        page_height: Math.round(i),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let s = a.useRef(null),
      n = a.useRef((0, l.v4)()),
      o = (0, r.useThrottledFunction)(i, 5e3, [], {
        trailing: !0
      }),
      c = a.useCallback(() => {
        var a;
        let l = null === (a = s.current) || void 0 === a ? void 0 : a.getScrollerNode();
        null != l && o(e, n.current, t, {
          scrollTop: l.scrollTop,
          scrollOffset: l.offsetHeight,
          scrollHeight: l.scrollHeight,
          scrollWidth: l.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: s,
      scrollHandler: c,
      sessionId: n.current
    }
  }
"use strict";
n.d(t, {
  _: function() {
    return c
  }
});
var r = n(470079),
  a = n(772848),
  i = n(638730),
  o = n(626135);
let s = (e, t, n, r) => {
    let {
      scrollTop: a = 0,
      scrollOffset: i = 0,
      scrollHeight: s = 0,
      scrollWidth: c = 0
    } = r;
    if (s > 0) {
      let r = (a + i) / s;
      r > 0 && o.default.track(e, {
        scroll_visible_percent: r,
        source: n,
        page_height: Math.round(s),
        page_width: Math.round(c),
        page_session_id: t
      })
    }
  },
  c = (e, t) => {
    let n = r.useRef(null),
      o = r.useRef((0, a.Z)()),
      c = (0, i.h)(s, 5e3, [], {
        trailing: !0
      }),
      l = r.useCallback(() => {
        var r;
        let a = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
        null != a && c(e, o.current, t, {
          scrollTop: a.scrollTop,
          scrollOffset: a.offsetHeight,
          scrollHeight: a.scrollHeight,
          scrollWidth: a.scrollWidth
        })
      }, [c, e, t]);
    return {
      scrollerRef: n,
      scrollHandler: l,
      sessionId: o.current
    }
  }
"use strict";
n.d(t, {
  _: function() {
    return c
  }
});
var r = n(470079),
  i = n(772848),
  a = n(638730),
  o = n(626135);
let s = (e, t, n, r) => {
    let {
      scrollTop: i = 0,
      scrollOffset: a = 0,
      scrollHeight: s = 0,
      scrollWidth: c = 0
    } = r;
    if (s > 0) {
      let r = (i + a) / s;
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
      o = r.useRef((0, i.Z)()),
      c = (0, a.h)(s, 5e3, [], {
        trailing: !0
      }),
      l = r.useCallback(() => {
        var r;
        let i = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
        null != i && c(e, o.current, t, {
          scrollTop: i.scrollTop,
          scrollOffset: i.offsetHeight,
          scrollHeight: i.scrollHeight,
          scrollWidth: i.scrollWidth
        })
      }, [c, e, t]);
    return {
      scrollerRef: n,
      scrollHandler: l,
      sessionId: o.current
    }
  }
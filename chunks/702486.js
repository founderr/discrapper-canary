"use strict";
t.d(s, {
  _: function() {
    return o
  }
});
var n = t(470079),
  a = t(772848),
  r = t(638730),
  i = t(626135);
let l = (e, s, t, n) => {
    let {
      scrollTop: a = 0,
      scrollOffset: r = 0,
      scrollHeight: l = 0,
      scrollWidth: o = 0
    } = n;
    if (l > 0) {
      let n = (a + r) / l;
      n > 0 && i.default.track(e, {
        scroll_visible_percent: n,
        source: t,
        page_height: Math.round(l),
        page_width: Math.round(o),
        page_session_id: s
      })
    }
  },
  o = (e, s) => {
    let t = n.useRef(null),
      i = n.useRef((0, a.Z)()),
      o = (0, r.h)(l, 5e3, [], {
        trailing: !0
      }),
      c = n.useCallback(() => {
        var n;
        let a = null === (n = t.current) || void 0 === n ? void 0 : n.getScrollerNode();
        null != a && o(e, i.current, s, {
          scrollTop: a.scrollTop,
          scrollOffset: a.offsetHeight,
          scrollHeight: a.scrollHeight,
          scrollWidth: a.scrollWidth
        })
      }, [o, e, s]);
    return {
      scrollerRef: t,
      scrollHandler: c,
      sessionId: i.current
    }
  }
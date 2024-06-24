"use strict";
s.d(t, {
  _: function() {
    return o
  }
});
var n = s(470079),
  r = s(772848),
  a = s(638730),
  i = s(626135);
let l = (e, t, s, n) => {
    let {
      scrollTop: r = 0,
      scrollOffset: a = 0,
      scrollHeight: l = 0,
      scrollWidth: o = 0
    } = n;
    if (l > 0) {
      let n = (r + a) / l;
      n > 0 && i.default.track(e, {
        scroll_visible_percent: n,
        source: s,
        page_height: Math.round(l),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let s = n.useRef(null),
      i = n.useRef((0, r.Z)()),
      o = (0, a.h)(l, 5e3, [], {
        trailing: !0
      }),
      c = n.useCallback(() => {
        var n;
        let r = null === (n = s.current) || void 0 === n ? void 0 : n.getScrollerNode();
        null != r && o(e, i.current, t, {
          scrollTop: r.scrollTop,
          scrollOffset: r.offsetHeight,
          scrollHeight: r.scrollHeight,
          scrollWidth: r.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: s,
      scrollHandler: c,
      sessionId: i.current
    }
  }
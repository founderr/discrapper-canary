s.d(t, {
  _: function() {
return l;
  }
});
var n = s(470079),
  r = s(772848),
  a = s(638730),
  o = s(626135);
let i = (e, t, s, n) => {
let {
  scrollTop: r = 0,
  scrollOffset: a = 0,
  scrollHeight: i = 0,
  scrollWidth: l = 0
} = n;
if (i > 0) {
  let n = (r + a) / i;
  n > 0 && o.default.track(e, {
    scroll_visible_percent: n,
    source: s,
    page_height: Math.round(i),
    page_width: Math.round(l),
    page_session_id: t
  });
}
  },
  l = (e, t) => {
let s = n.useRef(null),
  o = n.useRef((0, r.Z)()),
  l = (0, a.h)(i, 5000, [], {
    trailing: !0
  }),
  c = n.useCallback(() => {
    var n;
    let r = null === (n = s.current) || void 0 === n ? void 0 : n.getScrollerNode();
    null != r && l(e, o.current, t, {
      scrollTop: r.scrollTop,
      scrollOffset: r.offsetHeight,
      scrollHeight: r.scrollHeight,
      scrollWidth: r.scrollWidth
    });
  }, [
    l,
    e,
    t
  ]);
return {
  scrollerRef: s,
  scrollHandler: c,
  sessionId: o.current
};
  };
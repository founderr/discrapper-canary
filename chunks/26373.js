"use strict";
a.r(t), a.d(t, {
  useListHasSingleMessageRequest: function() {
    return u
  },
  useListHasSingleSpamMessageRequest: function() {
    return d
  }
});
var n = a("470079"),
  s = a("442837"),
  l = a("355298"),
  i = a("333984"),
  r = a("899740"),
  o = a("355350");

function u() {
  let e = (0, r.useMessageRequestsCount)(),
    t = n.useRef(e),
    a = (0, s.useStateFromStores)([l.default], () => l.default.isReady()),
    i = n.useRef(a);
  return n.useEffect(() => {
    a && !i.current && (i.current = !0, t.current = e)
  }, [a, e]), t.current <= 1 && 1 === e
}

function d() {
  let e = (0, o.useSpamMessageRequestCount)(),
    t = n.useRef(e),
    a = (0, s.useStateFromStores)([i.default], () => i.default.isReady()),
    l = n.useRef(a);
  return n.useEffect(() => {
    a && !l.current && (l.current = !0, t.current = e)
  }, [a, e]), t.current <= 1 && 1 === e
}
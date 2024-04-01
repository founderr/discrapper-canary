"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
}), t("47120");
var r = t("470079"),
  l = t("846519"),
  o = t("875667");

function a(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    t = r.useRef(n),
    [a, u] = r.useState(n),
    i = r.useCallback(() => null == e ? 0 : e.currentTime / e.duration, [e]),
    s = r.useRef(i),
    c = r.useCallback(function(n) {
      var r;
      let {
        getPercent: l = i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t.current = null !== (r = null == e ? void 0 : e.volume) && void 0 !== r ? r : t.current, u(n), s.current = l
    }, [e, i]);
  return r.useEffect(() => {
    if (t.current === a) return;
    let n = new l.Interval;
    return n.start(50, () => {
      if (null == e) return;
      let r = s.current(),
        l = (0, o.default)(t.current, a, r);
      r >= .99 && (t.current = a, n.stop()), e.volume = l
    }), () => n.stop()
  }, [e, a]), r.useEffect(() => {
    null != e && (e.volume = t.current)
  }, [e]), c
}
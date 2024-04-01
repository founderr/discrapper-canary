"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
}), t("47120");
var r = t("470079"),
  u = t("846519"),
  l = t("875667");

function o(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    t = r.useRef(n),
    [o, a] = r.useState(n),
    i = r.useCallback(() => null == e ? 0 : e.currentTime / e.duration, [e]),
    c = r.useRef(i),
    s = r.useCallback(function(n) {
      var r;
      let {
        getPercent: u = i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t.current = null !== (r = null == e ? void 0 : e.volume) && void 0 !== r ? r : t.current, a(n), c.current = u
    }, [e, i]);
  return r.useEffect(() => {
    if (t.current === o) return;
    let n = new u.Interval;
    return n.start(50, () => {
      if (null == e) return;
      let r = c.current(),
        u = (0, l.default)(t.current, o, r);
      r >= .99 && (t.current = o, n.stop()), e.volume = u
    }), () => n.stop()
  }, [e, o]), r.useEffect(() => {
    null != e && (e.volume = t.current)
  }, [e]), s
}
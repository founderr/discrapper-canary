"use strict";
n.r(t), n.d(t, {
  useThrottledState: function() {
    return i
  },
  useThrottledFunction: function() {
    return r
  }
}), n("222007");
var l = n("884691"),
  a = n("917351");
let s = e => e,
  i = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = r(s, t, n, a),
      u = l.useRef(e);
    return l.useEffect(() => {
      let t = i(e);
      u.current = t
    }, [e, i]), 0 === t ? e : u.current
  },
  r = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      s = arguments.length > 3 ? arguments[3] : void 0,
      i = l.useRef((0, a.throttle)(e, t, s));
    return l.useEffect(() => (i.current = (0, a.throttle)(e, t, s), () => {
      var e;
      null === (e = i.current) || void 0 === e || e.cancel()
    }), [e, t, s, ...n]), i.current
  }
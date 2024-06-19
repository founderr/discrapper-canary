n.d(t, {
  T: function() {
    return a
  },
  h: function() {
    return r
  }
}), n(47120);
var l = n(470079),
  i = n(392711);
let s = e => e,
  a = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = r(s, t, n, i),
      o = l.useRef(e);
    return l.useEffect(() => {
      let t = a(e);
      o.current = t
    }, [e, a]), 0 === t ? e : o.current
  },
  r = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      s = arguments.length > 3 ? arguments[3] : void 0,
      a = l.useRef((0, i.throttle)(e, t, s));
    return l.useEffect(() => (a.current = (0, i.throttle)(e, t, s), () => {
      var e;
      null === (e = a.current) || void 0 === e || e.cancel()
    }), [e, t, s, ...n]), a.current
  }
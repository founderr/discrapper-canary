"use strict";
s.r(t), s.d(t, {
  AnimatedWrapper: function() {
    return n
  }
}), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("748780"),
  l = s("933137");
let n = e => {
  let {
    isVisible: t,
    children: s
  } = e, [n] = (0, i.useState)(new r.default.Value(t ? 1 : 0)), [o] = (0, i.useState)(new r.default.Value(t ? 1 : .99));
  (0, i.useEffect)(() => {
    t ? u() : d()
  }, [t]);
  let u = () => {
      r.default.parallel([r.default.timing(n, {
        toValue: 1,
        duration: 700
      }), r.default.timing(o, {
        toValue: 1,
        duration: 700
      })]).start()
    },
    d = () => {
      r.default.parallel([r.default.timing(n, {
        toValue: 0,
        duration: 700
      }), r.default.timing(o, {
        toValue: .99,
        duration: 700
      })]).start()
    };
  return (0, a.jsx)(r.default.div, {
    className: l.fullScreen,
    style: {
      opacity: n,
      transform: [{
        scale: o
      }]
    },
    children: s
  })
}
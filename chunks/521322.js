"use strict";
s.r(t), s.d(t, {
  AnimatedWrapper: function() {
    return l
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("458960"),
  n = s("458177");
let l = e => {
  let {
    isVisible: t,
    children: s
  } = e, [l] = (0, i.useState)(new r.default.Value(t ? 1 : 0)), [o] = (0, i.useState)(new r.default.Value(t ? 1 : .99));
  (0, i.useEffect)(() => {
    t ? u() : d()
  }, [t]);
  let u = () => {
      r.default.parallel([r.default.timing(l, {
        toValue: 1,
        duration: 700
      }), r.default.timing(o, {
        toValue: 1,
        duration: 700
      })]).start()
    },
    d = () => {
      r.default.parallel([r.default.timing(l, {
        toValue: 0,
        duration: 700
      }), r.default.timing(o, {
        toValue: .99,
        duration: 700
      })]).start()
    };
  return (0, a.jsx)(r.default.div, {
    className: n.fullScreen,
    style: {
      opacity: l,
      transform: [{
        scale: o
      }]
    },
    children: s
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983"),
  a = n("884691"),
  i = n("308723");

function o(e) {
  return a.forwardRef(function(t, n) {
    let o = a.useRef();
    return a.useImperativeHandle(n, () => ({
      triggerResize: () => {
        var e;
        null === (e = o.current) || void 0 === e || e.onResize()
      }
    })), (0, r.jsx)(i.default, {
      ref: o,
      children: n => {
        let {
          width: a,
          height: i
        } = n;
        return (0, r.jsx)(e, {
          ...t,
          width: a,
          height: i
        })
      }
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("124824"),
  i = n("257407"),
  r = e => {
    let {
      isHovered: t,
      closePopout: n,
      onMouseEnter: r,
      onMouseLeave: u,
      onFocus: o,
      channel: d
    } = e;
    return a.useEffect(() => {
      !t && n()
    }, [n, t]), (0, l.jsx)(s.default, {
      children: (0, l.jsx)("div", {
        onMouseEnter: r,
        onMouseLeave: u,
        children: (0, l.jsx)(i.default, {
          channel: d,
          closePopout: n,
          onFocus: o
        })
      })
    })
  }
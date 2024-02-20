"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("884691"),
  n = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
      [t, s] = a.useState(!1),
      [n, i] = a.useState(0),
      [r, l] = a.useState(!1),
      [o, u] = a.useState(0);
    return a.useEffect(() => {
      n >= e && (l(!0), u(Math.floor(n / e)));
      let t = setTimeout(() => {
        i(0)
      }, 1e3);
      return () => clearTimeout(t)
    }, [n, e]), a.useEffect(() => {
      if (!t) {
        let e = setTimeout(() => {
          l(!1), u(0)
        }, 1e3);
        return () => clearTimeout(e)
      }
      i(e => e + 1)
    }, [t]), {
      onHover: () => {
        s(!0)
      },
      onUnhover: () => {
        s(!1)
      },
      isEasterEggTriggered: r,
      easterEggLevel: o
    }
  }
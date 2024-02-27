"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("884691"),
  i = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
      [t, s] = a.useState(!1),
      [i, r] = a.useState(0),
      [n, l] = a.useState(!1),
      [o, u] = a.useState(0);
    return a.useEffect(() => {
      i >= e && (l(!0), u(Math.floor(i / e)));
      let t = setTimeout(() => {
        r(0)
      }, 1e3);
      return () => clearTimeout(t)
    }, [i, e]), a.useEffect(() => {
      if (!t) {
        let e = setTimeout(() => {
          l(!1), u(0)
        }, 1e3);
        return () => clearTimeout(e)
      }
      r(e => e + 1)
    }, [t]), {
      onHover: () => {
        s(!0)
      },
      onUnhover: () => {
        s(!1)
      },
      isEasterEggTriggered: n,
      easterEggLevel: o
    }
  }
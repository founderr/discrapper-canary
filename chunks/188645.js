"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("884691"),
  i = n("890503"),
  a = n("784410"),
  s = (e, t) => {
    let n = (0, i.default)("profile_effect_debug_controls"),
      {
        id: s,
        preset: r,
        increment: o,
        decrement: u
      } = (0, a.default)(e);
    return l.useEffect(() => {
      if (!n) return;
      let e = e => {
        "ArrowUp" === e.key && (o(), e.preventDefault()), "ArrowDown" === e.key && (u(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
      };
      return window.addEventListener("keydown", e), () => {
        window.removeEventListener("keydown", e)
      }
    }, []), {
      id: null != s ? s : null,
      preset: r
    }
  }
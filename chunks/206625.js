"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("884691");

function r(e, t) {
  let n = s.useRef(e);
  return s.useEffect(() => {
    function e(e) {
      null != n.current && !n.current.contains(e.target) && t()
    }
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [n, t]), n
}
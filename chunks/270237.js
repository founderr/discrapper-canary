"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("470079"),
  n = s("661111");

function l(e) {
  a.useEffect(() => {
    if (null != e) return n.default.lockChangeLog(e), () => {
      n.default.unlockChangeLog(e)
    }
  }, [e])
}
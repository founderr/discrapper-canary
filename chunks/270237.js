"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("470079"),
  s = a("661111");

function l(e) {
  n.useEffect(() => {
    if (null != e) return s.default.lockChangeLog(e), () => {
      s.default.unlockChangeLog(e)
    }
  }, [e])
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var n = s("470079"),
  a = s("661111");

function l(e) {
  n.useEffect(() => {
    if (null != e) return a.default.lockChangeLog(e), () => {
      a.default.unlockChangeLog(e)
    }
  }, [e])
}
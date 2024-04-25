"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("470079");

function i(e, t) {
  let s = a.useRef(e);
  a.useEffect(() => {
    e.length > s.current.length && t(), s.current = e
  }, [e, t])
}
"use strict";
n.r(t), n.d(t, {
  uid: function() {
    return o
  },
  useUID: function() {
    return u
  },
  UID: function() {
    return s
  }
});
var r = n("995008"),
  a = n.n(r),
  i = n("775560");
let o = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return a(e)
  },
  u = () => (0, i.useLazyValue)(() => o()),
  s = e => {
    let {
      children: t
    } = e;
    return t(u())
  }
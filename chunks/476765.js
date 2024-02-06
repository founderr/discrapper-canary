"use strict";
n.r(t), n.d(t, {
  uid: function() {
    return o
  },
  useUID: function() {
    return a
  },
  UID: function() {
    return s
  }
});
var i = n("995008"),
  l = n.n(i),
  r = n("775560");
let o = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return l(e)
  },
  a = () => (0, r.useLazyValue)(() => o()),
  s = e => {
    let {
      children: t
    } = e;
    return t(a())
  }
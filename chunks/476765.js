"use strict";
l.r(t), l.d(t, {
  uid: function() {
    return a
  },
  useUID: function() {
    return i
  },
  UID: function() {
    return o
  }
});
var n = l("995008"),
  r = l.n(n),
  s = l("775560");
let a = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return r(e)
  },
  i = () => (0, s.useLazyValue)(() => a()),
  o = e => {
    let {
      children: t
    } = e;
    return t(i())
  }
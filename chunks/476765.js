"use strict";
n.r(e), n.d(e, {
  uid: function() {
    return s
  },
  useUID: function() {
    return a
  },
  UID: function() {
    return o
  }
});
var i = n("995008"),
  r = n.n(i),
  l = n("775560");
let s = function() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return r(t)
  },
  a = () => (0, l.useLazyValue)(() => s()),
  o = t => {
    let {
      children: e
    } = t;
    return e(a())
  }
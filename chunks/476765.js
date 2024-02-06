"use strict";
n.r(t), n.d(t, {
  uid: function() {
    return s
  },
  useUID: function() {
    return l
  },
  UID: function() {
    return a
  }
});
var i = n("995008"),
  r = n.n(i),
  o = n("775560");
let s = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
    return r(e)
  },
  l = () => (0, o.useLazyValue)(() => s()),
  a = e => {
    let {
      children: t
    } = e;
    return t(l())
  }
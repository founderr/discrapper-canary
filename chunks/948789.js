"use strict";
let s;
n.r(t), n.d(t, {
  isActiveCreator: function() {
    return c
  },
  transitionTo: function() {
    return o
  }
}), n("653041"), n("757143");
var l = n("438361"),
  i = n.n(l),
  a = n("33382"),
  r = n.n(a);

function o(e) {
  s.push(e)
}

function c(e) {
  return t => {
    if (null != e) return null != r()(t, {
      end: !1
    }).exec(e.history.location.pathname)
  }
}
s = i()()
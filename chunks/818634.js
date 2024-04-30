"use strict";
a.r(t), a.d(t, {
  showGuildHeaderPopout: function() {
    return i
  },
  useGuildHeaderPopoutStore: function() {
    return r
  }
});
var n = a("652874");
let s = Object.freeze({
    isPopoutOpen: !1
  }),
  l = (0, n.default)(e => s),
  i = e => {
    l.setState(() => ({
      isPopoutOpen: e
    }))
  },
  r = l
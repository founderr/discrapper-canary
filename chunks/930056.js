"use strict";
n.r(t), n.d(t, {
  NONE: function() {
    return a
  },
  ALL: function() {
    return o
  },
  areDirty: function() {
    return i
  }
});
var r = n("125692"),
  a = [],
  o = [];

function i(e, t) {
  return e !== a && (e === o || void 0 === t || (0, r.intersection)(t, e).length > 0)
}
a.__IS_NONE__ = !0, o.__IS_ALL__ = !0
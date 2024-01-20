"use strict";
n.r(t), n.d(t, {
  initialState: function() {
    return o
  },
  persist: function() {
    return l
  },
  clear: function() {
    return u
  }
});
var i = n("95410"),
  s = n("548578");
let r = "ClientStateStore",
  a = (0, s.getDefaultState)();
a.version === s.CACHE_VERSION && null != a.cacheCreationDate && a.cacheCreationDate + s.MAX_CACHE_AGE_MS > Date.now() || (a = (0, s.getDefaultState)());
let o = a;

function l(e, t) {
  i.default.set(r, t)
}

function u() {
  i.default.remove(r)
}
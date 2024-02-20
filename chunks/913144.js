"use strict";
let t;
E.r(_), E.d(_, {
  DispatchBand: function() {
    return I
  },
  default: function() {
    return R
  }
});
var o, I, T, r = E("446674"),
  a = E("120082"),
  n = E("95410"),
  i = E("303167"),
  A = E("9503");
(o = I || (I = {}))[o.Early = 0] = "Early", o[o.Database = 1] = "Database", o[o.Default = 2] = "Default", t = new a.ActionLogger({
  persist: null !== (T = n.default.get(A.STORAGE_KEY_LOG_DISPATCHES)) && void 0 !== T && T
});
let s = new r.Dispatcher(2, t, {
  addBreadcrumb: i.default
});
var R = s
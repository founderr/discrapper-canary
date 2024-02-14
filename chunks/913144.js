"use strict";
let t;
E.r(_), E.d(_, {
  DispatchBand: function() {
    return n
  },
  default: function() {
    return N
  }
});
var o, n, a, r = E("446674"),
  i = E("120082"),
  I = E("95410"),
  T = E("303167"),
  s = E("9503");
(o = n || (n = {}))[o.Early = 0] = "Early", o[o.Database = 1] = "Database", o[o.Default = 2] = "Default", t = new i.ActionLogger({
  persist: null !== (a = I.default.get(s.STORAGE_KEY_LOG_DISPATCHES)) && void 0 !== a && a
});
let S = new r.Dispatcher(2, t, {
  addBreadcrumb: T.default
});
var N = S
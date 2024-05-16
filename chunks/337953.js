"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var s = a("512722"),
  l = a.n(s),
  n = a("875425");

function u(e) {
  if (e !== n.ClearAfterValues.TODAY) return l()("number" == typeof e, "Invalid custom status clear timeout"), e;
  {
    let e = new Date;
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime()
  }
}
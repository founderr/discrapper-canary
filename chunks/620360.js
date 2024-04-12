"use strict";
a.r(t);
var n = a("570140"),
  s = a("211644");
t.default = {
  init() {
    n.default.subscribe("CONNECTION_OPEN", () => {
      (0, s.reset)()
    }), n.default.subscribe("LOGOUT", () => {
      (0, s.reset)()
    })
  }
}
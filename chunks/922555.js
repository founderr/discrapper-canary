"use strict";
a.r(t);
var n = a("570140");
t.default = {
  move(e, t) {
    n.default.dispatch({
      type: "INCOMING_CALL_MOVE",
      x: e,
      y: t
    })
  }
}
"use strict";
n.r(t);
var i = n("570140");
t.default = {
  move(e, t) {
    i.default.dispatch({
      type: "INCOMING_CALL_MOVE",
      x: e,
      y: t
    })
  }
}
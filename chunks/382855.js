"use strict";
n.r(t);
var r, i = n("451530");
var a = (r = /[^.]+$/.exec(i.default && i.default.keys && i.default.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
t.default = function(e) {
  return !!a && a in e
}
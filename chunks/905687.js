"use strict";
var r = n("37549"),
  i = r("%Object.preventExtensions%", !0),
  o = r("%Object.isExtensible%", !0),
  s = n("121638");
e.exports = i ? function(e) {
  return !s(e) && o(e)
} : function(e) {
  return !s(e)
}
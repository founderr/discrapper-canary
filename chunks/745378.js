"use strict";
var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
  o = "undefined" == typeof globalThis ? r.g : globalThis;
t.exports = function() {
  for (var t = [], e = 0; e < n.length; e++) "function" == typeof o[n[e]] && (t[t.length] = n[e]);
  return t
}
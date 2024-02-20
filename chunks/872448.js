"use strict";
var n = function(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "boolean":
      return t ? "true" : "false";
    case "number":
      return isFinite(t) ? t : "";
    default:
      return ""
  }
};
t.exports = function(t, e, r, o) {
  return (e = e || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t) ? Object.keys(t).map(function(o) {
    var i = encodeURIComponent(n(o)) + r;
    return Array.isArray(t[o]) ? t[o].map(function(t) {
      return i + encodeURIComponent(n(t))
    }).join(e) : i + encodeURIComponent(n(t[o]))
  }).filter(Boolean).join(e) : o ? encodeURIComponent(n(o)) + r + encodeURIComponent(n(t)) : ""
}
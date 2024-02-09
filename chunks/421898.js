e = A.nmd(e), ! function() {
  "use strict";
  var t = {}.hasOwnProperty;

  function A() {
    for (var e = "", l = 0; l < arguments.length; l++) {
      var n = arguments[l];
      n && (e = a(e, function(e) {
        if ("string" == typeof e || "number" == typeof e) return e;
        if ("object" != typeof e) return "";
        if (Array.isArray(e)) return A.apply(null, e);
        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
        var l = "";
        for (var n in e) t.call(e, n) && e[n] && (l = a(l, n));
        return l
      }(n)))
    }
    return e
  }

  function a(e, t) {
    return t ? e ? e + " " + t : e + t : e
  }
  void 0 !== e && e.exports ? (A.default = A, e.exports = A) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
    return A
  }) : window.classNames = A
}()
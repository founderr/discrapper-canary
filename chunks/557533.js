! function() {
  "use strict";
  var t = {}.hasOwnProperty;

  function n() {
    for (var e = "", s = 0; s < arguments.length; s++) {
      var l = arguments[s];
      l && (e = i(e, function(e) {
        if ("string" == typeof e || "number" == typeof e) return e;
        if ("object" != typeof e) return "";
        if (Array.isArray(e)) return n.apply(null, e);
        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
        var s = "";
        for (var l in e) t.call(e, l) && e[l] && (s = i(s, l));
        return s
      }(l)))
    }
    return e
  }

  function i(e, t) {
    return t ? e ? e + " " + t : e + t : e
  }
  e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
    return n
  }) : window.classNames = n
}()
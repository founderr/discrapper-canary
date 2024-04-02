var t = 6e4,
  r = 36e5,
  n = 864e5,
  o = 315576e5;
e.exports = function(e, i) {
  i = i || {};
  var s = typeof e;
  if ("string" === s && e.length > 0) return function(e) {
    if (!((e = String(e)).length > 100)) {
      var a = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
      if (a) {
        var i = parseFloat(a[1]);
        switch ((a[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return i * o;
          case "days":
          case "day":
          case "d":
            return i * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return i * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return i * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return 1e3 * i;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return i;
          default:
            return
        }
      }
    }
  }(e);
  if ("number" === s && !1 === isNaN(e)) return i.long ? function(e) {
    return a(e, n, "day") || a(e, r, "hour") || a(e, t, "minute") || a(e, 1e3, "second") || e + " ms"
  }(e) : function(e) {
    return e >= n ? Math.round(e / n) + "d" : e >= r ? Math.round(e / r) + "h" : e >= t ? Math.round(e / t) + "m" : e >= 1e3 ? Math.round(e / 1e3) + "s" : e + "ms"
  }(e);
  throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
};

function a(e, t, r) {
  if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
}
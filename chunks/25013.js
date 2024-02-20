"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("70102"), n("781738");
var r = n("987482"),
  a = n("559610"),
  o = n("567703");

function i(e, t) {
  (0, a.default)(1, arguments);
  var n, i, m, _ = (0, o.default)(null !== (n = null == t ? void 0 : t.additionalDigits) && void 0 !== n ? n : 2);
  if (2 !== _ && 1 !== _ && 0 !== _) throw RangeError("additionalDigits must be 0, 1 or 2");
  if (!("string" == typeof e || "[object String]" === Object.prototype.toString.call(e))) return new Date(NaN);
  var y = function(e) {
    var t, n = {},
      r = e.split(u.dateTimeDelimiter);
    if (r.length > 2) return n;
    if (/:/.test(r[0]) ? t = r[0] : (n.date = r[0], t = r[1], u.timeZoneDelimiter.test(n.date) && (n.date = e.split(u.timeZoneDelimiter)[0], t = e.substr(n.date.length, e.length))), t) {
      var a = u.timezone.exec(t);
      a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
    }
    return n
  }(e);
  if (y.date) {
    var g = function(e, t) {
      var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
        r = e.match(n);
      if (!r) return {
        year: NaN,
        restDateString: ""
      };
      var a = r[1] ? parseInt(r[1]) : null,
        o = r[2] ? parseInt(r[2]) : null;
      return {
        year: null === o ? a : 100 * o,
        restDateString: e.slice((r[1] || r[2]).length)
      }
    }(y.date, _);
    i = function(e, t) {
      if (null === t) return new Date(NaN);
      var n = e.match(s);
      if (!n) return new Date(NaN);
      var r = !!n[4],
        a = f(n[1]),
        o = f(n[2]) - 1,
        i = f(n[3]),
        u = f(n[4]),
        l = f(n[5]) - 1;
      if (r) return ! function(e, t, n) {
        return t >= 1 && t <= 53 && n >= 0 && n <= 6
      }(t, u, l) ? new Date(NaN) : function(e, t, n) {
        var r = new Date(0);
        r.setUTCFullYear(e, 0, 4);
        var a = r.getUTCDay() || 7;
        return r.setUTCDate(r.getUTCDate() + ((t - 1) * 7 + n + 1 - a)), r
      }(t, u, l);
      var c = new Date(0);
      return ! function(e, t, n) {
        return t >= 0 && t <= 11 && n >= 1 && n <= (p[t] || (h(e) ? 29 : 28))
      }(t, o, i) || ! function(e, t) {
        return t >= 1 && t <= (h(e) ? 366 : 365)
      }(t, a) ? new Date(NaN) : (c.setUTCFullYear(t, o, Math.max(a, i)), c)
    }(g.restDateString, g.year)
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var v = i.getTime(),
    b = 0;
  if (y.time && isNaN(b = function(e) {
      var t = e.match(l);
      if (!t) return NaN;
      var n = d(t[1]),
        a = d(t[2]),
        o = d(t[3]);
      return ! function(e, t, n) {
        return 24 === e ? 0 === t && 0 === n : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25
      }(n, a, o) ? NaN : n * r.millisecondsInHour + a * r.millisecondsInMinute + 1e3 * o
    }(y.time))) return new Date(NaN);
  if (y.timezone) {
    if (isNaN(m = function(e) {
        if ("Z" === e) return 0;
        var t = e.match(c);
        if (!t) return 0;
        var n = "+" === t[1] ? -1 : 1,
          a = parseInt(t[2]),
          o = t[3] && parseInt(t[3]) || 0;
        return ! function(e, t) {
          return t >= 0 && t <= 59
        }(a, o) ? NaN : n * (a * r.millisecondsInHour + o * r.millisecondsInMinute)
      }(y.timezone))) return new Date(NaN)
  } else {
    var M = new Date(v + b),
      w = new Date(0);
    return w.setFullYear(M.getUTCFullYear(), M.getUTCMonth(), M.getUTCDate()), w.setHours(M.getUTCHours(), M.getUTCMinutes(), M.getUTCSeconds(), M.getUTCMilliseconds()), w
  }
  return new Date(v + b + m)
}
var u = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
  },
  s = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  l = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  c = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function f(e) {
  return e ? parseInt(e) : 1
}

function d(e) {
  return e && parseFloat(e.replace(",", ".")) || 0
}
var p = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function h(e) {
  return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
}
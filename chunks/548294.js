"use strict";
n.r(t), n.d(t, {
  DateParser: function() {
    return h
  }
}), n("222007"), n("70102"), n("426094"), n("854508");
var r = n("238418"),
  a = n("232985"),
  o = n("272347");

function i(e) {
  return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function u(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function s(e, t) {
  return (s = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function l(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function c(e) {
  return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  p = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  h = function(e) {
    ! function(e, t) {
      if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && s(e, t)
    }(y, e);
    var t, n, a, h, m, _ = (t = y, n = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
      } catch (e) {
        return !1
      }
    }(), function() {
      var e, r = c(t);
      if (n) {
        var a = c(this).constructor;
        e = Reflect.construct(r, arguments, a)
      } else e = r.apply(this, arguments);
      return function(e, t) {
        return t && ("object" === i(t) || "function" == typeof t) ? t : l(e)
      }(this, e)
    });

    function y() {
      var e;
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, y);
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return f(l(e = _.call.apply(_, [this].concat(n))), "priority", 90), f(l(e), "subPriority", 1), f(l(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), e
    }
    return a = y, h = [{
      key: "parse",
      value: function(e, t, n) {
        switch (t) {
          case "d":
            return (0, r.parseNumericPattern)(o.numericPatterns.date, e);
          case "do":
            return n.ordinalNumber(e, {
              unit: "date"
            });
          default:
            return (0, r.parseNDigits)(t.length, e)
        }
      }
    }, {
      key: "validate",
      value: function(e, t) {
        var n = e.getUTCFullYear(),
          a = (0, r.isLeapYearIndex)(n),
          o = e.getUTCMonth();
        return a ? t >= 1 && t <= p[o] : t >= 1 && t <= d[o]
      }
    }, {
      key: "set",
      value: function(e, t, n) {
        return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e
      }
    }], u(a.prototype, h), m && u(a, m), y
  }(a.Parser)
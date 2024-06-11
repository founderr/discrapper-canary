"use strict";
n.r(t), n.d(t, {
  handleFocus: function() {
    return u
  }
});
var r = n("470079"),
  i = n.n(r),
  a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();

function s(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var u = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
  return function(n) {
    function r() {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, r);
      for (var e, t, n, i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return t = n = s(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(a))), n.state = {
        focus: !1
      }, n.handleFocus = function() {
        return n.setState({
          focus: !0
        })
      }, n.handleBlur = function() {
        return n.setState({
          focus: !1
        })
      }, s(n, t)
    }
    return ! function(e, t) {
      if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(r, n), o(r, [{
      key: "render",
      value: function() {
        return i().createElement(t, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, i().createElement(e, a({}, this.props, this.state)))
      }
    }]), r
  }(i().Component)
}
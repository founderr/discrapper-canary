"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("924102"),
  o = n("13942"),
  s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  u = function() {
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
t.default = function(e) {
  var t = function(t) {
    function n(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, n);
      var t = function(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ("object" == typeof t || "function" == typeof t) ? t : e
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
      return t.handleChange = function(e, n) {
        if (o.simpleCheckForValidColor(e)) {
          var r = o.toState(e, e.h || t.state.oldHue);
          t.setState(r), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, r, n), t.props.onChange && t.props.onChange(r, n)
        }
      }, t.handleSwatchHover = function(e, n) {
        if (o.simpleCheckForValidColor(e)) {
          var r = o.toState(e, e.h || t.state.oldHue);
          t.props.onSwatchHover && t.props.onSwatchHover(r, n)
        }
      }, t.state = s({}, o.toState(e.color, 0)), t.debounce = (0, a.default)(function(e, t, n) {
        e(t, n)
      }, 100), t
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
    }(n, t), u(n, [{
      key: "render",
      value: function() {
        var t = {};
        return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), i().createElement(e, s({}, this.props, this.state, {
          onChange: this.handleChange
        }, t))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(e, t) {
        return s({}, o.toState(e.color, t.oldHue))
      }
    }]), n
  }(r.PureComponent || r.Component);
  return t.propTypes = s({}, e.propTypes), t.defaultProps = s({}, e.defaultProps, {
    color: {
      h: 250,
      s: .5,
      l: .2,
      a: 1
    }
  }), t
}
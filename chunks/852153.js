"use strict";
r.r(t);
var a = r("599295"),
  n = r("692378"),
  s = r("383237"),
  o = r("470079"),
  i = r.n(o),
  u = r("639519"),
  l = r.n(u),
  c = r("456519"),
  f = r("3339"),
  b = r("652621"),
  d = r("398420"),
  h = r("893361"),
  p = ["getItemString", "keyPath", "labelRenderer", "styling", "value", "valueRenderer", "isCustomNode"];

function g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, a)
  }
  return r
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? g(Object(r), !0).forEach(function(t) {
      (0, n.default)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}
var v = function(e) {
  var t = e.getItemString,
    r = e.keyPath,
    n = e.labelRenderer,
    o = e.styling,
    u = e.value,
    l = e.valueRenderer,
    g = e.isCustomNode,
    v = (0, s.default)(e, p),
    m = g(u) ? "Custom" : (0, c.default)(u),
    O = {
      getItemString: t,
      key: r[0],
      keyPath: r,
      labelRenderer: n,
      nodeType: m,
      styling: o,
      value: u,
      valueRenderer: l
    },
    w = y(y(y({}, v), O), {}, {
      data: u,
      isCustomNode: g
    });
  switch (m) {
    case "Object":
    case "Error":
    case "WeakMap":
    case "WeakSet":
      return i().createElement(f.default, w);
    case "Array":
      return i().createElement(b.default, w);
    case "Iterable":
    case "Map":
    case "Set":
      return i().createElement(d.default, w);
    case "String":
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function(e) {
          return '"'.concat(e, '"')
        }
      }));
    case "Number":
    case "Custom":
      return i().createElement(h.default, O);
    case "Boolean":
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function(e) {
          return e ? "true" : "false"
        }
      }));
    case "Date":
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function(e) {
          return e.toISOString()
        }
      }));
    case "Null":
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function() {
          return "null"
        }
      }));
    case "Undefined":
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function() {
          return "undefined"
        }
      }));
    case "Function":
    case "Symbol":
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function(e) {
          return e.toString()
        }
      }));
    default:
      return i().createElement(h.default, (0, a.default)({}, O, {
        valueGetter: function() {
          return "<".concat(m, ">")
        }
      }))
  }
};
v.propTypes = {
  getItemString: l().func.isRequired,
  keyPath: l().arrayOf(l().oneOfType([l().string, l().number]).isRequired).isRequired,
  labelRenderer: l().func.isRequired,
  styling: l().func.isRequired,
  value: l().any,
  valueRenderer: l().func.isRequired,
  isCustomNode: l().func.isRequired
}, t.default = v
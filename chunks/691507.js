"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("464854"),
  c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  l = function(e) {
    var t = e.colors,
      n = e.onClick,
      r = void 0 === n ? function() {} : n,
      a = e.onSwatchHover,
      o = (0, s.default)({
        default: {
          colors: {
            margin: "0 -10px",
            padding: "10px 0 0 10px",
            borderTop: "1px solid #eee",
            display: "flex",
            flexWrap: "wrap",
            position: "relative"
          },
          swatchWrap: {
            width: "16px",
            height: "16px",
            margin: "0 10px 10px 0"
          },
          swatch: {
            borderRadius: "3px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
          }
        },
        "no-presets": {
          colors: {
            display: "none"
          }
        }
      }, {
        "no-presets": !t || !t.length
      }),
      l = function(e, t) {
        r({
          hex: e,
          source: "hex"
        }, t)
      };
    return i().createElement("div", {
      style: o.colors,
      className: "flexbox-fix"
    }, t.map(function(e) {
      var t = "string" == typeof e ? {
          color: e
        } : e,
        n = "" + t.color + (t.title || "");
      return i().createElement("div", {
        key: n,
        style: o.swatchWrap
      }, i().createElement(u.Swatch, c({}, t, {
        style: o.swatch,
        onClick: l,
        onHover: a,
        focusStyle: {
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
        }
      })))
    }))
  };
l.propTypes = {
  colors: o().arrayOf(o().oneOfType([o().string, o().shape({
    color: o().string,
    title: o().string
  })])).isRequired
}, t.default = l
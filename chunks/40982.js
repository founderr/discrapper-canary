"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("829307"),
  c = n("464854"),
  l = n("996338"),
  d = n("691507"),
  f = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  p = function(e) {
    var t = e.width,
      n = e.rgb,
      r = e.hex,
      a = e.hsv,
      o = e.hsl,
      p = e.onChange,
      h = e.onSwatchHover,
      m = e.disableAlpha,
      g = e.presetColors,
      _ = e.renderers,
      b = e.styles,
      v = void 0 === b ? {} : b,
      y = e.className,
      E = (0, s.default)((0, u.default)({
        default: f({
          picker: {
            width: t,
            padding: "10px 10px 0",
            boxSizing: "initial",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
          },
          saturation: {
            width: "100%",
            paddingBottom: "75%",
            position: "relative",
            overflow: "hidden"
          },
          Saturation: {
            radius: "3px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          controls: {
            display: "flex"
          },
          sliders: {
            padding: "4px 0",
            flex: "1"
          },
          color: {
            width: "24px",
            height: "24px",
            position: "relative",
            marginTop: "4px",
            marginLeft: "4px",
            borderRadius: "3px"
          },
          activeColor: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "2px",
            background: "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          hue: {
            position: "relative",
            height: "10px",
            overflow: "hidden"
          },
          Hue: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          alpha: {
            position: "relative",
            height: "10px",
            marginTop: "4px",
            overflow: "hidden"
          },
          Alpha: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          }
        }, v),
        disableAlpha: {
          color: {
            height: "10px"
          },
          hue: {
            height: "10px"
          },
          alpha: {
            display: "none"
          }
        }
      }, v), {
        disableAlpha: m
      });
    return i().createElement("div", {
      style: E.picker,
      className: "sketch-picker " + (void 0 === y ? "" : y)
    }, i().createElement("div", {
      style: E.saturation
    }, i().createElement(c.Saturation, {
      style: E.Saturation,
      hsl: o,
      hsv: a,
      onChange: p
    })), i().createElement("div", {
      style: E.controls,
      className: "flexbox-fix"
    }, i().createElement("div", {
      style: E.sliders
    }, i().createElement("div", {
      style: E.hue
    }, i().createElement(c.Hue, {
      style: E.Hue,
      hsl: o,
      onChange: p
    })), i().createElement("div", {
      style: E.alpha
    }, i().createElement(c.Alpha, {
      style: E.Alpha,
      rgb: n,
      hsl: o,
      renderers: _,
      onChange: p
    }))), i().createElement("div", {
      style: E.color
    }, i().createElement(c.Checkboard, null), i().createElement("div", {
      style: E.activeColor
    }))), i().createElement(l.default, {
      rgb: n,
      hsl: o,
      hex: r,
      onChange: p,
      disableAlpha: m
    }), i().createElement(d.default, {
      colors: g,
      onClick: p,
      onSwatchHover: h
    }))
  };
p.propTypes = {
  disableAlpha: o().bool,
  width: o().oneOfType([o().string, o().number]),
  styles: o().object
}, p.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
}, (0, c.ColorWrap)(p)
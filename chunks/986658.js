"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("829307"),
  c = n("464854"),
  l = n("588945"),
  d = n("740622"),
  f = n("698842"),
  p = function(e) {
    var t = e.width,
      n = e.onChange,
      r = e.disableAlpha,
      a = e.rgb,
      o = e.hsl,
      p = e.hsv,
      h = e.hex,
      m = e.renderers,
      g = e.styles,
      _ = e.className,
      b = e.defaultView,
      v = (0, s.default)((0, u.default)({
        default: {
          picker: {
            width: t,
            background: "#fff",
            borderRadius: "2px",
            boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
            boxSizing: "initial",
            fontFamily: "Menlo"
          },
          saturation: {
            width: "100%",
            paddingBottom: "55%",
            position: "relative",
            borderRadius: "2px 2px 0 0",
            overflow: "hidden"
          },
          Saturation: {
            radius: "2px 2px 0 0"
          },
          body: {
            padding: "16px 16px 12px"
          },
          controls: {
            display: "flex"
          },
          color: {
            width: "32px"
          },
          swatch: {
            marginTop: "6px",
            width: "16px",
            height: "16px",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden"
          },
          active: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "8px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
            background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + a.a + ")",
            zIndex: "2"
          },
          toggles: {
            flex: "1"
          },
          hue: {
            height: "10px",
            position: "relative",
            marginBottom: "8px"
          },
          Hue: {
            radius: "2px"
          },
          alpha: {
            height: "10px",
            position: "relative"
          },
          Alpha: {
            radius: "2px"
          }
        },
        disableAlpha: {
          color: {
            width: "22px"
          },
          alpha: {
            display: "none"
          },
          hue: {
            marginBottom: "0px"
          },
          swatch: {
            width: "10px",
            height: "10px",
            marginTop: "0px"
          }
        }
      }, void 0 === g ? {} : g), {
        disableAlpha: r
      });
    return i().createElement("div", {
      style: v.picker,
      className: "chrome-picker " + (void 0 === _ ? "" : _)
    }, i().createElement("div", {
      style: v.saturation
    }, i().createElement(c.Saturation, {
      style: v.Saturation,
      hsl: o,
      hsv: p,
      pointer: f.default,
      onChange: n
    })), i().createElement("div", {
      style: v.body
    }, i().createElement("div", {
      style: v.controls,
      className: "flexbox-fix"
    }, i().createElement("div", {
      style: v.color
    }, i().createElement("div", {
      style: v.swatch
    }, i().createElement("div", {
      style: v.active
    }), i().createElement(c.Checkboard, {
      renderers: m
    }))), i().createElement("div", {
      style: v.toggles
    }, i().createElement("div", {
      style: v.hue
    }, i().createElement(c.Hue, {
      style: v.Hue,
      hsl: o,
      pointer: d.default,
      onChange: n
    })), i().createElement("div", {
      style: v.alpha
    }, i().createElement(c.Alpha, {
      style: v.Alpha,
      rgb: a,
      hsl: o,
      pointer: d.default,
      renderers: m,
      onChange: n
    })))), i().createElement(l.default, {
      rgb: a,
      hsl: o,
      hex: h,
      view: b,
      onChange: n,
      disableAlpha: r
    })))
  };
p.propTypes = {
  width: o().oneOfType([o().string, o().number]),
  disableAlpha: o().bool,
  styles: o().object,
  defaultView: o().oneOf(["hex", "rgb", "hsl"])
}, p.defaultProps = {
  width: 225,
  disableAlpha: !1,
  styles: {}
}, (0, c.ColorWrap)(p)
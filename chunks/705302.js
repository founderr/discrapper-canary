"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("329022"),
  c = n("829307"),
  l = n("464854"),
  d = n("844515"),
  f = function(e) {
    var t = e.width,
      n = e.colors,
      r = e.onChange,
      a = e.onSwatchHover,
      o = e.triangle,
      l = e.styles,
      f = e.className,
      p = (0, s.default)((0, c.default)({
        default: {
          card: {
            width: t,
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
            borderRadius: "4px",
            position: "relative",
            padding: "5px",
            display: "flex",
            flexWrap: "wrap"
          },
          triangle: {
            position: "absolute",
            border: "7px solid transparent",
            borderBottomColor: "#fff"
          },
          triangleShadow: {
            position: "absolute",
            border: "8px solid transparent",
            borderBottomColor: "rgba(0,0,0,0.15)"
          }
        },
        "hide-triangle": {
          triangle: {
            display: "none"
          },
          triangleShadow: {
            display: "none"
          }
        },
        "top-left-triangle": {
          triangle: {
            top: "-14px",
            left: "10px"
          },
          triangleShadow: {
            top: "-16px",
            left: "9px"
          }
        },
        "top-right-triangle": {
          triangle: {
            top: "-14px",
            right: "10px"
          },
          triangleShadow: {
            top: "-16px",
            right: "9px"
          }
        },
        "bottom-left-triangle": {
          triangle: {
            top: "35px",
            left: "10px",
            transform: "rotate(180deg)"
          },
          triangleShadow: {
            top: "37px",
            left: "9px",
            transform: "rotate(180deg)"
          }
        },
        "bottom-right-triangle": {
          triangle: {
            top: "35px",
            right: "10px",
            transform: "rotate(180deg)"
          },
          triangleShadow: {
            top: "37px",
            right: "9px",
            transform: "rotate(180deg)"
          }
        }
      }, void 0 === l ? {} : l), {
        "hide-triangle": "hide" === o,
        "top-left-triangle": "top-left" === o,
        "top-right-triangle": "top-right" === o,
        "bottom-left-triangle": "bottom-left" === o,
        "bottom-right-triangle": "bottom-right" === o
      }),
      h = function(e, t) {
        return r({
          hex: e,
          source: "hex"
        }, t)
      };
    return i().createElement("div", {
      style: p.card,
      className: "github-picker " + (void 0 === f ? "" : f)
    }, i().createElement("div", {
      style: p.triangleShadow
    }), i().createElement("div", {
      style: p.triangle
    }), (0, u.default)(n, function(e) {
      return i().createElement(d.default, {
        color: e,
        key: e,
        onClick: h,
        onSwatchHover: a
      })
    }))
  };
f.propTypes = {
  width: o().oneOfType([o().string, o().number]),
  colors: o().arrayOf(o().string),
  triangle: o().oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: o().object
}, f.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
}, (0, l.ColorWrap)(f)
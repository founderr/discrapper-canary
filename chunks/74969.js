"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("829307"),
  c = n("13942"),
  l = n("464854"),
  d = n("465995"),
  f = function(e) {
    var t = e.onChange,
      n = e.onSwatchHover,
      r = e.hex,
      a = e.colors,
      o = e.width,
      f = e.triangle,
      p = e.styles,
      h = e.className,
      m = "transparent" === r,
      g = function(e, n) {
        c.isValidHex(e) && t({
          hex: e,
          source: "hex"
        }, n)
      },
      _ = (0, s.default)((0, u.default)({
        default: {
          card: {
            width: o,
            background: "#fff",
            boxShadow: "0 1px rgba(0,0,0,.1)",
            borderRadius: "6px",
            position: "relative"
          },
          head: {
            height: "110px",
            background: r,
            borderRadius: "6px 6px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          },
          body: {
            padding: "10px"
          },
          label: {
            fontSize: "18px",
            color: c.getContrastingColor(r),
            position: "relative"
          },
          triangle: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 10px 10px 10px",
            borderColor: "transparent transparent " + r + " transparent",
            position: "absolute",
            top: "-10px",
            left: "50%",
            marginLeft: "-10px"
          },
          input: {
            width: "100%",
            fontSize: "12px",
            color: "#666",
            border: "0px",
            outline: "none",
            height: "22px",
            boxShadow: "inset 0 0 0 1px #ddd",
            borderRadius: "4px",
            padding: "0 7px",
            boxSizing: "border-box"
          }
        },
        "hide-triangle": {
          triangle: {
            display: "none"
          }
        }
      }, void 0 === p ? {} : p), {
        "hide-triangle": "hide" === f
      });
    return i().createElement("div", {
      style: _.card,
      className: "block-picker " + (void 0 === h ? "" : h)
    }, i().createElement("div", {
      style: _.triangle
    }), i().createElement("div", {
      style: _.head
    }, m && i().createElement(l.Checkboard, {
      borderRadius: "6px 6px 0 0"
    }), i().createElement("div", {
      style: _.label
    }, r)), i().createElement("div", {
      style: _.body
    }, i().createElement(d.default, {
      colors: a,
      onClick: g,
      onSwatchHover: n
    }), i().createElement(l.EditableInput, {
      style: {
        input: _.input
      },
      value: r,
      onChange: g
    })))
  };
f.propTypes = {
  width: o().oneOfType([o().string, o().number]),
  colors: o().arrayOf(o().string),
  triangle: o().oneOf(["top", "hide"]),
  styles: o().object
}, f.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
}, (0, l.ColorWrap)(f)
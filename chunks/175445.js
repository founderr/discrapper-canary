"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("13942"),
  s = n("464854");
t.default = function(e) {
  var t = e.onChange,
    n = e.rgb,
    r = e.hsl,
    u = e.hex,
    c = e.hsv,
    l = function(e, n) {
      if (e.hex) o.isValidHex(e.hex) && t({
        hex: e.hex,
        source: "hex"
      }, n);
      else if (e.rgb) {
        var r = e.rgb.split(",");
        o.isvalidColorString(e.rgb, "rgb") && t({
          r: r[0],
          g: r[1],
          b: r[2],
          a: 1,
          source: "rgb"
        }, n)
      } else if (e.hsv) {
        var i = e.hsv.split(",");
        o.isvalidColorString(e.hsv, "hsv") && (i[2] = i[2].replace("%", ""), i[1] = i[1].replace("%", ""), i[0] = i[0].replace("\xb0", ""), 1 == i[1] ? i[1] = .01 : 1 == i[2] && (i[2] = .01), t({
          h: Number(i[0]),
          s: Number(i[1]),
          v: Number(i[2]),
          source: "hsv"
        }, n))
      } else if (e.hsl) {
        var a = e.hsl.split(",");
        o.isvalidColorString(e.hsl, "hsl") && (a[2] = a[2].replace("%", ""), a[1] = a[1].replace("%", ""), a[0] = a[0].replace("\xb0", ""), 1 == h[1] ? h[1] = .01 : 1 == h[2] && (h[2] = .01), t({
          h: Number(a[0]),
          s: Number(a[1]),
          v: Number(a[2]),
          source: "hsl"
        }, n))
      }
    },
    d = (0, a.default)({
      default: {
        wrap: {
          display: "flex",
          height: "100px",
          marginTop: "4px"
        },
        fields: {
          width: "100%"
        },
        column: {
          paddingTop: "10px",
          display: "flex",
          justifyContent: "space-between"
        },
        double: {
          padding: "0px 4.4px",
          boxSizing: "border-box"
        },
        input: {
          width: "100%",
          height: "38px",
          boxSizing: "border-box",
          padding: "4px 10% 3px",
          textAlign: "center",
          border: "1px solid #dadce0",
          fontSize: "11px",
          textTransform: "lowercase",
          borderRadius: "5px",
          outline: "none",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        input2: {
          height: "38px",
          width: "100%",
          border: "1px solid #dadce0",
          boxSizing: "border-box",
          fontSize: "11px",
          textTransform: "lowercase",
          borderRadius: "5px",
          outline: "none",
          paddingLeft: "10px",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        label: {
          textAlign: "center",
          fontSize: "12px",
          background: "#fff",
          position: "absolute",
          textTransform: "uppercase",
          color: "#3c4043",
          width: "35px",
          top: "-6px",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        label2: {
          left: "10px",
          textAlign: "center",
          fontSize: "12px",
          background: "#fff",
          position: "absolute",
          textTransform: "uppercase",
          color: "#3c4043",
          width: "32px",
          top: "-6px",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        single: {
          flexGrow: "1",
          margin: "0px 4.4px"
        }
      }
    }),
    f = n.r + ", " + n.g + ", " + n.b,
    p = Math.round(r.h) + "\xb0, " + Math.round(100 * r.s) + "%, " + Math.round(100 * r.l) + "%",
    h = Math.round(c.h) + "\xb0, " + Math.round(100 * c.s) + "%, " + Math.round(100 * c.v) + "%";
  return i().createElement("div", {
    style: d.wrap,
    className: "flexbox-fix"
  }, i().createElement("div", {
    style: d.fields
  }, i().createElement("div", {
    style: d.double
  }, i().createElement(s.EditableInput, {
    style: {
      input: d.input,
      label: d.label
    },
    label: "hex",
    value: u,
    onChange: l
  })), i().createElement("div", {
    style: d.column
  }, i().createElement("div", {
    style: d.single
  }, i().createElement(s.EditableInput, {
    style: {
      input: d.input2,
      label: d.label2
    },
    label: "rgb",
    value: f,
    onChange: l
  })), i().createElement("div", {
    style: d.single
  }, i().createElement(s.EditableInput, {
    style: {
      input: d.input2,
      label: d.label2
    },
    label: "hsv",
    value: h,
    onChange: l
  })), i().createElement("div", {
    style: d.single
  }, i().createElement(s.EditableInput, {
    style: {
      input: d.input2,
      label: d.label2
    },
    label: "hsl",
    value: p,
    onChange: l
  })))))
}
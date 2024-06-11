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
    c = e.disableAlpha,
    l = (0, a.default)({
      default: {
        fields: {
          display: "flex",
          paddingTop: "4px"
        },
        single: {
          flex: "1",
          paddingLeft: "6px"
        },
        alpha: {
          flex: "1",
          paddingLeft: "6px"
        },
        double: {
          flex: "2"
        },
        input: {
          width: "80%",
          padding: "4px 10% 3px",
          border: "none",
          boxShadow: "inset 0 0 0 1px #ccc",
          fontSize: "11px"
        },
        label: {
          display: "block",
          textAlign: "center",
          fontSize: "11px",
          color: "#222",
          paddingTop: "3px",
          paddingBottom: "4px",
          textTransform: "capitalize"
        }
      },
      disableAlpha: {
        alpha: {
          display: "none"
        }
      }
    }, {
      disableAlpha: c
    }),
    d = function(e, i) {
      e.hex ? o.isValidHex(e.hex) && t({
        hex: e.hex,
        source: "hex"
      }, i) : e.r || e.g || e.b ? t({
        r: e.r || n.r,
        g: e.g || n.g,
        b: e.b || n.b,
        a: n.a,
        source: "rgb"
      }, i) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
        h: r.h,
        s: r.s,
        l: r.l,
        a: e.a,
        source: "rgb"
      }, i))
    };
  return i().createElement("div", {
    style: l.fields,
    className: "flexbox-fix"
  }, i().createElement("div", {
    style: l.double
  }, i().createElement(s.EditableInput, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "hex",
    value: u.replace("#", ""),
    onChange: d
  })), i().createElement("div", {
    style: l.single
  }, i().createElement(s.EditableInput, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "r",
    value: n.r,
    onChange: d,
    dragLabel: "true",
    dragMax: "255"
  })), i().createElement("div", {
    style: l.single
  }, i().createElement(s.EditableInput, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "g",
    value: n.g,
    onChange: d,
    dragLabel: "true",
    dragMax: "255"
  })), i().createElement("div", {
    style: l.single
  }, i().createElement(s.EditableInput, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "b",
    value: n.b,
    onChange: d,
    dragLabel: "true",
    dragMax: "255"
  })), i().createElement("div", {
    style: l.alpha
  }, i().createElement(s.EditableInput, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "a",
    value: Math.round(100 * n.a),
    onChange: d,
    dragLabel: "true",
    dragMax: "100"
  })))
}
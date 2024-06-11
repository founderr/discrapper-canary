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
    r = e.hsv,
    u = e.hex,
    c = (0, a.default)({
      default: {
        fields: {
          paddingTop: "5px",
          paddingBottom: "9px",
          width: "80px",
          position: "relative"
        },
        divider: {
          height: "5px"
        },
        RGBwrap: {
          position: "relative"
        },
        RGBinput: {
          marginLeft: "40%",
          width: "40%",
          height: "18px",
          border: "1px solid #888888",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
          marginBottom: "5px",
          fontSize: "13px",
          paddingLeft: "3px",
          marginRight: "10px"
        },
        RGBlabel: {
          left: "0px",
          top: "0px",
          width: "34px",
          textTransform: "uppercase",
          fontSize: "13px",
          height: "18px",
          lineHeight: "22px",
          position: "absolute"
        },
        HEXwrap: {
          position: "relative"
        },
        HEXinput: {
          marginLeft: "20%",
          width: "80%",
          height: "18px",
          border: "1px solid #888888",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
          marginBottom: "6px",
          fontSize: "13px",
          paddingLeft: "3px"
        },
        HEXlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "14px",
          textTransform: "uppercase",
          fontSize: "13px",
          height: "18px",
          lineHeight: "22px"
        },
        fieldSymbols: {
          position: "absolute",
          top: "5px",
          right: "-7px",
          fontSize: "13px"
        },
        symbol: {
          height: "20px",
          lineHeight: "22px",
          paddingBottom: "7px"
        }
      }
    }),
    l = function(e, i) {
      e["#"] ? o.isValidHex(e["#"]) && t({
        hex: e["#"],
        source: "hex"
      }, i) : e.r || e.g || e.b ? t({
        r: e.r || n.r,
        g: e.g || n.g,
        b: e.b || n.b,
        source: "rgb"
      }, i) : (e.h || e.s || e.v) && t({
        h: e.h || r.h,
        s: e.s || r.s,
        v: e.v || r.v,
        source: "hsv"
      }, i)
    };
  return i().createElement("div", {
    style: c.fields
  }, i().createElement(s.EditableInput, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "h",
    value: Math.round(r.h),
    onChange: l
  }), i().createElement(s.EditableInput, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "s",
    value: Math.round(100 * r.s),
    onChange: l
  }), i().createElement(s.EditableInput, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "v",
    value: Math.round(100 * r.v),
    onChange: l
  }), i().createElement("div", {
    style: c.divider
  }), i().createElement(s.EditableInput, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "r",
    value: n.r,
    onChange: l
  }), i().createElement(s.EditableInput, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "g",
    value: n.g,
    onChange: l
  }), i().createElement(s.EditableInput, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "b",
    value: n.b,
    onChange: l
  }), i().createElement("div", {
    style: c.divider
  }), i().createElement(s.EditableInput, {
    style: {
      wrap: c.HEXwrap,
      input: c.HEXinput,
      label: c.HEXlabel
    },
    label: "#",
    value: u.replace("#", ""),
    onChange: l
  }), i().createElement("div", {
    style: c.fieldSymbols
  }, i().createElement("div", {
    style: c.symbol
  }, "\xb0"), i().createElement("div", {
    style: c.symbol
  }, "%"), i().createElement("div", {
    style: c.symbol
  }, "%")))
}
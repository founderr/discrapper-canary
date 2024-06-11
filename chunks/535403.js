"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("829307"),
  c = n("464854"),
  l = n("654474"),
  d = n("252053"),
  f = n("175445"),
  p = function(e) {
    var t = e.width,
      n = e.onChange,
      r = e.rgb,
      a = e.hsl,
      o = e.hsv,
      p = e.hex,
      h = e.header,
      m = e.styles,
      g = e.className,
      _ = (0, s.default)((0, u.default)({
        default: {
          picker: {
            width: t,
            background: "#fff",
            border: "1px solid #dfe1e5",
            boxSizing: "initial",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: "8px 8px 0px 0px"
          },
          head: {
            height: "57px",
            width: "100%",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "16px",
            fontSize: "20px",
            boxSizing: "border-box",
            fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
          },
          saturation: {
            width: "70%",
            padding: "0px",
            position: "relative",
            overflow: "hidden"
          },
          swatch: {
            width: "30%",
            height: "228px",
            padding: "0px",
            background: "rgba(" + r.r + ", " + r.g + ", " + r.b + ", 1)",
            position: "relative",
            overflow: "hidden"
          },
          body: {
            margin: "auto",
            width: "95%"
          },
          controls: {
            display: "flex",
            boxSizing: "border-box",
            height: "52px",
            paddingTop: "22px"
          },
          color: {
            width: "32px"
          },
          hue: {
            height: "8px",
            position: "relative",
            margin: "0px 16px 0px 16px",
            width: "100%"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, void 0 === m ? {} : m));
    return i().createElement("div", {
      style: _.picker,
      className: "google-picker " + (void 0 === g ? "" : g)
    }, i().createElement("div", {
      style: _.head
    }, h), i().createElement("div", {
      style: _.swatch
    }), i().createElement("div", {
      style: _.saturation
    }, i().createElement(c.Saturation, {
      hsl: a,
      hsv: o,
      pointer: l.default,
      onChange: n
    })), i().createElement("div", {
      style: _.body
    }, i().createElement("div", {
      style: _.controls,
      className: "flexbox-fix"
    }, i().createElement("div", {
      style: _.hue
    }, i().createElement(c.Hue, {
      style: _.Hue,
      hsl: a,
      radius: "4px",
      pointer: d.default,
      onChange: n
    }))), i().createElement(f.default, {
      rgb: r,
      hsl: a,
      hex: p,
      hsv: o,
      onChange: n
    })))
  };
p.propTypes = {
  width: o().oneOfType([o().string, o().number]),
  styles: o().object,
  header: o().string
}, p.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}, (0, c.ColorWrap)(p)
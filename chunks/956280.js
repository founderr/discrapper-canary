"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("329022"),
  c = n("829307"),
  l = n("13942"),
  d = n("464854"),
  f = n("315876"),
  p = n("49764"),
  h = function(e) {
    var t = e.onChange,
      n = e.onSwatchHover,
      r = e.colors,
      a = e.hex,
      o = e.rgb,
      h = e.styles,
      m = void 0 === h ? {} : h,
      g = e.className,
      _ = (0, s.default)((0, c.default)({
        default: {
          Compact: {
            background: "#f6f6f6",
            radius: "4px"
          },
          compact: {
            paddingTop: "5px",
            paddingLeft: "5px",
            boxSizing: "initial",
            width: "240px"
          },
          clear: {
            clear: "both"
          }
        }
      }, m)),
      b = function(e, n) {
        e.hex ? l.isValidHex(e.hex) && t({
          hex: e.hex,
          source: "hex"
        }, n) : t(e, n)
      };
    return i().createElement(d.Raised, {
      style: _.Compact,
      styles: m
    }, i().createElement("div", {
      style: _.compact,
      className: "compact-picker " + (void 0 === g ? "" : g)
    }, i().createElement("div", null, (0, u.default)(r, function(e) {
      return i().createElement(f.default, {
        key: e,
        color: e,
        active: e.toLowerCase() === a,
        onClick: b,
        onSwatchHover: n
      })
    }), i().createElement("div", {
      style: _.clear
    })), i().createElement(p.default, {
      hex: a,
      rgb: o,
      onChange: b
    })))
  };
h.propTypes = {
  colors: o().arrayOf(o().string),
  styles: o().object
}, h.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
}, (0, d.ColorWrap)(h)
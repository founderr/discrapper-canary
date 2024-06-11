"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("329022"),
  c = n("829307"),
  l = n("705513"),
  d = n("464854"),
  f = n("544753"),
  p = function(e) {
    var t = e.width,
      n = e.onChange,
      r = e.onSwatchHover,
      a = e.colors,
      o = e.hex,
      l = e.circleSize,
      d = e.styles,
      p = e.circleSpacing,
      h = e.className,
      m = (0, s.default)((0, c.default)({
        default: {
          card: {
            width: t,
            display: "flex",
            flexWrap: "wrap",
            marginRight: -p,
            marginBottom: -p
          }
        }
      }, void 0 === d ? {} : d)),
      g = function(e, t) {
        return n({
          hex: e,
          source: "hex"
        }, t)
      };
    return i().createElement("div", {
      style: m.card,
      className: "circle-picker " + (void 0 === h ? "" : h)
    }, (0, u.default)(a, function(e) {
      return i().createElement(f.default, {
        key: e,
        color: e,
        onClick: g,
        onSwatchHover: r,
        active: o === e.toLowerCase(),
        circleSize: l,
        circleSpacing: p
      })
    }))
  };
p.propTypes = {
  width: o().oneOfType([o().string, o().number]),
  circleSize: o().number,
  circleSpacing: o().number,
  styles: o().object
}, p.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [l.red["500"], l.pink["500"], l.purple["500"], l.deepPurple["500"], l.indigo["500"], l.blue["500"], l.lightBlue["500"], l.cyan["500"], l.teal["500"], l.green["500"], l.lightGreen["500"], l.lime["500"], l.yellow["500"], l.amber["500"], l.orange["500"], l.deepOrange["500"], l.brown["500"], l.blueGrey["500"]],
  styles: {}
}, (0, d.ColorWrap)(p)
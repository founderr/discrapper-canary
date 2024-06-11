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
  f = n("350151"),
  p = function(e) {
    var t = e.width,
      n = e.height,
      r = e.onChange,
      a = e.onSwatchHover,
      o = e.colors,
      l = e.hex,
      p = e.styles,
      h = e.className,
      m = (0, s.default)((0, c.default)({
        default: {
          picker: {
            width: t,
            height: n
          },
          overflow: {
            height: n,
            overflowY: "scroll"
          },
          body: {
            padding: "16px 0 6px 16px"
          },
          clear: {
            clear: "both"
          }
        }
      }, void 0 === p ? {} : p)),
      g = function(e, t) {
        return r({
          hex: e,
          source: "hex"
        }, t)
      };
    return i().createElement("div", {
      style: m.picker,
      className: "swatches-picker " + (void 0 === h ? "" : h)
    }, i().createElement(d.Raised, null, i().createElement("div", {
      style: m.overflow
    }, i().createElement("div", {
      style: m.body
    }, (0, u.default)(o, function(e) {
      return i().createElement(f.default, {
        key: e.toString(),
        group: e,
        active: l,
        onClick: g,
        onSwatchHover: a
      })
    }), i().createElement("div", {
      style: m.clear
    })))))
  };
p.propTypes = {
  width: o().oneOfType([o().string, o().number]),
  height: o().oneOfType([o().string, o().number]),
  colors: o().arrayOf(o().arrayOf(o().string)),
  styles: o().object
}, p.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [l.red["900"], l.red["700"], l.red["500"], l.red["300"], l.red["100"]],
    [l.pink["900"], l.pink["700"], l.pink["500"], l.pink["300"], l.pink["100"]],
    [l.purple["900"], l.purple["700"], l.purple["500"], l.purple["300"], l.purple["100"]],
    [l.deepPurple["900"], l.deepPurple["700"], l.deepPurple["500"], l.deepPurple["300"], l.deepPurple["100"]],
    [l.indigo["900"], l.indigo["700"], l.indigo["500"], l.indigo["300"], l.indigo["100"]],
    [l.blue["900"], l.blue["700"], l.blue["500"], l.blue["300"], l.blue["100"]],
    [l.lightBlue["900"], l.lightBlue["700"], l.lightBlue["500"], l.lightBlue["300"], l.lightBlue["100"]],
    [l.cyan["900"], l.cyan["700"], l.cyan["500"], l.cyan["300"], l.cyan["100"]],
    [l.teal["900"], l.teal["700"], l.teal["500"], l.teal["300"], l.teal["100"]],
    ["#194D33", l.green["700"], l.green["500"], l.green["300"], l.green["100"]],
    [l.lightGreen["900"], l.lightGreen["700"], l.lightGreen["500"], l.lightGreen["300"], l.lightGreen["100"]],
    [l.lime["900"], l.lime["700"], l.lime["500"], l.lime["300"], l.lime["100"]],
    [l.yellow["900"], l.yellow["700"], l.yellow["500"], l.yellow["300"], l.yellow["100"]],
    [l.amber["900"], l.amber["700"], l.amber["500"], l.amber["300"], l.amber["100"]],
    [l.orange["900"], l.orange["700"], l.orange["500"], l.orange["300"], l.orange["100"]],
    [l.deepOrange["900"], l.deepOrange["700"], l.deepOrange["500"], l.deepOrange["300"], l.deepOrange["100"]],
    [l.brown["900"], l.brown["700"], l.brown["500"], l.brown["300"], l.brown["100"]],
    [l.blueGrey["900"], l.blueGrey["700"], l.blueGrey["500"], l.blueGrey["300"], l.blueGrey["100"]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
  ],
  styles: {}
}, (0, d.ColorWrap)(p)
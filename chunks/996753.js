var s, i, o, r, l = n(735250),
  a = n(470079),
  c = n(120356),
  u = n.n(c),
  h = n(481060),
  p = n(67095);
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  g = {
    [d.UP]: p.up,
    [d.RIGHT]: p.right,
    [d.DOWN]: p.down,
    [d.LEFT]: p.left
  };
class m extends(r = a.PureComponent) {
  render() {
    let {
      direction: t,
      className: e
    } = this.props;
    return (0, l.jsx)(h.ArrowSmallUpIcon, {
      size: "md",
      color: "currentColor",
      className: u()(p.__invalid_arrow, e, {
        [g[t]]: !0
      })
    })
  }
}
s = m, i = "Directions", o = d, i in s ? Object.defineProperty(s, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = o, e.Z = m
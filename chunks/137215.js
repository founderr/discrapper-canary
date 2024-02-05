"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("546671"),
  u = n("341417");
let o = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  c = {
    [o.UP]: u.up,
    [o.RIGHT]: u.right,
    [o.DOWN]: u.down,
    [o.LEFT]: u.left
  };
class d extends i.PureComponent {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, r.jsx)(a.default, {
      className: l(u.arrow, t, {
        [c[e]]: !0
      })
    })
  }
}
d.Directions = o;
var f = d
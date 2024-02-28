"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var n = r("37983"),
  s = r("884691"),
  i = r("414456"),
  l = r.n(i),
  a = r("546671"),
  u = r("711603");
let o = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  d = {
    [o.UP]: u.up,
    [o.RIGHT]: u.right,
    [o.DOWN]: u.down,
    [o.LEFT]: u.left
  };
class c extends s.PureComponent {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, n.jsx)(a.default, {
      className: l(u.arrow, t, {
        [d[e]]: !0
      })
    })
  }
}
c.Directions = o;
var f = c
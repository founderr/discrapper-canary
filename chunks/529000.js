"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("917351"),
  l = n.n(o),
  u = n("509043"),
  c = n("669491"),
  d = n("718776"),
  p = n("145131"),
  h = n("36694"),
  f = n("49111"),
  E = n("750692"),
  _ = n("890957");
let m = l.memoize(e => {
  let t = !1;
  if (null != e && (0, u.isValidHex)(e)) {
    let n = (0, u.hex2int)(e);
    null != n && (t = .2 > (0, u.getDarkness)(n))
  }
  return t ? c.default.unsafe_rawColors.BLACK_500.css : c.default.unsafe_rawColors.WHITE_500.css
});
class S extends r.PureComponent {
  render() {
    let e;
    let {
      selected: t,
      color: n,
      className: r,
      children: s
    } = this.props, o = m(n);
    return t ? e = {
      color: o,
      background: null != n ? n : c.default.unsafe_rawColors.BRAND_500.css
    } : null != n && (e = {
      color: n
    }), (0, i.jsx)(d.FocusRing, {
      offset: {
        left: 4
      },
      children: (0, i.jsxs)(p.default, {
        className: a(E.selectableItem, r, {
          [E.selected]: t
        }),
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        align: p.default.Align.CENTER,
        style: {
          ...e,
          ...this.props.style
        },
        role: "button",
        tabIndex: 0,
        children: [(0, i.jsx)(p.default, {
          align: p.default.Align.CENTER,
          className: E.selectableItemLabel,
          shrink: 1,
          children: s
        }), t && (0, i.jsx)(p.default, {
          wrap: p.default.Wrap.WRAP,
          className: _.marginReset,
          grow: 0,
          shrink: 0,
          children: (0, i.jsx)(h.default, {
            color: o
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      color: m(this.props.color)
    }, this.handleKeyUp = e => {
      if (e.which === f.KeyboardKeys.ENTER || e.which === f.KeyboardKeys.SPACE) {
        let {
          onClick: e,
          ...t
        } = this.props;
        e(t)
      }
    }, this.handleClick = () => {
      let {
        onClick: e,
        ...t
      } = this.props;
      e(t)
    }
  }
}
var g = S
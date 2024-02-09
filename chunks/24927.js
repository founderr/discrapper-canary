"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("458960"),
  o = n("974667"),
  u = n("77078"),
  d = n("272030"),
  c = n("973199"),
  f = n("649678"),
  E = function(e) {
    let {
      index: t,
      children: l,
      user: E,
      channel: _,
      onClick: h,
      isFocused: C,
      isActive: I,
      onOtherHover: T,
      className: S
    } = e, [p, m] = s.useState(!1), [g, A] = s.useState(!1), N = () => {
      m(!0), C && !I && !g && (null == T || T())
    }, R = () => {
      m(!1)
    }, O = (e, t) => {
      null != t && (A(!0), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("406784").then(n.bind(n, "406784"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      }, {
        onClose: () => {
          A(!1)
        }
      }))
    };
    return (0, a.jsx)(o.ListNavigatorItem, {
      id: _.id,
      children: e => (0, a.jsx)(u.FocusRing, {
        offset: {
          left: -8,
          right: -8
        },
        children: (0, a.jsx)(r.default.div, {
          className: i(f.messageRequestItem, S, {
            [f.active]: I || g,
            [f.firstItem]: 0 === t
          }),
          onContextMenu: e => O(e, E),
          onMouseEnter: N,
          onMouseLeave: R,
          onClick: null != h ? h : void 0,
          style: {
            LIST_ROW_HEIGHT: c.LIST_ROW_HEIGHT,
            opacity: 1
          },
          ...e,
          children: l(p || I || g)
        })
      })
    })
  }
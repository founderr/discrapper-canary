"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("748780"),
  o = n("924826"),
  u = n("481060"),
  d = n("239091"),
  c = n("687683"),
  f = n("725901");
t.default = function(e) {
  let {
    index: t,
    children: i,
    user: E,
    channel: h,
    onClick: _,
    isFocused: C,
    isActive: m,
    onOtherHover: S,
    className: p
  } = e, [g, I] = s.useState(!1), [T, A] = s.useState(!1), N = () => {
    I(!0), C && !m && !T && (null == S || S())
  }, v = () => {
    I(!1)
  }, R = (e, t) => {
    null != t && (A(!0), (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("64409")]).then(n.bind(n, "881351"));
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
    id: h.id,
    children: e => (0, a.jsx)(u.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, a.jsx)(r.default.div, {
        className: l()(f.messageRequestItem, p, {
          [f.active]: m || T,
          [f.firstItem]: 0 === t
        }),
        onContextMenu: e => R(e, E),
        onMouseEnter: N,
        onMouseLeave: v,
        onClick: null != _ ? _ : void 0,
        style: {
          LIST_ROW_HEIGHT: c.LIST_ROW_HEIGHT,
          opacity: 1
        },
        ...e,
        children: i(g || m || T)
      })
    })
  })
}
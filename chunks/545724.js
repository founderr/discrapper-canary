"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("748780"),
  o = a("924826"),
  u = a("481060"),
  d = a("239091"),
  c = a("687683"),
  f = a("47609");
t.default = function(e) {
  let {
    index: t,
    children: l,
    user: E,
    channel: h,
    onClick: _,
    isFocused: C,
    isActive: m,
    onOtherHover: S,
    className: p
  } = e, [I, T] = s.useState(!1), [g, A] = s.useState(!1), N = () => {
    T(!0), C && !m && !g && (null == S || S())
  }, v = () => {
    T(!1)
  }, R = (e, t) => {
    null != t && (A(!0), (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("79695"), a.e("1502"), a.e("64409")]).then(a.bind(a, "881351"));
      return a => (0, n.jsx)(e, {
        ...a,
        user: t
      })
    }, {
      onClose: () => {
        A(!1)
      }
    }))
  };
  return (0, n.jsx)(o.ListNavigatorItem, {
    id: h.id,
    children: e => (0, n.jsx)(u.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, n.jsx)(r.default.div, {
        className: i()(f.messageRequestItem, p, {
          [f.active]: m || g,
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
        children: l(I || m || g)
      })
    })
  })
}
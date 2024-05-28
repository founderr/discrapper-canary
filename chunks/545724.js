"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("748780"),
  o = n("924826"),
  u = n("481060"),
  d = n("239091"),
  c = n("687683"),
  f = n("725901");
t.default = function(e) {
  let {
    index: t,
    children: l,
    user: E,
    channel: C,
    onClick: h,
    isFocused: _,
    isActive: S,
    onOtherHover: m,
    className: p
  } = e, [I, g] = s.useState(!1), [T, A] = s.useState(!1), N = () => {
    g(!0), _ && !S && !T && (null == m || m())
  }, v = () => {
    g(!1)
  }, R = (e, t) => {
    null != t && (A(!0), (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("69220")]).then(n.bind(n, "881351"));
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
    id: C.id,
    children: e => (0, a.jsx)(u.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, a.jsx)(r.default.div, {
        className: i()(f.messageRequestItem, p, {
          [f.active]: S || T,
          [f.firstItem]: 0 === t
        }),
        onContextMenu: e => R(e, E),
        onMouseEnter: N,
        onMouseLeave: v,
        onClick: null != h ? h : void 0,
        style: {
          LIST_ROW_HEIGHT: c.LIST_ROW_HEIGHT,
          opacity: 1
        },
        ...e,
        children: l(I || S || T)
      })
    })
  })
}
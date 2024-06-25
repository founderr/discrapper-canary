n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(748780),
  o = n(91192),
  c = n(481060),
  u = n(239091),
  d = n(687683),
  E = n(957832);
t.Z = function(e) {
  let {
    index: t,
    children: l,
    user: h,
    channel: _,
    onClick: I,
    isFocused: m,
    isActive: T,
    onOtherHover: g,
    className: p
  } = e, [N, S] = i.useState(!1), [C, A] = i.useState(!1), f = () => {
    S(!0), m && !T && !C && (null == g || g())
  }, Z = () => {
    S(!1)
  }, L = (e, t) => {
    if (null != t) A(!0), (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
      return n => (0, s.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: () => {
        A(!1)
      }
    })
  };
  return (0, s.jsx)(o.mh, {
    id: _.id,
    children: e => (0, s.jsx)(c.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, s.jsx)(r.Z.div, {
        className: a()(E.messageRequestItem, p, {
          [E.active]: T || C,
          [E.firstItem]: 0 === t
        }),
        onContextMenu: e => L(e, h),
        onMouseEnter: f,
        onMouseLeave: Z,
        onClick: null != I ? I : void 0,
        style: {
          LIST_ROW_HEIGHT: d.WN,
          opacity: 1
        },
        ...e,
        children: l(N || T || C)
      })
    })
  })
}
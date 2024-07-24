n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(748780),
  o = n(91192),
  c = n(481060),
  d = n(239091),
  u = n(687683),
  _ = n(963383);
t.Z = function(e) {
  let {
index: t,
children: a,
user: E,
channel: h,
onClick: I,
isFocused: m,
isActive: g,
onOtherHover: p,
className: T
  } = e, [f, S] = s.useState(!1), [C, N] = s.useState(!1), A = () => {
S(!0), m && !g && !C && (null == p || p());
  }, v = () => {
S(!1);
  }, Z = (e, t) => {
if (null != t)
  N(!0), (0, d.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('69220'),
      n.e('740')
    ]).then(n.bind(n, 881351));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t
    });
  }, {
    onClose: () => {
      N(!1);
    }
  });
  };
  return (0, i.jsx)(o.mh, {
id: h.id,
children: e => (0, i.jsx)(c.FocusRing, {
  offset: {
    left: -8,
    right: -8
  },
  children: (0, i.jsx)(l.Z.div, {
    className: r()(_.messageRequestItem, T, {
      [_.active]: g || C,
      [_.firstItem]: 0 === t
    }),
    onContextMenu: e => Z(e, E),
    onMouseEnter: A,
    onMouseLeave: v,
    onClick: null != I ? I : void 0,
    style: {
      LIST_ROW_HEIGHT: u.WN,
      opacity: 1
    },
    ...e,
    children: a(f || g || C)
  })
})
  });
};
n.d(t, {
  R: function() {
return i;
  }
}), n(47120);
var i, a, s = n(735250),
  l = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(481060),
  d = n(566898),
  u = n(259580),
  h = n(760822),
  p = n(603707);
(a = i || (i = {}))[a.MutualFriendsList = 0] = 'MutualFriendsList', a[a.MutualGuildList = 1] = 'MutualGuildList';
t.Z = e => {
  let {
header: t,
children: n,
itemType: i = 1,
isLoadingHeader: a,
isLoadingContents: r,
loadingContentsCount: m = 0,
className: _,
onExpand: f,
onHover: E,
onFocus: C
  } = e, [g, I] = l.useState(!0), x = (0, s.jsx)('div', {
className: h.iconWrapper,
children: (0, s.jsx)(u.Z, {
  direction: g ? u.Z.Directions.RIGHT : u.Z.Directions.DOWN
})
  });
  return (0, s.jsxs)('div', {
className: _,
children: [
  (0, s.jsx)(c.Button, {
    className: h.collapseBtn,
    innerClassName: h.collapseBtnContent,
    color: c.ButtonColors.CUSTOM,
    onMouseEnter: E,
    onFocus: C,
    onClick: () => {
      I(!g), g && (null == f || f());
    },
    children: a ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(d.ZT, {
          width: 34,
          opacity: 0.08
        }),
        (0, s.jsx)(d.ZT, {
          width: 135,
          opacity: 0.08
        })
      ]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(c.Text, {
          variant: 'text-sm/medium',
          children: t
        }),
        x
      ]
    })
  }),
  (0, s.jsx)('ul', {
    className: o()(h.connectionList, {
      [h.isCollapsed]: g
    }),
    children: r ? Array.from({
      length: m
    }).map((e, t) => (0, s.jsxs)('div', {
      className: o()({
        [p.mutualFriendItem]: 0 === i,
        [p.mutualGuildItem]: 1 === i
      }),
      children: [
        (0, s.jsx)(d.ZT, {
          width: 34,
          opacity: 0.08
        }),
        (0, s.jsx)(d.ZT, {
          width: 135,
          opacity: 0.08
        })
      ]
    }, t)) : n
  })
]
  });
};
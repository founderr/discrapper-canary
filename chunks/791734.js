n(47120), n(724458);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(780384),
  o = n(481060),
  c = n(393903),
  d = n(410030),
  u = n(355932),
  _ = n(871025),
  h = n(689938),
  E = n(278560);

function I(e) {
  let {
onTabSelect: t,
tabs: n,
selectedTab: a
  } = e, c = (0, d.ZP)(), u = (0, l.wj)(c), I = s.useMemo(() => null != n.find(e => {
let {
  id: t
} = e;
return t === a;
  }), [
a,
n
  ]), m = I ? 'header-primary' : u ? 'text-muted' : 'header-primary', g = I ? o.tokens.colors.HEADER_PRIMARY : u ? o.tokens.colors.TEXT_MUTED : o.tokens.colors.HEADER_PRIMARY;
  return (0, i.jsx)(o.Popout, {
renderPopout: e => {
  let {
    closePopout: s
  } = e;
  return (0, i.jsx)(_.Z, {
    selectedTab: a,
    onClose: s,
    tabs: n,
    onTabSelect: t
  });
},
position: 'bottom',
align: 'left',
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, i.jsxs)(o.TabBar.Item, {
    ...e,
    id: 'more',
    color: 'text-muted',
    className: r()(E.tab, E.more, {
      [E.selected]: I
    }),
    'aria-label': h.Z.Messages.MORE,
    children: [
      (0, i.jsx)(o.Text, {
        variant: 'text-md/medium',
        color: m,
        children: h.Z.Messages.MORE
      }),
      n ? (0, i.jsx)(o.ChevronSmallUpIcon, {
        size: 'sm',
        color: g
      }) : (0, i.jsx)(o.ChevronSmallDownIcon, {
        size: 'sm',
        color: g
      })
    ]
  });
}
  });
}
t.Z = s.forwardRef(function(e, t) {
  let {
className: n,
selectedTab: a,
tabs: _,
onTabSelect: h,
onAvailableWidthChange: m
  } = e, g = (0, d.ZP)(), p = (0, l.wj)(g), [T, f] = s.useState(0), {
lastVisibleIndex: S,
onItemLayout: C,
overflowItemsRef: N,
itemWidthsRef: A
  } = (0, u.zP)({
items: _,
itemGapPx: 20,
maxLines: 1,
containerWidth: T
  }), v = s.useMemo(() => _.slice(0, S + 1), [
S,
_
  ]), Z = s.useMemo(() => _.slice(S + 1), [
S,
_
  ]), L = (0, c.y)(e => {
let t = null == e ? void 0 : e.getBoundingClientRect();
if (null == t)
  return;
f(t.width);
let n = A.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
  i = t.width - n;
null == m || m(i);
  });
  return s.useImperativeHandle(t, () => ({
getBoundingClientRect: () => {
  var e;
  return null === (e = L.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
}
  })), (0, i.jsxs)('div', {
className: r()(E.container, n),
ref: L,
children: [
  (0, i.jsxs)('div', {
    className: E.measurements,
    children: [
      _.map((e, t) => (0, i.jsx)(u.AJ, {
        index: t,
        onItemLayout: C,
        children: (0, i.jsx)(o.TabBar.Item, {
          id: e.id,
          'aria-label': e.label,
          className: E.tab,
          children: (0, i.jsx)(o.Text, {
            variant: 'text-md/medium',
            children: e.label
          })
        })
      }, e.id)),
      (0, i.jsx)('div', {
        ref: N,
        children: (0, i.jsx)(I, {
          tabs: Z,
          onTabSelect: h,
          selectedTab: a
        })
      })
    ]
  }),
  (0, i.jsxs)(o.TabBar, {
    type: 'top',
    selectedItem: a,
    onItemSelect: h,
    className: E.tabs,
    children: [
      v.map(e => {
        let t = a === e.id;
        return (0, i.jsx)(o.TabBar.Item, {
          id: e.id,
          color: 'text-muted',
          'aria-label': e.label,
          className: r()(E.tab, {
            [E.selected]: t
          }),
          children: (0, i.jsx)(o.Text, {
            variant: 'text-md/medium',
            color: t ? 'header-primary' : p ? 'text-muted' : 'header-primary',
            children: e.label
          })
        }, e.id);
      }),
      0 !== Z.length ? (0, i.jsx)(I, {
        tabs: Z,
        onTabSelect: h,
        selectedTab: a
      }) : null
    ]
  })
]
  });
});
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
  E = n(689938),
  h = n(525197);

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
    className: r()(h.tab, h.more, {
      [h.selected]: I
    }),
    'aria-label': E.Z.Messages.MORE,
    children: [
      (0, i.jsx)(o.Text, {
        variant: 'text-md/medium',
        color: m,
        children: E.Z.Messages.MORE
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
selectedTab: n,
tabs: a,
onTabSelect: _,
onAvailableWidthChange: E
  } = e, m = (0, d.ZP)(), g = (0, l.wj)(m), [p, T] = s.useState(0), {
lastVisibleIndex: f,
onItemLayout: S,
overflowItemsRef: C,
itemWidthsRef: N
  } = (0, u.zP)({
items: a,
itemGapPx: 20,
maxLines: 1,
containerWidth: p
  }), A = s.useMemo(() => a.slice(0, f + 1), [
f,
a
  ]), v = s.useMemo(() => a.slice(f + 1), [
f,
a
  ]), Z = (0, c.y)(e => {
let t = null == e ? void 0 : e.getBoundingClientRect();
if (null == t)
  return;
T(t.width);
let n = N.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
  i = t.width - n;
null == E || E(i);
  });
  return s.useImperativeHandle(t, () => ({
getBoundingClientRect: () => {
  var e;
  return null === (e = Z.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
}
  })), (0, i.jsxs)('div', {
className: h.container,
ref: Z,
children: [
  (0, i.jsxs)('div', {
    className: h.measurements,
    children: [
      a.map((e, t) => (0, i.jsx)(u.AJ, {
        index: t,
        onItemLayout: S,
        children: (0, i.jsx)(o.TabBar.Item, {
          id: e.id,
          'aria-label': e.label,
          className: h.tab,
          children: (0, i.jsx)(o.Text, {
            variant: 'text-md/medium',
            children: e.label
          })
        })
      }, e.id)),
      (0, i.jsx)('div', {
        ref: C,
        children: (0, i.jsx)(I, {
          tabs: v,
          onTabSelect: _,
          selectedTab: n
        })
      })
    ]
  }),
  (0, i.jsxs)(o.TabBar, {
    type: 'top',
    selectedItem: n,
    onItemSelect: _,
    className: h.tabs,
    children: [
      A.map(e => {
        let t = n === e.id;
        return (0, i.jsx)(o.TabBar.Item, {
          id: e.id,
          color: 'text-muted',
          'aria-label': e.label,
          className: r()(h.tab, {
            [h.selected]: t
          }),
          children: (0, i.jsx)(o.Text, {
            variant: 'text-md/medium',
            color: t ? 'header-primary' : g ? 'text-muted' : 'header-primary',
            children: e.label
          })
        }, e.id);
      }),
      0 !== v.length ? (0, i.jsx)(I, {
        tabs: v,
        onTabSelect: _,
        selectedTab: n
      }) : null
    ]
  })
]
  });
});
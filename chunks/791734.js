n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(355932),
  u = n(871025),
  _ = n(689938),
  E = n(278560);

function h(e) {
  let {
onTabSelect: t,
tabs: n,
selectedTab: a
  } = e, d = (0, c.ZP)(), h = (0, l.wj)(d), I = s.useMemo(() => null != n.find(e => {
let {
  id: t
} = e;
return t === a;
  }), [
a,
n
  ]), m = I ? 'header-primary' : h ? 'text-muted' : 'header-primary', g = I ? o.tokens.colors.HEADER_PRIMARY : h ? o.tokens.colors.TEXT_MUTED : o.tokens.colors.HEADER_PRIMARY;
  return (0, i.jsx)(o.Popout, {
renderPopout: e => {
  let {
    closePopout: s
  } = e;
  return (0, i.jsx)(u.Z, {
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
    color: 'text-muted',
    className: r()(E.tab, E.more, {
      [E.selected]: I
    }),
    'aria-label': _.Z.Messages.MORE,
    children: [
      (0, i.jsx)(o.Text, {
        variant: 'text-md/medium',
        color: m,
        children: _.Z.Messages.MORE
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

function I(e) {
  let {
selectedTab: t,
tabs: n,
onTabSelect: a
  } = e, {
lastVisibleIndex: u,
containerRef: _,
onItemLayout: I,
overflowItemsRef: m
  } = (0, d.zP)({
items: n,
itemGapPx: 20,
maxLines: 1
  }), g = s.useMemo(() => n.slice(0, u + 1), [
u,
n
  ]), p = s.useMemo(() => n.slice(u + 1), [
u,
n
  ]), T = (0, c.ZP)(), f = (0, l.wj)(T);
  return (0, i.jsxs)('div', {
className: E.container,
ref: _,
children: [
  (0, i.jsxs)('div', {
    className: E.measurements,
    children: [
      n.map((e, t) => (0, i.jsx)(d.AJ, {
        index: t,
        onItemLayout: I,
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
        ref: m,
        children: (0, i.jsx)(h, {
          tabs: p,
          onTabSelect: a,
          selectedTab: t
        })
      })
    ]
  }),
  (0, i.jsxs)(o.TabBar, {
    type: 'top',
    selectedItem: t,
    onItemSelect: a,
    className: E.tabs,
    children: [
      g.map(e => {
        let n = t === e.id;
        return (0, i.jsx)(o.TabBar.Item, {
          id: e.id,
          color: 'text-muted',
          'aria-label': e.label,
          className: r()(E.tab, {
            [E.selected]: n
          }),
          children: (0, i.jsx)(o.Text, {
            variant: 'text-md/medium',
            color: n ? 'header-primary' : f ? 'text-muted' : 'header-primary',
            children: e.label
          })
        }, e.id);
      }),
      0 !== p.length ? (0, i.jsx)(h, {
        tabs: p,
        onTabSelect: a,
        selectedTab: t
      }) : null
    ]
  })
]
  });
}
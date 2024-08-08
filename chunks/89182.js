n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250),
  a = n(481060),
  s = n(356165);

function r(e) {
  let {
items: t,
onClose: n,
onSelect: r,
selected: l,
...o
  } = e;
  return (0, i.jsx)(a.Menu, {
className: s.menu,
navId: 'global-discovery-search-filter-options',
'aria-label': o['aria-label'],
hideScroller: !0,
onClose: n,
onSelect: n,
children: (0, i.jsx)(a.MenuGroup, {
  children: t.map(e => {
    let {
      id: t,
      label: n
    } = e;
    return (0, i.jsx)(a.MenuItem, {
      id: t,
      label: n,
      icon: t === l ? a.CircleCheckIcon : void 0,
      action: () => r(t)
    }, t);
  })
}, 'overflow-tabs')
  });
}

function l(e) {
  let {
items: t,
title: n,
onSelect: l,
selected: o,
...c
  } = e;
  return (0, i.jsx)(a.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(r, {
    selected: o,
    onClose: n,
    items: t,
    onSelect: l,
    'aria-label': c['aria-label']
  });
},
position: 'bottom',
align: 'left',
children: (e, t) => {
  let {
    isShown: r
  } = t;
  return (0, i.jsxs)('div', {
    ...e,
    className: s.filter,
    children: [
      (0, i.jsx)(a.Text, {
        variant: 'text-sm/medium',
        color: 'interactive-normal',
        children: n
      }),
      r ? (0, i.jsx)(a.ChevronSmallUpIcon, {
        size: 'xs',
        color: a.tokens.colors.INTERACTIVE_NORMAL
      }) : (0, i.jsx)(a.ChevronSmallDownIcon, {
        size: 'xs',
        color: a.tokens.colors.INTERACTIVE_NORMAL
      })
    ]
  });
}
  });
}
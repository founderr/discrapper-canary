t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(314734),
  s = t(689938),
  c = t(40147);

function u(e) {
  let {
sortOrder: n,
onSortOptionClick: t,
closePopout: a
  } = e, u = e => {
t(e), a();
  };
  return (0, i.jsx)('div', {
className: l()(o.Jh, c.container),
children: (0, i.jsx)(r.Menu, {
  navId: 'command-list-sort',
  'aria-label': s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_A11Y_LABEL,
  hideScroller: !0,
  onClose: a,
  onSelect: a,
  children: (0, i.jsxs)(r.MenuGroup, {
    label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
    children: [
      (0, i.jsx)(r.MenuRadioItem, {
        id: 'sort-by-popular',
        group: 'sort-by',
        label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR,
        action: () => u(o.bS.POPULAR),
        checked: n === o.bS.POPULAR
      }),
      (0, i.jsx)(r.MenuRadioItem, {
        id: 'sort-by-alphabetical',
        group: 'sort-by',
        label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL,
        action: () => u(o.bS.ALPHABETICAL),
        checked: n === o.bS.ALPHABETICAL
      })
    ]
  })
})
  });
}
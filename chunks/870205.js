t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250),
  a = t(481060),
  l = t(984168),
  r = t(314734),
  o = t(689938),
  s = t(172992);

function c(e) {
  let n, {
sortOrder: t,
onSortOptionClick: c
  } = e;
  switch (t) {
case r.bS.POPULAR:
  n = o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR;
  break;
case r.bS.ALPHABETICAL:
  n = o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL;
  }
  return (0, i.jsx)(a.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(l.Z, {
    sortOrder: t,
    onSortOptionClick: c,
    closePopout: n
  });
},
position: 'bottom',
align: 'left',
children: (e, t) => {
  let {
    isShown: l
  } = t;
  return (0, i.jsxs)(a.Button, {
    ...e,
    size: a.Button.Sizes.MIN,
    color: a.Button.Colors.CUSTOM,
    className: s.sortDropdown,
    innerClassName: s.sortDropdownInner,
    'aria-label': o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
    children: [
      (0, i.jsx)(a.ArrowsUpDownIcon, {
        size: 'xs',
        color: 'currentColor',
        className: s.sortIconMargin
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-sm/medium',
        color: 'text-normal',
        children: n
      }),
      l ? (0, i.jsx)(a.ChevronSmallUpIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20
      }) : (0, i.jsx)(a.ChevronSmallDownIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20
      })
    ]
  });
}
  });
}
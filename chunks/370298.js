n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var o = n(481060),
  s = n(689938);

function l(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: l
  } = e;
  return (0, i.jsx)(o.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(a, {
    onClose: t
  });
},
position: 'right',
align: 'top',
animation: o.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(o.Tooltip, {
    text: s.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(o.Clickable, {
      ...e,
      className: l,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': s.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(o.AppsIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20,
        height: 20
      })
    })
  });
}
  });
}

function a(e) {
  let {
onSelect: t,
onClose: n
  } = e;
  return (0, i.jsxs)(o.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': s.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(o.MenuItem, {
    id: 'temp-app-option-one',
    label: 'App Option One',
    subtext: 'Super cool thing',
    action: () => {}
  }),
  (0, i.jsx)(o.MenuItem, {
    id: 'temp-app-option-two',
    label: 'App Option Two',
    subtext: 'Maybe even cooler thing',
    action: () => {}
  })
]
  });
}
n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  o = n(470079),
  l = n(892814),
  a = n(442837),
  s = n(481060),
  r = n(978983),
  u = n(768581),
  c = n(823379),
  d = n(399654),
  m = n(844439),
  h = n(957552),
  I = n(689938),
  p = n(834033);

function E(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: o,
channelId: l
  } = e;
  return (0, i.jsx)(s.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(C, {
    onClose: t,
    channelId: l
  });
},
position: 'right',
align: 'top',
animation: s.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(s.Tooltip, {
    text: I.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(s.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': I.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(s.AppsIcon, {
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

function C(e) {
  let {
onSelect: t,
onClose: n,
channelId: E
  } = e, {
fetchState: C,
recommendationsSections: M
  } = function(e) {
let {
  channelId: t
} = e, n = l.I.CONTEXTUAL_IMAGE, i = o.useMemo(() => ({
  channelId: t,
  location: n,
  withCommands: !0
}), [
  t,
  n
]);
o.useEffect(() => {
  (0, d.a)(i);
}, [i]);
let {
  fetchState: s,
  recommendationsSections: r
} = (0, a.cj)([m.ZP], () => ({
  fetchState: m.ZP.getFetchState(i),
  recommendationsSections: m.ZP.getRecommendations(i)
}));
return {
  fetchState: s,
  recommendationsSections: r
};
  }({
channelId: E
  }), x = C === m.M.FETCHING, f = o.useMemo(() => {
let e = M.length > 0 ? M[0].items : void 0;
return void 0 === e ? [] : e.map(e => {
  var t, n;
  let {
    application: i,
    commands: o
  } = e;
  if (void 0 === o || 0 === o.length)
    return null;
  let l = o[0],
    a = u.ZP.getApplicationIconURL({
      id: i.id,
      icon: i.icon
    });
  return {
    application: i,
    id: l.id,
    name: null !== (t = l.name_localized) && void 0 !== t ? t : l.name,
    description: null !== (n = l.description_localized) && void 0 !== n ? n : l.description,
    icon: a
  };
}).filter(c.lm);
  }, [M]);
  return (0, i.jsx)(s.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': I.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: x ? (0, i.jsx)(s.MenuItem, {
  id: 'menu-image-recs-placeholder',
  render: () => (0, i.jsx)(r.Z, {}),
  disabled: !0
}, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
  children: f.map(e => (0, i.jsx)(s.MenuItem, {
    id: e.id,
    label: e.name,
    subtext: e.description,
    showIconFirst: !0,
    icon: () => (0, i.jsx)(h.Z, {
      application: e.application,
      className: p.icon
    })
  }, e.id))
})
  });
}
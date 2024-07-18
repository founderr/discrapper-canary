n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(239091),
  r = n(299206),
  o = n(810568),
  c = n(168524),
  d = n(725119),
  u = n(26033),
  h = n(689938);

function p(e) {
  var t;
  let {
user: n,
guildId: p,
channel: m,
entry: _,
onSelect: f
  } = e, E = (0, d.Z)(n.id, p, m.id), C = (0, r.Z)({
id: n.id,
label: h.Z.Messages.COPY_ID_USER
  }), g = (0, u.d)(_), I = (0, c.Z)({
location: 'ContentPopoutContextMenu',
applicationId: g ? null === (t = _.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: o.m1.ActivityCardContextMenu,
trackEntryPointImpression: !0,
sourceUserId: _.author_id
  }), [x, T] = a.useState(!1);
  return (0, i.jsx)(s.Popout, {
align: 'top',
position: 'right',
shouldShow: x,
disablePointerEvents: !1,
renderPopout: () => (0, i.jsx)(s.Menu, {
  navId: 'content-inventory-context',
  onClose: l.Zy,
  'aria-label': h.Z.Messages.USER_ACTIONS_MENU_LABEL,
  onSelect: f,
  children: (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(s.MenuGroup, {
        children: [
          E,
          null != I && (0, i.jsx)(s.MenuItem, {
            id: 'game-profile',
            label: h.Z.Messages.GAME_PROFILE,
            action: I
          })
        ]
      }),
      (0, i.jsx)(s.MenuGroup, {
        children: C
      })
    ]
  })
}),
children: () => (0, i.jsx)(s.Clickable, {
  style: {
    cursor: 'pointer'
  },
  onClick: () => {
    T(!0);
  },
  children: (0, i.jsx)(s.MoreHorizontalIcon, {
    size: 'custom',
    width: 16,
    height: 16
  })
})
  });
}
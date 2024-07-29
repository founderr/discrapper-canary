n.d(t, {
  Z: function() {
return y;
  },
  a: function() {
return r;
  }
}), n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(278074),
  l = n(442837),
  u = n(481060),
  c = n(239091),
  d = n(230711),
  _ = n(564990),
  E = n(26033),
  f = n(810568),
  h = n(168524),
  p = n(18323),
  m = n(725119),
  I = n(553795),
  T = n(594174),
  g = n(358085),
  S = n(652853),
  A = n(171368),
  N = n(228168),
  v = n(981631),
  O = n(616922),
  R = n(332325),
  C = n(689938);

function y(e) {
  let {
user: t,
entry: n,
onSelect: r,
display: i,
className: y
  } = e, D = (0, m.Z)({
userId: t.id,
section: N.oh.ACTIVITY,
label: C.Z.Messages.USER_ACTIVITY_VIEW_ALL_ACTIVITY
  }), {
profileType: L
  } = (0, S.z)(), b = function(e, t) {
let n = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
  r = t.id === (null == n ? void 0 : n.id);
if (!(0, E.kx)(e) || null == e.extra.entries[0] || r)
  return null;
let i = e.extra.entries[0].media;
return (0, a.jsx)(u.MenuItem, {
  id: 'play-on-spotify',
  label: C.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
  action: () => function(e, t) {
    let n = p.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, t) : O.C7.WEB_OPEN(e, t);
    window.open(n);
  }(O.Hw.TRACK, i.external_id)
});
  }(n, t), M = function(e) {
var t;
let n = (0, E.dX)(e),
  r = (0, h.Z)({
    location: 'UserProfileActivityContextMenu',
    applicationId: n ? null === (t = e.extra) || void 0 === t ? void 0 : t.application_id : void 0,
    source: f.m1.UserProfileCardContextMenu,
    trackEntryPointImpression: !0,
    sourceUserId: e.author_id
  });
return null == r ? null : (0, a.jsx)(u.MenuItem, {
  id: 'game-profile',
  label: C.Z.Messages.GAME_PROFILE,
  action: r
});
  }(n), P = function(e, t) {
let n = (0, l.e7)([T.default], () => T.default.getCurrentUser());
if (t.id !== (null == n ? void 0 : n.id))
  return null;
let {
  settingsSection: r,
  settingsSubsection: i
} = (0, o.EQ)(e).when(E.dX, () => ({
  settingsSection: v.oAB.GAMES,
  settingsSubsection: R.Z.ACTIVITY_PRIVACY
})).when(E.r5, () => ({
  settingsSection: v.oAB.CONNECTIONS,
  settingsSubsection: null
})).when(E.kx, () => ({
  settingsSection: v.oAB.CONNECTIONS,
  settingsSubsection: null
})).otherwise(() => ({
  settingsSection: null,
  settingsSubsection: null
}));
return (0, a.jsx)(u.MenuItem, {
  id: 'manage-privacy',
  label: C.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
  action: () => {
    (0, A.closeUserProfileModal)(), d.Z.open(r, i);
  }
});
  }(n, t), U = function(e, t) {
let n = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
  r = t.id === (null == n ? void 0 : n.id),
  i = (0, l.e7)([I.Z], () => I.Z.getAccounts()).some(e => e.type === v.ABu.CRUNCHYROLL);
if (!(0, E.r5)(e) || i && null == e.extra.url || r)
  return null;
let {
  action: s,
  label: o
} = i ? {
  action: () => function(e) {
    if (null == e)
      return;
    let t = null;
    !(0, g.isDesktop)() && (t = window.open('', '_blank')), null != t ? t.location.href = e : window.open(e);
  }(e.extra.url),
  label: C.Z.Messages.WATCH_ON_CRUNCHYROLL
} : {
  action: () => d.Z.open(v.oAB.CONNECTIONS),
  label: C.Z.Messages.CONNECT_CRUNCHYROLL
};
return (0, a.jsx)(u.MenuItem, {
  id: 'connect-crunchyroll',
  label: o,
  action: s
});
  }(n, t), w = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  r = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
  i = t.id === (null == r ? void 0 : r.id),
  [c, d] = s.useState(!1);
if (!i || !n)
  return null;
let f = async () => {
  d(!0), await (0, _.CV)(e, t.id), d(!1);
}, h = (0, o.EQ)(e).when(E.dX, () => C.Z.Messages.USER_ACTIVITY_CLEAR_GAME_HISTORY).when(E.r5, () => C.Z.Messages.USER_ACTIVITY_CLEAR_WATCH_HISTORY).when(E.kx, () => C.Z.Messages.USER_ACTIVITY_CLEAR_LISTENING_HISTORY).otherwise(() => null);
return (0, a.jsx)(u.MenuItem, {
  disabled: c,
  id: 'delete-entry-history',
  label: h,
  action: f,
  color: 'danger'
});
  }(n, t, 'recent' === i), x = L === N.y0.BITE_SIZE ? D : null;
  return null == b && null == M && null == P && null == U && null == w && null == x ? null : (0, a.jsx)(u.Popout, {
align: 'top',
position: 'right',
disablePointerEvents: !1,
renderPopout: () => (0, a.jsx)(u.Menu, {
  navId: 'content-inventory-context',
  onClose: c.Zy,
  'aria-label': C.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
  onSelect: r,
  children: (0, a.jsxs)(u.MenuGroup, {
    children: [
      b,
      M,
      U,
      x,
      P,
      w
    ]
  })
}),
children: e => (0, a.jsx)('div', {
  ...e,
  className: y,
  children: (0, a.jsx)(u.MoreHorizontalIcon, {
    color: u.tokens.colors.HEADER_PRIMARY,
    size: 'xs'
  })
})
  });
}
(i = r || (r = {})).LIVE = 'live', i.RECENT = 'recent';
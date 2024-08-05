n.d(t, {
  C: function() {
return h;
  },
  Z: function() {
return p;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(442837),
  s = n(481060),
  o = n(230711),
  l = n(503438),
  u = n(26033),
  c = n(594174),
  d = n(981631),
  _ = n(728151),
  E = n(332325),
  f = n(689938);

function h(e) {
  let {
settingsSection: t,
settingsSubsection: n
  } = (0, i.EQ)(e).when(u.dX, () => ({
settingsSection: d.oAB.GAMES,
settingsSubsection: E.Z.ACTIVITY_PRIVACY
  })).when(u.r5, () => ({
settingsSection: d.oAB.CONNECTIONS,
settingsSubsection: null
  })).when(u.kx, () => ({
settingsSection: d.oAB.CONNECTIONS,
settingsSubsection: null
  })).otherwise(() => ({
settingsSection: null,
settingsSubsection: null
  }));
  return null == t ? null : () => o.Z.open(t, n);
}

function p(e) {
  let {
user: t,
activity: n,
entry: u,
onClose: p
  } = e;
  if (!(0, a.e7)([c.default], () => {
  var e;
  return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
}))
return null;
  let m = function(e) {
let {
  activity: t,
  entry: n
} = e;
return null != n ? h(n) : null != t ? function(e) {
  let {
    settingsSection: t,
    settingsSubsection: n
  } = (0, i.EQ)(e).with({
    type: d.IIU.PLAYING
  }, () => ({
    settingsSection: d.oAB.GAMES,
    settingsSubsection: E.Z.ACTIVITY_PRIVACY
  })).with({
    type: d.IIU.WATCHING,
    application_id: _.sp
  }, () => ({
    settingsSection: d.oAB.CONNECTIONS,
    settingsSubsection: null
  })).when(l.Z, () => ({
    settingsSection: d.oAB.CONNECTIONS,
    settingsSubsection: null
  })).otherwise(() => ({
    settingsSection: null,
    settingsSubsection: null
  }));
  return null == t ? null : () => o.Z.open(t, n);
}(t) : null;
  }({
activity: n,
entry: u
  });
  return null == m ? null : (0, r.jsx)(s.MenuItem, {
id: 'manage-privacy',
label: f.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
action: () => {
  m(), null == p || p();
}
  });
}
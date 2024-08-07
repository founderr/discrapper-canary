n.d(t, {
  C: function() {
return p;
  },
  Z: function() {
return m;
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
  c = n(547972),
  d = n(594174),
  _ = n(981631),
  E = n(728151),
  f = n(332325),
  h = n(689938);

function p(e) {
  return (0, i.EQ)(e).when(u.dX, () => () => (0, c.Z)(f.Z.ACTIVITY_PRIVACY)).when(u.r5, () => () => o.Z.open(_.oAB.CONNECTIONS, null)).when(u.kx, () => () => o.Z.open(_.oAB.CONNECTIONS, null)).otherwise(() => () => (0, c.Z)(f.Z.ACTIVITY_PRIVACY));
}

function m(e) {
  let {
user: t,
activity: n,
entry: u,
onClose: m
  } = e;
  if (!(0, a.e7)([d.default], () => {
  var e;
  return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
}))
return null;
  let I = function(e) {
let {
  activity: t,
  entry: n
} = e;
if (null != n)
  return p(n);
if (null != t) {
  var r;
  return r = t, (0, i.EQ)(r).with({
    type: _.IIU.PLAYING
  }, () => () => (0, c.Z)(f.Z.ACTIVITY_PRIVACY)).with({
    type: _.IIU.WATCHING,
    application_id: E.sp
  }, () => () => o.Z.open(_.oAB.CONNECTIONS, null)).when(l.Z, () => () => o.Z.open(_.oAB.CONNECTIONS, null)).otherwise(() => () => (0, c.Z)(f.Z.ACTIVITY_PRIVACY));
}
return null;
  }({
activity: n,
entry: u
  });
  return null == I ? null : (0, r.jsx)(s.MenuItem, {
id: 'manage-privacy',
label: h.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
action: () => {
  I(), null == m || m();
}
  });
}
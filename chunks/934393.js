n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(726542),
  s = n(906732),
  o = n(231757),
  l = n(553795),
  u = n(475413),
  c = n(689938);

function d(e) {
  let {
platformType: t,
icon: n,
onClick: d
  } = e, {
newestAnalyticsLocation: _
  } = (0, s.ZP)();
  return (0, i.e7)([l.Z], () => l.Z.getAccounts().some(e => {
let {
  type: n
} = e;
return n === t;
  })) ? null : (0, r.jsx)(u.tG, {
icon: n,
text: c.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
  platform: a.Z.get(t).name
}),
fullWidth: !0,
onClick: e => {
  null == d || d(e), (0, o.Z)({
    platformType: t,
    location: _
  });
}
  });
}
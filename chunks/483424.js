n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(906732),
  a = n(785717),
  s = n(221292),
  o = n(929498),
  l = n(151545),
  u = n(304042),
  c = n(981631);

function d(e) {
  let {
user: t,
currentUser: n,
className: d,
onClose: _
  } = e, {
analyticsLocations: E
  } = (0, i.ZP)(), {
trackUserProfileAction: f,
...h
  } = (0, a.KZ)(), {
live: p,
stream: m
  } = (0, o.Z)(t.id), [I] = p;
  return null == I && null == m ? null : null != m ? (0, r.jsx)(u.Z, {
user: t,
currentUser: n,
stream: m,
className: d,
onClose: _,
onAction: () => {
  f({
    action: 'JOIN_ACTIVITY'
  }), (0, s.Ac)({
    activityType: c.IIU.STREAMING,
    analyticsLocations: E,
    ...h
  }), null == _ || _();
}
  }) : (0, r.jsx)(l.Z, {
user: t,
currentUser: n,
activity: I,
className: d,
onClose: _,
onAction: () => {
  f({
    action: 'JOIN_ACTIVITY'
  }), (0, s.Ac)({
    activityType: null == I ? void 0 : I.type,
    activityName: null == I ? void 0 : I.name,
    activityPlatform: null == I ? void 0 : I.platform,
    activitySessionId: null == I ? void 0 : I.session_id,
    applicationId: null == I ? void 0 : I.application_id,
    analyticsLocations: E,
    ...h
  }), null == _ || _();
}
  });
}
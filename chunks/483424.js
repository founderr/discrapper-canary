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
onClose: d
  } = e, {
analyticsLocations: _
  } = (0, i.ZP)(), {
trackUserProfileAction: E,
...f
  } = (0, a.KZ)(), {
live: h,
stream: p
  } = (0, o.Z)(t.id), [m] = h;
  return null == m && null == p ? null : null != p ? (0, r.jsx)(u.Z, {
user: t,
currentUser: n,
stream: p,
onClose: d,
onAction: () => {
  E({
    action: 'JOIN_ACTIVITY'
  }), (0, s.Ac)({
    activityType: c.IIU.STREAMING,
    analyticsLocations: _,
    ...f
  }), null == d || d();
}
  }) : (0, r.jsx)(l.Z, {
user: t,
currentUser: n,
activity: m,
onClose: d,
onAction: () => {
  E({
    action: 'JOIN_ACTIVITY'
  }), (0, s.Ac)({
    activityType: null == m ? void 0 : m.type,
    activityName: null == m ? void 0 : m.name,
    activityPlatform: null == m ? void 0 : m.platform,
    activitySessionId: null == m ? void 0 : m.session_id,
    applicationId: null == m ? void 0 : m.application_id,
    analyticsLocations: _,
    ...f
  }), null == d || d();
}
  });
}
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
isHovering: d,
className: _,
onClose: E
  } = e, {
analyticsLocations: f
  } = (0, i.ZP)(), {
trackUserProfileAction: h,
...p
  } = (0, a.KZ)(), {
live: m,
stream: I
  } = (0, o.Z)(t.id), [T] = m;
  return null == T && null == I ? null : null != I ? (0, r.jsx)(u.Z, {
user: t,
currentUser: n,
stream: I,
isHovering: d,
className: _,
onClose: E,
onAction: () => {
  h({
    action: 'JOIN_ACTIVITY'
  }), (0, s.Ac)({
    activityType: c.IIU.STREAMING,
    analyticsLocations: f,
    ...p
  }), null == E || E();
}
  }) : (0, r.jsx)(l.Z, {
user: t,
currentUser: n,
activity: T,
className: _,
onClose: E,
onAction: () => {
  h({
    action: 'JOIN_ACTIVITY'
  }), (0, s.Ac)({
    activityType: null == T ? void 0 : T.type,
    activityName: null == T ? void 0 : T.name,
    activityPlatform: null == T ? void 0 : T.platform,
    activitySessionId: null == T ? void 0 : T.session_id,
    applicationId: null == T ? void 0 : T.application_id,
    analyticsLocations: f,
    ...p
  }), null == E || E();
}
  });
}
n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(906732),
  s = n(70956),
  o = n(709054),
  l = n(785717),
  u = n(221292),
  c = n(27144),
  d = n(929498),
  _ = n(151545),
  E = n(527790),
  f = n(304042),
  h = n(981631);

function p(e) {
  let {
user: t,
currentUser: n,
isHovering: p,
className: m,
onClose: I
  } = e, {
analyticsLocations: T
  } = (0, a.ZP)(), {
trackUserProfileAction: g,
...S
  } = (0, l.KZ)(), {
live: A,
recent: N,
stream: v
  } = (0, d.Z)(t.id), [O] = A, {
mostRecentActivityEnabled: R
  } = (0, c.z)({
location: 'UserProfileFeaturedActivity'
  }), C = i.useMemo(() => N.find(e => o.default.age(e.id) / s.Z.Millis.HOUR < 24), [N]);
  return null != v ? (0, r.jsx)(f.Z, {
user: t,
currentUser: n,
stream: v,
isHovering: p,
className: m,
onClose: I,
onAction: () => {
  g({
    action: 'JOIN_ACTIVITY'
  }), (0, u.Ac)({
    activityType: h.IIU.STREAMING,
    analyticsLocations: T,
    ...S
  }), null == I || I();
}
  }) : null != O ? (0, r.jsx)(_.Z, {
user: t,
currentUser: n,
activity: O,
className: m,
onClose: I,
onAction: () => {
  g({
    action: 'JOIN_ACTIVITY'
  }), (0, u.Ac)({
    activityType: O.type,
    activityName: O.name,
    activityPlatform: O.platform,
    activitySessionId: O.session_id,
    applicationId: O.application_id,
    analyticsLocations: T,
    ...S
  }), null == I || I();
}
  }) : R && null != C ? (0, r.jsx)(E.Z, {
user: t,
entry: C,
className: m,
onClose: I
  }) : null;
}
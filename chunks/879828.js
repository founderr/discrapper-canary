n.d(i, {
  Z: function() {
return E;
  }
});
var s = n(735250);
n(470079);
var l = n(481060),
  t = n(387903),
  o = n(906732),
  a = n(785717),
  r = n(221292),
  d = n(929498),
  c = n(678738),
  u = n(989964),
  I = n(527790),
  _ = n(981631),
  f = n(689938),
  m = n(122606);

function E(e) {
  let {
user: i,
onClose: n
  } = e, {
analyticsLocations: E
  } = (0, o.ZP)(), {
trackUserProfileAction: x,
...v
  } = (0, a.KZ)(), {
live: h,
recent: S,
isApplicationStreaming: Z
  } = (0, d.Z)(i.id);
  return (0, s.jsxs)(l.ScrollerThin, {
className: m.scroller,
fade: !0,
children: [
  (0, s.jsx)(c.Z, {
    children: h.map((e, l) => (0, s.jsx)(u.Z, {
      location: 'SimplifiedUserProfileModalActivity',
      type: t.Y.SIMPLIFIED_PROFILE,
      activity: e,
      user: i,
      onClose: n,
      onAction: () => {
        x({
          action: 'JOIN_ACTIVITY'
        }), (0, r.Ac)({
          activityType: Z ? _.IIU.STREAMING : null == e ? void 0 : e.type,
          activityName: null == e ? void 0 : e.name,
          activityPlatform: null == e ? void 0 : e.platform,
          activitySessionId: null == e ? void 0 : e.session_id,
          applicationId: null == e ? void 0 : e.application_id,
          analyticsLocations: E,
          ...v
        });
      }
    }, 'live-'.concat(l)))
  }),
  (0, s.jsx)(c.Z, {
    heading: f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
    children: S.map(e => (0, s.jsx)(I.Z, {
      user: i,
      entry: e,
      onClose: n
    }, e.id))
  })
]
  });
}
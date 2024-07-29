i.d(n, {
  Z: function() {
return E;
  }
});
var s = i(735250);
i(470079);
var l = i(481060),
  t = i(906732),
  o = i(785717),
  a = i(221292),
  r = i(929498),
  d = i(678738),
  c = i(151545),
  u = i(527790),
  I = i(304042),
  _ = i(981631),
  f = i(689938),
  m = i(122606);

function E(e) {
  let {
user: n,
currentUser: i,
onClose: E
  } = e, {
analyticsLocations: x
  } = (0, t.ZP)(), {
trackUserProfileAction: v,
...h
  } = (0, o.KZ)(), {
live: Z,
recent: S,
stream: p
  } = (0, r.Z)(n.id);
  return (0, s.jsxs)(l.ScrollerThin, {
className: m.scroller,
fade: !0,
children: [
  (0, s.jsxs)(d.Z, {
    children: [
      null != p && (0, s.jsx)(I.Z, {
        user: n,
        currentUser: i,
        stream: p,
        onClose: E,
        onAction: () => {
          v({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: _.IIU.STREAMING,
            analyticsLocations: x,
            ...h
          });
        }
      }),
      Z.map((e, l) => (0, s.jsx)(c.Z, {
        user: n,
        currentUser: i,
        activity: e,
        onClose: E,
        onAction: () => {
          v({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: null == e ? void 0 : e.type,
            activityName: null == e ? void 0 : e.name,
            activityPlatform: null == e ? void 0 : e.platform,
            activitySessionId: null == e ? void 0 : e.session_id,
            applicationId: null == e ? void 0 : e.application_id,
            analyticsLocations: x,
            ...h
          });
        }
      }, 'live-'.concat(l)))
    ]
  }),
  (0, s.jsx)(d.Z, {
    heading: f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
    children: S.map(e => (0, s.jsx)(u.Z, {
      user: n,
      entry: e,
      onClose: E
    }, e.id))
  })
]
  });
}
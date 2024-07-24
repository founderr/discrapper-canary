i.d(s, {
  Z: function() {
return E;
  }
});
var n = i(735250);
i(470079);
var l = i(481060),
  t = i(387903),
  o = i(906732),
  a = i(785717),
  r = i(221292),
  d = i(929498),
  c = i(678738),
  u = i(989964),
  I = i(527790),
  _ = i(981631),
  f = i(689938),
  m = i(122606);

function E(e) {
  let {
user: s,
onClose: i
  } = e, {
analyticsLocations: E
  } = (0, o.ZP)(), {
trackUserProfileAction: x,
...v
  } = (0, a.KZ)(), {
live: Z,
recent: S,
isApplicationStreaming: h
  } = (0, d.Z)(s.id);
  return (0, n.jsxs)(l.ScrollerThin, {
className: m.scroller,
fade: !0,
children: [
  Z.map((e, l) => (0, n.jsx)(u.Z, {
    location: 'SimplifiedUserProfileModalActivity',
    type: t.Y.SIMPLIFIED_PROFILE,
    activity: e,
    user: s,
    onClose: i,
    onAction: () => {
      x({
        action: 'JOIN_ACTIVITY'
      }), (0, r.Ac)({
        activityType: h ? _.IIU.STREAMING : null == e ? void 0 : e.type,
        activityName: null == e ? void 0 : e.name,
        activityPlatform: null == e ? void 0 : e.platform,
        activitySessionId: null == e ? void 0 : e.session_id,
        applicationId: null == e ? void 0 : e.application_id,
        analyticsLocations: E,
        ...v
      });
    }
  }, 'live-'.concat(l))),
  S.length > 0 && (0, n.jsx)(c.Z, {
    title: f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
    className: m.recentActivity,
    children: S.map(e => (0, n.jsx)(I.Z, {
      user: s,
      entry: e,
      onClose: i
    }, e.id))
  })
]
  });
}
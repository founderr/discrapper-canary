n.d(i, {
  Z: function() {
return x;
  }
});
var s = n(735250);
n(470079);
var l = n(481060),
  t = n(906732),
  o = n(785717),
  a = n(221292),
  r = n(929498),
  d = n(678738),
  c = n(151545),
  u = n(364027),
  I = n(527790),
  _ = n(304042),
  f = n(981631),
  m = n(689938),
  E = n(122606);

function x(e) {
  let {
user: i,
currentUser: n,
onClose: x
  } = e, {
analyticsLocations: v
  } = (0, t.ZP)(), {
trackUserProfileAction: Z,
...h
  } = (0, o.KZ)(), {
live: S,
recent: p,
stream: g
  } = (0, r.Z)(i.id);
  return (0, s.jsxs)(l.ScrollerThin, {
className: E.scroller,
fade: !0,
children: [
  (0, s.jsxs)(d.Z, {
    children: [
      null != g && (0, s.jsx)(_.Z, {
        user: i,
        currentUser: n,
        stream: g,
        onClose: x,
        onAction: () => {
          Z({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: f.IIU.STREAMING,
            analyticsLocations: v,
            ...h
          });
        }
      }),
      S.map((e, l) => (0, s.jsx)(c.Z, {
        user: i,
        currentUser: n,
        activity: e,
        onClose: x,
        onAction: () => {
          Z({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: null == e ? void 0 : e.type,
            activityName: null == e ? void 0 : e.name,
            activityPlatform: null == e ? void 0 : e.platform,
            activitySessionId: null == e ? void 0 : e.session_id,
            applicationId: null == e ? void 0 : e.application_id,
            analyticsLocations: v,
            ...h
          });
        }
      }, 'live-'.concat(l)))
    ]
  }),
  (0, s.jsx)(d.Z, {
    heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
    className: E.recentActivity,
    children: p.map(e => (0, s.jsxs)('div', {
      className: E.recentActivityEntryContainer,
      children: [
        (0, s.jsx)(I.Z, {
          user: i,
          entry: e,
          onClose: x
        }),
        (0, s.jsx)(u.Z, {
          user: i,
          entry: e,
          className: E.recentActivityContextMenu,
          display: u.a.RECENT
        })
      ]
    }, e.id))
  })
]
  });
}
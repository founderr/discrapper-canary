i.d(n, {
  Z: function() {
return x;
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
  u = i(364027),
  I = i(527790),
  _ = i(304042),
  f = i(981631),
  m = i(689938),
  E = i(122606);

function x(e) {
  let {
user: n,
currentUser: i,
onClose: x
  } = e, {
analyticsLocations: v
  } = (0, t.ZP)(), {
trackUserProfileAction: h,
...Z
  } = (0, o.KZ)(), {
live: S,
recent: p,
stream: g
  } = (0, r.Z)(n.id);
  return (0, s.jsxs)(l.ScrollerThin, {
className: E.scroller,
fade: !0,
children: [
  (0, s.jsxs)(d.Z, {
    children: [
      null != g && (0, s.jsx)(_.Z, {
        user: n,
        currentUser: i,
        stream: g,
        onClose: x,
        onAction: () => {
          h({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: f.IIU.STREAMING,
            analyticsLocations: v,
            ...Z
          });
        }
      }),
      S.map((e, l) => (0, s.jsx)(c.Z, {
        user: n,
        currentUser: i,
        activity: e,
        onClose: x,
        onAction: () => {
          h({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: null == e ? void 0 : e.type,
            activityName: null == e ? void 0 : e.name,
            activityPlatform: null == e ? void 0 : e.platform,
            activitySessionId: null == e ? void 0 : e.session_id,
            applicationId: null == e ? void 0 : e.application_id,
            analyticsLocations: v,
            ...Z
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
          user: n,
          entry: e,
          onClose: x
        }),
        (0, s.jsx)(u.Z, {
          user: n,
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
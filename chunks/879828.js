i.d(s, {
  Z: function() {
return v;
  }
});
var n = i(735250);
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
  f = i(290274),
  _ = i(981631),
  m = i(689938),
  E = i(122606);

function v(e) {
  let {
user: s,
currentUser: i,
onClose: v
  } = e, {
analyticsLocations: x
  } = (0, t.ZP)(), {
trackUserProfileAction: S,
...Z
  } = (0, o.KZ)(), {
live: h,
recent: p,
stream: g
  } = (0, r.Z)(s.id);
  return (0, n.jsxs)(l.ScrollerThin, {
className: E.scroller,
fade: !0,
children: [
  (0, n.jsxs)(d.Z, {
    children: [
      null != g && (0, n.jsx)(I.Z, {
        user: s,
        currentUser: i,
        stream: g,
        onClose: v,
        onAction: () => {
          S({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: _.IIU.STREAMING,
            analyticsLocations: x,
            ...Z
          });
        }
      }),
      h.map((e, l) => (0, n.jsx)(c.Z, {
        user: s,
        currentUser: i,
        activity: e,
        onClose: v,
        onAction: () => {
          S({
            action: 'JOIN_ACTIVITY'
          }), (0, a.Ac)({
            activityType: null == e ? void 0 : e.type,
            activityName: null == e ? void 0 : e.name,
            activityPlatform: null == e ? void 0 : e.platform,
            activitySessionId: null == e ? void 0 : e.session_id,
            applicationId: null == e ? void 0 : e.application_id,
            analyticsLocations: x,
            ...Z
          });
        }
      }, 'live-'.concat(l)))
    ]
  }),
  (0, n.jsx)(d.Z, {
    heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
    children: p.map(e => (0, n.jsxs)('div', {
      className: E.recentActivityEntryContainer,
      children: [
        (0, n.jsx)(u.Z, {
          user: s,
          entry: e,
          onClose: v
        }),
        (0, n.jsx)(f.Z, {
          user: s,
          entry: e,
          className: E.recentActivityContextMenu,
          display: 'recent'
        })
      ]
    }, e.id))
  })
]
  });
}
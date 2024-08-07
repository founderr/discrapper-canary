i.d(s, {
  Z: function() {
return Z;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(704215),
  o = i(481060),
  a = i(906732),
  r = i(605236),
  d = i(785717),
  c = i(221292),
  u = i(929498),
  I = i(678738),
  _ = i(151545),
  f = i(527790),
  E = i(304042),
  m = i(981631),
  v = i(921944),
  S = i(689938),
  x = i(122606);

function Z(e) {
  let {
user: s,
currentUser: i,
onClose: Z
  } = e, {
analyticsLocations: p
  } = (0, a.ZP)(), {
context: h,
trackUserProfileAction: T
  } = (0, d.KZ)(), {
live: g,
recent: N,
stream: j
  } = (0, u.Z)(s.id), C = s.id === i.id, A = (0, r.wE)(t.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
  return l.useEffect(() => {
if (!!C && !A)
  (0, r.EW)(t.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
    dismissAction: v.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [
C,
A
  ]), (0, n.jsxs)(o.ScrollerThin, {
className: x.scroller,
fade: !0,
children: [
  (0, n.jsxs)(I.Z, {
    children: [
      null != j && (0, n.jsx)(E.Z, {
        user: s,
        currentUser: i,
        stream: j,
        onClose: Z,
        onAction: () => {
          T({
            action: 'JOIN_ACTIVITY'
          }), (0, c.Ac)({
            activityType: m.IIU.STREAMING,
            analyticsLocations: p,
            ...h
          });
        }
      }),
      g.map((e, l) => (0, n.jsx)(_.Z, {
        user: s,
        currentUser: i,
        activity: e,
        onClose: Z,
        onAction: () => {
          T({
            action: 'JOIN_ACTIVITY'
          }), (0, c.Ac)({
            activityType: e.type,
            activityName: e.name,
            activityPlatform: e.platform,
            activitySessionId: e.session_id,
            applicationId: e.application_id,
            analyticsLocations: p,
            ...h
          });
        }
      }, 'live-'.concat(l)))
    ]
  }),
  (0, n.jsx)(I.Z, {
    heading: (0, n.jsxs)('div', {
      className: x.heading,
      children: [
        S.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
        (0, n.jsx)(o.Tooltip, {
          text: S.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
          children: e => (0, n.jsx)(o.CircleInformationIcon, {
            ...e,
            size: 'xxs',
            color: 'currentColor'
          })
        })
      ]
    }),
    children: N.map(e => (0, n.jsx)(f.Z, {
      user: s,
      entry: e,
      onClose: Z
    }, e.id))
  })
]
  });
}
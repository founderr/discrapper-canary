s.d(n, {
  Z: function() {
return x;
  }
});
var i = s(735250),
  l = s(470079),
  o = s(704215),
  t = s(481060),
  r = s(906732),
  a = s(605236),
  d = s(785717),
  c = s(221292),
  u = s(929498),
  I = s(678738),
  _ = s(151545),
  f = s(527790),
  E = s(304042),
  m = s(981631),
  S = s(921944),
  Z = s(689938),
  v = s(122606);

function x(e) {
  let {
user: n,
currentUser: s,
onClose: x
  } = e, {
analyticsLocations: h
  } = (0, r.ZP)(), {
context: T,
trackUserProfileAction: p
  } = (0, d.KZ)(), {
live: g,
recent: N,
stream: C
  } = (0, u.Z)(n.id), j = n.id === s.id, A = (0, a.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
  return l.useEffect(() => {
if (!!j && !A)
  (0, a.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
    dismissAction: S.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [
j,
A
  ]), (0, i.jsxs)(t.ScrollerThin, {
className: v.scroller,
fade: !0,
children: [
  (0, i.jsxs)(I.Z, {
    children: [
      null != C && (0, i.jsx)(E.Z, {
        user: n,
        currentUser: s,
        stream: C,
        onClose: x,
        onAction: () => {
          p({
            action: 'JOIN_ACTIVITY'
          }), (0, c.Ac)({
            activityType: m.IIU.STREAMING,
            analyticsLocations: h,
            ...T
          });
        }
      }),
      g.map((e, l) => (0, i.jsx)(_.Z, {
        user: n,
        currentUser: s,
        activity: e,
        onClose: x,
        onAction: () => {
          p({
            action: 'JOIN_ACTIVITY'
          }), (0, c.Ac)({
            activityType: e.type,
            activityName: e.name,
            activityPlatform: e.platform,
            activitySessionId: e.session_id,
            applicationId: e.application_id,
            analyticsLocations: h,
            ...T
          });
        }
      }, 'live-'.concat(l)))
    ]
  }),
  (0, i.jsx)(I.Z, {
    heading: (0, i.jsxs)('div', {
      className: v.heading,
      children: [
        Z.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
        (0, i.jsx)(t.Tooltip, {
          text: Z.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
          children: e => (0, i.jsx)(t.CircleInformationIcon, {
            ...e,
            size: 'xxs',
            color: 'currentColor'
          })
        })
      ]
    }),
    children: N.map(e => (0, i.jsx)(f.Z, {
      user: n,
      entry: e,
      onClose: x
    }, e.id))
  })
]
  });
}
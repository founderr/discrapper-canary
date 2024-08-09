n.d(s, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  l = n(470079),
  o = n(704215),
  t = n(481060),
  r = n(605236),
  a = n(929498),
  d = n(678738),
  c = n(151545),
  u = n(527790),
  _ = n(304042),
  I = n(921944),
  E = n(689938),
  f = n(122606);

function m(e) {
  let {
user: s,
currentUser: n,
onClose: m
  } = e, {
live: S,
recent: Z,
stream: x
  } = (0, a.Z)(s.id), v = s.id === n.id, h = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
  return l.useEffect(() => {
if (!!v && !h)
  (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
    dismissAction: I.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [
v,
h
  ]), (0, i.jsxs)(t.ScrollerThin, {
className: f.scroller,
fade: !0,
children: [
  (0, i.jsxs)(d.Z, {
    children: [
      null != x && (0, i.jsx)(_.Z, {
        user: s,
        currentUser: n,
        stream: x,
        onClose: m
      }),
      S.map((e, l) => (0, i.jsx)(c.Z, {
        user: s,
        currentUser: n,
        activity: e,
        onClose: m
      }, 'live-'.concat(l)))
    ]
  }),
  (0, i.jsx)(d.Z, {
    heading: (0, i.jsxs)('div', {
      className: f.heading,
      children: [
        E.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
        (0, i.jsx)(t.Tooltip, {
          text: E.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
          children: e => (0, i.jsx)(t.CircleInformationIcon, {
            ...e,
            size: 'xxs',
            color: 'currentColor'
          })
        })
      ]
    }),
    children: Z.map(e => (0, i.jsx)(u.Z, {
      user: s,
      entry: e,
      onClose: m
    }, e.id))
  })
]
  });
}
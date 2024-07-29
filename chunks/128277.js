n.d(t, {
  Z: function() {
return N;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(726542),
  u = n(503438),
  c = n(502762),
  d = n(652853),
  _ = n(448980),
  E = n(60241),
  f = n(373826),
  h = n(315324),
  p = n(262210),
  m = n(666984),
  I = n(228168),
  T = n(981631),
  g = n(689938),
  S = n(692184);
let {
  getAssetImage: A
} = n(81063);

function N(e) {
  var t, n, a, N;
  let {
user: v,
currentUser: O,
activity: R,
activityGuild: C,
channel: y,
onAction: D,
onClose: L,
onOpenSpotifyTrack: b,
onOpenSpotifyArtist: M,
onOpenSpotifyAlbum: P
  } = e, {
profileType: U
  } = (0, d.z)(), w = {
[S.fullSize]: U === I.y0.FULL_SIZE
  };
  if (null == R || !(0, u.Z)(R))
return null;
  let x = l.Z.get(T.ABu.SPOTIFY),
G = U === I.y0.FULL_SIZE ? 64 : 48,
k = () => v.id === O.id ? null : (0, r.jsx)('div', {
  className: s()(S.actions, w),
  children: (0, r.jsx)(m.Z, {
    user: v,
    activity: R,
    onClick: D
  })
});
  return (0, r.jsxs)(c.Z.Overlay, {
className: S.card,
children: [
  (0, r.jsxs)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: S.header,
    children: [
      g.Z.Messages.USER_ACTIVITY_LISTENING_TO,
      (0, r.jsx)('div', {
        className: S.platformIcon,
        style: {
          maskImage: 'url('.concat(x.icon.whiteSVG, ')'),
          WebkitMaskImage: 'url('.concat(x.icon.whiteSVG, ')')
        }
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: S.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(S.content, w),
        children: [
          (0, r.jsx)(E.Z, {
            text: null === (t = R.assets) || void 0 === t ? void 0 : t.large_text,
            alt: null !== (N = null === (n = R.assets) || void 0 === n ? void 0 : n.large_text) && void 0 !== N ? N : '',
            src: A(R.application_id, null === (a = R.assets) || void 0 === a ? void 0 : a.large_image, G),
            className: s()(S.largeImage, S.imageSize, w),
            onClick: () => P(R, v.id)
          }),
          (0, r.jsxs)('div', {
            className: S.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(f.Z, {
                    variant: 'heading-sm/semibold',
                    text: R.details,
                    onClick: () => b(R)
                  }),
                  (() => {
                    var e, t;
                    let n = null !== (t = null === (e = R.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
                    return 0 === n.length ? null : null == R.sync_id ? (0, r.jsx)(f.Z, {
                      variant: 'text-xs/normal',
                      text: n.join(', ')
                    }) : (0, r.jsx)(f.Z, {
                      variant: 'text-xs/normal',
                      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [
                          (0, r.jsx)(o.Clickable, {
                            className: s()(S.clickable, S.text, S.inline),
                            onClick: () => M(R, v.id, t),
                            children: e
                          }),
                          t < n.length - 1 ? ', ' : ''
                        ]
                      }, t))
                    });
                  })()
                ]
              }),
              (0, r.jsx)(_.Z, {
                user: v,
                activity: R,
                className: S.badges
              }),
              (() => {
                let {
                  timestamps: e
                } = R;
                if (null == e)
                  return null;
                let {
                  start: t,
                  end: n
                } = e;
                return null == t || null == n ? null : (0, r.jsx)(p.Z, {
                  start: t,
                  end: n
                });
              })()
            ]
          }),
          U === I.y0.FULL_SIZE && k()
        ]
      }),
      null == C || null == y ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: S.voiceChannelDivider
          }),
          (0, r.jsx)(h.Z, {
            guild: C,
            channel: y,
            onClose: L
          })
        ]
      }),
      U !== I.y0.FULL_SIZE && k()
    ]
  })
]
  });
}
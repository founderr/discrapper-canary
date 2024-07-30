n.d(t, {
  Z: function() {
return O;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(726542),
  u = n(503438),
  c = n(952164),
  d = n(502762),
  _ = n(652853),
  E = n(448980),
  f = n(194811),
  h = n(60241),
  p = n(373826),
  m = n(315324),
  I = n(262210),
  T = n(666984),
  g = n(228168),
  S = n(981631),
  A = n(689938),
  N = n(692184);
let {
  getAssetImage: v
} = n(81063);

function O(e) {
  var t, n;
  let {
user: a,
currentUser: O,
activity: R,
guild: C,
channel: y,
className: D,
onAction: L,
onClose: b
  } = e, {
profileType: M
  } = (0, _.z)(), P = {
[N.fullSize]: M === g.y0.FULL_SIZE
  };
  if (!(0, u.Z)(R))
return null;
  let U = () => a.id === O.id ? null : (0, r.jsx)('div', {
className: s()(N.actions, P),
children: (0, r.jsx)(T.Z, {
  user: a,
  activity: R,
  onClick: L
})
  });
  return (0, r.jsxs)(d.Z.Overlay, {
className: s()(N.card, D),
children: [
  (0, r.jsx)(f.Z, {
    text: A.Z.Messages.USER_ACTIVITY_LISTENING_TO,
    platform: l.Z.get(S.ABu.SPOTIFY)
  }),
  (0, r.jsxs)('div', {
    className: N.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(N.content, P),
        children: [
          (0, r.jsx)(h.Z, {
            src: e => {
              var t;
              return v(R.application_id, null === (t = R.assets) || void 0 === t ? void 0 : t.large_image, e);
            },
            alt: null === (t = R.assets) || void 0 === t ? void 0 : t.large_text,
            tooltipText: null === (n = R.assets) || void 0 === n ? void 0 : n.large_text,
            onClick: () => (0, c.Z5)(R, a.id)
          }),
          (0, r.jsxs)('div', {
            className: N.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(p.Z, {
                    variant: 'heading-sm/semibold',
                    text: R.details,
                    onClick: () => (0, c.aG)(R)
                  }),
                  (() => {
                    var e, t;
                    let n = null !== (t = null === (e = R.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
                    return 0 === n.length ? null : null == R.sync_id ? (0, r.jsx)(p.Z, {
                      variant: 'text-xs/normal',
                      text: n.join(', ')
                    }) : (0, r.jsx)(p.Z, {
                      variant: 'text-xs/normal',
                      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [
                          (0, r.jsx)(o.Clickable, {
                            className: s()(N.clickable, N.text, N.inline),
                            onClick: () => (0, c.d$)(R, a.id, t),
                            children: e
                          }),
                          t < n.length - 1 ? ', ' : ''
                        ]
                      }, t))
                    });
                  })()
                ]
              }),
              (0, r.jsx)(E.Z, {
                user: a,
                activity: R,
                className: N.badges
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
                return null == t || null == n ? null : (0, r.jsx)(I.Z, {
                  start: t,
                  end: n
                });
              })()
            ]
          }),
          M === g.y0.FULL_SIZE && U()
        ]
      }),
      null == C || null == y ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: N.voiceChannelDivider
          }),
          (0, r.jsx)(m.Z, {
            guild: C,
            channel: y,
            onClose: b
          })
        ]
      }),
      M !== g.y0.FULL_SIZE && U()
    ]
  })
]
  });
}
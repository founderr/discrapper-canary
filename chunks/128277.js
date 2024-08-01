n.d(t, {
  Z: function() {
return R;
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
  g = n(290274),
  S = n(228168),
  A = n(981631),
  N = n(689938),
  v = n(692184);
let {
  getAssetImage: O
} = n(81063);

function R(e) {
  var t, n;
  let {
user: a,
currentUser: R,
activity: C,
guild: y,
channel: D,
className: L,
onAction: b,
onClose: M
  } = e, {
profileType: P
  } = (0, _.z)(), U = {
[v.fullSize]: P === S.y0.FULL_SIZE
  };
  if (!(0, u.Z)(C))
return null;
  let w = () => a.id === R.id ? null : (0, r.jsx)('div', {
className: s()(v.actions, U),
children: (0, r.jsx)(T.Z, {
  user: a,
  activity: C,
  onClick: b
})
  });
  return (0, r.jsxs)(d.Z.Overlay, {
className: s()(v.card, L),
children: [
  (0, r.jsx)(f.Z, {
    text: N.Z.Messages.USER_ACTIVITY_LISTENING_TO,
    platform: l.Z.get(A.ABu.SPOTIFY)
  }),
  (0, r.jsxs)('div', {
    className: v.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(v.content, U),
        children: [
          (0, r.jsx)(h.Z, {
            src: e => {
              var t;
              return O(C.application_id, null === (t = C.assets) || void 0 === t ? void 0 : t.large_image, e);
            },
            alt: null === (t = C.assets) || void 0 === t ? void 0 : t.large_text,
            tooltipText: null === (n = C.assets) || void 0 === n ? void 0 : n.large_text,
            onClick: () => (0, c.Z5)(C, a.id)
          }),
          (0, r.jsxs)('div', {
            className: v.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(p.Z, {
                    variant: 'heading-sm/semibold',
                    text: C.details,
                    onClick: () => (0, c.aG)(C)
                  }),
                  (() => {
                    var e, t;
                    let n = null !== (t = null === (e = C.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
                    return 0 === n.length ? null : null == C.sync_id ? (0, r.jsx)(p.Z, {
                      variant: 'text-xs/normal',
                      text: n.join(', ')
                    }) : (0, r.jsx)(p.Z, {
                      variant: 'text-xs/normal',
                      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [
                          (0, r.jsx)(o.Clickable, {
                            className: s()(v.clickable, v.text, v.inline),
                            onClick: () => (0, c.d$)(C, a.id, t),
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
                activity: C,
                className: v.badges
              }),
              (() => {
                let {
                  timestamps: e
                } = C;
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
          P === S.y0.FULL_SIZE && w()
        ]
      }),
      null == y || null == D ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: v.voiceChannelDivider
          }),
          (0, r.jsx)(m.Z, {
            guild: y,
            channel: D,
            onClose: M
          })
        ]
      }),
      P !== S.y0.FULL_SIZE && w()
    ]
  }),
  (0, r.jsx)(g.Z, {
    activity: C,
    user: a,
    display: 'live',
    className: v.contextMenu
  })
]
  });
}
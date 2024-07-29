n.d(t, {
  Z: function() {
return v;
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
  f = n(60241),
  h = n(373826),
  p = n(315324),
  m = n(262210),
  I = n(666984),
  T = n(228168),
  g = n(981631),
  S = n(689938),
  A = n(692184);
let {
  getAssetImage: N
} = n(81063);

function v(e) {
  var t, n, a, v;
  let {
user: O,
currentUser: R,
activity: C,
guild: y,
channel: D,
onAction: L,
onClose: b
  } = e, {
profileType: M
  } = (0, _.z)(), P = {
[A.fullSize]: M === T.y0.FULL_SIZE
  };
  if (!(0, u.Z)(C))
return null;
  let U = l.Z.get(g.ABu.SPOTIFY),
w = M === T.y0.FULL_SIZE ? 64 : 48,
x = () => O.id === R.id ? null : (0, r.jsx)('div', {
  className: s()(A.actions, P),
  children: (0, r.jsx)(I.Z, {
    user: O,
    activity: C,
    onClick: L
  })
});
  return (0, r.jsxs)(d.Z.Overlay, {
className: A.card,
children: [
  (0, r.jsxs)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: A.header,
    children: [
      S.Z.Messages.USER_ACTIVITY_LISTENING_TO,
      (0, r.jsx)('div', {
        className: A.platformIcon,
        style: {
          maskImage: 'url('.concat(U.icon.whiteSVG, ')'),
          WebkitMaskImage: 'url('.concat(U.icon.whiteSVG, ')')
        }
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: A.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(A.content, P),
        children: [
          (0, r.jsx)(f.Z, {
            text: null === (t = C.assets) || void 0 === t ? void 0 : t.large_text,
            alt: null !== (v = null === (n = C.assets) || void 0 === n ? void 0 : n.large_text) && void 0 !== v ? v : '',
            src: N(C.application_id, null === (a = C.assets) || void 0 === a ? void 0 : a.large_image, w),
            className: s()(A.largeImage, A.imageSize, P),
            onClick: () => (0, c.Z5)(C, O.id)
          }),
          (0, r.jsxs)('div', {
            className: A.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(h.Z, {
                    variant: 'heading-sm/semibold',
                    text: C.details,
                    onClick: () => (0, c.aG)(C)
                  }),
                  (() => {
                    var e, t;
                    let n = null !== (t = null === (e = C.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
                    return 0 === n.length ? null : null == C.sync_id ? (0, r.jsx)(h.Z, {
                      variant: 'text-xs/normal',
                      text: n.join(', ')
                    }) : (0, r.jsx)(h.Z, {
                      variant: 'text-xs/normal',
                      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [
                          (0, r.jsx)(o.Clickable, {
                            className: s()(A.clickable, A.text, A.inline),
                            onClick: () => (0, c.d$)(C, O.id, t),
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
                user: O,
                activity: C,
                className: A.badges
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
                return null == t || null == n ? null : (0, r.jsx)(m.Z, {
                  start: t,
                  end: n
                });
              })()
            ]
          }),
          M === T.y0.FULL_SIZE && x()
        ]
      }),
      null == y || null == D ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: A.voiceChannelDivider
          }),
          (0, r.jsx)(p.Z, {
            guild: y,
            channel: D,
            onClose: b
          })
        ]
      }),
      M !== T.y0.FULL_SIZE && x()
    ]
  })
]
  });
}
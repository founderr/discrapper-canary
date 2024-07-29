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
  var t, n;
  let {
user: a,
currentUser: v,
activity: O,
guild: R,
channel: C,
onAction: y,
onClose: D
  } = e, {
profileType: L
  } = (0, _.z)(), b = {
[A.fullSize]: L === T.y0.FULL_SIZE
  };
  if (!(0, u.Z)(O))
return null;
  let M = l.Z.get(g.ABu.SPOTIFY),
P = () => a.id === v.id ? null : (0, r.jsx)('div', {
  className: s()(A.actions, b),
  children: (0, r.jsx)(I.Z, {
    user: a,
    activity: O,
    onClick: y
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
          maskImage: 'url('.concat(M.icon.whiteSVG, ')'),
          WebkitMaskImage: 'url('.concat(M.icon.whiteSVG, ')')
        }
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: A.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(A.content, b),
        children: [
          (0, r.jsx)(f.Z, {
            src: e => {
              var t;
              return N(O.application_id, null === (t = O.assets) || void 0 === t ? void 0 : t.large_image, e);
            },
            alt: null === (t = O.assets) || void 0 === t ? void 0 : t.large_text,
            tooltipText: null === (n = O.assets) || void 0 === n ? void 0 : n.large_text,
            onClick: () => (0, c.Z5)(O, a.id)
          }),
          (0, r.jsxs)('div', {
            className: A.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(h.Z, {
                    variant: 'heading-sm/semibold',
                    text: O.details,
                    onClick: () => (0, c.aG)(O)
                  }),
                  (() => {
                    var e, t;
                    let n = null !== (t = null === (e = O.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
                    return 0 === n.length ? null : null == O.sync_id ? (0, r.jsx)(h.Z, {
                      variant: 'text-xs/normal',
                      text: n.join(', ')
                    }) : (0, r.jsx)(h.Z, {
                      variant: 'text-xs/normal',
                      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [
                          (0, r.jsx)(o.Clickable, {
                            className: s()(A.clickable, A.text, A.inline),
                            onClick: () => (0, c.d$)(O, a.id, t),
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
                activity: O,
                className: A.badges
              }),
              (() => {
                let {
                  timestamps: e
                } = O;
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
          L === T.y0.FULL_SIZE && P()
        ]
      }),
      null == R || null == C ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: A.voiceChannelDivider
          }),
          (0, r.jsx)(p.Z, {
            guild: R,
            channel: C,
            onClose: D
          })
        ]
      }),
      L !== T.y0.FULL_SIZE && P()
    ]
  })
]
  });
}
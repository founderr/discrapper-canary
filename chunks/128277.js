n.d(t, {
  Z: function() {
return L;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(726542),
  u = n(503438),
  c = n(100527),
  d = n(906732),
  _ = n(180335),
  E = n(952164),
  f = n(502762),
  h = n(652853),
  p = n(448980),
  m = n(194811),
  I = n(60241),
  T = n(373826),
  g = n(315324),
  S = n(582123),
  A = n(262210),
  N = n(666984),
  v = n(290274),
  O = n(228168),
  R = n(981631),
  C = n(689938),
  y = n(692184);
let {
  getAssetImage: D
} = n(81063);

function L(e) {
  let {
user: t,
currentUser: n,
activity: a,
guild: L,
channel: b,
className: M,
onAction: P,
onClose: U
  } = e, {
analyticsLocations: w
  } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
profileType: x
  } = (0, h.z)(), G = {
[y.fullSize]: x === O.y0.FULL_SIZE
  }, k = (0, _.Bq)({
activity: a,
user: t
  });
  if (!(0, u.Z)(a))
return null;
  let B = () => {
  var e, n;
  let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
  return 0 === l.length ? null : null == a.sync_id ? (0, r.jsx)(T.Z, {
    variant: 'text-xs/normal',
    text: l.join(', ')
  }) : (0, r.jsx)(T.Z, {
    variant: 'text-xs/normal',
    text: l.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [
        (0, r.jsx)(o.Clickable, {
          className: s()(y.clickable, y.inline),
          onClick: () => (0, E.d$)(a, t.id, n),
          children: e
        }),
        n < l.length - 1 ? ', ' : ''
      ]
    }, n))
  });
},
F = () => {
  let {
    timestamps: e
  } = a;
  if (null == e)
    return null;
  let {
    start: t,
    end: n
  } = e;
  return null == t || null == n ? null : (0, r.jsx)(A.Z, {
    start: t,
    end: n
  });
},
V = () => null == L || null == b ? null : (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: y.voiceChannelDivider
    }),
    (0, r.jsx)(g.Z, {
      user: t,
      guild: L,
      channel: b,
      onClose: U
    })
  ]
}),
H = () => t.id === n.id ? null : (0, r.jsx)('div', {
  className: s()(y.actions, G),
  children: (0, r.jsx)(N.Z, {
    user: t,
    activity: a,
    onClick: P
  })
});
  return (0, r.jsx)(d.Gt, {
value: w,
children: (0, r.jsx)(S.Z, {
  user: t,
  onClose: U,
  children: e => {
    var n, i;
    let {
      onAutoDismiss: o
    } = e;
    return (0, r.jsxs)(f.Z.Overlay, {
      className: s()(y.card, M),
      children: [
        (0, r.jsx)(m.Z, {
          text: C.Z.Messages.USER_ACTIVITY_LISTENING_TO,
          platform: l.Z.get(R.ABu.SPOTIFY),
          tags: (0, r.jsx)(v.Z, {
            display: 'live',
            user: t,
            activity: a,
            entry: k,
            onClose: U,
            onRequestOpen: o
          })
        }),
        (0, r.jsxs)('div', {
          className: y.body,
          children: [
            (0, r.jsxs)('div', {
              className: s()(y.content, G),
              children: [
                (0, r.jsx)(I.ZP, {
                  image: {
                    src: D(a.application_id, null === (n = a.assets) || void 0 === n ? void 0 : n.large_image, I.WQ),
                    text: null === (i = a.assets) || void 0 === i ? void 0 : i.large_text
                  },
                  onClick: () => (0, E.Z5)(a, t.id)
                }),
                (0, r.jsxs)('div', {
                  className: y.details,
                  children: [
                    (0, r.jsxs)('div', {
                      children: [
                        (0, r.jsx)(T.Z, {
                          variant: 'heading-sm/semibold',
                          text: a.details,
                          onClick: () => (0, E.aG)(a)
                        }),
                        B()
                      ]
                    }),
                    (0, r.jsx)(p.Z, {
                      user: t,
                      activity: a,
                      className: y.badges
                    }),
                    F()
                  ]
                }),
                x === O.y0.FULL_SIZE && H()
              ]
            }),
            V()
          ]
        }),
        x !== O.y0.FULL_SIZE && H()
      ]
    });
  }
})
  });
}
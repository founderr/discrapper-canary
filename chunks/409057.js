n.d(t, {
  Z: function() {
return B;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(278074),
  o = n(442837),
  l = n(481060),
  u = n(726542),
  c = n(122810),
  d = n(394821),
  _ = n(841784),
  E = n(833664),
  f = n(802856),
  h = n(420660),
  p = n(314091),
  m = n(719247),
  I = n(925329),
  T = n(810568),
  g = n(168524),
  S = n(833858),
  A = n(223135),
  N = n(769654),
  v = n(914010),
  O = n(502762),
  R = n(652853),
  C = n(979038),
  y = n(448980),
  D = n(60241),
  L = n(373826),
  b = n(315324),
  M = n(364027),
  P = n(228168),
  U = n(981631),
  w = n(701488),
  x = n(689938),
  G = n(692184);
let {
  getAssetImage: k
} = n(81063);

function B(e) {
  var t;
  let {
user: n,
currentUser: i,
activity: B,
application: F,
guild: V,
channel: H,
onAction: Z,
onClose: Y
  } = e, j = (0, o.e7)([v.Z], () => v.Z.getGuildId()), W = (0, o.e7)([m.ZP], () => m.ZP.getMatchingOutboxEntry(B, n.id)), {
profileType: K
  } = (0, R.z)(), z = {
[G.fullSize]: K === P.y0.FULL_SIZE
  }, q = (0, g.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : B.application_id,
source: T.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  });
  if (B.type === U.IIU.CUSTOM_STATUS)
return null;
  let Q = () => {
  var e;
  return B.type === U.IIU.HANG_STATUS ? (0, r.jsx)(L.Z, {
    variant: 'heading-sm/semibold',
    text: (0, S.O8)(B)
  }) : (0, h.Z)(B) && null != H ? (0, r.jsxs)('div', {
    className: G.voiceChannelInfo,
    children: [
      (0, r.jsx)(l.VoiceNormalIcon, {
        size: 'xxs',
        color: l.tokens.colors.TEXT_NORMAL
      }),
      (0, r.jsx)(L.Z, {
        variant: 'heading-sm/semibold',
        text: H.name
      })
    ]
  }) : (0, E.Z)(B) ? (0, r.jsx)(L.Z, {
    variant: 'heading-sm/semibold',
    text: B.name
  }) : (0, r.jsx)(L.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = B.details) && void 0 !== e ? e : B.name
  });
},
X = () => B.type === U.IIU.HANG_STATUS ? null : (0, h.Z)(B) && null != V ? (0, r.jsx)(L.Z, {
  variant: 'text-xs/normal',
  text: x.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: V.name
  }),
  onClick: V.id === j ? void 0 : () => {
    (0, N.X)(V.id), null == Y || Y();
  }
}) : (0, E.Z)(B) ? (0, r.jsx)(L.Z, {
  variant: 'text-xs/normal',
  text: B.details
}) : (0, r.jsx)(L.Z, {
  text: B.state,
  variant: 'text-xs/normal'
}),
$ = () => {
  var e;
  return B.type === U.IIU.WATCHING ? null : (0, E.Z)(B) ? J() : (0, r.jsx)(L.Z, {
    text: null === (e = B.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
J = () => {
  var e, t, n, i;
  return (null === (e = B.party) || void 0 === e ? void 0 : e.size) == null && B.application_id === w.Zc ? (0, r.jsxs)('div', {
    className: G.gameState,
    children: [
      (0, r.jsx)(L.Z, {
        variant: 'text-xs/normal',
        text: B.state
      }),
      (0, r.jsx)(L.Z, {
        variant: 'text-xs/normal',
        text: x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == F ? void 0 : F.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, _.Z)(B) && (null === (t = B.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = B.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: G.gameState,
    children: [
      (0, r.jsx)(L.Z, {
        variant: 'text-xs/normal',
        text: B.state
      }),
      (0, r.jsx)(L.Z, {
        variant: 'text-xs/normal',
        text: x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: B.party.size[0],
          max: B.party.size[1]
        })
      })
    ]
  }) : null == B.party ? (0, r.jsx)(L.Z, {
    variant: 'text-xs/normal',
    text: B.state
  }) : null;
},
ee = () => n.id === i.id ? null : (0, r.jsx)('div', {
  className: a()(G.actions, z),
  children: (0, r.jsx)(C.Z, {
    activity: B,
    user: n,
    currentUser: i,
    onAction: Z,
    onClose: Y
  })
});
  return (0, r.jsxs)(O.Z.Overlay, {
className: G.card,
children: [
  (() => {
    let e = (0, s.EQ)(B.type).with(U.IIU.PLAYING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).with(U.IIU.STREAMING, () => x.Z.Messages.USER_ACTIVITY_STREAMING).with(U.IIU.LISTENING, () => x.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(U.IIU.WATCHING, () => x.Z.Messages.USER_ACTIVITY_WATCHING).with(U.IIU.HANG_STATUS, () => x.Z.Messages.USER_ACTIVITY_CURRENTLY).with(U.IIU.COMPETING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    if (null == e)
      return null;
    let t = (0, p.ZH)(B),
      n = null != t ? 'url('.concat(t.icon.whiteSVG, ')') : void 0;
    return (0, r.jsxs)(l.Heading, {
      variant: 'text-xs/medium',
      color: 'header-primary',
      className: G.header,
      children: [
        e,
        null != n && (0, r.jsx)('div', {
          className: G.platformIcon,
          style: {
            maskImage: n,
            WebkitMaskImage: n
          }
        })
      ]
    });
  })(),
  (0, r.jsxs)('div', {
    className: G.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(G.content, z),
        children: [
          (() => {
            var e, t, i, s, o, l, _, E, h;
            let p = a()(G.imageSize, z);
            if (B.type === U.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: a()(G.hangStatusIconBackground, p),
                children: (0, r.jsx)(A.Z, {
                  hangStatusActivity: B,
                  className: G.hangStatusIcon
                })
              });
            if ((0, f.Z)(B))
              return (0, r.jsx)(D.Z, {
                src: u.Z.get(U.ABu.XBOX).icon.customPNG,
                alt: x.Z.Messages.XBOX,
                className: p
              });
            if (null == B.assets && !(0, c.Z)(B) && B.type === U.IIU.PLAYING && !n.bot)
              return (0, r.jsx)(I.Z, {
                game: F,
                className: p
              });
            if ((null === (e = B.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = B.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let m = K === P.y0.FULL_SIZE ? 64 : 48,
              T = K === P.y0.FULL_SIZE ? 30 : 20;
            return (null === (i = B.assets) || void 0 === i ? void 0 : i.large_image) == null ? (0, r.jsx)(D.Z, {
              text: B.assets.small_text,
              alt: null !== (o = B.assets.small_text) && void 0 !== o ? o : '',
              src: k(B.application_id, B.assets.small_image, m),
              className: a()(G.largeImage, p)
            }) : (0, d.Z)(B) ? (0, r.jsx)(D.Z, {
              text: B.assets.large_text,
              alt: null !== (l = B.assets.large_text) && void 0 !== l ? l : '',
              src: k(B.application_id, B.assets.large_image, K === P.y0.FULL_SIZE ? 86 : 64),
              className: a()(G.largeImage, p, G.crunchyroll)
            }) : (null === (s = B.assets) || void 0 === s ? void 0 : s.small_image) == null || B.type !== U.IIU.PLAYING ? (0, r.jsx)(D.Z, {
              text: B.assets.large_text,
              alt: null !== (_ = B.assets.large_text) && void 0 !== _ ? _ : '',
              src: k(B.application_id, B.assets.large_image, m),
              className: a()(G.largeImage, p)
            }) : (0, r.jsxs)('div', {
              className: a()(G.imageContainer, p),
              children: [
                (0, r.jsx)(D.Z, {
                  text: B.assets.large_text,
                  alt: null !== (E = B.assets.large_text) && void 0 !== E ? E : '',
                  src: k(B.application_id, B.assets.large_image, m),
                  className: a()(G.largeImage, p)
                }),
                (0, r.jsx)(D.Z, {
                  text: B.assets.small_text,
                  alt: null !== (h = B.assets.small_text) && void 0 !== h ? h : '',
                  src: k(B.application_id, B.assets.small_image, T),
                  className: a()(G.smallImage, z)
                })
              ]
            });
          })(),
          null == q ? (0, r.jsxs)('div', {
            className: G.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  Q(),
                  X(),
                  $()
                ]
              }),
              (0, r.jsx)(y.Z, {
                user: n,
                activity: B,
                className: G.badges
              })
            ]
          }) : (0, r.jsxs)('div', {
            className: G.details,
            children: [
              (0, r.jsxs)(l.Clickable, {
                className: G.clickable,
                onClick: () => {
                  q(), null == Y || Y();
                },
                children: [
                  Q(),
                  X(),
                  $()
                ]
              }),
              (0, r.jsx)(y.Z, {
                user: n,
                activity: B,
                className: G.badges
              })
            ]
          }),
          K === P.y0.FULL_SIZE && ee()
        ]
      }),
      null == V || null == H ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: G.voiceChannelDivider
          }),
          (0, r.jsx)(b.Z, {
            guild: V,
            channel: H,
            onClose: Y
          })
        ]
      }),
      K !== P.y0.FULL_SIZE && ee()
    ]
  }),
  null != W && (0, r.jsx)(M.Z, {
    entry: W,
    user: n,
    className: G.contextMenu,
    display: M.a.LIVE
  })
]
  });
}
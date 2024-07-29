n.d(t, {
  Z: function() {
return G;
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
  m = n(925329),
  I = n(810568),
  T = n(168524),
  g = n(833858),
  S = n(223135),
  A = n(769654),
  N = n(914010),
  v = n(502762),
  O = n(652853),
  R = n(979038),
  C = n(448980),
  y = n(60241),
  D = n(373826),
  L = n(315324),
  b = n(228168),
  M = n(981631),
  P = n(701488),
  U = n(689938),
  w = n(692184);
let {
  getAssetImage: x
} = n(81063);

function G(e) {
  var t;
  let {
user: n,
currentUser: i,
activity: G,
application: k,
guild: B,
channel: F,
onAction: V,
onClose: H
  } = e, Z = (0, o.e7)([N.Z], () => N.Z.getGuildId()), {
profileType: Y
  } = (0, O.z)(), j = {
[w.fullSize]: Y === b.y0.FULL_SIZE
  }, W = (0, T.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == k ? void 0 : k.id) && void 0 !== t ? t : G.application_id,
source: I.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  });
  if (G.type === M.IIU.CUSTOM_STATUS)
return null;
  let K = () => {
  var e;
  return G.type === M.IIU.HANG_STATUS ? (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: (0, g.O8)(G)
  }) : (0, h.Z)(G) && null != F ? (0, r.jsxs)('div', {
    className: w.voiceChannelInfo,
    children: [
      (0, r.jsx)(l.VoiceNormalIcon, {
        size: 'xxs',
        color: l.tokens.colors.TEXT_NORMAL
      }),
      (0, r.jsx)(D.Z, {
        variant: 'heading-sm/semibold',
        text: F.name
      })
    ]
  }) : (0, E.Z)(G) ? (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: G.name
  }) : (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = G.details) && void 0 !== e ? e : G.name
  });
},
z = () => G.type === M.IIU.HANG_STATUS ? null : (0, h.Z)(G) && null != B ? (0, r.jsx)(D.Z, {
  variant: 'text-xs/normal',
  text: U.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: B.name
  }),
  onClick: B.id === Z ? void 0 : () => {
    (0, A.X)(B.id), null == H || H();
  }
}) : (0, E.Z)(G) ? (0, r.jsx)(D.Z, {
  variant: 'text-xs/normal',
  text: G.details
}) : (0, r.jsx)(D.Z, {
  text: G.state,
  variant: 'text-xs/normal'
}),
q = () => {
  var e;
  return G.type === M.IIU.WATCHING ? null : (0, E.Z)(G) ? Q() : (0, r.jsx)(D.Z, {
    text: null === (e = G.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
Q = () => {
  var e, t, n, i;
  return (null === (e = G.party) || void 0 === e ? void 0 : e.size) == null && G.application_id === P.Zc ? (0, r.jsxs)('div', {
    className: w.gameState,
    children: [
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: G.state
      }),
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == k ? void 0 : k.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, _.Z)(G) && (null === (t = G.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = G.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: w.gameState,
    children: [
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: G.state
      }),
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: G.party.size[0],
          max: G.party.size[1]
        })
      })
    ]
  }) : null == G.party ? (0, r.jsx)(D.Z, {
    variant: 'text-xs/normal',
    text: G.state
  }) : null;
},
X = () => n.id === i.id ? null : (0, r.jsx)('div', {
  className: a()(w.actions, j),
  children: (0, r.jsx)(R.Z, {
    activity: G,
    user: n,
    currentUser: i,
    onAction: V,
    onClose: H
  })
});
  return (0, r.jsxs)(v.Z.Overlay, {
className: w.card,
children: [
  (() => {
    let e = (0, s.EQ)(G.type).with(M.IIU.PLAYING, () => U.Z.Messages.USER_ACTIVITY_PLAYING).with(M.IIU.STREAMING, () => U.Z.Messages.USER_ACTIVITY_STREAMING).with(M.IIU.LISTENING, () => U.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(M.IIU.WATCHING, () => U.Z.Messages.USER_ACTIVITY_WATCHING).with(M.IIU.HANG_STATUS, () => U.Z.Messages.USER_ACTIVITY_CURRENTLY).with(M.IIU.COMPETING, () => U.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    if (null == e)
      return null;
    let t = (0, p.ZH)(G),
      n = null != t ? 'url('.concat(t.icon.whiteSVG, ')') : void 0;
    return (0, r.jsxs)(l.Heading, {
      variant: 'text-xs/medium',
      color: 'header-primary',
      className: w.header,
      children: [
        e,
        null != n && (0, r.jsx)('div', {
          className: w.platformIcon,
          style: {
            maskImage: n,
            WebkitMaskImage: n
          }
        })
      ]
    });
  })(),
  (0, r.jsxs)('div', {
    className: w.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(w.content, j),
        children: [
          (() => {
            var e, t, i, s, o, l, _, E, h;
            let p = a()(w.imageSize, j);
            if (G.type === M.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: a()(w.hangStatusIconBackground, p),
                children: (0, r.jsx)(S.Z, {
                  hangStatusActivity: G,
                  className: w.hangStatusIcon
                })
              });
            if ((0, f.Z)(G))
              return (0, r.jsx)(y.Z, {
                src: u.Z.get(M.ABu.XBOX).icon.customPNG,
                alt: U.Z.Messages.XBOX,
                className: p
              });
            if (null == G.assets && !(0, c.Z)(G) && G.type === M.IIU.PLAYING && !n.bot)
              return (0, r.jsx)(m.Z, {
                game: k,
                className: p
              });
            if ((null === (e = G.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = G.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let I = Y === b.y0.FULL_SIZE ? 64 : 48,
              T = Y === b.y0.FULL_SIZE ? 30 : 20;
            return (null === (i = G.assets) || void 0 === i ? void 0 : i.large_image) == null ? (0, r.jsx)(y.Z, {
              text: G.assets.small_text,
              alt: null !== (o = G.assets.small_text) && void 0 !== o ? o : '',
              src: x(G.application_id, G.assets.small_image, I),
              className: a()(w.largeImage, p)
            }) : (0, d.Z)(G) ? (0, r.jsx)(y.Z, {
              text: G.assets.large_text,
              alt: null !== (l = G.assets.large_text) && void 0 !== l ? l : '',
              src: x(G.application_id, G.assets.large_image, Y === b.y0.FULL_SIZE ? 86 : 64),
              className: a()(w.largeImage, p, w.crunchyroll)
            }) : (null === (s = G.assets) || void 0 === s ? void 0 : s.small_image) == null || G.type !== M.IIU.PLAYING ? (0, r.jsx)(y.Z, {
              text: G.assets.large_text,
              alt: null !== (_ = G.assets.large_text) && void 0 !== _ ? _ : '',
              src: x(G.application_id, G.assets.large_image, I),
              className: a()(w.largeImage, p)
            }) : (0, r.jsxs)('div', {
              className: a()(w.imageContainer, p),
              children: [
                (0, r.jsx)(y.Z, {
                  text: G.assets.large_text,
                  alt: null !== (E = G.assets.large_text) && void 0 !== E ? E : '',
                  src: x(G.application_id, G.assets.large_image, I),
                  className: a()(w.largeImage, p)
                }),
                (0, r.jsx)(y.Z, {
                  text: G.assets.small_text,
                  alt: null !== (h = G.assets.small_text) && void 0 !== h ? h : '',
                  src: x(G.application_id, G.assets.small_image, T),
                  className: a()(w.smallImage, j)
                })
              ]
            });
          })(),
          null == W ? (0, r.jsxs)('div', {
            className: w.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  K(),
                  z(),
                  q()
                ]
              }),
              (0, r.jsx)(C.Z, {
                user: n,
                activity: G,
                className: w.badges
              })
            ]
          }) : (0, r.jsxs)('div', {
            className: w.details,
            children: [
              (0, r.jsxs)(l.Clickable, {
                className: w.clickable,
                onClick: () => {
                  W(), null == H || H();
                },
                children: [
                  K(),
                  z(),
                  q()
                ]
              }),
              (0, r.jsx)(C.Z, {
                user: n,
                activity: G,
                className: w.badges
              })
            ]
          }),
          Y === b.y0.FULL_SIZE && X()
        ]
      }),
      null == B || null == F ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: w.voiceChannelDivider
          }),
          (0, r.jsx)(L.Z, {
            guild: B,
            channel: F,
            onClose: H
          })
        ]
      }),
      Y !== b.y0.FULL_SIZE && X()
    ]
  })
]
  });
}
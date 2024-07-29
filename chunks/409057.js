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
user: i,
currentUser: G,
activity: k,
application: B,
activityGuild: F,
channel: V,
onAction: H,
onClose: Z
  } = e, Y = (0, o.e7)([N.Z], () => N.Z.getGuildId()), {
profileType: j
  } = (0, O.z)(), W = {
[w.fullSize]: j === b.y0.FULL_SIZE
  }, K = null != F && (null == k ? void 0 : k.type) !== M.IIU.PLAYING && (null == k ? void 0 : k.type) !== M.IIU.WATCHING && (null == k ? void 0 : k.type) !== M.IIU.LISTENING && (null == k ? void 0 : k.type) !== M.IIU.HANG_STATUS, z = K ? {
type: M.IIU.PLAYING,
name: U.Z.Messages.SHARING_SCREEN
  } : k, q = (0, T.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == B ? void 0 : B.id) && void 0 !== t ? t : null == z ? void 0 : z.application_id,
source: I.m1.UserProfile,
sourceUserId: i.id,
trackEntryPointImpression: !0
  });
  if (null == z || z.type === M.IIU.CUSTOM_STATUS || j !== b.y0.BITE_SIZE && j !== b.y0.FULL_SIZE && j !== b.y0.PANEL)
return null;
  let Q = () => {
  var e;
  return z.type === M.IIU.HANG_STATUS ? (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: (0, g.O8)(z)
  }) : (0, h.Z)(z) && null != V ? (0, r.jsxs)('div', {
    className: w.voiceChannelInfo,
    children: [
      (0, r.jsx)(l.VoiceNormalIcon, {
        size: 'xxs',
        color: l.tokens.colors.TEXT_NORMAL
      }),
      (0, r.jsx)(D.Z, {
        variant: 'heading-sm/semibold',
        text: V.name
      })
    ]
  }) : (0, E.Z)(z) ? (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: z.name
  }) : (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = z.details) && void 0 !== e ? e : z.name
  });
},
X = () => z.type === M.IIU.HANG_STATUS ? null : (0, h.Z)(z) && null != F ? (0, r.jsx)(D.Z, {
  variant: 'text-xs/normal',
  text: U.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: F.name
  }),
  onClick: F.id === Y ? void 0 : () => {
    (0, A.X)(F.id), null == Z || Z();
  }
}) : (0, E.Z)(z) ? (0, r.jsx)(D.Z, {
  variant: 'text-xs/normal',
  text: z.details
}) : (0, r.jsx)(D.Z, {
  text: z.state,
  variant: 'text-xs/normal'
}),
$ = () => {
  var e;
  return z.type === M.IIU.WATCHING ? null : (0, E.Z)(z) ? J() : (0, r.jsx)(D.Z, {
    text: null === (e = z.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
J = () => {
  var e, t, n, i;
  return (null === (e = z.party) || void 0 === e ? void 0 : e.size) == null && z.application_id === P.Zc ? (0, r.jsxs)('div', {
    className: w.gameState,
    children: [
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: z.state
      }),
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == B ? void 0 : B.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, _.Z)(z) && (null === (t = z.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = z.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: w.gameState,
    children: [
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: z.state
      }),
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: z.party.size[0],
          max: z.party.size[1]
        })
      })
    ]
  }) : null == z.party ? (0, r.jsx)(D.Z, {
    variant: 'text-xs/normal',
    text: z.state
  }) : null;
},
ee = () => i.id === G.id ? null : (0, r.jsx)('div', {
  className: a()(w.actions, W),
  children: (0, r.jsx)(R.Z, {
    activity: z,
    user: i,
    currentUser: G,
    onAction: H,
    onClose: Z
  })
});
  return (0, r.jsxs)(v.Z.Overlay, {
className: w.card,
children: [
  (() => {
    let e = K ? U.Z.Messages.USER_ACTIVITY_STREAMING : (0, s.EQ)(z.type).with(M.IIU.PLAYING, () => U.Z.Messages.USER_ACTIVITY_PLAYING).with(M.IIU.STREAMING, () => U.Z.Messages.USER_ACTIVITY_STREAMING).with(M.IIU.LISTENING, () => U.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(M.IIU.WATCHING, () => U.Z.Messages.USER_ACTIVITY_WATCHING).with(M.IIU.HANG_STATUS, () => U.Z.Messages.USER_ACTIVITY_CURRENTLY).with(M.IIU.COMPETING, () => U.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    if (null == e)
      return null;
    let t = (0, p.ZH)(z),
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
        className: a()(w.content, W),
        children: [
          (() => {
            var e, t, s, o, l, _, E, h, p;
            let I = a()(w.imageSize, W);
            if (z.type === M.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: a()(w.hangStatusIconBackground, I),
                children: (0, r.jsx)(S.Z, {
                  hangStatusActivity: z,
                  className: w.hangStatusIcon
                })
              });
            if (K)
              return (0, r.jsx)(y.Z, {
                src: n(132399),
                alt: U.Z.Messages.FORM_LABEL_SCREENSHARE,
                className: I
              });
            if ((0, f.Z)(z))
              return (0, r.jsx)(y.Z, {
                src: u.Z.get(M.ABu.XBOX).icon.customPNG,
                alt: U.Z.Messages.XBOX,
                className: I
              });
            if (null == z.assets && !(0, c.Z)(z) && z.type === M.IIU.PLAYING && !i.bot)
              return (0, r.jsx)(m.Z, {
                game: B,
                className: I
              });
            if ((null === (e = z.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = z.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let T = j === b.y0.FULL_SIZE ? 64 : 48,
              g = j === b.y0.FULL_SIZE ? 30 : 20;
            return (null === (s = z.assets) || void 0 === s ? void 0 : s.large_image) == null ? (0, r.jsx)(y.Z, {
              text: z.assets.small_text,
              alt: null !== (l = z.assets.small_text) && void 0 !== l ? l : '',
              src: x(z.application_id, z.assets.small_image, T),
              className: a()(w.largeImage, I)
            }) : (0, d.Z)(z) ? (0, r.jsx)(y.Z, {
              text: z.assets.large_text,
              alt: null !== (_ = z.assets.large_text) && void 0 !== _ ? _ : '',
              src: x(z.application_id, z.assets.large_image, j === b.y0.FULL_SIZE ? 86 : 64),
              className: a()(w.largeImage, I, w.crunchyroll)
            }) : (null === (o = z.assets) || void 0 === o ? void 0 : o.small_image) == null || z.type !== M.IIU.PLAYING ? (0, r.jsx)(y.Z, {
              text: z.assets.large_text,
              alt: null !== (E = z.assets.large_text) && void 0 !== E ? E : '',
              src: x(z.application_id, z.assets.large_image, T),
              className: a()(w.largeImage, I)
            }) : (0, r.jsxs)('div', {
              className: a()(w.imageContainer, I),
              children: [
                (0, r.jsx)(y.Z, {
                  text: z.assets.large_text,
                  alt: null !== (h = z.assets.large_text) && void 0 !== h ? h : '',
                  src: x(z.application_id, z.assets.large_image, T),
                  className: a()(w.largeImage, I)
                }),
                (0, r.jsx)(y.Z, {
                  text: z.assets.small_text,
                  alt: null !== (p = z.assets.small_text) && void 0 !== p ? p : '',
                  src: x(z.application_id, z.assets.small_image, g),
                  className: a()(w.smallImage, W)
                })
              ]
            });
          })(),
          null == q ? (0, r.jsxs)('div', {
            className: w.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  Q(),
                  X(),
                  $()
                ]
              }),
              (0, r.jsx)(C.Z, {
                user: i,
                activity: z,
                className: w.badges
              })
            ]
          }) : (0, r.jsxs)('div', {
            className: w.details,
            children: [
              (0, r.jsxs)(l.Clickable, {
                className: w.clickable,
                onClick: () => {
                  q(), null == Z || Z();
                },
                children: [
                  Q(),
                  X(),
                  $()
                ]
              }),
              (0, r.jsx)(C.Z, {
                user: i,
                activity: z,
                className: w.badges
              })
            ]
          }),
          j === b.y0.FULL_SIZE && ee()
        ]
      }),
      null == F || null == V ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: w.voiceChannelDivider
          }),
          (0, r.jsx)(L.Z, {
            guild: F,
            channel: V,
            onClose: Z
          })
        ]
      }),
      j !== b.y0.FULL_SIZE && ee()
    ]
  })
]
  });
}
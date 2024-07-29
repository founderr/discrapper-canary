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
  c = n(841784),
  d = n(833664),
  _ = n(834353),
  E = n(802856),
  f = n(420660),
  h = n(314091),
  p = n(719247),
  m = n(810568),
  I = n(168524),
  T = n(833858),
  g = n(223135),
  S = n(769654),
  A = n(914010),
  N = n(502762),
  v = n(652853),
  O = n(979038),
  R = n(448980),
  C = n(60241),
  y = n(373826),
  D = n(315324),
  L = n(364027),
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
  } = e, Z = (0, o.e7)([A.Z], () => A.Z.getGuildId()), Y = (0, o.e7)([p.ZP], () => p.ZP.getMatchingOutboxEntry(G, n.id)), {
profileType: j
  } = (0, v.z)(), W = {
[w.fullSize]: j === b.y0.FULL_SIZE
  }, K = (0, I.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == k ? void 0 : k.id) && void 0 !== t ? t : G.application_id,
source: m.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  });
  if (G.type === M.IIU.CUSTOM_STATUS)
return null;
  let z = () => {
  var e;
  return G.type === M.IIU.HANG_STATUS ? (0, r.jsx)(y.Z, {
    variant: 'heading-sm/semibold',
    text: (0, T.O8)(G)
  }) : (0, f.Z)(G) && null != F ? (0, r.jsxs)('div', {
    className: w.voiceChannelInfo,
    children: [
      (0, r.jsx)(l.VoiceNormalIcon, {
        size: 'xxs',
        color: l.tokens.colors.TEXT_NORMAL
      }),
      (0, r.jsx)(y.Z, {
        variant: 'heading-sm/semibold',
        text: F.name
      })
    ]
  }) : (0, d.Z)(G) ? (0, r.jsx)(y.Z, {
    variant: 'heading-sm/semibold',
    text: G.name
  }) : (0, r.jsx)(y.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = G.details) && void 0 !== e ? e : G.name
  });
},
q = () => G.type === M.IIU.HANG_STATUS ? null : (0, f.Z)(G) && null != B ? (0, r.jsx)(y.Z, {
  variant: 'text-xs/normal',
  text: U.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: B.name
  }),
  onClick: B.id === Z ? void 0 : () => {
    (0, S.X)(B.id), null == H || H();
  }
}) : (0, d.Z)(G) ? (0, r.jsx)(y.Z, {
  variant: 'text-xs/normal',
  text: G.details
}) : (0, r.jsx)(y.Z, {
  text: G.state,
  variant: 'text-xs/normal'
}),
Q = () => {
  var e;
  return G.type === M.IIU.WATCHING ? null : (0, d.Z)(G) ? X() : (0, r.jsx)(y.Z, {
    text: null === (e = G.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
X = () => {
  var e, t, n, i;
  return (null === (e = G.party) || void 0 === e ? void 0 : e.size) == null && G.application_id === P.Zc ? (0, r.jsxs)('div', {
    className: w.gameState,
    children: [
      (0, r.jsx)(y.Z, {
        variant: 'text-xs/normal',
        text: G.state
      }),
      (0, r.jsx)(y.Z, {
        variant: 'text-xs/normal',
        text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == k ? void 0 : k.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, c.Z)(G) && (null === (t = G.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = G.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: w.gameState,
    children: [
      (0, r.jsx)(y.Z, {
        variant: 'text-xs/normal',
        text: G.state
      }),
      (0, r.jsx)(y.Z, {
        variant: 'text-xs/normal',
        text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: G.party.size[0],
          max: G.party.size[1]
        })
      })
    ]
  }) : null == G.party ? (0, r.jsx)(y.Z, {
    variant: 'text-xs/normal',
    text: G.state
  }) : null;
},
$ = () => n.id === i.id ? null : (0, r.jsx)('div', {
  className: a()(w.actions, W),
  children: (0, r.jsx)(O.Z, {
    activity: G,
    user: n,
    currentUser: i,
    onAction: V,
    onClose: H
  })
});
  return (0, r.jsxs)(N.Z.Overlay, {
className: w.card,
children: [
  (() => {
    let e = (0, s.EQ)(G.type).with(M.IIU.PLAYING, () => U.Z.Messages.USER_ACTIVITY_PLAYING).with(M.IIU.STREAMING, () => U.Z.Messages.USER_ACTIVITY_STREAMING).with(M.IIU.LISTENING, () => U.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(M.IIU.WATCHING, () => U.Z.Messages.USER_ACTIVITY_WATCHING).with(M.IIU.HANG_STATUS, () => U.Z.Messages.USER_ACTIVITY_CURRENTLY).with(M.IIU.COMPETING, () => U.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    if (null == e)
      return null;
    let t = (0, h.ZH)(G),
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
            var e, t, n, i;
            if (G.type === M.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: a()(w.hangStatusIconBackground, W),
                children: (0, r.jsx)(g.Z, {
                  hangStatusActivity: G,
                  className: w.hangStatusIcon
                })
              });
            let s = null === (e = G.assets) || void 0 === e ? void 0 : e.large_image,
              o = null === (t = G.assets) || void 0 === t ? void 0 : t.small_image,
              l = null === (n = G.assets) || void 0 === n ? void 0 : n.large_text,
              c = null === (i = G.assets) || void 0 === i ? void 0 : i.small_text;
            if (null == s && (0, E.Z)(G)) {
              let e = u.Z.get(M.ABu.XBOX).icon.customPNG;
              return (0, r.jsx)(C.Z, {
                src: e,
                alt: U.Z.Messages.XBOX
              });
            }
            if (null == s && (0, _.Z)(G)) {
              let e = u.Z.get(M.ABu.PLAYSTATION).icon.customPNG;
              return (0, r.jsx)(C.Z, {
                src: e,
                alt: U.Z.Messages.PLAYSTATION
              });
            }
            return null == s && null != k ? (0, r.jsx)(C.Z, {
              src: e => k.getIconURL(e),
              alt: U.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
                applicationName: k.name
              })
            }) : null == s && null != o ? (0, r.jsx)(C.Z, {
              src: e => x(G.application_id, o, e),
              alt: c,
              tooltipText: c
            }) : null != o && (0, d.Z)(G) ? (0, r.jsxs)('div', {
              className: w.imagePosition,
              children: [
                (0, r.jsx)(C.Z, {
                  src: e => x(G.application_id, s, e),
                  alt: l,
                  tooltipText: l
                }),
                (0, r.jsx)(C.Z, {
                  src: e => x(G.application_id, o, e),
                  size: 'small',
                  alt: c,
                  tooltipText: c
                })
              ]
            }) : (0, r.jsx)(C.Z, {
              src: e => x(G.application_id, s, e),
              alt: l,
              tooltipText: l
            });
          })(),
          null == K ? (0, r.jsxs)('div', {
            className: w.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  z(),
                  q(),
                  Q()
                ]
              }),
              (0, r.jsx)(R.Z, {
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
                  K(), null == H || H();
                },
                children: [
                  z(),
                  q(),
                  Q()
                ]
              }),
              (0, r.jsx)(R.Z, {
                user: n,
                activity: G,
                className: w.badges
              })
            ]
          }),
          j === b.y0.FULL_SIZE && $()
        ]
      }),
      null == B || null == F ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: w.voiceChannelDivider
          }),
          (0, r.jsx)(D.Z, {
            guild: B,
            channel: F,
            onClose: H
          })
        ]
      }),
      j !== b.y0.FULL_SIZE && $()
    ]
  }),
  null != Y && (0, r.jsx)(L.Z, {
    entry: Y,
    user: n,
    className: w.contextMenu,
    display: L.a.LIVE
  })
]
  });
}
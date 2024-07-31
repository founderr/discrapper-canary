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
  N = n(27144),
  v = n(502762),
  O = n(652853),
  R = n(979038),
  C = n(448980),
  y = n(194811),
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
className: Z,
onAction: Y,
onClose: j
  } = e, {
pastActivityEnabled: W
  } = (0, N.z)({
location: 'UserProfileActivityCard'
  }), K = (0, o.e7)([A.Z], () => A.Z.getGuildId()), z = (0, o.e7)([p.ZP], () => p.ZP.getMatchingOutboxEntry(B, n.id)), {
profileType: q
  } = (0, O.z)(), Q = {
[G.fullSize]: q === P.y0.FULL_SIZE
  }, X = (0, I.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : B.application_id,
source: m.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  });
  if (B.type === U.IIU.CUSTOM_STATUS)
return null;
  let $ = () => {
  var e;
  return B.type === U.IIU.HANG_STATUS ? (0, r.jsx)(L.Z, {
    variant: 'heading-sm/semibold',
    text: (0, T.O8)(B)
  }) : (0, f.Z)(B) && null != H ? (0, r.jsxs)('div', {
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
  }) : (0, d.Z)(B) ? (0, r.jsx)(L.Z, {
    variant: 'heading-sm/semibold',
    text: B.name
  }) : (0, r.jsx)(L.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = B.details) && void 0 !== e ? e : B.name
  });
},
J = () => B.type === U.IIU.HANG_STATUS ? null : (0, f.Z)(B) && null != V ? (0, r.jsx)(L.Z, {
  variant: 'text-xs/normal',
  text: x.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: V.name
  }),
  onClick: V.id === K ? void 0 : () => {
    (0, S.X)(V.id), null == j || j();
  }
}) : (0, d.Z)(B) ? (0, r.jsx)(L.Z, {
  variant: 'text-xs/normal',
  text: B.details
}) : (0, r.jsx)(L.Z, {
  text: B.state,
  variant: 'text-xs/normal'
}),
ee = () => {
  var e;
  return B.type === U.IIU.WATCHING ? null : (0, d.Z)(B) ? et() : (0, r.jsx)(L.Z, {
    text: null === (e = B.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
et = () => {
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
  }) : (0, c.Z)(B) && (null === (t = B.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = B.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
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
en = () => n.id === i.id ? null : (0, r.jsx)('div', {
  className: a()(G.actions, Q),
  children: (0, r.jsx)(R.Z, {
    activity: B,
    user: n,
    currentUser: i,
    onAction: Y,
    onClose: j
  })
});
  return (0, r.jsxs)(v.Z.Overlay, {
className: a()(G.card, Z),
children: [
  (() => {
    let e = (0, s.EQ)(B.type).with(U.IIU.PLAYING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).with(U.IIU.STREAMING, () => x.Z.Messages.USER_ACTIVITY_STREAMING).with(U.IIU.LISTENING, () => x.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(U.IIU.WATCHING, () => x.Z.Messages.USER_ACTIVITY_WATCHING).with(U.IIU.HANG_STATUS, () => x.Z.Messages.USER_ACTIVITY_CURRENTLY).with(U.IIU.COMPETING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    return null == e ? null : (0, r.jsx)(y.Z, {
      text: e,
      platform: (0, h.ZH)(B)
    });
  })(),
  (0, r.jsxs)('div', {
    className: G.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(G.content, Q),
        children: [
          (() => {
            var e, t, n, i;
            if (B.type === U.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: a()(G.hangStatusIconBackground, Q),
                children: (0, r.jsx)(g.Z, {
                  hangStatusActivity: B,
                  className: G.hangStatusIcon
                })
              });
            let s = null === (e = B.assets) || void 0 === e ? void 0 : e.large_image,
              o = null === (t = B.assets) || void 0 === t ? void 0 : t.small_image,
              l = null === (n = B.assets) || void 0 === n ? void 0 : n.large_text,
              c = null === (i = B.assets) || void 0 === i ? void 0 : i.small_text;
            if (null == s && (0, E.Z)(B)) {
              let e = u.Z.get(U.ABu.XBOX).icon.customPNG;
              return (0, r.jsx)(D.Z, {
                src: e,
                alt: x.Z.Messages.XBOX
              });
            }
            if (null == s && (0, _.Z)(B)) {
              let e = u.Z.get(U.ABu.PLAYSTATION).icon.customPNG;
              return (0, r.jsx)(D.Z, {
                src: e,
                alt: x.Z.Messages.PLAYSTATION
              });
            }
            return null == s && null != F ? (0, r.jsx)(D.Z, {
              src: e => F.getIconURL(e),
              alt: x.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
                applicationName: F.name
              })
            }) : null == s && null != o ? (0, r.jsx)(D.Z, {
              src: e => k(B.application_id, o, e),
              alt: c,
              tooltipText: c
            }) : null != o && (0, d.Z)(B) ? (0, r.jsxs)('div', {
              className: G.imagePosition,
              children: [
                (0, r.jsx)(D.Z, {
                  src: e => k(B.application_id, s, e),
                  alt: l,
                  tooltipText: l
                }),
                (0, r.jsx)(D.Z, {
                  src: e => k(B.application_id, o, e),
                  size: 'small',
                  alt: c,
                  tooltipText: c
                })
              ]
            }) : (0, r.jsx)(D.Z, {
              src: e => k(B.application_id, s, e),
              alt: l,
              tooltipText: l
            });
          })(),
          null == X ? (0, r.jsxs)('div', {
            className: G.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  $(),
                  J(),
                  ee()
                ]
              }),
              (0, r.jsx)(C.Z, {
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
                  X(), null == j || j();
                },
                children: [
                  $(),
                  J(),
                  ee()
                ]
              }),
              (0, r.jsx)(C.Z, {
                user: n,
                activity: B,
                className: G.badges
              })
            ]
          }),
          q === P.y0.FULL_SIZE && en()
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
            onClose: j
          })
        ]
      }),
      q !== P.y0.FULL_SIZE && en()
    ]
  }),
  W && null != z && (0, r.jsx)(M.Z, {
    entry: z,
    user: n,
    className: G.contextMenu,
    display: M.a.LIVE
  })
]
  });
}
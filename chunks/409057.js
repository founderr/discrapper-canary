n.d(t, {
  Z: function() {
return k;
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
  p = n(810568),
  m = n(168524),
  I = n(833858),
  T = n(223135),
  g = n(769654),
  S = n(914010),
  A = n(27144),
  N = n(502762),
  v = n(652853),
  O = n(979038),
  R = n(448980),
  C = n(194811),
  y = n(60241),
  D = n(373826),
  L = n(315324),
  b = n(290274),
  M = n(228168),
  P = n(981631),
  U = n(701488),
  w = n(689938),
  x = n(692184);
let {
  getAssetImage: G
} = n(81063);

function k(e) {
  var t;
  let {
user: n,
currentUser: i,
activity: k,
application: B,
guild: F,
channel: V,
className: H,
onAction: Z,
onClose: Y
  } = e, {
pastActivityEnabled: j
  } = (0, A.z)({
location: 'UserProfileActivityCard'
  }), W = (0, o.e7)([S.Z], () => S.Z.getGuildId()), {
profileType: K
  } = (0, v.z)(), z = {
[x.fullSize]: K === M.y0.FULL_SIZE
  }, q = (0, m.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == B ? void 0 : B.id) && void 0 !== t ? t : k.application_id,
source: p.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  });
  if (k.type === P.IIU.CUSTOM_STATUS)
return null;
  let Q = () => {
  var e;
  return k.type === P.IIU.HANG_STATUS ? (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: (0, I.O8)(k)
  }) : (0, f.Z)(k) && null != V ? (0, r.jsxs)('div', {
    className: x.voiceChannelInfo,
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
  }) : (0, d.Z)(k) ? (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: k.name
  }) : (0, r.jsx)(D.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = k.details) && void 0 !== e ? e : k.name
  });
},
X = () => k.type === P.IIU.HANG_STATUS ? null : (0, f.Z)(k) && null != F ? (0, r.jsx)(D.Z, {
  variant: 'text-xs/normal',
  text: w.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: F.name
  }),
  onClick: F.id === W ? void 0 : () => {
    (0, g.X)(F.id), null == Y || Y();
  }
}) : (0, d.Z)(k) ? (0, r.jsx)(D.Z, {
  variant: 'text-xs/normal',
  text: k.details
}) : (0, r.jsx)(D.Z, {
  text: k.state,
  variant: 'text-xs/normal'
}),
$ = () => {
  var e;
  return k.type === P.IIU.WATCHING ? null : (0, d.Z)(k) ? J() : (0, r.jsx)(D.Z, {
    text: null === (e = k.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
J = () => {
  var e, t, n, i;
  return (null === (e = k.party) || void 0 === e ? void 0 : e.size) == null && k.application_id === U.Zc ? (0, r.jsxs)('div', {
    className: x.gameState,
    children: [
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: k.state
      }),
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: w.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == B ? void 0 : B.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, c.Z)(k) && (null === (t = k.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = k.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: x.gameState,
    children: [
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: k.state
      }),
      (0, r.jsx)(D.Z, {
        variant: 'text-xs/normal',
        text: w.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: k.party.size[0],
          max: k.party.size[1]
        })
      })
    ]
  }) : null == k.party ? (0, r.jsx)(D.Z, {
    variant: 'text-xs/normal',
    text: k.state
  }) : null;
},
ee = () => n.id === i.id ? null : (0, r.jsx)('div', {
  className: a()(x.actions, z),
  children: (0, r.jsx)(O.Z, {
    activity: k,
    user: n,
    currentUser: i,
    onAction: Z,
    onClose: Y
  })
});
  return (0, r.jsxs)(N.Z.Overlay, {
className: a()(x.card, H),
children: [
  (() => {
    let e = (0, s.EQ)(k.type).with(P.IIU.PLAYING, () => w.Z.Messages.USER_ACTIVITY_PLAYING).with(P.IIU.STREAMING, () => w.Z.Messages.USER_ACTIVITY_STREAMING).with(P.IIU.LISTENING, () => w.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(P.IIU.WATCHING, () => w.Z.Messages.USER_ACTIVITY_WATCHING).with(P.IIU.HANG_STATUS, () => w.Z.Messages.USER_ACTIVITY_CURRENTLY).with(P.IIU.COMPETING, () => w.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    return null == e ? null : (0, r.jsx)(C.Z, {
      text: e,
      platform: (0, h.ZH)(k)
    });
  })(),
  (0, r.jsxs)('div', {
    className: x.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(x.content, z),
        children: [
          (() => {
            var e, t, n, i;
            if (k.type === P.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: x.hangStatusIconBackground,
                children: (0, r.jsx)(T.Z, {
                  hangStatusActivity: k,
                  className: x.hangStatusIcon
                })
              });
            let a = null === (e = k.assets) || void 0 === e ? void 0 : e.large_image,
              s = null === (t = k.assets) || void 0 === t ? void 0 : t.small_image,
              o = null === (n = k.assets) || void 0 === n ? void 0 : n.large_text,
              l = null === (i = k.assets) || void 0 === i ? void 0 : i.small_text;
            if (null == a && null == s && (0, E.Z)(k)) {
              let e = u.Z.get(P.ABu.XBOX).icon.customPNG;
              return (0, r.jsx)(y.Z, {
                src: e,
                alt: w.Z.Messages.XBOX
              });
            }
            if (null == a && null == s && (0, _.Z)(k)) {
              let e = u.Z.get(P.ABu.PLAYSTATION).icon.customPNG;
              return (0, r.jsx)(y.Z, {
                src: e,
                alt: w.Z.Messages.PLAYSTATION
              });
            }
            return null == a && null != B ? (0, r.jsx)(y.Z, {
              src: e => B.getIconURL(e),
              alt: w.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
                applicationName: B.name
              })
            }) : null == a && null != s ? (0, r.jsx)(y.Z, {
              src: e => G(k.application_id, s, e),
              alt: l,
              tooltipText: l
            }) : null != s && (0, d.Z)(k) ? (0, r.jsxs)('div', {
              className: x.imagePosition,
              children: [
                (0, r.jsx)(y.Z, {
                  src: e => G(k.application_id, a, e),
                  alt: o,
                  tooltipText: o
                }),
                (0, r.jsx)(y.Z, {
                  src: e => G(k.application_id, s, e),
                  size: 'small',
                  alt: l,
                  tooltipText: l
                })
              ]
            }) : (0, r.jsx)(y.Z, {
              src: e => G(k.application_id, a, e),
              alt: o,
              tooltipText: o
            });
          })(),
          null == q ? (0, r.jsxs)('div', {
            className: x.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  Q(),
                  X(),
                  $()
                ]
              }),
              (0, r.jsx)(R.Z, {
                user: n,
                activity: k,
                className: x.badges
              })
            ]
          }) : (0, r.jsxs)('div', {
            className: x.details,
            children: [
              (0, r.jsxs)(l.Clickable, {
                className: x.clickable,
                onClick: () => {
                  q(), null == Y || Y();
                },
                children: [
                  Q(),
                  X(),
                  $()
                ]
              }),
              (0, r.jsx)(R.Z, {
                user: n,
                activity: k,
                className: x.badges
              })
            ]
          }),
          K === M.y0.FULL_SIZE && ee()
        ]
      }),
      null == F || null == V ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: x.voiceChannelDivider
          }),
          (0, r.jsx)(L.Z, {
            guild: F,
            channel: V,
            onClose: Y
          })
        ]
      }),
      K !== M.y0.FULL_SIZE && ee()
    ]
  }),
  j && (0, r.jsx)(b.Z, {
    activity: k,
    user: n,
    className: x.contextMenu,
    display: 'live'
  })
]
  });
}
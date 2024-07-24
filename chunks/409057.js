n.d(t, {
  Z: function() {
return B;
  }
}), n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(278074),
  l = n(442837),
  u = n(481060),
  c = n(726542),
  d = n(122810),
  _ = n(394821),
  E = n(841784),
  f = n(833664),
  h = n(503438),
  p = n(802856),
  m = n(420660),
  I = n(39628),
  T = n(314091),
  g = n(925329),
  S = n(810568),
  A = n(168524),
  N = n(833858),
  v = n(223135),
  O = n(769654),
  R = n(914010),
  C = n(652853),
  y = n(979038),
  D = n(448980),
  L = n(60241),
  b = n(373826),
  M = n(315324),
  P = n(228168),
  U = n(981631),
  w = n(701488),
  x = n(689938),
  G = n(139665);
let {
  getAssetImage: k
} = n(81063);

function B(e) {
  var t;
  let {
user: a,
currentUser: B,
activity: F,
application: V,
activityGuild: H,
channel: Z,
className: Y,
onAction: j,
onClose: W,
onOpenSpotifyTrack: K,
onOpenSpotifyArtist: z,
onOpenSpotifyAlbum: q
  } = e, Q = (0, l.e7)([R.Z], () => R.Z.getGuildId()), {
profileType: X
  } = (0, C.z)(), $ = {
[G.fullSize]: X === P.y0.FULL_SIZE
  }, J = null != H && (null == F ? void 0 : F.type) !== U.IIU.PLAYING && (null == F ? void 0 : F.type) !== U.IIU.WATCHING && (null == F ? void 0 : F.type) !== U.IIU.LISTENING && (null == F ? void 0 : F.type) !== U.IIU.HANG_STATUS, ee = J ? {
type: U.IIU.PLAYING,
name: x.Z.Messages.SHARING_SCREEN
  } : F, et = (0, A.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null == ee ? void 0 : ee.application_id,
source: S.m1.UserProfile,
sourceUserId: a.id,
trackEntryPointImpression: !0
  });
  if (null == ee || ee.type === U.IIU.CUSTOM_STATUS || X !== P.y0.BITE_SIZE && X !== P.y0.FULL_SIZE && X !== P.y0.PANEL)
return null;
  let en = () => ee.type === U.IIU.HANG_STATUS ? (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: (0, N.O8)(ee)
}) : (0, h.Z)(ee) && null != ee.sync_id && null != ee.details ? (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: ee.details,
  onClick: () => K(ee)
}) : (0, m.Z)(ee) && null != Z ? (0, r.jsxs)('div', {
  className: G.voiceChannelInfo,
  children: [
    (0, r.jsx)(u.VoiceNormalIcon, {
      size: 'xxs',
      color: u.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(b.Z, {
      variant: 'heading-sm/semibold',
      text: Z.name
    })
  ]
}) : (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: ee.name
}),
er = () => {
  if (ee.type === U.IIU.HANG_STATUS)
    return null;
  if ((0, h.Z)(ee)) {
    var e, t;
    let n = null !== (t = null === (e = ee.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
    return 0 === n.length ? null : null == ee.sync_id ? (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: n.join(', ')
    }) : (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [
          (0, r.jsx)(u.Clickable, {
            className: s()(G.clickable, G.text, G.inline),
            onClick: () => z(ee, a.id, t),
            children: e
          }),
          t < n.length - 1 ? ', ' : ''
        ]
      }, t))
    });
  }
  return (0, m.Z)(ee) && null != H ? (0, r.jsx)(b.Z, {
    variant: 'text-xs/normal',
    text: x.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
      guildName: H.name
    }),
    onClick: H.id === Q ? void 0 : () => {
      (0, O.X)(H.id), null == W || W();
    }
  }) : (0, f.Z)(ee) ? (0, r.jsx)(b.Z, {
    variant: 'text-xs/normal',
    text: ee.details
  }) : (0, r.jsx)(b.Z, {
    text: ee.state,
    variant: 'text-xs/normal'
  });
},
ei = () => {
  var e;
  return ee.type === U.IIU.WATCHING || (0, h.Z)(ee) ? null : (0, f.Z)(ee) ? ea() : (0, r.jsx)(b.Z, {
    text: null === (e = ee.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
ea = () => {
  var e, t, n, i;
  return (null === (e = ee.party) || void 0 === e ? void 0 : e.size) == null && ee.application_id === w.Zc ? (0, r.jsxs)('div', {
    className: G.gameState,
    children: [
      (0, r.jsx)(b.Z, {
        variant: 'text-xs/normal',
        text: ee.state
      }),
      (0, r.jsx)(b.Z, {
        variant: 'text-xs/normal',
        text: x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == V ? void 0 : V.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, E.Z)(ee) && (null === (t = ee.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = ee.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: G.gameState,
    children: [
      (0, r.jsx)(b.Z, {
        variant: 'text-xs/normal',
        text: ee.state
      }),
      (0, r.jsx)(b.Z, {
        variant: 'text-xs/normal',
        text: x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: ee.party.size[0],
          max: ee.party.size[1]
        })
      })
    ]
  }) : null == ee.party ? (0, r.jsx)(b.Z, {
    variant: 'text-xs/normal',
    text: ee.state
  }) : null;
},
es = () => {
  if (!(0, h.Z)(ee))
    return null;
  let {
    timestamps: e
  } = ee;
  if (null == e)
    return null;
  let {
    start: t,
    end: n
  } = e;
  return null == t || null == n ? null : (0, r.jsx)(I.Z, {
    start: t,
    end: n,
    className: s()(G.timeBar, $),
    themed: !0
  });
},
eo = () => a.id === B.id ? null : (0, r.jsx)('div', {
  className: G.actions,
  children: (0, r.jsx)(y.Z, {
    activity: ee,
    user: a,
    currentUser: B,
    onAction: j,
    onClose: W
  })
});
  return (0, r.jsxs)('div', {
className: s()(G.card, Y),
children: [
  (() => {
    let e = J ? x.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)(ee.type).with(U.IIU.PLAYING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).with(U.IIU.STREAMING, () => x.Z.Messages.USER_ACTIVITY_STREAMING).with(U.IIU.LISTENING, () => x.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(U.IIU.WATCHING, () => x.Z.Messages.USER_ACTIVITY_WATCHING).with(U.IIU.HANG_STATUS, () => x.Z.Messages.USER_ACTIVITY_CURRENTLY).with(U.IIU.COMPETING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    if (null == e)
      return null;
    let t = (0, T.ZH)(ee),
      n = null != t ? 'url('.concat(t.icon.whiteSVG, ')') : void 0;
    return (0, r.jsxs)(u.Heading, {
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
        className: s()(G.content, $),
        children: [
          (() => {
            var e, t, i, o, l, u, E, f, m, I;
            let T = s()(G.imageSize, {
              [G.fullSize]: X === P.y0.FULL_SIZE
            });
            if (ee.type === U.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: s()(G.hangStatusIconBackground, T),
                children: (0, r.jsx)(v.Z, {
                  hangStatusActivity: ee,
                  className: G.hangStatusIcon
                })
              });
            if (J)
              return (0, r.jsx)(L.Z, {
                src: n(132399),
                alt: x.Z.Messages.FORM_LABEL_SCREENSHARE,
                className: T
              });
            if ((0, p.Z)(ee))
              return (0, r.jsx)(L.Z, {
                src: c.Z.get(U.ABu.XBOX).icon.customPNG,
                alt: x.Z.Messages.XBOX,
                className: T
              });
            if (!(0, d.Z)(ee) && ee.type === U.IIU.PLAYING && !a.bot)
              return (0, r.jsx)(g.Z, {
                game: V,
                className: T
              });
            if ((null === (e = ee.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = ee.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let S = X === P.y0.FULL_SIZE ? 64 : 48,
              A = X === P.y0.FULL_SIZE ? 30 : 20;
            return (null === (i = ee.assets) || void 0 === i ? void 0 : i.large_image) == null ? (0, r.jsx)(L.Z, {
              text: ee.assets.small_text,
              alt: null !== (l = ee.assets.small_text) && void 0 !== l ? l : '',
              src: k(ee.application_id, ee.assets.small_image, S),
              className: s()(G.largeImage, T)
            }) : (0, h.Z)(ee) ? (0, r.jsx)(L.Z, {
              text: ee.assets.large_text,
              alt: null !== (u = ee.assets.large_text) && void 0 !== u ? u : '',
              src: k(ee.application_id, ee.assets.large_image, S),
              className: s()(G.largeImage, T),
              onClick: () => q(ee, a.id)
            }) : (0, _.Z)(ee) ? (0, r.jsx)(L.Z, {
              text: ee.assets.large_text,
              alt: null !== (E = ee.assets.large_text) && void 0 !== E ? E : '',
              src: k(ee.application_id, ee.assets.large_image, X === P.y0.FULL_SIZE ? 86 : 64),
              className: s()(G.largeImage, T, G.crunchyroll)
            }) : (null === (o = ee.assets) || void 0 === o ? void 0 : o.small_image) == null || ee.type !== U.IIU.PLAYING ? (0, r.jsx)(L.Z, {
              text: ee.assets.large_text,
              alt: null !== (f = ee.assets.large_text) && void 0 !== f ? f : '',
              src: k(ee.application_id, ee.assets.large_image, S),
              className: s()(G.largeImage, T)
            }) : (0, r.jsxs)('div', {
              className: s()(G.imageContainer, T),
              children: [
                (0, r.jsx)(L.Z, {
                  text: ee.assets.large_text,
                  alt: null !== (m = ee.assets.large_text) && void 0 !== m ? m : '',
                  src: k(ee.application_id, ee.assets.large_image, S),
                  className: s()(G.largeImage, T)
                }),
                (0, r.jsx)(L.Z, {
                  text: ee.assets.small_text,
                  alt: null !== (I = ee.assets.small_text) && void 0 !== I ? I : '',
                  src: k(ee.application_id, ee.assets.small_image, A),
                  className: s()(G.smallImage, $)
                })
              ]
            });
          })(),
          null == et ? (0, r.jsxs)('div', {
            className: G.details,
            children: [
              en(),
              er(),
              ei(),
              (0, r.jsx)(D.Z, {
                activity: ee,
                className: G.badges
              }),
              es()
            ]
          }) : (0, r.jsxs)('div', {
            className: G.details,
            children: [
              (0, r.jsxs)(u.Clickable, {
                className: G.clickable,
                onClick: () => {
                  et(), null == W || W();
                },
                children: [
                  en(),
                  er(),
                  ei()
                ]
              }),
              (0, r.jsx)(D.Z, {
                activity: ee,
                className: G.badges
              }),
              es()
            ]
          }),
          X === P.y0.FULL_SIZE && eo()
        ]
      }),
      null == H || null == Z ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: G.voiceChannelDivider
          }),
          (0, r.jsx)(M.Z, {
            guild: H,
            channel: Z,
            onClose: W
          })
        ]
      }),
      X !== P.y0.FULL_SIZE && eo()
    ]
  })
]
  });
}
n.d(t, {
  Z: function() {
return F;
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
  C = n(502762),
  y = n(652853),
  D = n(979038),
  L = n(448980),
  b = n(60241),
  M = n(373826),
  P = n(315324),
  U = n(228168),
  w = n(981631),
  x = n(701488),
  G = n(689938),
  k = n(139665);
let {
  getAssetImage: B
} = n(81063);

function F(e) {
  var t;
  let {
user: a,
currentUser: F,
activity: V,
application: H,
activityGuild: Z,
channel: Y,
onAction: j,
onClose: W,
onOpenSpotifyTrack: K,
onOpenSpotifyArtist: z,
onOpenSpotifyAlbum: q
  } = e, Q = (0, l.e7)([R.Z], () => R.Z.getGuildId()), {
profileType: X
  } = (0, y.z)(), $ = {
[k.fullSize]: X === U.y0.FULL_SIZE
  }, J = null != Z && (null == V ? void 0 : V.type) !== w.IIU.PLAYING && (null == V ? void 0 : V.type) !== w.IIU.WATCHING && (null == V ? void 0 : V.type) !== w.IIU.LISTENING && (null == V ? void 0 : V.type) !== w.IIU.HANG_STATUS, ee = J ? {
type: w.IIU.PLAYING,
name: G.Z.Messages.SHARING_SCREEN
  } : V, et = (0, A.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == H ? void 0 : H.id) && void 0 !== t ? t : null == ee ? void 0 : ee.application_id,
source: S.m1.UserProfile,
sourceUserId: a.id,
trackEntryPointImpression: !0
  });
  if (null == ee || ee.type === w.IIU.CUSTOM_STATUS || X !== U.y0.BITE_SIZE && X !== U.y0.FULL_SIZE && X !== U.y0.PANEL)
return null;
  let en = () => {
  var e;
  return ee.type === w.IIU.HANG_STATUS ? (0, r.jsx)(M.Z, {
    variant: 'heading-sm/semibold',
    text: (0, N.O8)(ee)
  }) : (0, h.Z)(ee) && null != ee.sync_id && null != ee.details ? (0, r.jsx)(M.Z, {
    variant: 'heading-sm/semibold',
    text: ee.details,
    onClick: () => K(ee)
  }) : (0, m.Z)(ee) && null != Y ? (0, r.jsxs)('div', {
    className: k.voiceChannelInfo,
    children: [
      (0, r.jsx)(u.VoiceNormalIcon, {
        size: 'xxs',
        color: u.tokens.colors.TEXT_NORMAL
      }),
      (0, r.jsx)(M.Z, {
        variant: 'heading-sm/semibold',
        text: Y.name
      })
    ]
  }) : (0, f.Z)(ee) ? (0, r.jsx)(M.Z, {
    variant: 'heading-sm/semibold',
    text: ee.name
  }) : (0, r.jsx)(M.Z, {
    variant: 'heading-sm/semibold',
    text: null !== (e = ee.details) && void 0 !== e ? e : ee.name
  });
},
er = () => {
  if (ee.type === w.IIU.HANG_STATUS)
    return null;
  if ((0, h.Z)(ee)) {
    var e, t;
    let n = null !== (t = null === (e = ee.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
    return 0 === n.length ? null : null == ee.sync_id ? (0, r.jsx)(M.Z, {
      variant: 'text-xs/normal',
      text: n.join(', ')
    }) : (0, r.jsx)(M.Z, {
      variant: 'text-xs/normal',
      text: n.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [
          (0, r.jsx)(u.Clickable, {
            className: s()(k.clickable, k.text, k.inline),
            onClick: () => z(ee, a.id, t),
            children: e
          }),
          t < n.length - 1 ? ', ' : ''
        ]
      }, t))
    });
  }
  return (0, m.Z)(ee) && null != Z ? (0, r.jsx)(M.Z, {
    variant: 'text-xs/normal',
    text: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
      guildName: Z.name
    }),
    onClick: Z.id === Q ? void 0 : () => {
      (0, O.X)(Z.id), null == W || W();
    }
  }) : (0, f.Z)(ee) ? (0, r.jsx)(M.Z, {
    variant: 'text-xs/normal',
    text: ee.details
  }) : (0, r.jsx)(M.Z, {
    text: ee.state,
    variant: 'text-xs/normal'
  });
},
ei = () => {
  var e;
  return ee.type === w.IIU.WATCHING || (0, h.Z)(ee) ? null : (0, f.Z)(ee) ? ea() : (0, r.jsx)(M.Z, {
    text: null === (e = ee.assets) || void 0 === e ? void 0 : e.large_text,
    variant: 'text-xs/normal'
  });
},
ea = () => {
  var e, t, n, i;
  return (null === (e = ee.party) || void 0 === e ? void 0 : e.size) == null && ee.application_id === x.Zc ? (0, r.jsxs)('div', {
    className: k.gameState,
    children: [
      (0, r.jsx)(M.Z, {
        variant: 'text-xs/normal',
        text: ee.state
      }),
      (0, r.jsx)(M.Z, {
        variant: 'text-xs/normal',
        text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: '0',
          max: null !== (i = null == H ? void 0 : H.getMaxParticipants()) && void 0 !== i ? i : 0
        })
      })
    ]
  }) : (0, E.Z)(ee) && (null === (t = ee.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = ee.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
    className: k.gameState,
    children: [
      (0, r.jsx)(M.Z, {
        variant: 'text-xs/normal',
        text: ee.state
      }),
      (0, r.jsx)(M.Z, {
        variant: 'text-xs/normal',
        text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
          count: ee.party.size[0],
          max: ee.party.size[1]
        })
      })
    ]
  }) : null == ee.party ? (0, r.jsx)(M.Z, {
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
    className: s()(k.timeBar, $),
    themed: !0
  });
},
eo = () => a.id === F.id ? null : (0, r.jsx)('div', {
  className: k.actions,
  children: (0, r.jsx)(D.Z, {
    activity: ee,
    user: a,
    currentUser: F,
    onAction: j,
    onClose: W
  })
});
  return (0, r.jsxs)(C.Z.Overlay, {
className: k.card,
children: [
  (() => {
    let e = J ? G.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)(ee.type).with(w.IIU.PLAYING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).with(w.IIU.STREAMING, () => G.Z.Messages.USER_ACTIVITY_STREAMING).with(w.IIU.LISTENING, () => G.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(w.IIU.WATCHING, () => G.Z.Messages.USER_ACTIVITY_WATCHING).with(w.IIU.HANG_STATUS, () => G.Z.Messages.USER_ACTIVITY_CURRENTLY).with(w.IIU.COMPETING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    if (null == e)
      return null;
    let t = (0, T.ZH)(ee),
      n = null != t ? 'url('.concat(t.icon.whiteSVG, ')') : void 0;
    return (0, r.jsxs)(u.Heading, {
      variant: 'text-xs/medium',
      color: 'header-primary',
      className: k.header,
      children: [
        e,
        null != n && (0, r.jsx)('div', {
          className: k.platformIcon,
          style: {
            maskImage: n,
            WebkitMaskImage: n
          }
        })
      ]
    });
  })(),
  (0, r.jsxs)('div', {
    className: k.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(k.content, $),
        children: [
          (() => {
            var e, t, i, o, l, u, E, f, m, I;
            let T = s()(k.imageSize, {
              [k.fullSize]: X === U.y0.FULL_SIZE
            });
            if (ee.type === w.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: s()(k.hangStatusIconBackground, T),
                children: (0, r.jsx)(v.Z, {
                  hangStatusActivity: ee,
                  className: k.hangStatusIcon
                })
              });
            if (J)
              return (0, r.jsx)(b.Z, {
                src: n(132399),
                alt: G.Z.Messages.FORM_LABEL_SCREENSHARE,
                className: T
              });
            if ((0, p.Z)(ee))
              return (0, r.jsx)(b.Z, {
                src: c.Z.get(w.ABu.XBOX).icon.customPNG,
                alt: G.Z.Messages.XBOX,
                className: T
              });
            if (null == ee.assets && !(0, d.Z)(ee) && ee.type === w.IIU.PLAYING && !a.bot)
              return (0, r.jsx)(g.Z, {
                game: H,
                className: T
              });
            if ((null === (e = ee.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = ee.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let S = X === U.y0.FULL_SIZE ? 64 : 48,
              A = X === U.y0.FULL_SIZE ? 30 : 20;
            return (null === (i = ee.assets) || void 0 === i ? void 0 : i.large_image) == null ? (0, r.jsx)(b.Z, {
              text: ee.assets.small_text,
              alt: null !== (l = ee.assets.small_text) && void 0 !== l ? l : '',
              src: B(ee.application_id, ee.assets.small_image, S),
              className: s()(k.largeImage, T)
            }) : (0, h.Z)(ee) ? (0, r.jsx)(b.Z, {
              text: ee.assets.large_text,
              alt: null !== (u = ee.assets.large_text) && void 0 !== u ? u : '',
              src: B(ee.application_id, ee.assets.large_image, S),
              className: s()(k.largeImage, T),
              onClick: () => q(ee, a.id)
            }) : (0, _.Z)(ee) ? (0, r.jsx)(b.Z, {
              text: ee.assets.large_text,
              alt: null !== (E = ee.assets.large_text) && void 0 !== E ? E : '',
              src: B(ee.application_id, ee.assets.large_image, X === U.y0.FULL_SIZE ? 86 : 64),
              className: s()(k.largeImage, T, k.crunchyroll)
            }) : (null === (o = ee.assets) || void 0 === o ? void 0 : o.small_image) == null || ee.type !== w.IIU.PLAYING ? (0, r.jsx)(b.Z, {
              text: ee.assets.large_text,
              alt: null !== (f = ee.assets.large_text) && void 0 !== f ? f : '',
              src: B(ee.application_id, ee.assets.large_image, S),
              className: s()(k.largeImage, T)
            }) : (0, r.jsxs)('div', {
              className: s()(k.imageContainer, T),
              children: [
                (0, r.jsx)(b.Z, {
                  text: ee.assets.large_text,
                  alt: null !== (m = ee.assets.large_text) && void 0 !== m ? m : '',
                  src: B(ee.application_id, ee.assets.large_image, S),
                  className: s()(k.largeImage, T)
                }),
                (0, r.jsx)(b.Z, {
                  text: ee.assets.small_text,
                  alt: null !== (I = ee.assets.small_text) && void 0 !== I ? I : '',
                  src: B(ee.application_id, ee.assets.small_image, A),
                  className: s()(k.smallImage, $)
                })
              ]
            });
          })(),
          null == et ? (0, r.jsxs)('div', {
            className: k.details,
            children: [
              en(),
              (0, r.jsxs)('div', {
                className: k.subdetails,
                children: [
                  er(),
                  ei()
                ]
              }),
              (0, r.jsx)(L.Z, {
                user: a,
                activity: ee,
                className: k.badges
              }),
              es()
            ]
          }) : (0, r.jsxs)('div', {
            className: k.details,
            children: [
              (0, r.jsxs)(u.Clickable, {
                className: k.clickable,
                onClick: () => {
                  et(), null == W || W();
                },
                children: [
                  en(),
                  (0, r.jsxs)('div', {
                    className: k.subdetails,
                    children: [
                      er(),
                      ei()
                    ]
                  })
                ]
              }),
              (0, r.jsx)(L.Z, {
                user: a,
                activity: ee,
                className: k.badges
              }),
              es()
            ]
          }),
          X === U.y0.FULL_SIZE && eo()
        ]
      }),
      null == Z || null == Y ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: k.voiceChannelDivider
          }),
          (0, r.jsx)(P.Z, {
            guild: Z,
            channel: Y,
            onClose: W
          })
        ]
      }),
      X !== U.y0.FULL_SIZE && eo()
    ]
  })
]
  });
}
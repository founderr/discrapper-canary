n.d(t, {
  Z: function() {
return V;
  }
}), n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(278074),
  l = n(442837),
  u = n(481060),
  c = n(438139),
  d = n(726542),
  _ = n(122810),
  E = n(394821),
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
  O = n(707409),
  R = n(769654),
  C = n(914010),
  y = n(936195),
  D = n(652853),
  L = n(979038),
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
} = n(81063), F = (0, c.Z)(class extends i.PureComponent {
  render() {
return (0, r.jsx)('div', {
  className: s()(k.textXsNormal, k.textEllipsis),
  children: this.props.message
});
  }
});

function V(e) {
  var t;
  let {
user: i,
currentUser: a,
activity: c,
application: V,
activityGuild: H,
channel: Z,
className: Y,
onAction: j,
onClose: W,
onOpenSpotifyTrack: K,
onOpenSpotifyArtist: z,
onOpenSpotifyAlbum: q
  } = e, Q = (0, l.e7)([C.Z], () => C.Z.getGuildId()), {
profileType: X
  } = (0, D.z)(), $ = {
[k.fullSize]: X === U.y0.FULL_SIZE
  }, J = null != H && (null == c ? void 0 : c.type) !== w.IIU.PLAYING && (null == c ? void 0 : c.type) !== w.IIU.WATCHING && (null == c ? void 0 : c.type) !== w.IIU.LISTENING && (null == c ? void 0 : c.type) !== w.IIU.HANG_STATUS, ee = J ? {
type: w.IIU.PLAYING,
name: G.Z.Messages.SHARING_SCREEN
  } : c, et = (0, A.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null == ee ? void 0 : ee.application_id,
source: S.m1.UserProfile,
sourceUserId: i.id,
trackEntryPointImpression: !0
  });
  if (null == ee || ee.type === w.IIU.CUSTOM_STATUS || X !== U.y0.BITE_SIZE && X !== U.y0.FULL_SIZE && X !== U.y0.PANEL)
return null;
  let en = () => ee.type === w.IIU.HANG_STATUS ? (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: (0, N.O8)(ee)
}) : (0, h.Z)(ee) && null != ee.sync_id && null != ee.details ? (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: ee.details,
  onClick: () => K(ee)
}) : (0, m.Z)(ee) && null != Z ? (0, r.jsxs)('div', {
  className: k.voiceChannelInfo,
  children: [
    (0, r.jsx)(u.VoiceNormalIcon, {
      size: 'xxs',
      color: u.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(M.Z, {
      variant: 'heading-sm/semibold',
      text: Z.name
    })
  ]
}) : (0, f.Z)(ee) ? (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: ee.name
}) : (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: ee.details
}),
er = () => ee.type === w.IIU.HANG_STATUS ? null : (0, h.Z)(ee) ? (0, r.jsx)(M.Z, {
  variant: 'text-xs/normal',
  title: ee.state,
  text: G.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
    artists: ee.state,
    artistsHook: (e, t) => {
      var n;
      return (0, r.jsx)(y.Z, {
        artists: null !== (n = ee.state) && void 0 !== n ? n : '',
        linkClassName: k.link,
        canOpen: null != ee.sync_id,
        onOpenSpotifyArtist: e => z(ee, i.id, e)
      }, t);
    }
  })
}) : (0, m.Z)(ee) && null != H ? (0, r.jsx)(M.Z, {
  variant: 'text-xs/normal',
  text: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: H.name
  }),
  onClick: H.id === Q ? void 0 : () => {
    (0, R.X)(H.id), null == W || W();
  }
}) : (0, f.Z)(ee) ? (0, r.jsx)(M.Z, {
  variant: 'text-xs/normal',
  text: ee.details
}) : (0, r.jsx)(M.Z, {
  text: ee.state,
  variant: 'text-xs/normal'
}),
ei = () => {
  var e, t;
  if ((0, h.Z)(ee) && (null === (e = ee.assets) || void 0 === e ? void 0 : e.large_text) != null) {
    let e = ee.assets.large_text,
      t = null == ee.sync_id ? () => e : (t, n) => (0, r.jsx)(u.Clickable, {
        className: k.link,
        onClick: () => q(ee, i.id),
        children: e
      }, n);
    return (0, r.jsx)(M.Z, {
      title: e,
      variant: 'text-xs/normal',
      text: G.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
        album: e,
        albumHook: t
      })
    });
  }
  return (0, f.Z)(ee) ? (0, r.jsxs)('div', {
    className: k.gameState,
    children: [
      (0, r.jsx)(M.Z, {
        variant: 'text-xs/normal',
        text: ee.state
      }),
      ea()
    ]
  }) : (0, r.jsx)(M.Z, {
    text: null === (t = ee.assets) || void 0 === t ? void 0 : t.large_text,
    variant: 'text-xs/normal'
  });
},
ea = () => {
  var e, t, n, i;
  return (0, f.Z)(ee) ? (null === (e = ee.party) || void 0 === e ? void 0 : e.size) == null && ee.application_id === x.Zc ? (0, r.jsx)(M.Z, {
    variant: 'text-xs/normal',
    text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: '0',
      max: null !== (i = null == V ? void 0 : V.getMaxParticipants()) && void 0 !== i ? i : 0
    })
  }) : (null === (t = ee.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = ee.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsx)(M.Z, {
    variant: 'text-xs/normal',
    text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: ee.party.size[0],
      max: ee.party.size[1]
    })
  }) : null : null;
},
es = () => {
  if (!(0, f.Z)(ee) || (0, h.Z)(ee))
    return null;
  let {
    timestamps: e
  } = ee;
  return null == e ? null : (0, _.Z)(ee) ? (0, r.jsx)(F, {
    timestamps: e
  }) : (0, r.jsx)(O.ZP, {
    start: e.start,
    location: O.ZP.Locations.USER_ACTIVITY,
    className: s()(k.textXsNormal, k.textEllipsis),
    isApplicationStreaming: null != H
  });
},
eo = () => {
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
el = () => i.id === a.id ? null : (0, r.jsx)('div', {
  className: k.actions,
  children: (0, r.jsx)(L.Z, {
    activity: ee,
    user: i,
    currentUser: a,
    onAction: j
  })
});
  return (0, r.jsxs)('div', {
className: s()(k.card, Y),
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
            var e, t, a, o, l, u, c, f, m, I;
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
                src: d.Z.get(w.ABu.XBOX).icon.customPNG,
                alt: G.Z.Messages.XBOX,
                className: T
              });
            if (!(0, _.Z)(ee) && ee.type === w.IIU.PLAYING && !i.bot)
              return (0, r.jsx)(g.Z, {
                game: V,
                className: T
              });
            if ((null === (e = ee.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = ee.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let S = X === U.y0.FULL_SIZE ? 64 : 48,
              A = X === U.y0.FULL_SIZE ? 30 : 20;
            return (null === (a = ee.assets) || void 0 === a ? void 0 : a.large_image) == null ? (0, r.jsx)(b.Z, {
              text: ee.assets.small_text,
              alt: null !== (l = ee.assets.small_text) && void 0 !== l ? l : '',
              src: B(ee.application_id, ee.assets.small_image, S),
              className: s()(k.largeImage, T)
            }) : (0, h.Z)(ee) ? (0, r.jsx)(b.Z, {
              text: ee.assets.large_text,
              alt: null !== (u = ee.assets.large_text) && void 0 !== u ? u : '',
              src: B(ee.application_id, ee.assets.large_image, S),
              className: s()(k.largeImage, T),
              onClick: () => q(ee, i.id)
            }) : (0, E.Z)(ee) ? (0, r.jsx)(b.Z, {
              text: ee.assets.large_text,
              alt: null !== (c = ee.assets.large_text) && void 0 !== c ? c : '',
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
              (0, r.jsxs)('div', {
                children: [
                  en(),
                  er(),
                  ei(),
                  es()
                ]
              }),
              eo()
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
                  er(),
                  ei(),
                  es()
                ]
              }),
              eo()
            ]
          }),
          X === U.y0.FULL_SIZE && el()
        ]
      }),
      null == H || null == Z ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: k.voiceChannelDivider
          }),
          (0, r.jsx)(P.Z, {
            guild: H,
            channel: Z,
            onClose: W
          })
        ]
      }),
      X !== U.y0.FULL_SIZE && el()
    ]
  })
]
  });
}
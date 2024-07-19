n.d(t, {
  Z: function() {
return Y;
  }
}), n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(278074),
  l = n(442837),
  u = n(780384),
  c = n(481060),
  d = n(438139),
  _ = n(410030),
  E = n(726542),
  f = n(122810),
  h = n(394821),
  p = n(833664),
  m = n(503438),
  I = n(802856),
  T = n(420660),
  g = n(39628),
  S = n(314091),
  A = n(925329),
  N = n(810568),
  v = n(168524),
  O = n(833858),
  R = n(223135),
  C = n(707409),
  y = n(769654),
  D = n(914010),
  L = n(936195),
  b = n(652853),
  M = n(979038),
  P = n(60241),
  U = n(373826),
  w = n(315324),
  x = n(228168),
  G = n(981631),
  k = n(701488),
  B = n(689938),
  F = n(692184);
let {
  getAssetImage: V
} = n(81063), H = (0, d.Z)(class extends i.PureComponent {
  render() {
return (0, r.jsx)('div', {
  className: s()(F.textXsNormal, F.textEllipsis),
  children: this.props.message
});
  }
});

function Z(e) {
  let {
activity: t
  } = e, n = (0, _.ZP)(), i = (0, S.ZH)(t);
  return null == i ? null : (0, r.jsx)('img', {
alt: '',
src: (0, u.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
className: F.platformIcon
  });
}

function Y(e) {
  var t;
  let {
user: i,
currentUser: a,
activity: u,
application: d,
activityGuild: _,
channel: S,
className: Y,
onAction: j,
onClose: W,
onOpenSpotifyTrack: K,
onOpenSpotifyArtist: z,
onOpenSpotifyAlbum: q
  } = e, Q = (0, l.e7)([D.Z], () => D.Z.getGuildId()), {
profileType: X
  } = (0, b.z)(), $ = {
[F.biteSize]: X === x.y0.BITE_SIZE,
[F.fullSize]: X === x.y0.FULL_SIZE,
[F.panel]: X === x.y0.PANEL
  }, J = null != _ && (null == u ? void 0 : u.type) !== G.IIU.PLAYING && (null == u ? void 0 : u.type) !== G.IIU.WATCHING && (null == u ? void 0 : u.type) !== G.IIU.LISTENING && (null == u ? void 0 : u.type) !== G.IIU.HANG_STATUS, ee = J ? {
type: G.IIU.PLAYING,
name: B.Z.Messages.SHARING_SCREEN
  } : u, et = (0, v.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == d ? void 0 : d.id) && void 0 !== t ? t : null == ee ? void 0 : ee.application_id,
source: N.m1.UserProfile,
sourceUserId: i.id,
trackEntryPointImpression: !0
  });
  if (null == ee || ee.type === G.IIU.CUSTOM_STATUS || X !== x.y0.BITE_SIZE && X !== x.y0.FULL_SIZE && X !== x.y0.PANEL)
return null;
  let en = () => ee.type === G.IIU.HANG_STATUS ? (0, r.jsx)(U.Z, {
  variant: 'heading-sm/semibold',
  text: (0, O.O8)(ee)
}) : (0, m.Z)(ee) && null != ee.sync_id && null != ee.details ? (0, r.jsx)(U.Z, {
  variant: 'heading-sm/semibold',
  text: ee.details,
  onClick: () => K(ee)
}) : (0, T.Z)(ee) && null != S ? (0, r.jsxs)('div', {
  className: F.voiceChannelInfo,
  children: [
    (0, r.jsx)(c.VoiceNormalIcon, {
      size: 'xxs',
      color: c.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(U.Z, {
      variant: 'heading-sm/semibold',
      text: S.name
    })
  ]
}) : (0, p.Z)(ee) ? (0, r.jsx)(U.Z, {
  variant: 'heading-sm/semibold',
  text: ee.name
}) : (0, r.jsx)(U.Z, {
  variant: 'heading-sm/semibold',
  text: ee.details
}),
er = () => ee.type === G.IIU.HANG_STATUS ? null : (0, m.Z)(ee) ? (0, r.jsx)(U.Z, {
  variant: 'text-xs/normal',
  title: ee.state,
  text: B.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
    artists: ee.state,
    artistsHook: (e, t) => {
      var n;
      return (0, r.jsx)(L.Z, {
        artists: null !== (n = ee.state) && void 0 !== n ? n : '',
        linkClassName: F.link,
        canOpen: null != ee.sync_id,
        onOpenSpotifyArtist: e => z(ee, i.id, e)
      }, t);
    }
  })
}) : (0, T.Z)(ee) && null != _ ? (0, r.jsx)(U.Z, {
  variant: 'text-xs/normal',
  text: B.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: _.name
  }),
  onClick: _.id === Q ? void 0 : () => {
    (0, y.X)(_.id), null == W || W();
  }
}) : (0, p.Z)(ee) ? (0, r.jsx)(U.Z, {
  variant: 'text-xs/normal',
  text: ee.details
}) : (0, r.jsx)(U.Z, {
  text: ee.state,
  variant: 'text-xs/normal'
}),
ei = () => {
  var e, t;
  if ((0, m.Z)(ee) && (null === (e = ee.assets) || void 0 === e ? void 0 : e.large_text) != null) {
    let e = ee.assets.large_text,
      t = null == ee.sync_id ? () => e : (t, n) => (0, r.jsx)(c.Clickable, {
        className: F.link,
        onClick: () => q(ee, i.id),
        children: e
      }, n);
    return (0, r.jsx)(U.Z, {
      title: e,
      variant: 'text-xs/normal',
      text: B.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
        album: e,
        albumHook: t
      })
    });
  }
  return (0, p.Z)(ee) ? (0, r.jsxs)('div', {
    className: F.gameState,
    children: [
      (0, r.jsx)(U.Z, {
        variant: 'text-xs/normal',
        text: ee.state
      }),
      ea()
    ]
  }) : (0, r.jsx)(U.Z, {
    text: null === (t = ee.assets) || void 0 === t ? void 0 : t.large_text,
    variant: 'text-xs/normal'
  });
},
ea = () => {
  var e, t, n, i;
  return (0, p.Z)(ee) ? (null === (e = ee.party) || void 0 === e ? void 0 : e.size) == null && ee.application_id === k.Zc ? (0, r.jsx)(U.Z, {
    variant: 'text-xs/normal',
    text: B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: '0',
      max: null !== (i = null == d ? void 0 : d.getMaxParticipants()) && void 0 !== i ? i : 0
    })
  }) : (null === (t = ee.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = ee.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsx)(U.Z, {
    variant: 'text-xs/normal',
    text: B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: ee.party.size[0],
      max: ee.party.size[1]
    })
  }) : null : null;
},
es = () => {
  if (!(0, p.Z)(ee) || (0, m.Z)(ee))
    return null;
  let {
    timestamps: e
  } = ee;
  return null == e ? null : (0, f.Z)(ee) ? (0, r.jsx)(H, {
    timestamps: e
  }) : (0, r.jsx)(C.ZP, {
    start: e.start,
    location: C.ZP.Locations.USER_ACTIVITY,
    className: s()(F.textXsNormal, F.textEllipsis),
    isApplicationStreaming: null != _
  });
},
eo = () => {
  if (!(0, m.Z)(ee))
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
  return null == t || null == n ? null : (0, r.jsx)(g.Z, {
    start: t,
    end: n,
    className: s()(F.timeBar, $),
    themed: !0
  });
},
el = () => i.id === a.id ? null : (0, r.jsx)('div', {
  className: F.actions,
  children: (0, r.jsx)(M.Z, {
    activity: ee,
    user: i,
    currentUser: a,
    onAction: j
  })
});
  return (0, r.jsxs)('div', {
className: s()(F.card, Y),
children: [
  (() => {
    let e = J ? B.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)(ee.type).with(G.IIU.PLAYING, () => B.Z.Messages.USER_ACTIVITY_PLAYING).with(G.IIU.STREAMING, () => B.Z.Messages.USER_ACTIVITY_STREAMING).with(G.IIU.LISTENING, () => B.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(G.IIU.WATCHING, () => B.Z.Messages.USER_ACTIVITY_WATCHING).with(G.IIU.HANG_STATUS, () => B.Z.Messages.USER_ACTIVITY_CURRENTLY).with(G.IIU.COMPETING, () => B.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    return null == e ? null : (0, r.jsx)(c.Heading, {
      variant: 'text-xs/medium',
      color: 'header-primary',
      children: e
    });
  })(),
  (0, r.jsxs)('div', {
    className: F.body,
    children: [
      (0, r.jsxs)('div', {
        className: s()(F.content, $),
        children: [
          (() => {
            var e, t, a, o, l, u, c, _, p, T;
            let g = s()(F.imageSize, {
              [F.fullSize]: X === x.y0.FULL_SIZE
            });
            if (ee.type === G.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: s()(F.hangStatusIconBackground, g),
                children: (0, r.jsx)(R.Z, {
                  hangStatusActivity: ee,
                  className: F.hangStatusIcon
                })
              });
            if (J)
              return (0, r.jsx)(P.Z, {
                src: n(132399),
                alt: B.Z.Messages.FORM_LABEL_SCREENSHARE,
                className: g
              });
            if ((0, I.Z)(ee))
              return (0, r.jsx)(P.Z, {
                src: E.Z.get(G.ABu.XBOX).icon.customPNG,
                alt: B.Z.Messages.XBOX,
                className: g
              });
            if (!(0, f.Z)(ee) && ee.type === G.IIU.PLAYING && !i.bot)
              return (0, r.jsx)(A.Z, {
                game: d,
                className: g
              });
            if ((null === (e = ee.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = ee.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let S = X === x.y0.FULL_SIZE ? 64 : 48,
              N = X === x.y0.FULL_SIZE ? 30 : 20;
            return (null === (a = ee.assets) || void 0 === a ? void 0 : a.large_image) == null ? (0, r.jsx)(P.Z, {
              text: ee.assets.small_text,
              alt: null !== (l = ee.assets.small_text) && void 0 !== l ? l : '',
              src: V(ee.application_id, ee.assets.small_image, S),
              className: s()(F.largeImage, g)
            }) : (0, m.Z)(ee) ? (0, r.jsx)(P.Z, {
              text: ee.assets.large_text,
              alt: null !== (u = ee.assets.large_text) && void 0 !== u ? u : '',
              src: V(ee.application_id, ee.assets.large_image, S),
              className: s()(F.largeImage, g),
              onClick: () => q(ee, i.id)
            }) : (0, h.Z)(ee) ? (0, r.jsx)(P.Z, {
              text: ee.assets.large_text,
              alt: null !== (c = ee.assets.large_text) && void 0 !== c ? c : '',
              src: V(ee.application_id, ee.assets.large_image, X === x.y0.FULL_SIZE ? 86 : 64),
              className: s()(F.largeImage, g, F.crunchyroll)
            }) : (null === (o = ee.assets) || void 0 === o ? void 0 : o.small_image) == null || ee.type !== G.IIU.PLAYING ? (0, r.jsx)(P.Z, {
              text: ee.assets.large_text,
              alt: null !== (_ = ee.assets.large_text) && void 0 !== _ ? _ : '',
              src: V(ee.application_id, ee.assets.large_image, S),
              className: s()(F.largeImage, g)
            }) : (0, r.jsxs)('div', {
              className: s()(F.imageContainer, g),
              children: [
                (0, r.jsx)(P.Z, {
                  text: ee.assets.large_text,
                  alt: null !== (p = ee.assets.large_text) && void 0 !== p ? p : '',
                  src: V(ee.application_id, ee.assets.large_image, S),
                  className: s()(F.largeImage, g)
                }),
                (0, r.jsx)(P.Z, {
                  text: ee.assets.small_text,
                  alt: null !== (T = ee.assets.small_text) && void 0 !== T ? T : '',
                  src: V(ee.application_id, ee.assets.small_image, N),
                  className: s()(F.smallImage, $)
                })
              ]
            });
          })(),
          null == et ? (0, r.jsxs)('div', {
            className: F.details,
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
            className: F.details,
            children: [
              (0, r.jsxs)(c.Clickable, {
                className: F.clickable,
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
          X === x.y0.FULL_SIZE && el()
        ]
      }),
      null == _ || null == S ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: F.voiceChannelDivider
          }),
          (0, r.jsx)(w.Z, {
            guild: _,
            channel: S,
            onClose: W
          })
        ]
      }),
      X !== x.y0.FULL_SIZE && el()
    ]
  }),
  (0, r.jsx)(Z, {
    activity: ee
  })
]
  });
}
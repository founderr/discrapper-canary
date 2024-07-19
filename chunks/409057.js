n.d(t, {
  Z: function() {
return H;
  }
}), n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(278074),
  l = n(780384),
  u = n(481060),
  c = n(438139),
  d = n(410030),
  _ = n(726542),
  E = n(122810),
  f = n(394821),
  h = n(833664),
  p = n(503438),
  m = n(802856),
  I = n(420660),
  T = n(39628),
  g = n(925329),
  S = n(810568),
  A = n(168524),
  N = n(565138),
  v = n(833858),
  O = n(223135),
  R = n(707409),
  C = n(769654),
  y = n(750154),
  D = n(936195),
  L = n(652853),
  b = n(979038),
  M = n(60241),
  P = n(623847),
  U = n(228168),
  w = n(981631),
  x = n(701488),
  G = n(689938),
  k = n(692184);
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
  let {
activity: t
  } = e, n = (0, d.ZP)(), i = function(e) {
let {
  activity: t
} = e, n = null;
return (0, p.Z)(t) && (n = w.ABu.SPOTIFY), null != t.platform && [
  w.M7m.PS4,
  w.M7m.PS5
].includes(t.platform) && (n = w.ABu.PLAYSTATION), n;
  }({
activity: t
  });
  if (null == i)
return null;
  let a = _.Z.get(i);
  return (0, r.jsx)('img', {
alt: '',
src: (0, l.ap)(n) ? a.icon.lightSVG : a.icon.darkSVG,
className: k.platformIcon
  });
}

function H(e) {
  var t, i;
  let {
user: a,
activity: l,
application: c,
activityGuild: d,
channel: H,
showChannelDetails: Z,
currentUser: Y,
onAction: j,
className: W,
onOpenSpotifyTrack: K,
onOpenSpotifyArtist: z,
onOpenSpotifyAlbum: q,
onGameProfileOpened: Q
  } = e, {
profileType: X
  } = (0, L.z)(), $ = {
[k.biteSize]: X === U.y0.BITE_SIZE,
[k.fullSize]: X === U.y0.FULL_SIZE,
[k.panel]: X === U.y0.PANEL
  }, J = null != d && (null == l ? void 0 : l.type) !== w.IIU.PLAYING && (null == l ? void 0 : l.type) !== w.IIU.WATCHING && (null == l ? void 0 : l.type) !== w.IIU.LISTENING && (null == l ? void 0 : l.type) !== w.IIU.HANG_STATUS, ee = J ? {
type: w.IIU.PLAYING,
name: G.Z.Messages.SHARING_SCREEN
  } : l, et = (0, A.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : null == ee ? void 0 : ee.application_id,
source: S.m1.UserProfile,
sourceUserId: a.id,
trackEntryPointImpression: !0
  });
  if (null == ee || ee.type === w.IIU.CUSTOM_STATUS || X !== U.y0.BITE_SIZE && X !== U.y0.FULL_SIZE && X !== U.y0.PANEL)
return null;
  let en = (e => {
  let t;
  let {
    details: n,
    state: i
  } = e, o = n, l = n;
  if (e.type === w.IIU.CUSTOM_STATUS)
    o = i;
  else if (e.type === w.IIU.HANG_STATUS)
    o = null != d ? G.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: d.name
    }) : null, t = null != d ? () => {
      (0, C.X)(d.id);
    } : void 0;
  else if (!(0, h.Z)(e)) {
    if (l = o = i, (0, p.Z)(e) && null != i)
      o = G.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: l,
        artistsHook: (t, n) => (0, r.jsx)(D.Z, {
          artists: i,
          linkClassName: k.textLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: t => z(e, a.id, t)
        }, n)
      });
    else if ((0, y.dS)(e)) {
      var c;
      o = null === (c = e.assets) || void 0 === c ? void 0 : c.small_text;
    }
  }
  return null == o || 0 === o.length ? null : ((0, I.Z)(e) && (o = G.Z.Messages.STREAMER_PLAYING.format({
    game: o
  })), null != t) ? (0, r.jsx)(u.Clickable, {
    onClick: t,
    title: null != l ? l : void 0,
    className: s()(k.textSmSemibold, k.textEllipsis, k.textLink),
    children: o
  }) : (0, r.jsx)('div', {
    title: null != l ? l : void 0,
    className: s()(k.textXsNormal, {
      [k.textEllipsis]: !(0, I.Z)(e) && !(0, p.Z)(e)
    }),
    children: o
  });
})(ee),
er = ((e, t) => {
  var n, i;
  let o;
  let {
    state: l,
    party: c,
    assets: d
  } = e, _ = l, E = _;
  return (!(0, h.Z)(e) && (E = _ = null == d ? void 0 : d.large_text, (0, p.Z)(e) && null != _ && (_ = G.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
    album: E,
    albumHook: (t, n) => null != e.sync_id && null != E ? (0, r.jsx)(u.Anchor, {
      className: k.textLink,
      onClick: () => q(e, a.id),
      children: E
    }, n) : E
  }))), null != _ && 0 !== _.length && e.type !== w.IIU.CUSTOM_STATUS || (0, y.dS)(e)) ? ((null == c ? void 0 : c.size) == null && [x.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? o = G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: '0',
    max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
  }) : (0, y.dS)(e) && (null == c ? void 0 : c.size) != null ? o = G.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
    numSpeakers: c.size[0],
    numListeners: c.size[1] - c.size[0]
  }) : (null == c ? void 0 : c.size) != null && c.size.length >= 2 && (o = G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: c.size[0],
    max: c.size[1]
  })), (0, r.jsxs)('div', {
    className: s()(k.textXsNormal, k.textEllipsis),
    children: [
      (0, r.jsx)('span', {
        title: E,
        children: _
      }),
      null != o ? (0, r.jsxs)('span', {
        children: [
          ' ',
          o
        ]
      }) : null
    ]
  })) : null;
})(ee, c),
ei = (e => {
  if (!(0, h.Z)(e) || (0, p.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  return null == t ? null : (0, E.Z)(e) ? (0, r.jsx)(F, {
    timestamps: t
  }) : (0, r.jsx)(R.ZP, {
    start: t.start,
    location: R.ZP.Locations.USER_ACTIVITY,
    className: s()(k.textXsNormal, k.textEllipsis),
    isApplicationStreaming: null != d
  });
})(ee);
  let ea = (i = ee, Z && null != d ? null == H ? (0, r.jsx)('div', {
  className: s()(k.textXsNormal, {
    [k.textEllipsis]: !(0, I.Z)(i) && !(0, p.Z)(i)
  }),
  children: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: d.name
  })
}) : (0, r.jsxs)('div', {
  className: s()(k.guildDetails, k.textXsNormal, {
    [k.textEllipsis]: !(0, I.Z)(i) && !(0, p.Z)(i)
  }),
  children: [
    (0, r.jsx)(N.Z, {
      guild: d,
      size: N.Z.Sizes.SMOL,
      className: k.guildIcon
    }),
    (0, r.jsx)(u.ChevronSmallRightIcon, {
      size: 'xxs',
      color: 'currentColor'
    }),
    (0, r.jsxs)('div', {
      className: k.voiceChannelInfo,
      children: [
        (0, r.jsx)(u.VoiceNormalIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        (0, r.jsx)(u.Text, {
          variant: 'text-xs/normal',
          children: null == H ? void 0 : H.name
        })
      ]
    })
  ]
}) : null),
es = (e => {
  if (!(0, p.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  if (null == t)
    return null;
  let {
    start: n,
    end: i
  } = t;
  return null == n || null == i ? null : (0, r.jsx)(T.Z, {
    start: n,
    end: i,
    className: s()(k.timeBar, $),
    themed: !0
  });
})(ee),
eo = a.id !== Y.id ? (0, r.jsx)(b.Z, {
  activity: ee,
  user: a,
  currentUser: Y,
  onAction: j
}) : null;
  return (0, r.jsxs)('div', {
className: s()(k.card, W),
children: [
  (0, r.jsxs)(u.HeadingLevel, {
    children: [
      (() => {
        let e = J ? G.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)(ee.type).with(w.IIU.PLAYING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).with(w.IIU.STREAMING, () => G.Z.Messages.USER_ACTIVITY_STREAMING).with(w.IIU.LISTENING, () => G.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(w.IIU.WATCHING, () => G.Z.Messages.USER_ACTIVITY_WATCHING).with(w.IIU.HANG_STATUS, () => G.Z.Messages.USER_ACTIVITY_CURRENTLY).with(w.IIU.COMPETING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
        return null == e ? null : (0, r.jsx)(u.Heading, {
          variant: 'text-xs/medium',
          color: 'header-primary',
          children: e
        });
      })(),
      (0, r.jsxs)('div', {
        className: s()(k.body, $),
        children: [
          (0, r.jsxs)('div', {
            className: k.content,
            children: [
              (() => {
                var e, t, i, o, l, u, d, h, I, T;
                let S = s()(k.imageSize, {
                  [k.fullSize]: X === U.y0.FULL_SIZE
                });
                if (ee.type === w.IIU.HANG_STATUS)
                  return (0, r.jsx)('div', {
                    className: s()(k.hangStatusIconBackground, S),
                    children: (0, r.jsx)(O.Z, {
                      hangStatusActivity: ee,
                      className: k.hangStatusIcon
                    })
                  });
                if (J)
                  return (0, r.jsx)(M.Z, {
                    src: n(132399),
                    alt: G.Z.Messages.FORM_LABEL_SCREENSHARE,
                    className: S
                  });
                if ((0, m.Z)(ee))
                  return (0, r.jsx)(M.Z, {
                    src: _.Z.get(w.ABu.XBOX).icon.customPNG,
                    alt: G.Z.Messages.XBOX,
                    className: S
                  });
                if (!(0, E.Z)(ee) && ee.type === w.IIU.PLAYING && !a.bot)
                  return (0, r.jsx)(g.Z, {
                    game: c,
                    className: S
                  });
                if ((null === (e = ee.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = ee.assets) || void 0 === t ? void 0 : t.small_image) == null)
                  return null;
                let A = X === U.y0.FULL_SIZE ? 64 : 48,
                  N = X === U.y0.FULL_SIZE ? 30 : 20;
                return (null === (i = ee.assets) || void 0 === i ? void 0 : i.large_image) == null ? (0, r.jsx)(M.Z, {
                  text: ee.assets.small_text,
                  alt: null !== (l = ee.assets.small_text) && void 0 !== l ? l : '',
                  src: B(ee.application_id, ee.assets.small_image, A),
                  className: s()(k.largeImage, S)
                }) : (0, p.Z)(ee) ? (0, r.jsx)(M.Z, {
                  text: ee.assets.large_text,
                  alt: null !== (u = ee.assets.large_text) && void 0 !== u ? u : '',
                  src: B(ee.application_id, ee.assets.large_image, A),
                  className: s()(k.largeImage, S),
                  onClick: () => q(ee, a.id)
                }) : (0, f.Z)(ee) ? (0, r.jsx)(M.Z, {
                  text: ee.assets.large_text,
                  alt: null !== (d = ee.assets.large_text) && void 0 !== d ? d : '',
                  src: B(ee.application_id, ee.assets.large_image, X === U.y0.FULL_SIZE ? 86 : 64),
                  className: s()(k.largeImage, S, k.crunchyroll)
                }) : (null === (o = ee.assets) || void 0 === o ? void 0 : o.small_image) == null || ee.type !== w.IIU.PLAYING ? (0, r.jsx)(M.Z, {
                  text: ee.assets.large_text,
                  alt: null !== (h = ee.assets.large_text) && void 0 !== h ? h : '',
                  src: B(ee.application_id, ee.assets.large_image, A),
                  className: s()(k.largeImage, S)
                }) : (0, r.jsxs)('div', {
                  className: s()(k.imageContainer, S),
                  children: [
                    (0, r.jsx)(M.Z, {
                      text: ee.assets.large_text,
                      alt: null !== (I = ee.assets.large_text) && void 0 !== I ? I : '',
                      src: B(ee.application_id, ee.assets.large_image, A),
                      className: s()(k.largeImage, S)
                    }),
                    (0, r.jsx)(M.Z, {
                      text: ee.assets.small_text,
                      alt: null !== (T = ee.assets.small_text) && void 0 !== T ? T : '',
                      src: B(ee.application_id, ee.assets.small_image, N),
                      className: s()(k.smallImage, S)
                    })
                  ]
                });
              })(),
              (0, r.jsxs)('div', {
                className: k.details,
                children: [
                  (0, r.jsxs)(u.Clickable, {
                    className: null != et ? k.clickable : void 0,
                    onClick: null != et ? () => {
                      et(), null == Q || Q();
                    } : void 0,
                    children: [
                      (() => {
                        let e = X === U.y0.FULL_SIZE ? void 0 : 1;
                        return ee.type === w.IIU.HANG_STATUS ? (0, r.jsx)(P.Z, {
                          name: (0, v.O8)(ee),
                          lineClamp: e
                        }) : (0, p.Z)(ee) && null != ee.sync_id && null != ee.details ? (0, r.jsx)(P.Z, {
                          name: ee.details,
                          lineClamp: e,
                          onClick: () => K(ee)
                        }) : ee.type !== w.IIU.PLAYING ? (0, r.jsx)(P.Z, {
                          name: ee.details,
                          lineClamp: e
                        }) : (0, r.jsx)(P.Z, {
                          name: ee.name,
                          lineClamp: e
                        });
                      })(),
                      en,
                      er,
                      ei
                    ]
                  }),
                  es,
                  ea
                ]
              })
            ]
          }),
          (0, r.jsx)('div', {
            className: k.actions,
            children: eo
          })
        ]
      })
    ]
  }),
  (0, r.jsx)(V, {
    activity: ee
  })
]
  });
}
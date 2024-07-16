n.d(t, {
  Z: function() {
return W;
  }
}), n(789020);
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(780384),
  c = n(481060),
  d = n(438139),
  _ = n(410030),
  E = n(726542),
  f = n(740265),
  p = n(122810),
  h = n(833664),
  m = n(503438),
  I = n(802856),
  T = n(420660),
  g = n(39628),
  S = n(810568),
  A = n(168524),
  N = n(833858),
  v = n(223135),
  O = n(769654),
  R = n(750154),
  C = n(285952),
  y = n(366695),
  D = n(346656),
  L = n(514342),
  b = n(366966),
  M = n(936195),
  P = n(806519),
  U = n(768581),
  w = n(630388),
  x = n(153066),
  G = n(981631),
  k = n(701488),
  B = n(689938),
  F = n(692184);
(i = r || (r = {})).USER_POPOUT = 'UserPopout', i.USER_POPOUT_V2 = 'UserPopoutV2', i.ACTIVITY_FEED = 'ActivityFeed', i.PROFILE = 'Profile', i.PROFILE_V2 = 'ProfileV2', i.STREAM_PREVIEW = 'StreamPreview', i.VOICE_CHANNEL = 'VoiceChannel', i.SIMPLIFIED_PROFILE = 'SimplifiedProfile', i.BITE_SIZE_POPOUT = 'BiteSizePopout';
let V = {
StreamPreview: [
  108,
  60
],
UserPopout: [
  108,
  60
],
UserPopoutV2: [
  108,
  60
],
BiteSizePopout: [
  108,
  60
],
VoiceChannel: [
  108,
  60
],
Profile: [
  162,
  90
],
ProfileV2: [
  162,
  90
],
SimplifiedProfile: [
  162,
  90
],
ActivityFeed: [
  900,
  500
]
  },
  {
getAssetImage: H
  } = n(81063),
  Z = (0, d.Z)(class extends o.PureComponent {
render() {
  return (0, a.jsx)('div', {
    className: F.timestamp,
    children: this.props.message
  });
}
  });

function Y(e) {
  let {
activity: t
  } = e, n = null;
  return (0, m.Z)(t) && (n = G.ABu.SPOTIFY), null != t.platform && [
G.M7m.PS4,
G.M7m.PS5
  ].includes(t.platform) && (n = G.ABu.PLAYSTATION), n;
}

function j(e) {
  let {
activity: t
  } = e, n = (0, _.ZP)(), r = Y({
activity: t
  });
  if (null == r)
return null;
  let i = E.Z.get(r);
  return (0, a.jsx)('img', {
alt: '',
src: (0, u.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
className: F.platformIcon
  });
}

function W(e) {
  var t, n, r;
  let i, {
  type: s,
  user: u,
  activity: d,
  application: _,
  activityGuild: W,
  channel: K,
  hideHeader: z,
  hideName: q,
  showReactions: Q,
  showChannelDetails: X,
  className: $,
  renderHeaderAccessory: J,
  renderActions: ee,
  onOpenSpotifyTrack: et,
  onOpenSpotifyArtist: en,
  onOpenSpotifyAlbum: er,
  onGameProfileOpened: ei
} = e,
ea = null != W && (null == d ? void 0 : d.type) !== G.IIU.PLAYING && (null == d ? void 0 : d.type) !== G.IIU.WATCHING && (null == d ? void 0 : d.type) !== G.IIU.LISTENING && (null == d ? void 0 : d.type) !== G.IIU.HANG_STATUS ? {
  type: G.IIU.PLAYING,
  name: B.Z.Messages.SHARING_SCREEN
} : d,
eo = (0, A.Z)({
  location: 'UserProfileActivityCard',
  applicationId: null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : null == ea ? void 0 : ea.application_id,
  source: S.m1.UserProfile,
  sourceUserId: u.id,
  trackEntryPointImpression: !0
});
  if (null == ea || ea.type === G.IIU.CUSTOM_STATUS)
return null;
  let es = (0, T.Z)(ea) && ('Profile' === s || 'ProfileV2' === s),
el = (0, T.Z)(ea) && 'ActivityFeed' === s,
eu = (e, t) => (0, x.l)(F, e, s, t),
ec = 'UserPopout' === s || 'UserPopoutV2' === s || 'BiteSizePopout' === s,
ed = 'Profile' === s || 'ProfileV2' === s || 'SimplifiedProfile' === s,
e_ = 'ActivityFeed' === s,
eE = 'StreamPreview' === s,
ef = !1;
  if ((0, I.Z)(ea))
i = (0, a.jsx)('div', {
  className: F.assets,
  children: (0, a.jsx)('img', {
    alt: '',
    src: E.Z.get(G.ABu.XBOX).icon.customPNG,
    className: l()(eu('assetsLargeImage', 'Xbox'))
  })
}), ef = !0;
  else if (null == (i = (e => {
  var t, n, r;
  let i, d;
  if (e.type === G.IIU.HANG_STATUS)
    return (0, a.jsx)('div', {
      className: F.assets,
      children: (0, a.jsx)(v.Z, {
        hangStatusActivity: e,
        className: l()(F.assetsHangStatus, eu('assetsSmallImage', 'WithoutLargeImage'))
      })
    });
  let {
    assets: _,
    application_id: E
  } = e;
  if (null == _ || null == _.large_image && null == _.small_image)
    return null;
  (0, T.Z)(e) && (i = V[s]);
  let f = (0, m.Z)(e),
    p = null != _.large_image ? (0, a.jsx)('img', {
      alt: null !== (t = _.large_text) && void 0 !== t ? t : '',
      src: H(E, _.large_image, null != i ? i : [
        k.Si.LARGE,
        k.Si.LARGE
      ]),
      className: l()(eu('assetsLargeImage', es || el ? G.ABu.TWITCH : ''), {
        [null !== (n = eu('assetsLargeMask')) && void 0 !== n ? n : '']: null != _.small_image
      }, {
        [F.assetsLargeImageSpotify]: f
      })
    }) : null;
  if (f)
    p = (0, a.jsx)(c.Anchor, {
      onClick: () => er(e, u.id),
      children: p
    });
  else if ((0, R.dS)(e)) {
    let t = (0, R.rq)(e);
    if (null == t)
      return null;
    p = (0, a.jsx)(P.ZP, {
      mask: P.ZP.Masks.SQUIRCLE,
      width: k.Si.SMALL,
      height: k.Si.SMALL,
      children: (0, a.jsx)('img', {
        src: null !== (r = U.ZP.getGuildIconURL({
          id: t.guildId,
          icon: _.small_image,
          size: k.Si.SMALL
        })) && void 0 !== r ? r : void 0,
        className: F.assetsLargeImageVoiceChannel,
        alt: ''
      })
    });
  }
  return (el && null != e.url && '' !== e.url && (p = (0, a.jsxs)('div', {
    className: F.twitchImageContainer,
    children: [
      (0, a.jsxs)('div', {
        className: F.twitchImageOverlay,
        children: [
          (0, a.jsx)(c.H, {
            className: F.streamName,
            children: e.name
          }),
          (0, a.jsx)('div', {
            className: F.streamGame,
            children: B.Z.Messages.STREAMER_PLAYING.format({
              game: e.details
            })
          })
        ]
      }),
      (0, a.jsx)(c.Anchor, {
        className: F.twitchBackgroundImage,
        href: e.url,
        children: p
      })
    ]
  })), !(0, R.dS)(e) && null != _.small_image && (d = (0, a.jsx)(c.Tooltip, {
    text: '' !== _.small_text ? _.small_text : null,
    position: 'top',
    children: e => {
      var t;
      return (0, a.jsx)('img', {
        alt: null !== (t = _.small_text) && void 0 !== t ? t : '',
        src: H(E, _.small_image, [
          k.Si.SMALL,
          k.Si.SMALL
        ]),
        className: eu('assetsSmallImage', null == p ? 'WithoutLargeImage' : void 0),
        ...e
      });
    }
  })), null == p) ? (0, a.jsx)('div', {
    className: F.assets,
    children: d
  }) : (0, a.jsxs)('div', {
    className: F.assets,
    children: [
      (0, a.jsx)(c.Tooltip, {
        text: null != _.large_text ? _.large_text : null,
        position: 'top',
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != p ? o.cloneElement(p, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null;
        }
      }),
      d
    ]
  });
})(ea))) {
;
ef = null != (i = null != (n = ea).assets || (0, p.Z)(n) || n.type !== G.IIU.PLAYING || 'ActivityFeed' === s || u.bot ? null : null == _ && null != W ? (0, a.jsx)('div', {
  className: l()(F.gameIcon, F.screenshareIcon)
}) : (0, a.jsx)(y.Z, {
  className: F.gameIcon,
  game: _
}));
  }
  let ep = (e => {
  if (q)
    return null;
  let t = (0, h.Z)(e),
    n = e.name,
    r = n;
  if (e.type === G.IIU.HANG_STATUS ? r = (0, N.O8)(e) : t && null != _ ? r = (0, a.jsx)('span', {
      className: F.activityName,
      children: r
    }) : !t && (n = e.details, r = e.details, (0, m.Z)(e) && null != e.sync_id && null != e.details ? r = (0, a.jsx)(c.Anchor, {
      className: F.bodyLink,
      onClick: () => et(e),
      children: eh
    }) : (0, R.dS)(e) && (r = e.name)), null == r)
    return null;
  let i = null != Y({
    activity: e
  }) && 'BiteSizePopout' === s;
  return (0, a.jsx)(c.Text, {
    title: n,
    variant: 'text-sm/semibold',
    className: l()((0, x.l)(F, 'name', u.bot || es ? 'wrap' : 'normal'), i && F.namePlatformIconMarginBiteSizePopout),
    children: r
  });
})(ea),
eh = (e => {
  let t;
  let {
    details: n,
    state: r
  } = e, i = n, o = n;
  if (e.type === G.IIU.CUSTOM_STATUS)
    i = r;
  else if (e.type === G.IIU.HANG_STATUS)
    i = null != W ? B.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: W.name
    }) : null, t = null != W ? () => {
      (0, O.X)(W.id);
    } : void 0;
  else if (!(0, h.Z)(e)) {
    if (o = i = r, (0, m.Z)(e) && null != r)
      i = B.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: o,
        artistsHook: (t, n) => (0, a.jsx)(M.Z, {
          artists: r,
          linkClassName: F.bodyLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: t => en(e, u.id, t)
        }, n)
      });
    else if ((0, R.dS)(e)) {
      var s;
      i = null === (s = e.assets) || void 0 === s ? void 0 : s.small_text;
    }
  }
  return null == i || 0 === i.length ? null : ((0, T.Z)(e) && (i = B.Z.Messages.STREAMER_PLAYING.format({
    game: i
  })), null != t) ? (0, a.jsx)(c.Clickable, {
    onClick: t,
    title: null != o ? o : void 0,
    className: F.clickableDetails,
    children: i
  }) : (0, a.jsx)('div', {
    title: null != o ? o : void 0,
    className: (0, T.Z)(e) || (0, m.Z)(e) ? F.detailsWrap : F.details,
    children: i
  });
})(ea),
em = ((e, t) => {
  var n, r;
  let i;
  let {
    state: o,
    party: s,
    assets: l
  } = e, d = o, _ = d;
  return (!(0, h.Z)(e) && (_ = d = null == l ? void 0 : l.large_text, (0, m.Z)(e) && null != d && (d = B.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
    album: _,
    albumHook: (t, n) => null != e.sync_id && null != _ ? (0, a.jsx)(c.Anchor, {
      className: F.bodyLink,
      onClick: () => er(e, u.id),
      children: _
    }, n) : _
  }))), null != d && 0 !== d.length && e.type !== G.IIU.CUSTOM_STATUS || (0, R.dS)(e)) ? ((null == s ? void 0 : s.size) == null && [k.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? i = B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: '0',
    max: null !== (r = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== r ? r : 0
  }) : (0, R.dS)(e) && (null == s ? void 0 : s.size) != null ? i = B.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
    numSpeakers: s.size[0],
    numListeners: s.size[1] - s.size[0]
  }) : (null == s ? void 0 : s.size) != null && s.size.length >= 2 && (i = B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: s.size[0],
    max: s.size[1]
  })), (0, a.jsxs)('div', {
    className: F.state,
    children: [
      (0, a.jsx)('span', {
        title: _,
        children: d
      }),
      null != i ? (0, a.jsxs)('span', {
        children: [
          ' ',
          i
        ]
      }) : null
    ]
  })) : null;
})(ea, _),
eI = (e => {
  if (!(0, h.Z)(e) || (0, m.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  return null == t ? null : (0, p.Z)(e) ? (0, a.jsx)(Z, {
    timestamps: t
  }) : (0, a.jsx)(b.ZP, {
    start: t.start,
    location: b.ZP.Locations.USER_ACTIVITY,
    className: F.playTime,
    isApplicationStreaming: null != W
  });
})(ea);
  let eT = (r = ea, X && null != W ? null == K ? (0, a.jsx)('div', {
  className: (0, T.Z)(r) || (0, m.Z)(r) ? F.detailsWrap : F.details,
  children: B.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: W.name
  })
}) : (0, a.jsxs)('div', {
  className: l()((0, T.Z)(r) || (0, m.Z)(r) ? F.detailsWrap : F.details, F.guildDetails),
  children: [
    (0, a.jsx)(D.Z, {
      guild: W,
      size: D.Z.Sizes.SMOL,
      className: F.guildIcon
    }),
    (0, a.jsx)(c.ChevronSmallRightIcon, {
      size: 'xxs',
      color: 'currentColor'
    }),
    (0, a.jsxs)('div', {
      className: F.voiceChannelInfo,
      children: [
        (0, a.jsx)(c.VoiceNormalIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        (0, a.jsx)(c.Text, {
          variant: 'text-xs/normal',
          children: null == K ? void 0 : K.name
        })
      ]
    })
  ]
}) : null),
eg = null != ee ? ee() : null,
eS = (e => {
  if (!(0, m.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  if (null == t)
    return null;
  let {
    start: n,
    end: r
  } = t;
  return null == n || null == r ? null : (0, a.jsx)(g.Z, {
    start: n,
    end: r,
    className: eu('timeBar'),
    themed: 'VoiceChannel' === s || 'UserPopout' === s || 'UserPopoutV2' === s || 'ProfileV2' === s || 'SimplifiedProfile' === s || 'BiteSizePopout' === s
  });
})(ea),
eA = ![
  i,
  ep,
  eh,
  em,
  eI,
  eS,
  eg
].some(e => null != e);
  return (0, a.jsxs)('div', {
className: l()(eu('activity'), $),
children: [
  (e => {
    let t;
    if (z)
      return null;
    let {
      name: n
    } = ea;
    switch (ea.type) {
      case G.IIU.STREAMING:
        t = B.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
          platform: [
            G.ABu.TWITCH,
            G.ABu.YOUTUBE
          ].includes(n.toLowerCase()) ? n : E.Z.get(G.ABu.TWITCH).name
        });
        break;
      case G.IIU.LISTENING:
        t = B.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
          name: n
        });
        break;
      case G.IIU.WATCHING:
        t = B.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
          name: n
        });
        break;
      case G.IIU.PLAYING:
        t = (0, f.Z)(ea);
        break;
      case G.IIU.COMPETING:
        t = B.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
          name: n
        });
    }
    if (null != W) {
      var r;
      t = (0, w.yE)(null !== (r = null == ea ? void 0 : ea.flags) && void 0 !== r ? r : 0, G.xjy.EMBEDDED) ? ea.type === G.IIU.WATCHING ? B.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
        guildName: W.name
      }) : B.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
        guildName: W.name
      }) : B.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
        server: W.name
      });
    }
    return (null == ea ? void 0 : ea.type) === G.IIU.HANG_STATUS && (t = B.Z.Messages.STATUS_LEAD_IN_JUST), (0, a.jsxs)('div', {
      className: F.headerContainer,
      children: [
        (0, a.jsx)(c.Heading, {
          className: l()((0, x.l)(F, 'headerText', e ? 'EmptyBody' : 'Normal')),
          variant: X ? 'text-xs/semibold' : 'eyebrow',
          color: 'ProfileV2' === s ? 'header-primary' : void 0,
          children: (0, a.jsx)(L.Z, {
            children: t
          })
        }),
        null == J ? void 0 : J()
      ]
    });
  })(eA),
  (0, a.jsx)('div', {
    className: l()(ef ? F.bodyAlignCenter : F.bodyNormal, Q && !ec && !eE && F.wrap),
    children: (0, a.jsxs)('div', {
      className: F.activityDetails,
      children: [
        i,
        el ? null : (0, a.jsxs)(C.Z.Child, {
          className: l()((0, x.l)(F, 'content', ef ? 'GameImage' : null != i ? 'Images' : 'NoImages', s)),
          children: [
            (0, a.jsxs)(c.Clickable, {
              className: l()(null != eo && F.openGameProfile),
              onClick: null != eo ? () => {
                eo(), null == ei || ei();
              } : void 0,
              children: [
                ep,
                eh,
                em,
                eI
              ]
            }),
            eT,
            ec || eE ? null : eS,
            e_ ? eg : null
          ]
        }),
        ed ? (0, a.jsx)('div', {
          className: F.actions,
          children: eg
        }) : null
      ]
    })
  }),
  ec ? eS : null,
  ec || eE ? eg : null,
  (0, a.jsx)(j, {
    activity: ea
  })
]
  });
}
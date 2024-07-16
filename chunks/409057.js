n.d(t, {
  Z: function() {
return j;
  }
}), n(789020);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(780384),
  l = n(481060),
  u = n(438139),
  c = n(410030),
  d = n(726542),
  _ = n(740265),
  E = n(122810),
  f = n(833664),
  h = n(503438),
  p = n(802856),
  m = n(420660),
  I = n(39628),
  T = n(925329),
  g = n(810568),
  S = n(168524),
  A = n(565138),
  N = n(833858),
  v = n(223135),
  O = n(707409),
  R = n(769654),
  C = n(750154),
  y = n(285952),
  D = n(514342),
  L = n(936195),
  b = n(806519),
  M = n(768581),
  P = n(630388),
  U = n(652853),
  w = n(228168),
  x = n(981631),
  G = n(701488),
  k = n(689938),
  B = n(692184);
let F = {
[w.y0.BITE_SIZE]: [
  108,
  60
],
[w.y0.FULL_SIZE]: [
  162,
  90
],
[w.y0.PANEL]: [
  108,
  60
]
  },
  {
getAssetImage: V
  } = n(81063),
  H = (0, u.Z)(class extends i.PureComponent {
render() {
  return (0, r.jsx)('div', {
    className: s()(B.textXsNormal, B.textEllipsis),
    children: this.props.message
  });
}
  });

function Z(e) {
  let {
activity: t
  } = e, n = null;
  return (0, h.Z)(t) && (n = x.ABu.SPOTIFY), null != t.platform && [
x.M7m.PS4,
x.M7m.PS5
  ].includes(t.platform) && (n = x.ABu.PLAYSTATION), n;
}

function Y(e) {
  let {
activity: t
  } = e, n = (0, c.ZP)(), i = Z({
activity: t
  });
  if (null == i)
return null;
  let a = d.Z.get(i);
  return (0, r.jsx)('img', {
alt: '',
src: (0, o.ap)(n) ? a.icon.lightSVG : a.icon.darkSVG,
className: B.platformIcon
  });
}

function j(e) {
  var t, n, a;
  let o, {
  user: u,
  activity: c,
  application: j,
  activityGuild: W,
  channel: K,
  hideHeader: z,
  hideName: q,
  showChannelDetails: Q,
  className: X,
  renderHeaderAccessory: $,
  renderActions: J,
  onOpenSpotifyTrack: ee,
  onOpenSpotifyArtist: et,
  onOpenSpotifyAlbum: en,
  onGameProfileOpened: er
} = e,
{
  profileType: ei
} = (0, U.z)(),
ea = {
  [B.biteSize]: ei === w.y0.BITE_SIZE,
  [B.fullSize]: ei === w.y0.FULL_SIZE,
  [B.panel]: ei === w.y0.PANEL
},
es = null != W && (null == c ? void 0 : c.type) !== x.IIU.PLAYING && (null == c ? void 0 : c.type) !== x.IIU.WATCHING && (null == c ? void 0 : c.type) !== x.IIU.LISTENING && (null == c ? void 0 : c.type) !== x.IIU.HANG_STATUS ? {
  type: x.IIU.PLAYING,
  name: k.Z.Messages.SHARING_SCREEN
} : c,
eo = (0, S.Z)({
  location: 'UserProfileActivityCard',
  applicationId: null !== (t = null == j ? void 0 : j.id) && void 0 !== t ? t : null == es ? void 0 : es.application_id,
  source: g.m1.UserProfile,
  sourceUserId: u.id,
  trackEntryPointImpression: !0
});
  if (null == es || es.type === x.IIU.CUSTOM_STATUS || ei !== w.y0.BITE_SIZE && ei !== w.y0.FULL_SIZE && ei !== w.y0.PANEL)
return null;
  let el = !1;
  if ((0, p.Z)(es))
o = (0, r.jsx)('div', {
  className: s()(B.assets, ea),
  children: (0, r.jsx)('img', {
    alt: '',
    src: d.Z.get(x.ABu.XBOX).icon.customPNG,
    className: s()(B.assetsLargeImage, ea, B.xbox)
  })
}), el = !0;
  else if (null == (o = (e => {
  var t, n;
  let a;
  if (e.type === x.IIU.HANG_STATUS)
    return (0, r.jsx)('div', {
      className: s()(B.assets, ea),
      children: (0, r.jsx)(v.Z, {
        hangStatusActivity: e,
        className: s()(B.assetsSmallImage, B.withoutLargeImage, B.hangStatus, ea)
      })
    });
  let {
    assets: o,
    application_id: c
  } = e;
  if (null == o || null == o.large_image && null == o.small_image)
    return null;
  let d = (0, m.Z)(e),
    _ = (0, h.Z)(e),
    E = null != o.large_image ? (0, r.jsx)('img', {
      alt: null !== (t = o.large_text) && void 0 !== t ? t : '',
      src: V(c, o.large_image, d ? F[ei] : [(G.Si.LARGE, G.Si.LARGE)]),
      className: s()(B.assetsLargeImage, ea, {
        [B.spotify]: _,
        [B.assetsLargeMask]: null != o.small_image
      })
    }) : null;
  if (_)
    E = (0, r.jsx)(l.Anchor, {
      onClick: () => en(e, u.id),
      children: E
    });
  else if ((0, C.dS)(e)) {
    let t = (0, C.rq)(e);
    if (null == t)
      return null;
    E = (0, r.jsx)(b.ZP, {
      mask: b.ZP.Masks.SQUIRCLE,
      width: G.Si.SMALL,
      height: G.Si.SMALL,
      children: (0, r.jsx)('img', {
        src: null !== (n = M.ZP.getGuildIconURL({
          id: t.guildId,
          icon: o.small_image,
          size: G.Si.SMALL
        })) && void 0 !== n ? n : void 0,
        className: s()(B.assetsLargeImage, B.voiceChannel, ea),
        alt: ''
      })
    });
  }
  return (!(0, C.dS)(e) && null != o.small_image && (a = (0, r.jsx)(l.Tooltip, {
    text: '' !== o.small_text ? o.small_text : null,
    position: 'top',
    children: e => {
      var t;
      return (0, r.jsx)('img', {
        alt: null !== (t = o.small_text) && void 0 !== t ? t : '',
        src: V(c, o.small_image, [
          G.Si.SMALL,
          G.Si.SMALL
        ]),
        className: s()(B.assetsSmallImage, ea, {
          [B.withoutLargeImage]: null == E
        }),
        ...e
      });
    }
  })), null == E) ? (0, r.jsx)('div', {
    className: s()(B.assets, ea),
    children: a
  }) : (0, r.jsxs)('div', {
    className: s()(B.assets, ea),
    children: [
      (0, r.jsx)(l.Tooltip, {
        text: null != o.large_text ? o.large_text : null,
        position: 'top',
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return null != E ? i.cloneElement(E, {
            onMouseEnter: t,
            onMouseLeave: n
          }) : null;
        }
      }),
      a
    ]
  });
})(es))) {
;
el = null != (o = null != (n = es).assets || (0, E.Z)(n) || n.type !== x.IIU.PLAYING || u.bot ? null : null == j && null != W ? (0, r.jsx)('div', {
  className: s()(B.gameIcon, B.screenshareIcon)
}) : (0, r.jsx)(T.Z, {
  className: B.gameIcon,
  game: j
}));
  }
  let eu = (e => {
  if (q)
    return null;
  let t = (0, f.Z)(e),
    n = e.name,
    i = n;
  return (e.type === x.IIU.HANG_STATUS ? i = (0, N.O8)(e) : t && null != j ? i = (0, r.jsx)('span', {
    className: B.textSmSemibold,
    children: i
  }) : !t && (n = e.details, i = e.details, (0, h.Z)(e) && null != e.sync_id && null != e.details ? i = (0, r.jsx)(l.Anchor, {
    className: B.textLink,
    onClick: () => ee(e),
    children: e.details
  }) : (0, C.dS)(e) && (i = e.name)), null == i) ? null : (0, r.jsx)(l.Text, {
    title: n,
    variant: 'text-sm/semibold',
    className: null != Z({
      activity: e
    }) ? s()(B.platformIconMargin, ea) : void 0,
    children: i
  });
})(es),
ec = (e => {
  let t;
  let {
    details: n,
    state: i
  } = e, a = n, o = n;
  if (e.type === x.IIU.CUSTOM_STATUS)
    a = i;
  else if (e.type === x.IIU.HANG_STATUS)
    a = null != W ? k.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: W.name
    }) : null, t = null != W ? () => {
      (0, R.X)(W.id);
    } : void 0;
  else if (!(0, f.Z)(e)) {
    if (o = a = i, (0, h.Z)(e) && null != i)
      a = k.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: o,
        artistsHook: (t, n) => (0, r.jsx)(L.Z, {
          artists: i,
          linkClassName: B.textLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: t => et(e, u.id, t)
        }, n)
      });
    else if ((0, C.dS)(e)) {
      var c;
      a = null === (c = e.assets) || void 0 === c ? void 0 : c.small_text;
    }
  }
  return null == a || 0 === a.length ? null : ((0, m.Z)(e) && (a = k.Z.Messages.STREAMER_PLAYING.format({
    game: a
  })), null != t) ? (0, r.jsx)(l.Clickable, {
    onClick: t,
    title: null != o ? o : void 0,
    className: s()(B.textSmSemibold, B.textEllipsis, B.textLink),
    children: a
  }) : (0, r.jsx)('div', {
    title: null != o ? o : void 0,
    className: s()(B.textXsNormal, {
      [B.textEllipsis]: !(0, m.Z)(e) && !(0, h.Z)(e)
    }),
    children: a
  });
})(es),
ed = ((e, t) => {
  var n, i;
  let a;
  let {
    state: o,
    party: c,
    assets: d
  } = e, _ = o, E = _;
  return (!(0, f.Z)(e) && (E = _ = null == d ? void 0 : d.large_text, (0, h.Z)(e) && null != _ && (_ = k.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
    album: E,
    albumHook: (t, n) => null != e.sync_id && null != E ? (0, r.jsx)(l.Anchor, {
      className: B.textLink,
      onClick: () => en(e, u.id),
      children: E
    }, n) : E
  }))), null != _ && 0 !== _.length && e.type !== x.IIU.CUSTOM_STATUS || (0, C.dS)(e)) ? ((null == c ? void 0 : c.size) == null && [G.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? a = k.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: '0',
    max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
  }) : (0, C.dS)(e) && (null == c ? void 0 : c.size) != null ? a = k.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
    numSpeakers: c.size[0],
    numListeners: c.size[1] - c.size[0]
  }) : (null == c ? void 0 : c.size) != null && c.size.length >= 2 && (a = k.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: c.size[0],
    max: c.size[1]
  })), (0, r.jsxs)('div', {
    className: s()(B.textXsNormal, B.textEllipsis),
    children: [
      (0, r.jsx)('span', {
        title: E,
        children: _
      }),
      null != a ? (0, r.jsxs)('span', {
        children: [
          ' ',
          a
        ]
      }) : null
    ]
  })) : null;
})(es, j),
e_ = (e => {
  if (!(0, f.Z)(e) || (0, h.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  return null == t ? null : (0, E.Z)(e) ? (0, r.jsx)(H, {
    timestamps: t
  }) : (0, r.jsx)(O.ZP, {
    start: t.start,
    location: O.ZP.Locations.USER_ACTIVITY,
    className: s()(B.textXsNormal, B.textEllipsis),
    isApplicationStreaming: null != W
  });
})(es);
  let eE = (a = es, Q && null != W ? null == K ? (0, r.jsx)('div', {
  className: s()(B.textXsNormal, {
    [B.textEllipsis]: !(0, m.Z)(a) && !(0, h.Z)(a)
  }),
  children: k.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: W.name
  })
}) : (0, r.jsxs)('div', {
  className: s()(B.guildDetails, B.textXsNormal, {
    [B.textEllipsis]: !(0, m.Z)(a) && !(0, h.Z)(a)
  }),
  children: [
    (0, r.jsx)(A.Z, {
      guild: W,
      size: A.Z.Sizes.SMOL,
      className: B.guildIcon
    }),
    (0, r.jsx)(l.ChevronSmallRightIcon, {
      size: 'xxs',
      color: 'currentColor'
    }),
    (0, r.jsxs)('div', {
      className: B.voiceChannelInfo,
      children: [
        (0, r.jsx)(l.VoiceNormalIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        (0, r.jsx)(l.Text, {
          variant: 'text-xs/normal',
          children: null == K ? void 0 : K.name
        })
      ]
    })
  ]
}) : null),
ef = null != J ? J() : null,
eh = (e => {
  if (!(0, h.Z)(e))
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
  return null == n || null == i ? null : (0, r.jsx)(I.Z, {
    start: n,
    end: i,
    className: s()(B.timeBar, ea),
    themed: !0
  });
})(es),
ep = ![
  o,
  eu,
  ec,
  ed,
  e_,
  eh,
  ef
].some(e => null != e);
  return (0, r.jsxs)('div', {
className: X,
children: [
  (e => {
    let t;
    if (z)
      return null;
    let {
      name: n
    } = es;
    switch (es.type) {
      case x.IIU.STREAMING:
        t = k.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
          platform: [
            x.ABu.TWITCH,
            x.ABu.YOUTUBE
          ].includes(n.toLowerCase()) ? n : d.Z.get(x.ABu.TWITCH).name
        });
        break;
      case x.IIU.LISTENING:
        t = k.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
          name: n
        });
        break;
      case x.IIU.WATCHING:
        t = k.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
          name: n
        });
        break;
      case x.IIU.PLAYING:
        t = (0, _.Z)(es);
        break;
      case x.IIU.COMPETING:
        t = k.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
          name: n
        });
    }
    if (null != W) {
      var i;
      t = (0, P.yE)(null !== (i = null == es ? void 0 : es.flags) && void 0 !== i ? i : 0, x.xjy.EMBEDDED) ? es.type === x.IIU.WATCHING ? k.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
        guildName: W.name
      }) : k.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
        guildName: W.name
      }) : k.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
        server: W.name
      });
    }
    return (null == es ? void 0 : es.type) === x.IIU.HANG_STATUS && (t = k.Z.Messages.STATUS_LEAD_IN_JUST), (0, r.jsxs)('div', {
      className: B.headerContainer,
      children: [
        (0, r.jsx)(l.Heading, {
          className: s()(B.headerText, {
            [B.textEllipsis]: !e
          }),
          variant: Q ? 'text-xs/semibold' : 'eyebrow',
          children: (0, r.jsx)(D.Z, {
            children: t
          })
        }),
        null == $ ? void 0 : $()
      ]
    });
  })(ep),
  (0, r.jsx)('div', {
    className: B.body,
    children: (0, r.jsxs)('div', {
      className: B.activityDetails,
      children: [
        o,
        (0, r.jsxs)(y.Z.Child, {
          className: s()(B.content, ea, {
            [B.noImages]: null == o && !el,
            [B.gameImage]: el
          }),
          children: [
            (0, r.jsxs)(l.Clickable, {
              className: null != eo ? B.openGameProfile : void 0,
              onClick: null != eo ? () => {
                eo(), null == er || er();
              } : void 0,
              children: [
                eu,
                ec,
                ed,
                e_
              ]
            }),
            eE,
            ei === w.y0.FULL_SIZE ? eh : null
          ]
        }),
        ei === w.y0.FULL_SIZE && (0, r.jsx)('div', {
          className: B.actions,
          children: ef
        })
      ]
    })
  }),
  ei !== w.y0.FULL_SIZE && eh,
  ei !== w.y0.FULL_SIZE && ef,
  (0, r.jsx)(Y, {
    activity: es
  })
]
  });
}
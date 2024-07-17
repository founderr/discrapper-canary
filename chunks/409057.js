n.d(t, {
  Z: function() {
return Z;
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
  D = n(936195),
  L = n(806519),
  b = n(768581),
  M = n(652853),
  P = n(228168),
  U = n(981631),
  w = n(701488),
  x = n(689938),
  G = n(692184);
let k = {
[P.y0.BITE_SIZE]: [
  108,
  60
],
[P.y0.FULL_SIZE]: [
  162,
  90
],
[P.y0.PANEL]: [
  108,
  60
]
  },
  {
getAssetImage: B
  } = n(81063),
  F = (0, c.Z)(class extends i.PureComponent {
render() {
  return (0, r.jsx)('div', {
    className: s()(G.textXsNormal, G.textEllipsis),
    children: this.props.message
  });
}
  });

function V(e) {
  let {
activity: t
  } = e, n = null;
  return (0, h.Z)(t) && (n = U.ABu.SPOTIFY), null != t.platform && [
U.M7m.PS4,
U.M7m.PS5
  ].includes(t.platform) && (n = U.ABu.PLAYSTATION), n;
}

function H(e) {
  let {
activity: t
  } = e, n = (0, d.ZP)(), i = V({
activity: t
  });
  if (null == i)
return null;
  let a = _.Z.get(i);
  return (0, r.jsx)('img', {
alt: '',
src: (0, l.ap)(n) ? a.icon.lightSVG : a.icon.darkSVG,
className: G.platformIcon
  });
}

function Z(e) {
  var t, n, a;
  let l, {
  user: c,
  activity: d,
  application: Z,
  activityGuild: Y,
  channel: j,
  hideName: W,
  showChannelDetails: K,
  className: z,
  renderActions: q,
  onOpenSpotifyTrack: Q,
  onOpenSpotifyArtist: X,
  onOpenSpotifyAlbum: $,
  onGameProfileOpened: J
} = e,
{
  profileType: ee
} = (0, M.z)(),
et = {
  [G.biteSize]: ee === P.y0.BITE_SIZE,
  [G.fullSize]: ee === P.y0.FULL_SIZE,
  [G.panel]: ee === P.y0.PANEL
},
en = null != Y && (null == d ? void 0 : d.type) !== U.IIU.PLAYING && (null == d ? void 0 : d.type) !== U.IIU.WATCHING && (null == d ? void 0 : d.type) !== U.IIU.LISTENING && (null == d ? void 0 : d.type) !== U.IIU.HANG_STATUS,
er = en ? {
  type: U.IIU.PLAYING,
  name: x.Z.Messages.SHARING_SCREEN
} : d,
ei = (0, S.Z)({
  location: 'UserProfileActivityCard',
  applicationId: null !== (t = null == Z ? void 0 : Z.id) && void 0 !== t ? t : null == er ? void 0 : er.application_id,
  source: g.m1.UserProfile,
  sourceUserId: c.id,
  trackEntryPointImpression: !0
});
  if (null == er || er.type === U.IIU.CUSTOM_STATUS || ee !== P.y0.BITE_SIZE && ee !== P.y0.FULL_SIZE && ee !== P.y0.PANEL)
return null;
  let ea = !1;
  if ((0, p.Z)(er))
l = (0, r.jsx)('div', {
  className: s()(G.assets, et),
  children: (0, r.jsx)('img', {
    alt: '',
    src: _.Z.get(U.ABu.XBOX).icon.customPNG,
    className: s()(G.assetsLargeImage, et, G.xbox)
  })
}), ea = !0;
  else if (null == (l = (e => {
  var t, n;
  let a;
  if (e.type === U.IIU.HANG_STATUS)
    return (0, r.jsx)('div', {
      className: s()(G.assets, et),
      children: (0, r.jsx)(v.Z, {
        hangStatusActivity: e,
        className: s()(G.assetsSmallImage, G.withoutLargeImage, G.hangStatus, et)
      })
    });
  let {
    assets: o,
    application_id: l
  } = e;
  if (null == o || null == o.large_image && null == o.small_image)
    return null;
  let d = (0, m.Z)(e),
    _ = (0, h.Z)(e),
    E = null != o.large_image ? (0, r.jsx)('img', {
      alt: null !== (t = o.large_text) && void 0 !== t ? t : '',
      src: B(l, o.large_image, d ? k[ee] : [(w.Si.LARGE, w.Si.LARGE)]),
      className: s()(G.assetsLargeImage, et, {
        [G.spotify]: _,
        [G.assetsLargeMask]: null != o.small_image
      })
    }) : null;
  if (_)
    E = (0, r.jsx)(u.Anchor, {
      onClick: () => $(e, c.id),
      children: E
    });
  else if ((0, C.dS)(e)) {
    let t = (0, C.rq)(e);
    if (null == t)
      return null;
    E = (0, r.jsx)(L.ZP, {
      mask: L.ZP.Masks.SQUIRCLE,
      width: w.Si.SMALL,
      height: w.Si.SMALL,
      children: (0, r.jsx)('img', {
        src: null !== (n = b.ZP.getGuildIconURL({
          id: t.guildId,
          icon: o.small_image,
          size: w.Si.SMALL
        })) && void 0 !== n ? n : void 0,
        className: s()(G.assetsLargeImage, G.voiceChannel, et),
        alt: ''
      })
    });
  }
  return (!(0, C.dS)(e) && null != o.small_image && (a = (0, r.jsx)(u.Tooltip, {
    text: '' !== o.small_text ? o.small_text : null,
    position: 'top',
    children: e => {
      var t;
      return (0, r.jsx)('img', {
        alt: null !== (t = o.small_text) && void 0 !== t ? t : '',
        src: B(l, o.small_image, [
          w.Si.SMALL,
          w.Si.SMALL
        ]),
        className: s()(G.assetsSmallImage, et, {
          [G.withoutLargeImage]: null == E
        }),
        ...e
      });
    }
  })), null == E) ? (0, r.jsx)('div', {
    className: s()(G.assets, et),
    children: a
  }) : (0, r.jsxs)('div', {
    className: s()(G.assets, et),
    children: [
      (0, r.jsx)(u.Tooltip, {
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
})(er))) {
;
ea = null != (l = null != (n = er).assets || (0, E.Z)(n) || n.type !== U.IIU.PLAYING || c.bot ? null : null == Z && null != Y ? (0, r.jsx)('div', {
  className: s()(G.gameIcon, G.screenshareIcon)
}) : (0, r.jsx)(T.Z, {
  className: G.gameIcon,
  game: Z
}));
  }
  let es = (e => {
  if (W)
    return null;
  let t = (0, f.Z)(e),
    n = e.name,
    i = n;
  return (e.type === U.IIU.HANG_STATUS ? i = (0, N.O8)(e) : t && null != Z ? i = (0, r.jsx)('span', {
    className: G.textSmSemibold,
    children: i
  }) : !t && (n = e.details, i = e.details, (0, h.Z)(e) && null != e.sync_id && null != e.details ? i = (0, r.jsx)(u.Anchor, {
    className: G.textLink,
    onClick: () => Q(e),
    children: e.details
  }) : (0, C.dS)(e) && (i = e.name)), null == i) ? null : (0, r.jsx)(u.Text, {
    title: n,
    variant: 'text-sm/semibold',
    className: null != V({
      activity: e
    }) ? s()(G.platformIconMargin, et) : void 0,
    children: i
  });
})(er),
eo = (e => {
  let t;
  let {
    details: n,
    state: i
  } = e, a = n, o = n;
  if (e.type === U.IIU.CUSTOM_STATUS)
    a = i;
  else if (e.type === U.IIU.HANG_STATUS)
    a = null != Y ? x.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: Y.name
    }) : null, t = null != Y ? () => {
      (0, R.X)(Y.id);
    } : void 0;
  else if (!(0, f.Z)(e)) {
    if (o = a = i, (0, h.Z)(e) && null != i)
      a = x.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: o,
        artistsHook: (t, n) => (0, r.jsx)(D.Z, {
          artists: i,
          linkClassName: G.textLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: t => X(e, c.id, t)
        }, n)
      });
    else if ((0, C.dS)(e)) {
      var l;
      a = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text;
    }
  }
  return null == a || 0 === a.length ? null : ((0, m.Z)(e) && (a = x.Z.Messages.STREAMER_PLAYING.format({
    game: a
  })), null != t) ? (0, r.jsx)(u.Clickable, {
    onClick: t,
    title: null != o ? o : void 0,
    className: s()(G.textSmSemibold, G.textEllipsis, G.textLink),
    children: a
  }) : (0, r.jsx)('div', {
    title: null != o ? o : void 0,
    className: s()(G.textXsNormal, {
      [G.textEllipsis]: !(0, m.Z)(e) && !(0, h.Z)(e)
    }),
    children: a
  });
})(er),
el = ((e, t) => {
  var n, i;
  let a;
  let {
    state: o,
    party: l,
    assets: d
  } = e, _ = o, E = _;
  return (!(0, f.Z)(e) && (E = _ = null == d ? void 0 : d.large_text, (0, h.Z)(e) && null != _ && (_ = x.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
    album: E,
    albumHook: (t, n) => null != e.sync_id && null != E ? (0, r.jsx)(u.Anchor, {
      className: G.textLink,
      onClick: () => $(e, c.id),
      children: E
    }, n) : E
  }))), null != _ && 0 !== _.length && e.type !== U.IIU.CUSTOM_STATUS || (0, C.dS)(e)) ? ((null == l ? void 0 : l.size) == null && [w.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? a = x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: '0',
    max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
  }) : (0, C.dS)(e) && (null == l ? void 0 : l.size) != null ? a = x.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
    numSpeakers: l.size[0],
    numListeners: l.size[1] - l.size[0]
  }) : (null == l ? void 0 : l.size) != null && l.size.length >= 2 && (a = x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: l.size[0],
    max: l.size[1]
  })), (0, r.jsxs)('div', {
    className: s()(G.textXsNormal, G.textEllipsis),
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
})(er, Z),
eu = (e => {
  if (!(0, f.Z)(e) || (0, h.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  return null == t ? null : (0, E.Z)(e) ? (0, r.jsx)(F, {
    timestamps: t
  }) : (0, r.jsx)(O.ZP, {
    start: t.start,
    location: O.ZP.Locations.USER_ACTIVITY,
    className: s()(G.textXsNormal, G.textEllipsis),
    isApplicationStreaming: null != Y
  });
})(er);
  let ec = (a = er, K && null != Y ? null == j ? (0, r.jsx)('div', {
  className: s()(G.textXsNormal, {
    [G.textEllipsis]: !(0, m.Z)(a) && !(0, h.Z)(a)
  }),
  children: x.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: Y.name
  })
}) : (0, r.jsxs)('div', {
  className: s()(G.guildDetails, G.textXsNormal, {
    [G.textEllipsis]: !(0, m.Z)(a) && !(0, h.Z)(a)
  }),
  children: [
    (0, r.jsx)(A.Z, {
      guild: Y,
      size: A.Z.Sizes.SMOL,
      className: G.guildIcon
    }),
    (0, r.jsx)(u.ChevronSmallRightIcon, {
      size: 'xxs',
      color: 'currentColor'
    }),
    (0, r.jsxs)('div', {
      className: G.voiceChannelInfo,
      children: [
        (0, r.jsx)(u.VoiceNormalIcon, {
          size: 'xxs',
          color: 'currentColor'
        }),
        (0, r.jsx)(u.Text, {
          variant: 'text-xs/normal',
          children: null == j ? void 0 : j.name
        })
      ]
    })
  ]
}) : null),
ed = null != q ? q() : null,
e_ = (e => {
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
    className: s()(G.timeBar, et),
    themed: !0
  });
})(er);
  return (0, r.jsxs)('div', {
className: s()(G.card, z),
children: [
  (() => {
    let e = en ? x.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)(er.type).with(U.IIU.PLAYING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).with(U.IIU.STREAMING, () => x.Z.Messages.USER_ACTIVITY_STREAMING).with(U.IIU.LISTENING, () => x.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(U.IIU.WATCHING, () => x.Z.Messages.USER_ACTIVITY_WATCHING).with(U.IIU.HANG_STATUS, () => x.Z.Messages.USER_ACTIVITY_CURRENTLY).with(U.IIU.COMPETING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    return null == e ? null : (0, r.jsx)(u.Heading, {
      variant: 'text-xs/medium',
      color: 'header-primary',
      children: e
    });
  })(),
  (0, r.jsx)('div', {
    className: G.body,
    children: (0, r.jsxs)('div', {
      className: G.activityDetails,
      children: [
        l,
        (0, r.jsxs)(y.Z.Child, {
          className: s()(G.content, et, {
            [G.noImages]: null == l && !ea,
            [G.gameImage]: ea
          }),
          children: [
            (0, r.jsxs)(u.Clickable, {
              className: null != ei ? G.openGameProfile : void 0,
              onClick: null != ei ? () => {
                ei(), null == J || J();
              } : void 0,
              children: [
                es,
                eo,
                el,
                eu
              ]
            }),
            ec,
            ee === P.y0.FULL_SIZE ? e_ : null
          ]
        }),
        ee === P.y0.FULL_SIZE && (0, r.jsx)('div', {
          className: G.actions,
          children: ed
        })
      ]
    })
  }),
  ee !== P.y0.FULL_SIZE && e_,
  ee !== P.y0.FULL_SIZE && ed,
  (0, r.jsx)(H, {
    activity: er
  })
]
  });
}
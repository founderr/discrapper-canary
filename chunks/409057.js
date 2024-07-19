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
  g = n(314091),
  S = n(925329),
  A = n(810568),
  N = n(168524),
  v = n(565138),
  O = n(833858),
  R = n(223135),
  C = n(707409),
  y = n(769654),
  D = n(936195),
  L = n(652853),
  b = n(979038),
  M = n(60241),
  P = n(373826),
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
  } = e, n = (0, d.ZP)(), i = (0, g.ZH)(t);
  return null == i ? null : (0, r.jsx)('img', {
alt: '',
src: (0, l.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
className: k.platformIcon
  });
}

function H(e) {
  var t;
  let {
user: i,
currentUser: a,
activity: l,
application: c,
activityGuild: d,
channel: g,
onAction: H,
className: Z,
onOpenSpotifyTrack: Y,
onOpenSpotifyArtist: j,
onOpenSpotifyAlbum: W,
onGameProfileOpened: K
  } = e, {
profileType: z
  } = (0, L.z)(), q = {
[k.biteSize]: z === U.y0.BITE_SIZE,
[k.fullSize]: z === U.y0.FULL_SIZE,
[k.panel]: z === U.y0.PANEL
  }, Q = null != d && (null == l ? void 0 : l.type) !== w.IIU.PLAYING && (null == l ? void 0 : l.type) !== w.IIU.WATCHING && (null == l ? void 0 : l.type) !== w.IIU.LISTENING && (null == l ? void 0 : l.type) !== w.IIU.HANG_STATUS, X = Q ? {
type: w.IIU.PLAYING,
name: G.Z.Messages.SHARING_SCREEN
  } : l, $ = (0, N.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : null == X ? void 0 : X.application_id,
source: A.m1.UserProfile,
sourceUserId: i.id,
trackEntryPointImpression: !0
  });
  if (null == X || X.type === w.IIU.CUSTOM_STATUS || z !== U.y0.BITE_SIZE && z !== U.y0.FULL_SIZE && z !== U.y0.PANEL)
return null;
  let J = () => X.type === w.IIU.HANG_STATUS ? (0, r.jsx)(P.Z, {
  variant: 'heading-sm/semibold',
  text: (0, O.O8)(X)
}) : (0, p.Z)(X) && null != X.sync_id && null != X.details ? (0, r.jsx)(P.Z, {
  variant: 'heading-sm/semibold',
  text: X.details,
  onClick: () => Y(X)
}) : (0, h.Z)(X) ? (0, r.jsx)(P.Z, {
  variant: 'heading-sm/semibold',
  text: X.name
}) : (0, r.jsx)(P.Z, {
  variant: 'heading-sm/semibold',
  text: X.details
}),
ee = () => X.type === w.IIU.HANG_STATUS && null != d ? (0, r.jsx)(P.Z, {
  variant: 'text-xs/normal',
  text: G.Z.Messages.HANG_STATUS_LOCATION.format({
    guildName: d.name
  }),
  onClick: () => (0, y.X)(d.id)
}) : (0, p.Z)(X) ? (0, r.jsx)(P.Z, {
  variant: 'text-xs/normal',
  title: X.state,
  text: G.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
    artists: X.state,
    artistsHook: (e, t) => {
      var n;
      return (0, r.jsx)(D.Z, {
        artists: null !== (n = X.state) && void 0 !== n ? n : '',
        linkClassName: k.link,
        canOpen: null != X.sync_id,
        onOpenSpotifyArtist: e => j(X, i.id, e)
      }, t);
    }
  })
}) : (0, I.Z)(X) ? (0, r.jsx)(P.Z, {
  variant: 'text-xs/normal',
  text: G.Z.Messages.STREAMER_PLAYING.format({
    game: X.state
  })
}) : (0, h.Z)(X) ? (0, r.jsx)(P.Z, {
  variant: 'text-xs/normal',
  text: X.details
}) : (0, r.jsx)(P.Z, {
  text: X.state,
  variant: 'text-xs/normal'
}),
et = () => {
  var e, t;
  if ((0, p.Z)(X) && (null === (e = X.assets) || void 0 === e ? void 0 : e.large_text) != null) {
    let e = X.assets.large_text,
      t = null == X.sync_id ? () => e : (t, n) => (0, r.jsx)(u.Clickable, {
        className: k.link,
        onClick: () => W(X, i.id),
        children: e
      }, n);
    return (0, r.jsx)(P.Z, {
      title: e,
      variant: 'text-xs/normal',
      text: G.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
        album: e,
        albumHook: t
      })
    });
  }
  return (0, h.Z)(X) ? (0, r.jsxs)('div', {
    className: k.gameState,
    children: [
      (0, r.jsx)(P.Z, {
        variant: 'text-xs/normal',
        text: X.state
      }),
      en()
    ]
  }) : (0, r.jsx)(P.Z, {
    text: null === (t = X.assets) || void 0 === t ? void 0 : t.large_text,
    variant: 'text-xs/normal'
  });
},
en = () => {
  var e, t, n, i;
  return (0, h.Z)(X) ? (null === (e = X.party) || void 0 === e ? void 0 : e.size) == null && X.application_id === x.Zc ? (0, r.jsx)(P.Z, {
    variant: 'text-xs/normal',
    text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: '0',
      max: null !== (i = null == c ? void 0 : c.getMaxParticipants()) && void 0 !== i ? i : 0
    })
  }) : (null === (t = X.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = X.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsx)(P.Z, {
    variant: 'text-xs/normal',
    text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: X.party.size[0],
      max: X.party.size[1]
    })
  }) : null : null;
},
er = () => {
  if (!(0, h.Z)(X) || (0, p.Z)(X))
    return null;
  let {
    timestamps: e
  } = X;
  return null == e ? null : (0, E.Z)(X) ? (0, r.jsx)(F, {
    timestamps: e
  }) : (0, r.jsx)(C.ZP, {
    start: e.start,
    location: C.ZP.Locations.USER_ACTIVITY,
    className: s()(k.textXsNormal, k.textEllipsis),
    isApplicationStreaming: null != d
  });
},
ei = () => null == d ? null : null == g ? (0, r.jsx)(P.Z, {
  variant: 'text-xs/normal',
  text: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: d.name
  })
}) : (0, r.jsxs)('div', {
  className: k.guildDetails,
  children: [
    (0, r.jsx)(v.Z, {
      guild: d,
      size: v.Z.Sizes.SMOL,
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
        (0, r.jsx)(P.Z, {
          variant: 'text-xs/normal',
          text: g.name
        })
      ]
    })
  ]
}),
ea = () => {
  if (!(0, p.Z)(X))
    return null;
  let {
    timestamps: e
  } = X;
  if (null == e)
    return null;
  let {
    start: t,
    end: n
  } = e;
  return null == t || null == n ? null : (0, r.jsx)(T.Z, {
    start: t,
    end: n,
    className: s()(k.timeBar, q),
    themed: !0
  });
};
  return (0, r.jsxs)('div', {
className: s()(k.card, Z),
children: [
  (() => {
    let e = Q ? G.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)(X.type).with(w.IIU.PLAYING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).with(w.IIU.STREAMING, () => G.Z.Messages.USER_ACTIVITY_STREAMING).with(w.IIU.LISTENING, () => G.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(w.IIU.WATCHING, () => G.Z.Messages.USER_ACTIVITY_WATCHING).with(w.IIU.HANG_STATUS, () => G.Z.Messages.USER_ACTIVITY_CURRENTLY).with(w.IIU.COMPETING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
    return null == e ? null : (0, r.jsx)(u.Heading, {
      variant: 'text-xs/medium',
      color: 'header-primary',
      children: e
    });
  })(),
  (0, r.jsxs)('div', {
    className: s()(k.body, q),
    children: [
      (0, r.jsxs)('div', {
        className: s()(k.content, q),
        children: [
          (() => {
            var e, t, a, o, l, u, d, h, I, T;
            let g = s()(k.imageSize, {
              [k.fullSize]: z === U.y0.FULL_SIZE
            });
            if (X.type === w.IIU.HANG_STATUS)
              return (0, r.jsx)('div', {
                className: s()(k.hangStatusIconBackground, g),
                children: (0, r.jsx)(R.Z, {
                  hangStatusActivity: X,
                  className: k.hangStatusIcon
                })
              });
            if (Q)
              return (0, r.jsx)(M.Z, {
                src: n(132399),
                alt: G.Z.Messages.FORM_LABEL_SCREENSHARE,
                className: g
              });
            if ((0, m.Z)(X))
              return (0, r.jsx)(M.Z, {
                src: _.Z.get(w.ABu.XBOX).icon.customPNG,
                alt: G.Z.Messages.XBOX,
                className: g
              });
            if (!(0, E.Z)(X) && X.type === w.IIU.PLAYING && !i.bot)
              return (0, r.jsx)(S.Z, {
                game: c,
                className: g
              });
            if ((null === (e = X.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = X.assets) || void 0 === t ? void 0 : t.small_image) == null)
              return null;
            let A = z === U.y0.FULL_SIZE ? 64 : 48,
              N = z === U.y0.FULL_SIZE ? 30 : 20;
            return (null === (a = X.assets) || void 0 === a ? void 0 : a.large_image) == null ? (0, r.jsx)(M.Z, {
              text: X.assets.small_text,
              alt: null !== (l = X.assets.small_text) && void 0 !== l ? l : '',
              src: B(X.application_id, X.assets.small_image, A),
              className: s()(k.largeImage, g)
            }) : (0, p.Z)(X) ? (0, r.jsx)(M.Z, {
              text: X.assets.large_text,
              alt: null !== (u = X.assets.large_text) && void 0 !== u ? u : '',
              src: B(X.application_id, X.assets.large_image, A),
              className: s()(k.largeImage, g),
              onClick: () => W(X, i.id)
            }) : (0, f.Z)(X) ? (0, r.jsx)(M.Z, {
              text: X.assets.large_text,
              alt: null !== (d = X.assets.large_text) && void 0 !== d ? d : '',
              src: B(X.application_id, X.assets.large_image, z === U.y0.FULL_SIZE ? 86 : 64),
              className: s()(k.largeImage, g, k.crunchyroll)
            }) : (null === (o = X.assets) || void 0 === o ? void 0 : o.small_image) == null || X.type !== w.IIU.PLAYING ? (0, r.jsx)(M.Z, {
              text: X.assets.large_text,
              alt: null !== (h = X.assets.large_text) && void 0 !== h ? h : '',
              src: B(X.application_id, X.assets.large_image, A),
              className: s()(k.largeImage, g)
            }) : (0, r.jsxs)('div', {
              className: s()(k.imageContainer, g),
              children: [
                (0, r.jsx)(M.Z, {
                  text: X.assets.large_text,
                  alt: null !== (I = X.assets.large_text) && void 0 !== I ? I : '',
                  src: B(X.application_id, X.assets.large_image, A),
                  className: s()(k.largeImage, g)
                }),
                (0, r.jsx)(M.Z, {
                  text: X.assets.small_text,
                  alt: null !== (T = X.assets.small_text) && void 0 !== T ? T : '',
                  src: B(X.application_id, X.assets.small_image, N),
                  className: s()(k.smallImage, q)
                })
              ]
            });
          })(),
          null == $ ? (0, r.jsxs)('div', {
            className: k.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  J(),
                  ee(),
                  et(),
                  er(),
                  ei()
                ]
              }),
              ea()
            ]
          }) : (0, r.jsxs)('div', {
            className: k.details,
            children: [
              (0, r.jsxs)(u.Clickable, {
                className: k.clickable,
                onClick: () => {
                  $(), null == K || K();
                },
                children: [
                  J(),
                  ee(),
                  et(),
                  er(),
                  ei()
                ]
              }),
              ea()
            ]
          })
        ]
      }),
      i.id !== a.id && (0, r.jsx)('div', {
        className: k.actions,
        children: (0, r.jsx)(b.Z, {
          activity: X,
          user: i,
          currentUser: a,
          onAction: H
        })
      })
    ]
  }),
  (0, r.jsx)(V, {
    activity: X
  })
]
  });
}
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
  b = n(60241),
  M = n(623847),
  P = n(228168),
  U = n(981631),
  w = n(701488),
  x = n(689938),
  G = n(692184);
let {
  getAssetImage: k
} = n(81063), B = (0, c.Z)(class extends i.PureComponent {
  render() {
return (0, r.jsx)('div', {
  className: s()(G.textXsNormal, G.textEllipsis),
  children: this.props.message
});
  }
});

function F(e) {
  let {
activity: t
  } = e, n = (0, d.ZP)(), i = function(e) {
let {
  activity: t
} = e, n = null;
return (0, p.Z)(t) && (n = U.ABu.SPOTIFY), null != t.platform && [
  U.M7m.PS4,
  U.M7m.PS5
].includes(t.platform) && (n = U.ABu.PLAYSTATION), n;
  }({
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

function V(e) {
  var t, i;
  let {
user: a,
activity: l,
application: c,
activityGuild: d,
channel: V,
showChannelDetails: H,
className: Z,
renderActions: Y,
onOpenSpotifyTrack: j,
onOpenSpotifyArtist: W,
onOpenSpotifyAlbum: K,
onGameProfileOpened: z
  } = e, {
profileType: q
  } = (0, L.z)(), Q = {
[G.biteSize]: q === P.y0.BITE_SIZE,
[G.fullSize]: q === P.y0.FULL_SIZE,
[G.panel]: q === P.y0.PANEL
  }, X = null != d && (null == l ? void 0 : l.type) !== U.IIU.PLAYING && (null == l ? void 0 : l.type) !== U.IIU.WATCHING && (null == l ? void 0 : l.type) !== U.IIU.LISTENING && (null == l ? void 0 : l.type) !== U.IIU.HANG_STATUS, $ = X ? {
type: U.IIU.PLAYING,
name: x.Z.Messages.SHARING_SCREEN
  } : l, J = (0, A.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : null == $ ? void 0 : $.application_id,
source: S.m1.UserProfile,
sourceUserId: a.id,
trackEntryPointImpression: !0
  });
  if (null == $ || $.type === U.IIU.CUSTOM_STATUS || q !== P.y0.BITE_SIZE && q !== P.y0.FULL_SIZE && q !== P.y0.PANEL)
return null;
  let ee = (e => {
  let t;
  let {
    details: n,
    state: i
  } = e, o = n, l = n;
  if (e.type === U.IIU.CUSTOM_STATUS)
    o = i;
  else if (e.type === U.IIU.HANG_STATUS)
    o = null != d ? x.Z.Messages.HANG_STATUS_LOCATION.format({
      guildName: d.name
    }) : null, t = null != d ? () => {
      (0, C.X)(d.id);
    } : void 0;
  else if (!(0, h.Z)(e)) {
    if (l = o = i, (0, p.Z)(e) && null != i)
      o = x.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: l,
        artistsHook: (t, n) => (0, r.jsx)(D.Z, {
          artists: i,
          linkClassName: G.textLink,
          canOpen: null != e.sync_id,
          onOpenSpotifyArtist: t => W(e, a.id, t)
        }, n)
      });
    else if ((0, y.dS)(e)) {
      var c;
      o = null === (c = e.assets) || void 0 === c ? void 0 : c.small_text;
    }
  }
  return null == o || 0 === o.length ? null : ((0, I.Z)(e) && (o = x.Z.Messages.STREAMER_PLAYING.format({
    game: o
  })), null != t) ? (0, r.jsx)(u.Clickable, {
    onClick: t,
    title: null != l ? l : void 0,
    className: s()(G.textSmSemibold, G.textEllipsis, G.textLink),
    children: o
  }) : (0, r.jsx)('div', {
    title: null != l ? l : void 0,
    className: s()(G.textXsNormal, {
      [G.textEllipsis]: !(0, I.Z)(e) && !(0, p.Z)(e)
    }),
    children: o
  });
})($),
et = ((e, t) => {
  var n, i;
  let o;
  let {
    state: l,
    party: c,
    assets: d
  } = e, _ = l, E = _;
  return (!(0, h.Z)(e) && (E = _ = null == d ? void 0 : d.large_text, (0, p.Z)(e) && null != _ && (_ = x.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
    album: E,
    albumHook: (t, n) => null != e.sync_id && null != E ? (0, r.jsx)(u.Anchor, {
      className: G.textLink,
      onClick: () => K(e, a.id),
      children: E
    }, n) : E
  }))), null != _ && 0 !== _.length && e.type !== U.IIU.CUSTOM_STATUS || (0, y.dS)(e)) ? ((null == c ? void 0 : c.size) == null && [w.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? o = x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: '0',
    max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
  }) : (0, y.dS)(e) && (null == c ? void 0 : c.size) != null ? o = x.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
    numSpeakers: c.size[0],
    numListeners: c.size[1] - c.size[0]
  }) : (null == c ? void 0 : c.size) != null && c.size.length >= 2 && (o = x.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
    count: c.size[0],
    max: c.size[1]
  })), (0, r.jsxs)('div', {
    className: s()(G.textXsNormal, G.textEllipsis),
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
})($, c),
en = (e => {
  if (!(0, h.Z)(e) || (0, p.Z)(e))
    return null;
  let {
    timestamps: t
  } = e;
  return null == t ? null : (0, E.Z)(e) ? (0, r.jsx)(B, {
    timestamps: t
  }) : (0, r.jsx)(R.ZP, {
    start: t.start,
    location: R.ZP.Locations.USER_ACTIVITY,
    className: s()(G.textXsNormal, G.textEllipsis),
    isApplicationStreaming: null != d
  });
})($);
  let er = (i = $, H && null != d ? null == V ? (0, r.jsx)('div', {
  className: s()(G.textXsNormal, {
    [G.textEllipsis]: !(0, I.Z)(i) && !(0, p.Z)(i)
  }),
  children: x.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
    guildName: d.name
  })
}) : (0, r.jsxs)('div', {
  className: s()(G.guildDetails, G.textXsNormal, {
    [G.textEllipsis]: !(0, I.Z)(i) && !(0, p.Z)(i)
  }),
  children: [
    (0, r.jsx)(N.Z, {
      guild: d,
      size: N.Z.Sizes.SMOL,
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
          children: null == V ? void 0 : V.name
        })
      ]
    })
  ]
}) : null),
ei = null != Y ? Y() : null,
ea = (e => {
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
    className: s()(G.timeBar, Q),
    themed: !0
  });
})($);
  return (0, r.jsxs)('div', {
className: s()(G.card, Z),
children: [
  (0, r.jsxs)(u.HeadingLevel, {
    children: [
      (() => {
        let e = X ? x.Z.Messages.USER_ACTIVITY_STREAMING : (0, o.EQ)($.type).with(U.IIU.PLAYING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).with(U.IIU.STREAMING, () => x.Z.Messages.USER_ACTIVITY_STREAMING).with(U.IIU.LISTENING, () => x.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(U.IIU.WATCHING, () => x.Z.Messages.USER_ACTIVITY_WATCHING).with(U.IIU.HANG_STATUS, () => x.Z.Messages.USER_ACTIVITY_CURRENTLY).with(U.IIU.COMPETING, () => x.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null);
        return null == e ? null : (0, r.jsx)(u.Heading, {
          variant: 'text-xs/medium',
          color: 'header-primary',
          children: e
        });
      })(),
      (0, r.jsxs)('div', {
        className: s()(G.body, Q),
        children: [
          (0, r.jsxs)('div', {
            className: G.content,
            children: [
              (() => {
                var e, t, i, o, l, u, d, h, I, T;
                let S = s()(G.imageSize, {
                  [G.fullSize]: q === P.y0.FULL_SIZE
                });
                if ($.type === U.IIU.HANG_STATUS)
                  return (0, r.jsx)('div', {
                    className: s()(G.hangStatusIconBackground, S),
                    children: (0, r.jsx)(O.Z, {
                      hangStatusActivity: $,
                      className: G.hangStatusIcon
                    })
                  });
                if (X)
                  return (0, r.jsx)(b.Z, {
                    src: n(132399),
                    alt: x.Z.Messages.FORM_LABEL_SCREENSHARE,
                    className: S
                  });
                if ((0, m.Z)($))
                  return (0, r.jsx)(b.Z, {
                    src: _.Z.get(U.ABu.XBOX).icon.customPNG,
                    alt: x.Z.Messages.XBOX,
                    className: S
                  });
                if (!(0, E.Z)($) && $.type === U.IIU.PLAYING && !a.bot)
                  return (0, r.jsx)(g.Z, {
                    game: c,
                    className: S
                  });
                if ((null === (e = $.assets) || void 0 === e ? void 0 : e.large_image) == null && (null === (t = $.assets) || void 0 === t ? void 0 : t.small_image) == null)
                  return null;
                let A = q === P.y0.FULL_SIZE ? 64 : 48,
                  N = q === P.y0.FULL_SIZE ? 30 : 20;
                return (null === (i = $.assets) || void 0 === i ? void 0 : i.large_image) == null ? (0, r.jsx)(b.Z, {
                  text: $.assets.small_text,
                  alt: null !== (l = $.assets.small_text) && void 0 !== l ? l : '',
                  src: k($.application_id, $.assets.small_image, A),
                  className: s()(G.largeImage, S)
                }) : (0, p.Z)($) ? (0, r.jsx)(b.Z, {
                  text: $.assets.large_text,
                  alt: null !== (u = $.assets.large_text) && void 0 !== u ? u : '',
                  src: k($.application_id, $.assets.large_image, A),
                  className: s()(G.largeImage, S),
                  onClick: () => K($, a.id)
                }) : (0, f.Z)($) ? (0, r.jsx)(b.Z, {
                  text: $.assets.large_text,
                  alt: null !== (d = $.assets.large_text) && void 0 !== d ? d : '',
                  src: k($.application_id, $.assets.large_image, q === P.y0.FULL_SIZE ? 86 : 64),
                  className: s()(G.largeImage, S, G.crunchyroll)
                }) : (null === (o = $.assets) || void 0 === o ? void 0 : o.small_image) == null || $.type !== U.IIU.PLAYING ? (0, r.jsx)(b.Z, {
                  text: $.assets.large_text,
                  alt: null !== (h = $.assets.large_text) && void 0 !== h ? h : '',
                  src: k($.application_id, $.assets.large_image, A),
                  className: s()(G.largeImage, S)
                }) : (0, r.jsxs)('div', {
                  className: s()(G.imageContainer, S),
                  children: [
                    (0, r.jsx)(b.Z, {
                      text: $.assets.large_text,
                      alt: null !== (I = $.assets.large_text) && void 0 !== I ? I : '',
                      src: k($.application_id, $.assets.large_image, A),
                      className: s()(G.largeImage, S)
                    }),
                    (0, r.jsx)(b.Z, {
                      text: $.assets.small_text,
                      alt: null !== (T = $.assets.small_text) && void 0 !== T ? T : '',
                      src: k($.application_id, $.assets.small_image, N),
                      className: s()(G.smallImage, S)
                    })
                  ]
                });
              })(),
              (0, r.jsxs)('div', {
                className: G.details,
                children: [
                  (0, r.jsxs)(u.Clickable, {
                    className: null != J ? G.clickable : void 0,
                    onClick: null != J ? () => {
                      J(), null == z || z();
                    } : void 0,
                    children: [
                      (() => {
                        let e = q === P.y0.FULL_SIZE ? void 0 : 1;
                        return $.type === U.IIU.HANG_STATUS ? (0, r.jsx)(M.Z, {
                          name: (0, v.O8)($),
                          lineClamp: e
                        }) : (0, p.Z)($) && null != $.sync_id && null != $.details ? (0, r.jsx)(M.Z, {
                          name: $.details,
                          lineClamp: e,
                          onClick: () => j($)
                        }) : $.type !== U.IIU.PLAYING ? (0, r.jsx)(M.Z, {
                          name: $.details,
                          lineClamp: e
                        }) : (0, r.jsx)(M.Z, {
                          name: $.name,
                          lineClamp: e
                        });
                      })(),
                      ee,
                      et,
                      en
                    ]
                  }),
                  ea,
                  er
                ]
              })
            ]
          }),
          (0, r.jsx)('div', {
            className: G.actions,
            children: ei
          })
        ]
      })
    ]
  }),
  (0, r.jsx)(F, {
    activity: $
  })
]
  });
}
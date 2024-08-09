n.d(t, {
  Z: function() {
return Z;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(278074),
  o = n(442837),
  l = n(481060),
  u = n(726542),
  c = n(841784),
  d = n(833664),
  _ = n(834353),
  E = n(802856),
  f = n(420660),
  h = n(100527),
  p = n(906732),
  m = n(314091),
  I = n(180335),
  T = n(810568),
  g = n(168524),
  S = n(833858),
  A = n(223135),
  N = n(769654),
  v = n(914010),
  O = n(502762),
  R = n(652853),
  C = n(979038),
  y = n(448980),
  D = n(194811),
  L = n(60241),
  b = n(373826),
  M = n(315324),
  P = n(582123),
  U = n(290274),
  w = n(553375),
  x = n(318134),
  G = n(228168),
  k = n(981631),
  B = n(701488),
  F = n(689938),
  V = n(692184);
let {
  getAssetImage: H
} = n(81063);

function Z(e) {
  let {
user: t,
currentUser: n,
activity: i,
application: Z,
guild: Y,
channel: j,
className: W,
onClose: K
  } = e, {
analyticsLocations: z
  } = (0, p.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), q = (0, o.e7)([v.Z], () => v.Z.getGuildId()), {
profileType: Q
  } = (0, R.z)(), X = {
[V.fullSize]: Q === G.y0.FULL_SIZE
  }, $ = (0, I.Bq)({
activity: i,
user: t
  }), J = (0, g.Z)({
location: 'UserProfileActivityCard',
source: T.m1.UserProfile,
trackEntryPointImpression: !0,
...(0, w.n)({
  user: t,
  activity: i,
  entry: $
})
  }), {
onAction: ee,
trackViewRef: et
  } = (0, x.Z)({
display: 'live',
user: t,
activity: i,
entry: $,
analyticsLocations: z
  }), en = (0, s.EQ)(i.type).with(k.IIU.PLAYING, () => F.Z.Messages.USER_ACTIVITY_PLAYING).with(k.IIU.STREAMING, () => F.Z.Messages.USER_ACTIVITY_STREAMING).with(k.IIU.LISTENING, () => F.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(k.IIU.WATCHING, () => F.Z.Messages.USER_ACTIVITY_WATCHING).with(k.IIU.HANG_STATUS, () => F.Z.Messages.USER_ACTIVITY_CURRENTLY).with(k.IIU.COMPETING, () => F.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null), er = () => {
var e, t, n, a;
if (i.type === k.IIU.HANG_STATUS)
  return (0, r.jsx)('div', {
    className: V.hangStatusIconBackground,
    children: (0, r.jsx)(A.Z, {
      hangStatusActivity: i,
      className: V.hangStatusIcon
    })
  });
let s = null === (e = i.assets) || void 0 === e ? void 0 : e.large_image,
  o = null === (t = i.assets) || void 0 === t ? void 0 : t.small_image,
  l = null === (n = i.assets) || void 0 === n ? void 0 : n.large_text,
  c = null === (a = i.assets) || void 0 === a ? void 0 : a.small_text,
  f = null == J ? void 0 : () => {
    ee({
      action: 'PRESS_GAME_IMAGE'
    }), J();
  };
if (null == s && null == o && (0, E.Z)(i)) {
  let e = u.Z.get(k.ABu.XBOX).icon.customPNG;
  return (0, r.jsx)(L.ZP, {
    image: {
      src: e,
      alt: F.Z.Messages.XBOX
    },
    onClick: f
  });
}
if (null == s && null == o && (0, _.Z)(i)) {
  let e = u.Z.get(k.ABu.PLAYSTATION).icon.customPNG;
  return (0, r.jsx)(L.ZP, {
    image: {
      src: e,
      alt: F.Z.Messages.PLAYSTATION
    },
    onClick: f
  });
}
return null == s && null != Z ? (0, r.jsx)(L.ZP, {
  image: {
    src: Z.getIconURL(L.WQ),
    alt: F.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
      applicationName: Z.name
    })
  },
  onClick: f
}) : null == s && null != o ? (0, r.jsx)(L.ZP, {
  image: {
    src: H(i.application_id, o, L.WQ),
    text: c
  },
  onClick: f
}) : null != o && (0, d.Z)(i) ? (0, r.jsx)(L.ZP, {
  image: {
    src: H(i.application_id, s, L.WQ),
    text: l
  },
  richImage: {
    src: H(i.application_id, o, L.Bp),
    text: c
  },
  onClick: f
}) : (0, r.jsx)(L.ZP, {
  image: {
    src: H(i.application_id, s, L.WQ),
    text: l
  },
  onClick: f
});
  }, ei = () => {
var e;
return i.type === k.IIU.HANG_STATUS ? (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: (0, S.O8)(i)
}) : (0, f.Z)(i) && null != j ? (0, r.jsxs)('div', {
  className: V.voiceChannelInfo,
  children: [
    (0, r.jsx)(l.VoiceNormalIcon, {
      size: 'xxs',
      color: l.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(b.Z, {
      variant: 'heading-sm/semibold',
      text: j.name
    })
  ]
}) : (0, d.Z)(i) ? (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: i.name
}) : (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: null !== (e = i.details) && void 0 !== e ? e : i.name
});
  }, ea = () => i.type === k.IIU.HANG_STATUS ? null : (0, f.Z)(i) && null != Y ? (0, r.jsx)(b.Z, {
variant: 'text-xs/normal',
text: F.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
  guildName: Y.name
}),
onClick: Y.id === q ? void 0 : () => {
  ee({
    action: 'OPEN_VOICE_CHANNEL'
  }), (0, N.X)(Y.id), null == K || K();
}
  }) : (0, d.Z)(i) ? (0, r.jsx)(b.Z, {
variant: 'text-xs/normal',
text: i.details
  }) : (0, r.jsx)(b.Z, {
text: i.state,
variant: 'text-xs/normal'
  }), es = () => {
var e;
return i.type === k.IIU.WATCHING ? null : (0, d.Z)(i) ? eo() : (0, r.jsx)(b.Z, {
  text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
  variant: 'text-xs/normal'
});
  }, eo = () => {
var e, t, n, a;
return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === B.Zc ? (0, r.jsxs)('div', {
  className: V.gameState,
  children: [
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: i.state
    }),
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: '0',
        max: null !== (a = null == Z ? void 0 : Z.getMaxParticipants()) && void 0 !== a ? a : 0
      })
    })
  ]
}) : (0, c.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
  className: V.gameState,
  children: [
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: i.state
    }),
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: i.party.size[0],
        max: i.party.size[1]
      })
    })
  ]
}) : null == i.party ? (0, r.jsx)(b.Z, {
  variant: 'text-xs/normal',
  text: i.state
}) : null;
  }, el = () => null == J ? (0, r.jsxs)('div', {
className: V.details,
children: [
  (0, r.jsxs)('div', {
    children: [
      ei(),
      ea(),
      es()
    ]
  }),
  (0, r.jsx)(y.Z, {
    user: t,
    activity: i,
    className: V.badges
  })
]
  }) : (0, r.jsxs)('div', {
className: V.details,
children: [
  (0, r.jsxs)(l.Clickable, {
    className: V.clickable,
    onClick: () => {
      ee({
        action: 'OPEN_GAME_PROFILE'
      }), J(), null == K || K();
    },
    children: [
      ei(),
      ea(),
      es()
    ]
  }),
  (0, r.jsx)(y.Z, {
    user: t,
    activity: i,
    className: V.badges
  })
]
  }), eu = () => null == Y || null == j ? null : (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)('div', {
    className: V.voiceChannelDivider
  }),
  (0, r.jsx)(M.Z, {
    user: t,
    guild: Y,
    channel: j,
    onAction: ee,
    onClose: K
  })
]
  }), ec = () => t.id === n.id ? null : (0, r.jsx)('div', {
className: a()(V.actions, X),
children: (0, r.jsx)(C.Z, {
  activity: i,
  user: t,
  currentUser: n,
  onAction: ee,
  onClose: K
})
  });
  return (0, r.jsx)(p.Gt, {
value: z,
children: (0, r.jsx)(P.Z, {
  user: t,
  onClose: K,
  children: e => {
    let {
      onAutoDismiss: n
    } = e;
    return (0, r.jsxs)(O.Z.Overlay, {
      className: a()(V.card, W),
      ref: et,
      children: [
        (0, r.jsx)(D.Z, {
          text: en,
          platform: (0, m.ZH)(i),
          tags: (0, r.jsx)(U.Z, {
            display: 'live',
            user: t,
            activity: i,
            entry: $,
            onClose: K,
            onRequestOpen: n
          })
        }),
        (0, r.jsxs)('div', {
          className: V.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(V.content, X),
              children: [
                er(),
                el(),
                Q === G.y0.FULL_SIZE && ec()
              ]
            }),
            eu()
          ]
        }),
        Q !== G.y0.FULL_SIZE && ec()
      ]
    });
  }
})
  });
}
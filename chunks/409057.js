n.d(t, {
  Z: function() {
return H;
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
  x = n(228168),
  G = n(981631),
  k = n(701488),
  B = n(689938),
  F = n(692184);
let {
  getAssetImage: V
} = n(81063);

function H(e) {
  let {
user: t,
currentUser: n,
activity: i,
application: H,
guild: Z,
channel: Y,
className: j,
onAction: W,
onClose: K
  } = e, {
analyticsLocations: z
  } = (0, p.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), q = (0, o.e7)([v.Z], () => v.Z.getGuildId()), {
profileType: Q
  } = (0, R.z)(), X = {
[F.fullSize]: Q === x.y0.FULL_SIZE
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
  }), ee = (0, s.EQ)(i.type).with(G.IIU.PLAYING, () => B.Z.Messages.USER_ACTIVITY_PLAYING).with(G.IIU.STREAMING, () => B.Z.Messages.USER_ACTIVITY_STREAMING).with(G.IIU.LISTENING, () => B.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(G.IIU.WATCHING, () => B.Z.Messages.USER_ACTIVITY_WATCHING).with(G.IIU.HANG_STATUS, () => B.Z.Messages.USER_ACTIVITY_CURRENTLY).with(G.IIU.COMPETING, () => B.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null), et = () => {
var e, t, n, a;
if (i.type === G.IIU.HANG_STATUS)
  return (0, r.jsx)('div', {
    className: F.hangStatusIconBackground,
    children: (0, r.jsx)(A.Z, {
      hangStatusActivity: i,
      className: F.hangStatusIcon
    })
  });
let s = null === (e = i.assets) || void 0 === e ? void 0 : e.large_image,
  o = null === (t = i.assets) || void 0 === t ? void 0 : t.small_image,
  l = null === (n = i.assets) || void 0 === n ? void 0 : n.large_text,
  c = null === (a = i.assets) || void 0 === a ? void 0 : a.small_text;
if (null == s && null == o && (0, E.Z)(i)) {
  let e = u.Z.get(G.ABu.XBOX).icon.customPNG;
  return (0, r.jsx)(L.ZP, {
    image: {
      src: e,
      alt: B.Z.Messages.XBOX
    },
    onClick: J
  });
}
if (null == s && null == o && (0, _.Z)(i)) {
  let e = u.Z.get(G.ABu.PLAYSTATION).icon.customPNG;
  return (0, r.jsx)(L.ZP, {
    image: {
      src: e,
      alt: B.Z.Messages.PLAYSTATION
    },
    onClick: J
  });
}
return null == s && null != H ? (0, r.jsx)(L.ZP, {
  image: {
    src: H.getIconURL(L.WQ),
    alt: B.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
      applicationName: H.name
    })
  },
  onClick: J
}) : null == s && null != o ? (0, r.jsx)(L.ZP, {
  image: {
    src: V(i.application_id, o, L.WQ),
    text: c
  },
  onClick: J
}) : null != o && (0, d.Z)(i) ? (0, r.jsx)(L.ZP, {
  image: {
    src: V(i.application_id, s, L.WQ),
    text: l
  },
  richImage: {
    src: V(i.application_id, o, L.Bp),
    text: c
  },
  onClick: J
}) : (0, r.jsx)(L.ZP, {
  image: {
    src: V(i.application_id, s, L.WQ),
    text: l
  },
  onClick: J
});
  }, en = () => {
var e;
return i.type === G.IIU.HANG_STATUS ? (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: (0, S.O8)(i)
}) : (0, f.Z)(i) && null != Y ? (0, r.jsxs)('div', {
  className: F.voiceChannelInfo,
  children: [
    (0, r.jsx)(l.VoiceNormalIcon, {
      size: 'xxs',
      color: l.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(b.Z, {
      variant: 'heading-sm/semibold',
      text: Y.name
    })
  ]
}) : (0, d.Z)(i) ? (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: i.name
}) : (0, r.jsx)(b.Z, {
  variant: 'heading-sm/semibold',
  text: null !== (e = i.details) && void 0 !== e ? e : i.name
});
  }, er = () => i.type === G.IIU.HANG_STATUS ? null : (0, f.Z)(i) && null != Z ? (0, r.jsx)(b.Z, {
variant: 'text-xs/normal',
text: B.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
  guildName: Z.name
}),
onClick: Z.id === q ? void 0 : () => {
  (0, N.X)(Z.id), null == K || K();
}
  }) : (0, d.Z)(i) ? (0, r.jsx)(b.Z, {
variant: 'text-xs/normal',
text: i.details
  }) : (0, r.jsx)(b.Z, {
text: i.state,
variant: 'text-xs/normal'
  }), ei = () => {
var e;
return i.type === G.IIU.WATCHING ? null : (0, d.Z)(i) ? ea() : (0, r.jsx)(b.Z, {
  text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
  variant: 'text-xs/normal'
});
  }, ea = () => {
var e, t, n, a;
return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === k.Zc ? (0, r.jsxs)('div', {
  className: F.gameState,
  children: [
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: i.state
    }),
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: '0',
        max: null !== (a = null == H ? void 0 : H.getMaxParticipants()) && void 0 !== a ? a : 0
      })
    })
  ]
}) : (0, c.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
  className: F.gameState,
  children: [
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: i.state
    }),
    (0, r.jsx)(b.Z, {
      variant: 'text-xs/normal',
      text: B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: i.party.size[0],
        max: i.party.size[1]
      })
    })
  ]
}) : null == i.party ? (0, r.jsx)(b.Z, {
  variant: 'text-xs/normal',
  text: i.state
}) : null;
  }, es = () => null == J ? (0, r.jsxs)('div', {
className: F.details,
children: [
  (0, r.jsxs)('div', {
    children: [
      en(),
      er(),
      ei()
    ]
  }),
  (0, r.jsx)(y.Z, {
    user: t,
    activity: i,
    className: F.badges
  })
]
  }) : (0, r.jsxs)('div', {
className: F.details,
children: [
  (0, r.jsxs)(l.Clickable, {
    className: F.clickable,
    onClick: () => {
      J(), null == K || K();
    },
    children: [
      en(),
      er(),
      ei()
    ]
  }),
  (0, r.jsx)(y.Z, {
    user: t,
    activity: i,
    className: F.badges
  })
]
  }), eo = () => null == Z || null == Y ? null : (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)('div', {
    className: F.voiceChannelDivider
  }),
  (0, r.jsx)(M.Z, {
    user: t,
    guild: Z,
    channel: Y,
    onClose: K
  })
]
  }), el = () => t.id === n.id ? null : (0, r.jsx)('div', {
className: a()(F.actions, X),
children: (0, r.jsx)(C.Z, {
  activity: i,
  user: t,
  currentUser: n,
  onAction: W,
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
      className: a()(F.card, j),
      children: [
        (0, r.jsx)(D.Z, {
          text: ee,
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
          className: F.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(F.content, X),
              children: [
                et(),
                es(),
                Q === x.y0.FULL_SIZE && el()
              ]
            }),
            eo()
          ]
        }),
        Q !== x.y0.FULL_SIZE && el()
      ]
    });
  }
})
  });
}
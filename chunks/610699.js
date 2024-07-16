n.d(t, {
  Z: function() {
return k;
  }
}), n(653041), n(47120), n(390547);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(442837),
  d = n(477690),
  u = n(481060),
  _ = n(447543),
  E = n(317381),
  I = n(778569),
  m = n(182906),
  T = n(884338),
  h = n(100527),
  N = n(906732),
  p = n(835473),
  f = n(471445),
  C = n(955415),
  g = n(601964),
  S = n(592125),
  A = n(430824),
  R = n(496675),
  O = n(594174),
  x = n(514342),
  M = n(624138),
  v = n(358595),
  L = n(981631),
  Z = n(245335),
  P = n(689938),
  b = n(556849);
let D = (0, M.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, M.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  U = (0, M.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function y(e) {
  let {
members: t,
membersOnline: n,
isLarge: a,
isStacked: s
  } = e, l = [];
  return null != n && n > 0 && l.push((0, i.jsxs)('div', {
className: b.statusWrapper,
children: [
  (0, i.jsx)('i', {
    className: b.statusOnline
  }),
  (0, i.jsx)(u.Text, {
    variant: 'text-xs/normal',
    className: b.count,
    children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
      membersOnline: n
    })
  })
]
  }, 'onlineCount')), null != t && l.push((0, i.jsxs)('div', {
className: b.statusWrapper,
children: [
  (0, i.jsx)('i', {
    className: b.statusOffline
  }),
  (0, i.jsx)(u.Text, {
    variant: 'text-xs/normal',
    className: b.count,
    children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
      count: t
    })
  })
]
  }, 'memberCount')), (0, i.jsx)('div', {
className: r()(b.statusCounts, {
  [b.large]: a,
  [b.stacked]: s
}),
children: l
  });
}

function B(e) {
  let {
channel: t,
guild: n,
isStacked: a,
hasEnded: s
  } = e;
  if (null != t && null != n) {
let e = (0, f.KS)(t, n);
return (0, i.jsxs)('div', {
  className: r()(b.channel, {
    [b.stacked]: a,
    [b.ended]: s
  }),
  children: [
    null != e ? (0, i.jsx)(e, {
      className: b.channelIcon,
      size: 'xs',
      color: 'currentColor'
    }) : null,
    (0, i.jsx)(x.Z, {
      children: (0, i.jsx)(u.Text, {
        variant: 'text-xs/normal',
        children: P.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: t.name,
          serverName: n.name
        })
      })
    })
  ]
});
  }
  return null != n ? (0, i.jsx)('div', {
className: r()(b.channel, {
  [b.stacked]: a,
  [b.ended]: s
}),
children: (0, i.jsx)(x.Z, {
  children: (0, i.jsx)(u.Text, {
    variant: 'text-xs/normal',
    children: P.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
      guildName: n.name
    })
  })
})
  }) : null;
}

function k(e) {
  var t, n;
  let s, l, {
  invite: d,
  getAcceptInviteContext: f
} = e,
{
  approximate_member_count: x,
  approximate_presence_count: M,
  target_type: k,
  target_application: G
} = d;
  o()(k === Z.Iq.EMBEDDED_APPLICATION && null != G, 'invalid application invite');
  let F = a.useRef(null),
[w, V] = a.useState(!1),
[H, Y] = a.useState(!1);
  a.useEffect(() => {
let e = new ResizeObserver(() => function() {
    var e;
    let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
    null != t && (V(t < U + j), Y(t <= 2 * D));
  }()),
  t = F.current;
return null != t && e.observe(t), () => {
  e.disconnect();
};
  }, [
F,
V,
Y
  ]);
  let W = (0, c.e7)([A.Z], () => null != d.guild ? A.Z.getGuild(d.guild.id) : null, [d]),
K = (0, p.Z)([G.id])[0],
z = (0, c.e7)([E.ZP], () => {
  var e;
  return (null == d ? void 0 : d.channel) != null && (null === (e = E.ZP.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === G.id;
}),
Q = (0, c.e7)([E.ZP], () => {
  var e;
  return ((null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? E.ZP.getEmbeddedActivitiesForChannel(d.channel.id) : []).some(e => {
    let {
      applicationId: t
    } = e;
    return G.id === t;
  });
}),
q = S.Z.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
X = (0, c.e7)([R.Z], () => null != q && R.Z.can(L.Plq.USE_EMBEDDED_ACTIVITIES, q), [q]),
{
  analyticsLocations: J
} = (0, N.ZP)(h.Z.INVITE_EMBED),
$ = (0, I.Z)({
  applicationId: G.id,
  size: D,
  names: ['embedded_cover']
}),
ee = (0, c.Wu)([E.ZP], () => null != q ? E.ZP.getEmbeddedActivitiesForChannel(q.id).filter(e => e.applicationId === G.id).flatMap(e => Array.from(e.userIds)) : [], [
  q,
  G.id
]),
et = (0, c.Wu)([O.default], () => ee.map(e => O.default.getUser(e)), [ee]),
en = d.state === L.r2o.ACCEPTING,
ei = null != W;
  if (null == W) {
if (null == d.guild)
  return (0, i.jsx)(v.Z, {});
W = new g.ZP(d.guild);
  }
  let ea = ei && !X || ei && z,
es = () => {
  _.Z.acceptInviteAndTransitionToInviteChannel({
    inviteKey: d.code,
    context: f('Invite Button Embed'),
    analyticsLocations: J
  });
};
  return (ei && z && (s = P.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !X && (s = P.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), l = z ? P.Z.Messages.INVITE_EMBED_JOINED : Q || !ei ? P.Z.Messages.JOIN : P.Z.Messages.START, null == d.code || '' === d.code) ? null : (0, i.jsxs)('div', {
className: b.container,
ref: F,
children: [
  (0, i.jsx)('div', {
    className: r()(b.imgContainer, {
      [b.large]: w,
      [b.stacked]: H
    }),
    children: (0, i.jsx)(m.Z, {
      imageBackground: $,
      applicationName: null !== (n = null == K ? void 0 : K.name) && void 0 !== n ? n : '',
      imageClassName: r()(b.img, {
        [b.large]: w,
        [b.stacked]: H
      }),
      imageNotFoundClassName: r()(b.brokenImg, {
        [b.large]: w,
        [b.stacked]: H
      })
    })
  }),
  (0, i.jsxs)(C.Z, {
    className: r()(b.content, {
      [b.large]: w,
      [b.stacked]: H
    }),
    children: [
      (0, i.jsxs)('div', {
        className: b.info,
        children: [
          (0, i.jsx)(u.FormTitle, {
            children: ei ? P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.Z.Messages.INVITE_BUTTON_TITLE_INVITED
          }),
          (0, i.jsx)(u.Heading, {
            className: b.heading,
            variant: 'heading-xl/semibold',
            children: null == K ? void 0 : K.name
          }),
          (0, i.jsx)(B, {
            channel: q,
            guild: W,
            isStacked: H,
            hasEnded: !Q
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: r()(b.currentState, {
          [b.large]: w,
          [b.split]: !Q && H
        }),
        children: [
          !Q && ei ? (0, i.jsxs)('div', {
            className: r()(b.endedNote, {
              [b.large]: w
            }),
            children: [
              (0, i.jsx)(u.Text, {
                variant: 'text-xs/medium',
                children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
              }),
              (0, i.jsx)(u.Text, {
                variant: 'text-xs/medium',
                children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_START
              })
            ]
          }) : null,
          ei ? null : (0, i.jsx)(y, {
            members: x,
            membersOnline: M,
            isLarge: w,
            isStacked: H
          }),
          (0, i.jsxs)('div', {
            className: b.cta,
            children: [
              null != W && Q ? (0, i.jsx)('div', {
                className: b.avatars,
                children: (0, i.jsx)(T.Z, {
                  guildId: W.id,
                  users: et,
                  max: 4
                })
              }) : null,
              (0, i.jsx)(u.Tooltip, {
                text: s,
                children: e => {
                  let {
                    onClick: t,
                    ...n
                  } = e;
                  return (0, i.jsx)(u.Button, {
                    className: b.actionButton,
                    onClick: () => {
                      es(), null == t || t();
                    },
                    wrapperClassName: b.tooltipButtonWrapper,
                    ...n,
                    submitting: en,
                    disabled: ea,
                    color: u.ButtonColors.GREEN,
                    children: l
                  });
                }
              })
            ]
          })
        ]
      })
    ]
  })
]
  });
}
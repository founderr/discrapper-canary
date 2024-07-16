n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  l = n(399606),
  s = n(481060),
  r = n(100527),
  o = n(906732),
  c = n(592125),
  d = n(810090),
  u = n(566620),
  g = n(146936),
  v = n(678173),
  m = n(636508),
  p = n(696068),
  x = n(361213),
  I = n(952561),
  f = n(778569),
  _ = n(182906),
  h = n(513202),
  C = n(412019),
  T = n(431136),
  E = n(226799),
  S = n(689938),
  j = n(795633);

function N(e) {
  var t;
  let {
applicationId: n,
guildId: g,
channelId: m,
onActivityLaunch: p
  } = e, {
analyticsLocations: I
  } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
  i.useEffect(() => {
(0, u.w1)({
  guildId: g
});
  }, [g]);
  let _ = (0, f.Z)({
  applicationId: null != n ? n : '',
  size: 2048
}),
h = (0, l.e7)([c.Z], () => c.Z.getChannel(m)),
C = (0, v.T)(null != g ? g : null, n, h);
  if (null == C)
return null;
  let T = null != C.activity.activity_preview_video_asset_id ? (0, x.Z)(n, C.activity.activity_preview_video_asset_id) : null,
N = E.o[n],
M = (null == N ? void 0 : N.playersSuggestionMin) != null && (null == N ? void 0 : N.playersSuggestionMax) != null ? ''.concat(N.playersSuggestionMin, ' - ').concat(N.playersSuggestionMax) : void 0;
  return (0, a.jsx)(o.Gt, {
value: I,
children: (0, a.jsx)('div', {
  className: j.scrollContainer,
  children: (0, a.jsxs)(s.Scroller, {
    className: j.scroller,
    children: [
      (0, a.jsx)('div', {
        className: j.launcherOuterContainer,
        children: (0, a.jsx)(b, {
          activityItem: C,
          onLaunch: p,
          channelId: m
        })
      }),
      (0, a.jsxs)('div', {
        className: j.activityDetailsContainer,
        children: [
          (0, a.jsxs)('div', {
            children: [
              null != T ? (0, a.jsx)('div', {
                className: j.heroVideoContainer,
                children: (0, a.jsx)(d.Z, {
                  loop: !0,
                  autoPlay: !0,
                  muted: !0,
                  className: j.heroVideo,
                  src: T,
                  poster: _.url
                })
              }) : null,
              (0, a.jsx)('div', {
                className: j.detailsTitle,
                children: (0, a.jsx)(s.Heading, {
                  variant: 'heading-xxl/bold',
                  children: C.application.name
                })
              }),
              (0, a.jsxs)('div', {
                className: j.detailsDetails,
                children: [
                  null != M ? (0, a.jsxs)('div', {
                    className: j.detailItem,
                    children: [
                      (0, a.jsx)(s.GroupIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: j.detailItemText,
                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                          nPlayers: M
                        })
                      })
                    ]
                  }) : null,
                  (null == N ? void 0 : N.timeSuggestionMinutes) != null ? (0, a.jsxs)('div', {
                    className: j.detailItem,
                    children: [
                      (0, a.jsx)(s.HourglassIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: j.detailItemText,
                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                          nMinutes: N.timeSuggestionMinutes
                        })
                      })
                    ]
                  }) : null,
                  (0, a.jsxs)('div', {
                    className: j.detailItem,
                    children: [
                      (0, a.jsx)(s.TagsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: j.detailItemText,
                        children: C.application.tags.slice(0, 3).join(', ')
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)(s.Heading, {
            variant: 'heading-lg/medium',
            className: j.detailsDescription,
            children: C.application.description
          }),
          (0, a.jsx)('div', {
            className: j.divider
          }),
          (0, a.jsx)('div', {
            className: j.imagesContainer,
            children: (null !== (t = null == N ? void 0 : N.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, a.jsx)('img', {
              src: e,
              alt: S.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                activityName: C.application.name
              }),
              className: j.activityImage
            }, e))
          })
        ]
      })
    ]
  })
})
  });
}

function b(e) {
  var t, r;
  let {
activityItem: d,
onLaunch: u,
channelId: v
  } = e, x = (0, f.Z)({
applicationId: d.application.id,
size: 2048
  }), {
analyticsLocations: E
  } = (0, o.ZP)(), N = (0, I.Z)(), [b, M] = i.useState(null !== (t = (0, m.$)({
allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== t ? t : void 0), [A, Z] = i.useState(null !== (r = (0, p.d)({
guildId: b,
allowGdmActivityChannelSuggestion: !0
  })) && void 0 !== r ? r : void 0), y = (0, l.e7)([c.Z], () => c.Z.getChannel(A), [A]), D = (0, m.W)(), L = (0, p.F)(b), O = i.useCallback(() => {
var e;
if (null != A)
  (0, g.Z)({
    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: N,
    channelId: A,
    guildId: b,
    embeddedActivitiesManager: h.Z,
    analyticsLocations: E
  }).then(u);
  }, [
d,
E,
N,
u,
A,
b
  ]), B = i.useCallback(() => {
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('60133'),
    n.e('91249')
  ]).then(n.bind(n, 827940));
  return t => (0, a.jsx)(e, {
    activityItem: d,
    ...t,
    analyticsLocations: E
  });
});
  }, [
d,
E
  ]), V = null == y || null != y.guild_id && !(null != b && null != A && D.some(e => e.value === b) && L.some(e => e.value.channel.id === A)) && !0;
  return (0, a.jsxs)('div', {
className: j.launcherInnerContainer,
children: [
  (0, a.jsx)(_.Z, {
    applicationName: d.application.name,
    imageBackground: x,
    imageClassName: j.launchImage,
    imageNotFoundClassName: j.brokenLaunchImage
  }),
  (0, a.jsx)(s.Text, {
    variant: 'text-md/medium',
    children: S.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
  }),
  null == v ? (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(s.Select, {
        placeholder: S.Z.Messages.GUILD_SELECT,
        optionClassName: j.__invalid_option,
        options: D,
        renderOptionValue: e => {
          let t = e.find(e => e.value === b);
          return null == t ? null : (0, a.jsx)(T.m, {
            guildId: t.value
          });
        },
        renderOptionLabel: e => {
          let {
            value: t
          } = e;
          return (0, a.jsx)(T.m, {
            guildId: t
          });
        },
        isSelected: e => e === b,
        select: e => {
          var t;
          M(e), Z(null !== (t = (0, p.d)({
            guildId: e
          })) && void 0 !== t ? t : void 0);
        },
        serialize: e => e
      }),
      (0, a.jsx)(s.Select, {
        placeholder: S.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
        optionClassName: j.__invalid_option,
        options: L,
        isSelected: e => {
          let {
            channel: t
          } = e;
          return t.id === A;
        },
        select: e => {
          let {
            channel: t
          } = e;
          return Z(t.id);
        },
        serialize: e => {
          let {
            channel: t
          } = e;
          return t.id;
        },
        renderOptionValue: () => {
          let e = L.find(e => e.value.channel.id === A);
          return null == e ? null : (0, a.jsx)(C.O, {
            channel: e.value.channel,
            users: e.value.users
          });
        },
        renderOptionLabel: e => {
          let {
            value: {
              channel: t,
              users: n
            }
          } = e;
          return (0, a.jsx)(C.O, {
            channel: t,
            users: n
          });
        }
      }),
      (0, a.jsx)(s.Button, {
        fullWidth: !0,
        disabled: V,
        onClick: O,
        children: S.Z.Messages.START
      }),
      (0, a.jsx)('div', {
        className: j.divider
      }),
      (0, a.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: B,
        children: S.Z.Messages.SHARE
      })
    ]
  }) : (0, a.jsxs)('div', {
    className: j.singleRowShareContainer,
    children: [
      (0, a.jsx)(s.Button, {
        fullWidth: !0,
        disabled: V,
        onClick: O,
        children: S.Z.Messages.START
      }),
      (0, a.jsx)(s.Button, {
        className: j.shareIconButton,
        color: s.Button.Colors.PRIMARY,
        onClick: B,
        children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {
          size: 'md',
          color: 'currentColor'
        })
      })
    ]
  })
]
  });
}
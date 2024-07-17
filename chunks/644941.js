s.r(a), s(47120), s(653041);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  c = s.n(i),
  E = s(758713),
  o = s(442837),
  _ = s(433517),
  I = s(481060),
  d = s(224706),
  u = s(812206),
  A = s(168551),
  O = s(485267),
  R = s(26033),
  N = s(561308),
  T = s(669764),
  m = s(962250),
  g = s(706454),
  P = s(768581),
  L = s(814225),
  M = s(810568),
  S = s(998058),
  G = s(839392),
  h = s(567409),
  C = s(774073),
  f = s(383895),
  p = s(183391),
  x = s(689938),
  v = s(421377);
let Z = 'GameProfileModal',
  K = e => {
let {
  game: a,
  onClose: s,
  trackClick: t
} = e, r = (0, o.e7)([u.Z], () => {
  var e;
  return u.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
});
if (null == a)
  return null;
let l = a.coverImageUrl;
return (0, n.jsx)(I.Tooltip, {
  text: a.name,
  children: e => {
    var i;
    return (0, n.jsx)(I.Clickable, {
      ...e,
      className: v.clickable,
      onClick: async () => {
        t(M.as.ClickSimilarGame, a.applicationId), (0, I.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(F, {
          applicationId: a.applicationId,
          source: M.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s();
      },
      children: (0, n.jsx)('img', {
        src: l,
        className: v.similarGames,
        alt: x.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == a ? void 0 : a.name
        })
      })
    });
  }
});
  },
  D = [
E.z.DESKTOP,
E.z.XBOX,
E.z.PLAYSTATION,
E.z.NINTENDO
  ],
  j = e => {
let {
  platforms: a
} = e, s = [...new Set(a)];
!s.includes(E.z.DESKTOP) && (s.includes(E.z.MACOS) || s.includes(E.z.LINUX)) && s.push(E.z.DESKTOP);
let t = (s = s.filter(e => D.includes(e))).map(e => {
  switch (e) {
    case E.z.DESKTOP:
      return (0, n.jsx)(I.ScreenIcon, {}, e);
    case E.z.XBOX:
      return (0, n.jsx)(I.XboxIcon, {}, e);
    case E.z.PLAYSTATION:
      return (0, n.jsx)(I.PlaystationIcon, {}, e);
    case E.z.NINTENDO:
      return (0, n.jsx)(I.NintendoSwitchNeutralIcon, {}, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: v.row,
  children: t
});
  },
  U = e => e.filter(C.z6).slice(0, 5),
  F = e => {
var a, r, i;
let {
  applicationId: E,
  source: D,
  sourceUserId: F,
  transitionState: b,
  onClose: w
} = e, {
  clientThemesClassName: B
} = (0, A.ZP)(), {
  width: Q,
  height: H
} = (0, m.b)(), [y, Y] = t.useState(null !== (a = _.K.get(Z)) && void 0 !== a ? a : {}), W = (0, o.e7)([g.default], () => g.default.locale), [k, V] = t.useState(!0), [z, X] = t.useState(!1), J = t.useRef(null), q = t.useMemo(() => (0, M.fP)(), []);
t.useEffect(() => {
  let e = J.current;
  null != e && X(e.scrollHeight - e.clientHeight > 1);
}, [
  J,
  Q,
  H
]), t.useEffect(() => {
  (0, O.J)();
}, []);
let $ = (0, o.Wu)([G.Z], () => {
    var e;
    return (null !== (e = G.Z.getSimilarGames(E)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  ee = (0, o.Wu)([T.Z], () => $.map(e => T.Z.getGame(e)).filter(C.W1).slice(0, 5)),
  ea = t.useRef([]);
t.useEffect(() => {
  ea.current = $;
}, [$]);
let {
  entries: es
} = (0, h.Z)(), en = t.useMemo(() => {
  var e;
  return null !== (e = null == es ? void 0 : es.filter(e => (0, R.d)(e) && e.extra.application_id === E)) && void 0 !== e ? e : [];
}, [
  es,
  E
]);
t.useEffect(() => {
  var e, a;
  return (0, M.IS)({
    source: D,
    viewId: q,
    applicationId: E,
    gameName: null !== (a = null !== (e = null == er ? void 0 : er.name) && void 0 !== e ? e : null == et ? void 0 : et.name) && void 0 !== a ? a : '',
    authorId: F
  }), () => {
    var e, a;
    let s = Date.now(),
      n = en.map(e => {
        let a = (0, N.kr)(e) ? (0, N.T_)(e, s) : (0, N.GL)(e, W);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: a
        });
      });
    (0, M.wz)({
      viewId: q,
      applicationId: E,
      gameName: null !== (a = null !== (e = null == er ? void 0 : er.name) && void 0 !== e ? e : null == et ? void 0 : et.name) && void 0 !== a ? a : '',
      playedFriendIds: en.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: U(ea.current)
    });
  };
}, []), t.useEffect(() => {
  0 === $.length && (0, S.i)(E);
}, [
  E,
  $
]), t.useEffect(() => {
  d.Z.getDetectableGamesSupplemental([
    E,
    ...$
  ]);
}, [
  E,
  $
]);
let et = u.Z.getApplication(E),
  er = (0, o.e7)([T.Z], () => T.Z.getGame(E)),
  el = t.useMemo(() => null == er ? void 0 : er.genres.map(L.P3).join(', '), [er]),
  ei = t.useMemo(() => {
    if (null == er)
      return 0;
    let {
      artwork: e,
      screenshots: a
    } = er;
    if (e.length > 0) {
      let a = Math.floor(Math.random() * (e.length - 1));
      return e[a];
    }
    if (a.length > 0) {
      let e = Math.floor(Math.random() * (a.length - 1));
      return a[e];
    }
    return '';
  }, [er]),
  ec = t.useMemo(() => {
    var e, a;
    let s = (null !== (e = null == er ? void 0 : er.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...s,
      ...(null !== (a = null == er ? void 0 : er.screenshots) && void 0 !== a ? a : []).map(e => ({
        src: e
      }))
    ];
  }, [
    null == er ? void 0 : er.artwork,
    null == er ? void 0 : er.screenshots
  ]),
  eE = (e, a) => {
    (0, M.UE)({
      gameName: null != e_ ? e_ : '',
      applicationId: E,
      action: e,
      similarGameId: a,
      viewId: q
    });
  },
  {
    shouldOpenGameProfile: eo
  } = (0, C.ZP)({
    location: 'GameProfileModal',
    applicationId: E,
    trackEntryPointImpression: !1
  });
if (c()(eo, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == er)
  return null;
let e_ = null !== (r = er.name) && void 0 !== r ? r : null == et ? void 0 : et.name,
  eI = null == et ? void 0 : et.getIconURL(160, P.$k ? 'webp' : 'png'),
  ed = null !== (i = er.coverImageUrl) && void 0 !== i ? i : eI,
  {
    summary: eu,
    websites: eA,
    publishers: eO,
    platforms: eR
  } = er,
  eN = y[E];
return (0, n.jsxs)(I.ModalRoot, {
  transitionState: b,
  size: I.ModalSize.DYNAMIC,
  className: l()(B, v.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: v.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: v.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(ei, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: v.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)('div', {
      className: l()(v.content, v.column, v.headerInfo),
      children: [
        (0, n.jsx)('div', {
          className: v.logoWrapper,
          children: null != ed && (0, n.jsx)('img', {
            className: v.logo,
            src: ed,
            alt: x.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: e_
            })
          })
        }),
        (0, n.jsxs)('div', {
          className: l()(v.row, v.gapSm, v.gameDetails),
          children: [
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(I.Heading, {
                  variant: 'heading-xl/bold',
                  children: e_
                }),
                (0, n.jsxs)('div', {
                  className: l()(v.row, v.gapSm),
                  children: [
                    (0, n.jsx)(I.Text, {
                      variant: 'text-sm/semibold',
                      color: 'text-muted',
                      children: el
                    }),
                    null != eI && (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(I.Text, {
                          variant: 'text-sm/semibold',
                          children: ' \u2022 '
                        }),
                        (0, n.jsx)('img', {
                          src: eI,
                          height: 16,
                          alt: x.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                            game: e_
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)('div', {
              children: (0, n.jsx)(I.Tooltip, {
                text: eN ? x.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : x.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                children: e => (0, n.jsxs)(I.Button, {
                  ...e,
                  innerClassName: v.followButton,
                  color: eN ? I.Button.Colors.PRIMARY : I.Button.Colors.BRAND,
                  onClick: () => {
                    let e = {
                      ...y
                    };
                    e[E] = !e[E], Y(e), _.K.set(Z, e), eE(e[E] ? M.as.FollowGame : M.as.UnfollowGame);
                  },
                  children: [
                    eN ? (0, n.jsx)(I.BellSlashIcon, {
                      color: 'white'
                    }) : (0, n.jsx)(I.BellIcon, {
                      color: 'white'
                    }),
                    eN ? x.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : x.Z.Messages.FOLLOW
                  ]
                })
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(I.Scroller, {
      children: (0, n.jsxs)('div', {
        className: l()(v.content, v.mainContent),
        children: [
          (0, n.jsxs)('div', {
            className: v.column,
            children: [
              (0, n.jsx)(I.Heading, {
                variant: 'heading-md/bold',
                color: 'text-primary',
                children: x.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
              }),
              (0, n.jsxs)('div', {
                className: v.section,
                children: [
                  0 === en.length && (0, n.jsx)(I.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-primary',
                    className: v.emptyFriendsWhoPlay,
                    children: x.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  }),
                  (0, n.jsx)('div', {
                    className: l()(v.column, v.gapNone),
                    children: null == en ? void 0 : en.map(e => (0, n.jsx)(f.Z, {
                      entry: e,
                      viewId: q,
                      onClose: w
                    }, e.id))
                  })
                ]
              }),
              ec.length > 0 && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(I.Heading, {
                    variant: 'heading-md/bold',
                    children: x.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, n.jsx)(I.Scroller, {
                    style: {
                      overflowY: 'visible'
                    },
                    className: l()(v.row, v.imageScroller),
                    orientation: 'horizontal',
                    children: ec.map((e, a) => (0, n.jsx)(I.Clickable, {
                      className: v.clickable,
                      onClick: () => {
                        eE(M.as.ClickImage), (0, I.openModalLazy)(async () => {
                          let {
                            default: e
                          } = await s.e('99857').then(s.bind(s, 895023));
                          return s => {
                            let {
                              ...t
                            } = s;
                            return (0, n.jsx)(e, {
                              className: v.mediaModal,
                              ...t,
                              items: ec,
                              startingIndex: a
                            });
                          };
                        });
                      },
                      children: (0, n.jsx)('img', {
                        src: e.src,
                        className: v.gameArtwork,
                        alt: x.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                          game: e_
                        })
                      })
                    }, e.src))
                  })
                ]
              }),
              ee.length > 0 && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(I.Heading, {
                    variant: 'heading-md/bold',
                    children: x.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                  }),
                  (0, n.jsx)('div', {
                    className: v.row,
                    style: {},
                    children: ee.map(e => (0, n.jsx)(K, {
                      game: e,
                      onClose: w,
                      trackClick: eE
                    }, null == e ? void 0 : e.applicationId))
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: l()(v.sidebar, v.column, v.padded),
            children: [
              (0, n.jsx)(I.Heading, {
                variant: 'heading-md/bold',
                children: x.Z.Messages.ABOUT
              }),
              null != eu && (0, n.jsxs)('div', {
                className: l()(v.column, v.gapSm),
                children: [
                  (0, n.jsx)(I.Text, {
                    ref: J,
                    lineClamp: k ? 8 : void 0,
                    variant: 'text-sm/normal',
                    children: eu
                  }),
                  (z || !k) && (0, n.jsx)(I.Clickable, {
                    className: v.clickable,
                    onClick: () => {
                      eE(k ? M.as.ShowMore : M.as.ShowLess), V(!k);
                    },
                    children: (0, n.jsx)(I.Text, {
                      variant: 'text-sm/semibold',
                      children: k ? x.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : x.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                    })
                  })
                ]
              }),
              (0, n.jsx)(p.Z, {
                websites: eA,
                trackClick: eE
              }),
              (eO.length > 0 || eR.length > 0) && (0, n.jsxs)('div', {
                className: l()(v.column),
                children: [
                  eO.length > 0 && (0, n.jsxs)('div', {
                    className: l()(v.column, v.gapSm),
                    children: [
                      (0, n.jsx)(I.Text, {
                        variant: 'text-xs/semibold',
                        children: x.Z.Messages.GAME_PROFILE_PUBLISHER
                      }),
                      (0, n.jsx)(I.Text, {
                        variant: 'text-sm/normal',
                        children: eO.join(', ')
                      })
                    ]
                  }),
                  eR.length > 0 && (0, n.jsxs)('div', {
                    className: l()(v.column, v.gapSm),
                    children: [
                      (0, n.jsx)(I.Text, {
                        variant: 'text-xs/semibold',
                        children: x.Z.Messages.GAME_PROFILE_PLATFORMS
                      }),
                      (0, n.jsx)(j, {
                        platforms: eR
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  ]
});
  };
a.default = F;
s.r(a), s(47120), s(653041);
var n = s(735250),
  t = s(470079),
  l = s(120356),
  r = s.n(l),
  i = s(512722),
  o = s.n(i),
  c = s(913527),
  E = s.n(c),
  _ = s(758713),
  d = s(705512),
  u = s(442837),
  I = s(433517),
  A = s(481060),
  N = s(224706),
  O = s(812206),
  R = s(168551),
  m = s(485267),
  T = s(26033),
  g = s(561308),
  P = s(669764),
  L = s(962250),
  M = s(706454),
  S = s(768581),
  f = s(814225),
  G = s(709054),
  h = s(810568),
  v = s(998058),
  C = s(839392),
  x = s(567409),
  p = s(774073),
  Z = s(383895),
  j = s(183391),
  D = s(206583),
  K = s(689938),
  B = s(421377);
let U = 'GameProfileModal',
  w = e => {
let {
  game: a,
  onClose: s,
  trackClick: t
} = e, l = (0, u.e7)([O.Z], () => {
  var e;
  return O.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
});
if (null == a)
  return null;
let r = a.coverImageUrl;
return (0, n.jsx)(A.Tooltip, {
  text: a.name,
  children: e => {
    var i;
    return (0, n.jsx)(A.Clickable, {
      ...e,
      className: B.clickable,
      onClick: async () => {
        t(h.as.ClickSimilarGame, a.applicationId), (0, A.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(Q, {
          applicationId: a.applicationId,
          source: h.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s();
      },
      children: (0, n.jsx)('img', {
        src: r,
        className: B.similarGames,
        alt: K.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == l ? void 0 : l.name) && void 0 !== i ? i : null == a ? void 0 : a.name
        })
      })
    });
  }
});
  },
  F = () => (0, n.jsxs)('div', {
className: B.gameBadge,
children: [
  (0, n.jsx)(A.FireIcon, {
    size: 'xxs'
  }),
  (0, n.jsx)(A.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: K.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
]
  }),
  y = [
_.z.DESKTOP,
_.z.XBOX,
_.z.PLAYSTATION,
_.z.NINTENDO
  ],
  H = e => {
let {
  platforms: a
} = e, s = [...new Set(a)];
!s.includes(_.z.DESKTOP) && (s.includes(_.z.MACOS) || s.includes(_.z.LINUX)) && s.push(_.z.DESKTOP);
let t = (s = s.filter(e => y.includes(e))).map(e => {
  switch (e) {
    case _.z.DESKTOP:
      return (0, n.jsx)(A.ScreenIcon, {}, e);
    case _.z.XBOX:
      return (0, n.jsx)(A.XboxIcon, {}, e);
    case _.z.PLAYSTATION:
      return (0, n.jsx)(A.PlaystationIcon, {}, e);
    case _.z.NINTENDO:
      return (0, n.jsx)(A.NintendoSwitchNeutralIcon, {}, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: B.row,
  children: t
});
  },
  b = e => e.filter(p.z6).slice(0, 5),
  Q = e => {
var a, l, i;
let {
  applicationId: c,
  source: _,
  sourceUserId: y,
  transitionState: Q,
  onClose: k
} = e, {
  clientThemesClassName: Y
} = (0, R.ZP)(), {
  width: W,
  height: V
} = (0, L.b)(), [z, X] = t.useState(null !== (a = I.K.get(U)) && void 0 !== a ? a : {}), J = (0, u.e7)([M.default], () => M.default.locale), [q, $] = t.useState(!0), [ee, ea] = t.useState(!1), es = t.useRef(null), en = t.useMemo(() => (0, h.fP)(), []);
t.useEffect(() => {
  let e = es.current;
  null != e && ea(e.scrollHeight - e.clientHeight > 1);
}, [
  es,
  W,
  V
]), t.useEffect(() => {
  (0, m.Jn)();
}, []);
let et = (0, u.Wu)([C.Z], () => {
    var e;
    return (null !== (e = C.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  el = (0, u.Wu)([P.Z], () => et.map(e => P.Z.getGame(e)).filter(p.W1).slice(0, 5)),
  er = t.useRef([]);
t.useEffect(() => {
  er.current = et;
}, [et]);
let {
  entries: ei
} = (0, x.Z)(), eo = t.useMemo(() => {
  var e;
  return null !== (e = null == ei ? void 0 : ei.filter(e => (0, T.dX)(e) && e.extra.application_id === c)) && void 0 !== e ? e : [];
}, [
  ei,
  c
]);
t.useEffect(() => {
  var e, a;
  return (0, h.IS)({
    source: _,
    viewId: en,
    applicationId: c,
    gameName: null !== (a = null !== (e = null == eE ? void 0 : eE.name) && void 0 !== e ? e : null == ec ? void 0 : ec.name) && void 0 !== a ? a : '',
    authorId: y
  }), () => {
    var e, a;
    let s = Date.now(),
      n = eo.map(e => {
        let a = (0, g.kr)(e) ? (0, g.T_)(e, s) : (0, g.GL)(e, J);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: a
        });
      });
    (0, h.wz)({
      viewId: en,
      applicationId: c,
      gameName: null !== (a = null !== (e = null == eE ? void 0 : eE.name) && void 0 !== e ? e : null == ec ? void 0 : ec.name) && void 0 !== a ? a : '',
      playedFriendIds: eo.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: b(er.current)
    });
  };
}, []), t.useEffect(() => {
  0 === et.length && (0, v.i)(c);
}, [
  c,
  et
]), t.useEffect(() => {
  N.Z.getDetectableGamesSupplemental([
    c,
    ...et
  ]);
}, [
  c,
  et
]);
let ec = O.Z.getApplication(c),
  eE = (0, u.e7)([P.Z], () => P.Z.getGame(c)),
  e_ = t.useMemo(() => null == eE ? void 0 : eE.genres.map(f.P3).join(', '), [eE]),
  ed = t.useMemo(() => {
    if (null == eE)
      return 0;
    let {
      artwork: e,
      screenshots: a
    } = eE;
    if (e.length > 0) {
      let a = Math.floor(Math.random() * (e.length - 1));
      return e[a];
    }
    if (a.length > 0) {
      let e = Math.floor(Math.random() * (a.length - 1));
      return a[e];
    }
    return '';
  }, [eE]),
  eu = t.useMemo(() => {
    var e, a;
    let s = (null !== (e = null == eE ? void 0 : eE.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (a = null == eE ? void 0 : eE.screenshots) && void 0 !== a ? a : []).map(e => ({
        src: e
      })),
      ...s
    ];
  }, [
    null == eE ? void 0 : eE.artwork,
    null == eE ? void 0 : eE.screenshots
  ]),
  eI = (e, a) => {
    (0, h.UE)({
      gameName: null != eN ? eN : '',
      applicationId: c,
      action: e,
      similarGameId: a,
      viewId: en
    });
  },
  {
    shouldOpenGameProfile: eA
  } = (0, p.ZP)({
    location: 'GameProfileModal',
    applicationId: c,
    trackEntryPointImpression: !1
  });
if (o()(eA, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == eE)
  return null;
let eN = null !== (l = eE.name) && void 0 !== l ? l : null == ec ? void 0 : ec.name,
  eO = null == ec ? void 0 : ec.getIconURL(160, S.$k ? 'webp' : 'png'),
  eR = null !== (i = eE.coverImageUrl) && void 0 !== i ? i : eO,
  {
    summary: em,
    websites: eT,
    publishers: eg,
    platforms: eP
  } = eE,
  eL = z[c],
  eM = G.default.extractTimestamp(c),
  eS = E()().diff(E()(eM), 'days') <= D.G,
  ef = eo.some(e => (0, g.ig)(e) === d.o.GLOBAL);
return (0, n.jsxs)(A.ModalRoot, {
  transitionState: Q,
  size: A.ModalSize.DYNAMIC,
  className: r()(Y, B.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: B.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: B.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(ed, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: B.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)(A.Scroller, {
      children: [
        (0, n.jsxs)('div', {
          className: r()(B.content, B.column, B.headerInfo),
          children: [
            (0, n.jsx)('div', {
              className: B.logoWrapper,
              children: null != eR && (0, n.jsx)('img', {
                className: B.logo,
                src: eR,
                alt: K.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game: eN
                })
              })
            }),
            (0, n.jsxs)('div', {
              className: r()(B.row, B.gapSm, B.gameDetails),
              children: [
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-xl/bold',
                      children: eN
                    }),
                    (0, n.jsxs)('div', {
                      className: r()(B.row, B.gapSm),
                      children: [
                        null != eO && (0, n.jsx)('img', {
                          src: eO,
                          height: 16,
                          alt: K.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                            game: eN
                          })
                        }),
                        (0, n.jsx)(A.Text, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: e_
                        }),
                        eS && (0, n.jsx)(A.Text, {
                          variant: 'eyebrow',
                          className: B.newBadge,
                          children: K.Z.Messages.NEW
                        }),
                        ef && (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(A.Text, {
                              variant: 'text-sm/semibold',
                              children: ' \u2022 '
                            }),
                            (0, n.jsx)(F, {})
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(A.Tooltip, {
                    text: eL ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : K.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                    children: e => (0, n.jsxs)(A.Button, {
                      ...e,
                      innerClassName: B.followButton,
                      color: eL ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                      onClick: () => {
                        let e = {
                          ...z
                        };
                        e[c] = !e[c], X(e), I.K.set(U, e), eI(e[c] ? h.as.FollowGame : h.as.UnfollowGame);
                      },
                      children: [
                        eL ? (0, n.jsx)(A.BellSlashIcon, {
                          color: 'white'
                        }) : (0, n.jsx)(A.BellIcon, {
                          color: 'white'
                        }),
                        eL ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : K.Z.Messages.FOLLOW
                      ]
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: r()(B.content, B.mainContent),
          children: [
            (0, n.jsxs)('div', {
              className: B.column,
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  color: 'text-primary',
                  children: K.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }),
                (0, n.jsxs)('div', {
                  className: B.section,
                  children: [
                    0 === eo.length && (0, n.jsx)(A.Text, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: B.emptyFriendsWhoPlay,
                      children: K.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                    }),
                    (0, n.jsx)('div', {
                      className: r()(B.column, B.gapNone),
                      children: null == eo ? void 0 : eo.map(e => (0, n.jsx)(Z.Z, {
                        entry: e,
                        viewId: en,
                        onClose: k
                      }, e.id))
                    })
                  ]
                }),
                eu.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: K.Z.Messages.GAME_PROFILE_SCREENSHOTS
                    }),
                    (0, n.jsx)(A.Scroller, {
                      style: {
                        overflowY: 'visible'
                      },
                      className: r()(B.row, B.imageScroller),
                      orientation: 'horizontal',
                      children: eu.map((e, a) => (0, n.jsx)(A.Clickable, {
                        className: B.clickable,
                        onClick: () => {
                          eI(h.as.ClickImage), (0, A.openModalLazy)(async () => {
                            let {
                              default: e
                            } = await s.e('99857').then(s.bind(s, 895023));
                            return s => {
                              let {
                                ...t
                              } = s;
                              return (0, n.jsx)(e, {
                                className: B.mediaModal,
                                ...t,
                                items: eu,
                                startingIndex: a
                              });
                            };
                          });
                        },
                        children: (0, n.jsx)('img', {
                          src: e.src,
                          className: B.gameArtwork,
                          alt: K.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                            game: eN
                          })
                        })
                      }, e.src))
                    })
                  ]
                }),
                el.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: K.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, n.jsx)('div', {
                      className: B.row,
                      style: {},
                      children: el.map(e => (0, n.jsx)(w, {
                        game: e,
                        onClose: k,
                        trackClick: eI
                      }, null == e ? void 0 : e.applicationId))
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className: r()(B.sidebar, B.column, B.padded),
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  children: K.Z.Messages.ABOUT
                }),
                null != em && (0, n.jsxs)('div', {
                  className: r()(B.column, B.gapSm),
                  children: [
                    (0, n.jsx)(A.Text, {
                      ref: es,
                      lineClamp: q ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: em
                    }),
                    (ee || !q) && (0, n.jsx)(A.Clickable, {
                      className: B.clickable,
                      onClick: () => {
                        eI(q ? h.as.ShowMore : h.as.ShowLess), $(!q);
                      },
                      children: (0, n.jsx)(A.Text, {
                        variant: 'text-sm/semibold',
                        children: q ? K.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : K.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                      })
                    })
                  ]
                }),
                (0, n.jsx)(j.Z, {
                  websites: eT,
                  trackClick: eI
                }),
                (eg.length > 0 || eP.length > 0) && (0, n.jsxs)('div', {
                  className: r()(B.column),
                  children: [
                    eg.length > 0 && (0, n.jsxs)('div', {
                      className: r()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(A.Text, {
                          variant: 'text-xs/semibold',
                          children: K.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsx)(A.Text, {
                          variant: 'text-sm/normal',
                          children: eg.join(', ')
                        })
                      ]
                    }),
                    eP.length > 0 && (0, n.jsxs)('div', {
                      className: r()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(A.Text, {
                          variant: 'text-xs/semibold',
                          children: K.Z.Messages.GAME_PROFILE_PLATFORMS
                        }),
                        (0, n.jsx)(H, {
                          platforms: eP
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  ]
});
  };
a.default = Q;
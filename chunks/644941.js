s.r(a), s(47120), s(653041);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  c = s.n(i),
  o = s(913527),
  E = s.n(o),
  _ = s(758713),
  u = s(705512),
  d = s(442837),
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
  G = s(814225),
  h = s(709054),
  f = s(810568),
  x = s(998058),
  p = s(839392),
  C = s(567409),
  v = s(774073),
  Z = s(383895),
  j = s(183391),
  D = s(206583),
  K = s(689938),
  w = s(421377);
let U = 'GameProfileModal',
  B = e => {
let {
  game: a,
  onClose: s,
  trackClick: t
} = e, r = (0, d.e7)([O.Z], () => {
  var e;
  return O.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
});
if (null == a)
  return null;
let l = a.coverImageUrl;
return (0, n.jsx)(A.Tooltip, {
  text: a.name,
  children: e => {
    var i;
    return (0, n.jsx)(A.Clickable, {
      ...e,
      className: w.clickable,
      onClick: async () => {
        t(f.as.ClickSimilarGame, a.applicationId), (0, A.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(Q, {
          applicationId: a.applicationId,
          source: f.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s();
      },
      children: (0, n.jsx)('img', {
        src: l,
        className: w.similarGames,
        alt: K.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == a ? void 0 : a.name
        })
      })
    });
  }
});
  },
  F = () => (0, n.jsxs)('div', {
className: w.gameBadge,
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
  className: w.row,
  children: t
});
  },
  b = e => e.filter(v.z6).slice(0, 5),
  Q = e => {
var a, r, i;
let {
  applicationId: o,
  source: _,
  sourceUserId: y,
  transitionState: Q,
  onClose: k
} = e, {
  clientThemesClassName: W
} = (0, R.ZP)(), {
  width: Y,
  height: V
} = (0, L.b)(), [z, X] = t.useState(null !== (a = I.K.get(U)) && void 0 !== a ? a : {}), J = (0, d.e7)([M.default], () => M.default.locale), [q, $] = t.useState(!0), [ee, ea] = t.useState(!1), es = t.useRef(null), en = t.useMemo(() => (0, f.fP)(), []);
t.useEffect(() => {
  let e = es.current;
  null != e && ea(e.scrollHeight - e.clientHeight > 1);
}, [
  es,
  Y,
  V
]), t.useEffect(() => {
  (0, m.Jn)();
}, []);
let et = (0, d.Wu)([p.Z], () => {
    var e;
    return (null !== (e = p.Z.getSimilarGames(o)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  er = (0, d.Wu)([P.Z], () => et.map(e => P.Z.getGame(e)).filter(v.W1).slice(0, 5)),
  el = t.useRef([]);
t.useEffect(() => {
  el.current = et;
}, [et]);
let {
  entries: ei
} = (0, C.Z)(), ec = t.useMemo(() => {
  var e;
  return null !== (e = null == ei ? void 0 : ei.filter(e => (0, T.dX)(e) && e.extra.application_id === o)) && void 0 !== e ? e : [];
}, [
  ei,
  o
]);
t.useEffect(() => {
  var e, a;
  return (0, f.IS)({
    source: _,
    viewId: en,
    applicationId: o,
    gameName: null !== (a = null !== (e = null == eE ? void 0 : eE.name) && void 0 !== e ? e : null == eo ? void 0 : eo.name) && void 0 !== a ? a : '',
    authorId: y
  }), () => {
    var e, a;
    let s = Date.now(),
      n = ec.map(e => {
        let a = (0, g.kr)(e) ? (0, g.T_)(e, s) : (0, g.GL)(e, J);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: a
        });
      });
    (0, f.wz)({
      viewId: en,
      applicationId: o,
      gameName: null !== (a = null !== (e = null == eE ? void 0 : eE.name) && void 0 !== e ? e : null == eo ? void 0 : eo.name) && void 0 !== a ? a : '',
      playedFriendIds: ec.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: b(el.current)
    });
  };
}, []), t.useEffect(() => {
  0 === et.length && (0, x.i)(o);
}, [
  o,
  et
]), t.useEffect(() => {
  N.Z.getDetectableGamesSupplemental([
    o,
    ...et
  ]);
}, [
  o,
  et
]);
let eo = O.Z.getApplication(o),
  eE = (0, d.e7)([P.Z], () => P.Z.getGame(o)),
  e_ = t.useMemo(() => null == eE ? void 0 : eE.genres.map(G.P3).join(', '), [eE]),
  eu = t.useMemo(() => {
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
  ed = t.useMemo(() => {
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
    (0, f.UE)({
      gameName: null != eN ? eN : '',
      applicationId: o,
      action: e,
      similarGameId: a,
      viewId: en
    });
  },
  {
    shouldOpenGameProfile: eA
  } = (0, v.ZP)({
    location: 'GameProfileModal',
    applicationId: o,
    trackEntryPointImpression: !1
  });
if (c()(eA, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == eE)
  return null;
let eN = null !== (r = eE.name) && void 0 !== r ? r : null == eo ? void 0 : eo.name,
  eO = null == eo ? void 0 : eo.getIconURL(160, S.$k ? 'webp' : 'png'),
  eR = null !== (i = eE.coverImageUrl) && void 0 !== i ? i : eO,
  {
    summary: em,
    websites: eT,
    publishers: eg,
    platforms: eP
  } = eE,
  eL = z[o],
  eM = h.default.extractTimestamp(o),
  eS = E()().diff(E()(eM), 'days') <= D.G,
  eG = ec.some(e => (0, g.ig)(e) === u.o.GLOBAL);
return (0, n.jsxs)(A.ModalRoot, {
  transitionState: Q,
  size: A.ModalSize.DYNAMIC,
  className: l()(W, w.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: w.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: w.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(eu, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: w.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)(A.Scroller, {
      children: [
        (0, n.jsxs)('div', {
          className: l()(w.content, w.column, w.headerInfo),
          children: [
            (0, n.jsx)('div', {
              className: w.logoWrapper,
              children: null != eR && (0, n.jsx)('img', {
                className: w.logo,
                src: eR,
                alt: K.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game: eN
                })
              })
            }),
            (0, n.jsxs)('div', {
              className: l()(w.row, w.gapSm, w.gameDetails),
              children: [
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-xl/bold',
                      children: eN
                    }),
                    (0, n.jsxs)('div', {
                      className: l()(w.row, w.gapSm),
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
                          className: w.newBadge,
                          children: K.Z.Messages.NEW
                        }),
                        eG && (0, n.jsxs)(n.Fragment, {
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
                      innerClassName: w.followButton,
                      color: eL ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                      onClick: () => {
                        let e = {
                          ...z
                        };
                        e[o] = !e[o], X(e), I.K.set(U, e), eI(e[o] ? f.as.FollowGame : f.as.UnfollowGame);
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
          className: l()(w.content, w.mainContent),
          children: [
            (0, n.jsxs)('div', {
              className: w.column,
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  color: 'text-primary',
                  children: K.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }),
                (0, n.jsxs)('div', {
                  className: w.section,
                  children: [
                    0 === ec.length && (0, n.jsx)(A.Text, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: w.emptyFriendsWhoPlay,
                      children: K.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                    }),
                    (0, n.jsx)('div', {
                      className: l()(w.column, w.gapNone),
                      children: null == ec ? void 0 : ec.map(e => (0, n.jsx)(Z.Z, {
                        entry: e,
                        viewId: en,
                        onClose: k
                      }, e.id))
                    })
                  ]
                }),
                ed.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: K.Z.Messages.GAME_PROFILE_SCREENSHOTS
                    }),
                    (0, n.jsx)(A.Scroller, {
                      style: {
                        overflowY: 'visible'
                      },
                      className: l()(w.row, w.imageScroller),
                      orientation: 'horizontal',
                      children: ed.map((e, a) => (0, n.jsx)(A.Clickable, {
                        className: w.clickable,
                        onClick: () => {
                          eI(f.as.ClickImage), (0, A.openModalLazy)(async () => {
                            let {
                              default: e
                            } = await s.e('99857').then(s.bind(s, 895023));
                            return s => {
                              let {
                                ...t
                              } = s;
                              return (0, n.jsx)(e, {
                                className: w.mediaModal,
                                ...t,
                                items: ed,
                                startingIndex: a
                              });
                            };
                          });
                        },
                        children: (0, n.jsx)('img', {
                          src: e.src,
                          className: w.gameArtwork,
                          alt: K.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                            game: eN
                          })
                        })
                      }, e.src))
                    })
                  ]
                }),
                er.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: K.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, n.jsx)('div', {
                      className: w.row,
                      style: {},
                      children: er.map(e => (0, n.jsx)(B, {
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
              className: l()(w.sidebar, w.column, w.padded),
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  children: K.Z.Messages.ABOUT
                }),
                null != em && (0, n.jsxs)('div', {
                  className: l()(w.column, w.gapSm),
                  children: [
                    (0, n.jsx)(A.Text, {
                      ref: es,
                      lineClamp: q ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: em
                    }),
                    (ee || !q) && (0, n.jsx)(A.Clickable, {
                      className: w.clickable,
                      onClick: () => {
                        eI(q ? f.as.ShowMore : f.as.ShowLess), $(!q);
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
                  className: l()(w.column),
                  children: [
                    eg.length > 0 && (0, n.jsxs)('div', {
                      className: l()(w.column, w.gapSm),
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
                      className: l()(w.column, w.gapSm),
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
s.r(a), s(47120), s(653041);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  c = s.n(i),
  E = s(913527),
  o = s.n(E),
  _ = s(758713),
  I = s(705512),
  d = s(442837),
  u = s(433517),
  A = s(481060),
  O = s(224706),
  N = s(812206),
  T = s(168551),
  R = s(485267),
  m = s(26033),
  g = s(561308),
  P = s(669764),
  L = s(962250),
  M = s(706454),
  S = s(768581),
  G = s(814225),
  h = s(709054),
  C = s(810568),
  f = s(998058),
  p = s(839392),
  x = s(567409),
  v = s(774073),
  Z = s(383895),
  D = s(183391),
  K = s(206583),
  j = s(689938),
  F = s(707443);
let U = 'GameProfileModal',
  w = e => {
let {
  game: a,
  onClose: s,
  trackClick: t
} = e, r = (0, d.e7)([N.Z], () => {
  var e;
  return N.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
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
      className: F.clickable,
      onClick: async () => {
        t(C.as.ClickSimilarGame, a.applicationId), (0, A.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(H, {
          applicationId: a.applicationId,
          source: C.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s();
      },
      children: (0, n.jsx)('img', {
        src: l,
        className: F.similarGames,
        alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == a ? void 0 : a.name
        })
      })
    });
  }
});
  },
  B = () => (0, n.jsxs)('div', {
className: F.gameBadge,
children: [
  (0, n.jsx)(A.FireIcon, {
    size: 'xxs'
  }),
  (0, n.jsx)(A.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: j.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
]
  }),
  b = [
_.z.DESKTOP,
_.z.XBOX,
_.z.PLAYSTATION,
_.z.NINTENDO
  ],
  Q = e => {
let {
  platforms: a
} = e, s = [...new Set(a)];
!s.includes(_.z.DESKTOP) && (s.includes(_.z.MACOS) || s.includes(_.z.LINUX)) && s.push(_.z.DESKTOP);
let t = (s = s.filter(e => b.includes(e))).map(e => {
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
  className: F.row,
  children: t
});
  },
  y = e => e.filter(v.z6).slice(0, 5),
  H = e => {
var a, r, i;
let {
  applicationId: E,
  source: _,
  sourceUserId: b,
  transitionState: H,
  onClose: Y
} = e, {
  clientThemesClassName: W
} = (0, T.ZP)(), {
  width: k,
  height: V
} = (0, L.b)(), [z, X] = t.useState(null !== (a = u.K.get(U)) && void 0 !== a ? a : {}), J = (0, d.e7)([M.default], () => M.default.locale), [q, $] = t.useState(!0), [ee, ea] = t.useState(!1), es = t.useRef(null), en = t.useMemo(() => (0, C.fP)(), []);
t.useEffect(() => {
  let e = es.current;
  null != e && ea(e.scrollHeight - e.clientHeight > 1);
}, [
  es,
  k,
  V
]), t.useEffect(() => {
  (0, R.J)();
}, []);
let et = (0, d.Wu)([p.Z], () => {
    var e;
    return (null !== (e = p.Z.getSimilarGames(E)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  er = (0, d.Wu)([P.Z], () => et.map(e => P.Z.getGame(e)).filter(v.W1).slice(0, 5)),
  el = t.useRef([]);
t.useEffect(() => {
  el.current = et;
}, [et]);
let {
  entries: ei
} = (0, x.Z)(), ec = t.useMemo(() => {
  var e;
  return null !== (e = null == ei ? void 0 : ei.filter(e => (0, m.d)(e) && e.extra.application_id === E)) && void 0 !== e ? e : [];
}, [
  ei,
  E
]);
t.useEffect(() => {
  var e, a;
  return (0, C.IS)({
    source: _,
    viewId: en,
    applicationId: E,
    gameName: null !== (a = null !== (e = null == eo ? void 0 : eo.name) && void 0 !== e ? e : null == eE ? void 0 : eE.name) && void 0 !== a ? a : '',
    authorId: b
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
    (0, C.wz)({
      viewId: en,
      applicationId: E,
      gameName: null !== (a = null !== (e = null == eo ? void 0 : eo.name) && void 0 !== e ? e : null == eE ? void 0 : eE.name) && void 0 !== a ? a : '',
      playedFriendIds: ec.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: y(el.current)
    });
  };
}, []), t.useEffect(() => {
  0 === et.length && (0, f.i)(E);
}, [
  E,
  et
]), t.useEffect(() => {
  O.Z.getDetectableGamesSupplemental([
    E,
    ...et
  ]);
}, [
  E,
  et
]);
let eE = N.Z.getApplication(E),
  eo = (0, d.e7)([P.Z], () => P.Z.getGame(E)),
  e_ = t.useMemo(() => null == eo ? void 0 : eo.genres.map(G.P3).join(', '), [eo]),
  eI = t.useMemo(() => {
    if (null == eo)
      return 0;
    let {
      artwork: e,
      screenshots: a
    } = eo;
    if (e.length > 0) {
      let a = Math.floor(Math.random() * (e.length - 1));
      return e[a];
    }
    if (a.length > 0) {
      let e = Math.floor(Math.random() * (a.length - 1));
      return a[e];
    }
    return '';
  }, [eo]),
  ed = t.useMemo(() => {
    var e, a;
    let s = (null !== (e = null == eo ? void 0 : eo.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (a = null == eo ? void 0 : eo.screenshots) && void 0 !== a ? a : []).map(e => ({
        src: e
      })),
      ...s
    ];
  }, [
    null == eo ? void 0 : eo.artwork,
    null == eo ? void 0 : eo.screenshots
  ]),
  eu = (e, a) => {
    (0, C.UE)({
      gameName: null != eO ? eO : '',
      applicationId: E,
      action: e,
      similarGameId: a,
      viewId: en
    });
  },
  {
    shouldOpenGameProfile: eA
  } = (0, v.ZP)({
    location: 'GameProfileModal',
    applicationId: E,
    trackEntryPointImpression: !1
  });
if (c()(eA, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == eo)
  return null;
let eO = null !== (r = eo.name) && void 0 !== r ? r : null == eE ? void 0 : eE.name,
  eN = null == eE ? void 0 : eE.getIconURL(160, S.$k ? 'webp' : 'png'),
  eT = null !== (i = eo.coverImageUrl) && void 0 !== i ? i : eN,
  {
    summary: eR,
    websites: em,
    publishers: eg,
    platforms: eP
  } = eo,
  eL = z[E],
  eM = h.default.extractTimestamp(E),
  eS = o()().diff(o()(eM), 'days') <= K.G,
  eG = ec.some(e => (0, g.ig)(e) === I.o.GLOBAL);
return (0, n.jsxs)(A.ModalRoot, {
  transitionState: H,
  size: A.ModalSize.DYNAMIC,
  className: l()(W, F.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: F.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: F.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(eI, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: F.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)(A.Scroller, {
      children: [
        (0, n.jsxs)('div', {
          className: l()(F.content, F.column, F.headerInfo),
          children: [
            (0, n.jsx)('div', {
              className: F.logoWrapper,
              children: null != eT && (0, n.jsx)('img', {
                className: F.logo,
                src: eT,
                alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game: eO
                })
              })
            }),
            (0, n.jsxs)('div', {
              className: l()(F.row, F.gapSm, F.gameDetails),
              children: [
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-xl/bold',
                      children: eO
                    }),
                    (0, n.jsxs)('div', {
                      className: l()(F.row, F.gapSm),
                      children: [
                        null != eN && (0, n.jsx)('img', {
                          src: eN,
                          height: 16,
                          alt: j.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                            game: eO
                          })
                        }),
                        (0, n.jsx)(A.Text, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: e_
                        }),
                        eS && (0, n.jsx)(A.Text, {
                          variant: 'eyebrow',
                          className: F.newBadge,
                          children: j.Z.Messages.NEW
                        }),
                        eG && (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(A.Text, {
                              variant: 'text-sm/semibold',
                              children: ' \u2022 '
                            }),
                            (0, n.jsx)(B, {})
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(A.Tooltip, {
                    text: eL ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : j.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                    children: e => (0, n.jsxs)(A.Button, {
                      ...e,
                      innerClassName: F.followButton,
                      color: eL ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                      onClick: () => {
                        let e = {
                          ...z
                        };
                        e[E] = !e[E], X(e), u.K.set(U, e), eu(e[E] ? C.as.FollowGame : C.as.UnfollowGame);
                      },
                      children: [
                        eL ? (0, n.jsx)(A.BellSlashIcon, {
                          color: 'white'
                        }) : (0, n.jsx)(A.BellIcon, {
                          color: 'white'
                        }),
                        eL ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : j.Z.Messages.FOLLOW
                      ]
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: l()(F.content, F.mainContent),
          children: [
            (0, n.jsxs)('div', {
              className: F.column,
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  color: 'text-primary',
                  children: j.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }),
                (0, n.jsxs)('div', {
                  className: F.section,
                  children: [
                    0 === ec.length && (0, n.jsx)(A.Text, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: F.emptyFriendsWhoPlay,
                      children: j.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                    }),
                    (0, n.jsx)('div', {
                      className: l()(F.column, F.gapNone),
                      children: null == ec ? void 0 : ec.map(e => (0, n.jsx)(Z.Z, {
                        entry: e,
                        viewId: en,
                        onClose: Y
                      }, e.id))
                    })
                  ]
                }),
                ed.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(A.Heading, {
                      variant: 'heading-md/bold',
                      children: j.Z.Messages.GAME_PROFILE_SCREENSHOTS
                    }),
                    (0, n.jsx)(A.Scroller, {
                      style: {
                        overflowY: 'visible'
                      },
                      className: l()(F.row, F.imageScroller),
                      orientation: 'horizontal',
                      children: ed.map((e, a) => (0, n.jsx)(A.Clickable, {
                        className: F.clickable,
                        onClick: () => {
                          eu(C.as.ClickImage), (0, A.openModalLazy)(async () => {
                            let {
                              default: e
                            } = await s.e('99857').then(s.bind(s, 895023));
                            return s => {
                              let {
                                ...t
                              } = s;
                              return (0, n.jsx)(e, {
                                className: F.mediaModal,
                                ...t,
                                items: ed,
                                startingIndex: a
                              });
                            };
                          });
                        },
                        children: (0, n.jsx)('img', {
                          src: e.src,
                          className: F.gameArtwork,
                          alt: j.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                            game: eO
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
                      children: j.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, n.jsx)('div', {
                      className: F.row,
                      style: {},
                      children: er.map(e => (0, n.jsx)(w, {
                        game: e,
                        onClose: Y,
                        trackClick: eu
                      }, null == e ? void 0 : e.applicationId))
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className: l()(F.sidebar, F.column, F.padded),
              children: [
                (0, n.jsx)(A.Heading, {
                  variant: 'heading-md/bold',
                  children: j.Z.Messages.ABOUT
                }),
                null != eR && (0, n.jsxs)('div', {
                  className: l()(F.column, F.gapSm),
                  children: [
                    (0, n.jsx)(A.Text, {
                      ref: es,
                      lineClamp: q ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: eR
                    }),
                    (ee || !q) && (0, n.jsx)(A.Clickable, {
                      className: F.clickable,
                      onClick: () => {
                        eu(q ? C.as.ShowMore : C.as.ShowLess), $(!q);
                      },
                      children: (0, n.jsx)(A.Text, {
                        variant: 'text-sm/semibold',
                        children: q ? j.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : j.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                      })
                    })
                  ]
                }),
                (0, n.jsx)(D.Z, {
                  websites: em,
                  trackClick: eu
                }),
                (eg.length > 0 || eP.length > 0) && (0, n.jsxs)('div', {
                  className: l()(F.column),
                  children: [
                    eg.length > 0 && (0, n.jsxs)('div', {
                      className: l()(F.column, F.gapSm),
                      children: [
                        (0, n.jsx)(A.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsx)(A.Text, {
                          variant: 'text-sm/normal',
                          children: eg.join(', ')
                        })
                      ]
                    }),
                    eP.length > 0 && (0, n.jsxs)('div', {
                      className: l()(F.column, F.gapSm),
                      children: [
                        (0, n.jsx)(A.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PLATFORMS
                        }),
                        (0, n.jsx)(Q, {
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
a.default = H;
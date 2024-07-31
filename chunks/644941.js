a.r(s), a(47120), a(653041);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(512722),
  E = a.n(i),
  o = a(913527),
  c = a.n(o),
  _ = a(758713),
  I = a(705512),
  A = a(442837),
  u = a(433517),
  d = a(481060),
  O = a(224706),
  N = a(812206),
  R = a(168551),
  T = a(485267),
  m = a(26033),
  L = a(561308),
  P = a(669764),
  M = a(962250),
  g = a(706454),
  S = a(768581),
  G = a(814225),
  C = a(709054),
  f = a(810568),
  h = a(998058),
  v = a(839392),
  x = a(567409),
  p = a(774073),
  Z = a(383895),
  D = a(183391),
  K = a(206583),
  j = a(689938),
  B = a(421377);
let F = 'GameProfileModal',
  U = e => {
let {
  game: s,
  onClose: a,
  trackClick: l
} = e, r = (0, A.e7)([N.Z], () => {
  var e;
  return N.Z.getApplication(null !== (e = null == s ? void 0 : s.applicationId) && void 0 !== e ? e : '');
});
if (null == s)
  return null;
let t = s.coverImageUrl;
return (0, n.jsx)(d.Tooltip, {
  text: s.name,
  children: e => {
    var i;
    return (0, n.jsx)(d.Clickable, {
      ...e,
      className: B.clickable,
      onClick: async () => {
        l(f.as.ClickSimilarGame, s.applicationId), (0, d.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(H, {
          applicationId: s.applicationId,
          source: f.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a();
      },
      children: (0, n.jsx)('img', {
        src: t,
        className: B.similarGames,
        alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == s ? void 0 : s.name
        })
      })
    });
  }
});
  },
  w = () => (0, n.jsxs)('div', {
className: B.gameBadge,
children: [
  (0, n.jsx)(d.FireIcon, {
    size: 'xxs'
  }),
  (0, n.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: j.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
]
  }),
  Q = [
_.z.DESKTOP,
_.z.XBOX,
_.z.PLAYSTATION,
_.z.NINTENDO
  ],
  k = e => {
let {
  platforms: s
} = e, a = [...new Set(s)];
!a.includes(_.z.DESKTOP) && (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) && a.push(_.z.DESKTOP);
let l = (a = a.filter(e => Q.includes(e))).map(e => {
  switch (e) {
    case _.z.DESKTOP:
      return (0, n.jsx)(d.ScreenIcon, {}, e);
    case _.z.XBOX:
      return (0, n.jsx)(d.XboxIcon, {}, e);
    case _.z.PLAYSTATION:
      return (0, n.jsx)(d.PlaystationIcon, {}, e);
    case _.z.NINTENDO:
      return (0, n.jsx)(d.NintendoSwitchNeutralIcon, {}, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: B.row,
  children: l
});
  },
  y = e => e.filter(p.z6).slice(0, 5),
  H = e => {
var s, r, i;
let {
  applicationId: o,
  source: _,
  sourceUserId: Q,
  transitionState: H,
  onClose: Y
} = e, {
  clientThemesClassName: b
} = (0, R.ZP)(), {
  width: W,
  height: V
} = (0, M.b)(), [X, z] = l.useState(null !== (s = u.K.get(F)) && void 0 !== s ? s : {}), J = (0, A.e7)([g.default], () => g.default.locale), [q, $] = l.useState(!0), [ee, es] = l.useState(!1), ea = l.useRef(null), en = l.useMemo(() => (0, f.fP)(), []);
l.useEffect(() => {
  let e = ea.current;
  null != e && es(e.scrollHeight - e.clientHeight > 1);
}, [
  ea,
  W,
  V
]), l.useEffect(() => {
  (0, T.Jn)();
}, []);
let el = (0, A.Wu)([v.Z], () => {
    var e;
    return (null !== (e = v.Z.getSimilarGames(o)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  er = (0, A.Wu)([P.Z], () => el.map(e => P.Z.getGame(e)).filter(p.W1).slice(0, 5)),
  et = l.useRef([]);
l.useEffect(() => {
  et.current = el;
}, [el]);
let {
  entries: ei
} = (0, x.Z)(), eE = l.useMemo(() => {
  var e;
  return null !== (e = null == ei ? void 0 : ei.filter(e => (0, m.dX)(e) && e.extra.application_id === o)) && void 0 !== e ? e : [];
}, [
  ei,
  o
]);
l.useEffect(() => {
  var e, s;
  return (0, f.IS)({
    source: _,
    viewId: en,
    applicationId: o,
    gameName: null !== (s = null !== (e = null == ec ? void 0 : ec.name) && void 0 !== e ? e : null == eo ? void 0 : eo.name) && void 0 !== s ? s : '',
    authorId: Q
  }), () => {
    var e, s;
    let a = Date.now(),
      n = eE.map(e => {
        let s = (0, L.kr)(e) ? (0, L.T_)(e, a) : (0, L.GL)(e, J);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: s
        });
      });
    (0, f.wz)({
      viewId: en,
      applicationId: o,
      gameName: null !== (s = null !== (e = null == ec ? void 0 : ec.name) && void 0 !== e ? e : null == eo ? void 0 : eo.name) && void 0 !== s ? s : '',
      playedFriendIds: eE.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: y(et.current)
    });
  };
}, []), l.useEffect(() => {
  0 === el.length && (0, h.i)(o);
}, [
  o,
  el
]), l.useEffect(() => {
  O.Z.getDetectableGamesSupplemental([
    o,
    ...el
  ]);
}, [
  o,
  el
]);
let eo = N.Z.getApplication(o),
  ec = (0, A.e7)([P.Z], () => P.Z.getGame(o)),
  e_ = l.useMemo(() => null == ec ? void 0 : ec.genres.map(G.P3).join(', '), [ec]),
  eI = l.useMemo(() => {
    if (null == ec)
      return 0;
    let {
      artwork: e,
      screenshots: s
    } = ec;
    if (e.length > 0) {
      let s = Math.floor(Math.random() * (e.length - 1));
      return e[s];
    }
    if (s.length > 0) {
      let e = Math.floor(Math.random() * (s.length - 1));
      return s[e];
    }
    return '';
  }, [ec]),
  eA = l.useMemo(() => {
    var e, s;
    let a = (null !== (e = null == ec ? void 0 : ec.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (s = null == ec ? void 0 : ec.screenshots) && void 0 !== s ? s : []).map(e => ({
        src: e
      })),
      ...a
    ];
  }, [
    null == ec ? void 0 : ec.artwork,
    null == ec ? void 0 : ec.screenshots
  ]),
  eu = (e, s) => {
    (0, f.UE)({
      gameName: null != eO ? eO : '',
      applicationId: o,
      action: e,
      similarGameId: s,
      viewId: en
    });
  },
  {
    shouldOpenGameProfile: ed
  } = (0, p.ZP)({
    location: 'GameProfileModal',
    applicationId: o,
    trackEntryPointImpression: !1
  });
if (E()(ed, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == ec)
  return null;
let eO = null !== (r = ec.name) && void 0 !== r ? r : null == eo ? void 0 : eo.name,
  eN = null == eo ? void 0 : eo.getIconURL(160, S.$k ? 'webp' : 'png'),
  eR = null !== (i = ec.coverImageUrl) && void 0 !== i ? i : eN,
  {
    summary: eT,
    websites: em,
    publishers: eL,
    platforms: eP
  } = ec,
  eM = X[o],
  eg = C.default.extractTimestamp(o),
  eS = c()().diff(c()(eg), 'days') <= K.G,
  eG = eE.some(e => (0, L.ig)(e) === I.o.GLOBAL);
return (0, n.jsxs)(d.ModalRoot, {
  transitionState: H,
  size: d.ModalSize.DYNAMIC,
  className: t()(b, B.gameProfileModal),
  children: [
    (0, n.jsxs)('div', {
      className: B.gameArtHero,
      children: [
        (0, n.jsx)('div', {
          className: B.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(eI, '")')
          }
        }),
        (0, n.jsx)('div', {
          className: B.gameHeroGradient
        })
      ]
    }),
    (0, n.jsxs)(d.Scroller, {
      children: [
        (0, n.jsxs)('div', {
          className: t()(B.content, B.column, B.headerInfo),
          children: [
            (0, n.jsx)('div', {
              className: B.logoWrapper,
              children: null != eR && (0, n.jsx)('img', {
                className: B.logo,
                src: eR,
                alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game: eO
                })
              })
            }),
            (0, n.jsxs)('div', {
              className: t()(B.row, B.gapSm, B.gameDetails),
              children: [
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-xl/bold',
                      children: eO
                    }),
                    (0, n.jsxs)('div', {
                      className: t()(B.row, B.gapSm),
                      children: [
                        null != eN && (0, n.jsx)('img', {
                          src: eN,
                          height: 16,
                          alt: j.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                            game: eO
                          })
                        }),
                        (0, n.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: e_
                        }),
                        eS && (0, n.jsx)(d.Text, {
                          variant: 'eyebrow',
                          className: B.newBadge,
                          children: j.Z.Messages.NEW
                        }),
                        eG && (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(d.Text, {
                              variant: 'text-sm/semibold',
                              children: ' \u2022 '
                            }),
                            (0, n.jsx)(w, {})
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(d.Tooltip, {
                    text: eM ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : j.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                    children: e => (0, n.jsxs)(d.Button, {
                      ...e,
                      innerClassName: B.followButton,
                      color: eM ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                      onClick: () => {
                        let e = {
                          ...X
                        };
                        e[o] = !e[o], z(e), u.K.set(F, e), eu(e[o] ? f.as.FollowGame : f.as.UnfollowGame);
                      },
                      children: [
                        eM ? (0, n.jsx)(d.BellSlashIcon, {
                          color: 'white'
                        }) : (0, n.jsx)(d.BellIcon, {
                          color: 'white'
                        }),
                        eM ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : j.Z.Messages.FOLLOW
                      ]
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: t()(B.content, B.mainContent),
          children: [
            (0, n.jsxs)('div', {
              className: B.column,
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: 'heading-md/bold',
                  color: 'text-primary',
                  children: j.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }),
                (0, n.jsxs)('div', {
                  className: B.section,
                  children: [
                    0 === eE.length && (0, n.jsx)(d.Text, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: B.emptyFriendsWhoPlay,
                      children: j.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                    }),
                    (0, n.jsx)('div', {
                      className: t()(B.column, B.gapNone),
                      children: null == eE ? void 0 : eE.map(e => (0, n.jsx)(Z.Z, {
                        entry: e,
                        viewId: en,
                        onClose: Y
                      }, e.id))
                    })
                  ]
                }),
                eA.length > 0 && (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-md/bold',
                      children: j.Z.Messages.GAME_PROFILE_SCREENSHOTS
                    }),
                    (0, n.jsx)(d.Scroller, {
                      style: {
                        overflowY: 'visible'
                      },
                      className: t()(B.row, B.imageScroller),
                      orientation: 'horizontal',
                      children: eA.map((e, s) => (0, n.jsx)(d.Clickable, {
                        className: B.clickable,
                        onClick: () => {
                          eu(f.as.ClickImage), (0, d.openModalLazy)(async () => {
                            let {
                              default: e
                            } = await a.e('99857').then(a.bind(a, 895023));
                            return a => {
                              let {
                                ...l
                              } = a;
                              return (0, n.jsx)(e, {
                                className: B.mediaModal,
                                ...l,
                                items: eA,
                                startingIndex: s
                              });
                            };
                          });
                        },
                        children: (0, n.jsx)('img', {
                          src: e.src,
                          className: B.gameArtwork,
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
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-md/bold',
                      children: j.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, n.jsx)('div', {
                      className: B.row,
                      style: {},
                      children: er.map(e => (0, n.jsx)(U, {
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
              className: t()(B.sidebar, B.column, B.padded),
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: 'heading-md/bold',
                  children: j.Z.Messages.ABOUT
                }),
                null != eT && (0, n.jsxs)('div', {
                  className: t()(B.column, B.gapSm),
                  children: [
                    (0, n.jsx)(d.Text, {
                      ref: ea,
                      lineClamp: q ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: eT
                    }),
                    (ee || !q) && (0, n.jsx)(d.Clickable, {
                      className: B.clickable,
                      onClick: () => {
                        eu(q ? f.as.ShowMore : f.as.ShowLess), $(!q);
                      },
                      children: (0, n.jsx)(d.Text, {
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
                (eL.length > 0 || eP.length > 0) && (0, n.jsxs)('div', {
                  className: t()(B.column),
                  children: [
                    eL.length > 0 && (0, n.jsxs)('div', {
                      className: t()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsx)(d.Text, {
                          variant: 'text-sm/normal',
                          children: eL.join(', ')
                        })
                      ]
                    }),
                    eP.length > 0 && (0, n.jsxs)('div', {
                      className: t()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PLATFORMS
                        }),
                        (0, n.jsx)(k, {
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
s.default = H;
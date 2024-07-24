s.r(a), s(47120), s(653041);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(512722),
  E = s.n(i),
  c = s(913527),
  _ = s.n(c),
  o = s(758713),
  I = s(705512),
  A = s(442837),
  u = s(433517),
  d = s(481060),
  O = s(224706),
  N = s(812206),
  R = s(168551),
  T = s(485267),
  m = s(26033),
  P = s(561308),
  g = s(669764),
  L = s(962250),
  M = s(706454),
  S = s(768581),
  G = s(814225),
  C = s(709054),
  f = s(810568),
  p = s(998058),
  h = s(839392),
  x = s(567409),
  v = s(774073),
  Z = s(383895),
  K = s(183391),
  D = s(206583),
  j = s(689938),
  B = s(421377);
let F = 'GameProfileModal',
  U = e => {
let {
  game: a,
  onClose: s,
  trackClick: t
} = e, r = (0, A.e7)([N.Z], () => {
  var e;
  return N.Z.getApplication(null !== (e = null == a ? void 0 : a.applicationId) && void 0 !== e ? e : '');
});
if (null == a)
  return null;
let l = a.coverImageUrl;
return (0, n.jsx)(d.Tooltip, {
  text: a.name,
  children: e => {
    var i;
    return (0, n.jsx)(d.Clickable, {
      ...e,
      className: B.clickable,
      onClick: async () => {
        t(f.as.ClickSimilarGame, a.applicationId), (0, d.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(b, {
          applicationId: a.applicationId,
          source: f.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s();
      },
      children: (0, n.jsx)('img', {
        src: l,
        className: B.similarGames,
        alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == a ? void 0 : a.name
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
o.z.DESKTOP,
o.z.XBOX,
o.z.PLAYSTATION,
o.z.NINTENDO
  ],
  y = e => {
let {
  platforms: a
} = e, s = [...new Set(a)];
!s.includes(o.z.DESKTOP) && (s.includes(o.z.MACOS) || s.includes(o.z.LINUX)) && s.push(o.z.DESKTOP);
let t = (s = s.filter(e => Q.includes(e))).map(e => {
  switch (e) {
    case o.z.DESKTOP:
      return (0, n.jsx)(d.ScreenIcon, {}, e);
    case o.z.XBOX:
      return (0, n.jsx)(d.XboxIcon, {}, e);
    case o.z.PLAYSTATION:
      return (0, n.jsx)(d.PlaystationIcon, {}, e);
    case o.z.NINTENDO:
      return (0, n.jsx)(d.NintendoSwitchNeutralIcon, {}, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: B.row,
  children: t
});
  },
  H = e => e.filter(v.z6).slice(0, 5),
  b = e => {
var a, r, i;
let {
  applicationId: c,
  source: o,
  sourceUserId: Q,
  transitionState: b,
  onClose: Y
} = e, {
  clientThemesClassName: W
} = (0, R.ZP)(), {
  width: k,
  height: V
} = (0, L.b)(), [z, X] = t.useState(null !== (a = u.K.get(F)) && void 0 !== a ? a : {}), J = (0, A.e7)([M.default], () => M.default.locale), [q, $] = t.useState(!0), [ee, ea] = t.useState(!1), es = t.useRef(null), en = t.useMemo(() => (0, f.fP)(), []);
t.useEffect(() => {
  let e = es.current;
  null != e && ea(e.scrollHeight - e.clientHeight > 1);
}, [
  es,
  k,
  V
]), t.useEffect(() => {
  (0, T.Jn)();
}, []);
let et = (0, A.Wu)([h.Z], () => {
    var e;
    return (null !== (e = h.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  er = (0, A.Wu)([g.Z], () => et.map(e => g.Z.getGame(e)).filter(v.W1).slice(0, 5)),
  el = t.useRef([]);
t.useEffect(() => {
  el.current = et;
}, [et]);
let {
  entries: ei
} = (0, x.Z)(), eE = t.useMemo(() => {
  var e;
  return null !== (e = null == ei ? void 0 : ei.filter(e => (0, m.dX)(e) && e.extra.application_id === c)) && void 0 !== e ? e : [];
}, [
  ei,
  c
]);
t.useEffect(() => {
  var e, a;
  return (0, f.IS)({
    source: o,
    viewId: en,
    applicationId: c,
    gameName: null !== (a = null !== (e = null == e_ ? void 0 : e_.name) && void 0 !== e ? e : null == ec ? void 0 : ec.name) && void 0 !== a ? a : '',
    authorId: Q
  }), () => {
    var e, a;
    let s = Date.now(),
      n = eE.map(e => {
        let a = (0, P.kr)(e) ? (0, P.T_)(e, s) : (0, P.GL)(e, J);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: a
        });
      });
    (0, f.wz)({
      viewId: en,
      applicationId: c,
      gameName: null !== (a = null !== (e = null == e_ ? void 0 : e_.name) && void 0 !== e ? e : null == ec ? void 0 : ec.name) && void 0 !== a ? a : '',
      playedFriendIds: eE.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: H(el.current)
    });
  };
}, []), t.useEffect(() => {
  0 === et.length && (0, p.i)(c);
}, [
  c,
  et
]), t.useEffect(() => {
  O.Z.getDetectableGamesSupplemental([
    c,
    ...et
  ]);
}, [
  c,
  et
]);
let ec = N.Z.getApplication(c),
  e_ = (0, A.e7)([g.Z], () => g.Z.getGame(c)),
  eo = t.useMemo(() => null == e_ ? void 0 : e_.genres.map(G.P3).join(', '), [e_]),
  eI = t.useMemo(() => {
    if (null == e_)
      return 0;
    let {
      artwork: e,
      screenshots: a
    } = e_;
    if (e.length > 0) {
      let a = Math.floor(Math.random() * (e.length - 1));
      return e[a];
    }
    if (a.length > 0) {
      let e = Math.floor(Math.random() * (a.length - 1));
      return a[e];
    }
    return '';
  }, [e_]),
  eA = t.useMemo(() => {
    var e, a;
    let s = (null !== (e = null == e_ ? void 0 : e_.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (a = null == e_ ? void 0 : e_.screenshots) && void 0 !== a ? a : []).map(e => ({
        src: e
      })),
      ...s
    ];
  }, [
    null == e_ ? void 0 : e_.artwork,
    null == e_ ? void 0 : e_.screenshots
  ]),
  eu = (e, a) => {
    (0, f.UE)({
      gameName: null != eO ? eO : '',
      applicationId: c,
      action: e,
      similarGameId: a,
      viewId: en
    });
  },
  {
    shouldOpenGameProfile: ed
  } = (0, v.ZP)({
    location: 'GameProfileModal',
    applicationId: c,
    trackEntryPointImpression: !1
  });
if (E()(ed, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == e_)
  return null;
let eO = null !== (r = e_.name) && void 0 !== r ? r : null == ec ? void 0 : ec.name,
  eN = null == ec ? void 0 : ec.getIconURL(160, S.$k ? 'webp' : 'png'),
  eR = null !== (i = e_.coverImageUrl) && void 0 !== i ? i : eN,
  {
    summary: eT,
    websites: em,
    publishers: eP,
    platforms: eg
  } = e_,
  eL = z[c],
  eM = C.default.extractTimestamp(c),
  eS = _()().diff(_()(eM), 'days') <= D.G,
  eG = eE.some(e => (0, P.ig)(e) === I.o.GLOBAL);
return (0, n.jsxs)(d.ModalRoot, {
  transitionState: b,
  size: d.ModalSize.DYNAMIC,
  className: l()(W, B.gameProfileModal),
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
          className: l()(B.content, B.column, B.headerInfo),
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
              className: l()(B.row, B.gapSm, B.gameDetails),
              children: [
                (0, n.jsxs)('div', {
                  children: [
                    (0, n.jsx)(d.Heading, {
                      variant: 'heading-xl/bold',
                      children: eO
                    }),
                    (0, n.jsxs)('div', {
                      className: l()(B.row, B.gapSm),
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
                          children: eo
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
                    text: eL ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : j.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                    children: e => (0, n.jsxs)(d.Button, {
                      ...e,
                      innerClassName: B.followButton,
                      color: eL ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                      onClick: () => {
                        let e = {
                          ...z
                        };
                        e[c] = !e[c], X(e), u.K.set(F, e), eu(e[c] ? f.as.FollowGame : f.as.UnfollowGame);
                      },
                      children: [
                        eL ? (0, n.jsx)(d.BellSlashIcon, {
                          color: 'white'
                        }) : (0, n.jsx)(d.BellIcon, {
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
          className: l()(B.content, B.mainContent),
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
                      className: l()(B.column, B.gapNone),
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
                      className: l()(B.row, B.imageScroller),
                      orientation: 'horizontal',
                      children: eA.map((e, a) => (0, n.jsx)(d.Clickable, {
                        className: B.clickable,
                        onClick: () => {
                          eu(f.as.ClickImage), (0, d.openModalLazy)(async () => {
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
                                items: eA,
                                startingIndex: a
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
              className: l()(B.sidebar, B.column, B.padded),
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: 'heading-md/bold',
                  children: j.Z.Messages.ABOUT
                }),
                null != eT && (0, n.jsxs)('div', {
                  className: l()(B.column, B.gapSm),
                  children: [
                    (0, n.jsx)(d.Text, {
                      ref: es,
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
                (0, n.jsx)(K.Z, {
                  websites: em,
                  trackClick: eu
                }),
                (eP.length > 0 || eg.length > 0) && (0, n.jsxs)('div', {
                  className: l()(B.column),
                  children: [
                    eP.length > 0 && (0, n.jsxs)('div', {
                      className: l()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsx)(d.Text, {
                          variant: 'text-sm/normal',
                          children: eP.join(', ')
                        })
                      ]
                    }),
                    eg.length > 0 && (0, n.jsxs)('div', {
                      className: l()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          children: j.Z.Messages.GAME_PROFILE_PLATFORMS
                        }),
                        (0, n.jsx)(y, {
                          platforms: eg
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
a.default = b;
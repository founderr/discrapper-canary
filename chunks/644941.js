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
  d = a(442837),
  u = a(433517),
  A = a(481060),
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
} = e, r = (0, d.e7)([N.Z], () => {
  var e;
  return N.Z.getApplication(null !== (e = null == s ? void 0 : s.applicationId) && void 0 !== e ? e : '');
});
if (null == s)
  return null;
let t = s.coverImageUrl;
return (0, n.jsx)(A.Tooltip, {
  text: s.name,
  children: e => {
    var i;
    return (0, n.jsx)(A.Clickable, {
      ...e,
      className: B.clickable,
      onClick: async () => {
        l(f.as.ClickSimilarGame, s.applicationId), (0, A.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(H, {
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
  y = [
_.z.DESKTOP,
_.z.XBOX,
_.z.PLAYSTATION,
_.z.NINTENDO
  ],
  Q = e => {
let {
  platforms: s
} = e, a = [...new Set(s)];
!a.includes(_.z.DESKTOP) && (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) && a.push(_.z.DESKTOP);
let l = (a = a.filter(e => y.includes(e))).map(e => {
  switch (e) {
    case _.z.DESKTOP:
      return (0, n.jsx)(A.ScreenIcon, {
        size: 'xs'
      }, e);
    case _.z.XBOX:
      return (0, n.jsx)(A.XboxIcon, {
        size: 'xs'
      }, e);
    case _.z.PLAYSTATION:
      return (0, n.jsx)(A.PlaystationIcon, {
        size: 'xs'
      }, e);
    case _.z.NINTENDO:
      return (0, n.jsx)(A.NintendoSwitchNeutralIcon, {
        size: 'xs'
      }, e);
    default:
      return null;
  }
});
return (0, n.jsx)('div', {
  className: t()(B.row, B.gapSm),
  style: {
    alignItems: 'center'
  },
  children: l
});
  },
  k = e => e.filter(p.z6).slice(0, 5),
  H = e => {
var s, r;
let {
  applicationId: i,
  source: o,
  sourceUserId: _,
  transitionState: y,
  onClose: H
} = e, {
  clientThemesClassName: b
} = (0, R.ZP)(), {
  width: Y,
  height: W
} = (0, M.b)(), [V, z] = l.useState(() => {
  var e;
  return null === (e = u.K.get(F)) || void 0 === e ? void 0 : e[i];
}), X = (0, d.e7)([g.default], () => g.default.locale), [J, q] = l.useState(!0), [$, ee] = l.useState(!1), es = l.useRef(null), ea = l.useMemo(() => (0, f.fP)(), []);
l.useEffect(() => {
  let e = es.current;
  null != e && ee(e.scrollHeight - e.clientHeight > 1);
}, [
  es,
  Y,
  W
]), l.useEffect(() => {
  (0, T.Jn)();
}, []);
let en = (0, d.Wu)([v.Z], () => {
    var e;
    return (null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  el = (0, d.Wu)([P.Z], () => en.map(e => P.Z.getGame(e)).filter(p.W1).slice(0, 5)),
  er = l.useRef([]);
l.useEffect(() => {
  er.current = en;
}, [en]);
let {
  entries: et
} = (0, x.Z)(), ei = l.useMemo(() => {
  var e;
  return null !== (e = null == et ? void 0 : et.filter(e => (0, m.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
}, [
  et,
  i
]), eE = ei.length > 3, [eo, ec] = l.useState(!1);
l.useEffect(() => {
  var e, s;
  return (0, f.IS)({
    source: o,
    viewId: ea,
    applicationId: i,
    gameName: null !== (s = null !== (e = null == eI ? void 0 : eI.name) && void 0 !== e ? e : null == e_ ? void 0 : e_.name) && void 0 !== s ? s : '',
    authorId: _
  }), () => {
    var e, s;
    let a = Date.now(),
      n = ei.map(e => {
        let s = (0, L.kr)(e) ? (0, L.T_)(e, a) : (0, L.GL)(e, X);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: s
        });
      });
    (0, f.wz)({
      viewId: ea,
      applicationId: i,
      gameName: null !== (s = null !== (e = null == eI ? void 0 : eI.name) && void 0 !== e ? e : null == e_ ? void 0 : e_.name) && void 0 !== s ? s : '',
      playedFriendIds: ei.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: k(er.current)
    });
  };
}, []), l.useEffect(() => {
  0 === en.length && (0, h.i)(i);
}, [
  i,
  en
]), l.useEffect(() => {
  O.Z.getDetectableGamesSupplemental([
    i,
    ...en
  ]);
}, [
  i,
  en
]);
let e_ = N.Z.getApplication(i),
  eI = (0, d.e7)([P.Z], () => P.Z.getGame(i)),
  ed = l.useMemo(() => null == eI ? void 0 : eI.genres.map(G.P3).join(', '), [eI]),
  eu = l.useMemo(() => {
    if (null == eI)
      return 0;
    let {
      artwork: e,
      screenshots: s
    } = eI;
    if (e.length > 0) {
      let s = Math.floor(Math.random() * (e.length - 1));
      return e[s];
    }
    if (s.length > 0) {
      let e = Math.floor(Math.random() * (s.length - 1));
      return s[e];
    }
    return '';
  }, [eI]),
  eA = l.useMemo(() => {
    var e, s;
    let a = (null !== (e = null == eI ? void 0 : eI.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (s = null == eI ? void 0 : eI.screenshots) && void 0 !== s ? s : []).map(e => ({
        src: e
      })),
      ...a
    ];
  }, [
    null == eI ? void 0 : eI.artwork,
    null == eI ? void 0 : eI.screenshots
  ]),
  eO = (e, s) => {
    (0, f.UE)({
      gameName: null != eR ? eR : '',
      applicationId: i,
      action: e,
      similarGameId: s,
      viewId: ea
    });
  },
  {
    shouldOpenGameProfile: eN
  } = (0, p.ZP)({
    location: 'GameProfileModal',
    applicationId: i,
    trackEntryPointImpression: !1
  });
if (E()(eN, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == eI)
  return null;
let eR = null !== (s = eI.name) && void 0 !== s ? s : null == e_ ? void 0 : e_.name,
  eT = null == e_ ? void 0 : e_.getIconURL(160, S.$k ? 'webp' : 'png'),
  em = null !== (r = eI.coverImageUrl) && void 0 !== r ? r : eT,
  {
    summary: eL,
    websites: eP,
    publishers: eM,
    platforms: eg
  } = eI,
  eS = C.default.extractTimestamp(i),
  eG = c()().diff(c()(eS), 'days') <= K.G,
  eC = ei.some(e => (0, L.ig)(e) === I.o.GLOBAL);
return (0, n.jsx)(A.ModalRoot, {
  transitionState: y,
  size: A.ModalSize.DYNAMIC,
  className: t()(b, B.gameProfileModal),
  children: (0, n.jsxs)(A.ScrollerNone, {
    className: B.scrollable,
    children: [
      (0, n.jsx)('div', {
        className: t()(B.gameArtHero),
        style: {
          backgroundImage: 'url("'.concat(eu, '")')
        }
      }),
      (0, n.jsxs)('div', {
        className: t()(B.content, B.column, B.headerInfo),
        children: [
          (0, n.jsx)('div', {
            className: B.logoWrapper,
            children: null != em && (0, n.jsx)('img', {
              className: B.logo,
              src: em,
              alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                game: eR
              })
            })
          }),
          (0, n.jsxs)('div', {
            className: t()(B.row, B.gapSm, B.gameDetails),
            children: [
              (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)(A.Heading, {
                    variant: 'heading-xl/bold',
                    children: eR
                  }),
                  (0, n.jsxs)('div', {
                    className: t()(B.row, B.gapSm),
                    children: [
                      null != eT && (0, n.jsx)('img', {
                        src: eT,
                        height: 16,
                        alt: j.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                          game: eR
                        })
                      }),
                      (0, n.jsx)(A.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-muted',
                        children: ed
                      }),
                      eG && (0, n.jsx)(A.Text, {
                        variant: 'eyebrow',
                        className: B.newBadge,
                        children: j.Z.Messages.NEW
                      }),
                      eC && (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(A.Text, {
                            variant: 'text-sm/medium',
                            children: ' \xB7 '
                          }),
                          (0, n.jsx)(w, {})
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)('div', {
                children: (0, n.jsx)(A.Tooltip, {
                  text: V ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : j.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                  children: e => (0, n.jsxs)(A.Button, {
                    ...e,
                    innerClassName: B.followButton,
                    color: V ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                    onClick: () => {
                      var e;
                      let s = null !== (e = u.K.get(F)) && void 0 !== e ? e : {};
                      s[i] = !s[i], u.K.set(F, s), eO(s[i] ? f.as.FollowGame : f.as.UnfollowGame), z(s[i]);
                    },
                    children: [
                      V ? (0, n.jsx)(A.BellSlashIcon, {
                        color: 'white'
                      }) : (0, n.jsx)(A.BellIcon, {
                        color: 'white'
                      }),
                      V ? j.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : j.Z.Messages.FOLLOW
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
              (0, n.jsx)(A.Heading, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: j.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
              }),
              (0, n.jsxs)('div', {
                className: t()(B.section, {
                  [B.fadedEntries]: eE && !eo
                }),
                children: [
                  0 === ei.length && (0, n.jsx)(A.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-primary',
                    className: B.emptyFriendsWhoPlay,
                    children: j.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  }),
                  (0, n.jsx)('div', {
                    className: t()(B.column, B.gapNone),
                    children: null == ei ? void 0 : ei.slice(0, eE && !eo ? 2 : void 0).map(e => (0, n.jsx)(Z.Z, {
                      entry: e,
                      viewId: ea,
                      onClose: H
                    }, e.id))
                  })
                ]
              }),
              eE && !eo && (0, n.jsxs)(A.Clickable, {
                className: B.expandEntriesButton,
                onClick: () => ec(!0),
                children: [
                  (0, n.jsx)(A.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-normal',
                    children: j.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                  }),
                  (0, n.jsx)(A.ChevronSmallDownIcon, {
                    size: 'xs'
                  })
                ]
              }),
              eA.length > 0 && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(A.Heading, {
                    variant: 'heading-md/bold',
                    children: j.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, n.jsx)(A.Scroller, {
                    style: {
                      overflowY: 'visible'
                    },
                    className: t()(B.row, B.imageScroller),
                    orientation: 'horizontal',
                    children: eA.map((e, s) => (0, n.jsx)(A.Clickable, {
                      className: B.clickable,
                      onClick: () => {
                        eO(f.as.ClickImage), (0, A.openModalLazy)(async () => {
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
                          game: eR
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
                    children: j.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                  }),
                  (0, n.jsx)('div', {
                    className: B.row,
                    style: {},
                    children: el.map(e => (0, n.jsx)(U, {
                      game: e,
                      onClose: H,
                      trackClick: eO
                    }, null == e ? void 0 : e.applicationId))
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: t()(B.sidebar, B.column),
            children: [
              (0, n.jsx)(A.Heading, {
                variant: 'heading-md/bold',
                children: j.Z.Messages.ABOUT
              }),
              (0, n.jsxs)('div', {
                className: B.sidebarSections,
                children: [
                  null != eL && (0, n.jsxs)('div', {
                    className: t()(B.column, B.gapSm),
                    children: [
                      (0, n.jsx)(A.Text, {
                        ref: es,
                        lineClamp: J ? 8 : void 0,
                        variant: 'text-sm/normal',
                        children: eL
                      }),
                      ($ || !J) && (0, n.jsx)(A.Clickable, {
                        className: B.clickable,
                        onClick: () => {
                          eO(J ? f.as.ShowMore : f.as.ShowLess), q(!J);
                        },
                        children: (0, n.jsx)(A.Text, {
                          variant: 'text-sm/semibold',
                          children: J ? j.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : j.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                        })
                      })
                    ]
                  }),
                  (0, n.jsx)(D.Z, {
                    websites: eP,
                    trackClick: eO
                  }),
                  (eM.length > 0 || eg.length > 0) && (0, n.jsx)('div', {
                    className: t()(B.column),
                    children: eM.length > 0 && (0, n.jsxs)('div', {
                      className: t()(B.column, B.gapSm),
                      children: [
                        (0, n.jsx)(A.Heading, {
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: j.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsxs)('div', {
                          className: t()(B.row, B.gapMd),
                          children: [
                            (0, n.jsx)(A.Text, {
                              variant: 'text-sm/normal',
                              children: eM.join(', ')
                            }),
                            eg.length > 0 && (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(A.Text, {
                                  variant: 'text-sm/normal',
                                  children: ' \xB7 '
                                }),
                                (0, n.jsx)(Q, {
                                  platforms: eg
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  })
});
  };
s.default = H;
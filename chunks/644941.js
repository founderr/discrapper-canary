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
  x = a(96856),
  p = a(567409),
  Z = a(774073),
  D = a(383895),
  K = a(183391),
  j = a(206583),
  B = a(689938),
  F = a(421377);
let U = 'GameProfileModal',
  w = e => {
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
      className: F.clickable,
      onClick: async () => {
        l(f.as.ClickSimilarGame, s.applicationId), (0, A.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(H, {
          applicationId: s.applicationId,
          source: f.m1.SimilarGames,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a();
      },
      children: (0, n.jsx)('img', {
        src: t,
        className: F.similarGames,
        alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : null == s ? void 0 : s.name
        })
      })
    });
  }
});
  },
  y = () => (0, n.jsxs)('div', {
className: F.gameBadge,
children: [
  (0, n.jsx)(A.FireIcon, {
    size: 'xxs'
  }),
  (0, n.jsx)(A.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: B.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
]
  }),
  Q = [
_.z.DESKTOP,
_.z.XBOX,
_.z.PLAYSTATION,
_.z.NINTENDO
  ],
  b = e => {
let {
  platforms: s
} = e, a = [...new Set(s)];
!a.includes(_.z.DESKTOP) && (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) && a.push(_.z.DESKTOP);
let l = (a = a.filter(e => Q.includes(e))).map(e => {
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
return (0, n.jsxs)('div', {
  className: t()(F.row, F.gapSm),
  style: {
    alignItems: 'center'
  },
  children: [
    (0, n.jsx)(A.Text, {
      variant: 'text-sm/normal',
      children: ' \xB7 '
    }),
    l
  ]
});
  },
  k = e => e.filter(Z.z6).slice(0, 5),
  H = e => {
var s, r;
let {
  applicationId: i,
  source: o,
  sourceUserId: _,
  transitionState: Q,
  onClose: H
} = e, {
  clientThemesClassName: Y
} = (0, R.ZP)(), {
  width: W,
  height: z
} = (0, M.b)(), [V, X] = l.useState(() => {
  var e;
  return null === (e = u.K.get(U)) || void 0 === e ? void 0 : e[i];
}), J = (0, d.e7)([g.default], () => g.default.locale), [q, $] = l.useState(!0), [ee, es] = l.useState(!1), ea = l.useRef(null), en = l.useMemo(() => (0, f.fP)(), []);
l.useEffect(() => {
  let e = ea.current;
  null != e && es(e.scrollHeight - e.clientHeight > 1);
}, [
  ea,
  W,
  z
]), l.useEffect(() => {
  (0, T.Jn)();
}, []);
let el = (0, d.Wu)([v.Z], () => {
    var e;
    return (null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
  }),
  er = (0, d.Wu)([P.Z], () => el.map(e => P.Z.getGame(e)).filter(Z.W1).slice(0, 5)),
  et = l.useRef([]);
l.useEffect(() => {
  et.current = el;
}, [el]);
let {
  entries: ei
} = (0, p.Z)(), eE = l.useMemo(() => {
  var e;
  return null !== (e = null == ei ? void 0 : ei.filter(e => (0, m.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
}, [
  ei,
  i
]), eo = eE.length > 7, [ec, e_] = l.useState(!1);
l.useEffect(() => {
  var e, s;
  return (0, f.IS)({
    source: o,
    viewId: en,
    applicationId: i,
    gameName: null !== (s = null !== (e = null == ed ? void 0 : ed.name) && void 0 !== e ? e : null == eI ? void 0 : eI.name) && void 0 !== s ? s : '',
    authorId: _
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
      applicationId: i,
      gameName: null !== (s = null !== (e = null == ed ? void 0 : ed.name) && void 0 !== e ? e : null == eI ? void 0 : eI.name) && void 0 !== s ? s : '',
      playedFriendIds: eE.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: k(et.current)
    });
  };
}, []), l.useEffect(() => {
  0 === el.length && (0, h.i)(i);
}, [
  i,
  el
]), l.useEffect(() => {
  O.Z.getDetectableGamesSupplemental([
    i,
    ...el
  ]);
}, [
  i,
  el
]);
let eI = N.Z.getApplication(i),
  ed = (0, d.e7)([P.Z], () => P.Z.getGame(i)),
  eu = l.useMemo(() => null == ed ? void 0 : ed.genres.map(G.P3).join(', '), [ed]),
  eA = l.useMemo(() => {
    if (null == ed)
      return '';
    let {
      artwork: e,
      screenshots: s
    } = ed;
    if (e.length > 0) {
      let s = Math.floor(Math.random() * (e.length - 1));
      return e[s];
    }
    if (s.length > 0) {
      let e = Math.floor(Math.random() * (s.length - 1));
      return s[e];
    }
    return '';
  }, [ed]),
  eO = l.useMemo(() => {
    var e, s;
    let a = (null !== (e = null == ed ? void 0 : ed.artwork) && void 0 !== e ? e : []).map(e => ({
      src: e
    }));
    return [
      ...(null !== (s = null == ed ? void 0 : ed.screenshots) && void 0 !== s ? s : []).map(e => ({
        src: e
      })),
      ...a
    ];
  }, [
    null == ed ? void 0 : ed.artwork,
    null == ed ? void 0 : ed.screenshots
  ]),
  eN = (e, s) => {
    (0, f.UE)({
      gameName: null != em ? em : '',
      applicationId: i,
      action: e,
      similarGameId: s,
      viewId: en
    });
  },
  eR = (0, x.p)('GameProfileModal'),
  {
    shouldOpenGameProfile: eT
  } = (0, Z.ZP)({
    location: 'GameProfileModal',
    applicationId: i,
    trackEntryPointImpression: !1
  });
if (E()(eT, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`'), null == ed)
  return null;
let em = null !== (s = ed.name) && void 0 !== s ? s : null == eI ? void 0 : eI.name,
  eL = null == eI ? void 0 : eI.getIconURL(160, S.$k ? 'webp' : 'png'),
  eP = null !== (r = ed.coverImageUrl) && void 0 !== r ? r : eL,
  {
    summary: eM,
    websites: eg,
    publishers: eS,
    platforms: eG
  } = ed,
  eC = C.default.extractTimestamp(i),
  ef = c()().diff(c()(eC), 'days') <= j.G,
  eh = eE.some(e => (0, L.ig)(e) === I.o.GLOBAL);
return (0, n.jsx)(A.ModalRoot, {
  transitionState: Q,
  size: A.ModalSize.DYNAMIC,
  className: t()(Y, F.gameProfileModal),
  children: (0, n.jsxs)(A.ScrollerNone, {
    className: F.scrollable,
    children: [
      (0, n.jsx)('div', {
        className: t()(F.gameArtHero),
        style: {
          backgroundImage: 'url("'.concat(eA, '")')
        }
      }),
      (0, n.jsxs)('div', {
        className: t()(F.content, F.column, F.headerInfo),
        children: [
          (0, n.jsx)('div', {
            className: F.logoWrapper,
            children: null != eP && (0, n.jsx)('img', {
              className: F.logo,
              src: eP,
              alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                game: em
              })
            })
          }),
          (0, n.jsxs)('div', {
            className: t()(F.row, F.gapSm, F.gameDetails),
            children: [
              (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)(A.Heading, {
                    variant: 'heading-xl/bold',
                    children: em
                  }),
                  (0, n.jsxs)('div', {
                    className: t()(F.row, F.gapSm),
                    children: [
                      null != eL && (0, n.jsx)('img', {
                        src: eL,
                        height: 16,
                        alt: B.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                          game: em
                        })
                      }),
                      (0, n.jsx)(A.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-muted',
                        children: eu
                      }),
                      ef && (0, n.jsx)(A.Text, {
                        variant: 'eyebrow',
                        className: F.newBadge,
                        children: B.Z.Messages.NEW
                      }),
                      eh && (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(A.Text, {
                            variant: 'text-sm/medium',
                            children: ' \xB7 '
                          }),
                          (0, n.jsx)(y, {})
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)('div', {
                children: eR && (0, n.jsx)(A.Tooltip, {
                  text: V ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : B.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                  children: e => (0, n.jsxs)(A.Button, {
                    ...e,
                    innerClassName: F.followButton,
                    color: V ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                    onClick: () => {
                      var e;
                      let s = null !== (e = u.K.get(U)) && void 0 !== e ? e : {};
                      s[i] = !s[i], u.K.set(U, s), eN(s[i] ? f.as.FollowGame : f.as.UnfollowGame), s[i] && (0, A.openModalLazy)(async () => {
                        let {
                          default: e
                        } = await a.e('86564').then(a.bind(a, 641758));
                        return s => (0, n.jsx)(e, {
                          ...s,
                          applicationId: i,
                          background: eA,
                          viewId: en
                        });
                      }), X(s[i]);
                    },
                    children: [
                      V ? (0, n.jsx)(A.BellSlashIcon, {
                        color: 'white'
                      }) : (0, n.jsx)(A.BellIcon, {
                        color: 'white'
                      }),
                      V ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : B.Z.Messages.FOLLOW
                    ]
                  })
                })
              })
            ]
          })
        ]
      }),
      (0, n.jsxs)('div', {
        className: t()(F.content, F.mainContent),
        children: [
          (0, n.jsxs)('div', {
            className: F.column,
            children: [
              (0, n.jsx)(A.Heading, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: B.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
              }),
              (0, n.jsxs)('div', {
                className: t()(F.section, {
                  [F.fadedEntries]: eo && !ec
                }),
                children: [
                  0 === eE.length && (0, n.jsx)(A.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-primary',
                    className: F.emptyFriendsWhoPlay,
                    children: B.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  }),
                  (0, n.jsx)('div', {
                    className: t()(F.column, F.gapNone),
                    children: null == eE ? void 0 : eE.slice(0, eo && !ec ? 6 : void 0).map(e => (0, n.jsx)(D.Z, {
                      entry: e,
                      viewId: en,
                      onClose: H
                    }, e.id))
                  })
                ]
              }),
              eo && !ec && (0, n.jsxs)(A.Clickable, {
                className: F.expandEntriesButton,
                onClick: () => e_(!0),
                children: [
                  (0, n.jsx)(A.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-normal',
                    children: B.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                  }),
                  (0, n.jsx)(A.ChevronSmallDownIcon, {
                    size: 'xs'
                  })
                ]
              }),
              eO.length > 0 && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(A.Heading, {
                    variant: 'heading-md/bold',
                    children: B.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, n.jsx)(A.Scroller, {
                    style: {
                      overflowY: 'visible'
                    },
                    className: t()(F.row, F.imageScroller),
                    orientation: 'horizontal',
                    children: eO.map((e, s) => (0, n.jsx)(A.Clickable, {
                      className: F.clickable,
                      onClick: () => {
                        eN(f.as.ClickImage), (0, A.openModalLazy)(async () => {
                          let {
                            default: e
                          } = await a.e('99857').then(a.bind(a, 895023));
                          return a => {
                            let {
                              ...l
                            } = a;
                            return (0, n.jsx)(e, {
                              className: F.mediaModal,
                              ...l,
                              items: eO,
                              startingIndex: s
                            });
                          };
                        });
                      },
                      children: (0, n.jsx)('img', {
                        src: e.src,
                        className: F.gameArtwork,
                        alt: B.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                          game: em
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
                    children: B.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                  }),
                  (0, n.jsx)('div', {
                    className: F.row,
                    style: {},
                    children: er.map(e => (0, n.jsx)(w, {
                      game: e,
                      onClose: H,
                      trackClick: eN
                    }, null == e ? void 0 : e.applicationId))
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: t()(F.sidebar, F.column),
            children: [
              (0, n.jsx)(A.Heading, {
                variant: 'heading-md/bold',
                children: B.Z.Messages.ABOUT
              }),
              (0, n.jsxs)('div', {
                className: F.sidebarSections,
                children: [
                  null != eM && (0, n.jsxs)('div', {
                    className: t()(F.column, F.gapSm),
                    children: [
                      (0, n.jsx)(A.Text, {
                        ref: ea,
                        lineClamp: q ? 8 : void 0,
                        variant: 'text-sm/normal',
                        children: eM
                      }),
                      (ee || !q) && (0, n.jsx)(A.Clickable, {
                        className: F.clickable,
                        onClick: () => {
                          eN(q ? f.as.ShowMore : f.as.ShowLess), $(!q);
                        },
                        children: (0, n.jsx)(A.Text, {
                          variant: 'text-sm/semibold',
                          children: q ? B.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : B.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                        })
                      })
                    ]
                  }),
                  (0, n.jsx)(K.Z, {
                    websites: eg,
                    trackClick: eN
                  }),
                  (eS.length > 0 || eG.length > 0) && (0, n.jsx)('div', {
                    className: t()(F.column),
                    children: eS.length > 0 && (0, n.jsxs)('div', {
                      className: t()(F.column, F.gapSm),
                      children: [
                        (0, n.jsx)(A.Heading, {
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: B.Z.Messages.GAME_PROFILE_PUBLISHER
                        }),
                        (0, n.jsxs)('div', {
                          className: t()(F.row, F.gapMd),
                          children: [
                            (0, n.jsx)(A.Text, {
                              variant: 'text-sm/normal',
                              children: eS.join(', ')
                            }),
                            eG.length > 0 && (0, n.jsx)(b, {
                              platforms: eG
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
n.r(l), n(47120), n(653041);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  c = n(758713),
  d = n(442837),
  u = n(433517),
  m = n(481060),
  h = n(224706),
  x = n(812206),
  I = n(168551),
  g = n(485267),
  E = n(26033),
  v = n(669764),
  N = n(962250),
  j = n(768581),
  p = n(814225),
  _ = n(567409),
  M = n(774073),
  O = n(383895),
  A = n(183391),
  T = n(689938),
  f = n(997844);
let L = "GameProfileModal",
  P = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let n = {};
    return e.forEach(e => {
      if (!(0, E.d)(e)) return;
      let s = e.extra.application_id;
      s !== l && (null == n[s] && (n[s] = 0), n[s] += 1)
    }), Object.keys(n).sort((e, l) => n[l] - n[e])
  },
  S = e => {
    var l;
    let {
      applicationId: n,
      channel: t,
      onClose: a
    } = e, [i, r] = (0, d.Wu)([v.Z, x.Z], () => [v.Z.getGame(n), x.Z.getApplication(n)]);
    if (null == i) return null;
    let o = i.coverImageUrl;
    return (0, s.jsx)(m.Clickable, {
      className: f.clickable,
      onClick: async () => {
        (0, m.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(G, {
          applicationId: n,
          channel: t,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a()
      },
      children: (0, s.jsx)("img", {
        src: o,
        className: f.similarGames,
        alt: T.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  R = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
  C = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(c.z.DESKTOP) && (n.includes(c.z.MACOS) || n.includes(c.z.LINUX)) && n.push(c.z.DESKTOP);
    let t = (n = n.filter(e => R.includes(e))).map(e => {
      switch (e) {
        case c.z.DESKTOP:
          return (0, s.jsx)(m.ScreenIcon, {}, e);
        case c.z.XBOX:
          return (0, s.jsx)(m.XboxIcon, {}, e);
        case c.z.PLAYSTATION:
          return (0, s.jsx)(m.PlaystationIcon, {}, e);
        case c.z.NINTENDO:
          return (0, s.jsx)(m.NintendoSwitchNeutralIcon, {}, e);
        default:
          return null
      }
    });
    return (0, s.jsx)("div", {
      className: f.row,
      children: t
    })
  },
  G = e => {
    var l, a, r;
    let {
      applicationId: c,
      channel: R,
      transitionState: G,
      onClose: Z
    } = e, {
      clientThemesClassName: D
    } = (0, I.ZP)(), {
      width: w,
      height: b
    } = (0, N.b)(), [F, B] = t.useState(null !== (l = u.K.get(L)) && void 0 !== l ? l : {}), [y, k] = t.useState(!0), [W, z] = t.useState(!1), U = t.useRef(null);
    t.useEffect(() => {
      let e = U.current;
      null != e && z(e.scrollHeight - e.clientHeight > 1)
    }, [U, w, b]), t.useEffect(() => {
      (0, g.J)()
    }, []);
    let {
      entries: H
    } = (0, _.Z)(), Y = t.useMemo(() => {
      var e;
      return null !== (e = null == H ? void 0 : H.filter(e => (0, E.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [H, c]), K = t.useMemo(() => P(H, c), [H, c]);
    t.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...K])
    }, [c, K]);
    let X = x.Z.getApplication(c),
      q = (0, d.e7)([v.Z], () => v.Z.getGame(c)),
      J = t.useMemo(() => null == q ? void 0 : q.genres.map(p.P3).join(", "), [q]),
      V = t.useMemo(() => {
        if (null == q) return 0;
        let {
          artwork: e,
          screenshots: l
        } = q;
        if (e.length > 0) {
          let l = Math.floor(Math.random() * (e.length - 1));
          return e[l]
        }
        if (l.length > 0) {
          let e = Math.floor(Math.random() * (l.length - 1));
          return l[e]
        }
        return ""
      }, [q]),
      Q = t.useMemo(() => {
        var e, l;
        let n = (null !== (e = null == q ? void 0 : q.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }));
        return [...n, ...(null !== (l = null == q ? void 0 : q.screenshots) && void 0 !== l ? l : []).map(e => ({
          src: e
        }))]
      }, [null == q ? void 0 : q.artwork, null == q ? void 0 : q.screenshots]),
      $ = (0, M.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()($, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == q) return null;
    let ee = null !== (a = q.name) && void 0 !== a ? a : null == X ? void 0 : X.name,
      el = null == X ? void 0 : X.getIconURL(160, j.$k ? "webp" : "png"),
      en = null !== (r = q.coverImageUrl) && void 0 !== r ? r : el,
      {
        summary: es,
        websites: et,
        publishers: ea,
        platforms: ei
      } = q,
      er = F[c];
    return (0, s.jsxs)(m.ModalRoot, {
      transitionState: G,
      size: m.ModalSize.DYNAMIC,
      className: i()(D, f.gameProfileModal),
      children: [(0, s.jsxs)("div", {
        className: f.gameArtHero,
        children: [(0, s.jsx)("div", {
          className: f.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(V, '")')
          }
        }), (0, s.jsx)("div", {
          className: f.gameHeroGradient
        })]
      }), (0, s.jsxs)("div", {
        className: i()(f.content, f.column, f.headerInfo),
        children: [(0, s.jsx)("div", {
          className: f.logoWrapper,
          children: null != en && (0, s.jsx)("img", {
            className: f.logo,
            src: en,
            alt: T.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: ee
            })
          })
        }), (0, s.jsxs)("div", {
          className: i()(f.row, f.gapSm, f.gameDetails),
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-xl/bold",
              children: ee
            }), (0, s.jsxs)("div", {
              className: i()(f.row, f.gapSm),
              children: [(0, s.jsx)(m.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J
              }), null != el && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, s.jsx)("img", {
                  src: el,
                  height: 16,
                  alt: T.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: ee
                  })
                })]
              })]
            })]
          }), (0, s.jsx)("div", {
            children: (0, s.jsx)(m.Tooltip, {
              text: er ? T.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : T.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
              children: e => (0, s.jsxs)(m.Button, {
                ...e,
                innerClassName: f.followButton,
                color: er ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                onClick: () => {
                  let e = {
                    ...F
                  };
                  e[c] = !e[c], B(e), u.K.set(L, e)
                },
                children: [er ? (0, s.jsx)(m.BellSlashIcon, {
                  color: "white"
                }) : (0, s.jsx)(m.BellIcon, {
                  color: "white"
                }), er ? T.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : T.Z.Messages.FOLLOW]
              })
            })
          })]
        })]
      }), (0, s.jsx)(m.Scroller, {
        children: (0, s.jsxs)("div", {
          className: i()(f.content, f.mainContent),
          children: [(0, s.jsxs)("div", {
            className: f.column,
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: T.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, s.jsxs)("div", {
              className: f.section,
              children: [0 === Y.length && (0, s.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: f.emptyFriendsWhoPlay,
                children: T.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(f.column, f.gapNone),
                children: null == Y ? void 0 : Y.map(e => (0, s.jsx)(O.Z, {
                  entry: e,
                  channel: R,
                  onClose: Z
                }, e.id))
              })]
            }), Q.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: T.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, s.jsx)(m.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(f.row, f.imageScroller),
                orientation: "horizontal",
                children: Q.map((e, l) => (0, s.jsx)(m.Clickable, {
                  className: f.clickable,
                  onClick: () => {
                    (0, m.openModalLazy)(async () => {
                      let {
                        default: e
                      } = await n.e("99857").then(n.bind(n, 895023));
                      return n => {
                        let {
                          ...t
                        } = n;
                        return (0, s.jsx)(e, {
                          className: f.mediaModal,
                          ...t,
                          items: Q,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, s.jsx)("img", {
                    src: e.src,
                    className: f.gameArtwork,
                    alt: T.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: ee
                    })
                  })
                }, e.src))
              })]
            }), (0, s.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: T.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, s.jsx)("div", {
              className: f.row,
              style: {},
              children: K.filter(M.z6).slice(0, 5).map(e => (0, s.jsx)(S, {
                applicationId: e,
                channel: R,
                onClose: Z
              }, e))
            })]
          }), (0, s.jsxs)("div", {
            className: i()(f.sidebar, f.column, f.padded),
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: T.Z.Messages.ABOUT
            }), null != es && (0, s.jsxs)("div", {
              className: i()(f.column, f.gapSm),
              children: [(0, s.jsx)(m.Text, {
                ref: U,
                lineClamp: y ? 8 : void 0,
                variant: "text-sm/normal",
                children: es
              }), (W || !y) && (0, s.jsx)(m.Clickable, {
                className: f.clickable,
                onClick: () => k(!y),
                children: (0, s.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: y ? T.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : T.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, s.jsx)(A.Z, {
              websites: et
            }), (ea.length > 0 || ei.length > 0) && (0, s.jsxs)("div", {
              className: i()(f.column),
              children: [ea.length > 0 && (0, s.jsxs)("div", {
                className: i()(f.column, f.gapSm),
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: T.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, s.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: ea.join(", ")
                })]
              }), ei.length > 0 && (0, s.jsxs)("div", {
                className: i()(f.column, f.gapSm),
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: T.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, s.jsx)(C, {
                  platforms: ei
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = G
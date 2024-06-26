a.r(l), a(47120), a(653041);
var n = a(735250),
  s = a(470079),
  t = a(120356),
  i = a.n(t),
  r = a(512722),
  o = a.n(r),
  c = a(758713),
  d = a(442837),
  u = a(433517),
  m = a(481060),
  h = a(224706),
  x = a(812206),
  g = a(168551),
  E = a(485267),
  I = a(26033),
  v = a(669764),
  _ = a(962250),
  A = a(768581),
  M = a(814225),
  p = a(998058),
  N = a(839392),
  j = a(567409),
  O = a(774073),
  T = a(383895),
  f = a(183391),
  L = a(689938),
  P = a(997844);
let R = "GameProfileModal",
  S = e => {
    let {
      applicationId: l,
      onClose: a
    } = e, [s, t] = (0, d.Wu)([v.Z, x.Z], () => [v.Z.getGame(l), x.Z.getApplication(l)]);
    if (null == s) return null;
    let i = s.coverImageUrl;
    return (0, n.jsx)(m.Tooltip, {
      text: s.name,
      children: e => {
        var r;
        return (0, n.jsx)(m.Clickable, {
          ...e,
          className: P.clickable,
          onClick: async () => {
            (0, m.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(C, {
              applicationId: l,
              ...e
            }))), await new Promise(e => setTimeout(e, 10)), a()
          },
          children: (0, n.jsx)("img", {
            src: i,
            className: P.similarGames,
            alt: L.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : null == s ? void 0 : s.name
            })
          })
        })
      }
    })
  },
  G = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
  Z = e => {
    let {
      platforms: l
    } = e, a = [...new Set(l)];
    !a.includes(c.z.DESKTOP) && (a.includes(c.z.MACOS) || a.includes(c.z.LINUX)) && a.push(c.z.DESKTOP);
    let s = (a = a.filter(e => G.includes(e))).map(e => {
      switch (e) {
        case c.z.DESKTOP:
          return (0, n.jsx)(m.ScreenIcon, {}, e);
        case c.z.XBOX:
          return (0, n.jsx)(m.XboxIcon, {}, e);
        case c.z.PLAYSTATION:
          return (0, n.jsx)(m.PlaystationIcon, {}, e);
        case c.z.NINTENDO:
          return (0, n.jsx)(m.NintendoSwitchNeutralIcon, {}, e);
        default:
          return null
      }
    });
    return (0, n.jsx)("div", {
      className: P.row,
      children: s
    })
  },
  C = e => {
    var l, t, r;
    let {
      applicationId: c,
      transitionState: G,
      onClose: C
    } = e, {
      clientThemesClassName: w
    } = (0, g.ZP)(), {
      width: b,
      height: F
    } = (0, _.b)(), [D, y] = s.useState(null !== (l = u.K.get(R)) && void 0 !== l ? l : {}), [k, B] = s.useState(!0), [U, W] = s.useState(!1), H = s.useRef(null);
    s.useEffect(() => {
      let e = H.current;
      null != e && W(e.scrollHeight - e.clientHeight > 1)
    }, [H, b, F]), s.useEffect(() => {
      (0, E.J)()
    }, []);
    let {
      entries: z
    } = (0, j.Z)(), Y = s.useMemo(() => {
      var e;
      return null !== (e = null == z ? void 0 : z.filter(e => (0, I.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [z, c]), K = (0, d.Wu)([N.Z], () => {
      var e;
      return (null !== (e = N.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25)
    });
    s.useEffect(() => {
      0 === K.length && (0, p.i)(c)
    }, [c, K]), s.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...K])
    }, [c, K]);
    let X = x.Z.getApplication(c),
      V = (0, d.e7)([v.Z], () => v.Z.getGame(c)),
      q = s.useMemo(() => null == V ? void 0 : V.genres.map(M.P3).join(", "), [V]),
      J = s.useMemo(() => {
        if (null == V) return 0;
        let {
          artwork: e,
          screenshots: l
        } = V;
        if (e.length > 0) {
          let l = Math.floor(Math.random() * (e.length - 1));
          return e[l]
        }
        if (l.length > 0) {
          let e = Math.floor(Math.random() * (l.length - 1));
          return l[e]
        }
        return ""
      }, [V]),
      Q = s.useMemo(() => {
        var e, l;
        let a = (null !== (e = null == V ? void 0 : V.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }));
        return [...a, ...(null !== (l = null == V ? void 0 : V.screenshots) && void 0 !== l ? l : []).map(e => ({
          src: e
        }))]
      }, [null == V ? void 0 : V.artwork, null == V ? void 0 : V.screenshots]),
      $ = (0, O.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()($, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == V) return null;
    let ee = null !== (t = V.name) && void 0 !== t ? t : null == X ? void 0 : X.name,
      el = null == X ? void 0 : X.getIconURL(160, A.$k ? "webp" : "png"),
      ea = null !== (r = V.coverImageUrl) && void 0 !== r ? r : el,
      {
        summary: en,
        websites: es,
        publishers: et,
        platforms: ei
      } = V,
      er = D[c];
    return (0, n.jsxs)(m.ModalRoot, {
      transitionState: G,
      size: m.ModalSize.DYNAMIC,
      className: i()(w, P.gameProfileModal),
      children: [(0, n.jsxs)("div", {
        className: P.gameArtHero,
        children: [(0, n.jsx)("div", {
          className: P.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(J, '")')
          }
        }), (0, n.jsx)("div", {
          className: P.gameHeroGradient
        })]
      }), (0, n.jsxs)("div", {
        className: i()(P.content, P.column, P.headerInfo),
        children: [(0, n.jsx)("div", {
          className: P.logoWrapper,
          children: null != ea && (0, n.jsx)("img", {
            className: P.logo,
            src: ea,
            alt: L.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: ee
            })
          })
        }), (0, n.jsxs)("div", {
          className: i()(P.row, P.gapSm, P.gameDetails),
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-xl/bold",
              children: ee
            }), (0, n.jsxs)("div", {
              className: i()(P.row, P.gapSm),
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: q
              }), null != el && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, n.jsx)("img", {
                  src: el,
                  height: 16,
                  alt: L.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: ee
                  })
                })]
              })]
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(m.Tooltip, {
              text: er ? L.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : L.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
              children: e => (0, n.jsxs)(m.Button, {
                ...e,
                innerClassName: P.followButton,
                color: er ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                onClick: () => {
                  let e = {
                    ...D
                  };
                  e[c] = !e[c], y(e), u.K.set(R, e)
                },
                children: [er ? (0, n.jsx)(m.BellSlashIcon, {
                  color: "white"
                }) : (0, n.jsx)(m.BellIcon, {
                  color: "white"
                }), er ? L.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : L.Z.Messages.FOLLOW]
              })
            })
          })]
        })]
      }), (0, n.jsx)(m.Scroller, {
        children: (0, n.jsxs)("div", {
          className: i()(P.content, P.mainContent),
          children: [(0, n.jsxs)("div", {
            className: P.column,
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: L.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, n.jsxs)("div", {
              className: P.section,
              children: [0 === Y.length && (0, n.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: P.emptyFriendsWhoPlay,
                children: L.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, n.jsx)("div", {
                className: i()(P.column, P.gapNone),
                children: null == Y ? void 0 : Y.map(e => (0, n.jsx)(T.Z, {
                  entry: e,
                  onClose: C
                }, e.id))
              })]
            }), Q.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: L.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, n.jsx)(m.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(P.row, P.imageScroller),
                orientation: "horizontal",
                children: Q.map((e, l) => (0, n.jsx)(m.Clickable, {
                  className: P.clickable,
                  onClick: () => {
                    (0, m.openModalLazy)(async () => {
                      let {
                        default: e
                      } = await a.e("99857").then(a.bind(a, 895023));
                      return a => {
                        let {
                          ...s
                        } = a;
                        return (0, n.jsx)(e, {
                          className: P.mediaModal,
                          ...s,
                          items: Q,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, n.jsx)("img", {
                    src: e.src,
                    className: P.gameArtwork,
                    alt: L.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: ee
                    })
                  })
                }, e.src))
              })]
            }), K.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: L.Z.Messages.GAME_PROFILE_ALSO_PLAYING
              }), (0, n.jsx)("div", {
                className: P.row,
                style: {},
                children: K.filter(O.z6).slice(0, 5).map(e => (0, n.jsx)(S, {
                  applicationId: e,
                  onClose: C
                }, e))
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: i()(P.sidebar, P.column, P.padded),
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: L.Z.Messages.ABOUT
            }), null != en && (0, n.jsxs)("div", {
              className: i()(P.column, P.gapSm),
              children: [(0, n.jsx)(m.Text, {
                ref: H,
                lineClamp: k ? 8 : void 0,
                variant: "text-sm/normal",
                children: en
              }), (U || !k) && (0, n.jsx)(m.Clickable, {
                className: P.clickable,
                onClick: () => B(!k),
                children: (0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: k ? L.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : L.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, n.jsx)(f.Z, {
              websites: es
            }), (et.length > 0 || ei.length > 0) && (0, n.jsxs)("div", {
              className: i()(P.column),
              children: [et.length > 0 && (0, n.jsxs)("div", {
                className: i()(P.column, P.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: L.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: et.join(", ")
                })]
              }), ei.length > 0 && (0, n.jsxs)("div", {
                className: i()(P.column, P.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: L.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, n.jsx)(Z, {
                  platforms: ei
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = C
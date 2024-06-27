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
  g = a(812206),
  x = a(168551),
  I = a(485267),
  E = a(26033),
  _ = a(669764),
  v = a(962250),
  p = a(768581),
  M = a(814225),
  A = a(810568),
  N = a(998058),
  f = a(839392),
  O = a(567409),
  L = a(774073),
  j = a(383895),
  T = a(183391),
  S = a(689938),
  P = a(997844);
let G = "GameProfileModal",
  R = e => {
    let {
      applicationId: l,
      onClose: a,
      trackClick: s
    } = e, [t, i] = (0, d.Wu)([_.Z, g.Z], () => [_.Z.getGame(l), g.Z.getApplication(l)]);
    if (null == t) return null;
    let r = t.coverImageUrl;
    return (0, n.jsx)(m.Tooltip, {
      text: t.name,
      children: e => {
        var o;
        return (0, n.jsx)(m.Clickable, {
          ...e,
          className: P.clickable,
          onClick: async () => {
            s(A.a.ClickSimilarGame, l), (0, m.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(Z, {
              applicationId: l,
              ...e
            }))), await new Promise(e => setTimeout(e, 10)), a()
          },
          children: (0, n.jsx)("img", {
            src: r,
            className: P.similarGames,
            alt: S.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: null !== (o = null == i ? void 0 : i.name) && void 0 !== o ? o : null == t ? void 0 : t.name
            })
          })
        })
      }
    })
  },
  C = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
  w = e => {
    let {
      platforms: l
    } = e, a = [...new Set(l)];
    !a.includes(c.z.DESKTOP) && (a.includes(c.z.MACOS) || a.includes(c.z.LINUX)) && a.push(c.z.DESKTOP);
    let s = (a = a.filter(e => C.includes(e))).map(e => {
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
  Z = e => {
    var l, t, r;
    let {
      applicationId: c,
      transitionState: C,
      onClose: Z
    } = e, {
      clientThemesClassName: b
    } = (0, x.ZP)(), {
      width: k,
      height: F
    } = (0, v.b)(), [D, y] = s.useState(null !== (l = u.K.get(G)) && void 0 !== l ? l : {}), [U, W] = s.useState(!0), [B, H] = s.useState(!1), Y = s.useRef(null);
    s.useEffect(() => {
      let e = Y.current;
      null != e && H(e.scrollHeight - e.clientHeight > 1)
    }, [Y, k, F]), s.useEffect(() => {
      (0, I.J)()
    }, []);
    let {
      entries: z
    } = (0, O.Z)(), K = s.useMemo(() => {
      var e;
      return null !== (e = null == z ? void 0 : z.filter(e => (0, E.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [z, c]), X = (0, d.Wu)([f.Z], () => {
      var e;
      return (null !== (e = f.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25)
    });
    s.useEffect(() => {
      0 === X.length && (0, N.i)(c)
    }, [c, X]), s.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...X])
    }, [c, X]);
    let J = g.Z.getApplication(c),
      V = (0, d.e7)([_.Z], () => _.Z.getGame(c)),
      q = s.useMemo(() => null == V ? void 0 : V.genres.map(M.P3).join(", "), [V]),
      Q = s.useMemo(() => {
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
      $ = s.useMemo(() => {
        var e, l;
        let a = (null !== (e = null == V ? void 0 : V.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }));
        return [...a, ...(null !== (l = null == V ? void 0 : V.screenshots) && void 0 !== l ? l : []).map(e => ({
          src: e
        }))]
      }, [null == V ? void 0 : V.artwork, null == V ? void 0 : V.screenshots]),
      ee = (e, l) => {
        (0, A.U)({
          gameName: null != ea ? ea : "",
          applicationId: c,
          action: e,
          similarGameId: l
        })
      },
      el = (0, L.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()(el, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == V) return null;
    let ea = null !== (t = V.name) && void 0 !== t ? t : null == J ? void 0 : J.name,
      en = null == J ? void 0 : J.getIconURL(160, p.$k ? "webp" : "png"),
      es = null !== (r = V.coverImageUrl) && void 0 !== r ? r : en,
      {
        summary: et,
        websites: ei,
        publishers: er,
        platforms: eo
      } = V,
      ec = D[c];
    return (0, n.jsxs)(m.ModalRoot, {
      transitionState: C,
      size: m.ModalSize.DYNAMIC,
      className: i()(b, P.gameProfileModal),
      children: [(0, n.jsxs)("div", {
        className: P.gameArtHero,
        children: [(0, n.jsx)("div", {
          className: P.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(Q, '")')
          }
        }), (0, n.jsx)("div", {
          className: P.gameHeroGradient
        })]
      }), (0, n.jsxs)("div", {
        className: i()(P.content, P.column, P.headerInfo),
        children: [(0, n.jsx)("div", {
          className: P.logoWrapper,
          children: null != es && (0, n.jsx)("img", {
            className: P.logo,
            src: es,
            alt: S.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: ea
            })
          })
        }), (0, n.jsxs)("div", {
          className: i()(P.row, P.gapSm, P.gameDetails),
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-xl/bold",
              children: ea
            }), (0, n.jsxs)("div", {
              className: i()(P.row, P.gapSm),
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: q
              }), null != en && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, n.jsx)("img", {
                  src: en,
                  height: 16,
                  alt: S.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: ea
                  })
                })]
              })]
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(m.Tooltip, {
              text: ec ? S.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : S.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
              children: e => (0, n.jsxs)(m.Button, {
                ...e,
                innerClassName: P.followButton,
                color: ec ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                onClick: () => {
                  let e = {
                    ...D
                  };
                  e[c] = !e[c], y(e), u.K.set(G, e), ee(e[c] ? A.a.FollowGame : A.a.UnfollowGame)
                },
                children: [ec ? (0, n.jsx)(m.BellSlashIcon, {
                  color: "white"
                }) : (0, n.jsx)(m.BellIcon, {
                  color: "white"
                }), ec ? S.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : S.Z.Messages.FOLLOW]
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
              children: S.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, n.jsxs)("div", {
              className: P.section,
              children: [0 === K.length && (0, n.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: P.emptyFriendsWhoPlay,
                children: S.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, n.jsx)("div", {
                className: i()(P.column, P.gapNone),
                children: null == K ? void 0 : K.map(e => (0, n.jsx)(j.Z, {
                  entry: e,
                  onClose: Z
                }, e.id))
              })]
            }), $.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: S.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, n.jsx)(m.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(P.row, P.imageScroller),
                orientation: "horizontal",
                children: $.map((e, l) => (0, n.jsx)(m.Clickable, {
                  className: P.clickable,
                  onClick: () => {
                    ee(A.a.ClickImage), (0, m.openModalLazy)(async () => {
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
                          items: $,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, n.jsx)("img", {
                    src: e.src,
                    className: P.gameArtwork,
                    alt: S.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: ea
                    })
                  })
                }, e.src))
              })]
            }), X.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: S.Z.Messages.GAME_PROFILE_ALSO_PLAYING
              }), (0, n.jsx)("div", {
                className: P.row,
                style: {},
                children: X.filter(L.z6).slice(0, 5).map(e => (0, n.jsx)(R, {
                  applicationId: e,
                  onClose: Z,
                  trackClick: ee
                }, e))
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: i()(P.sidebar, P.column, P.padded),
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: S.Z.Messages.ABOUT
            }), null != et && (0, n.jsxs)("div", {
              className: i()(P.column, P.gapSm),
              children: [(0, n.jsx)(m.Text, {
                ref: Y,
                lineClamp: U ? 8 : void 0,
                variant: "text-sm/normal",
                children: et
              }), (B || !U) && (0, n.jsx)(m.Clickable, {
                className: P.clickable,
                onClick: () => {
                  ee(U ? A.a.ShowMore : A.a.ShowLess), W(!U)
                },
                children: (0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: U ? S.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : S.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, n.jsx)(T.Z, {
              websites: ei,
              trackClick: ee
            }), (er.length > 0 || eo.length > 0) && (0, n.jsxs)("div", {
              className: i()(P.column),
              children: [er.length > 0 && (0, n.jsxs)("div", {
                className: i()(P.column, P.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: S.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: er.join(", ")
                })]
              }), eo.length > 0 && (0, n.jsxs)("div", {
                className: i()(P.column, P.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: S.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, n.jsx)(w, {
                  platforms: eo
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = Z
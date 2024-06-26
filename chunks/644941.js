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
  E = a(168551),
  g = a(485267),
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
      channel: a,
      onClose: s
    } = e, [t, i] = (0, d.Wu)([v.Z, x.Z], () => [v.Z.getGame(l), x.Z.getApplication(l)]);
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
            (0, m.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(w, {
              applicationId: l,
              channel: a,
              ...e
            }))), await new Promise(e => setTimeout(e, 10)), s()
          },
          children: (0, n.jsx)("img", {
            src: r,
            className: P.similarGames,
            alt: L.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: null !== (o = null == i ? void 0 : i.name) && void 0 !== o ? o : null == t ? void 0 : t.name
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
  w = e => {
    var l, t, r;
    let {
      applicationId: c,
      channel: G,
      transitionState: w,
      onClose: C
    } = e, {
      clientThemesClassName: b
    } = (0, E.ZP)(), {
      width: F,
      height: D
    } = (0, _.b)(), [y, k] = s.useState(null !== (l = u.K.get(R)) && void 0 !== l ? l : {}), [B, U] = s.useState(!0), [W, H] = s.useState(!1), z = s.useRef(null);
    s.useEffect(() => {
      let e = z.current;
      null != e && H(e.scrollHeight - e.clientHeight > 1)
    }, [z, F, D]), s.useEffect(() => {
      (0, g.J)()
    }, []);
    let {
      entries: Y
    } = (0, j.Z)(), K = s.useMemo(() => {
      var e;
      return null !== (e = null == Y ? void 0 : Y.filter(e => (0, I.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [Y, c]), X = (0, d.Wu)([N.Z], () => {
      var e;
      return (null !== (e = N.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25)
    });
    s.useEffect(() => {
      0 === X.length && (0, p.i)(c)
    }, [c]), s.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...X])
    }, [c, X]);
    let V = x.Z.getApplication(c),
      q = (0, d.e7)([v.Z], () => v.Z.getGame(c)),
      J = s.useMemo(() => null == q ? void 0 : q.genres.map(M.P3).join(", "), [q]),
      Q = s.useMemo(() => {
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
      $ = s.useMemo(() => {
        var e, l;
        let a = (null !== (e = null == q ? void 0 : q.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }));
        return [...a, ...(null !== (l = null == q ? void 0 : q.screenshots) && void 0 !== l ? l : []).map(e => ({
          src: e
        }))]
      }, [null == q ? void 0 : q.artwork, null == q ? void 0 : q.screenshots]),
      ee = (0, O.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()(ee, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == q) return null;
    let el = null !== (t = q.name) && void 0 !== t ? t : null == V ? void 0 : V.name,
      ea = null == V ? void 0 : V.getIconURL(160, A.$k ? "webp" : "png"),
      en = null !== (r = q.coverImageUrl) && void 0 !== r ? r : ea,
      {
        summary: es,
        websites: et,
        publishers: ei,
        platforms: er
      } = q,
      eo = y[c];
    return (0, n.jsxs)(m.ModalRoot, {
      transitionState: w,
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
          children: null != en && (0, n.jsx)("img", {
            className: P.logo,
            src: en,
            alt: L.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: el
            })
          })
        }), (0, n.jsxs)("div", {
          className: i()(P.row, P.gapSm, P.gameDetails),
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-xl/bold",
              children: el
            }), (0, n.jsxs)("div", {
              className: i()(P.row, P.gapSm),
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: J
              }), null != ea && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, n.jsx)("img", {
                  src: ea,
                  height: 16,
                  alt: L.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: el
                  })
                })]
              })]
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(m.Tooltip, {
              text: eo ? L.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : L.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
              children: e => (0, n.jsxs)(m.Button, {
                ...e,
                innerClassName: P.followButton,
                color: eo ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                onClick: () => {
                  let e = {
                    ...y
                  };
                  e[c] = !e[c], k(e), u.K.set(R, e)
                },
                children: [eo ? (0, n.jsx)(m.BellSlashIcon, {
                  color: "white"
                }) : (0, n.jsx)(m.BellIcon, {
                  color: "white"
                }), eo ? L.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : L.Z.Messages.FOLLOW]
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
              children: [0 === K.length && (0, n.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: P.emptyFriendsWhoPlay,
                children: L.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, n.jsx)("div", {
                className: i()(P.column, P.gapNone),
                children: null == K ? void 0 : K.map(e => (0, n.jsx)(T.Z, {
                  entry: e,
                  channel: G,
                  onClose: C
                }, e.id))
              })]
            }), $.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: L.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, n.jsx)(m.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(P.row, P.imageScroller),
                orientation: "horizontal",
                children: $.map((e, l) => (0, n.jsx)(m.Clickable, {
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
                          items: $,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, n.jsx)("img", {
                    src: e.src,
                    className: P.gameArtwork,
                    alt: L.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: el
                    })
                  })
                }, e.src))
              })]
            }), X.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: L.Z.Messages.GAME_PROFILE_ALSO_PLAYING
              }), (0, n.jsx)("div", {
                className: P.row,
                style: {},
                children: X.filter(O.z6).slice(0, 5).map(e => (0, n.jsx)(S, {
                  applicationId: e,
                  channel: G,
                  onClose: C
                }, e))
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: i()(P.sidebar, P.column, P.padded),
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: L.Z.Messages.ABOUT
            }), null != es && (0, n.jsxs)("div", {
              className: i()(P.column, P.gapSm),
              children: [(0, n.jsx)(m.Text, {
                ref: z,
                lineClamp: B ? 8 : void 0,
                variant: "text-sm/normal",
                children: es
              }), (W || !B) && (0, n.jsx)(m.Clickable, {
                className: P.clickable,
                onClick: () => U(!B),
                children: (0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: B ? L.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : L.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, n.jsx)(f.Z, {
              websites: et
            }), (ei.length > 0 || er.length > 0) && (0, n.jsxs)("div", {
              className: i()(P.column),
              children: [ei.length > 0 && (0, n.jsxs)("div", {
                className: i()(P.column, P.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: L.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: ei.join(", ")
                })]
              }), er.length > 0 && (0, n.jsxs)("div", {
                className: i()(P.column, P.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: L.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, n.jsx)(Z, {
                  platforms: er
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = w
n.r(l), n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  t = n(120356),
  i = n.n(t),
  r = n(758713),
  o = n(442837),
  c = n(433517),
  d = n(481060),
  u = n(224706),
  m = n(812206),
  x = n(168551),
  h = n(26033),
  g = n(669764),
  I = n(962250),
  v = n(768581),
  E = n(814225),
  j = n(567409),
  N = n(383895),
  A = n(183391),
  p = n(689938),
  O = n(997844);
let T = "GameProfileModal",
  M = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let n = {};
    return e.forEach(e => {
      if (!(0, h.d)(e)) return;
      let s = e.extra.application_id;
      s !== l && (null == n[s] && (n[s] = 0), n[s] += 1)
    }), Object.keys(n).sort((e, l) => n[l] - n[e])
  },
  _ = e => {
    var l;
    let {
      applicationId: n,
      channel: a,
      onClose: t
    } = e, [i, r] = (0, o.Wu)([g.Z, m.Z], () => [g.Z.getGame(n), m.Z.getApplication(n)]);
    if (null == i) return null;
    let c = i.coverImageUrl;
    return (0, s.jsx)(d.Clickable, {
      className: O.clickable,
      onClick: async () => {
        (0, d.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(f, {
          applicationId: n,
          channel: a,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), t()
      },
      children: (0, s.jsx)("img", {
        src: c,
        className: O.similarGames,
        alt: p.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  S = [r.z.DESKTOP, r.z.XBOX, r.z.PLAYSTATION, r.z.NINTENDO],
  C = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(r.z.DESKTOP) && (n.includes(r.z.MACOS) || n.includes(r.z.LINUX)) && n.push(r.z.DESKTOP);
    let a = (n = n.filter(e => S.includes(e))).map(e => {
      switch (e) {
        case r.z.DESKTOP:
          return (0, s.jsx)(d.ScreenIcon, {}, e);
        case r.z.XBOX:
          return (0, s.jsx)(d.XboxIcon, {}, e);
        case r.z.PLAYSTATION:
          return (0, s.jsx)(d.PlaystationIcon, {}, e);
        case r.z.NINTENDO:
          return (0, s.jsx)(d.NintendoSwitchNeutralIcon, {}, e);
        default:
          return null
      }
    });
    return (0, s.jsx)("div", {
      className: O.row,
      children: a
    })
  },
  f = e => {
    var l, t, r;
    let {
      applicationId: S,
      channel: f,
      transitionState: L,
      onClose: P
    } = e, {
      clientThemesClassName: R
    } = (0, x.ZP)(), {
      width: b,
      height: w
    } = (0, I.b)(), [Z, G] = a.useState(null !== (l = c.K.get(T)) && void 0 !== l ? l : {}), [D, F] = a.useState(!0), [B, k] = a.useState(!1), y = a.useRef(null);
    a.useEffect(() => {
      let e = y.current;
      null != e && k(e.scrollHeight - e.clientHeight > 1)
    }, [y, b, w]);
    let {
      entries: W
    } = (0, j.Z)(), z = a.useMemo(() => {
      var e;
      return null !== (e = null == W ? void 0 : W.filter(e => (0, h.d)(e) && e.extra.application_id === S)) && void 0 !== e ? e : []
    }, [W, S]), H = a.useMemo(() => M(W, S), [W, S]);
    a.useEffect(() => {
      u.Z.getDetectableGamesSupplemental([S, ...H])
    }, [S, H]);
    let U = m.Z.getApplication(S),
      Y = (0, o.e7)([g.Z], () => g.Z.getGame(S)),
      K = a.useMemo(() => null == Y ? void 0 : Y.genres.map(E.P3).join(", "), [Y]),
      X = a.useMemo(() => {
        if (null == Y) return 0;
        let {
          artwork: e
        } = Y;
        return Math.floor(Math.random() * (e.length - 1))
      }, [Y]),
      q = a.useMemo(() => {
        var e;
        return (null !== (e = null == Y ? void 0 : Y.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }))
      }, [null == Y ? void 0 : Y.artwork]);
    if (null == Y) return null;
    let Q = null !== (t = Y.name) && void 0 !== t ? t : null == U ? void 0 : U.name,
      $ = null == U ? void 0 : U.getIconURL(160, v.$k ? "webp" : "png"),
      J = null !== (r = Y.coverImageUrl) && void 0 !== r ? r : $,
      {
        artwork: V = [],
        summary: ee,
        websites: el,
        publishers: en,
        platforms: es
      } = Y;
    return (0, s.jsxs)(d.ModalRoot, {
      transitionState: L,
      size: d.ModalSize.DYNAMIC,
      className: i()(R, O.gameProfileModal),
      children: [(0, s.jsxs)("div", {
        className: O.gameArtHero,
        children: [(0, s.jsx)("div", {
          className: O.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(V[X], '")')
          }
        }), (0, s.jsx)("div", {
          className: O.gameHeroGradient
        })]
      }), (0, s.jsxs)("div", {
        className: i()(O.content, O.column, O.headerInfo),
        children: [(0, s.jsx)("div", {
          className: O.logoWrapper,
          children: null != J && (0, s.jsx)("img", {
            className: O.logo,
            src: J,
            alt: p.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: Q
            })
          })
        }), (0, s.jsxs)("div", {
          className: i()(O.row, O.gapSm, O.gameDetails),
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-xl/bold",
              children: Q
            }), (0, s.jsxs)("div", {
              className: i()(O.row, O.gapSm),
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: K
              }), null != $ && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, s.jsx)("img", {
                  src: $,
                  height: 16,
                  alt: p.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: Q
                  })
                })]
              })]
            })]
          }), (0, s.jsx)("div", {
            children: (0, s.jsx)(d.Button, {
              innerClassName: O.followButton,
              color: Z[S] ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
              onClick: () => {
                let e = {
                  ...Z
                };
                e[S] = !e[S], G(e), c.K.set(T, e)
              },
              children: (null == Z ? void 0 : Z[S]) ? p.Z.Messages.FORUM_UNFOLLOW_BUTTON : p.Z.Messages.FOLLOW
            })
          })]
        })]
      }), (0, s.jsx)(d.Scroller, {
        children: (0, s.jsxs)("div", {
          className: i()(O.content, O.mainContent),
          children: [(0, s.jsxs)("div", {
            className: O.column,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: p.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, s.jsxs)("div", {
              className: O.section,
              children: [0 === z.length && (0, s.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: O.emptyFriendsWhoPlay,
                children: p.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(O.column, O.gapNone),
                children: null == z ? void 0 : z.map(e => (0, s.jsx)(N.Z, {
                  entry: e,
                  channel: f,
                  onClose: P
                }, e.id))
              })]
            }), V.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(d.Heading, {
                variant: "heading-md/bold",
                children: p.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, s.jsx)(d.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(O.row, O.imageScroller),
                orientation: "horizontal",
                children: q.map((e, l) => (0, s.jsx)(d.Clickable, {
                  className: O.clickable,
                  onClick: () => {
                    (0, d.openModalLazy)(async () => {
                      let {
                        default: e
                      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("99857")]).then(n.bind(n, 895023));
                      return n => {
                        let {
                          ...a
                        } = n;
                        return (0, s.jsx)(e, {
                          className: O.mediaModal,
                          ...a,
                          items: q,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, s.jsx)("img", {
                    src: e.src,
                    className: O.gameArtwork,
                    alt: p.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: Q
                    })
                  })
                }, e.src))
              })]
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-md/bold",
              children: p.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, s.jsx)("div", {
              className: O.row,
              style: {},
              children: H.filter(e => null != g.Z.getGame(e)).slice(0, 5).map(e => (0, s.jsx)(_, {
                applicationId: e,
                channel: f,
                onClose: P
              }, e))
            })]
          }), (0, s.jsxs)("div", {
            className: i()(O.sidebar, O.column, O.padded),
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-md/bold",
              children: p.Z.Messages.ABOUT
            }), null != ee && (0, s.jsxs)("div", {
              className: i()(O.column, O.gapSm),
              children: [(0, s.jsx)(d.Text, {
                ref: y,
                lineClamp: D ? 8 : void 0,
                variant: "text-sm/normal",
                children: ee
              }), (B || !D) && (0, s.jsx)(d.Clickable, {
                className: O.clickable,
                onClick: () => F(!D),
                children: (0, s.jsx)(d.Text, {
                  variant: "text-sm/semibold",
                  children: D ? p.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : p.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, s.jsx)(A.Z, {
              websites: el
            }), (en.length > 0 || es.length > 0) && (0, s.jsxs)("div", {
              className: i()(O.column, O.gapSm),
              children: [en.length > 0 && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-xs/semibold",
                  children: p.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, s.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: en.join(", ")
                })]
              }), (0, s.jsx)("br", {}), es.length > 0 && (0, s.jsxs)("div", {
                className: i()(O.column, O.gapSm),
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-xs/semibold",
                  children: p.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, s.jsx)(C, {
                  platforms: es
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = f
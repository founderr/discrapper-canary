n.r(l), n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  t = n(120356),
  i = n.n(t),
  r = n(512722),
  o = n.n(r),
  c = n(758713),
  d = n(442837),
  u = n(433517),
  m = n(481060),
  h = n(224706),
  x = n(812206),
  g = n(168551),
  v = n(26033),
  I = n(669764),
  E = n(962250),
  j = n(768581),
  p = n(814225),
  N = n(567409),
  A = n(774073),
  O = n(383895),
  M = n(183391),
  T = n(689938),
  f = n(997844);
let _ = "GameProfileModal",
  S = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let n = {};
    return e.forEach(e => {
      if (!(0, v.d)(e)) return;
      let s = e.extra.application_id;
      s !== l && (null == n[s] && (n[s] = 0), n[s] += 1)
    }), Object.keys(n).sort((e, l) => n[l] - n[e])
  },
  C = e => {
    var l;
    let {
      applicationId: n,
      channel: a,
      onClose: t
    } = e, [i, r] = (0, d.Wu)([I.Z, x.Z], () => [I.Z.getGame(n), x.Z.getApplication(n)]);
    if (null == i) return null;
    let o = i.coverImageUrl;
    return (0, s.jsx)(m.Clickable, {
      className: f.clickable,
      onClick: async () => {
        (0, m.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(R, {
          applicationId: n,
          channel: a,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), t()
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
  P = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
  L = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(c.z.DESKTOP) && (n.includes(c.z.MACOS) || n.includes(c.z.LINUX)) && n.push(c.z.DESKTOP);
    let a = (n = n.filter(e => P.includes(e))).map(e => {
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
      children: a
    })
  },
  R = e => {
    var l, t, r;
    let {
      applicationId: c,
      channel: P,
      transitionState: R,
      onClose: b
    } = e, {
      clientThemesClassName: w
    } = (0, g.ZP)(), {
      width: G,
      height: Z
    } = (0, E.b)(), [D, F] = a.useState(null !== (l = u.K.get(_)) && void 0 !== l ? l : {}), [B, k] = a.useState(!0), [y, z] = a.useState(!1), W = a.useRef(null);
    a.useEffect(() => {
      let e = W.current;
      null != e && z(e.scrollHeight - e.clientHeight > 1)
    }, [W, G, Z]);
    let {
      entries: H
    } = (0, N.Z)(), U = a.useMemo(() => {
      var e;
      return null !== (e = null == H ? void 0 : H.filter(e => (0, v.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [H, c]), Y = a.useMemo(() => S(H, c), [H, c]);
    a.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...Y])
    }, [c, Y]);
    let K = x.Z.getApplication(c),
      X = (0, d.e7)([I.Z], () => I.Z.getGame(c)),
      q = a.useMemo(() => null == X ? void 0 : X.genres.map(p.P3).join(", "), [X]),
      Q = a.useMemo(() => {
        if (null == X) return 0;
        let {
          artwork: e,
          screenshots: l
        } = X;
        if (e.length > 0) {
          let l = Math.floor(Math.random() * (e.length - 1));
          return e[l]
        }
        if (l.length > 0) {
          let e = Math.floor(Math.random() * (l.length - 1));
          return l[e]
        }
        return ""
      }, [X]),
      $ = a.useMemo(() => {
        var e, l;
        let n = (null !== (e = null == X ? void 0 : X.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }));
        return [...n, ...(null !== (l = null == X ? void 0 : X.screenshots) && void 0 !== l ? l : []).map(e => ({
          src: e
        }))]
      }, [null == X ? void 0 : X.artwork, null == X ? void 0 : X.screenshots]),
      J = (0, A.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()(J, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == X) return null;
    let V = null !== (t = X.name) && void 0 !== t ? t : null == K ? void 0 : K.name,
      ee = null == K ? void 0 : K.getIconURL(160, j.$k ? "webp" : "png"),
      el = null !== (r = X.coverImageUrl) && void 0 !== r ? r : ee,
      {
        summary: en,
        websites: es,
        publishers: ea,
        platforms: et
      } = X;
    return (0, s.jsxs)(m.ModalRoot, {
      transitionState: R,
      size: m.ModalSize.DYNAMIC,
      className: i()(w, f.gameProfileModal),
      children: [(0, s.jsxs)("div", {
        className: f.gameArtHero,
        children: [(0, s.jsx)("div", {
          className: f.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(Q, '")')
          }
        }), (0, s.jsx)("div", {
          className: f.gameHeroGradient
        })]
      }), (0, s.jsxs)("div", {
        className: i()(f.content, f.column, f.headerInfo),
        children: [(0, s.jsx)("div", {
          className: f.logoWrapper,
          children: null != el && (0, s.jsx)("img", {
            className: f.logo,
            src: el,
            alt: T.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: V
            })
          })
        }), (0, s.jsxs)("div", {
          className: i()(f.row, f.gapSm, f.gameDetails),
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-xl/bold",
              children: V
            }), (0, s.jsxs)("div", {
              className: i()(f.row, f.gapSm),
              children: [(0, s.jsx)(m.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: q
              }), null != ee && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, s.jsx)("img", {
                  src: ee,
                  height: 16,
                  alt: T.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: V
                  })
                })]
              })]
            })]
          }), (0, s.jsx)("div", {
            children: (0, s.jsx)(m.Button, {
              innerClassName: f.followButton,
              color: D[c] ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
              onClick: () => {
                let e = {
                  ...D
                };
                e[c] = !e[c], F(e), u.K.set(_, e)
              },
              children: (null == D ? void 0 : D[c]) ? T.Z.Messages.FORUM_UNFOLLOW_BUTTON : T.Z.Messages.FOLLOW
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
              children: [0 === U.length && (0, s.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: f.emptyFriendsWhoPlay,
                children: T.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(f.column, f.gapNone),
                children: null == U ? void 0 : U.map(e => (0, s.jsx)(O.Z, {
                  entry: e,
                  channel: P,
                  onClose: b
                }, e.id))
              })]
            }), $.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: T.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, s.jsx)(m.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(f.row, f.imageScroller),
                orientation: "horizontal",
                children: $.map((e, l) => (0, s.jsx)(m.Clickable, {
                  className: f.clickable,
                  onClick: () => {
                    (0, m.openModalLazy)(async () => {
                      let {
                        default: e
                      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("99857")]).then(n.bind(n, 895023));
                      return n => {
                        let {
                          ...a
                        } = n;
                        return (0, s.jsx)(e, {
                          className: f.mediaModal,
                          ...a,
                          items: $,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, s.jsx)("img", {
                    src: e.src,
                    className: f.gameArtwork,
                    alt: T.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: V
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
              children: Y.filter(A.z6).slice(0, 5).map(e => (0, s.jsx)(C, {
                applicationId: e,
                channel: P,
                onClose: b
              }, e))
            })]
          }), (0, s.jsxs)("div", {
            className: i()(f.sidebar, f.column, f.padded),
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: T.Z.Messages.ABOUT
            }), null != en && (0, s.jsxs)("div", {
              className: i()(f.column, f.gapSm),
              children: [(0, s.jsx)(m.Text, {
                ref: W,
                lineClamp: B ? 8 : void 0,
                variant: "text-sm/normal",
                children: en
              }), (y || !B) && (0, s.jsx)(m.Clickable, {
                className: f.clickable,
                onClick: () => k(!B),
                children: (0, s.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: B ? T.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : T.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, s.jsx)(M.Z, {
              websites: es
            }), (ea.length > 0 || et.length > 0) && (0, s.jsxs)("div", {
              className: i()(f.column, f.gapSm),
              children: [ea.length > 0 && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: T.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, s.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: ea.join(", ")
                })]
              }), (0, s.jsx)("br", {}), et.length > 0 && (0, s.jsxs)("div", {
                className: i()(f.column, f.gapSm),
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: T.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, s.jsx)(L, {
                  platforms: et
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = R
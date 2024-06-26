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
  p = a(768581),
  A = a(814225),
  M = a(567409),
  N = a(774073),
  j = a(383895),
  O = a(183391),
  T = a(689938),
  f = a(997844);
let L = "GameProfileModal",
  P = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let a = {};
    return e.forEach(e => {
      if (!(0, I.d)(e)) return;
      let n = e.extra.application_id;
      n !== l && (null == a[n] && (a[n] = 0), a[n] += 1)
    }), Object.keys(a).sort((e, l) => a[l] - a[e])
  },
  R = e => {
    var l;
    let {
      applicationId: a,
      channel: s,
      onClose: t
    } = e, [i, r] = (0, d.Wu)([v.Z, x.Z], () => [v.Z.getGame(a), x.Z.getApplication(a)]);
    if (null == i) return null;
    let o = i.coverImageUrl;
    return (0, n.jsx)(m.Clickable, {
      className: f.clickable,
      onClick: async () => {
        (0, m.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(Z, {
          applicationId: a,
          channel: s,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), t()
      },
      children: (0, n.jsx)("img", {
        src: o,
        className: f.similarGames,
        alt: T.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  G = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
  S = e => {
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
      className: f.row,
      children: s
    })
  },
  Z = e => {
    var l, t, r;
    let {
      applicationId: c,
      channel: G,
      transitionState: Z,
      onClose: w
    } = e, {
      clientThemesClassName: C
    } = (0, g.ZP)(), {
      width: D,
      height: b
    } = (0, _.b)(), [F, y] = s.useState(null !== (l = u.K.get(L)) && void 0 !== l ? l : {}), [k, B] = s.useState(!0), [U, W] = s.useState(!1), H = s.useRef(null);
    s.useEffect(() => {
      let e = H.current;
      null != e && W(e.scrollHeight - e.clientHeight > 1)
    }, [H, D, b]), s.useEffect(() => {
      (0, E.J)()
    }, []);
    let {
      entries: z
    } = (0, M.Z)(), Y = s.useMemo(() => {
      var e;
      return null !== (e = null == z ? void 0 : z.filter(e => (0, I.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [z, c]), K = s.useMemo(() => P(z, c), [z, c]);
    s.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...K])
    }, [c, K]);
    let X = x.Z.getApplication(c),
      V = (0, d.e7)([v.Z], () => v.Z.getGame(c)),
      q = s.useMemo(() => null == V ? void 0 : V.genres.map(A.P3).join(", "), [V]),
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
      $ = (0, N.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()($, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == V) return null;
    let ee = null !== (t = V.name) && void 0 !== t ? t : null == X ? void 0 : X.name,
      el = null == X ? void 0 : X.getIconURL(160, p.$k ? "webp" : "png"),
      ea = null !== (r = V.coverImageUrl) && void 0 !== r ? r : el,
      {
        summary: en,
        websites: es,
        publishers: et,
        platforms: ei
      } = V,
      er = F[c];
    return (0, n.jsxs)(m.ModalRoot, {
      transitionState: Z,
      size: m.ModalSize.DYNAMIC,
      className: i()(C, f.gameProfileModal),
      children: [(0, n.jsxs)("div", {
        className: f.gameArtHero,
        children: [(0, n.jsx)("div", {
          className: f.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(J, '")')
          }
        }), (0, n.jsx)("div", {
          className: f.gameHeroGradient
        })]
      }), (0, n.jsxs)("div", {
        className: i()(f.content, f.column, f.headerInfo),
        children: [(0, n.jsx)("div", {
          className: f.logoWrapper,
          children: null != ea && (0, n.jsx)("img", {
            className: f.logo,
            src: ea,
            alt: T.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: ee
            })
          })
        }), (0, n.jsxs)("div", {
          className: i()(f.row, f.gapSm, f.gameDetails),
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-xl/bold",
              children: ee
            }), (0, n.jsxs)("div", {
              className: i()(f.row, f.gapSm),
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
                  alt: T.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: ee
                  })
                })]
              })]
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(m.Tooltip, {
              text: er ? T.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : T.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
              children: e => (0, n.jsxs)(m.Button, {
                ...e,
                innerClassName: f.followButton,
                color: er ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                onClick: () => {
                  let e = {
                    ...F
                  };
                  e[c] = !e[c], y(e), u.K.set(L, e)
                },
                children: [er ? (0, n.jsx)(m.BellSlashIcon, {
                  color: "white"
                }) : (0, n.jsx)(m.BellIcon, {
                  color: "white"
                }), er ? T.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : T.Z.Messages.FOLLOW]
              })
            })
          })]
        })]
      }), (0, n.jsx)(m.Scroller, {
        children: (0, n.jsxs)("div", {
          className: i()(f.content, f.mainContent),
          children: [(0, n.jsxs)("div", {
            className: f.column,
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: T.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, n.jsxs)("div", {
              className: f.section,
              children: [0 === Y.length && (0, n.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: f.emptyFriendsWhoPlay,
                children: T.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, n.jsx)("div", {
                className: i()(f.column, f.gapNone),
                children: null == Y ? void 0 : Y.map(e => (0, n.jsx)(j.Z, {
                  entry: e,
                  channel: G,
                  onClose: w
                }, e.id))
              })]
            }), Q.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: T.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, n.jsx)(m.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(f.row, f.imageScroller),
                orientation: "horizontal",
                children: Q.map((e, l) => (0, n.jsx)(m.Clickable, {
                  className: f.clickable,
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
                          className: f.mediaModal,
                          ...s,
                          items: Q,
                          startingIndex: l
                        })
                      }
                    })
                  },
                  children: (0, n.jsx)("img", {
                    src: e.src,
                    className: f.gameArtwork,
                    alt: T.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: ee
                    })
                  })
                }, e.src))
              })]
            }), (0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: T.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, n.jsx)("div", {
              className: f.row,
              style: {},
              children: K.filter(N.z6).slice(0, 5).map(e => (0, n.jsx)(R, {
                applicationId: e,
                channel: G,
                onClose: w
              }, e))
            })]
          }), (0, n.jsxs)("div", {
            className: i()(f.sidebar, f.column, f.padded),
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: T.Z.Messages.ABOUT
            }), null != en && (0, n.jsxs)("div", {
              className: i()(f.column, f.gapSm),
              children: [(0, n.jsx)(m.Text, {
                ref: H,
                lineClamp: k ? 8 : void 0,
                variant: "text-sm/normal",
                children: en
              }), (U || !k) && (0, n.jsx)(m.Clickable, {
                className: f.clickable,
                onClick: () => B(!k),
                children: (0, n.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: k ? T.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : T.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, n.jsx)(O.Z, {
              websites: es
            }), (et.length > 0 || ei.length > 0) && (0, n.jsxs)("div", {
              className: i()(f.column),
              children: [et.length > 0 && (0, n.jsxs)("div", {
                className: i()(f.column, f.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: T.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: et.join(", ")
                })]
              }), ei.length > 0 && (0, n.jsxs)("div", {
                className: i()(f.column, f.gapSm),
                children: [(0, n.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: T.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, n.jsx)(S, {
                  platforms: ei
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = Z
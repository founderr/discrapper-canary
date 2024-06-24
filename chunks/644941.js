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
  E = n(485267),
  I = n(26033),
  v = n(669764),
  p = n(962250),
  j = n(768581),
  N = n(814225),
  A = n(567409),
  M = n(774073),
  O = n(383895),
  T = n(183391),
  _ = n(689938),
  f = n(997844);
let S = "GameProfileModal",
  C = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let n = {};
    return e.forEach(e => {
      if (!(0, I.d)(e)) return;
      let s = e.extra.application_id;
      s !== l && (null == n[s] && (n[s] = 0), n[s] += 1)
    }), Object.keys(n).sort((e, l) => n[l] - n[e])
  },
  P = e => {
    var l;
    let {
      applicationId: n,
      channel: a,
      onClose: t
    } = e, [i, r] = (0, d.Wu)([v.Z, x.Z], () => [v.Z.getGame(n), x.Z.getApplication(n)]);
    if (null == i) return null;
    let o = i.coverImageUrl;
    return (0, s.jsx)(m.Clickable, {
      className: f.clickable,
      onClick: async () => {
        (0, m.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(b, {
          applicationId: n,
          channel: a,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), t()
      },
      children: (0, s.jsx)("img", {
        src: o,
        className: f.similarGames,
        alt: _.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  L = [c.z.DESKTOP, c.z.XBOX, c.z.PLAYSTATION, c.z.NINTENDO],
  R = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(c.z.DESKTOP) && (n.includes(c.z.MACOS) || n.includes(c.z.LINUX)) && n.push(c.z.DESKTOP);
    let a = (n = n.filter(e => L.includes(e))).map(e => {
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
  b = e => {
    var l, t, r;
    let {
      applicationId: c,
      channel: L,
      transitionState: b,
      onClose: w
    } = e, {
      clientThemesClassName: G
    } = (0, g.ZP)(), {
      width: Z,
      height: D
    } = (0, p.b)(), [F, B] = a.useState(null !== (l = u.K.get(S)) && void 0 !== l ? l : {}), [k, y] = a.useState(!0), [z, W] = a.useState(!1), H = a.useRef(null);
    a.useEffect(() => {
      let e = H.current;
      null != e && W(e.scrollHeight - e.clientHeight > 1)
    }, [H, Z, D]), a.useEffect(() => {
      (0, E.J)()
    }, []);
    let {
      entries: Y
    } = (0, A.Z)(), U = a.useMemo(() => {
      var e;
      return null !== (e = null == Y ? void 0 : Y.filter(e => (0, I.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : []
    }, [Y, c]), K = a.useMemo(() => C(Y, c), [Y, c]);
    a.useEffect(() => {
      h.Z.getDetectableGamesSupplemental([c, ...K])
    }, [c, K]);
    let X = x.Z.getApplication(c),
      q = (0, d.e7)([v.Z], () => v.Z.getGame(c)),
      J = a.useMemo(() => null == q ? void 0 : q.genres.map(N.P3).join(", "), [q]),
      Q = a.useMemo(() => {
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
      $ = a.useMemo(() => {
        var e, l;
        let n = (null !== (e = null == q ? void 0 : q.artwork) && void 0 !== e ? e : []).map(e => ({
          src: e
        }));
        return [...n, ...(null !== (l = null == q ? void 0 : q.screenshots) && void 0 !== l ? l : []).map(e => ({
          src: e
        }))]
      }, [null == q ? void 0 : q.artwork, null == q ? void 0 : q.screenshots]),
      V = (0, M.ZP)({
        location: "GameProfileModal",
        applicationId: c
      });
    if (o()(V, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`"), null == q) return null;
    let ee = null !== (t = q.name) && void 0 !== t ? t : null == X ? void 0 : X.name,
      el = null == X ? void 0 : X.getIconURL(160, j.$k ? "webp" : "png"),
      en = null !== (r = q.coverImageUrl) && void 0 !== r ? r : el,
      {
        summary: es,
        websites: ea,
        publishers: et,
        platforms: ei
      } = q;
    return (0, s.jsxs)(m.ModalRoot, {
      transitionState: b,
      size: m.ModalSize.DYNAMIC,
      className: i()(G, f.gameProfileModal),
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
          children: null != en && (0, s.jsx)("img", {
            className: f.logo,
            src: en,
            alt: _.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
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
                  alt: _.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: ee
                  })
                })]
              })]
            })]
          }), (0, s.jsx)("div", {
            children: (0, s.jsx)(m.Button, {
              innerClassName: f.followButton,
              color: F[c] ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
              onClick: () => {
                let e = {
                  ...F
                };
                e[c] = !e[c], B(e), u.K.set(S, e)
              },
              children: (null == F ? void 0 : F[c]) ? _.Z.Messages.FORUM_UNFOLLOW_BUTTON : _.Z.Messages.FOLLOW
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
              children: _.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, s.jsxs)("div", {
              className: f.section,
              children: [0 === U.length && (0, s.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: f.emptyFriendsWhoPlay,
                children: _.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(f.column, f.gapNone),
                children: null == U ? void 0 : U.map(e => (0, s.jsx)(O.Z, {
                  entry: e,
                  channel: L,
                  onClose: w
                }, e.id))
              })]
            }), $.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(m.Heading, {
                variant: "heading-md/bold",
                children: _.Z.Messages.GAME_PROFILE_SCREENSHOTS
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
                    alt: _.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                      game: ee
                    })
                  })
                }, e.src))
              })]
            }), (0, s.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: _.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, s.jsx)("div", {
              className: f.row,
              style: {},
              children: K.filter(M.z6).slice(0, 5).map(e => (0, s.jsx)(P, {
                applicationId: e,
                channel: L,
                onClose: w
              }, e))
            })]
          }), (0, s.jsxs)("div", {
            className: i()(f.sidebar, f.column, f.padded),
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: _.Z.Messages.ABOUT
            }), null != es && (0, s.jsxs)("div", {
              className: i()(f.column, f.gapSm),
              children: [(0, s.jsx)(m.Text, {
                ref: H,
                lineClamp: k ? 8 : void 0,
                variant: "text-sm/normal",
                children: es
              }), (z || !k) && (0, s.jsx)(m.Clickable, {
                className: f.clickable,
                onClick: () => y(!k),
                children: (0, s.jsx)(m.Text, {
                  variant: "text-sm/semibold",
                  children: k ? _.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : _.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, s.jsx)(T.Z, {
              websites: ea
            }), (et.length > 0 || ei.length > 0) && (0, s.jsxs)("div", {
              className: i()(f.column, f.gapSm),
              children: [et.length > 0 && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: _.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, s.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  children: et.join(", ")
                })]
              }), (0, s.jsx)("br", {}), ei.length > 0 && (0, s.jsxs)("div", {
                className: i()(f.column, f.gapSm),
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-xs/semibold",
                  children: _.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, s.jsx)(R, {
                  platforms: ei
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = b
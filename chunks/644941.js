n.r(l), n(47120), n(653041);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(758713),
  o = n(442837),
  c = n(481060),
  d = n(224706),
  u = n(812206),
  m = n(168551),
  x = n(26033),
  h = n(669764),
  g = n(962250),
  I = n(768581),
  E = n(814225),
  v = n(567409),
  j = n(383895),
  A = n(183391),
  O = n(689938),
  p = n(997844);
let T = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let n = {};
    return e.forEach(e => {
      if (!(0, x.d)(e)) return;
      let s = e.extra.application_id;
      s !== l && (null == n[s] && (n[s] = 0), n[s] += 1)
    }), Object.keys(n).sort((e, l) => n[l] - n[e])
  },
  N = e => {
    var l;
    let {
      applicationId: n,
      channel: t,
      onClose: a
    } = e, [i, r] = (0, o.Wu)([h.Z, u.Z], () => [h.Z.getGame(n), u.Z.getApplication(n)]);
    if (null == i) return null;
    let d = i.coverImageUrl;
    return (0, s.jsx)(c.Clickable, {
      className: p.clickable,
      onClick: async () => {
        (0, c.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(S, {
          applicationId: n,
          channel: t,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a()
      },
      children: (0, s.jsx)("img", {
        src: d,
        className: p.similarGames,
        alt: O.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  _ = [r.z.DESKTOP, r.z.XBOX, r.z.PLAYSTATION, r.z.NINTENDO],
  M = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(r.z.DESKTOP) && (n.includes(r.z.MACOS) || n.includes(r.z.LINUX)) && n.push(r.z.DESKTOP);
    let t = (n = n.filter(e => _.includes(e))).map(e => {
      switch (e) {
        case r.z.DESKTOP:
          return (0, s.jsx)(c.ScreenIcon, {}, e);
        case r.z.XBOX:
          return (0, s.jsx)(c.XboxIcon, {}, e);
        case r.z.PLAYSTATION:
          return (0, s.jsx)(c.PlaystationIcon, {}, e);
        case r.z.NINTENDO:
          return (0, s.jsx)(c.NintendoSwitchNeutralIcon, {}, e);
        default:
          return null
      }
    });
    return (0, s.jsx)("div", {
      className: p.row,
      children: t
    })
  },
  S = e => {
    var l, n, a;
    let {
      applicationId: r,
      channel: _,
      transitionState: S,
      onClose: C
    } = e, {
      clientThemesClassName: f
    } = (0, m.ZP)(), {
      width: R,
      height: L
    } = (0, g.b)(), [P, w] = t.useState(!0), [Z, b] = t.useState(!1), D = t.useRef(null);
    t.useEffect(() => {
      let e = D.current;
      null != e && b(e.scrollHeight - e.clientHeight > 1)
    }, [D, R, L]);
    let {
      entries: G
    } = (0, v.Z)(), F = t.useMemo(() => {
      var e;
      return null !== (e = null == G ? void 0 : G.filter(e => (0, x.d)(e) && e.extra.application_id === r)) && void 0 !== e ? e : []
    }, [G, r]), B = t.useMemo(() => T(G, r), [G, r]);
    t.useEffect(() => {
      d.Z.getDetectableGamesSupplemental([r, ...B])
    }, [r, B]);
    let y = u.Z.getApplication(r),
      H = (0, o.e7)([h.Z], () => h.Z.getGame(r)),
      W = t.useMemo(() => null == H ? void 0 : H.genres.map(E.P3).join(", "), [H]);
    if (null == H) return null;
    let k = null !== (n = H.name) && void 0 !== n ? n : null == y ? void 0 : y.name,
      z = null == y ? void 0 : y.getIconURL(160, I.$k ? "webp" : "png"),
      Y = null !== (a = H.coverImageUrl) && void 0 !== a ? a : z,
      {
        artwork: U = [],
        summary: K,
        websites: X,
        publishers: q,
        platforms: Q
      } = H;
    return (0, s.jsxs)(c.ModalRoot, {
      transitionState: S,
      size: c.ModalSize.DYNAMIC,
      className: i()(f, p.gameProfileModal),
      children: [(0, s.jsxs)("div", {
        className: p.gameArtHero,
        children: [(0, s.jsx)("div", {
          className: p.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(null == H ? void 0 : null === (l = H.artwork) || void 0 === l ? void 0 : l[0], '")')
          }
        }), (0, s.jsx)("div", {
          className: p.gameHeroGradient
        })]
      }), (0, s.jsxs)("div", {
        className: i()(p.content, p.column, p.headerInfo),
        children: [(0, s.jsx)("div", {
          className: p.logoWrapper,
          children: null != Y && (0, s.jsx)("img", {
            className: p.logo,
            src: Y,
            alt: O.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: k
            })
          })
        }), (0, s.jsxs)("div", {
          className: i()(p.row, p.gapSm, p.gameDetails),
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(c.Heading, {
              variant: "heading-xl/bold",
              children: k
            }), (0, s.jsxs)("div", {
              className: i()(p.row, p.gapSm),
              children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: W
              }), null != z && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, s.jsx)("img", {
                  src: z,
                  height: 16,
                  alt: O.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: k
                  })
                })]
              })]
            })]
          }), (0, s.jsx)("div", {
            children: (0, s.jsxs)(c.Button, {
              innerClassName: p.followButton,
              color: c.Button.Colors.PRIMARY,
              children: [(0, s.jsx)(c.BellIcon, {
                color: c.tokens.colors.WHITE
              }), O.Z.Messages.FOLLOW]
            })
          })]
        })]
      }), (0, s.jsx)(c.Scroller, {
        children: (0, s.jsxs)("div", {
          className: i()(p.content, p.mainContent),
          children: [(0, s.jsxs)("div", {
            className: p.column,
            children: [(0, s.jsx)(c.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: O.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, s.jsxs)("div", {
              className: p.section,
              children: [0 === F.length && (0, s.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: p.emptyFriendsWhoPlay,
                children: O.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(p.column, p.gapNone),
                children: null == F ? void 0 : F.map((e, l) => (0, s.jsx)(j.Z, {
                  style: {
                    animationDelay: "".concat(.5 + .15 * l, "s")
                  },
                  entry: e,
                  channel: _,
                  onClose: C
                }, e.id))
              })]
            }), U.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(c.Heading, {
                variant: "heading-md/bold",
                children: O.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, s.jsx)(c.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(p.row, p.imageScroller),
                orientation: "horizontal",
                children: U.map(e => (0, s.jsx)("img", {
                  src: e,
                  className: p.gameArtwork,
                  alt: O.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                    game: k
                  })
                }, e))
              })]
            }), (0, s.jsx)(c.Heading, {
              variant: "heading-md/bold",
              children: O.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, s.jsx)("div", {
              className: p.row,
              style: {},
              children: B.filter(e => null != h.Z.getGame(e)).slice(0, 5).map(e => (0, s.jsx)(N, {
                applicationId: e,
                channel: _,
                onClose: C
              }, e))
            })]
          }), (0, s.jsxs)("div", {
            className: p.column,
            children: [(0, s.jsx)(c.Heading, {
              variant: "heading-md/bold",
              children: O.Z.Messages.ABOUT
            }), null != K && (0, s.jsxs)("div", {
              className: i()(p.column, p.gapSm),
              children: [(0, s.jsx)(c.Text, {
                ref: D,
                lineClamp: P ? 4 : void 0,
                variant: "text-sm/normal",
                children: K
              }), (Z || !P) && (0, s.jsx)(c.Clickable, {
                className: p.clickable,
                onClick: () => w(!P),
                children: (0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: P ? O.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : O.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, s.jsx)(A.Z, {
              websites: X
            }), q.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(c.Text, {
                variant: "text-xs/semibold",
                children: O.Z.Messages.GAME_PROFILE_PUBLISHER
              }), (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: q.join(", ")
              })]
            }), Q.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(c.Text, {
                variant: "text-xs/semibold",
                children: O.Z.Messages.GAME_PROFILE_PLATFORMS
              }), (0, s.jsx)(M, {
                platforms: Q
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = S
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
  h = n(26033),
  x = n(669764),
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
      if (!(0, h.d)(e)) return;
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
    } = e, [i, r] = (0, o.Wu)([x.Z, u.Z], () => [x.Z.getGame(n), u.Z.getApplication(n)]);
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
  M = [r.z.DESKTOP, r.z.XBOX, r.z.PLAYSTATION, r.z.NINTENDO],
  _ = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(r.z.DESKTOP) && (n.includes(r.z.MACOS) || n.includes(r.z.LINUX)) && n.push(r.z.DESKTOP);
    let t = (n = n.filter(e => M.includes(e))).map(e => {
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
    var l, n;
    let {
      applicationId: a,
      channel: r,
      transitionState: M,
      onClose: S
    } = e, {
      clientThemesClassName: f
    } = (0, m.ZP)(), {
      width: C,
      height: R
    } = (0, g.b)(), [L, P] = t.useState(!0), [w, Z] = t.useState(!1), b = t.useRef(null);
    t.useEffect(() => {
      let e = b.current;
      null != e && Z(e.scrollHeight - e.clientHeight > 1)
    }, [b, C, R]);
    let {
      entries: D
    } = (0, v.Z)(), G = t.useMemo(() => {
      var e;
      return null !== (e = null == D ? void 0 : D.filter(e => (0, h.d)(e) && e.extra.application_id === a)) && void 0 !== e ? e : []
    }, [D, a]), F = t.useMemo(() => T(D, a), [D, a]);
    t.useEffect(() => {
      d.Z.getDetectableGamesSupplemental([a, ...F])
    }, [a, F]);
    let B = u.Z.getApplication(a),
      y = (0, o.e7)([x.Z], () => x.Z.getGame(a)),
      H = t.useMemo(() => null == y ? void 0 : y.genres.map(E.P3).join(", "), [y]),
      W = t.useMemo(() => {
        if (null == y) return 0;
        let {
          artwork: e
        } = y;
        return Math.floor(Math.random() * (e.length - 1))
      }, [y]);
    if (null == y) return null;
    let k = null !== (l = y.name) && void 0 !== l ? l : null == B ? void 0 : B.name,
      z = null == B ? void 0 : B.getIconURL(160, I.$k ? "webp" : "png"),
      Y = null !== (n = y.coverImageUrl) && void 0 !== n ? n : z,
      {
        artwork: U = [],
        summary: K,
        websites: X,
        publishers: q,
        platforms: Q
      } = y;
    return (0, s.jsxs)(c.ModalRoot, {
      transitionState: M,
      size: c.ModalSize.DYNAMIC,
      className: i()(f, p.gameProfileModal),
      children: [(0, s.jsxs)("div", {
        className: p.gameArtHero,
        children: [(0, s.jsx)("div", {
          className: p.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(U[W], '")')
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
                children: H
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
              children: [0 === G.length && (0, s.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: p.emptyFriendsWhoPlay,
                children: O.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(p.column, p.gapNone),
                children: null == G ? void 0 : G.map((e, l) => (0, s.jsx)(j.Z, {
                  style: {
                    animationDelay: "".concat(.5 + .15 * l, "s")
                  },
                  entry: e,
                  channel: r,
                  onClose: S
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
              children: F.filter(e => null != x.Z.getGame(e)).slice(0, 5).map(e => (0, s.jsx)(N, {
                applicationId: e,
                channel: r,
                onClose: S
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
                ref: b,
                lineClamp: L ? 4 : void 0,
                variant: "text-sm/normal",
                children: K
              }), (w || !L) && (0, s.jsx)(c.Clickable, {
                className: p.clickable,
                onClick: () => P(!L),
                children: (0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: L ? O.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : O.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
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
              }), (0, s.jsx)(_, {
                platforms: Q
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = S
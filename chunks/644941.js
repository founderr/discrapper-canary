s.r(l), s(47120), s(653041);
var n = s(735250),
  a = s(470079),
  t = s(120356),
  i = s.n(t),
  r = s(758713),
  o = s(442837),
  c = s(481060),
  d = s(224706),
  u = s(812206),
  m = s(168551),
  x = s(26033),
  I = s(669764),
  h = s(768581),
  g = s(814225),
  E = s(567409),
  j = s(383895),
  v = s(183391),
  A = s(689938),
  p = s(997844);
let O = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let s = {};
    return e.forEach(e => {
      if (!(0, x.d)(e)) return;
      let n = e.extra.application_id;
      n !== l && (null == s[n] && (s[n] = 0), s[n] += 1)
    }), Object.keys(s).sort((e, l) => s[l] - s[e])
  },
  N = e => {
    var l;
    let {
      applicationId: s,
      channel: a,
      onClose: t
    } = e, [i, r] = (0, o.Wu)([I.Z, u.Z], () => [I.Z.getGame(s), u.Z.getApplication(s)]);
    if (null == i) return null;
    let d = i.coverImageUrl;
    return (0, n.jsx)(c.Clickable, {
      className: p.clickable,
      onClick: async () => {
        (0, c.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(_, {
          applicationId: s,
          channel: a,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), t()
      },
      children: (0, n.jsx)("img", {
        src: d,
        className: p.similarGames,
        alt: A.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  T = [r.z.DESKTOP, r.z.XBOX, r.z.PLAYSTATION, r.z.NINTENDO],
  M = e => {
    let {
      platforms: l
    } = e, s = [...new Set(l)];
    !s.includes(r.z.DESKTOP) && (s.includes(r.z.MACOS) || s.includes(r.z.LINUX)) && s.push(r.z.DESKTOP);
    let a = (s = s.filter(e => T.includes(e))).map(e => {
      switch (e) {
        case r.z.DESKTOP:
          return (0, n.jsx)(c.ScreenIcon, {}, e);
        case r.z.XBOX:
          return (0, n.jsx)(c.XboxIcon, {}, e);
        case r.z.PLAYSTATION:
          return (0, n.jsx)(c.PlaystationIcon, {}, e);
        case r.z.NINTENDO:
          return (0, n.jsx)(c.NintendoSwitchNeutralIcon, {}, e);
        default:
          return null
      }
    });
    return (0, n.jsx)("div", {
      className: p.row,
      children: a
    })
  },
  _ = e => {
    var l, s, t;
    let {
      applicationId: r,
      channel: T,
      transitionState: _,
      onClose: C
    } = e, {
      clientThemesClassName: R
    } = (0, m.ZP)(), {
      entries: S
    } = (0, E.Z)(), P = a.useMemo(() => {
      var e;
      return null !== (e = null == S ? void 0 : S.filter(e => (0, x.d)(e) && e.extra.application_id === r)) && void 0 !== e ? e : []
    }, [S, r]), f = a.useMemo(() => O(S, r), [S, r]);
    a.useEffect(() => {
      d.Z.getDetectableGamesSupplemental([r, ...f])
    }, [r, f]);
    let L = u.Z.getApplication(r),
      G = (0, o.e7)([I.Z], () => I.Z.getGame(r)),
      Z = a.useMemo(() => null == G ? void 0 : G.genres.map(g.P3).join(", "), [G]);
    if (null == G) return null;
    let D = null !== (s = G.name) && void 0 !== s ? s : null == L ? void 0 : L.name,
      b = null == L ? void 0 : L.getIconURL(160, h.$k ? "webp" : "png"),
      F = null !== (t = G.coverImageUrl) && void 0 !== t ? t : b,
      {
        artwork: y = [],
        websites: w,
        publishers: B,
        platforms: k
      } = G;
    return (0, n.jsxs)(c.ModalRoot, {
      transitionState: _,
      size: c.ModalSize.DYNAMIC,
      className: i()(R, p.gameProfileModal),
      children: [(0, n.jsxs)("div", {
        className: p.gameArtHero,
        children: [(0, n.jsx)("div", {
          className: p.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(null == G ? void 0 : null === (l = G.artwork) || void 0 === l ? void 0 : l[0], '")')
          }
        }), (0, n.jsx)("div", {
          className: p.gameHeroGradient
        })]
      }), (0, n.jsxs)("div", {
        className: i()(p.content, p.column, p.headerInfo),
        children: [(0, n.jsx)("div", {
          className: p.logoWrapper,
          children: null != F && (0, n.jsx)("img", {
            className: p.logo,
            src: F,
            alt: A.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: D
            })
          })
        }), (0, n.jsxs)("div", {
          className: i()(p.row, p.gapSm, p.gameDetails),
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(c.Heading, {
              variant: "heading-xl/bold",
              children: D
            }), (0, n.jsxs)("div", {
              className: i()(p.row, p.gapSm),
              children: [(0, n.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: Z
              }), null != b && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, n.jsx)("img", {
                  src: b,
                  height: 16,
                  alt: A.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: D
                  })
                })]
              })]
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsxs)(c.Button, {
              innerClassName: p.followButton,
              color: c.Button.Colors.PRIMARY,
              children: [(0, n.jsx)(c.BellIcon, {
                color: c.tokens.colors.WHITE
              }), A.Z.Messages.FOLLOW]
            })
          })]
        })]
      }), (0, n.jsx)(c.Scroller, {
        children: (0, n.jsxs)("div", {
          className: i()(p.content, p.mainContent),
          children: [(0, n.jsxs)("div", {
            className: p.column,
            children: [(0, n.jsx)(c.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: A.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, n.jsxs)("div", {
              className: p.section,
              children: [0 === P.length && (0, n.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: p.emptyFriendsWhoPlay,
                children: A.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, n.jsx)("div", {
                className: i()(p.column, p.gapNone),
                children: null == P ? void 0 : P.map((e, l) => (0, n.jsx)(j.Z, {
                  style: {
                    animationDelay: "".concat(.5 + .15 * l, "s")
                  },
                  entry: e,
                  channel: T,
                  onClose: C
                }, e.id))
              })]
            }), y.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Heading, {
                variant: "heading-md/bold",
                children: A.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, n.jsx)(c.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(p.row, p.imageScroller),
                orientation: "horizontal",
                children: y.map(e => (0, n.jsx)("img", {
                  src: e,
                  className: p.gameArtwork,
                  alt: A.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                    game: D
                  })
                }, e))
              })]
            }), (0, n.jsx)(c.Heading, {
              variant: "heading-md/bold",
              children: A.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, n.jsx)("div", {
              className: p.row,
              style: {},
              children: f.filter(e => null != I.Z.getGame(e)).slice(0, 5).map(e => (0, n.jsx)(N, {
                applicationId: e,
                channel: T,
                onClose: C
              }, e))
            })]
          }), (0, n.jsxs)("div", {
            className: p.column,
            children: [(0, n.jsx)(c.Heading, {
              variant: "heading-md/bold",
              children: A.Z.Messages.ABOUT
            }), (null == G ? void 0 : G.summary) != null && (0, n.jsx)(c.Text, {
              lineClamp: 4,
              variant: "text-sm/semibold",
              className: p.summary,
              children: null == G ? void 0 : G.summary
            }), (0, n.jsx)(v.Z, {
              websites: w
            }), B.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Text, {
                variant: "text-xs/semibold",
                children: A.Z.Messages.GAME_PROFILE_PUBLISHER
              }), (0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: B.join(", ")
              })]
            }), k.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Text, {
                variant: "text-xs/semibold",
                children: A.Z.Messages.GAME_PROFILE_PLATFORMS
              }), (0, n.jsx)(M, {
                platforms: k
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = _
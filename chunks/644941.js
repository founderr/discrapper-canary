n.r(l), n(47120), n(653041);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(758713),
  o = n(442837),
  c = n(433517),
  d = n(481060),
  u = n(224706),
  m = n(812206),
  h = n(168551),
  x = n(26033),
  g = n(669764),
  I = n(962250),
  E = n(768581),
  v = n(814225),
  j = n(567409),
  A = n(383895),
  N = n(183391),
  p = n(689938),
  O = n(997844);
let T = "GameProfileModal",
  M = function() {
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
  _ = e => {
    var l;
    let {
      applicationId: n,
      channel: t,
      onClose: a
    } = e, [i, r] = (0, o.Wu)([g.Z, m.Z], () => [g.Z.getGame(n), m.Z.getApplication(n)]);
    if (null == i) return null;
    let c = i.coverImageUrl;
    return (0, s.jsx)(d.Clickable, {
      className: O.clickable,
      onClick: async () => {
        (0, d.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(C, {
          applicationId: n,
          channel: t,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), a()
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
  f = e => {
    let {
      platforms: l
    } = e, n = [...new Set(l)];
    !n.includes(r.z.DESKTOP) && (n.includes(r.z.MACOS) || n.includes(r.z.LINUX)) && n.push(r.z.DESKTOP);
    let t = (n = n.filter(e => S.includes(e))).map(e => {
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
      children: t
    })
  },
  C = e => {
    var l, n, a;
    let {
      applicationId: r,
      channel: S,
      transitionState: C,
      onClose: L
    } = e, {
      clientThemesClassName: R
    } = (0, h.ZP)(), {
      width: P,
      height: Z
    } = (0, I.b)(), [b, w] = t.useState(null !== (l = c.K.get(T)) && void 0 !== l ? l : {}), [G, D] = t.useState(!0), [F, B] = t.useState(!1), y = t.useRef(null);
    t.useEffect(() => {
      let e = y.current;
      null != e && B(e.scrollHeight - e.clientHeight > 1)
    }, [y, P, Z]);
    let {
      entries: W
    } = (0, j.Z)(), H = t.useMemo(() => {
      var e;
      return null !== (e = null == W ? void 0 : W.filter(e => (0, x.d)(e) && e.extra.application_id === r)) && void 0 !== e ? e : []
    }, [W, r]), k = t.useMemo(() => M(W, r), [W, r]);
    t.useEffect(() => {
      u.Z.getDetectableGamesSupplemental([r, ...k])
    }, [r, k]);
    let z = m.Z.getApplication(r),
      U = (0, o.e7)([g.Z], () => g.Z.getGame(r)),
      Y = t.useMemo(() => null == U ? void 0 : U.genres.map(v.P3).join(", "), [U]),
      K = t.useMemo(() => {
        if (null == U) return 0;
        let {
          artwork: e
        } = U;
        return Math.floor(Math.random() * (e.length - 1))
      }, [U]);
    if (null == U) return null;
    let X = null !== (n = U.name) && void 0 !== n ? n : null == z ? void 0 : z.name,
      q = null == z ? void 0 : z.getIconURL(160, E.$k ? "webp" : "png"),
      Q = null !== (a = U.coverImageUrl) && void 0 !== a ? a : q,
      {
        artwork: $ = [],
        summary: J,
        websites: V,
        publishers: ee,
        platforms: el
      } = U;
    return (0, s.jsxs)(d.ModalRoot, {
      transitionState: C,
      size: d.ModalSize.DYNAMIC,
      className: i()(R, O.gameProfileModal),
      children: [(0, s.jsxs)("div", {
        className: O.gameArtHero,
        children: [(0, s.jsx)("div", {
          className: O.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat($[K], '")')
          }
        }), (0, s.jsx)("div", {
          className: O.gameHeroGradient
        })]
      }), (0, s.jsxs)("div", {
        className: i()(O.content, O.column, O.headerInfo),
        children: [(0, s.jsx)("div", {
          className: O.logoWrapper,
          children: null != Q && (0, s.jsx)("img", {
            className: O.logo,
            src: Q,
            alt: p.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: X
            })
          })
        }), (0, s.jsxs)("div", {
          className: i()(O.row, O.gapSm, O.gameDetails),
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-xl/bold",
              children: X
            }), (0, s.jsxs)("div", {
              className: i()(O.row, O.gapSm),
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: Y
              }), null != q && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, s.jsx)("img", {
                  src: q,
                  height: 16,
                  alt: p.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: X
                  })
                })]
              })]
            })]
          }), (0, s.jsx)("div", {
            children: (0, s.jsx)(d.Button, {
              innerClassName: O.followButton,
              color: b[r] ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
              onClick: () => {
                let e = {
                  ...b
                };
                e[r] = !e[r], w(e), c.K.set(T, e)
              },
              children: (null == b ? void 0 : b[r]) ? p.Z.Messages.FORUM_UNFOLLOW_BUTTON : p.Z.Messages.FOLLOW
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
              children: [0 === H.length && (0, s.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: O.emptyFriendsWhoPlay,
                children: p.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, s.jsx)("div", {
                className: i()(O.column, O.gapNone),
                children: null == H ? void 0 : H.map(e => (0, s.jsx)(A.Z, {
                  entry: e,
                  channel: S,
                  onClose: L
                }, e.id))
              })]
            }), $.length > 0 && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(d.Heading, {
                variant: "heading-md/bold",
                children: p.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, s.jsx)(d.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(O.row, O.imageScroller),
                orientation: "horizontal",
                children: $.map(e => (0, s.jsx)("img", {
                  src: e,
                  className: O.gameArtwork,
                  alt: p.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                    game: X
                  })
                }, e))
              })]
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-md/bold",
              children: p.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, s.jsx)("div", {
              className: O.row,
              style: {},
              children: k.filter(e => null != g.Z.getGame(e)).slice(0, 5).map(e => (0, s.jsx)(_, {
                applicationId: e,
                channel: S,
                onClose: L
              }, e))
            })]
          }), (0, s.jsxs)("div", {
            className: i()(O.sidebar, O.column, O.padded),
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-md/bold",
              children: p.Z.Messages.ABOUT
            }), null != J && (0, s.jsxs)("div", {
              className: i()(O.column, O.gapSm),
              children: [(0, s.jsx)(d.Text, {
                ref: y,
                lineClamp: G ? 8 : void 0,
                variant: "text-sm/normal",
                children: J
              }), (F || !G) && (0, s.jsx)(d.Clickable, {
                className: O.clickable,
                onClick: () => D(!G),
                children: (0, s.jsx)(d.Text, {
                  variant: "text-sm/semibold",
                  children: G ? p.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : p.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                })
              })]
            }), (0, s.jsx)(N.Z, {
              websites: V
            }), (ee.length > 0 || el.length > 0) && (0, s.jsxs)("div", {
              className: i()(O.column, O.gapSm),
              children: [ee.length > 0 && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-xs/semibold",
                  children: p.Z.Messages.GAME_PROFILE_PUBLISHER
                }), (0, s.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: ee.join(", ")
                })]
              }), (0, s.jsx)("br", {}), el.length > 0 && (0, s.jsxs)("div", {
                className: i()(O.column, O.gapSm),
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-xs/semibold",
                  children: p.Z.Messages.GAME_PROFILE_PLATFORMS
                }), (0, s.jsx)(f, {
                  platforms: el
                })]
              })]
            })]
          })]
        })
      })]
    })
  };
l.default = C
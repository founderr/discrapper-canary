"use strict";
t.r(l), t("47120");
var a = t("735250"),
  s = t("470079"),
  n = t("120356"),
  i = t.n(n),
  r = t("528560"),
  o = t("442837"),
  c = t("481060"),
  d = t("224706"),
  u = t("812206"),
  m = t("168551"),
  I = t("26033"),
  g = t("669764"),
  h = t("814225"),
  x = t("567409"),
  f = t("383895"),
  v = t("183391"),
  E = t("689938"),
  A = t("884430");
let C = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let t = {};
    return e.forEach(e => {
      if (!(0, I.isGamingLikeEntry)(e)) return;
      let a = e.extra.application_id;
      a !== l && (null == t[a] && (t[a] = 0), t[a] += 1)
    }), Object.keys(t).sort((e, l) => t[l] - t[e])
  },
  p = e => {
    var l;
    let {
      applicationId: t,
      channel: s,
      onClose: n
    } = e, [i, r] = (0, o.useStateFromStoresArray)([g.default, u.default], () => [g.default.getGame(t), u.default.getApplication(t)]);
    if (null == i) return null;
    let d = i.coverImageUrl;
    return (0, a.jsx)(c.Clickable, {
      className: A.clickable,
      onClick: async () => {
        (0, c.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(j, {
          applicationId: t,
          channel: s,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), n()
      },
      children: (0, a.jsx)("img", {
        src: d,
        className: A.similarGames,
        alt: E.default.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  j = e => {
    var l, t, n;
    let {
      applicationId: j,
      channel: T,
      transitionState: N,
      onClose: M
    } = e, {
      entries: O
    } = (0, x.default)(), _ = s.useMemo(() => {
      var e;
      return null !== (e = null == O ? void 0 : O.filter(e => (0, I.isGamingLikeEntry)(e) && e.extra.application_id === j)) && void 0 !== e ? e : []
    }, [O, j]), y = s.useMemo(() => C(O, j), [O, j]);
    s.useEffect(() => {
      d.default.getDetectableGamesSupplemental([j, ...y])
    }, [j, y]);
    let R = u.default.getApplication(j),
      G = (0, o.useStateFromStores)([g.default], () => g.default.getGame(j)),
      L = null !== (l = null == G ? void 0 : G.name) && void 0 !== l ? l : null == R ? void 0 : R.name,
      S = s.useMemo(() => null == G ? void 0 : G.genres.map(h.getGenreText).join(", "), [G]),
      b = null == R ? void 0 : R.getIconURL(80, "webp"),
      D = null !== (t = null == G ? void 0 : G.coverImageUrl) && void 0 !== t ? t : b,
      w = null !== (n = null == G ? void 0 : G.artwork) && void 0 !== n ? n : [],
      F = null == G ? void 0 : G.websites,
      {
        clientThemesClassName: B
      } = (0, m.default)();
    return (0, a.jsxs)(c.ModalRoot, {
      transitionState: N,
      size: c.ModalSize.DYNAMIC,
      className: i()(B, A.gameProfileModal),
      children: [(0, a.jsx)("div", {
        style: {
          backgroundImage: 'url("'.concat(null == G ? void 0 : G.artwork[0], '")')
        },
        className: A.hero
      }), (0, a.jsxs)("div", {
        className: i()(A.content, A.row, A.headerInfo),
        children: [(0, a.jsx)("div", {
          className: A.logoWrapper,
          children: null != D && (0, a.jsx)("img", {
            className: A.logo,
            src: D,
            alt: E.default.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: L
            })
          })
        }), (0, a.jsx)("div", {
          children: (0, a.jsxs)(c.Button, {
            innerClassName: A.followButton,
            color: c.Button.Colors.PRIMARY,
            children: [(0, a.jsx)(r.BellIcon, {
              color: c.tokens.colors.WHITE
            }), E.default.Messages.FOLLOW]
          })
        })]
      }), (0, a.jsxs)("div", {
        className: i()(A.content, A.column, A.gapSm, A.gameDetails),
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: L
        }), (0, a.jsxs)("div", {
          className: i()(A.row, A.gapSm),
          children: [(0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            children: S
          }), null != b && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/semibold",
              children: " • "
            }), (0, a.jsx)("img", {
              src: b,
              height: 16,
              alt: E.default.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                game: L
              })
            })]
          })]
        })]
      }), (0, a.jsx)(c.Scroller, {
        children: (0, a.jsxs)("div", {
          className: i()(A.content, A.mainContent),
          children: [(0, a.jsxs)("div", {
            className: A.column,
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: E.default.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, a.jsxs)("div", {
              className: A.section,
              children: [0 === _.length && (0, a.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: A.emptyFriendsWhoPlay,
                children: E.default.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, a.jsx)("div", {
                className: i()(A.column, A.gapNone),
                children: null == _ ? void 0 : _.map((e, l) => (0, a.jsx)(f.default, {
                  style: {
                    animationDelay: "".concat(.5 + .15 * l, "s")
                  },
                  entry: e,
                  channel: T,
                  onClose: M
                }, e.id))
              })]
            }), w.length > 0 && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(c.Heading, {
                variant: "heading-md/bold",
                children: E.default.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, a.jsx)(c.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(A.row, A.imageScroller),
                orientation: "horizontal",
                children: w.map(e => (0, a.jsx)("img", {
                  src: e,
                  className: A.gameArtwork,
                  alt: E.default.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                    game: L
                  })
                }, e))
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: A.column,
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-md/bold",
              children: E.default.Messages.ABOUT
            }), (null == G ? void 0 : G.summary) != null && (0, a.jsx)(c.Text, {
              lineClamp: 4,
              variant: "text-sm/semibold",
              className: A.summary,
              children: null == G ? void 0 : G.summary
            }), (0, a.jsx)(v.default, {
              websites: F
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/semibold",
              children: E.default.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, a.jsx)("div", {
              className: A.row,
              style: {},
              children: y.slice(0, 4).map(e => (0, a.jsx)(p, {
                applicationId: e,
                channel: T,
                onClose: M
              }, e))
            })]
          })]
        })
      })]
    })
  };
l.default = j
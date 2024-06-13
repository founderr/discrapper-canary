"use strict";
t.r(l), t("47120");
var a = t("735250"),
  n = t("470079"),
  s = t("120356"),
  o = t.n(s),
  i = t("528560"),
  r = t("442837"),
  c = t("481060"),
  d = t("224706"),
  u = t("812206"),
  m = t("168551"),
  x = t("26033"),
  g = t("669764"),
  v = t("814225"),
  h = t("567409"),
  f = t("383895"),
  p = t("689938"),
  j = t("884430");
let E = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let t = {};
    return e.forEach(e => {
      if (!(0, x.isGamingLikeEntry)(e)) return;
      let a = e.extra.application_id;
      a !== l && (null == t[a] && (t[a] = 0), t[a] += 1)
    }), Object.keys(t).sort((e, l) => t[l] - t[e])
  },
  I = e => {
    var l;
    let {
      applicationId: t,
      channel: n,
      onClose: s
    } = e, [o, i] = (0, r.useStateFromStoresArray)([g.default, u.default], () => [g.default.getGame(t), u.default.getApplication(t)]);
    if (null == o) return null;
    let d = o.coverImageUrl;
    return (0, a.jsx)(c.Clickable, {
      className: j.clickable,
      onClick: async () => {
        (0, c.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(_, {
          applicationId: t,
          channel: n,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), s()
      },
      children: (0, a.jsx)("img", {
        src: d,
        className: j.similarGames,
        alt: p.default.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == i ? void 0 : i.name) && void 0 !== l ? l : null == o ? void 0 : o.name
        })
      })
    })
  },
  _ = e => {
    var l, t, s;
    let {
      applicationId: _,
      channel: C,
      transitionState: M,
      onClose: A
    } = e, {
      entries: N
    } = (0, h.default)(), y = n.useMemo(() => {
      var e;
      return null !== (e = null == N ? void 0 : N.filter(e => (0, x.isGamingLikeEntry)(e) && e.extra.application_id === _)) && void 0 !== e ? e : []
    }, [N, _]), S = n.useMemo(() => E(N, _), [N, _]);
    n.useEffect(() => {
      d.default.getDetectableGamesSupplemental([_, ...S])
    }, [_, S]);
    let L = u.default.getApplication(_),
      R = (0, r.useStateFromStores)([g.default], () => g.default.getGame(_)),
      G = null !== (l = null == R ? void 0 : R.name) && void 0 !== l ? l : null == L ? void 0 : L.name,
      O = n.useMemo(() => null == R ? void 0 : R.genres.map(v.getGenreText).join(", "), [R]),
      b = null == L ? void 0 : L.getIconURL(80, "webp"),
      T = null !== (t = null == R ? void 0 : R.coverImageUrl) && void 0 !== t ? t : b,
      w = null !== (s = null == R ? void 0 : R.artwork) && void 0 !== s ? s : [],
      {
        clientThemesClassName: F
      } = (0, m.default)();
    return (0, a.jsxs)(c.ModalRoot, {
      transitionState: M,
      size: c.ModalSize.DYNAMIC,
      className: o()(F, j.gameProfileModal),
      children: [(0, a.jsx)("div", {
        style: {
          backgroundImage: 'url("'.concat(null == R ? void 0 : R.artwork[0], '")')
        },
        className: j.hero
      }), (0, a.jsxs)("div", {
        className: o()(j.content, j.row, j.headerInfo),
        children: [(0, a.jsx)("div", {
          className: j.logoWrapper,
          children: null != T && (0, a.jsx)("img", {
            className: j.logo,
            src: T,
            alt: p.default.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: G
            })
          })
        }), (0, a.jsx)("div", {
          children: (0, a.jsxs)(c.Button, {
            innerClassName: j.followButton,
            color: c.Button.Colors.PRIMARY,
            children: [(0, a.jsx)(i.BellIcon, {
              color: c.tokens.colors.WHITE
            }), p.default.Messages.FOLLOW]
          })
        })]
      }), (0, a.jsxs)("div", {
        className: o()(j.content, j.column, j.gapSm, j.gameDetails),
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: G
        }), (0, a.jsxs)("div", {
          className: o()(j.row, j.gapSm),
          children: [(0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            children: O
          }), null != b && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/semibold",
              children: " • "
            }), (0, a.jsx)("img", {
              src: b,
              height: 16,
              alt: p.default.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                game: G
              })
            })]
          })]
        })]
      }), (0, a.jsx)(c.Scroller, {
        children: (0, a.jsxs)("div", {
          className: o()(j.content, j.mainContent),
          children: [(0, a.jsxs)("div", {
            className: j.column,
            children: [y.length > 0 && (0, a.jsx)("div", {
              className: j.section,
              children: (0, a.jsxs)("div", {
                className: o()(j.column, j.gapNone),
                children: [(0, a.jsx)(c.Text, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  children: p.default.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                }), null == y ? void 0 : y.map((e, l) => (0, a.jsx)(f.default, {
                  style: {
                    animationDelay: "".concat(.5 + .15 * l, "s")
                  },
                  entry: e,
                  channel: C,
                  onClose: A
                }, e.id))]
              })
            }), w.length > 0 && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                children: p.default.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, a.jsx)(c.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: o()(j.row, j.imageScroller),
                orientation: "horizontal",
                children: w.map(e => (0, a.jsx)("img", {
                  src: e,
                  className: j.gameArtwork,
                  alt: p.default.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                    game: G
                  })
                }, e))
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: j.column,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-xs/semibold",
              children: p.default.Messages.ABOUT
            }), (null == R ? void 0 : R.summary) != null && (0, a.jsx)(c.Text, {
              lineClamp: 4,
              variant: "text-sm/semibold",
              className: j.summary,
              children: null == R ? void 0 : R.summary
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/semibold",
              children: p.default.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, a.jsx)("div", {
              className: j.row,
              style: {},
              children: S.slice(0, 4).map(e => (0, a.jsx)(I, {
                applicationId: e,
                channel: C,
                onClose: A
              }, e))
            })]
          })]
        })
      })]
    })
  };
l.default = _
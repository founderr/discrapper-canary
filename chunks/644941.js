s.r(l), s(47120);
var n = s(735250),
  a = s(470079),
  t = s(120356),
  i = s.n(t),
  o = s(442837),
  r = s(481060),
  c = s(224706),
  d = s(812206),
  u = s(168551),
  m = s(26033),
  x = s(669764),
  I = s(768581),
  g = s(814225),
  h = s(567409),
  v = s(383895),
  E = s(183391),
  j = s(689938),
  p = s(997844);
let A = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      l = arguments.length > 1 ? arguments[1] : void 0;
    if (null == e) return [];
    let s = {};
    return e.forEach(e => {
      if (!(0, m.d)(e)) return;
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
    } = e, [i, c] = (0, o.Wu)([x.Z, d.Z], () => [x.Z.getGame(s), d.Z.getApplication(s)]);
    if (null == i) return null;
    let u = i.coverImageUrl;
    return (0, n.jsx)(r.Clickable, {
      className: p.clickable,
      onClick: async () => {
        (0, r.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(O, {
          applicationId: s,
          channel: a,
          ...e
        }))), await new Promise(e => setTimeout(e, 10)), t()
      },
      children: (0, n.jsx)("img", {
        src: u,
        className: p.similarGames,
        alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
          game: null !== (l = null == c ? void 0 : c.name) && void 0 !== l ? l : null == i ? void 0 : i.name
        })
      })
    })
  },
  O = e => {
    var l, s, t, O;
    let {
      applicationId: C,
      channel: T,
      transitionState: _,
      onClose: M
    } = e, {
      entries: R
    } = (0, h.Z)(), f = a.useMemo(() => {
      var e;
      return null !== (e = null == R ? void 0 : R.filter(e => (0, m.d)(e) && e.extra.application_id === C)) && void 0 !== e ? e : []
    }, [R, C]), G = a.useMemo(() => A(R, C), [R, C]);
    a.useEffect(() => {
      c.Z.getDetectableGamesSupplemental([C, ...G])
    }, [C, G]);
    let Z = d.Z.getApplication(C),
      L = (0, o.e7)([x.Z], () => x.Z.getGame(C)),
      S = null !== (s = null == L ? void 0 : L.name) && void 0 !== s ? s : null == Z ? void 0 : Z.name,
      P = a.useMemo(() => null == L ? void 0 : L.genres.map(g.P3).join(", "), [L]),
      b = null == Z ? void 0 : Z.getIconURL(160, I.$k ? "webp" : "png"),
      D = null !== (t = null == L ? void 0 : L.coverImageUrl) && void 0 !== t ? t : b,
      F = null !== (O = null == L ? void 0 : L.artwork) && void 0 !== O ? O : [],
      y = null == L ? void 0 : L.websites,
      {
        clientThemesClassName: w
      } = (0, u.ZP)();
    return (0, n.jsxs)(r.ModalRoot, {
      transitionState: _,
      size: r.ModalSize.DYNAMIC,
      className: i()(w, p.gameProfileModal),
      children: [(0, n.jsxs)("div", {
        className: p.gameArtHero,
        children: [(0, n.jsx)("div", {
          className: p.gameArtBackground,
          style: {
            backgroundImage: 'url("'.concat(null == L ? void 0 : null === (l = L.artwork) || void 0 === l ? void 0 : l[0], '")')
          }
        }), (0, n.jsx)("div", {
          className: p.gameHeroGradient
        })]
      }), (0, n.jsxs)("div", {
        className: i()(p.content, p.column, p.headerInfo),
        children: [(0, n.jsx)("div", {
          className: p.logoWrapper,
          children: null != D && (0, n.jsx)("img", {
            className: p.logo,
            src: D,
            alt: j.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
              game: S
            })
          })
        }), (0, n.jsxs)("div", {
          className: i()(p.row, p.gapSm, p.gameDetails),
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: S
            }), (0, n.jsxs)("div", {
              className: i()(p.row, p.gapSm),
              children: [(0, n.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: "text-muted",
                children: P
              }), null != b && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(r.Text, {
                  variant: "text-sm/semibold",
                  children: " • "
                }), (0, n.jsx)("img", {
                  src: b,
                  height: 16,
                  alt: j.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({
                    game: S
                  })
                })]
              })]
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsxs)(r.Button, {
              innerClassName: p.followButton,
              color: r.Button.Colors.PRIMARY,
              children: [(0, n.jsx)(r.BellIcon, {
                color: r.tokens.colors.WHITE
              }), j.Z.Messages.FOLLOW]
            })
          })]
        })]
      }), (0, n.jsx)(r.Scroller, {
        children: (0, n.jsxs)("div", {
          className: i()(p.content, p.mainContent),
          children: [(0, n.jsxs)("div", {
            className: p.column,
            children: [(0, n.jsx)(r.Heading, {
              variant: "heading-md/bold",
              color: "text-primary",
              children: j.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }), (0, n.jsxs)("div", {
              className: p.section,
              children: [0 === f.length && (0, n.jsx)(r.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                className: p.emptyFriendsWhoPlay,
                children: j.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
              }), (0, n.jsx)("div", {
                className: i()(p.column, p.gapNone),
                children: null == f ? void 0 : f.map((e, l) => (0, n.jsx)(v.Z, {
                  style: {
                    animationDelay: "".concat(.5 + .15 * l, "s")
                  },
                  entry: e,
                  channel: T,
                  onClose: M
                }, e.id))
              })]
            }), F.length > 0 && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(r.Heading, {
                variant: "heading-md/bold",
                children: j.Z.Messages.GAME_PROFILE_SCREENSHOTS
              }), (0, n.jsx)(r.Scroller, {
                style: {
                  overflowY: "visible"
                },
                className: i()(p.row, p.imageScroller),
                orientation: "horizontal",
                children: F.map(e => (0, n.jsx)("img", {
                  src: e,
                  className: p.gameArtwork,
                  alt: j.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({
                    game: S
                  })
                }, e))
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: p.column,
            children: [(0, n.jsx)(r.Heading, {
              variant: "heading-md/bold",
              children: j.Z.Messages.ABOUT
            }), (null == L ? void 0 : L.summary) != null && (0, n.jsx)(r.Text, {
              lineClamp: 4,
              variant: "text-sm/semibold",
              className: p.summary,
              children: null == L ? void 0 : L.summary
            }), (0, n.jsx)(E.Z, {
              websites: y
            }), (0, n.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: j.Z.Messages.GAME_PROFILE_ALSO_PLAYING
            }), (0, n.jsx)("div", {
              className: p.row,
              style: {},
              children: G.slice(0, 4).map(e => (0, n.jsx)(N, {
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
l.default = O
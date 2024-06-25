n.d(t, {
  m: function() {
    return b
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(613828),
  o = n(772848),
  c = n(442837),
  u = n(481060),
  d = n(2052),
  h = n(40851),
  m = n(607070),
  E = n(100527),
  p = n(906732),
  g = n(703656),
  f = n(210887),
  C = n(390322),
  _ = n(626135),
  I = n(348600),
  x = n(566620),
  T = n(138138),
  N = n(127255),
  Z = n(5200),
  S = n(558317),
  v = n(403404),
  A = n(701488),
  M = n(981631),
  R = n(689938),
  j = n(496),
  L = n(587952),
  O = n(736733),
  P = n(463738);
let y = "vc-activities-".concat((0, o.Z)()),
  b = i.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: o,
      onMouseEnter: b,
      onMouseLeave: D,
      onClick: U,
      className: k
    } = e, {
      enabled: w
    } = I.Z.useExperiment({
      location: "8009ca_3"
    }), {
      enableRythmMiniShelfBanner: H
    } = T.u.useExperiment({
      location: "ActivitiesMiniShelf"
    }, {
      autoTrackExposure: !0
    }), G = (0, c.e7)([f.Z], () => f.Z.getState().theme), B = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), {
      id: V,
      guild_id: F
    } = n;
    i.useEffect(() => {
      _.default.track(M.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: V,
        guild_id: F
      })
    }, [V, F]), i.useEffect(() => {
      !s && o()
    }, [o, s]);
    let z = (0, h.bp)(),
      {
        analyticsLocations: W
      } = (0, p.ZP)(E.Z.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: Y
      } = (0, p.ZP)([...W, E.Z.ACTIVITIES_MINI_SHELF_BANNER]),
      K = z === M.IlC.POPOUT,
      q = (0, d.O)(),
      X = function(e, t) {
        return (0, N.Z)({
          guildId: e,
          channel: t
        }).slice(0, 5)
      }(n.getGuildId(), n);
    i.useEffect(() => {
      let e = setTimeout(() => x.ux(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let Q = i.useCallback(() => {
        var e;
        (0, v.Z)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: q.location,
          openInPopout: K,
          analyticsLocations: W,
          opensAppLauncherModal: !0
        }), D(), U()
      }, [q, W, n, U, D, K]),
      J = i.useCallback(e => {
        b(), _.default.track(M.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [b, n]),
      $ = w ? (0, l.jsxs)(r.rU, {
        to: M.Z5c.ACTIVITIES,
        children: [(0, l.jsx)("img", {
          alt: R.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === G ? L : O,
          className: j.poster
        }), (0, l.jsx)("div", {
          className: j.posterDivider
        })]
      }) : H ? (0, l.jsxs)(u.Clickable, {
        className: a()(j.clickableBanner),
        onClick: () => {
          U(), o(), (0, g.uL)(M.Z5c.ACTIVITY_DETAILS(A.NC), void 0, void 0, Y)
        },
        children: [(0, l.jsx)("img", {
          alt: R.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_RYTHM_POSTER_ALT,
          src: P,
          className: j.poster
        }), (0, l.jsx)("div", {
          className: j.posterDivider
        })]
      }) : null;
    return (0, l.jsx)(p.Gt, {
      value: W,
      children: (0, l.jsx)(C.Z, {
        children: (0, l.jsxs)(u.Dialog, {
          ref: t,
          "aria-labelledby": y,
          className: k,
          children: [(0, l.jsx)(u.HeadingLevel, {
            forceLevel: 2,
            children: (0, l.jsx)(u.HiddenVisually, {
              children: (0, l.jsx)(u.H, {
                id: y,
                children: R.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, l.jsxs)("div", {
            className: j.container,
            onMouseEnter: J,
            onMouseLeave: D,
            children: [(0, l.jsxs)("div", {
              className: j.titleContainer,
              children: [(0, l.jsxs)("div", {
                className: j.titleLeft,
                children: [(0, l.jsx)(u.ActivitiesIcon, {
                  size: "md",
                  className: j.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, l.jsx)(u.Text, {
                  variant: "eyebrow",
                  children: R.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, l.jsxs)(u.Clickable, {
                className: j.titleRight,
                onClick: Q,
                children: [(0, l.jsx)(u.Text, {
                  variant: "eyebrow",
                  children: R.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, l.jsx)(u.ChevronSmallRightIcon, {
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: j.titleRightIcon
                })]
              })]
            }), (0, l.jsx)(p.Gt, {
              value: Y,
              children: $
            }), (0, l.jsxs)("div", {
              className: j.activityContainer,
              children: [X.map(e => (0, l.jsx)(Z.Y, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  o(), U()
                },
                aspectRatio: Z.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: j.activitySuggestion
              }, e.application.id)), (0, l.jsx)("div", {
                className: a()(j.wumpusRocketOuterContainer, {
                  [j.wumpusReducedMotion]: B
                }),
                children: (0, l.jsx)("div", {
                  className: j.wumpusRocketInnerContainer,
                  children: (0, l.jsx)(S.Z, {
                    className: j.wumpusRocket
                  })
                })
              })]
            })]
          })]
        })
      })
    })
  })